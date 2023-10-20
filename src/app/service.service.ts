import { Injectable } from '@angular/core';
import { License } from './module/license';
import { license } from './module/licenseList';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { Registration } from './module/registration';
import { UserRequest } from './module/UserRequest';
import { UserStatus } from './module/UserStatus';

@Injectable({
  providedIn: 'root'
})
export class ServiceService 
{
checkTruncateStatus() {
  throw new Error('Method not implemented.');
}

private islogin:boolean = false;
private errorMessage: string = '';
private licenseList: License[] = license;
useremail : string ='';
private requestedLicenses: Set<string> = new Set<string>();
private permittedUsers: Map<string, Set<string>> = new Map();
private permittedLicenses: Map<string, Set<string>> = new Map();
 
private url : string = 'http://localhost:8181'

constructor(public http:HttpClient) 
{ 
  this.licenseList = license;
}

//Admin - Add license
addLicense(license:License)
{
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
registerUser(registration:Registration)
{
  console.log(registration);
  return this.http.post<string>(`${this.url}/registeruser`,registration);
}

//Check existing email id 
checkExisting(uemail:string)
{
  return this.http.get(`${this.url}/registeruser/check/${uemail}`);
}

//Check login credentials
checkLogin(body:any):Observable<Boolean>
{
  return this.http.post<Boolean>(`${this.url}/loginCheck`,body);
}

//-------------------------------------------------------------------------------------------
//User Request
addUserRequest(lid:string,email:string):Observable<Boolean>
{
  const data = {
    'lid':lid,
    'email':email
  }

  return this.http.post<Boolean>(`${this.url}/addUserRequest`,data)
}

getAllUserRequest():Observable<UserRequest[]> 
{
  return this.http.get<UserRequest[]>(`${this.url}/getAllUserRequest`)
}

addRequestedLicense(lid: string) 
{
  this.requestedLicenses.add(lid);
}

hasRequestedLicense(lid: string): boolean 
{
  return this.requestedLicenses.has(lid);
}

//-------------------------------------------------------------------------------------------
//User Status
addUserPermit(lid:string,email:string):Observable<boolean>
{
  const data = {
    'lid':lid,
    'email':email
  }

  return this.http.post<boolean>(`${this.url}/add`,data)
}

getAllUserStatus():Observable<UserStatus[]> 
{
  return this.http.get<UserStatus[]>(`${this.url}/all`)
}

getUserStatus(email : string):Observable<UserStatus[]> 
{
  const body ={
    "email":email
  }

  return this.http.post<UserStatus[]>(`${this.url}/singleUser`,body)
}

addRequestedPermit(lid: string, useremail: string) 
{
  const key = `${lid}_${useremail}`;
  if (!this.permittedUsers.has(key)) 
  {
    this.permittedUsers.set(key, new Set());
  }
  const setForKey = this.permittedUsers.get(key);
  return setForKey !== undefined && setForKey.has(lid);
}

hasRequestedPermit(lid: string, useremail: string): boolean 
{
  const key = `${lid}_${useremail}`;
  const setForKey = this.permittedUsers.get(key);
  return setForKey !== undefined && setForKey.has(lid);
}

//-------------------------------------------------------------------------------------------
//Email 
notify(email:string)
{
  const data = {
    'email':email
  }
  return this.http.post<Boolean>(`${this.url}/notify`,data)
}

//-------------------------------------------------------------------------------------------
//To update expity after renewing
updateExpiry(body:any):Observable<any>
{
  return this.http.post<any>(`${this.url}/updateExpiry`,body)
}

//--------------------------------------------------------------------------------------------
getGraphData() {
  return this.http.get<any>(`${this.url}/graph-data`);
}

//--------------------------------------------------------------------------------------------
}



