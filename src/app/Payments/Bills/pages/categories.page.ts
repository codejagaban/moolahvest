import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BillsService } from '../bills.service';
import { BillTypes, Categories, CategoryFilter } from '../models/bills.model';



@Component({
    templateUrl: '../views/categories.html'
})
export class CategoriesPage implements OnInit, OnDestroy{

    categories: Categories[] = [];
    billType =  BillTypes;
    private categorySub: Subscription;
    constructor(private _billsService : BillsService) {}
    ngOnInit(): void {
    this.categorySub = this._billsService.categories.subscribe(res=> {
      this.categories = res;
    });

    }
    ionViewWillEnter(){
        this._billsService.getCategories(new CategoryFilter(1 , 500, this.billType.Airtime))
        .subscribe(categories=> {
        this.categories = categories;
      });
    }
    ngOnDestroy(): void {
        if(this.categorySub){
          this.categorySub.unsubscribe();
        }
     }
}