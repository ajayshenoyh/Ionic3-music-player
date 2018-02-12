import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";
import { Injectable } from '@angular/core';

/*
  Generated class for the MusicProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const API= "https://orangevalleycaa.org/api/music";
@Injectable()
export class MusicProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MusicProvider Provider');
  }


getMusic() {
  return this.http.get(API);
}


getOneSong() {
  let oneSongUrl = API + "/id/1";
  console.log(oneSongUrl);
  return this.http.get(oneSongUrl);
}
}
