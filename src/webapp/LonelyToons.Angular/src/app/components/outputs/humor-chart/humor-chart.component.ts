import { Component, OnInit } from '@angular/core';
import { AnalyzerService } from '../../../services/analyzer/analyzer.service';
import { AnalyzeResponse } from '../../../clients/analyzer-client.service';

declare var Chart: any;

@Component({
  selector: 'app-humor-chart',
  templateUrl: './humor-chart.component.html',
  styleUrls: ['./humor-chart.component.css']
})
export class HumorChartComponent implements OnInit {

  constructor(private analyzerService: AnalyzerService) { }

  ngOnInit() {
    this.analyzerService.statusEmitter2.subscribe((x: AnalyzeResponse) => {
      this.drawChart(x);
    });
  }

  private drawChart(data: AnalyzeResponse) {
    console.log('refreshing chart');
    const colors = ['#007bff', '#28a745', '#333333', '#c3e6cb', '#dc3545', '#6c757d'];

    /* 3 donut charts */
    const donutOptions = {
      cutoutPercentage: 85,
      legend: {position: 'bottom', padding: 5, labels: {pointStyle: 'circle', usePointStyle:true}}
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

    const chDonut1 = document.getElementById('chDonut1');
    if (chDonut1) {
      new Chart(chDonut1, {
          type: 'pie',
          data: chDonutData1,
          options: donutOptions
      });
    }

    // // donut 2
    // const chDonutData2 = {
    //     labels: ['Wips', 'Pops', 'Dags'],
    //     datasets: [
    //       {
    //         backgroundColor: colors.slice(0,3),
    //         borderWidth: 0,
    //         data: [40, 45, 30]
    //       }
    //     ]
    // };
    // const chDonut2 = document.getElementById('chDonut2');
    // if (chDonut2) {
    //   new Chart(chDonut2, {
    //       type: 'pie',
    //       data: chDonutData2,
    //       options: donutOptions
    //   });
    // }

    // // donut 3
    // var chDonutData3 = {
    //     labels: ['Angular', 'React', 'Other'],
    //     datasets: [
    //       {
    //         backgroundColor: colors.slice(0,3),
    //         borderWidth: 0,
    //         data: [21, 45, 55, 33]
    //       }
    //     ]
    // };
    // var chDonut3 = document.getElementById('chDonut3');
    // if (chDonut3) {
    //   new Chart(chDonut3, {
    //       type: 'pie',
    //       data: chDonutData3,
    //       options: donutOptions
    //   });
    // }
  }

}
