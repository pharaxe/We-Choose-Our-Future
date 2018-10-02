import { Component, OnInit } from '@angular/core';
import {Papa} from 'ngx-papaparse';
import {Election, Party} from '../../../landing/types';

@Component({
  selector: 'app-choose-candidates',
  templateUrl: './choose-candidates.component.html',
  styleUrls: ['./choose-candidates.component.css']
})
export class ChooseCandidatesComponent implements OnInit {
//  Democratic	4	1
  public data = 'Position,Candidate,Party,Term Length,Vote For...,Official Website,Image\n' +
    'Governor and Lieutenant Governor,JB Pritzker & Juliana Stratton,Democratic,4,1,https://www.jbpritzker.com/,assets/Governor/JB Pritzker.jpg\n' +
    'Governor and Lieutenant Governor,Bruce Rauner & Evelyn Sanguinetti,Republican,4,1,https://www.brucerauner.com/accomplishments/,assets/Governor/Bruce\ Rauner.jpg,\n' +
    'Governor and Lieutenant Governor,Grayson Kash Jackson & Sanjeev Mohip,Libertarian,4,1,https://www.kash2018.com/,assets/Governor/Grayson\ Kash\ Jackson.jpg\n' +
    'Governor and Lieutenant Governor,William \'Sam\' McCann & Aaron Merreighn,Conservative,4,1,https://mccannforillinois.com/,assets/Governor/William\ _Sam_\ McCann.jpg\n' +
    'Secretary of State,Jesse White,Democratic,4,1,http://www.cyberdriveillinois.com/,assets/Secretary\ of\ State/Jesse\ White.jpg\n' +
    'Secretary of State,Jason Helland,Republican,4,1,https://jasonhelland.com/,assets/Secretary\ of\ State/Jason\ Helland.jpg\n' +
    'Secretary of State,Steve Dutner,Libertarian,4,1,http://stevedutnerforil.com/,assets/Secretary\ of\ State/Steve\ Dutner.jpg\n' +
    'Treasurer,Michael W. Frerichs,Democratic,4,1,https://www.illinoistreasurer.gov/,assets/Treasurer/Michael\ W.\ Frerichs.jpg\n' +
    'Treasurer,Jim Dodge,Republican,4,1,https://jimdodge.com/,assets/Treasurer/Jim\ Dodge.jpg\n' +
    'Treasurer,Michael Leheney,Libertarian,4,1,https://leheneyforillinois.com/,assets/Treasurer/Michael\ Leheney.jpg\n' +
    'County Executive,Darlene Kloeppel,Democratic,4,1,https://www.darlenekloeppel.com/,assets/County\ Executive/Darlene\ Kloeppel.jpg\n' +
    'County Executive,Gordy Hulten,Republican,4,1,https://champaigncountyclerk.com/about,assets/County\ Executive/Gordy\ Hulten.jpg\n' +
    'County Clerk,Aaron Ammons,Democratic,4,1,https://www.aaronammons.com/,assets/County\ Clerk/Aaron\ Ammons.jpg\n' +
    'County Clerk,Matt Grandone,Republican,4,1,https://www.mattgrandone.com/,assets/County\ Clerk/Matt\ Grandone.jpg\n' +
    'County Treasurer,Laurel Lunt Prussing,Democratic,4,1,https://www.laurelprussing.com/,assets/County\ Treasurer/Laurel\ Lunt\ Prussing.jpg\n' +
    'County Treasurer,John Farney,Republican,4,1,https://www.johnfarney.com/,assets/County\ Treasurer/John\ Farney.jpg\n' +
    'Sheriff,Dustin Heuerman,Democratic,4,1,https://www.dustinforsheriff.com/,assets/Sheriff/Dustin\ Heuerman.jpg\n' +
    'Sheriff,Allen E Jones,Republican,4,1,https://www.voteallenjones.com/,assets/Sheriff/Allen\ E\ Jones.jpg\n' +
    '"Attorney General, State of Illinois",Kwame Raoul,Democratic,4,1,https://kwameraoul.com/,assets/Attorney\ General/Kwame\ Raoul.jpg\n' +
    '"Attorney General, State of Illinois",Erika Harold,Republican,4,1,https://erikaharold.com/get-involved/volunteer,assets/Attorney\ General/Erika\ Harold.jpg\n' +
    '"Attorney General, State of Illinois",Bubba Harsy,Libertarian,4,1,https://bubbaharsyforillinois.com/,assets/Attorney\ General/Bubba\ Harsy.jpg\n' +
    'Comptroller,Susana A. Mendoza,Democratic,4,1,https://illinoiscomptroller.gov/about/susana-a-mendoza/,assets/Comptroller/Susana\ A.\ Mendoza.jpg\n' +
    'Comptroller,Darlene Senger,Republican,4,1,https://darlenesenger.com/,assets/Comptroller/Darlene\ Senger.jpg\n' +
    'Comptroller,Claire Ball,Libertarian,4,1,http://claireballforillinois.com/,assets/Comptroller/Claire\ Ball.jpg\n' +
    'Auditor,George Danos,Democratic,2,1,http://danosforauditor.com/,assets/Auditor/George\ Danos.jpg\n' +
    'Auditor,Diane Michaels,Republican,2,1,https://www.champaigncountyrepublicans.org/diane-michaels-county-auditor,assets/Auditor/Diane\ Michaels.jpg\n' +
    'Regional Superintendent of Schools,Gary Lewis,Republican,4,1,https://www.ballotready.org/il/regional-superintendent-of-schools-region-9/gary-lewis/,assets/Regional\ Superintendent\ of\ Schools/Gary\ Lewis.jpg\n' +
    '"Judge of the Appellate Court, 4th Judicial District (To fill the vacancy of the\n' +
    'Hon. Arnold F. Blockman)",Ramona Sullivan,Democratic,6,1,https://ramonamsullivan.wixsite.com/mysite/,assets/Appellate 4th /RamonaSullivan.png\n' +
    '"Judge of the Appellate Court, 4th Judicial District (To fill the vacancy of the\n' +
    'Hon. Arnold F. Blockman)",Roger B. Webber,Republican,6,1,https://ballotpedia.org/Roger_B._Webber,assets/Appellate 4th /RodgerWeber.png\n' +
    'Judge of the Circuit Court 6th Judicial Circuit,Chad Beckett,Democratic,6,1,http://www.chadbeckett.com/,assets/Judge\ of\ the\ Circuit\ Court\ 6th\ Judicial\ Circuit/Chad\ Beckett.jpg\n' +
    'Judge of the Circuit Court 6th Judicial Circuit,Randy Rosenbaum,Republican,6,1,https://judgerandyrosenbaum.com/,assets/Judge\ of\ the\ Circuit\ Court\ 6th\ Judicial\ Circuit/Randy\ Rosenbaum.jpg';

