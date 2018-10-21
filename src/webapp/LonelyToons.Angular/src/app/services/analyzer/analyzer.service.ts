import { AnalyzerClientService, AnalyzeRequest, AnalyzeResponse } from './../../clients/analyzer-client.service';
import { Injectable, Inject, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyzerService {

  private isLoading = false;

  statusEmitter = new EventEmitter<AnalyzeResponse>();
  statusEmitter2 = new EventEmitter<AnalyzeResponse>();

  constructor(private analyzerClient: AnalyzerClientService) {
  }

  sendImage(image: any) {
    this.isLoading = true;
    const request = new AnalyzeRequest();
    request.imageContent = (<string>image).substr('data:image/png;base64,'.length);
    this.analyzerClient.analyze(request).subscribe((x: AnalyzeResponse) => {
      this.statusEmitter.next(x);
      this.statusEmitter2.next(x);
      this.isLoading = false;
    });
  }

  isLoadingStatus() {
    return this.isLoading;
  }

}


