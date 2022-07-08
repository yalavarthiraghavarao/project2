import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdeletebusComponent } from './viewdeletebus.component';

describe('ViewdeletebusComponent', () => {
  let component: ViewdeletebusComponent;
  let fixture: ComponentFixture<ViewdeletebusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdeletebusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdeletebusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
