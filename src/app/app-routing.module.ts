import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'finance-chrome-ui/main', pathMatch: 'full' },
  { path: 'finance-chrome-ui/main', loadChildren: () => import('./modules/modules.module').then((module) => module.ModulesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
