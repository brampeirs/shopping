import { Component, OnChanges, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnChanges {
  public ingredients: Array<Ingredient> = [];
  constructor(private _shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this._shoppingListService.getIngredients();
    this._shoppingListService.ingredientsChanged.subscribe(() => {
      this.ingredients = this._shoppingListService.getIngredients();
    });
  }

  ngOnChanges() {

  }

}
