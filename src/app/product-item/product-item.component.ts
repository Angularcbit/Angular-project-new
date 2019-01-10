import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedDataService, Product } from '../shared-data.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent implements OnInit {
  @Input ('product') product : Product;
  @Output('clicked') clicked = new EventEmitter();
  // @Input('title') title: String;
  // @Input('description') description: String;
  // @Input('price') price: Number;

  constructor() { }
  
  ngOnInit() {
  }

  onClick() {
    this.clicked.emit();
  }

}


