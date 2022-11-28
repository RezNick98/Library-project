import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BooksDataService } from '../books-data.service';
import { Book } from '../books-list/Book';

@Component({
  selector: 'app-wishlist-button',
  templateUrl: './wishlist-button.component.html',
  styleUrls: ['./wishlist-button.component.scss']
})
export class WishlistButtonComponent implements OnInit {
  constructor() { }

  @Input()
  wishbutton!: boolean;
  @Output()
  wishbuttonChange:EventEmitter<boolean>=new EventEmitter<boolean>()
  
  ngOnInit(): void {
  }
  
  addToWishList():void{
    this.wishbutton=true;
    this.wishbuttonChange.emit(this.wishbutton);
    console.log(this.wishbutton)
  } 
}
