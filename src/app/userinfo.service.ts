import { Injectable } from '@angular/core';

export enum Usertypes {
  none = 0,
  simple = 1,
  moderator = 2,
  superuser = 3
}

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

  username = 'none';
  usertype = Usertypes.none;

  constructor() {

   }

  ngOnInit(){

  }

  getUsername(): string {
    return this.username;
  }

  getUsertype(): Usertypes {
    return this.usertype;
  }

}
