import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilEngineering } from './civil-engineering';

describe('CivilEngineering', () => {
  let component: CivilEngineering;
  let fixture: ComponentFixture<CivilEngineering>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CivilEngineering],
    }).compileComponents();

    fixture = TestBed.createComponent(CivilEngineering);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
