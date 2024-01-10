import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ecommerce-project-task15';

  cartitemcount!:number;
  constructor( private cartservice:CartService ){

  }
  ngOnInit(): void {
    this.cartservice.realcartcount.subscribe( (count)=>{ this.cartitemcount = count     }  );      ;
  }
}
