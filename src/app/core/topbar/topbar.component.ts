import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  items!: MenuItem[];

  home!: MenuItem;

  display: boolean = false;


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initTopBar();
  }

  initTopBar() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/home'
      },
      // {
      //   label: 'Edit',
      //   icon: 'pi pi-fw pi-pencil',
      //   items: [
      //     { label: 'Delete', icon: 'pi pi-fw pi-trash' },
      //     { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
      //   ]
      // }
    ];
  }

  openSidebar() {
    this.display = true;
  }

  logout() {
    this.router.navigate(["login"]);
  }

}
