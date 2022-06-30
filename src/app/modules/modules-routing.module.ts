import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSavingsComponent } from './account-savings/account-savings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { StripeComponent } from './security/stripe/stripe.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'security/login', component: LoginComponent },
  { path: 'security/subscription', component: StripeComponent },
  { path: 'security/register', component: RegisterComponent },
  { path: 'dashboard/expense', component: ExpensesComponent },
  { path: 'dashboard/account-saving', component: AccountSavingsComponent },
  { path: 'dashboard/setting', component: SettingsComponent },
  { path: 'dashboard/:data', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
