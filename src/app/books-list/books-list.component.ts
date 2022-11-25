import { Component, OnInit } from '@angular/core';
import { BooksDataService } from '../books-data.service';
import { Book } from './Book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  books:Book[]=[];

  constructor(private booksDataService:BooksDataService) {
  }

  
  ngOnInit(): void {
    this.booksDataService.getAll()
    .subscribe(books=>this.books=books)
  }


}
