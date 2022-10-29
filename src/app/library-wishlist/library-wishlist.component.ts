import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../books-list/Book';

@Component({
  selector: 'app-library-wishlist',
  templateUrl: './library-wishlist.component.html',
  styleUrls: ['./library-wishlist.component.scss']
})
export class LibraryWishlistComponent implements OnInit {
books: any;


  constructor() { }
  ngOnInit(): void {
  }
  removeFromWishList(books:Book):void{
    if(books.wishbutton==true){
      books.wishbutton=false;
    }
  }
}
