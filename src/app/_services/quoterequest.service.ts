import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentLink, TPRequestQuotationModel } from '@app/_models/TPRequestQuotationModel';
import { API_URL } from '@app/app.component';
import { TpRates } from '@app/tppolicy/tppolicy-add/tppolicy-add.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoterequestService {

  private apiUrl = API_URL;
  constructor(private http: HttpClient) { }

  addTpRates(tpRates: TpRates[]): Observable<TpRates[]> {
    return this.http.post<TpRates[]>(this.apiUrl+"TpRates/SaveTpRates", tpRates);
  }
  GetVehicleDetails(stateId :number, vehicleTypeId: number): Observable<any> {
    return this.http.get(this.apiUrl+"TpRates/GetTpRates/"+stateId+"/"+vehicleTypeId);
  }
  getTPRequestQuotation(userId: number): Observable<TPRequestQuotationModel[]> {
    return this.http.get<TPRequestQuotationModel[]>(this.apiUrl+"RequestQuotation/GetTPRequestQuotation/"+userId);
  }
  getRequestedQuotationById(userId: number, quoteId: number): Observable<any> {
    return this.http.get<any>(this.apiUrl+"RequestQuotation/GetRequestedQuotationById/"+userId+"/"+quoteId);
  }
  addPaymentLink(paymentLink: PaymentLink): Observable<any> {
    return this.http.post<any>(this.apiUrl+"RequestQuotation/AddPaymentLink/", paymentLink);
  }
}
