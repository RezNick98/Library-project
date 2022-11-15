import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from './books-list/Book';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private _wishList:Book[]=[]
  wishList : BehaviorSubject<Book[]>=new BehaviorSubject(this._wishList);
  list: any;
  constructor() { }
  
  
  addToWishlist(book: Book) {
    if(!this._wishList.find((v1) => v1.name==book.name)){
      this._wishList.push({... book})
      book.wishbutton=true;
    }else{
      book.wishbutton=false;
    }
    console.log(this._wishList.length)
    this.wishList.next(this._wishList);
  }


}
