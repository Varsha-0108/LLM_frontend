import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { License } from 'src/app/module/license';
import { ServiceService } from 'src/app/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-license',
  templateUrl: './add-license.component.html',
  styleUrls: ['./add-license.component.css']
})
export class AddLicenseComponent {

license : License;

addLicenseForm: FormGroup = new FormGroup({
  name: new FormControl('', [Validators.required]),
  lversion : new FormControl('', [Validators.required]),
  lvendor : new FormControl('', [Validators.required]),
  lvalidity : new FormControl('', [Validators.required]),
  lacquisition : new FormControl('', [Validators.required])

})

  constructor(private router: Router, private eService:ServiceService){
    // this.licenseList=this.eService.viewlicense();
      this.license=new License('','','','','','');
    
    }
    clearFields() {
      this.addLicenseForm.get('name')?.setValue('');
      this.addLicenseForm.get('lversion')?.setValue('');
      this.addLicenseForm.get('lvendor')?.setValue('');
      this.addLicenseForm.get('lvalidity')?.setValue('');
      this.addLicenseForm.get('lacquisition')?.setValue('');
      this.addLicenseForm.markAsUntouched();
    }
    // validate(data:string)
    // {
    //   if(data == 'default') 
    //     this.hasError=true;
    //     else
    //     this.hasError=false;
    // }


    onSubmit() {
      if (this.addLicenseForm.valid) {
        this.license = new License(
          'L'+parseInt((Math.random()*1000000)+'')+'',
          this.addLicenseForm.value.name,
          this.addLicenseForm.value.lversion,
          this.addLicenseForm.value.lvendor,
          this.addLicenseForm.value.lvalidity,
          this.addLicenseForm.value.lacquisition
        );
        console.log(this.license);
        this.eService.addLicense(this.license).subscribe();
        Swal.fire({
          title: "Details created successfully!",
          icon: "success",
          confirmButtonText: "OK"
        })
        .then(() => {
          this.clearFields();
          this.router.navigate(['addlicense']);
        });
     
      }
    }
  }    
