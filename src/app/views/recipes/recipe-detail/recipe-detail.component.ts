import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  public recipe: Recipe;

  constructor(private _recipesService: RecipesService) { }

  ngOnInit() {
    this._recipesService.recipeSelected.subscribe(selectedRecipe => {
      this.recipe = selectedRecipe;
    });
  }

  onAddToShoppingList() {
    this._recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
