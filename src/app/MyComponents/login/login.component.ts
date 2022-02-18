import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/bookservice.service';
import { Login } from 'src/app/Model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Variables
  login = new Login("","");
  list:[]=[];
  
  constructor(private router: Router, private service: BookserviceService) { }
 
  ngOnInit(): void {}

  //Function call to validate user and navigate to home page.
  onSubmit(){
    this.service.getUserdata().subscribe((data:any) => {
      this.list = data.data;
      this.service.userLogin(this.login).subscribe((data:any) => {
        this.list.forEach( (element: { email: any; password: any; userId:any}) => {
          if(element.email == this.login.email && element.password == this.login.password){
              alert(" Login Successful..");
              this.router.navigate(["home", element.userId]);
          }
        });
      })
    })
  }

  onClick(){
    this.router.navigate(["signup"]);
  }
}
