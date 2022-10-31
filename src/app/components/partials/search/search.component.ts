import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodServices } from 'src/app/services/foodService.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchItem = ''
  constructor(private foodService : FoodServices, private router : Router, activeRoute : ActivatedRoute) {
    activeRoute.params.subscribe(params =>{
      if(params.searchItem)
        this.searchItem = params.searchItem
    })
   }

  ngOnInit(): void {
  }

  search(searchValue:string){
    if(searchValue)
      this.router.navigateByUrl('/search/' + searchValue)
  }

}
