import { Injectable } from '@angular/core';
import { sample_food, sample_tags } from 'src/data';
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
  getAllTags(){
    return sample_tags
  }
  getAllFoodsByTag(tag:string){
    return tag == 'All'?
    this.getAllFood() :
    this.getAllFood().filter(food => food.tags?.includes(tag))
  }

  getFoodDetails(foodId:string){
    return this.getAllFood().find(food => food.id == foodId) ?? new Food()
  }
}
