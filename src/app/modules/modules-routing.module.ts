import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'security/login', component: LoginComponent },
  { path: 'security/register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
