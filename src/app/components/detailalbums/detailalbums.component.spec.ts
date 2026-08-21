import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailalbumsComponent } from './detailalbums.component';

describe('DetailalbumsComponent', () => {
  let component: DetailalbumsComponent;
  let fixture: ComponentFixture<DetailalbumsComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailalbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
