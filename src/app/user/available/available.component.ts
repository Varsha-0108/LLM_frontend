import { Component, Input } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-available',
  templateUrl: './available.component.html',
  styleUrls: ['./available.component.css']
})

export class AvailableComponent 
{
  @Input() installedLicense: string | null | undefined;
  licenceList: any;
  isRequested: boolean = false;

  constructor(private service: ServiceService) 
  {
    this.service.viewlicense().subscribe((pro) => this.licenceList = pro);
  }

  requestLicense(lid: string) 
  {
    console.log(lid);
    console.log(this.service.useremail);

    if (this.service.hasRequestedLicense(lid)) //already requested license 
    {
      Swal.fire({
        title: 'Already Requested',
        text: 'You have already requested this license.',
        icon: 'info',
      });
    } 
    
    else 
    {
      this.service.addUserRequest(lid, this.service.useremail).subscribe((res) => //add request in db
      {
        console.log(res);

        this.service.addRequestedLicense(lid); //add request
        this.isRequested = true;

        Swal.fire({
          title: 'Request Successful!',
          text: 'Your license request has been submitted.',
          icon: 'success',
        });
      });
    }
  }
}

