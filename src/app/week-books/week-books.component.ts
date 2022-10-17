import { Component, OnInit } from '@angular/core';
import { WeekBook } from './WeekBooks';

@Component({
  selector: 'app-week-books',
  templateUrl: './week-books.component.html',
  styleUrls: ['./week-books.component.scss']
})
export class WeekBooksComponent implements OnInit {
  week_books:WeekBook[]=[
    {
      name:"IT",
      images:"assets/images/Weeks_offer/it_pb.jpg",
      offer_until:new Date(),
    },
    {
      name:"The Iliad",
      images:"assets/images/Weeks_offer/iliad.jpg",
      offer_until:new Date(),
    },
    {
      name:"Around The World In Eighty Days",
      images:"assets/images/Weeks_offer/80_days.jpg",
      offer_until:new Date(),
    },
    {
      name:"Tom Sawyer",
      images:"assets/images/Weeks_offer/images.jpg",
      offer_until:new Date(),
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
