import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoncashComponent } from './moncash.component';

describe('MoncashComponent', () => {
  let component: MoncashComponent;
  let fixture: ComponentFixture<MoncashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoncashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoncashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
