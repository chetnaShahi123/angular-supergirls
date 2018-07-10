import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccessiblePipesComponent } from './my-accessible-pipes.component';

describe('MyAccessiblePipesComponent', () => {
  let component: MyAccessiblePipesComponent;
  let fixture: ComponentFixture<MyAccessiblePipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAccessiblePipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccessiblePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
