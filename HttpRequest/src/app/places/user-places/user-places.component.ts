import { Component, DestroyRef, inject, output, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { HttpClient } from '@angular/common/http';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent {
  selectPlace = output<Place>();
  error = signal('');
  private placeService = inject(PlacesService);
  private destroyRef = inject(DestroyRef);

  places = this.placeService.loadedUserPlaces;

  onRemoveUserPlace(place: Place){
    this.placeService.removeUserPlace(place);
  }

  ngOnInit(): void {
    const subscription = this.placeService.loadUserPlaces().subscribe();
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
    
    this.destroyRef.onDestroy(() =>{
      subscription.unsubscribe();
    })
  }

}
