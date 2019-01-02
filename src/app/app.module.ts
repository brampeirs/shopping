import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { RecipesComponent } from './views/recipes/recipes.component';
import { RecipeListComponent } from './views/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './views/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './views/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './views/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './views/shopping-list/shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './views/shopping-list/shopping-list.service';
import { RecipesService } from './views/recipes/recipes.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ShoppingListService, RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
