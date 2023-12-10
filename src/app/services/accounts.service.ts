import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";
import { IAccount } from '../models/models';

 const baseUrl='http://' + window.location.hostname + ":4500"
    @Injectable({
      providedIn: 'root',
    })
    export class AccountsService {
      constructor(private http: HttpClient) {}
      getAccounts(): Observable<IAccount[]> {
        return this.http.get<IAccount[]>(`${baseUrl}/accounts`);
      }

      searchByAccNum(searchByAccNum: any): Observable<IAccount> {
        return this.http.get<IAccount>(
          `${baseUrl}/searchByAccNum/${searchByAccNum}`
        );
      }
      addAction(add: any): Observable<IAccount> {
        return this.http.post<IAccount>(`${baseUrl}/add`, add);
      }
    };
