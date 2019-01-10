import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  array = [];
  constructor() { }

  updateCart(obj) {
      this.array.push(obj);
  } 
}

export interface Product {
  id: number,
  title: string,
  description: string,
  src: string,
  price: number,
  cartQuantity: number,
  availableQuantity: number
}
