import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var settings: any;

@Injectable({
  providedIn: 'root'
})
export class AnalyzerClientService {

  baseAddress: string = settings.endpoints.Analyzer;

  constructor(private http: HttpClient) {
  }

  analyze(request: AnalyzeRequest) {
    return this.http.post<AnalyzeResponse>(this.getAddress('pic'), request.imageContent);
  }

  private getAddress(path: string) {
    return this.baseAddress + path;
  }
}

export class AnalyzeRequest {
  imageContent: string;
}

export class AnalyzeResponse {
  status: string;
  score: StatusDict;
}

export class StatusDict {
  Angry: string;
  Disgust: string;
  Fear: string;
  Happy: string;
  Neutral: string;
  Sad: string;
  Surprise: string;
}
