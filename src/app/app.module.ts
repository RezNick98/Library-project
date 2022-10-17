import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { WeekBooksComponent } from './week-books/week-books.component';
import { LibraryBooksComponent } from './library-books/library-books.component';
import { LibraryProductsComponent } from './library-products/library-products.component';
import { LibraryAboutComponent } from './library-about/library-about.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    WeekBooksComponent,
    LibraryBooksComponent,
    LibraryProductsComponent,
    LibraryAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
