import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-candidate-card',
    templateUrl: './candidate-card.component.html',
    styleUrls: ['./candidate-card.component.css']
})
export class CandidateCardComponent implements OnInit {
    @Input() name;
    @Input() party;
    @Input() websiteUrl;
    @Input() imageUrl;

    constructor() {

    }

    ngOnInit() {

    }

    public getPartyString(): void {
        return this.party.toUpperCase();
    }

    public getNameString(): void {
        return this.name;
    }

    public getImageUrl(): void {
        return this.imageUrl;
    }

    public getWebSiteUrl() {
      let url = '';
      if (!/^http[s]?:\/\//.test(this.websiteUrl)) {
        url += 'http://';
      }
      return url + this.websiteUrl;
    }
}
