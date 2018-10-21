import { Component, OnInit } from '@angular/core';

declare var Typed: any;

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  private jokes: string[] = [
    'What is an astronaut\'s favorite place on a computer?                <br/>The space bar.'
  ];

  constructor() { }

  ngOnInit() {
    this.showJoke();
  }

  showJoke() {
    const typed = new Typed('.joke', {
      strings: [this.getRandomJoke()],
      typeSpeed: 40
    });
  }

  private getRandomJoke() {
    return this.jokes[Math.floor(Math.random() * this.jokes.length)];
  }

}
