import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedInUser: any;
  loggedUserTicket: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loggedInUser = sessionStorage.getItem('name');
    this.loggedUserTicket =  sessionStorage.getItem('ticket');
  }

  createPlayer(values){
    sessionStorage.setItem('name', values.name)
    sessionStorage.setItem('ticket', values.ticket)
    this.loggedInUser = sessionStorage.getItem('name');
    this.router.navigate(['counter'])
  }

}
