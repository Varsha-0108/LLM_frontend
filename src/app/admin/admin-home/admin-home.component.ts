import { Component } from '@angular/core';

import Chart from 'chart.js/auto';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

  public chart: any;
  public chart1:any;

  //line graph
  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'line', 

      data: {
        labels: ['Notepad ++ (x64)', 'MySQL Workbench CE (x64)', 'MySQL Connector ODBC x64','Microsoft Visual Studio Code',
								 'Microsoft Teams', 'Adobe Acrobat Reader DC', 'Java 8 Update 371','WinRAR (x64)','Google Chrome (x64)', 'JetBrains IntelliJIDEA Community' ], 
	       
                
	              datasets: [
          {
            label: "Number of users",
            data: ['6','10', '14', '8', '13',
								 '8', '10', '4', '9', '17'],
            backgroundColor: 'black'
          }
           
        ]
      },
      options: {
        aspectRatio:2.5,
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
        }
      }
      
    });


    //dooghnut chart
    this.chart1 = new Chart("MyChart1", {
      type: 'doughnut', 

      data: {
        labels: ['Notepad ++ (x64)', 'MySQL Workbench CE (x64)',
        'MySQL Connector ODBC x64','Microsoft Visual Studio Code',
        'Microsoft Teams','Adobe Acrobat Reader DC', 
        'Java 8 Update 371','WinRAR (x64)',
        'Google Chrome (x64)','JetBrains IntelliJIDEA Community'
      ],
	       datasets: [{
    label: 'Number of users', 
    data: [6, 10, 14, 8, 13, 8, 10, 4, 9, 17],
    backgroundColor: [
      'rgb(0, 0, 0)',
      'rgb(210, 203, 203)',
      'rgb(96, 101, 107)',
			'rgb(117, 128, 132)',
      'rgb(101, 99, 99)',
      'rgb(66, 75, 79)',	
      'rgb(74, 72, 82)',
      'rgb(221, 221, 225)',
      'rgb(104, 87, 87)',
      'rgb(50, 52, 70)'		
    ],
    hoverOffset: 4
  }],
      },
      options: {
        aspectRatio:2.5,
        
      }

    });
  }


  ngOnInit(): void {
      this.createChart();  
  }
}                            
