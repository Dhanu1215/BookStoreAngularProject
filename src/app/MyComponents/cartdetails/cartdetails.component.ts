import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookserviceService } from 'src/app/bookservice.service';
import { Cart } from 'src/app/Model/Cart';
import { List } from 'src/app/Model/List';


@Component({
  selector: 'app-cartdetails',
  templateUrl: './cartdetails.component.html',
  styleUrls: ['./cartdetails.component.css']
})
export class CartdetailsComponent implements OnInit {
  //Variables
  book:any;
  cart = new Cart(0);
  list= new List(0,0,0,0);
  qty: any;
  no:[]=[];
  id:number | undefined;
  bkId:number | undefined;
  crID:number | undefined;

  constructor(private service: BookserviceService, private router:Router, private route: ActivatedRoute) { }

  crId: number = this.route.snapshot.params['id'];


  ngOnInit(): void {
      this.getCart();
  }

  //Function call to get cart details.
  getCart(){
    this.service.getCartDetails().subscribe(data=> {
      this.book=data;
    })
  }

  //Function call to  update quantity in cart.
  onAdd(item:any){
       item.quantity =  ((item.quantity) + 1);  
       this.list.bookId = item.book.bookId;
       this.list.userId = item.user.userId;
       this.list.quantity = item.quantity;
       this.list.cartId = item.cartId;          
       this.service.updateCart(item.cartId, this.list).subscribe(data => {
         this.qty = data;
         this.qty.quantity = item.quantity;
       })  
  }

  //Function call to get id and navigate on other page.
  onClick(){   
    this.no = this.book.data;
    console.log(this.no);
    this.no.forEach((element: { user: any; cartId: any; }) => {
     this.id = element.user.userId;
     this.crID = element.cartId;
     console.log(this.crID);
     this.router.navigate(["order", this.id, this.crID]);
    }); 
  }

  //Function call to update quantity in cart.
  onMinus(item:any){
    item.quantity =  ((item.quantity) - 1);  
    this.list.bookId = item.book.bookId;
    this.list.userId = item.user.userId;
    this.list.quantity = item.quantity;
    this.list.cartId = item.cartId;
    this.service.updateCart(item.cartId, this.list).subscribe(data => {
      this.qty = data;
      this.qty.quantity = item.quantity;
    })  
  }

  //Function call to remove cart data from cart.
  onCancel(cartId:number){
    this.service.deleteCart(cartId).subscribe(data => {
      window.location.reload();
    })
  }
}


