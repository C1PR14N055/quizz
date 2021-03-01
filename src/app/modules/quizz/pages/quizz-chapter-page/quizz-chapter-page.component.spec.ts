import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzChapterPageComponent } from './quizz-chapter-page.component';

describe('QuizzChapterPageComponent', () => {
  let component: QuizzChapterPageComponent;
  let fixture: ComponentFixture<QuizzChapterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizzChapterPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzChapterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
