import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantHiringSales } from './plant-hiring-sales';

describe('PlantHiringSales', () => {
  let component: PlantHiringSales;
  let fixture: ComponentFixture<PlantHiringSales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantHiringSales],
    }).compileComponents();

    fixture = TestBed.createComponent(PlantHiringSales);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
