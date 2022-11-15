import { Component, OnInit } from '@angular/core';
import { Book } from '../books-list/Book';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  list : Book[] = [];
  constructor(private wishlist:WishlistService) { 
    wishlist.list.subscribe((observable: WishlistService)=>this.wishlist = observable)
    
  }

  ngOnInit(): void {
  }

}
