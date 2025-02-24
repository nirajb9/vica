import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PolicyCashback } from '@app/_models/PolicyCashback';
import { API_URL } from '@app/app.component';
import { TpRates } from '@app/tppolicy/tppolicy-add/tppolicy-add.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CashbackService {

  private apiUrl = API_URL;
   constructor(private http: HttpClient) { }
 
   
   GetPolicyCashbackRequest(): Observable<any> {
     return this.http.get(this.apiUrl+"PolicyCashback/GetPolicyCashbackRequest");
   }

   AddPolicyCashbackRequest(policyCashback : PolicyCashback): Observable<any> {
    return this.http.post(this.apiUrl+"PolicyCashback/SaveCashback",policyCashback);
  }

  GetPolicyCashbackDetails(id: any): Observable<any> {
    return this.http.get(this.apiUrl+"PolicyCashback/GetPolicyCashbackDetails/"+id);
  }
}
