import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbusComponent } from './addbus/addbus.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminoperationsComponent } from './adminoperations/adminoperations.component';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { TicketcancelComponent } from './ticketcancel/ticketcancel.component';

import { UserloginComponent } from './userlogin/userlogin.component';
import { UseroperationsComponent } from './useroperations/useroperations.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { ViewdeletebusComponent } from './viewdeletebus/viewdeletebus.component';
import { ViewdeleteticketComponent } from './viewdeleteticket/viewdeleteticket.component';

const routes: Routes = [
  
  {path:"Adminlogin",component:AdminloginComponent},
  {path:"Userlogin",component:UserloginComponent},
  {path:"Userregister",component:UserregisterComponent},
  {path:"Booking",component:BookingComponent},
  {path:"adminoperations",component:AdminoperationsComponent},
  {path:"addbus",component:AddbusComponent},
  {path:"viewdeletebus",component:ViewdeletebusComponent},
  {path:"viewdeletticket",component:ViewdeleteticketComponent},
  {path:"cancelbyid",component:TicketcancelComponent},
  {path:"landingpage",component:UseroperationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
