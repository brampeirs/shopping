import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;

  @ViewChild('amountInput') amountInput: ElementRef;

  @Output() submitted: EventEmitter<Ingredient> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    const name = this.nameInput.nativeElement.value;
    const amount = Number(this.amountInput.nativeElement.value);
    const ingredient = new Ingredient(name, amount);

    this.submitted.emit(ingredient);
  }


}
