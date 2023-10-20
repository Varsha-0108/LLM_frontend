import { Component } from '@angular/core';
import { UserRequest } from 'src/app/module/UserRequest';
import { UserStatus } from 'src/app/module/UserStatus';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-userstatus',
  templateUrl: './userstatus.component.html',
  styleUrls: ['./userstatus.component.css']
})

export class UserstatusComponent 
{
  notifiedEmails: Set<string> = new Set<string>();
  loading: boolean = false;
  userStatusList: UserStatus[] = [];
  
  constructor(private service: ServiceService) 
  {
  }

  ngOnInit() 
  {
    this.loadUserStatus();
  }

  loadUserStatus() 
  {
    this.loading = true;
    this.service.getAllUserStatus().subscribe(
      (res: UserStatus[]) => {
        this.userStatusList = res;
        this.loading = false;
      }
    );
  }

}

