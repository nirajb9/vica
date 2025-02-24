import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PolicyCopyModel } from '@app/_models/PolicyCopyModel';
import { API_URL } from '@app/app.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicycopyService {

  private apiUrl = API_URL;
     constructor(private http: HttpClient) { }
   
     
     GetPolicyCopy(): Observable<any> {
       return this.http.get(this.apiUrl+"PolicyCopy/GetPolicyCopy");
     }

      AddPolicyCopy(policyCopyModel : PolicyCopyModel): Observable<any> {
         return this.http.post(this.apiUrl+"PolicyCopy/SavePolicyCopy",policyCopyModel);
       }
  
}
