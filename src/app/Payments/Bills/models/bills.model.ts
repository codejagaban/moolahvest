
export class BillsModel {
    categories: Categories[] = [];
    billers: Billers [] = [];
    billerItems: BillerItems [] = [];
    category: Categories;
    biller: Billers;
    billItem : BillerItems;

}

export class Categories {
    constructor( public id: number, public name: string, public description: string, public billType: BillTypes){
    }
}
export class Billers {
    constructor( public id: number, public name: string, public code: string, public surCharge: number, public logoUrl: string){}
}
export class BillerItems {
    constructor(public priority: number,
                public name: string,
                public amount: number,
                public isFixedAmount: boolean,
                public customFields: CustomFields[]){}
}
export class CustomFields {

   constructor(public id: string, public name,
               public dataType: DataTypes,
               public hasDropDown: boolean,
               public dropDownType: DropDownType,
               public dropDown: DropDown []
    ) {}

}
export class CategoryFilter {

    constructor(public page: number, public pageSize: number, public billType: BillTypes){}
}
export class DropDown {
  constructor(public id: string, public name: string, public isFixedAmount: boolean, public amount: number){}
}
export enum BillTypes {
        Airtime = 1,
        Data = 2,
        Bills = 3
}

export enum DataTypes
{
    Date,
    AlphaBet,
    Numbers,
    AlphaNumeric,
    All,
}

export enum DropDownType
{
    SingleSelect,
    MultipleSelect,
    CheckList
}
