import { Component, OnInit } from '@angular/core';
import { FoodServices } from 'src/app/services/foodService.service';
import { Tags } from 'src/app/shared/models/Tags';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags:Tags[] = [

  ]
  constructor(private foodService : FoodServices) {
    this.tags = foodService.getAllTags()
   }

  ngOnInit(): void {
  }

}
