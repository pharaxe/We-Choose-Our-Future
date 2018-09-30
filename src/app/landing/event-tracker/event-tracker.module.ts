import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventTrackerComponent} from './event-tracker.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    EventTrackerComponent
  ],
  declarations: [
    EventTrackerComponent
  ],
  providers: []
})
export class EventTrackerModule {}
