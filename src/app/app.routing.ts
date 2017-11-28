import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {TokenComponent} from "./signup/token.component";
import {SignupComponent} from "./signup/signup.component";
import {UserAccountComponent} from "./user-account/user-account.component";
import {PrimaryTransactionComponent} from "./primary-transaction/primary-transaction.component";
import {SavingsTransactionComponent} from "./savings-transaction/savings-transaction.component";
import {AppointmentComponent} from "./utility/appointment.component";
import {AccountComponent} from "./account/account.component";
import {ErrorComponent} from "./error/error.component";
import {HistoryComponent} from "./account/history.component";


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
        path: 'savingsTransaction/:username',
        component: SavingsTransactionComponent
    },
    {
        path: 'utilitypay',
        component: AppointmentComponent
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
    path: 'error',
    component: ErrorComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
