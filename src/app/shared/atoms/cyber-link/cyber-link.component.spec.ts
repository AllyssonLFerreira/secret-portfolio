import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberLinkComponent } from './cyber-link.component';

describe('CyberLinkComponent', () => {
  let component: CyberLinkComponent;
  let fixture: ComponentFixture<CyberLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyberLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CyberLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
