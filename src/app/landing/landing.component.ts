import {Component, OnInit, OnDestroy} from '@angular/core';
import {Election, Party} from './types/index'

@Component({
  providers: [],
  selector: 'pm-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit, OnDestroy {
  //  Democratic 	4	1
  public events = [
    {
      label: 'event 1',
      date: '1541509200000',
      url: '.'
    },
    {
      label: 'event 2',
      date: '1541509200000',
      url: '.'
    },
    {
      label: 'event 3',
      date: '1541509200000',
      url: '.'
    }

  ];
  public electionList: Election[] = [
    {
      name: 'Governor and Lieutenant Governor',
      termLength: 4,
      cards: [
        {
          name: 'JB Pritzker & Juliana Stratton',
          pictureUrl: '../../assets/Governor/JB Pritzker.jpg',
          websiteUrl: 'https://www.jbpritzker.com/',
          party: Party.Democrat
        }
      ]
    }
  ];
  //
  constructor() {}
  public ngOnInit() {}
  public ngOnDestroy() {}
}
