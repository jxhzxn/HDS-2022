import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import {AppService} from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  timer: any;
  timeTook: number;
  loggedInUser: any;
  loggedUserTicket: any;

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.loggedInUser = sessionStorage.getItem('name');
    this.loggedUserTicket = sessionStorage.getItem('ticket');
  }

  startTimer(){
    const obs = interval(1000);
    obs.subscribe((d)=>{
      this.timer = d;
    })
  }

  stopTimer(){
    this.timeTook = this.timer;
  }

  addToDB(){
    const playerDetails = {
      name : this.loggedInUser,
      ticket : this.loggedUserTicket,
      timeTook : this.timeTook
    }
    this.router.navigate([''])
    this.appService.test(playerDetails).subscribe((response) => {
      sessionStorage.clear();
    })
  }

  reset(){
    sessionStorage.clear();
    this.router.navigate([''])
  }

 

}
