import { AnalyzerClientService, AnalyzeRequest, AnalyzeResponse } from './../../clients/analyzer-client.service';
import { Injectable, Inject, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyzerService {

  statusEmitter = new EventEmitter<AnalyzeResponse>();
  statusEmitter2 = new EventEmitter<AnalyzeResponse>();

  constructor(private analyzerClient: AnalyzerClientService) {
  }

  sendImage(image: any) {
    const request = new AnalyzeRequest();
    request.imageContent = (<string>image).substr('data:image/png;base64,'.length);
    this.analyzerClient.analyze(request).subscribe((x: AnalyzeResponse) => {
      this.statusEmitter.next(x);
      this.statusEmitter2.next(x);
    });
  }

}


