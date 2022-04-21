import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTransactionsComponent } from './add-transactions/add-transactions.component';
import { ApprioriComponent } from './appriori/appriori.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewTransactionsComponent } from './view-transactions/view-transactions.component';

const routes: Routes = [
  { path: '', component: SignupComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add', component: AddTransactionsComponent },
  { path: 'view', component: ViewTransactionsComponent },
  {path: 'appr',component:ApprioriComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
