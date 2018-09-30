import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventTrackerModule} from './event-tracker/event-tracker.module';
import {CandidateCardModule} from './candidate-card/candidate-card.module';
import {LandingComponent} from './landing.component';
import { PapaParseModule } from 'ngx-papaparse';

@NgModule({
  imports: [
    PapaParseModule,
    EventTrackerModule,
    CandidateCardModule,
    CommonModule
  ],
  exports: [
    LandingComponent
  ],
  declarations: [
    LandingComponent
  ],
  providers: []
})
export class LandingModule {}