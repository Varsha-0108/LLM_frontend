import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { CurrentComponent } from './current/current.component';
import { AvailableComponent } from './available/available.component';
import { StatusComponent } from './status/status.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserHomepageComponent,
    CurrentComponent,
    AvailableComponent,
    StatusComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule, 
    ReactiveFormsModule,
    FormsModule
  ]

})
export class UserModule { }
