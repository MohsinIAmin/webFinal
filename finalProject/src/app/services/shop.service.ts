import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Store } from '../models/store';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }

  register(store: Store) {
    let username = store.username;
    let password = store.password;
    let address = store.address;
    return this.http.post<any>(`${environment.apiUrl}/register.php`, { username, password, address })
      .pipe(map(Store => {
        return Store;
      }));
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/login.php`, { username, password })
      .pipe(map(Store => {
        localStorage.setItem('id', Store[0].id);
        this.getLoggedInName.emit(true);
        return Store;
      }));
  }
}
