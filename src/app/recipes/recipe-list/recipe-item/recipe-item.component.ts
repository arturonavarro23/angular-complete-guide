import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {
  @Input()
  recipe: Recipe;
  @Output()
  onSelectRecipe= new EventEmitter<void>();

  constructor() {}

  onRecipleClick(event: Event) {
    event.preventDefault();
    this.onSelectRecipe.emit();
  }
}
