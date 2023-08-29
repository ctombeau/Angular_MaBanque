import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Virement2Component } from './virement2.component';

describe('Virement2Component', () => {
  let component: Virement2Component;
  let fixture: ComponentFixture<Virement2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Virement2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Virement2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
