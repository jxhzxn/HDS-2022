import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebRequestService } from './web-request.service';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  readonly ROOT_URL;

  constructor(private webReqService: WebRequestService) {
    this.ROOT_URL = 'https://hds2020-backend.herokuapp.com'
  }

  test(payload: Object){
    return this.webReqService.post('testpost', payload);
  }

  getAllPlayers(){
    return this.webReqService.get('getallplayers');
  }

  deletePlayer(player){
    return this.webReqService.post('deletePlayer',player);
  }
}
