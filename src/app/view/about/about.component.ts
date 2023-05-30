import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  max: number = 100;
  value: number = 25;
  count1 = 10;
  duration1 = 2000;
  count2 = 20;
  duration2 = 2000;
  count3 = 100;
  duration3 = 2000;
  count4 = 200;
  duration4 = 2000;
  skillSet:any=[
    {label:"HTML",value: 90},
    {label:"CSS",value: 80},
    {label:"JAVASCRIPT",value: 75},
    {label:"CLOUD AWS",value: 5},
    {label:"ANGULAR 8",value: 80},
    {label:"NODE JS",value: 50},
    {label:"REACT JS",value: 5},
    {label:"BOOTSTRAP 5",value: 90}
  ];
  skillSet1:any=[

  ];
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
