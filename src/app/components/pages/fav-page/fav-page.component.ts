import { Component, OnInit } from '@angular/core';
import { FavService } from 'src/app/services/fav.service';
import { Fav } from 'src/app/shared/models/Fav';
import { FavItems } from 'src/app/shared/models/FavItems';

@Component({
  selector: 'app-fav-page',
  templateUrl: './fav-page.component.html',
  styleUrls: ['./fav-page.component.css']
})
export class FavPageComponent implements OnInit {
  fav!:Fav;
  
  constructor(private favservices:FavService) {
    this.favservices.getFavObservable().subscribe((fav)=>{
      this.fav=fav;
    })
   }
  
  ngOnInit(): void {
  }
  // removeFromFav(favItems:FavItems){
  //   this.favservices.removeFromFav(favItems.place.id);
  // }
  // changeQuantity(favItems:FavItems,quantityInString:string){
  //     const quantity=parseInt(quantityInString);
  //     this.favservices.changeQuantity(favItems.place.id,quantity);
  // }

}
