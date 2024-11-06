import { Component } from '@angular/core';
import { Cats } from '../../../../Shared/Models/cats';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.scss'
})
export class LearningComponent {
  CatItems = Cats;
  RandomIndex = this.getRandomIndex(0, this.CatItems.length)

  get Cat(){
    return this.CatItems[this.RandomIndex];
  }

  getRandomIndex(min: number, max: number):number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
