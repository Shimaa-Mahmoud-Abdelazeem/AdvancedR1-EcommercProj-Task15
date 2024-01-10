import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

products!:Products[];

constructor(
  private pservice :ProductService,
  private cartservice:CartService
  ){

}
ngOnInit(): void {
  this.pservice.getproduct().subscribe((data :Products[])=> {this.products = data});
}
addtocart(product:Products){
  this.cartservice.addtocart(product);
  console.log(product);
}
}
