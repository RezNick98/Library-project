import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryProductsComponent } from './library-products.component';

describe('LibraryProductsComponent', () => {
  let component: LibraryProductsComponent;
  let fixture: ComponentFixture<LibraryProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
