import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../../../services/places.service';
import { Component } from '@angular/core';
import { FavService } from 'src/app/services/fav.service';
import { Places } from 'src/app/shared/models/Places';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent {
  places: Places[] = []; // Define the type according to your data model
  searchTerm: string = '';
  loading: boolean = true; // Initialize loading as true

  constructor(
    private placesService: PlacesService,
    private activatedRoute: ActivatedRoute,
    private favservice: FavService,
    private route: Router
  ) {
    let placesObservable: Observable<Places[]>;

    this.loading = true; // Start loading before API call
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        placesObservable = this.placesService.getAllPlcesBySearchTerm(params['searchTerm']);
      } else {
        placesObservable = this.placesService.getAll();
      }

      placesObservable.subscribe(
        (serverPlaces) => {
          this.places = serverPlaces;
          this.loading = false; // Stop loading when data is received
        },
        (error) => {
          console.error('Error fetching places', error);
          this.loading = false; // Stop loading even if an error occurs
        }
      );
    });
  }
}
