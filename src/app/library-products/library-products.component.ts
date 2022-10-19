import { Component, OnInit } from '@angular/core';
import { Product,  } from './Product';

@Component({
  selector: 'app-library-products',
  templateUrl: './library-products.component.html',
  styleUrls: ['./library-products.component.scss']
})
export class LibraryProductsComponent implements OnInit {
  products:Product[]=[
    {
      name:"Uhu glue",
      images:"assets/images/Library_products/uhu.jpeg",
      price:3.00,
      quantity:0,
  },
  {
    name:"Elmers glue",
    images:"assets/images/Library_products/glue.jpeg",
    price:3.00,
    quantity:0,
  },

  {
    name:"Pack Notebook",
    images:"assets/images/Library_products/notebook.jpeg",
    price:3.00,
    quantity:0,
  },

  {
    name:"Rubber",
    images:"assets/images/Library_products/index.jpeg",
    price:3.00,
    quantity:0,
  },
  {
    name:"FaberCastell pencil",
    images:"assets/images/Library_products/fabercastellpencil.jpeg",
    price:3.00,
    quantity:0,
  },
  {
    name:"Parker pen",
    images:"assets/images/Library_products/parkerpen.jpeg",
    price:3.00,
    quantity:0,
  },
  {
    name:"Personal notebook",
    images:"assets/images/Library_products/personal.jpeg",
    price:3.00,
    quantity:0,
  },
  {
    name:"Pencil",
    images:"assets/images/Library_products/pencil.jpeg",
    price:3.00,
    quantity:0,
  },
  {
    name:"Stapler",
    images:"assets/images/Library_products/abrochadoramapped.jpeg",
    price:3.00,
    quantity:0,
  },
  {
    name:"clip",
    images:"assets/images/Library_products/clip.jpeg",
    price:3.00,
    quantity:0,
  },
  {
    name:"Stapler",
    images:"assets/images/Library_products/abrochadora.jpeg",
    price:3.00,
    quantity:0,
  },
]
  constructor() { }

  ngOnInit(): void {
  }


}
