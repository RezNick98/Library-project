import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from './books-list/Book';
import { BooksDataService } from './books-data.service';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  private _wishlist:Book[]=[];
  wishlist:BehaviorSubject<Book[]>=new BehaviorSubject(this._wishlist);

  constructor(private booksDataService:BooksDataService,
    private http:HttpClient) { }


  addToWishList(books:Book){
    this.booksDataService.add(books)
    this._wishlist.push(books);
    console.log(this._wishlist.length);
    this.wishlist.next(this._wishlist);

  }

  removeFromWishList(books:Book){
    this.booksDataService.remove(books)
    this._wishlist.pop()
  }
}
