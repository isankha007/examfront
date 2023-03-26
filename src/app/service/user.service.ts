import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  public addUser(user: any) {
    return this.http.post(`${baseUrl}/api/v1/auth/register`, user);
  }

  public deleteUser(id: any){
    return this.http.delete(`${baseUrl}/quiz/${id}`);
  }
}


