import {CandidateCard} from './index';

export interface Election {
  name: string;
  termLength: number;
  cards: CandidateCard[];
}
