import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { Transaction } from '../models/transaction';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styleUrls: ['./view-transactions.component.css']
})
export class ViewTransactionsComponent implements OnInit {

  transactions: Transaction[] = [];

  constructor(private router: Router, private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.getTransactions();
  }
  addNewTransaction() {
    this.router.navigate(['add'])
  }

  getTransactions() {
    let shopid = localStorage.getItem('id');
    this.transactionService.getTransactions(shopid)
      .subscribe(response => {
        console.log(response);
        this.transactions = response.map(Transaction => {
          return Transaction;
        })
      })
  }

}
