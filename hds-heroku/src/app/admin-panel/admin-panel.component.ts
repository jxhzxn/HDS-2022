import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  allPlayers: any;

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.getAllPlayers();
  }

  getAllPlayers(){
    this.appService.getAllPlayers().subscribe((response) => {
      this.allPlayers = response;
    })
  }

  deletePlayer(ticketNumber){
    const player = {
      ticketNumber : ticketNumber
    }
    this.appService.deletePlayer(player).subscribe((response) => {
      window.location.reload();
    })
    
  }

}
