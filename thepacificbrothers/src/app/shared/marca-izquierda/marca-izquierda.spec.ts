import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaIzquierda } from './marca-izquierda';

describe('MarcaIzquierda', () => {
  let component: MarcaIzquierda;
  let fixture: ComponentFixture<MarcaIzquierda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarcaIzquierda]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcaIzquierda);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
