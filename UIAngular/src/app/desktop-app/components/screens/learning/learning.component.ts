import { Component, signal, computed, input } from '@angular/core';
import { Cats } from '../../../../Shared/Models/cats';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.scss',
  standalone: false
})
export class LearningComponent {
  CatItems = Cats;
  RandomIndex = Math.floor(Math.random() * Cats.length);
  GetUser = signal(Cats[this.RandomIndex]);
 
  gurl = computed(() => this.GetUser().url);

  Userid = 1;

  get GetUserID(){
    return this.CatItems.find((user)=>user.id === this.Userid)!;
  }

  changeId(id: number){
    this.Userid = id;
  }

  get Cat(){
    return this.CatItems[this.RandomIndex];
  }

  ResetData() {
    this.RandomIndex = Math.floor(Math.random() * Cats.length);
    this.GetUser.set(Cats[this.RandomIndex]);
  }
}
