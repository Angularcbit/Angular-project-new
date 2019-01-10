import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-category-section',
  templateUrl: './category-section.component.html',
  styleUrls: ['./category-section.component.css']
})
export class CategorySectionComponent implements OnInit {

  products = [{
    id: 1,
    title: "Temperature Sensor",
    description: "Measure Body Temperature",
    price: "300",
    src: "http://www.nskelectronics.in/image/cache/data/INTERFACE%20BRDS/DISPLAYS/digital%20thermomter%20display1%20-800x800.png",
    cartQuantity: 1,
    availableQuantity: 10
  },
  {
    id: 2,
    title: "Humidity Sensor",
    description: "Humidity Sensor",
    price: "100",
    src: "http://www.nskelectronics.in/image/cache/data/INTERFACE%20BRDS/DISPLAYS/digital%20thermomter%20display1%20-800x800.png",
    cartQuantity: 1,
    availableQuantity: 10
  },
  {
    id: 3,
    title: "Air Quality Sensor",
    description: "Air Quality Sensor",
    price: "500",
    src: "http://www.nskelectronics.in/image/cache/data/INTERFACE%20BRDS/DISPLAYS/digital%20thermomter%20display1%20-800x800.png",
    cartQuantity: 1,
    availableQuantity: 10
  }];

  constructor(private cartdata: SharedDataService) { }

  ngOnInit() {
  }

  updatingCart(obj): void {
      console.log("its clicked!", obj);
      if(this.cartdata.array.length === 0) {
        this.cartdata.array.push(obj);
        console.log("times 0-");
      }
      else {
        for(var i = 0, status = false; i < this.cartdata.array.length; i++) {
          if(this.cartdata.array[i].id === obj.id) {
            status = true;
            break;
          }
        }

        if(status === true) {
          this.cartdata.array[i].cartQuantity++;
        }
        else {
          this.cartdata.array.push(obj)
        }
      }
      console.log("clikable: ", this.cartdata.array);
  }

}
