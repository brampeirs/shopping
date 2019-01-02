import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter();

  private recipes = [
    new Recipe('Tasty Schnitzel',
      'Waaw',
      'https://www.veggipedia.nl/assets/Uploads/Migration/edb84c8ff4/PROD_8b247988596fb75abbc92dcfd92d8ab3_401__ScaleMaxWidthWzQwMF0.png',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
    new Recipe('Big Burger',
      'What Else',
      'https://www.veggipedia.nl/assets/Uploads/Migration/aeb1278fdc/PROD_398c61e014e21cc1a834a358d82a09d8_576__FitMaxWzgwMCw3NjBd.png',
      [new Ingredient('bread', 2), new Ingredient('Meat', 1), new Ingredient('Tomato', 1), new Ingredient('Salad', 1)])
  ];

  constructor(private _shoppingListService: ShoppingListService) {

  }

  public getRecipes() {
    return this.recipes.slice(); // use slice to make copy of array so you can not accedently modify since arrays are reference types
  }

  public addIngredientsToShoppingList(ingredients: Ingredient[]) {
   this._shoppingListService.addIngredients(ingredients);

  }

}


