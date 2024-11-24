import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OfflineQuotationRequestDetail, OfflineQuotationRequestModel } from '@app/_models/OfflinePolicyModel';
import { TPRequestQuotationModel } from '@app/_models/TPRequestQuotationModel';
import { API_URL } from '@app/app.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfflinepolicyService {

  private apiUrl = API_URL;
  constructor(private http: HttpClient) { }
  
  getOflineQuotation(): Observable<OfflineQuotationRequestModel[]> {
    return this.http.get<OfflineQuotationRequestModel[]>(this.apiUrl+"OfflineQuotation/GetOfflineQuotation");
  }
  addOfflineQuoteDetails(offlineQuote: OfflineQuotationRequestDetail): Observable<OfflineQuotationRequestDetail> {
    return this.http.post<OfflineQuotationRequestDetail>(this.apiUrl+"OfflineQuotation/SaveOfflineQuoteDetails", offlineQuote);
  }
  getOflineQuotationDetails(id: Number, userid: Number): Observable<OfflineQuotationRequestModel[]> {
    return this.http.get<OfflineQuotationRequestModel[]>(this.apiUrl+"OfflineQuotation/GetOfflineQuotationDetails/"+userid+"/"+id);
  }
}
