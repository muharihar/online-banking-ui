import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {TokenComponent} from "./signup/token.component";
import {SignupComponent} from "./signup/signup.component";
import {UserAccountComponent} from "./user-account/user-account.component";
import {PrimaryTransactionComponent} from "./primary-transaction/primary-transaction.component";
import {UtilityComponent} from "./utility/utility.component";
import { CurrencyComponent } from './currency-converter/currency.component';
import {AccountComponent} from "./account/account.component";
import {ErrorComponent} from "./error/error.component";
import {HistoryComponent} from "./account/history.component";
import {PayorderComponent} from "./payorder/payorder.component";
import {PayorderViewComponent} from "./payorder/poview.components";


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'token',
    component: TokenComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'userProfile',
    component: UserAccountComponent
  },
  {
    path: 'primaryTransaction/:username',
    component: PrimaryTransactionComponent
  },
  {
    path: 'payorder',
    component: PayorderComponent
  },
  {
    path: 'viewpayorder',
    component: PayorderViewComponent
  },
  {
    path: 'utilitypay',
    component: UtilityComponent
  },
  {
    path: 'accounts',
    component: AccountComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'currencyconverter',
    component: CurrencyComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
