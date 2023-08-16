import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  showMenu = false;


  toogle() {
    this.showMenu = !this.showMenu;
  }
}
