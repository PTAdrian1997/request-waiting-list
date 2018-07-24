import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

  username = 'none';
  usertype = 'moderator';

  constructor() {

   }

  ngOnInit(){

  }

  getUsername(): string {
    return this.username;
  }

  getUsertype(): string {
    return this.usertype;
  }

}
