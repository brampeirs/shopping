import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  public recipes: Array<Recipe> = [
    new Recipe('Tomaat', 'Rode Tomaten', 'https://www.veggipedia.nl/assets/Uploads/Migration/edb84c8ff4/PROD_8b247988596fb75abbc92dcfd92d8ab3_401__ScaleMaxWidthWzQwMF0.png'),
    new Recipe('Aardappel', 'Friet Aardappel', 'https://www.veggipedia.nl/assets/Uploads/Migration/aeb1278fdc/PROD_398c61e014e21cc1a834a358d82a09d8_576__FitMaxWzgwMCw3NjBd.png')
  ];

  constructor() {

  }

  ngOnInit() {
  }

}
