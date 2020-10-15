import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/services/Api.services';
import { Config } from 'src/assets/config/config';
import { BillerItems, Billers, BillsModel, BillTypes, Categories, CategoryFilter } from './models/bills.model';



@Injectable({
 providedIn: 'root'
})
export class BillsService extends ApiService{
    baseUrl = `${Config.settings.apiServer.BillsUrl}`;
    private _categories = new BehaviorSubject<Categories[]>([   
    new Categories(1, 'Bills', 'Pay Your Bills', BillTypes.Bills),
    new Categories(2, 'Airtime', 'Buy Your Airtime', BillTypes.Airtime),
    new Categories(3, 'Data', 'Bu Data Subscription', BillTypes.Data)]);
    private _billers = new BehaviorSubject<Billers[]>([]);
    private _billerItems = new BehaviorSubject<BillerItems[]>([]);
    public billModel: BillsModel = new BillsModel();
    constructor(httpClient: HttpClient) {
        super(httpClient);
      }
      get categories(){
          return this._categories.asObservable();
      }
      get billers(){
          return this._billers.asObservable();
      }
    getCategories(filter: CategoryFilter){

        return this.categories.pipe(take(1), switchMap(categories=> {
           if(!categories || categories.length <=0){
              return this.fetchCategories(filter);
           } else{
               return of(categories);
           }
        }));
    }
    getCategory(id: number){
        return this.categories.pipe(take(1), map(categories => {
        return {...categories.find(x => x.id === id)};
        }));
    }
    getBiller(id: number){
       return this.billers.pipe(take(1), map(billers => {
        return {...billers.find(x => x.id === id)};
        }));
    }
    getBillers(categoryId: number){
        return this.billers.pipe(take(1), switchMap(billers => {
            if(!billers || billers.length <=0 ){
               return this.fetchBillers(categoryId);
            } else{
                return of(billers);
            }
         }));
    }
    getBillerItems(billerId: number){
        return this.Get<BillerItems[]>(billerId,`${this.baseUrl}/billerItems`).pipe(map(res=> {
            return res.payload;
        }),
        tap(billerItems=> {
            this._billerItems.next(billerItems);
        }));
    }
    getBillerItemsWiitCode(billerCode: string){
        return this.Get<BillerItems[]>(billerCode,`${this.baseUrl}/billerItems`).pipe(map(res=> {
            return res.payload;
        }),
        tap(billerItems=> {
            this._billerItems.next(billerItems);
        }));
    }
    private fetchCategories(filter: CategoryFilter){
        return this.GetDataWithFilter<Categories[]>(filter, `${this.baseUrl}/categories`)
        .pipe(
            map( resData => {
             return resData.payload;
        }),
        tap(categories => {
         this._categories.next(categories);
        }));
    }
    private fetchBillers(categoryId: number){
        return this.Get<Billers[]>(categoryId,`${this.baseUrl}/billers`).pipe(map(res=> {
            return res.payload;
        }),
        tap(billers => {
            this._billers.next(billers);
        }));
    }
}
