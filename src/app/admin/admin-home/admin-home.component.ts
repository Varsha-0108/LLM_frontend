import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import Chart from 'chart.js/auto';
import { ServiceService } from 'src/app/service.service';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})

export class AdminHomeComponent implements OnInit 
{
  public graphData: any = [];

  constructor(private service: ServiceService) 
  {  
  }

  ngOnInit(): void 
  {
    this.service.getGraphData().subscribe((data: any) => {
      this.graphData = data;
      this.createGraph();
    })
  }

  createGraph(): void 
  {
    const snameArray = this.graphData.map((item: any[]) => item[0]);
    const countArray = this.graphData.map((item: any[]) => item[1]);

    const ctx = document.getElementById('userStatusChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: snameArray,
        datasets: [
          {
            label: 'Count of Users',
            data: countArray,
            backgroundColor: 'red',
            borderColor: 'black',
            borderWidth: 1,
          }
        ]
      },
      options: {
        aspectRatio: 2.5,
        animations: {
          tension: {
            duration: 2000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
        }
      }
    }
    )
  }
  
}