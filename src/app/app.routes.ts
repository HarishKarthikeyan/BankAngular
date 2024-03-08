import { Routes } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ChangePinComponent } from './change-pin/change-pin.component';
import { CheckBalanceComponent } from './check-balance/check-balance.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { CheckOtpComponent } from './check-otp/check-otp.component';
import { OtherBankComponent } from './other-bank/other-bank.component';

export const routes: Routes = [
  { path: '', redirectTo: '/frontpage', pathMatch: 'full' },
  { path: 'frontpage', component: FrontPageComponent },
  { path: 'mainpage', component: MainPageComponent },
  { path: 'changepin', component: ChangePinComponent },
  { path: 'checkbalance', component: CheckBalanceComponent },
  { path: 'deposit', component: DepositComponent },
  { path: 'withdraw', component: WithdrawComponent },
  { path: 'checkotp', component: CheckOtpComponent },
  { path: 'otherbank', component: OtherBankComponent },
];
