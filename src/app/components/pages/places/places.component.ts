// import { Component } from '@angular/core';
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
  
  constructor(private placesService: PlacesService,activatedRoute: ActivatedRoute,private favservice:FavService,private route:Router) {
    let placesobserable:Observable<Places[]>
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        placesobserable= this.placesService.getAllPlcesBySearchTerm(params['searchTerm']);
      }
      else {
        placesobserable = this.placesService.getAll();
      }

      placesobserable.subscribe((serverPlaces)=>{
        this.places=serverPlaces;
      })
    });
  }
 
}
