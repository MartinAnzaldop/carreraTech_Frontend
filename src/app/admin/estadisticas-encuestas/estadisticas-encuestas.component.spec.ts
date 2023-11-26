import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasEncuestasComponent } from './estadisticas-encuestas.component';

describe('EstadisticasEncuestasComponent', () => {
  let component: EstadisticasEncuestasComponent;
  let fixture: ComponentFixture<EstadisticasEncuestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadisticasEncuestasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadisticasEncuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
