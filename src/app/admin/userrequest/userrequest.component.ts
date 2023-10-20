import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserRequest } from 'src/app/module/UserRequest';
import { UserStatus } from 'src/app/module/UserStatus';
import { ServiceService } from 'src/app/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-userrequest',
  templateUrl: './userrequest.component.html',
  styleUrls: ['./userrequest.component.css']
})
export class UserrequestComponent implements OnInit {
  userRequestList: UserRequest[] = [];
  loading: boolean = false;
  isRequested: boolean = false;
  userStatusList: UserStatus[] = [];
  userEmail: any;

  constructor(private service: ServiceService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.loadUserRequest();
  }

  loadUserRequest() {
    this.loading = true;
    this.service.getAllUserRequest().subscribe(
      (res: UserRequest[]) => {
        this.userRequestList = res;
        this.loading = false;
      }
    );
  }

  permitStatus(lid: string, useremail: string) {
    console.log(lid);
    console.log(useremail);

    if (this.service.hasRequestedPermit(lid, useremail)) //if block not necessary
    {
      Swal.fire({
        title: 'Already Permitted',
        text: 'You have already permitted this license',
        icon: 'info',
      });
    }
    else {
      this.service.addUserPermit(lid, useremail).subscribe((permitAdded: boolean) => {
        if (permitAdded) {
          this.service.addRequestedPermit(lid, useremail); // Add permit
          this.isRequested = true;
          Swal.fire({
            title: 'Permit Successful!',
            text: 'License request has been permitted.',
            icon: 'success',
          });
        }
        else {
          Swal.fire({
            title: 'Already Permitted',
            text: 'You have already permitted this license',
            icon: 'info',
          });
        }
      });
    }
  }

}





