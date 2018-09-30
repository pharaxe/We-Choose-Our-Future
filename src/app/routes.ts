import {Routes} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {ContentComponent} from './content/content.component';

export const appRoutes
: Routes = [
  {path: 'landing', component: LandingComponent },
  {path: '', component: ContentComponent },
  {path: 'homepage', redirectTo: '', pathMatch: 'full'},
  {path: '**', redirectTo: '', pathMatch: 'full'}
  ];
