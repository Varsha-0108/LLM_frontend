import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { SearchComponent } from './admin/search/search.component';
import { UserHomepageComponent } from './user/user-homepage/user-homepage.component';
import { AddLicenseComponent } from './admin/add-license/add-license.component';
import { ViewLicenseComponent } from './admin/view-license/view-license.component';
import { UsersComponent } from './admin/users/users.component';
import { StatusComponent } from './user/status/status.component';
import { UserstatusComponent } from './admin/userstatus/userstatus.component';
import { UserrequestComponent } from './admin/userrequest/userrequest.component';
import { AvailableComponent } from './user/available/available.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginPageComponent
  },
  {
    path:"register",
    component:RegistrationComponent
  },
  {
    path:"logout",
    component:LoginPageComponent
  },
  {
    path:"homepage",
    component:AdminHomeComponent
  },
  {
    path: "search",
    component:SearchComponent
  },
  {
    path: "userhomepage",
    component: UserHomepageComponent
  },
  {
    path: "addlicense",
    component: AddLicenseComponent
  },
  {
    path: "viewlicense",
    component: ViewLicenseComponent
  },
  {
    path: "userrequest",
    component: UserrequestComponent
  },
  {
    path: "userstatus",
    component: UserstatusComponent
  },
  {
      path:"license",
      component: AddLicenseComponent
    },
  {
    path: "adminhome",
    component: AdminHomeComponent
  },
  {
    path: "status",
    component: StatusComponent
  },
  {
    path:"available",
    component:AvailableComponent
  },

  {
    path:"**",
    component:HomePageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
