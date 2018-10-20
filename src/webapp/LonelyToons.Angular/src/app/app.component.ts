import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private isAppReady = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.isAppReady = true;
    }, 2000);
  }

  isLoading() {
    return !this.isAppReady;
  }
}
