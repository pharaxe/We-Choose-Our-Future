import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CandidateCardComponent} from './candidate-card.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CandidateCardComponent
  ],
  declarations: [
    CandidateCardComponent
  ],
  providers: []
})
export class CandidateCardModule {}
