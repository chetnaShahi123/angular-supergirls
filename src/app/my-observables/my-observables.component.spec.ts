import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyObservablesComponent } from './my-observables.component';

describe('MyObservablesComponent', () => {
  let component: MyObservablesComponent;
  let fixture: ComponentFixture<MyObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
