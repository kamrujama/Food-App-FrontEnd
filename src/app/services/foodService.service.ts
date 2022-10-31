import { Injectable } from '@angular/core';
import { sample_food } from 'src/data';
import { Food } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodServices
 {

  constructor() { }

  getAllFood():Food[]{
    return sample_food
  }
  getAllFoodBySearch(searchItem:string){
    return this.getAllFood().filter(food => food.name.toLowerCase().includes(searchItem.toLowerCase()))
  }
}
