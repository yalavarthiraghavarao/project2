import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketcancelComponent } from './ticketcancel.component';

describe('TicketcancelComponent', () => {
  let component: TicketcancelComponent;
  let fixture: ComponentFixture<TicketcancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketcancelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketcancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
