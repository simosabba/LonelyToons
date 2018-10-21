import { Component, OnInit } from '@angular/core';
import { AnalyzerService } from '../../../services/analyzer/analyzer.service';
import { AnalyzeResponse } from '../../../clients/analyzer-client.service';

@Component({
  selector: 'app-my-assistant',
  templateUrl: './my-assistant.component.html',
  styleUrls: ['./my-assistant.component.css']
})
export class MyAssistantComponent implements OnInit {

  isLoading = true;
  isOk = true;
  showJoke = false;
  showVideo = false;

  constructor(private analyzerService: AnalyzerService) { }

  ngOnInit() {
    this.analyzerService.statusEmitter.subscribe((x: string) => {
      this.processStatus(x);
    });
  }

  private processStatus(status: string) {
    switch (status.toLocaleLowerCase()) {
      case 'sad':
      case 'fear':
        this.helpHappyGuy();
        break;
      default:
        this.helpSadGuy();
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

    if (!this.showJoke) {
      this.showJoke = true;
      this.showVideo = false;
      return;
    }

    if (this.showJoke) {
      this.showJoke = false;
      this.showVideo = true;
    }
  }
}
