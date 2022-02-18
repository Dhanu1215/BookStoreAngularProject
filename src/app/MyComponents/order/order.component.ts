import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookserviceService } from 'src/app/bookservice.service';
import { Custmor } from 'src/app/Model/custmor';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  //Variables.
  book:any;
  details:[]=[];
  info:any;
  urDetails = new Custmor('','','','','');

  constructor(private service: BookserviceService, private router: Router, private route: ActivatedRoute) { }

  urID: number = this.route.snapshot.params["id"];
  cartID: number = this.route.snapshot.params["crID"];

  ngOnInit(): void {
      //Function call to get cart details.
      this.service.getCartDetails().subscribe(data=> {
        this.book = data;    
      })

      //Function call to get user by id.
      this.service.getUserById(this.urID).subscribe(data =>{
          this.info = data;
      })
  }

  //Function call to update user details.
  onClick(info:any){
      this.urDetails.firstName = info.firstName;
      this.urDetails.lastName = info.lastName;
      this.urDetails.address = info.address;
      this.urDetails.email = info.email;
      this.urDetails.password = info.password;   
      this.service.updateUser(this.urID, this.urDetails).subscribe(data => {
        this.router.navigate(["orderdetail", this.urID, this.cartID]);
    })
  }

}
