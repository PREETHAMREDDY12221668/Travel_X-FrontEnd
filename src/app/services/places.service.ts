import { Injectable } from '@angular/core';
import { Places } from '../shared/models/Places';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PLACES_BY_ID_URL, PLACES_SEARCH_URL, PLACES_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private http:HttpClient) { }

  getAll():Observable <Places[]> {
    return this.http.get<Places[]>(PLACES_URL);
  }
 

  getPlacesById(placeId: string): Observable<Places> {
    return this.http.get<Places>(PLACES_BY_ID_URL + placeId);
  }
 
  getAllPlcesBySearchTerm(searchTerm: string):Observable <Places[]> {
    return this.http.get<Places[]>(PLACES_SEARCH_URL+searchTerm)
  }
  
}
// import { Injectable } from '@angular/core';
// import { Places } from '../shared/models/Places';
// import { Sample_Plces } from '../../data'; // Corrected import path
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { PLACES_BY_ID_URL, PLACES_SEARCH_URL, PLACES_URL } from '../shared/constants/urls';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class PlacesService {

//   constructor(private http:HttpClient) { }

//   getAll(): Observable<Places[]> {
//     return this.http.get<Places[]>(PLACES_URL);
//   }
//   getAllPlcesBySearchTerm(searchTerm : string){
//     return this.http.get<Places[]>(PLACES_SEARCH_URL+searchTerm);
//   }

//   getPlacesById(placeId: string): Places {
//     return this.http.get<Places>(PLACES_BY_ID_URL+placeId);
//   }
//   getPlacesByTags(tags: string[]): Places[] {
//     return tags.length === 0 ? this.getAll() : 
//       this.getAll().filter(place => place.tags?.some(tag => tags.includes(tag.toLowerCase())));
//   }
  
// }