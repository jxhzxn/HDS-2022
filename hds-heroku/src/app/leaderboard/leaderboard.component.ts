import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  allPlayers: any;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getAllPlayers();
  }

  getAllPlayers(){
    this.appService.getAllPlayers().subscribe((response) => {
      this.allPlayers = response;
    })
  }

}
