import { Places } from "./Places";

export class FavItems {
    constructor(public place: Places) {
        if (place) { // Check if place object is defined
            this.price = place.price; // Access price property only if place is defined
        }
    }
    quantity: number = 1;
    price: number = this.place ? this.place.price : 0; // Default to 0 if place is undefined
}
