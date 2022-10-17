import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryAboutComponent } from './library-about/library-about.component';
import { LibraryBooksComponent } from './library-books/library-books.component';
import { LibraryProductsComponent } from './library-products/library-products.component';

const routes: Routes = [
  {path: '', component:LibraryBooksComponent},
  {path: 'books', component:LibraryBooksComponent},
  {path:'products',component:LibraryProductsComponent},
  {path:'about',component:LibraryAboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
