import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AddLicenseComponent } from './add-license/add-license.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SearchComponent } from './search/search.component';
import { ViewLicenseComponent } from './view-license/view-license.component';
import { UsersComponent } from './users/users.component';
 import { FormsModule } from '@angular/forms';
import { UserstatusComponent } from './userstatus/userstatus.component';
import { UserrequestComponent } from './userrequest/userrequest.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddLicenseComponent,
    AdminHomeComponent,
    SearchComponent,
    ViewLicenseComponent,
    UsersComponent,
    UserstatusComponent,
    UserrequestComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AdminHomeComponent
  ]
})
export class AdminModule { }
