import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAlerteComponent } from './show-alerte.component';

describe('ShowAlerteComponent', () => {
  let component: ShowAlerteComponent;
  let fixture: ComponentFixture<ShowAlerteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAlerteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAlerteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
