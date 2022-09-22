import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCourseJavascriptComponent } from './about-course-javascript.component';

describe('AboutCourseJavascriptComponent', () => {
  let component: AboutCourseJavascriptComponent;
  let fixture: ComponentFixture<AboutCourseJavascriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCourseJavascriptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutCourseJavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
