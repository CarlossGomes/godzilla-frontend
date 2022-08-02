import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  display: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showSidebar() {
    this.display = true;
  }


}
