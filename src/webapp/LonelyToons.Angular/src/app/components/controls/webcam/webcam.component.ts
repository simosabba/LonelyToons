import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AnalyzerService } from '../../../services/analyzer/analyzer.service';

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})
export class WebcamComponent implements OnInit, AfterViewInit {

  @ViewChild('video')
  video: ElementRef;

  @ViewChild('canvas')
  canvas: ElementRef;

  captures: Array<any>;

  constructor(private analyzerService: AnalyzerService) {
      this.captures = [];
  }

  ngOnInit() {
      setInterval (() => {
        this.capture();
      }, 5000);
  }

  ngAfterViewInit() {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
              this.video.nativeElement.src = window.URL.createObjectURL(stream);
              this.video.nativeElement.play();
          });
      }
  }

  capture() {

    if (this.analyzerService.isLoadingStatus() === true) {
        return;
    }

    const context = this.canvas.nativeElement.getContext('2d').drawImage(this.video.nativeElement, 0, 0, 640, 480);
    const image = this.canvas.nativeElement.toDataURL('image/png');

    this.captures.push(image);
    this.analyzerService.sendImage(image);
  }

}
