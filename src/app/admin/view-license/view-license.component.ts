import { Component } from '@angular/core';
import { License } from 'src/app/module/license';
import { license } from 'src/app/module/licenseList';
import { ServiceService } from 'src/app/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-license',
  templateUrl: './view-license.component.html',
  styleUrls: ['./view-license.component.css']
})

export class ViewLicenseComponent {
licenseList : any;
list : License[] | undefined;

constructor(private eService:ServiceService)
{
  this.eService.viewlicense().subscribe((pro) => {this.licenseList=pro});
}

Delete(lid : any)
{


  this.eService.deleteproduct(lid).subscribe(() => {

    

this.licenseList = this.licenseList.filter((license: { lid: any; }) => license.lid !== lid);

  });
  Swal.fire({
    title: "Details deleted successfully",
    icon: "success",
    confirmButtonText: "OK"
  });

}



}

