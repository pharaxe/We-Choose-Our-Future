import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventTrackerModule} from './event-tracker/event-tracker.module';
import {CandidateCardModule} from './candidate-card/candidate-card.module';
import {LandingComponent} from './landing.component';

@NgModule({
  imports: [
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