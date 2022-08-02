import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {


  @ViewChild(SidebarComponent, { static: false })
  sidebarComponent!: SidebarComponent;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authenticationService.logout();
  }

  openSidebar(display: boolean) {
    this.sidebarComponent.showSidebar();
  }

}
