import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    AOS.init({
      offset: 500,
      duration: 1000,
      anchorPlacement: 'top-bottom',
      once: false,
      mirror: false,
      delay: 150,
    });
  }


}
