import { Component, OnInit } from '@angular/core';
import { Book } from './Book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  horror_books:Book[]=[
    {
      name:"Pet Sematary",
    type:"horror",
    images:"assets/images/Horror/images.jpg",
    available:true,
  },
  {
    name:"Tales Of Horror",
    type:"horror",
    images:"assets/images/Horror/tales_horror.jpg",
    available:true,
  },
  {
    name:"The Outsider",
    type:"horror",
    images:"assets/images/Horror/images (1).jpg",
    available:true,
  },
  {
  name:"The Tokyo Zodiacs Murders",
  type:"horror",
  images:"assets/images/Horror/TheTokyoZOdiacMurders.jpg",
  available:false,
  }
  
]
  fantasy_books:Book[]=[
  {
    name:"Journey To The Center Of The Earth",
    type:"adventure",
    images:"assets/images/Fantasy/journey.jpg",
    available:true,
  },
  {
    name:"Moby Dick",
    type:"fantasy",
    images:"assets/images/Fantasy/moby.jpg",
    available:true,
  },
  {
    name:"Jurassic Park",
    type:"fantasy",
    images:"assets/images/Fantasy/jp.jpg",
    available:true,
  },
  {
    name:"Shadows On The Moon",
    type:"fantasy",
    images:"assets/images/Fantasy/Shadows-on-the-Moon.jpeg",
    available:false,
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
