
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  private apiUrl = 'http://your-api-endpoint/states'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getStates(): Observable<State[]> {
    return this.http.get<State[]>(this.apiUrl);
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
