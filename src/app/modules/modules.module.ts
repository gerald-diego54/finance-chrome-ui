import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSavingsComponent } from './account-savings/account-savings.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { SettingsComponent } from './settings/settings.component';
import { SidebarComponent } from './../layout/sidebar/sidebar.component';
import { TopbarComponent } from './..//layout/topbar/topbar.component';

import { SidebarModule } from 'primeng/sidebar';
import { AccordionModule } from 'primeng/accordion';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { ChartModule } from 'primeng/chart';
import { StripeComponent } from './security/stripe/stripe.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { StripeElementComponent } from './security/stripe-element/stripe-element.component';
import { SettingsLabelComponent } from './settings/settings-label/settings-label.component';


@NgModule({
  declarations: [
    ModulesComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AccountSavingsComponent,
    ExpensesComponent,
    SettingsComponent,
    SidebarComponent,
    TopbarComponent,
    StripeComponent,
    StripeElementComponent,
    SettingsLabelComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    SidebarModule,
    AccordionModule,
    MenuModule,
    BadgeModule,
    ChartModule,
    DynamicDialogModule
  ]
})
export class ModulesModule { }
