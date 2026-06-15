import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Realty } from './realty';

describe('Realty', () => {
  let component: Realty;
  let fixture: ComponentFixture<Realty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Realty],
    }).compileComponents();

    fixture = TestBed.createComponent(Realty);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
