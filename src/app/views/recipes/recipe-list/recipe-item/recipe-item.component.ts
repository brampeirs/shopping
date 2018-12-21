import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input()
  public recipe: Recipe;

  @Output()
  public recipeSelected: EventEmitter<Recipe> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected() {
    this.recipeSelected.emit(this.recipe);
  }
}
