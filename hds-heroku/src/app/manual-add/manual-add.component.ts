import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manual-add',
  templateUrl: './manual-add.component.html',
  styleUrls: ['./manual-add.component.css']
})
export class ManualAddComponent implements OnInit {

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
  }

  createTeacher(value){
    const playerDetails = {
      name : value.name,
      ticket : value.ticket,
      timeTook : value.timeTook
    }
    this.appService.test(playerDetails).subscribe((response) => {
        window.location.reload();
    })
  }

}
