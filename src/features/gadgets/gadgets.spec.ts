import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gadgets } from './gadgets';

describe('Gadgets', () => {
  let component: Gadgets;
  let fixture: ComponentFixture<Gadgets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gadgets],
    }).compileComponents();

    fixture = TestBed.createComponent(Gadgets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
