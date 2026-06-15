import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeBuilt } from './what-we-built';

describe('WhatWeBuilt', () => {
  let component: WhatWeBuilt;
  let fixture: ComponentFixture<WhatWeBuilt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatWeBuilt],
    }).compileComponents();

    fixture = TestBed.createComponent(WhatWeBuilt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
