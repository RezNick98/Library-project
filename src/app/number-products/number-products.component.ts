import { Component, Input, OnInit, Output } from '@angular/core';
import { Product, } from '../library-products/Product';

@Component({
  selector: 'app-number-products',
  templateUrl: './number-products.component.html',
  styleUrls: ['./number-products.component.scss']
})
export class NumberProductsComponent implements OnInit {
  @Input()
  products!: Product;
  constructor() { }

  ngOnInit(): void {
  }
  upQuantity(products:Product){
    products.quantity++;
  }
  downQuantity(products:Product){
    if(products.quantity>0){
      products.quantity--;
    }
  }

}
