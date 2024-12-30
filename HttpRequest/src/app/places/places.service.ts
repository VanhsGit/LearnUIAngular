import { DestroyRef, inject, Injectable, signal } from '@angular/core';

import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private userPlaces = signal<Place[]>([]);
  private Places = signal<Place[]>([]);
  private destroyRef = inject(DestroyRef);
  private httpClient = inject(HttpClient);

  loadedUserPlaces = this.userPlaces.asReadonly();
  loadedPlaces = this.Places.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlace('http://localhost:3000/places').pipe(
      tap({
        next: (val) => {
          this.Places.set(val);
        }
      })
    );
  }

  loadUserPlaces() {
    return this.fetchPlace('http://localhost:3000/user-places').pipe(
      tap({
        next: (val) => {
          this.userPlaces.set(val);
        }
      })
    );
  }

  addPlaceToUserPlaces(place: Place) {
    const prevPlaces = this.userPlaces();
    if(!prevPlaces.some((p)=> p.id === place.id)){
      this.userPlaces.set([...prevPlaces, place]);
    }
  
    return this.httpClient.put('http://localhost:3000/user-places',{
      placeId: place.id
    }).pipe(
      tap({}),
      catchError((error) => {
        this.userPlaces.set(prevPlaces);
        return throwError(() => new Error("Fail roi")); 
      })
    );
  }

  removeUserPlace(place: Place) {
    const prevUserPlaces = this.userPlaces();

    if(prevUserPlaces.some((p) => p.id === place.id)){
      this.userPlaces().filter((p) =>p.id !== place.id);
    }

    return this.httpClient.delete(`http://localhost:3000/user-places/${place.id}`).pipe(
      catchError((error)=>{
        this.userPlaces.set(prevUserPlaces);
        return throwError(()=> new Error(error));
      })
    );
  }

  private fetchPlace(url: string){
    return this.httpClient
    .get<{places: Place[]}>(url)
    .pipe(
      map((val) => val.places),
      catchError(
        (error) => throwError(
          ()=>{
            console.log(error);
            return new Error("Something went wrong");
          }
        )
      )
    );
  }
}



// return this.httpClient
    // .get<{places: Place[]}>('http://localhost:3000/places')
    // .pipe(
    //   map((val) => val.places),
    //   catchError(
    //     (error) => throwError(
    //       ()=>{
    //         console.log(error);
    //         return new Error("Something went wrong");
    //       }
    //     )
    //   )
    // )
    // .subscribe({
    //   next: (val) => {
    //     // console.log(val.body?.places);  
    //     // console.log(val);
    //     // this.places.set(val);
    //   },
    //   error: (error) => {
    //     // this.error.set(error);
    //   },
    //   complete: () => {
    //     console.log("Get Api Completed");
    //   }
    // });