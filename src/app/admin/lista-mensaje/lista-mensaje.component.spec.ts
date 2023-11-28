import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMensajeComponent } from './lista-mensaje.component';

describe('ListaMensajeComponent', () => {
  let component: ListaMensajeComponent;
  let fixture: ComponentFixture<ListaMensajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMensajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaMensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
