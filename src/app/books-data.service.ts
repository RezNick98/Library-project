import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import {Book} from './books-list/Book';
const URL = 'https://6362a22766f75177ea34b028.mockapi.io/Books';
@Injectable({
  providedIn: 'root'
})
export class BooksDataService {

  constructor(private http:HttpClient) { } 
  public getAll():Observable<Book[]>{
    return this.http.get<Book[]>(URL);
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  public changeWishbuttonValue(books:Book):Observable<Book>{
    this.http.put<Book>(URL,books.wishbutton=true)
    return this.http.delete<Book>(URL+'/'+books.id)
  }


}
