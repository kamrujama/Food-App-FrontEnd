import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodServices } from 'src/app/services/foodService.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  food_data:Food[] = [

  ]
  constructor(private foodService : FoodServices, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe(params =>{
      if(params.searchItem)
        this.food_data = foodService.getAllFoodBySearch(params.searchItem)
      else
        this.food_data = foodService.getAllFood()
    })

  }

  ngOnInit(): void {
  }

}
