import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FavService } from 'src/app/services/fav.service';
import { PlacesService } from 'src/app/services/places.service';
import { Places } from 'src/app/shared/models/Places';

@Component({
  selector: 'app-places-content',
  templateUrl: './places-content.component.html',
  styleUrls: ['./places-content.component.css']
})
export class PlacesContentComponent implements OnInit {
  places: any[] = [];
  place!: Places;
  selectedTagIndex: number = 0; // Track the index of the selected tag

  constructor(activatedroute: ActivatedRoute, placesServices: PlacesService, private favservice: FavService, private route: Router) {
    activatedroute.params.subscribe((params) => {
      if (params['id']) {
        placesServices.getPlacesById(params['id']).subscribe(serverPlaces => {
          this.place = serverPlaces;
        });
      }
    });
  }

  ngOnInit(): void {
  }

  // Method to update the displayed content based on the selected tag index
  updateSelectedContent(index: number) {
    this.selectedTagIndex = index;
  }

  addToFav() {
    this.favservice.addToFav(this.place);
    this.route.navigateByUrl('/fav-page');
  }
}
