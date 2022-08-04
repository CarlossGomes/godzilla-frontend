import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  display: boolean = false;

  items!: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Clientes',
        icon: 'pi pi-users',
        routerLink:'/clientes'
      },
      {
        label: 'Ordens de Serviço',
        icon: 'pi pi-id-card',
        routerLink:'/ordens-servico'
      },
      {
        label: 'Produtos',
        icon: 'pi pi-box',
        routerLink:'/produtos'
      },
      {
        label: 'Relatórios',
        icon: 'pi pi-chart-bar',
        routerLink:'/relatorios'
      },
      // {
      //   label: 'Edit',
      //   icon: 'pi pi-fw pi-pencil',
      //   items: [
      //     { label: 'Delete', icon: 'pi pi-fw pi-trash' },
      //     { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
      //   ]
      // },
      // {
      //   label: 'Help',
      //   icon: 'pi pi-fw pi-question',
      //   items: [
      //     {
      //       label: 'Contents',
      //       icon: 'pi pi-pi pi-bars'
      //     },
      //     {
      //       label: 'Search',
      //       icon: 'pi pi-pi pi-search',
      //       items: [
      //         {
      //           label: 'Text',
      //           items: [
      //             {
      //               label: 'Workspace'
      //             }
      //           ]
      //         },
      //         {
      //           label: 'User',
      //           icon: 'pi pi-fw pi-file',
      //         }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   label: 'Actions',
      //   icon: 'pi pi-fw pi-cog',
      //   items: [
      //     {
      //       label: 'Edit',
      //       icon: 'pi pi-fw pi-pencil',
      //       items: [
      //         { label: 'Save', icon: 'pi pi-fw pi-save' },
      //         { label: 'Update', icon: 'pi pi-fw pi-save' },
      //       ]
      //     },
      //     {
      //       label: 'Other',
      //       icon: 'pi pi-fw pi-tags',
      //       items: [
      //         { label: 'Delete', icon: 'pi pi-fw pi-minus' }
      //       ]
      //     }
      //   ]
      // }
    ];
}

showSidebar() {
  this.display = true;
}


}
