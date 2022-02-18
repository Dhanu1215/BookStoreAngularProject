import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './MyComponents/cart/cart.component';
import { CartdetailsComponent } from './MyComponents/cartdetails/cartdetails.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { OrderComponent } from './MyComponents/order/order.component';
import { OrderdetailsComponent } from './MyComponents/orderdetails/orderdetails.component';
import { SignupComponent } from './MyComponents/signup/signup.component';
import { SummeryComponent } from './MyComponents/summery/summery.component';

const routes: Routes = [
  {
    component:LoginComponent,
    path :''
  },
  {
    component:HomeComponent,
    path :'home'
  },
  {
    component:HomeComponent,
    path :'home/:userId'
  },
  {
    component:HomeComponent,
    path :'home/:bookName'
  },
  {
    component:CartComponent,
    path :'cart'
  },
  {
    component:CartComponent,
    path :'cart/:bookId'
  },
  {
    component:CartdetailsComponent,
    path :'cartdetails'
  },
  {
    component:CartdetailsComponent,
    path :'cartdetails/:id'
  },
  {
    component:OrderComponent,
    path :'order/:id/:crID'
  },
  {
    component:OrderdetailsComponent,
    path :'orderdetail/:urID/:cartID'
  },
  {
    component:SummeryComponent,
    path :'summery'
  },
  {
    component:SignupComponent,
    path :'signup'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
