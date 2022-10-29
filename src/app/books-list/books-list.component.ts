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
    name:"Pet Sematary",
    type:"horror",
    images:"assets/images/Horror/images.jpg",
    available:true,
    wishbutton:false,
  },
  {
    name:"Tales Of Horror",
    type:"horror",
    images:"assets/images/Horror/tales_horror.jpg",
    available:true,
    wishbutton:false,
  },
  {
    name:"The Outsider",
    type:"horror",
    images:"assets/images/Horror/images (1).jpg",
    available:true,
    wishbutton:false,
  },
  {
  name:"The Tokyo Zodiacs Murders",
  type:"horror",
  images:"assets/images/Horror/TheTokyoZOdiacMurders.jpg",
  available:false,
  wishbutton:false,
  },
  {
    name:"Journey To The Center Of The Earth",
    type:"adventure",
    images:"assets/images/Fantasy/journey.jpg",
    available:true,
    wishbutton:false,
  },
  {
    name:"Moby Dick",
    type:"fantasy",
    images:"assets/images/Fantasy/moby.jpg",
    available:true,
    wishbutton:false,
  },
  {
    name:"Jurassic Park",
    type:"fantasy",
    images:"assets/images/Fantasy/jp.jpg",
    available:true,
    wishbutton:false,
  },
  {
    name:"Shadows On The Moon",
    type:"fantasy",
    images:"assets/images/Fantasy/Shadows-on-the-Moon.jpeg",
    available:false,
    wishbutton:false,
  }

]


  constructor() {
  }

  ngOnInit(): void {

  }
}
