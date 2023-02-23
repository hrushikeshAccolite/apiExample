import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ExampleData } from './typeDefs';
import { API } from './const';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  getDataFromApi():Observable<ExampleData[]>{
    return this._http.get<ExampleData[]>(API.URL).pipe(
      map((data: any)=> {
        return data.data.map(({"ID Nation":ID_Nation, Nation, Year, Population}: any)=> {
          return {ID_Nation, Nation, Year, Population};
        }
        )
      })
    );
  }
}
