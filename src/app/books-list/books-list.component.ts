import { Component, OnInit } from '@angular/core';
import { Book } from './Book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  books:Book[]=[
    {
    type:"horror",
    images:"assets/images/Horror/images.jpg",
  },
  {
    type:"horror",
    images:"assets/images/Horror/tales_horror.jpg"
  },
  {
    type:"horror",
    images:"assets/images/Horror/images (1).jpg"
  }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
