import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescubreComponent } from './descubre.component';

describe('DescubreComponent', () => {
  let component: DescubreComponent;
  let fixture: ComponentFixture<DescubreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescubreComponent]
    });
    fixture = TestBed.createComponent(DescubreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
