import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Registration } from '../module/registration';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {
  registration: Registration;
  reg: boolean = false;
  regForm: FormGroup = new FormGroup({
    fname: new FormControl('', [Validators.required]),
    lname: new FormControl('', [Validators.required]),
    id: new FormControl('', [Validators.required]),
    userid: new FormControl('', [(Validators.required)]),
    email: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })
  link: string = '/login'
  result: any

  constructor(private router: Router, public eService: ServiceService) 
  {
    this.registration = new Registration('', '', '', '', '', '', '')
  }

  clearFields() 
  {
    this.regForm.get('fname')?.setValue('');
    this.regForm.get('lname')?.setValue('');
    this.regForm.get('id')?.setValue('');
    this.regForm.get('userid')?.setValue('');
    this.regForm.get('email')?.setValue('');
    this.regForm.get('username')?.setValue('');
    this.regForm.get('password')?.setValue('');
    this.regForm.markAsUntouched();
  }

  onSubmit() 
  {
    this.registration = new Registration(this.regForm.value.fname, this.regForm.value.lname,
      this.regForm.value.id, this.regForm.value.userid,
      this.regForm.value.email, this.regForm.value.username, this.regForm.value.password)
    console.log(this.registration);

    this.eService.checkExisting(this.registration.uemail).subscribe((e) => {
      this.result = e

      if (this.result.length > 0) 
      {
        Swal.fire({
          title: "Email ID already exists. Try logging in instead.",
          icon: "error",
          confirmButtonText: "OK"
        }).then(() => {
          this.clearFields();
          this.router.navigate(['login'])
        })
      }

      else 
      {
        this.eService.registerUser(this.registration).subscribe();
        Swal.fire({
          title: "Registered successfully!",
          icon: "success",
          confirmButtonText: "OK"
        }).then(() => {
          this.clearFields();
          this.router.navigate(['register'])

        })
      }
    }
    )
  }
  
}
