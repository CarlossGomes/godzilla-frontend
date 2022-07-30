import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const authenticatedPagesModule = () => import('./modules/authenticated-pages/authenticated-pages.module').then(m => m.AuthenticatedPagesModule);
const loginModule = () => import('./modules/login/login.module').then(m => m.LoginModule);
const createAccountModule = () => import('./modules/create-account/create-account.module').then(m => m.CreateAccountModule);

const routes: Routes = [
  { path: '', loadChildren: authenticatedPagesModule },
  { path: 'login', loadChildren: loginModule },
  { path: 'create-account', loadChildren: createAccountModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
