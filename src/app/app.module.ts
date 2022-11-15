import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { WeekBooksComponent } from './week-books/week-books.component';
import { LibraryBooksComponent } from './library-books/library-books.component';
import { LibraryAboutComponent } from './library-about/library-about.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WishlistComponent } from './wishlist/wishlist.component';
@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    WeekBooksComponent,
    LibraryBooksComponent,
    LibraryAboutComponent,
    WishlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
