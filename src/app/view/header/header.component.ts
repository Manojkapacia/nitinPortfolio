import { Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  isActive:Boolean = false;
  activeNav: any = '1';

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  toggleClass = () => {
    this.isActive = !this.isActive
    if(this.isActive) {
      this.renderer.addClass(document.body, "mobile-nav-active")
    } else {
      this.renderer.removeClass(document.body, "mobile-nav-active")
    }
  } 

  toggleActiveNav = (navItemNumber:any) => {
    this.activeNav = navItemNumber
    this.isActive = false
    this.renderer.removeClass(document.body, "mobile-nav-active")
  } 

}
