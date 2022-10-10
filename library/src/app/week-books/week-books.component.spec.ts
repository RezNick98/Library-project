import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekBooksComponent } from './week-books.component';

describe('WeekBooksComponent', () => {
  let component: WeekBooksComponent;
  let fixture: ComponentFixture<WeekBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
