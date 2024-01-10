import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit{

productscart!:Products[];

constructor(
  private carservice:CartService,
){

}
  ngOnInit(): void {
    this.productscart =this.carservice.getcartitem();
  }
  remove(id:number){

    this.carservice.removeitem(id);
  }
}
