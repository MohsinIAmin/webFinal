import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Store } from '../models/store';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }
  addTransaction(shopid: any, items: string) {
    return this.http.post<any>(`${environment.apiUrl}/addTransaction.php`, { shopid, items })
      .pipe(map(Transaction => {
        return Transaction;
      }));
  }
  getTransactions(){
    
  }
}
