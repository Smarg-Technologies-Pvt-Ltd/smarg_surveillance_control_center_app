import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser, InAppBrowserOptions } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { NavController, Platform } from '@ionic/angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@awesome-cordova-plugins/launch-navigator/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  public subscription: any;
  options: InAppBrowserOptions = {
    location: 'no',//Or 'no' 
    hidden: 'no', //Or  'yes'
    clearcache: 'no',
    clearsessioncache: 'no',
    zoom: 'yes',//Android only ,shows browser zoom controls 
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no', //Android only 
    closebuttoncaption: 'Close', //iOS only
    disallowoverscroll: 'no', //iOS only 
    toolbar: 'yes', //iOS only 
    enableViewportScale: 'no', //iOS only 
    allowInlineMediaPlayback: 'no',//iOS only 
    presentationstyle: 'pagesheet',//iOS only 
    fullscreen: 'yes',//Windows only    
  };
  constructor(private theInAppBrowser: InAppBrowser, public platform: Platform, public navCtrl: NavController, private router: Router, private launchNavigator: LaunchNavigator) {
    this.platform.ready().then(() => {
      let target = "_self";

      // let target = "_system";
      const browser = this.theInAppBrowser.create('https://smargtech.com:3004', target, this.options);

     // https://smargtech:3004

      //   browser.on('exit').subscribe(() =>
      //   {
      //     launchNavigator['APP'].exitApp();

      //  });

      this.subscription = this.platform.backButton.subscribe(() => {

        launchNavigator['APP'].exitApp();
      });
    });
  }
}
