import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BillsService } from '../bills.service';
import { Billers, Categories } from '../models/bills.model';


@Component({
    templateUrl: '../views/billers.html'
})
export class BillersPage implements OnInit, OnDestroy{
    category: Categories;
    billers: Billers [];
    billerSub: Subscription;
    categorySub: Subscription;
    categoryId: number;
    constructor(private _billService: BillsService, private route: ActivatedRoute){
        this.route.paramMap.subscribe(c => {
          this.categoryId = +c.get('id');
        });
    }

    ngOnInit(): void {
     this.billerSub = this._billService.billers.subscribe(res => {
     this.billers = res;
    });
     this.categorySub = this.getCategory();
    }
    ngOnDestroy(): void {
        this.billerSub.unsubscribe();
        this.categorySub.unsubscribe();
    }
  ionViewDidEnter(){
      this._billService.getBillers(this.categoryId).subscribe(res => {
      this.billers = res;
      });
      this.getCategory();
  }
  getCategory(){
    return this._billService.getCategory(this.categoryId).subscribe(category => {
        this.category = category;
      });
  }
}
