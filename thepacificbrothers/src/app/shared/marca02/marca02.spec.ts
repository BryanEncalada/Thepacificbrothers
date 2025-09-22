import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Marca02 } from './marca02';

describe('Marca02', () => {
  let component: Marca02;
  let fixture: ComponentFixture<Marca02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Marca02]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Marca02);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
