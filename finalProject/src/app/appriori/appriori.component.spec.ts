import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprioriComponent } from './appriori.component';

describe('ApprioriComponent', () => {
  let component: ApprioriComponent;
  let fixture: ComponentFixture<ApprioriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprioriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprioriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