    // I took out some candidates that aren't general to everyone in the county.
    // '"Representative in the General Assembly, 103rd State Representative District",Carol Ammons,Democratic,2,1,https://www.carolammons.com/,assets/Representative\ in\ the\ General\ Assembly/Carol\ Ammons.jpg\n' +
    // '"County Board Member, County Board District 8",Stephanie Fortado,Democratic,4,1,https://www.ballotready.org/il/champaign-county-board-member-district-8/stephanie-l-fortado/,assets/County\ Board\ Member/Stephanie\ Fortado.jpg\n' +
    // '"Judge of the Appellate Court, 4th Judicial District (Representative In Congress, 13th Congressional District)","Thomas M. Harris, Jr.",Republican,10,1,http://www.illinoiscourts.gov/AppellateCourt/Judges/Bio_HarrisT.asp,assets/Appellate 4th /ThomasMHarris.png\n' +
    // '"Representative In Congress, 13th Congressional District",Betsy Dirksen Londrigan,Democratic,2,1,https://www.betsydirksenlondrigan.com/,assets/Representative\ In\ Congress/Betsy\ Dirksen\ Londrigan.jpg\n' +
    // '"Representative In Congress, 13th Congressional District",Rodney Davis,Republican,2,1,https://rodneydavis.house.gov/,assets/Representative\ In\ Congress/Rodney\ Davis.jpg\n' +
    

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
  public decoratedData = [];
  //
  constructor(private papa: Papa) {
    this.papa.parse(this.data,{
      header: true,
      complete: (result) => {
        this.decorateData(result.data)
      }
    });
  }
  public ngOnInit() {}

  public decorateData(data) {
    console.log('data: ', data);


    const position = this.getUniqueValuesOfKey(data, 'Position');
    console.log('position', position);
    position.forEach((item) => {
      const canidates = data.filter((dataPoint) => item.election === dataPoint.Position);
      this.shuffleArray(canidates); // so party order is randomize
      this.decoratedData.push({
        name: item.election,
        termLength: item.term,
        cards: this.getCards(canidates),
      });
    });

    console.log('decoratedData: ' + this.decoratedData);
  }

  private getUniqueValuesOfKey(array, key){
    const result = [];
    array.reduce((carry, item) => {
      if (item[key] && carry.indexOf(item[key]) === -1) {
        carry.push(item[key]);
        result.push({
          election: item[key],
          term: item['Term Length']
        });
      }
      return carry;
    }, []);

    return result;
  }

  private getCards(array) {
    console.log('array', array);
    return array.map((card) => {
      return {
        name: card.Candidate,
        pictureUrl: card.Image,
        websiteUrl: card['Official Website'],
        party: card.Party
      };
    });
  }

  private shuffleArray(array) {
     for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
     }
  }

}
