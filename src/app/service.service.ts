import { Injectable } from '@angular/core';
import { License } from './module/license';
import { license } from './module/licenseList';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Registration } from './module/registration';
import { UserRequest } from './module/UserRequest';
import { UserStatus } from './module/UserStatus';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {



private islogin:boolean = false;
private errorMessage: string = '';
private licenseList: License[] = license;
 
private url : string = 'http://localhost:8181'

useremail : string ='';

  private requestedLicenses: Set<string> = new Set<string>();

  private permittedUsers : Set<string> = new Set<string>();

constructor(public http:HttpClient) { 
  this.licenseList = license;
}
 

//Admin - Add license
addLicense(license:License){
  return this.http.post<string>(`${this.url}/addlicense`,license);
}

//Admin - View license
viewlicense()
{
  return this.http.get(`${this.url}/viewlicense`);

} 

//Admin - Delete license
deleteproduct(lid:string)
{
  return this.http.delete(this.url+`/delete/${lid}`);
}

//Registration
registerUser(registration:Registration){
  console.log(registration);
  return this.http.post<string>(`${this.url}/registeruser`,registration);
}

//Check existing email id 
checkExisting(uemail:string)
{
  return this.http.get(`${this.url}/registeruser/check/${uemail}`);
}

//Check login credentials
checkLogin(body:any):Observable<Boolean>{
  return this.http.post<Boolean>(`${this.url}/loginCheck`,body);
}

// add user request in db-------------------------------------------
addUserRequest(lid:string,email:string):Observable<Boolean>{
  const data = {
    'lid':lid,
    'email':email
  }

  return this.http.post<Boolean>(`${this.url}/addUserRequest`,data)
}

getAllUserRequest():Observable<UserRequest[]> {
  return this.http.get<UserRequest[]>(`${this.url}/getAllUserRequest`)
}


addRequestedLicense(lid: string) {
  this.requestedLicenses.add(lid);
}

hasRequestedLicense(lid: string): boolean {
  return this.requestedLicenses.has(lid);
}

//-----------------------------------------------------------------------

addUserPermit(lid:string,email:string):Observable<Boolean>{
  const data = {
    'lid':lid,
    'email':email
  }

  return this.http.post<Boolean>(`${this.url}/add`,data)
}

getAllUserStatus():Observable<UserStatus[]> {
  return this.http.get<UserStatus[]>(`${this.url}/all`)
}


addRequestedPermit(lid: string) {
  this.permittedUsers.add(lid);
}

hasRequestedPermit(lid: string): boolean {
  return this.permittedUsers.has(lid);
}

//-------------------------------------------------




}



