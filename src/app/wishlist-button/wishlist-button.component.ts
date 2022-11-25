import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../books-list/Book';

@Component({
  selector: 'app-wishlist-button',
  templateUrl: './wishlist-button.component.html',
  styleUrls: ['./wishlist-button.component.scss']
})
export class WishlistButtonComponent implements OnInit {
  constructor() { }

  @Input()
  books!:Book;
  
  ngOnInit(): void {
  }
  
  addToWishList(books:Book):void{
    books.wishbutton=true;
    console.log(books.wishbutton)
  } 
}
