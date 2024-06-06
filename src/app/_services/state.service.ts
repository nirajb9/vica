
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TpRates } from '@app/tppolicy/tppolicy-add/tppolicy-add.component';

interface State {
  state_id: number;
  state_name: string;
  state_code: string;
  is_deleted: boolean;
  created_by: number;
  created_date: Date;
  modified_by: number;
  modified_date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private apiUrl = 'https://localhost:7141/api/'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getAllMasters(): Observable<any> {
    return this.http.get(this.apiUrl+"Common/GetAllMasters");
  }
  getStates(): Observable<State[]> {
    return this.http.get<State[]>(this.apiUrl+"Common/GetState");
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
  
  addState(state: State): Observable<State> {
    return this.http.post<State>(this.apiUrl, state);
  }

  updateState(state: State): Observable<State> {
    return this.http.put<State>(`${this.apiUrl}/${state.state_id}`, state);
  }

  getStateById(id: number): Observable<State> {
    return this.http.get<State>(`${this.apiUrl}/${id}`);
  }
}
