import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Caractericas } from './caractericas';

describe('Caractericas', () => {
  let component: Caractericas;
  let fixture: ComponentFixture<Caractericas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Caractericas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Caractericas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
