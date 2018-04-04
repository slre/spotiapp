import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SpotifyService {
    artists:any[] = [];
    urlSpotify = 'https://api.spotify.com/v1/';

  constructor( public _httpclient:HttpClient) {

    console.log('Serviceio de Spotify');

  }
  private getHeaders(): HttpHeaders{
    let headers = new HttpHeaders({
      authorization:'Bearer BQC7vTe7ORcUSUPRnnO7rU8_LJU7utV2HRlSVFhUeskz5zPMNnhAFWMVZdWYmMbqt8DC_LM-XTACBbtFIik'
    });
    return headers;
  }
  getTopTracks( id:string ){
    let url = `${this.urlSpotify}artists/${id}/top-tracks?country=US`;
    let headers = this.getHeaders();
    return this._httpclient.get(url,{headers})
               // .map((res:any) =>{
               //   this.artists =res.artists.items;
               //   return this.artists
               // });

  }
  getArtist( id:string ){
    let url = `${this.urlSpotify}artists/${id}`;
    let headers = this.getHeaders();
    return this._httpclient.get(url,{headers})
               // .map((res:any) =>{
               //   this.artists =res.artists.items;
               //   return this.artists
               // });

  }
  getArtists(term:string){
    let url = `${this.urlSpotify}search?query=${term}&type=artist&offset=0&limit=20`;
    let headers = this.getHeaders();
    return this._httpclient.get(url,{headers})
               .map((res:any) =>{
                 this.artists =res.artists.items;
                 return this.artists
               });
  }


}
