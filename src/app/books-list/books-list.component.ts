import { Component, Input, OnInit } from '@angular/core';
import { BooksDataService } from '../books-data.service';
import { WishListService } from '../wish-list.service';
import { Book } from './Book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  books:Book[]=[]

  constructor(private booksDataService:BooksDataService, 
    private wishListService:WishListService) {
  }

  
  ngOnInit(): void {
    this.booksDataService.getAll()
    .subscribe(books=>this.books=books)

  }

  addToWishList(books:Book):void{
    this.wishListService.addToWishList(books)
    this.booksDataService.add(books)
  }



}
