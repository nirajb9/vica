import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndorsementPolicy } from '@app/_models/EndorsementModel';
import { API_URL } from '@app/app.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndorsementService {

  private apiUrl = API_URL;
     constructor(private http: HttpClient) { }

     GetEndorsementPolicy(): Observable<any> {
       return this.http.get(this.apiUrl+"Endorsement/GetEndorsementPolicy");
     }

     UpdateEndrosmentPolicy(obj: EndorsementPolicy): Observable<any> {
      return this.http.post(this.apiUrl+"Endorsement/UpdateEndrosmentPolicy",obj);
    }

}
