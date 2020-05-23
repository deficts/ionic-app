import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model'
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[]=[
    {
      id:'r1',
      title:'Tacos',
      imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/01_Tacos_al_Pastor.jpg/1599px-01_Tacos_al_Pastor.jpg',
      ingredients: ['Tortilla','Carne al pastor','Cilantro','Cebolla']
    },
    {
      id:'r2',
      title:'Empanada',
      imageUrl:'https://p1.pxfuel.com/preview/749/279/735/food-appetizer-beef-pastry-royalty-free-thumbnail.jpg',
      ingredients: ['Masa','Carne molida','Elote','Chimichurri']
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
