import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCoursePhpComponent } from './about-course-php.component';

describe('AboutCoursePhpComponent', () => {
  let component: AboutCoursePhpComponent;
  let fixture: ComponentFixture<AboutCoursePhpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCoursePhpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutCoursePhpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
