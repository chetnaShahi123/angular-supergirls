import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccessibleDirectivesComponent } from './my-accessible-directives.component';

describe('MyAccessibleDirectivesComponent', () => {
  let component: MyAccessibleDirectivesComponent;
  let fixture: ComponentFixture<MyAccessibleDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAccessibleDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccessibleDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
