import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './MyComponents/cart/cart.component';
import { CartdetailsComponent } from './MyComponents/cartdetails/cartdetails.component';
import { FooterComponent } from './MyComponents/footer/footer.component';
import { OrderComponent } from './MyComponents/order/order.component';
import { OrderdetailsComponent } from './MyComponents/orderdetails/orderdetails.component';
import { SummeryComponent } from './MyComponents/summery/summery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CartComponent,
    FooterComponent,
    CartdetailsComponent,
    OrderComponent,
    OrderdetailsComponent,
    SummeryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
