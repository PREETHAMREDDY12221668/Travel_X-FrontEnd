import { Injectable } from '@angular/core';
import { Fav } from '../shared/models/Fav';
import { BehaviorSubject, Observable } from 'rxjs';
import { Places } from '../shared/models/Places';
import { FavItems } from '../shared/models/FavItems';

@Injectable({
  providedIn: 'root'
})
export class FavService {
  private fav: Fav = this.getFavItemsToLocalStorage();
  private favSubject: BehaviorSubject<Fav> = new BehaviorSubject(this.fav);

  constructor() { }

  addToFav(place: Places): void {
    let favItems = this.fav.items.find(item => item.place.id === place.id)
    if (favItems) {
      return;
    }
    this.fav.items.push(new FavItems(place));
    this.setFavItemsToLocalStorage();
  }

  // removeFromFav(placeid: number): void {
  //   this.fav.items = this.fav.items.filter(item => item.place.id != placeid);
  //   this.setFavItemsToLocalStorage();
  // }

  // changeQuantity(placeid: number, quantity: number): void {
  //   let favItems = this.fav.items.find(item => item.place.id === placeid);
  //   if (!favItems) return; // Null check
  //   favItems.quantity = quantity;
  //   favItems.price = quantity * favItems.place.price;
  //   this.setFavItemsToLocalStorage();
  // }

  // clearFav(): void {
  //   this.fav = new Fav();
  //   this.setFavItemsToLocalStorage();
  // }

  getFavObservable(): Observable<Fav> {
    return this.favSubject.asObservable();
  }

  private setFavItemsToLocalStorage(): void {
    this.fav.totalEstimatedPrice = this.fav.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.fav.totalPlaces = this.fav.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);
    const favJson = JSON.stringify(this.fav);
    localStorage.setItem('Fav', favJson);
    this.favSubject.next(this.fav);
  }

  private getFavItemsToLocalStorage(): Fav {
    const favJson = localStorage.getItem('Fav');
    return favJson ? JSON.parse(favJson) : new Fav();
  }
}
