import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/bookservice.service';
import { Custmor } from 'src/app/Model/custmor';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  person = new Custmor("","","","","");

  constructor(private router:Router, private service: BookserviceService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.person);
    this.service.createUserDetails(this.person).subscribe(data =>{
       console.log(data);
     });
  }
}
