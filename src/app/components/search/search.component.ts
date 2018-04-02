import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  term:string = '';
  constructor( public _spotify:SpotifyService) {

  }
  searchArtist(){
    if(this.term.length==0){
      return;
    }
    console.log(this.term);

    this._spotify.getArtist(this.term).subscribe(data=>{
      console.log(data);
    });
  }
  ngOnInit() {
  }

}
