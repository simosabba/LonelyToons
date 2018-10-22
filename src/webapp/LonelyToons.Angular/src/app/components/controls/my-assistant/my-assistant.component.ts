import { Component, OnInit } from '@angular/core';
import { AnalyzerService } from '../../../services/analyzer/analyzer.service';
import { AnalyzeResponse, StatusDict } from '../../../clients/analyzer-client.service';

declare var Chart: any;
declare var Chartist: any;

@Component({
  selector: 'app-my-assistant',
  templateUrl: './my-assistant.component.html',
  styleUrls: ['./my-assistant.component.css']
})
export class MyAssistantComponent implements OnInit {

  score: StatusDict;
  status: string;
  isLoading = true;
  isOk = true;
  showJoke = false;
  showVideo = false;

  constructor(private analyzerService: AnalyzerService) { }

  ngOnInit() {
    this.analyzerService.statusEmitter.subscribe((x: AnalyzeResponse) => {
      this.score = x.score;
      this.processStatus(x.status);
      this.drawPie(x);
    });
  }

  private processStatus(status: string) {
    this.status = status.toLocaleLowerCase();
    switch (status.toLocaleLowerCase()) {
      case 'sad':
      case 'fear':
      case 'angry':
        this.helpSadGuy();
        break;
      default:
        this.helpHappyGuy();
        break;
    }
  }

  private helpHappyGuy() {
    this.isLoading = false;
    this.isOk = true;
    this.showJoke = false;
    this.showVideo = false;
  }

  private helpSadGuy() {
    this.isLoading = false;
    this.isOk = false;

    this.showJoke = true;
    this.showVideo = false;

    // if (!this.showJoke) {
    //   this.showJoke = true;
    //   this.showVideo = false;
    //   return;
    // }

    // if (this.showJoke) {
    //   this.showJoke = false;
    //   this.showVideo = true;
    // }
  }

  private drawPie(chartData: AnalyzeResponse) {

    if (!chartData) {
      return;
    }

    const data = {
      labels: ['Angry', 'Disgust', 'Fear', 'Happy', 'Neutral', 'Sad', 'Surprise'],
      series: [
        parseFloat(chartData.score.Angry) * 100,
        parseFloat(chartData.score.Disgust) * 100,
        parseFloat(chartData.score.Fear) * 100,
        parseFloat(chartData.score.Happy) * 100,
        parseFloat(chartData.score.Neutral) * 100,
        parseFloat(chartData.score.Sad) * 100,
        parseFloat(chartData.score.Surprise) * 100
      ]
    };

    const options = {
      labelInterpolationFnc: function(value) {
        return value[0];
      }
    };

    const responsiveOptions = [
      ['screen and (min-width: 640px)', {
        chartPadding: 30,
        labelOffset: 100,
        labelDirection: 'explode',
        labelInterpolationFnc: function(value) {
          return value;
        }
      }],
      ['screen and (min-width: 1024px)', {
        labelOffset: 50,
        chartPadding: 10
      }]
    ];

    new Chartist.Pie('.status-chart', data, options, responsiveOptions);
  }

  private drawChart(data: AnalyzeResponse) {
    console.log('refreshing chart');
    const colors = ['#007bff', '#28a745', '#333333', '#c3e6cb', '#dc3545', '#6c757d'];

    /* 3 donut charts */
    const donutOptions = {
      cutoutPercentage: 85,
      legend: {position: 'bottom', padding: 5, labels: {pointStyle: 'circle', usePointStyle: true}}
    };

    // donut 1
    const chDonutData1 = {
        labels: ['Bootstrap', 'Popper', 'Other'],
        datasets: [
          {
            backgroundColor: colors.slice(0, 3),
            borderWidth: 0,
            data: [74, 11, 40]
          }
        ]
    };

    setTimeout(() => {
      const chDonut1 = document.getElementById('chDonut1');
      console.log(chDonut1);
      console.log(chDonutData1);
      console.log(donutOptions);
      if (chDonut1) {
        console.log('drawing');
        const chart = new Chart(chDonut1, {
            type: 'pie',
            data: chDonutData1,
            options: donutOptions
        });
      }
    }, 200);
  }
}
