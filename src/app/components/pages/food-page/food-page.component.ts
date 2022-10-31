import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodServices } from 'src/app/services/foodService.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  @Output() cartItemCount = 0
  food!:Food
  constructor(activatedRoute : ActivatedRoute, private foodService : FoodServices) {
    activatedRoute.params.subscribe(params =>{
      if(params.id)
      this.food = foodService.getFoodDetails(params.id)
    })

   }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartItemCount += 1
  }

}
