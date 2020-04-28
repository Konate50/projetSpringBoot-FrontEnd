import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultEvaluateComponent } from './result-evaluate.component';

describe('ResultEvaluateComponent', () => {
  let component: ResultEvaluateComponent;
  let fixture: ComponentFixture<ResultEvaluateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultEvaluateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultEvaluateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
