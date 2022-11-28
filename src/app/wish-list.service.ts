import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from './books-list/Book';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  private _wishlist:Book[]=[];
  wishlist:BehaviorSubject<Book[]>=new BehaviorSubject(this._wishlist);

  constructor() { }


  addToWishList(books:Book){
    this._wishlist.push(books);
    books.wishbutton=true;
    console.log(this._wishlist.length);
    this.wishlist.next(this._wishlist);

  }

  removeFromWishList(books:Book){
    this._wishlist.pop()
    books.wishbutton=false;
  }

  getWishList(){

  }
}
