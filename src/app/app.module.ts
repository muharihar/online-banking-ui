import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {routing} from "./app.routing";
import {LoginService} from "./login.service";
import {SignupService} from "./signup.service";
import {TokenService} from "./token.service";
import { UserAccountComponent } from './user-account/user-account.component';
import {UserService} from "./user.service";
import { PrimaryTransactionComponent } from './primary-transaction/primary-transaction.component';
import { PayorderComponent } from './payorder/payorder.component';
import { PayorderViewComponent } from './payorder/poview.components';
import { UtilityComponent } from './utility/utility.component';
import { CurrencyComponent } from './currency-converter/currency.component';
import {UtilityService} from "./utility.service";
import {TokenComponent} from "./signup/token.component";
import {AccountComponent} from "./account/account.component";
import {ErrorComponent} from "./error/error.component";
import {GenericService} from "./gneric.service";
import {HistoryComponent} from "./account/history.component";
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    TokenComponent,
    SignupComponent,
    UserAccountComponent,
    PrimaryTransactionComponent,
    PayorderComponent,
    PayorderViewComponent,
    UtilityComponent,
    CurrencyComponent,
    AccountComponent,
    ErrorComponent,
    HistoryComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
      LoginService,
      UserService,
      SignupService,
      TokenService,
      GenericService,
      UtilityService,
      AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
