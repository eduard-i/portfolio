import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Output() sidenavLayoutToggle = new EventEmitter<boolean>();

  title = 'Portfolio';
  openMenu = false;

  clickMenu() {
    this.openMenu = !this.openMenu;
    this.sidenavLayoutToggle.emit(this.openMenu);
  }
}
