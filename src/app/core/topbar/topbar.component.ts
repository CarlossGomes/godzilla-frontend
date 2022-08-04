import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { ThemeService } from 'src/app/shared/services/theme.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  isDarkMode: boolean = true

  @ViewChild(SidebarComponent, { static: false })
  sidebarComponent!: SidebarComponent;

  constructor(private authenticationService: AuthenticationService, private themeService: ThemeService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authenticationService.logout();
  }

  openSidebar() {
    this.sidebarComponent.showSidebar();
  }

  changeTheme(theme: string) {
    this.isDarkMode = theme == 'vela-blue';
    this.themeService.switchTheme(theme);
  }

}
