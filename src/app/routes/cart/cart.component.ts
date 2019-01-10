import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/shared-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: any[];


  constructor(private cartdata: SharedDataService) {
    this.products = cartdata.array;
    console.log(this.cartdata);
    console.log(this.products);
   }

  ngOnInit() {
  }

}
