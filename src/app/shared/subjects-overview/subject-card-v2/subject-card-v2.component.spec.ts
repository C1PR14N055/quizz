import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectCardV2Component } from './subject-card-v2.component';

describe('SubjectCardV2Component', () => {
  let component: SubjectCardV2Component;
  let fixture: ComponentFixture<SubjectCardV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectCardV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectCardV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
