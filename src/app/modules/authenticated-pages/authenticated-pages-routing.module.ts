import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedPagesComponent } from './authenticated-pages.component';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  {
    path: '', component: AuthenticatedPagesComponent, children: [
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => HomeModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticatedPagesRoutingModule { }
