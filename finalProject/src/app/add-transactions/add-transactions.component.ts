import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-add-transactions',
  templateUrl: './add-transactions.component.html',
  styleUrls: ['./add-transactions.component.css']
})
export class AddTransactionsComponent implements OnInit {

  constructor(private transactionService: TransactionService, private router: Router) { }

  ngOnInit(): void {
  }
  transaction: string = "";
  addTransaction() {
    let shopid = (localStorage.getItem('id'));
    console.log(shopid);
    this.transactionService.addTransaction(shopid, this.transaction)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['view'])
        },
        error => { }
      )

  }
}
