import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdeleteticketComponent } from './viewdeleteticket.component';

describe('ViewdeleteticketComponent', () => {
  let component: ViewdeleteticketComponent;
  let fixture: ComponentFixture<ViewdeleteticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdeleteticketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdeleteticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
