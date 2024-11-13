import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegistration } from '@app/_models';
import { API_URL } from '@app/app.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = API_URL;
  constructor(private http: HttpClient) { }

  GetUserDetails(): Observable<any> {
    return this.http.get(this.apiUrl+"Registration/getuserdetails/");
  }

  addUser(users: UserRegistration): Observable<UserRegistration> {
    return this.http.post<UserRegistration>(this.apiUrl+"Registration/register", users);
  }
}
