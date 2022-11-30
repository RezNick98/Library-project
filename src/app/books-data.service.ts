import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  public add(books:Book):void{
    this.http.put(URL,books.wishbutton=true)
  }

  public remove(books:Book):void{
    this.http.delete(URL+'/:'+books.id);
    
  }  
}
