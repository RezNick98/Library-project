import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from './books-list/Book';
import { BooksDataService } from './books-data.service';
const URL='https://6362a22766f75177ea34b028.mockapi.io/wishlist'

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  private _wishlist:Book[]=[];
  wishlist:BehaviorSubject<Book[]>=new BehaviorSubject(this._wishlist);

  constructor(private booksDataService:BooksDataService,
    private http:HttpClient) { }

    public getAll():Observable<Book[]>{
      return this.http.get<Book[]>(URL);
    }
  public addToWishList(books:Book):Observable<Book>{
    let item =  this.http.post<Book>(URL,books)
    this.http.put<Book>(URL,books.wishbutton=true);
    return item
  }


  removeFromWishList(books:Book):Observable<Book>{
    return this.http.delete<Book>(URL+'/'+books.id);
  }
}
