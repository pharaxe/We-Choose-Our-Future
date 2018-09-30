import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CheckIfRegisteredComponent } from './content/steps/check-if-registered/check-if-registered.component';
import { ChooseCandidatesComponent } from './content/steps/choose-candidates/choose-candidates.component';
import { GoVoteComponent } from './content/steps/go-vote/go-vote.component';
import { RegistrationOptionsComponent } from './content/steps/registration-options/registration-options.component';
import {LandingComponent} from './landing/landing.component';
import { ContentComponent } from './content/content.component';
import { CountdownComponent } from './content/countdown/countdown.component';
import {LandingModule} from './landing/landing.module';
import {CandidateCardComponent} from './content/steps/choose-candidates/candidate-card/candidate-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CheckIfRegisteredComponent,
    ChooseCandidatesComponent,
    GoVoteComponent,
    RegistrationOptionsComponent,
    ContentComponent,
    CountdownComponent,
    CandidateCardComponent
  ],
  imports: [
    LandingModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
