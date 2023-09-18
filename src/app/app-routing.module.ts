import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { MatchComponent } from './match/match.component';
import { SportsComponent } from './sports/sports.component';
import { BoComponent } from './bo/bo.component';
import { GirlComponent } from './girl/girl.component';
import { PaymentComponent } from './payment/payment.component';
import { SportsPaymentComponent } from './sports-payment/sports-payment.component';

const routes: Routes = [
  {path:'',component:PageComponent},
  {path:'match',component:MatchComponent},
  {path:'sports',component:SportsComponent},
  {path:'boy',component:BoComponent},
  {path:'girl',component:GirlComponent},
  {path:'match/payment',component:PaymentComponent},
  {path:'sports/sportspayment',component:SportsPaymentComponent},
  {path:'boy/payment',component:PaymentComponent},
  {path:'girl/payment',component:PaymentComponent},
  {path:'payment',component:PageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
