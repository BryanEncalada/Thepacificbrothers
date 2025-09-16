import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Videobanner } from './videobanner';

describe('Videobanner', () => {
  let component: Videobanner;
  let fixture: ComponentFixture<Videobanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Videobanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Videobanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
