import {Component, OnInit, OnDestroy, Input} from '@angular/core';

@Component({
  providers: [],
  selector: 'pm-candidate-card',
  templateUrl: './candidate-card.component.html',
  styleUrls: ['./candidate-card.component.css'],
})
export class CandidateCardComponent implements OnInit, OnDestroy {
  @Input() name: string;
  @Input() pictureUrl: string;
  @Input() websiteUrl: string;
  @Input() party: string;

  constructor() {

  }

  public ngOnInit() {

  }
  public ngOnDestroy() {

  }

}
