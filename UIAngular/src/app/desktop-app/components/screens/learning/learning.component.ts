import { Component, signal, computed } from '@angular/core';
import { Cats } from '../../../../Shared/Models/cats';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.scss'
})
export class LearningComponent {
  CatItems = Cats;
  RandomIndex = Math.floor(Math.random() * Cats.length);
  GetUser = signal(Cats[this.RandomIndex]);
 
  gurl = computed(() => this.GetUser().url);

  get Cat(){
    return this.CatItems[this.RandomIndex];
  }

  AlertData(){
    alert(this.CatItems);
  }

  ResetData() {
    this.RandomIndex = Math.floor(Math.random() * Cats.length);
    this.GetUser.set(Cats[this.RandomIndex]);
  }
}
