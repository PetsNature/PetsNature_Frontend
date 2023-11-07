import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRecomendacionComponent } from './crear-recomendacion.component';

describe('CrearRecomendacionComponent', () => {
  let component: CrearRecomendacionComponent;
  let fixture: ComponentFixture<CrearRecomendacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearRecomendacionComponent]
    });
    fixture = TestBed.createComponent(CrearRecomendacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
