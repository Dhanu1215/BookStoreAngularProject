import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookserviceService } from 'src/app/bookservice.service';
import { List } from 'src/app/Model/List';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  //Variables
  bookList: any;
  details: any;
  list = new List(0,0,0,0);
  searchbook: any;


  constructor(private router: Router, private serv: BookserviceService, private route: ActivatedRoute ) { }

    urId = this.route.snapshot.params["userId"];

    ngOnInit(): void {
      //Function call to get all book details.
        this.serv.getAllBooks().subscribe((bookdata:any) => {
          this.bookList = bookdata.data ;
      });
    }

    //Function call to navigate on cart page.
    viewCart(){
      this.router.navigate(["cart"]);
    }
    
    //Function call to add book to cart.
    addToBag(bookId:number, item:any){
      this.list.bookId = item.bookId;
      this.list.userId = this.urId;
      this.list.quantity = item.quantity;
        this.serv.addToCart(this.list).subscribe(data=> {
          this.router.navigate(["cart", bookId]);
        });
    }

    //Function call to search book by ites name
    onSearch(){
      console.log(this.searchbook);
      this.bookList.forEach((element: { bookName: any; }) => {
        if(this.searchbook == element.bookName){
          this.bookList = element;
        }
    });
    }
  }
 

