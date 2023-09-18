import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { MatchComponent } from './match/match.component';
import { SportsComponent } from './sports/sports.component';
import { BoComponent } from './bo/bo.component';
import { GirlComponent } from './girl/girl.component';
import { PaymentComponent } from './payment/payment.component';
import { SportsPaymentComponent } from './sports-payment/sports-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    MatchComponent,
    SportsComponent,
    BoComponent,
    GirlComponent,
    PaymentComponent,
    SportsPaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
