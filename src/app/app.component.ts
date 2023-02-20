import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'netflix';
  navbag!: Object;

  @HostListener('document:scroll') scrollover() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navbag = {
        'background-color': '#000000',
      };
    } else {
      this.navbag = {
        'background-color': 'transparent',
      };
    }
  }
}
