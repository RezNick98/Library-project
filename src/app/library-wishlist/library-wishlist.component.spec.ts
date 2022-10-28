import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryWishlistComponent } from './library-wishlist.component';

describe('LibraryWishlistComponent', () => {
  let component: LibraryWishlistComponent;
  let fixture: ComponentFixture<LibraryWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryWishlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
