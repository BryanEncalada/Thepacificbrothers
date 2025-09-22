import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Banner02 } from './banner02';

describe('Banner02', () => {
  let component: Banner02;
  let fixture: ComponentFixture<Banner02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Banner02]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Banner02);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
