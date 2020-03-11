import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output()
  onSelectRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a simply recipe', 'https://static01.nyt.com/images/2019/12/11/dining/11as-pasta-with-ricotta-and-lemon/merlin_155855151_a42a72df-8230-420d-b9b9-d81fe089ff55-articleLarge.jpg')
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeClick(recipe: Recipe) {
    this.onSelectRecipe.emit(recipe);
  }
}
