import {Component, OnInit, Input, ViewChild, AfterViewInit} from "@angular/core";

@Component({
    selector: 'app-candidate-card',
    templateUrl: './candidate-card.component.html',
    styleUrls: ['./candidate-card.component.css']
})
export class CandidateCardComponent implements OnInit, AfterViewInit {
    @Input() name;
    @Input() party;
    @Input() websiteUrl;
    @Input() imageUrl;

    @ViewChild('candName') candName;

    constructor() {

    }

    ngOnInit() {

    }

    ngAfterViewInit() {
      // If we have a really long name, update the class for the font-size.
      if (this.name.length > 34) {
        this.candName.nativeElement.className = this.candName.nativeElement.className + ' text-long-name';
      }
    }

    public getPartyString(): void {
        return this.party;
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
