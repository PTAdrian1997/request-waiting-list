import { Component, OnInit } from '@angular/core';
import { REQUESTS } from '../mock-requests';
import { RequestService } from '../request.service';
import { Request } from '../request';
import { UserinfoService, Usertypes } from '../userinfo.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  selectedRequest: Request;
  requests: Request[];
  username : string;
  usertype: Usertypes;

  constructor(
              private requestService: RequestService,
              private userInfoService: UserinfoService
              ) {
              }

  ngOnInit() {
    this.getRequests();
    this.getUser();
  }

  getRequests(): void {
    this.requestService
        .getRequests()
        .subscribe(requests => this.requests = requests);
  }

  accept(request: Request): void {
    if(this.usertype === Usertypes.none){
      this.requests = this.requests.filter(r => r !== request);
    }
  }

  deny(request: Request): void {
    if(this.usertype === Usertypes.none){
      this.requests = this.requests.filter(r => r !== request);
    }
  }

  getUser(): void {
    this.username = this.userInfoService.getUsername();
    this.usertype = this.userInfoService.getUsertype();
  }

}
