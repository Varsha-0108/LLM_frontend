import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { MenuComponent } from './menu/menu.component';
import { UserModule } from './user/user.module';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegistrationComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule, ReactiveFormsModule,
    AdminModule, UserModule,
    HttpClientModule,
    
 
    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
