import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const loginModule = () => import('./modules/login/login.module').then(m => m.LoginModule);

const routes: Routes = [
  { path: 'login', loadChildren: loginModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
