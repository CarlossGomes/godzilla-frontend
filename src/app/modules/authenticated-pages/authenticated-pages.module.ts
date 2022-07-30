import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { ContentComponent } from 'src/app/core/content/content.component';
import { TopbarComponent } from 'src/app/core/topbar/topbar.component';
import { AuthenticatedPagesRoutingModule } from './authenticated-pages-routing.module';
import { AuthenticatedPagesComponent } from './authenticated-pages.component';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AuthenticatedPagesComponent,
    ContentComponent,
    TopbarComponent,
  ],
  imports: [
    CommonModule,
    AuthenticatedPagesRoutingModule,
    SidebarModule,
    MenubarModule,
    ButtonModule
  ],
  providers:[
  ]
})
export class AuthenticatedPagesModule { }
