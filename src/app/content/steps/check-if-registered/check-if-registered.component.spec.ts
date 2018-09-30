import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckIfRegisteredComponent } from './check-if-registered.component';

describe('CheckIfRegisteredComponent', () => {
  let component: CheckIfRegisteredComponent;
  let fixture: ComponentFixture<CheckIfRegisteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckIfRegisteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckIfRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
