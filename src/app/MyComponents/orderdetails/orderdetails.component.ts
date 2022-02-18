import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookserviceService } from 'src/app/bookservice.service';
import { Custmor } from 'src/app/Model/custmor';
import { Order } from 'src/app/Model/Order';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {

  //Variables.
  list:any;
  user:any;
  urDetails = new Custmor('','','','','');
  order = new Order(0,0,0,0,0,'');
  cartdata:any;

  constructor(private service: BookserviceService, private router: Router, private route:ActivatedRoute) {}

  urId: number = this.route.snapshot.params["urID"];
  crid:number = this.route.snapshot.params["cartID"];

  ngOnInit(): void {    
    //Function call to get cart details.
    this.service.getCartDetails().subscribe(cartData => {
      this.list = cartData;
      this.service.getUserById(this.urId).subscribe(data=> {
          this.user = data;
      })
    })
  }

  //Function call to place order.
  onClicked(user:any){  
    console.log(this.crid);
     this.service.getCartById(this.crid).subscribe((data:any)=> {
        this.cartdata = data;
        this.order.userId = this.urId;
        this.order.address = user.address;
         this.order.bookId = this.cartdata.data.book.bookId;
         this.order.cartId = this.crid;
         this.order.price = this.cartdata.data.book.price;
         this.order.quantity = this.cartdata.data.quantity;
         this.service.placeOrder(this.order).subscribe(data=> {
          this.router.navigate(["summery"]);
         });
     })
  }
}
