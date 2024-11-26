import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OfflinePolicyBuyRequest, OfflineQuotationRequestDetail, OfflineQuotationRequestModel } from '@app/_models/OfflinePolicyModel';
import { API_URL } from '@app/app.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfflinepolicyService {

  private readonly apiUrl = API_URL;
  constructor(private readonly http: HttpClient) { }
  
  getOflineQuotation(): Observable<OfflineQuotationRequestModel[]> {
    return this.http.get<OfflineQuotationRequestModel[]>(this.apiUrl+"OfflineQuotation/GetOfflineQuotation");
  }
  addOfflineQuoteDetails(offlineQuote: OfflineQuotationRequestDetail): Observable<any> {
    return this.http.post<any>(this.apiUrl+"OfflineQuotation/SaveOfflineQuoteDetails", offlineQuote);
  }
  getOflineQuotationDetails(id: number, userid: number): Observable<OfflineQuotationRequestModel[]> {
    return this.http.get<OfflineQuotationRequestModel[]>(this.apiUrl+"OfflineQuotation/GetOfflineQuotationDetails/"+userid+"/"+id);
  }
  GetOfflinePolicyBuyRquest(userid: number): Observable<OfflinePolicyBuyRequest[]> {
    return this.http.get<OfflinePolicyBuyRequest[]>(this.apiUrl+"OfflineQuotation/GetOfflinePolicyBuyRquest/"+userid);
  }
  UpdateOfflinePolicyBuyRequest(offlineBPR: OfflinePolicyBuyRequest): Observable<string> {
    return this.http.post<string>(this.apiUrl+"OfflineQuotation/UpdateOfflinePolicyBuyRequest", offlineBPR);
  }
  DeleteOfflineQuoteDetails(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl+"OfflineQuotation/DeleteOfflineQuoteDetails/"+id);
  }
}
