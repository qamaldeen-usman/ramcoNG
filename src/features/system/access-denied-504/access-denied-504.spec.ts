import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessDenied504Component } from './access-denied-504';

describe('AccessDenied504Component', () => {
  let component: AccessDenied504Component;
  let fixture: ComponentFixture<AccessDenied504Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessDenied504Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessDenied504Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
