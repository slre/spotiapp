import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//Services

import { SpotifyService } from './services/spotify.service';

//Routes
import { APP_ROUTING } from './app.routes';
//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NophotoPipe } from './pipes/nophoto.pipe';
import { SecureDomPipe } from './pipes/securedom.pipe';
import { ArtistComponent } from './components/artist/artist.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    NophotoPipe,
    SecureDomPipe,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SpotifyService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
