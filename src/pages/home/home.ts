import { Component } from '@angular/core';
import { NavController, LoadingController, ActionSheetController } from 'ionic-angular';
import {MusicProvider} from "../../providers/music/music";
import {SocialSharing} from "@ionic-native/social-sharing"
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public allMusic:any = [];
  constructor(private socialSharing: SocialSharing, private actionSheetController:ActionSheetController, private loadingController: LoadingController, private musicProvider: MusicProvider, public navCtrl: NavController) {

  }

ionViewDidLoad(){
  let allMusicLoadingController = this.loadingController.create({
    content: "Getting Your Music",
  });
  allMusicLoadingController.present();
  this.musicProvider.getMusic()
    .subscribe((musicList)=> {
      allMusicLoadingController.dismiss();
      this.allMusic = musicList
    });
}

addOneSong(refresher) {
  this.musicProvider.getOneSong()
    .subscribe((oneSong) => {
      this.allMusic.unshift(oneSong)
      refresher.complete();
    });
}

shareSong(music){
  let shareSongActionSheet = this.actionSheetController.create({
    title: "Share Song With Friends",
    buttons: [
    {
      text: "Share On Facebook",
      icon: "logo-facebook",
      handler: () => {
        this.socialSharing.shareViaFacebook(music.name,music.image,music.music_url);
      }
    },
    {
      text: "Share on Twitter",
      icon: "logo-twitter",
      handler: () => {
        this.socialSharing.shareViaTwitter(music.name,music.image,music.music_url);
      }
    },
    {
      text: "Share",
      icon: "share",
      handler: () => {
        this.socialSharing.share(music.name, "", music.image, music.music_url);
      }
    },
    {
      text: "Cancel",
      role: "destructive"
    }
  ]
});
shareSongActionSheet.present();
}

}
