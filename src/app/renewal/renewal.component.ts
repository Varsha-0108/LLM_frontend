import { HttpClient } from '@angular/common/http';
import { Component, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-renewal',
  templateUrl: './renewal.component.html',
  styleUrls: ['./renewal.component.css']
})

export class RenewalComponent{
  licenseId: string = '';
  sname: string = '';
  renewalForm: FormGroup;
  uid:string='';
 
  constructor(private route: ActivatedRoute, private router : Router, 
    private http: HttpClient, private service: ServiceService) 
    {
    this.renewalForm = new FormGroup({
      lkey: new FormControl('', [Validators.required])
    });
    }

  ngOnInit() 
  {
    this.route.paramMap.subscribe(params => {
      this.licenseId = params.get('licenseId') || '';
      this.sname = params.get('sname') || '';
      this.uid = params.get('uid') || '';
    });
  }

  onSubmit() 
  {
    const body = {
      "lid": this.licenseId,
      "uid": this.uid
    };
    console.log('hii');
    this.service.updateExpiry(body).subscribe(
      res => {
        console.log('hi');
      
        Swal.fire({
          title: 'Your license has been renewed successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          this.router.navigate(['userhomepage']);
        });
      },
      error => {
        Swal.fire({
          title: 'An error occurred while renewing the license',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    );
  }

}
