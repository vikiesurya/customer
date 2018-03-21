import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { QuotehistoryPage } from '../pages/quotehistory/quotehistory';
import { QuoteviewPage } from '../pages/quoteview/quoteview';
import { FaqPage } from '../pages/faq/faq';
import { ContactusPage } from '../pages/contactus/contactus';
import { ChangepassPage } from '../pages/changepass/changepass';
import { InvitefrdPage } from '../pages/invitefrd/invitefrd';
import { ProfilePage } from '../pages/profile/profile';
import { IntrosliderPage } from '../pages/introslider/introslider';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { AppRate } from '@ionic-native/app-rate';
import { HeaderColor } from '@ionic-native/header-color';
import { WalletPage } from '../pages/wallet/wallet';
import { TabsPage } from '../pages/tabs/tabs';
import { Badge } from '@ionic-native/badge';
import { EditservicebookingPage } from '../pages/editservicebooking/editservicebooking';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ActionSheetController } from 'ionic-angular';
import { LoginPage } from '../pages/login/login';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Http,Headers, RequestOptions} from '@angular/http';
import { Device } from '@ionic-native/device';
import { AppUpdate } from '@ionic-native/app-update';
import {ServicestateProvider} from '../providers/servicestate/servicestate';

declare var Appsee: any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  // device: any;
  responseData: any;
  // rootPage: any = TabsPage;
  rootPage: any;
  // rootPage: any = IntrosliderPage;
  // aa0db3771c1d03d6
  referDeviceId:any;
  isFromReferal:any;
  deviceID: any;
  imgData: any;
  image: any;
  username: any;
  badgeCount: Number;
  userData: any;
  rewardAmount: any;
  profilepic: any = "user_avatar.png";
  linkData: ArrayBuffer;
  logfun: any = "Login";
  shareContent:any;
  
  testData:any;
  pages: Array<{ title: string, component: any }>;

  constructor(
    public AuthServiceProvider: AuthServiceProvider, private toastCtrl: ToastController,
    public platform: Platform, public statusBar: StatusBar, private loadingCtrl: LoadingController,
    public splashScreen: SplashScreen, public appRate: AppRate, private headerColor: HeaderColor,
    private alertCtrl: AlertController, private fb: Facebook, private push: Push,
    public badge: Badge, public socialSharing: SocialSharing, public actionSheetCtrl: ActionSheetController,
    public ga: GoogleAnalytics,public androidPermissions: AndroidPermissions,public http: Http,public device: Device,public appUpdate: AppUpdate, public serviceState:ServicestateProvider) {
    localStorage.setItem('serviceBooking', "");
    localStorage.setItem('serviceBooking1', "");
    localStorage.setItem('gadget', "");
    this.splashScreen.show();
    this.initializeApp();
    platform.resume.subscribe(() => {
      this.handleBranch();
    });
    
    console.log("test");
    this.pages = [
      { title: 'Home', component: TabsPage },
      { title: 'Profile', component: ProfilePage },
      { title: 'Change Password', component: ChangepassPage },
      { title: 'Invite Friends', component: InvitefrdPage },
      { title: 'Quote & Response', component: QuotehistoryPage },
      { title: 'Quote', component: QuoteviewPage },


    ];
  }

  referAndEarnContent(){
    console.log('content');
    this.serviceState.referAndEarnContent().subscribe(data =>{
      console.log(data);
      this.shareContent = data.data;
      console.log(this.shareContent);

   }),error =>{
     console.log(error);
   }
  }

  handleBranch() {
    if (!this.platform.is('cordova')) { return }
    const Branch = window['Branch'];
    Branch.initSession(data => {
      this.linkData = data;
      if (data['+clicked_branch_link']) {
        // read deep link data on click
        var eventName = 'referred_install'
                const Branch = window['Branch'];
                Branch.userCompletedAction(eventName).then((res)=> {
                  console.log('Response: ' + JSON.stringify(res))
                }).catch(function (err) {
                  console.log('Error: ' + JSON.stringify(err.message))
                })
        console.log('Deep Link Data: ',this.linkData);
        this.testData = data['~tags'];
        // console.log('Deep Link Data: ', );
        let serverData = {userid:this.testData[2],deviceid: this.referDeviceId};
      this.http.post('http://rytefix.in/apitest/refernearncheck.php',serverData).subscribe((result) => {
    console.log(result['_body']);
    }, (err) => {
    console.log(err);
    });
        
      }
    });
  }

  menuOpened(){
    if (localStorage.getItem('loggedData')) {
    let data = JSON.parse(localStorage.getItem('loggedData'));
    this.AuthServiceProvider.postData(data[0], 'getUserdata').then((result) => {
    this.imgData = result;
    if (this.imgData.status == true) {
    // toast.present();
    localStorage.setItem('loggedData', JSON.stringify(this.imgData.data));
    this.profilepic = this.imgData.data[0]['profile_pic'];
    console.log("amount", this.imgData);
    this.username = this.imgData.data[0].username;
    console.log("pics", this.imgData.data[0]['profile_pic']);
    console.log("image", this.imgData.data[0].username);
    this.logfun = "Logout";
    }
    });
    
    
    }
    else {
    console.log("no data found");
    this. profilepic = "user_avatar.png";
    this.username='';
    this.logfun="Login";
    }
    }

  logout() {
    if (this.logfun == "Logout") {


      let alert = this.alertCtrl.create({
        title: 'Confirm Logout',
        message: 'Are you sure want to Logout?',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
              this.nav.setRoot(HomePage);
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Yes',
            handler: () => {
              this.logfun="Login";
              this.logoutconf();
            }
          }
        ]
      });

      alert.present();
    }
    else {
      this.nav.setRoot(LoginPage);
      setTimeout(() =>{
    this.logfun="Logout";
    },400);
      // return true;
    }
  }


  logoutconf() {
    let loader = this.loadingCtrl.create({ content: "Please wait.." });
    const Branch = window['Branch'];
    ///////////////BRANCH LOGOUT IMPLEMENTATION

    // Branch.logout().then(function (res) {
    //               console.log('Response: ' + JSON.stringify(res))
    //             }).catch(function (err) {
    //               console.log('Error: ' + JSON.stringify(err.message))
    //             })
    let toast = this.toastCtrl.create({
      message: 'Logout successfully',
      duration: 3000,
      position: 'bottom'
    });
    if (localStorage.getItem("loggedData")) {
      loader.present();
      let userData = JSON.parse(localStorage.getItem('loggedData'));
      console.log(userData);
      this.AuthServiceProvider.postData(userData[0], 'logout').then((result) => {
        this.responseData = result;
        if (true == this.responseData.status) {
          loader.dismiss();
          console.log(this.responseData);
          localStorage.setItem('loggedData', "");
          localStorage.setItem('serviceBooking', "");
          localStorage.setItem('serviceBooking1', "");
          localStorage.setItem('gadget', "");
          this.nav.setRoot(TabsPage);
          toast.present();
          this.menuOpened();
          this.loginupdate();
        }
      }, (err) => {
        // Error log
      });
    } else {
      console.log("not logged");
      this.nav.setRoot(HomePage);
    }
  }
  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Device UUID is: ' + this.device.uuid);
      this.referDeviceId = this.device.uuid;
      console.log(this.referDeviceId);
      this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION,this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION]);

      // const updateUrl = 'http://rytefix.in/apitest/apkUpdate.xml';
      //  this.appUpdate.checkAppUpdate(updateUrl);

      this.ga.startTrackerWithId('UA-100833789-1')
        .then(() => {
          console.log('Google analytics is ready now');
          this.ga.trackView('APP LAUNCHED');
          // Tracker is ready
          // You can now track pages or set additional information such as AppVersion or UserId
        })
        .catch(e => console.log('Error starting GoogleAnalytics', e));

      /////////////////////////////////// PUSH NOTIFICATION IMPLEMENTATION
      this.push.hasPermission()
        .then((res: any) => {

          if (res.isEnabled) {
            console.log('We have permission to send push notifications');
          } else {
            console.log('We do not have permission to send push notifications');
          }

        });
      localStorage.setItem('deviceID', "");
      const options: any = {
        android: {
        },
        ios: {
          alert: 'true',
          badge: true,
          sound: 'false'
        },
        windows: {},
        browser: {
          pushServiceURL: 'http://push.api.phonegap.com/v1/push'
        }
      };

      const pushObject: PushObject = this.push.init(options);

      pushObject.on('notification').subscribe((notification: any) => {
        this.badge.set(1);
        this.badge.increase(1);
        console.log('Received a notification', notification);
        let alert = this.alertCtrl.create({
          title: notification['title'],
          message: notification['message'],
          buttons: [
            {
              text: 'ok',
              handler: () => {
                console.log('called');
                this.nav.setRoot(QuotehistoryPage);
              }
            }
          ]
        });
        alert.present();
      });

      pushObject.on('registration').subscribe((registration: any) => {
        console.log('Device registered', registration);
        this.deviceID = {};
        this.deviceID["deviceid"] = registration['registrationId'];
        console.log("deviceid =" + this.deviceID["deviceid"]);
        localStorage.setItem('deviceID', this.deviceID["deviceid"]);
        console.log(localStorage.getItem('deviceID'));
        this.loginupdate();
      });

      pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
      this.handleBranch();
      console.log(localStorage.getItem('introslider'));
      if (localStorage.getItem('loggedData')) {
        this.rootPage = TabsPage;
      } else {
        this.rootPage = IntrosliderPage;
      }
      this.statusBar.backgroundColorByHexString('#0679c9');
      this.splashScreen.hide();
    });
  }
  loginupdate() {
    if (localStorage.getItem('loggedData')) {
      console.log("data found");
      this.imgData = JSON.parse(localStorage.getItem('loggedData'));
      this.image = this.imgData[0]['profile_pic'];
      console.log("image", this.imgData[0].username);
      this.profilepic = this.image;
      this.username = this.imgData[0].username;
      this.refresh();
      this.logfun = "Logout";
    }

    else {
      this.refresh();
      console.log("no data found");
    }
  }
  refresh() {
    // this.nav.push(this.nav.getActive().component);
    // console.log("refresh");
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  inviteFriends() {
    this.referAndEarnContent();
    if (localStorage.getItem("loggedData")) {
      this.userData = JSON.parse(localStorage.getItem('loggedData'));
      let userData = this.userData[0];
      console.log(userData.username);


      let data;
      var properties = {
        canonicalIdentifier: userData.username,
        title: 'Rytefix',
        contentDescription: 'Invitation to rytefix',
      }

      var analytics = {
        channel: 'WhatsApp',
        feature: 'InviteFriends',
        campaign: 'WhatsappShare',
        stage: 'new user',
        tags: ['InviteFriends', userData.username]
      }

      // optional fields
      var some_properties = {
        $android_url: 'https://play.google.com/store/apps/details?id=com.com.rytefix&hl=en',
        $match_duration: 2000,
        custom_integer: Date.now(),
      }

      // create a branchUniversalObj variable to reference with other Branch methods
      var branchUniversalObj = null;
      var userId = userData.username;
      // setting user Identity
      const Branch = window['Branch'];
      // creating branch object
      Branch.createBranchUniversalObject(properties).then(function (res) {
        console.log('object: ' + JSON.stringify(res))

        // generating short url 
        res.generateShortUrl(analytics, some_properties).then(function (res) {
          data = JSON.stringify(res.url);
          console.log('shorturl: ' + JSON.stringify(res.url));
        })
      })

      console.log('invite friends');
      let actionSheet = this.actionSheetCtrl.create({
        title: 'invite friends via',
        buttons: [
          {
            text: 'Whatsapp',
            role: 'destructive',
            handler: () => {
              console.log('whatsapp clicked');
              let message1 = 'Install or Reopen the app here';
      let message = this.shareContent+'\n \n'+ message1 +'\n';
              this.socialSharing.shareViaWhatsApp(message,'', data).then((data) => {
                console.log('success');
                var eventName = 'Invites'
                Branch.userCompletedAction(eventName).then(function (res) {
                  console.log('Response: ' + JSON.stringify(res))
                }).catch(function (err) {
                  console.log('Error: ' + JSON.stringify(err.message))
                })
              }).catch((e) => {
                console.log(e);
              });
            }
          }, {
            text: 'Facebook',
            handler: () => {
              console.log('facebook clicked');
              let message1 = 'Install or Reopen the app here';
              let message = this.shareContent+' \n \n'+ message1 +'\n';
              this.socialSharing.shareViaFacebook(message, '', data).then(() => {
                console.log('success');
              }).catch((e) => {
                console.log(e);
              });
            }
          }, {
            text: 'More',
            handler: () => {
              console.log('More clicked');
              let message1 = 'Install or Reopen the app here';
      // let message = 'Book Mobile and Laptop repair service in Rytefix, get your first service for free. Service centers available all over Chennai. \n \n Here is the list of some of our lucky customers \n http://rytefix.com/event/eventhistory/ \n \n'+ message1 +'\n';

      let message = this.shareContent+'\n \n'+ message1 +'\n';
              this.socialSharing.share(message, '', '', data).then(() => {
                console.log('success');


              }).catch((e) => {
                console.log(e);
              });
            }
          }, {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      actionSheet.present();

    } else {
      let alert = this.alertCtrl.create({
        // title: 'Warning',
        message: 'Please login or register to use this feature !',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'OK',
            handler: () => {
              console.log('Buy clicked');
              this.nav.push(LoginPage);
            }
          }
        ]
      });
      alert.present();
    }
  }

  rateUs() {
    console.log("clicked");
    this.appRate.preferences.storeAppURL = {
      android: 'https://play.google.com/store/apps/details?id=com.com.rytefix',
    };
    this.appRate.navigateToAppStore();
  }
  gotoTabspage() {
    this.nav.setRoot(TabsPage);
  }
  gotoProfilepage() {
    this.nav.push(ProfilePage);
  }
  gotoChangepasspage() {
    this.nav.push(ChangepassPage);
  }
  FAQ(){
    this.nav.push(FaqPage);
  }
  contactUs(){
    this.nav.push(ContactusPage);
  }

}
