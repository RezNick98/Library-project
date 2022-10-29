import { Book } from './../books-list/Book';
import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-wishlist',
  templateUrl: './input-wishlist.component.html',
  styleUrls: ['./input-wishlist.component.scss']
})
export class InputWishlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  books!: Book;

  addToWishList(books : Book){
    if(books.wishbutton==false){
      books.wishbutton=true;
    }

  }
}
