import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  loginForm: FormGroup = new FormGroup({
    email:new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  });
  

  errorMessage: string='';
  link: string = '/register'
  constructor(private router: Router, public service:ServiceService) {

  }

  clearFields()
  {
    this.loginForm.get('email')?.setValue('');
    this.loginForm.get('password')?.setValue('');
    this.loginForm.markAsUntouched();
  }

  onSubmit() {
      if(this.loginForm.value.email === "Admin@prodapt.com" && this.loginForm.value.password === "123")
      {
        this.router.navigateByUrl('/homepage');

        
      }
      else{
        
        const b = {
          'uusername':this.loginForm.value.email,
          'password':this.loginForm.value.password
        }
        console.log(b)
        this.service.checkLogin(b).subscribe(
          res=>{console.log(res)
          if(res === true){
            //storing the email in service
            this.service.useremail = b.uusername;
            this.router.navigate(['/userhomepage']);
          }
          else{
            Swal.fire({
              title: "Enter correct credentials",
              icon: "error",
              confirmButtonText: "Try again"
            }).then(() => {
              this.clearFields();
              this.router.navigate(['login'])
    
            })

          }
        }
        )
      }
      
   
    }

  }

