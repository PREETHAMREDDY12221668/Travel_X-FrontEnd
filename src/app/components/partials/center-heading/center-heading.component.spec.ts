import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterHeadingComponent } from './center-heading.component';

describe('CenterHeadingComponent', () => {
  let component: CenterHeadingComponent;
  let fixture: ComponentFixture<CenterHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
