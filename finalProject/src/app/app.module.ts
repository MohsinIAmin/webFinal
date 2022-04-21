import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AddTransactionsComponent } from './add-transactions/add-transactions.component';
import { ViewTransactionsComponent } from './view-transactions/view-transactions.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ApprioriComponent } from './appriori/appriori.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    AddTransactionsComponent,
    ViewTransactionsComponent,
    NavbarComponent,
    ApprioriComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
