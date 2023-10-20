import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { UserStatus } from 'src/app/module/UserStatus';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})

export class UserHomepageComponent 
{
  
  loading: boolean = false;
  userStatusList: UserStatus[] = [];
  renewalStatus: boolean = false;
  userEmail: string = ''; 
  userName: string = ''; 

  constructor(private service: ServiceService, private route: ActivatedRoute) 
  {
  }

  ngOnInit() 
  {
    this.loadUserStatus();
    this.userEmail = this.service.useremail;
  }

  loadUserStatus() 
  {
    this.loading = true;
    this.service.getUserStatus(this.service.useremail).subscribe(
      (res: UserStatus[]) => {
        this.userStatusList = res;
        this.loading = false;
      }
    );
  }
    
}

