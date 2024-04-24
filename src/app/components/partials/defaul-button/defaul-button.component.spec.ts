import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaulButtonComponent } from './defaul-button.component';

describe('DefaulButtonComponent', () => {
  let component: DefaulButtonComponent;
  let fixture: ComponentFixture<DefaulButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaulButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaulButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
