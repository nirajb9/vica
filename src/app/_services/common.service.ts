import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '@app/app.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private apiUrl = API_URL;

  constructor(private http: HttpClient) { }

  getVehicleType(): Observable<[]> {
    return this.http.get<[]>(this.apiUrl+"Common/GetVehicleType");
  }
  GetRTODetails(id: number): Observable<[]> {
    return this.http.get<[]>(this.apiUrl+"Common/GetRTODetails/"+id);
  }
  GetVehicleFueltypes(): Observable<[]> {
    return this.http.get<[]>(this.apiUrl+"Common/GetVehicleFueltypes");
  }
  GetVehicleAge(): Observable<[]> {
    return this.http.get<[]>(this.apiUrl+"Common/GetVehicleAge");
  }
  GetVehicleInsuranceCompanies(): Observable<[]> {
    return this.http.get<[]>(this.apiUrl+"Common/GetVehicleInsuranceCompanies");
  }
  getAllMasters(): Observable<any> {
    return this.http.get(this.apiUrl+"Common/GetAllMasters");
  }

  getUserList(): Observable<[]> {
    return this.http.get<[]>(this.apiUrl+"Common/GetUserList");
  }
}
