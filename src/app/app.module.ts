import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {MusicPlayerPage} from "../pages/music-player/music-player";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {MediaPlugin} from '@ionic-native/media'
import { SocialSharing } from '@ionic-native/social-sharing';

import { MusicProvider } from '../providers/music/music';
import { HttpModule } from "@angular/http";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MusicPlayerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MusicPlayerPage
  ],
  providers: [
    MediaPlugin,
    SocialSharing,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MusicProvider
  ]
})
export class AppModule {}
