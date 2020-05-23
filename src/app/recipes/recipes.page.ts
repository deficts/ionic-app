import { Component, OnInit, OnChanges } from '@angular/core';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.model';
import { Subscription } from 'rxjs/internal/Subscription';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit{
  recipes: Recipe[];
  private recipesSubs: Subscription;
  
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes=this.recipesService.getAllRecipes();
    this.recipesSubs = this.recipesService.recipesChange.subscribe(recipes => {
      this.recipes = recipes;
    });
  }

}