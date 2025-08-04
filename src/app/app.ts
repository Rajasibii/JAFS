import { CommonModule } from '@angular/common';
import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
// import { Menu } from './shared/menu/menu';
// import { AuthLinks } from './shared/auth-links/auth-links';
// import { SocialLinks } from "./shared/social-links/social-links";
// import { Email } from "./shared/email/email";
// import { Phone } from "./shared/phone/phone";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CommonModule,],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None,
})
export class App {
  isMenuScrolled = false;
  isSidebarShowing = false;

  @HostListener('window:scroll', ['$event'])
  scrollCheck(event: Event) {
    if (window.pageYOffset > 100) {
      this.isMenuScrolled = true;
    } else {
      this.isMenuScrolled = false;
    }
  }
  openSideBar() {
    this.isSidebarShowing = true;
  }
  closeSideBar() {
    this.isSidebarShowing = false;
  }
}
