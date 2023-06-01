import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ChartData, ChartOptions } from 'chart.js';
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

  salesData: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      { label: 'Mobiles', data: [1000, 1200, 1050, 2000, 500],backgroundColor:
        ('rgb(255, 128, 0)'),borderColor:('rgb(153, 76, 0)'),hoverBackgroundColor:('rgb(153, 76, 0)'),
        borderWidth:2,hoverBorderColor:('rgb(153, 76, 0)'),tension: 0.5 },
      { label: 'Laptop', data: [200, 100, 400, 50, 90],backgroundColor:
        ('rgb(255, 255, 0)'),borderColor:('rgb(153, 153, 0)'),hoverBackgroundColor:('rgb(153, 153, 0)'),
        borderWidth:2,hoverBorderColor:('rgb(153, 153, 0)'),tension: 0.5 },
      { label: 'AC', data: [500, 400, 350, 450, 650],backgroundColor: 
        ('rgb(128, 255, 0)'),borderColor:('rgb(0, 153, 0)'),hoverBackgroundColor:('rgb(0, 153, 0)'),
        borderWidth:2,hoverBorderColor:('rgb(0, 153, 0)'),tension: 0.5 },
      { label: 'Headset', data: [1200, 1500, 1020, 1600, 900],backgroundColor:('rgb(0, 255, 255)'),
        borderColor:('rgb(0, 153, 153)'),hoverBackgroundColor:('rgb(0, 153, 153)'),
        borderWidth:2,hoverBorderColor:('rgb(0, 153, 153)'),tension: 0.5 },
    ],
  };

  chartOptions: ChartOptions = {
    responsive: true,
  
    plugins: {
      tooltip:{
        displayColors: false,
        callbacks:{
          labelTextColor(tooltipItem) {
            // console.log("tooltip",tooltipItem,tooltipItem.dataset.borderColor);
            return 'rgb(255, 128, 0)'
          }
        }
      },
      title: {
        display: true,
        text: 'Monthly Sales Data',
      },
    },
  };

}
