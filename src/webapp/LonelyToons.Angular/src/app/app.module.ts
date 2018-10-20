import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { LoaderComponent } from './components/layout/loader/loader.component';
import { HomeComponent } from './components/pages/home/home.component';
import { WebcamComponent } from './components/controls/webcam/webcam.component';
import { JokeComponent } from './components/outputs/joke/joke.component';
import { MemoryComponent } from './components/outputs/memory/memory.component';
import { VideoComponent } from './components/outputs/video/video.component';
import { KaraokeComponent } from './components/outputs/karaoke/karaoke.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    HomeComponent,
    WebcamComponent,
    JokeComponent,
    MemoryComponent,
    VideoComponent,
    KaraokeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
