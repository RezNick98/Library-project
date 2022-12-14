import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryAboutComponent } from './library-about/library-about.component';
import { LibraryBooksComponent } from './library-books/library-books.component';
import { WishListComponent } from './wish-list/wish-list.component';
const routes: Routes = [
  {path: '', component:LibraryBooksComponent},
  {path: 'books', component:LibraryBooksComponent},
  {path:'about',component:LibraryAboutComponent},
  {path:'wishlist',component:WishListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
