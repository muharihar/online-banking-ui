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
import { SavingsTransactionComponent } from './savings-transaction/savings-transaction.component';
import { AppointmentComponent } from './appointment/appointment.component';
import {AppointmentService} from "./appointment.service";
import {TokenComponent} from "./signup/token.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    TokenComponent,
    SignupComponent,
    UserAccountComponent,
    PrimaryTransactionComponent,
    SavingsTransactionComponent,
    AppointmentComponent
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
      AppointmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
