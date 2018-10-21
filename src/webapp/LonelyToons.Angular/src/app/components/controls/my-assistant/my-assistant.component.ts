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

  constructor(private analyzerService: AnalyzerService) { }

  ngOnInit() {
    this.analyzerService.statusEmitter.subscribe((x: AnalyzeResponse) => {
      this.processStatus(x);
    });
  }

  private processStatus(response: AnalyzeResponse) {
    switch (response.status) {
      case 'ok':
        this.isLoading = true;
        this.isOk = true;
        break;
    }
  }

}
