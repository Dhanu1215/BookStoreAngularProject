import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summery',
  templateUrl: './summery.component.html',
  styleUrls: ['./summery.component.css']
})
export class SummeryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {};

  //Function call to navigate on other page.
  onClick(){
    this.router.navigate(["home"]);
  }
}
