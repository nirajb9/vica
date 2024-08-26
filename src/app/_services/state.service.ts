
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TpRates } from '@app/tppolicy/tppolicy-add/tppolicy-add.component';
import { API_URL } from '@app/app.component';
import { TPRequestQuotationModel } from '@app/_models/TPRequestQuotationModel';
import { StateMas } from '@app/_models/StateMas';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private apiUrl = API_URL;

  constructor(private http: HttpClient) { }

  getAllMasters(): Observable<any> {
    return this.http.get(this.apiUrl+"Common/GetAllMasters");
  }
  getStates(): Observable<StateMas[]> {
    //return this.http.get<StateMas[]>(this.apiUrl+"Common/GetState");
    return this.http.get<StateMas[]>(this.apiUrl+"State/GetState");
  }
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
  GetAllVehicleCubicCapicity(): Observable<[]> {
    return this.http.get<[]>(this.apiUrl+"VehicleCubicCapicity/GetAllVehicleCubicCapicity");
  }
  GetVehicleInsuranceCompanies(): Observable<[]> {
    return this.http.get<[]>(this.apiUrl+"Common/GetVehicleInsuranceCompanies");
  }
  addTpRates(tpRates: TpRates[]): Observable<TpRates[]> {
    return this.http.post<TpRates[]>(this.apiUrl+"TpRates/SaveTpRates", tpRates);
  }
  GetVehicleDetails(stateId :number, vehicleTypeId: number): Observable<any> {
    return this.http.get(this.apiUrl+"TpRates/GetTpRates/"+stateId+"/"+vehicleTypeId);
  }
  getTPRequestQuotation(): Observable<TPRequestQuotationModel[]> {
    return this.http.get<TPRequestQuotationModel[]>(this.apiUrl+"RequestQuotation/GetTPRequestQuotation/1");
  }
  
  addState(state: StateMas): Observable<StateMas> {
    return this.http.post<StateMas>(this.apiUrl+"State/AddState", state);
  }

  updateState(state: StateMas): Observable<StateMas> {
    return this.http.put<StateMas>(this.apiUrl+"State/AddState", state);
  }

  getStateById(id: number): Observable<StateMas> {
    return this.http.get<StateMas>(this.apiUrl+"State/GetStateById/"+`${id}`);
  }
  deleteState(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.apiUrl+"State/DeleteState/"+`${id}`);
  }
  enableState(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.apiUrl+"State/EnableState/"+`${id}`);
  }
}
