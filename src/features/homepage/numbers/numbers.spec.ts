import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Numbers } from './numbers';

describe('Numbers', () => {
  let component: Numbers;
  let fixture: ComponentFixture<Numbers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Numbers],
    }).compileComponents();

    fixture = TestBed.createComponent(Numbers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
