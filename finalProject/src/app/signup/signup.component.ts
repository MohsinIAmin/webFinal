import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Store } from '../models/store';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  shopStore = new Store();

  constructor(private shopService: ShopService, private router: Router) { }

  ngOnInit(): void {
  }

  register(): void {
    this.shopService.register(this.shopStore)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['login']);
        },
        error => {
          alert("User Name already exixt");
        }
      );;
  }

  loginClick(): void {
    this.router.navigate(['login']);
  }
}
