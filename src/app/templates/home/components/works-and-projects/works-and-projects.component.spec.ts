import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksAndProjectsComponent } from './works-and-projects.component';

describe('WorksAndProjectsComponent', () => {
  let component: WorksAndProjectsComponent;
  let fixture: ComponentFixture<WorksAndProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksAndProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorksAndProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
