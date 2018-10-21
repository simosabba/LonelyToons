import { AnalyzerClientService, AnalyzeRequest, AnalyzeResponse } from './../../clients/analyzer-client.service';
import { Injectable, Inject, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyzerService {

  statusEmitter = new EventEmitter<AnalyzeResponse>();

  constructor(private analyzerClient: AnalyzerClientService) {
  }

  sendImage(image: any) {
    const request = new AnalyzeRequest();
    request.imageContent = image;
    this.analyzerClient.analyze(request).subscribe(x => {
      this.statusEmitter.emit(x);
    });
  }

}


