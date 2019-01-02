import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;

  @ViewChild('amountInput') amountInput: ElementRef;


  constructor(private _shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }
  onSubmit() {
    const name = this.nameInput.nativeElement.value;
    const amount = Number(this.amountInput.nativeElement.value);
    const ingredient = new Ingredient(name, amount);

    this._shoppingListService.addIngredient(ingredient);
  }


}
