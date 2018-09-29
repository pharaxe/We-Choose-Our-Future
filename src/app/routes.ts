import {Routes} from '@angular/router';
import {LandingComponent} from './landing/landing.component';

export const appRoutes
: Routes = [
  {path: 'landing', component: LandingComponent },
  {path: '', redirectTo: 'landing', pathMatch: 'full'},
  {path: '**', redirectTo: 'landing', pathMatch: 'full'}
  ];
