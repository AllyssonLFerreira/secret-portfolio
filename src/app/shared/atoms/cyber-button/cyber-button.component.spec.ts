import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberButtonComponent } from './cyber-button.component';

describe('CyberButtonComponent', () => {
  let component: CyberButtonComponent;
  let fixture: ComponentFixture<CyberButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyberButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CyberButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
