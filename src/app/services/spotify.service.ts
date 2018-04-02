import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SpotifyService {

  constructor( public _httpclient:HttpClient) {

    console.log('Serviceio de Spotify');

  }
  artists:any[] = [];
  getArtist(term:string){
    let url = `https://api.spotify.com/v1/search?query=${term}&type=artist&offset=0&limit=20`;
    let headers = new HttpHeaders({
      authorization:'Bearer BQCrh4sCHXFMJZMZqGhKvNvcnaiNVEDjwdV3rgXPTSV8BwmUYcDh6YVf1STtZ5gRcJ5lDhoJ480SmOFS8S8'
    });
    return this._httpclient.get(url,{headers})
               .map((res:any) =>{
                 this.artists =res.artists.items;
                 return this.artists
               });
  }

}
