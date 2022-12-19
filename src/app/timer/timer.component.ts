import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  @Input() runTimer: any
  constructor() { }

  ngOnInit(): void {
  }


  timer: any = 0
  intervel: any
  startTimer() {
    this.intervel = setInterval(() => {
      this.timer++;
    }, 1000);
  }
  stopTimer() {
    if (this.intervel) {
      clearInterval(this.intervel);
      this.timer = 0;
    }

  }


}
