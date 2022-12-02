import { Component, OnInit } from '@angular/core';
import { Book } from '../books-list/Book';
import { WishListService } from '../wish-list.service';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  wishlist:Book[]=[

  ];
  constructor(private wishListService:WishListService) { 
    wishListService.wishlist.subscribe(observable=>this.wishlist=observable)
  }

  ngOnInit(): void {
    this.wishListService.getAll()
    .subscribe(books=> this.wishlist=books);
  }

  removeFromWishlist(books:Book):void{
    this.wishListService.removeFromWishList(books).subscribe()
  }

}
