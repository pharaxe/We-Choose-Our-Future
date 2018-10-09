import {Component, OnInit, OnDestroy, Input} from '@angular/core';

@Component({
  providers: [],
  selector: 'app-event-tracker',
  templateUrl: './event-tracker.component.html',
  styleUrls: ['./event-tracker.component.css'],
})
export class EventTrackerComponent implements OnInit, OnDestroy {
  //  @Input() date: Date = new Date("Jan 5, 2019 15:37:25").getTime();
  @Input() date = new Date(1541509200000).getTime();
  @Input() label: string = 'General Election in...';
  @Input() url: string = '.';
  public countDownInterval;
  public time;
  constructor() {

  }
  public ngOnInit() {
    this.countDownInterval = setInterval(() => {
      this.calculateCountDown();
    }, 1000);
  }
  public ngOnDestroy() {}

  public calculateCountDown() {
    // Get todays date and time
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = this.date - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    //  this.time = `${days}:${hours}:${minutes}:${seconds}`;
    if (days < 0) {
      days = 0;
    }

    this.time = `${days}`;

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(this.countDownInterval);
      document.getElementById("demo").innerHTML = "TODAY!";
    }
  }
}
