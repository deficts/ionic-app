import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model'
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipesChange = new Subject<Recipe[]>();

  private recipes: Recipe[]=[
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

  public getAllRecipes(){
    return [...this.recipes];
  }

  public getRecipe(recipeId: string){
    return {...this.recipes.find(recipe=>{
      return recipe.id === recipeId;
    })};
  }

  public deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe =>{
      return recipe.id!==recipeId;
    });
    this.recipesChange.next(this.recipes);
  }
}
