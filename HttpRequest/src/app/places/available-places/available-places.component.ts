import { Component, DestroyRef, Inject, inject, OnInit, output, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  selectPlace = output<Place>();
  error = signal('');
  private httpClient = inject(HttpClient);
  private destroyref = inject(DestroyRef);
  private placeService = inject(PlacesService)

  SelectOutput(place: Place){
    this.placeService.addPlaceToUserPlaces(place);
  }

  ngOnInit(): void {
    const subscription = this.placeService.loadAvailablePlaces()
    .subscribe({
      next: (val) => {
        console.log(val);
        this.places.set(val);
      },
      error: (error: Error) => {
        console.log(error);
      }, 
      complete: () => {
        console.log("fetch Success !!");
      }
    })


    this.destroyref.onDestroy(() => {
      subscription.unsubscribe();
    })
  }
}
