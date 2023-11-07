import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearInfoComponent } from './crear-info.component';

describe('CrearInfoComponent', () => {
  let component: CrearInfoComponent;
  let fixture: ComponentFixture<CrearInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearInfoComponent]
    });
    fixture = TestBed.createComponent(CrearInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
