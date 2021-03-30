import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizRetrieveComponent } from './quiz-retrieve.component';

describe('QuizRetrieveComponent', () => {
  let component: QuizRetrieveComponent;
  let fixture: ComponentFixture<QuizRetrieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizRetrieveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizRetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
