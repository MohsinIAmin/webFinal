import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Store } from '../models/store';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  shopStore = new Store();
  constructor(private shopService: ShopService, private router: Router) { }

  ngOnInit(): void { }

  login(): void {
    this.shopService.login(this.shopStore.username, this.shopStore.password)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          console.log(localStorage.getItem('id'))
        },
        error => {
          console.log(error);
        }
      )
  }

  registerClick(): void {
    this.router.navigate(['signup']);
  }
}
