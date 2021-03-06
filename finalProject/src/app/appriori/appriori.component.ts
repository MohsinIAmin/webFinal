import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Transaction } from '../models/transaction';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-appriori',
  templateUrl: './appriori.component.html',
  styleUrls: ['./appriori.component.css']
})
export class ApprioriComponent implements OnInit {
  // transactions:string[] = []
  trxs: Transaction[] = [];
  transactions:string[] = [];
  inf = 100000000;
  constructor(private transactionService: TransactionService) { }
  item_set: string = "";
  res: string[] = [];
  ngOnInit(): void {
    //this.transactions = this.transactionService.getTransactions;
    //this.ini
    this.transactionService.getTransactions

  }

  getTransactions() {
    let shopid = localStorage.getItem('id');
    this.transactionService.getTransactions(shopid)
      .subscribe(response => {
        console.log(response);
        this.trxs = response.map(Transaction => {
          return Transaction;
        })
      })
  }

  appriori() {
    
    this.getTransactions();
    console.log(this.transactions)
    for(var i=0; i<this.trxs.length; i++){
      this.transactions.push(this.trxs[i].items)
    }
    let sup_count = []
    let items = new Set<string>(), current_items = new Set<string>();
    var temp = this.item_set;
    let cur_items = temp.split(",", this.inf)
    for (var j = 0; j < cur_items.length; j++) {
      cur_items[j] = cur_items[j].trim();
      current_items.add(cur_items[j]);
    }
    let size_of_current_items = current_items.size

    console.log("current ", current_items)
    let proccesedTransactions = [];

    for (var i = 0; i < this.transactions.length; i++) {
      let itemSet = this.transactions[i].split(",", this.inf)
      for (var j = 0; j < itemSet.length; j++) {
        itemSet[j] = itemSet[j].trim();
        items.add(itemSet[j]);
      }
      proccesedTransactions.push(new Set(itemSet))
    }
    //console.log(proccesedTransactions, items)
    var sup_count_of_cur_items = 0;
    for (let transaction of proccesedTransactions) {
      //console.log(transaction);
      if (this.allInIt(transaction, "", current_items)) {
        console.log("this has current", transaction)
        sup_count_of_cur_items++;
      }
    }

    var saved_count = sup_count_of_cur_items;

    console.log(sup_count_of_cur_items)
    let itemsToAdd: string[] = [];
    let confidenceWithItems = new Map();

    while (1) {
      let tempMp = new Map();
      for (let item of items) {
        if (current_items.has(item)) continue;
        let sup_count = 0;
        for (let transaction of proccesedTransactions) {
          if (this.allInIt(transaction, item, current_items)) {
            sup_count++;
          }
        }
        let confidence = sup_count / sup_count_of_cur_items;
        tempMp.set(item, sup_count);
      }
      console.log(tempMp)
      let max = 0;
      let nextItem = "";
      for (const [key, value] of tempMp) {
        if (value > max) {
          max = value;
          nextItem = key;
        }
      }
      if (max / saved_count>=0.5) {
        itemsToAdd.push(nextItem);
        current_items.add(nextItem);
        confidenceWithItems.set(current_items, max / saved_count)
        sup_count_of_cur_items = max;
      }
      else {
        break;
      }
      console.log(current_items)
    }
    if (itemsToAdd.length > 0) {
      let i = 0;
      let prev = "";
      console.log(confidenceWithItems)
      var x = confidenceWithItems.keys()
      console.log("X is", x)
      let val = 0;
      for (const [key, value] of confidenceWithItems) {
        let thisLevel = prev + itemsToAdd[i];
        prev = prev+thisLevel
        this.res.push("You can buy " + itemsToAdd + ". " + itemsToAdd+ " gets sold with " + this.item_set + " with a confidence of " + value * 100 + "%")
        i++;
        val = value
      }

      
      /*this.res.push("You can buy ");
      for(var j=0; j<itemsToAdd.length; j++){
        this.res.push(itemsToAdd[j]);
      }
      this.res.push(itemsToAdd+ " gets sold with " + this.item_set + " with a confidence of " + val * 100 + "%");
      */
     console.log(this.res)
    }
    console.log(itemsToAdd, "has confidence of", sup_count_of_cur_items / saved_count)
    
  }

  allInIt(transaction: Set<string>, item: string, current_items: Set<string>) {
    for (let items of current_items) {
      if (transaction.has(items) == false) return false;
    }
    if (item != "") return transaction.has(item)
    return true;
  }


}