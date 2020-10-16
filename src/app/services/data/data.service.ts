import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(public http: HttpClient) { }
    getProducts() {
        return this.http.get<any[]>('assets/json/products.json');
    }
    getRestaurants() {
        return this.http.get<any[]>('assets/json/restaurants.json');
    }
    getRecipes() {
        return this.http.get<any[]>('assets/json/recettes.json');
    }
    getBoats() {
        return this.http.get<any[]>('assets/json/bateaux.json');
    }
}
