import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceclassService } from './serviceclass.service';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { BookingComponent } from './booking/booking.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AdminoperationsComponent } from './adminoperations/adminoperations.component';
import { AddbusComponent } from './addbus/addbus.component';
import { ViewdeletebusComponent } from './viewdeletebus/viewdeletebus.component';
import { ViewdeleteticketComponent } from './viewdeleteticket/viewdeleteticket.component';
import { TicketcancelComponent } from './ticketcancel/ticketcancel.component';
import { UseroperationsComponent } from './useroperations/useroperations.component'




@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    UserloginComponent,
    UserregisterComponent,
    BookingComponent,
    AdminoperationsComponent,
    AddbusComponent,
    ViewdeletebusComponent,
    ViewdeleteticketComponent,
    TicketcancelComponent,
    UseroperationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [ServiceclassService],
  bootstrap: [AppComponent]
})
export class AppModule { }
