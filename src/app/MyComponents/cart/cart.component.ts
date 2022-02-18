import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookserviceService } from 'src/app/bookservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  //Variables
  book :any;
  bkList:any;;
 
  
  constructor(private service: BookserviceService, private router:Router,private route: ActivatedRoute) { }
  
  id: number = this.route.snapshot.params['bookId'];

  ngOnInit(): void {
    //console.log(this.id);
    this.service.getAllBooks().subscribe(data => {
        this.book = data; 
        this.bkList = this.book.data;
    })
  }
  
  // Function call to navigate other page
  cartDetails(){
      this.router.navigate(["cartdetails"]);
      this.router.navigate(["cartdetails",this.id]);
  }
}
