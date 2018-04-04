import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist : any ={};
  topTracks: any =[];

  constructor( private activatedRoute: ActivatedRoute, public _spotify : SpotifyService ) { }

  ngOnInit() {
    this.activatedRoute.params
    .map( params=>params['id'])
    .subscribe( id =>{
      this._spotify.getArtist(id).subscribe( artist=>{
        console.log(artist);
        this.artist = artist;
      });
      this._spotify.getTopTracks(id)
      .map( (data:any)=>data.tracks )
      .subscribe( toptracks=>{
         // this.topSongs = toptracks.tracks.map(item => {
         //   return item['name'];
         // });
        console.log(toptracks);
        this.topTracks= toptracks;

      });


    });
  }

}
