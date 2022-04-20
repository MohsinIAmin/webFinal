import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '../models/transaction';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styleUrls: ['./view-transactions.component.css']
})
export class ViewTransactionsComponent implements OnInit {
  
  transactions: Transaction[] = [];

  constructor(private router : Router, private transactionService : TransactionService) { }

  ngOnInit(): void {
    this.getTransactions();
  }
  addNewTransaction(){
    this.router.navigate(['add'])
  }
  updateTransaction(transaction: Transaction){

  }
  deleteTransaction(transaction: Transaction){

  }
  getTransactions(){
  }

}
