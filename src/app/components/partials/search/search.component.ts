import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm='';
  constructor(activatedRoute: ActivatedRoute, private router: Router,private placesService: PlacesService) {
    activatedRoute.params.subscribe((params) => {
      if(params['searchTerm']) this.searchTerm=params['searchTerm'];
    });
  }

  ngOnInit(): void {
  }

  Search(term: string): void {
    this.searchTerm = term;
    this.router.navigateByUrl('/places/search/' + term);
    const searchResults = this.placesService.getAllPlcesBySearchTerm(this.searchTerm);
  }
}