import { Component, OnInit } from '@angular/core';
import { REQUESTS } from '../mock-requests';
import { RequestService } from '../request.service';
import { Request } from '../request';
import { UserinfoService } from '../userinfo.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  selectedRequest: Request;
  requests: Request[];
  public userName: string;
  public userType: string;
  moderatorAccessWord  = 'moderator';


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
    if(this.userType === this.moderatorAccessWord){
      this.requests = this.requests.filter(r => r !== request);
    }
  }

  deny(request: Request): void {
    if(this.userType === this.moderatorAccessWord){
      this.requests = this.requests.filter(r => r !== request);
    }
  }

  getUser(): void {
    this.userName = this.userInfoService.getUsername();
    this.userType = this.userInfoService.getUsertype();
  }

}
