import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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
