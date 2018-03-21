import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController, App } from 'ionic-angular';
// import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
// import { Http, Headers, RequestOptions } from '@angular/http';
import { ServicebookingPage } from '../servicebooking/servicebooking';
import { QuotehistoryPage } from '../quotehistory/quotehistory';
import { LoginPage } from '../login/login';
import { WalletPage } from '../wallet/wallet';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Http,Headers, RequestOptions} from '@angular/http';
import { InvitefrdPage } from '../invitefrd/invitefrd';
import { OtherservicebookingPage } from '../otherservicebooking/otherservicebooking';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  print: any;
  home: any;
  responsedata: any;
  walletamount: any;
  rewardAmount: any;
  creditHistory: ArrayBuffer;
  userId:any;
  // rewardAmount: any;
  // creditHistory: ArrayBuffer;
  @ViewChild(Slides) slides: Slides;
  // user: FormGroup;

  constructor(public navCtrl: NavController, public AuthServiceProvider: AuthServiceProvider, private alertCtrl: AlertController, public toastCtrl: ToastController, public app: App,public http: Http) {
    this.home = true;
    this.print = false;
    // console.log("view",localStorage.getItem('loggedData'));
    if (localStorage.getItem('loggedData')) {
      let data = JSON.parse(localStorage.getItem('loggedData'));
      this.userId = data[0].id;
      console.log(this.userId);
      ///////////////BRANCH LOGIN IMPLEMENTATION

      // const Branch = window['Branch'];
      // var userId = data[0].username;
      // Branch.setIdentity(userId).then(function (res) {
      //   console.log('Response: ' + JSON.stringify(res))
      // }).catch(function (err) {
      //   console.log('Error: ' + JSON.stringify(err.message))
      // })

      // this.getCreditHistory();
      // this.getRewardPoints();

      this.AuthServiceProvider.postData(data[0], 'getUserdata').then((result) => {
        this.responsedata = result;
        if (this.responsedata.status == true) {
          // toast.present();
          localStorage.setItem('loggedData', JSON.stringify(this.responsedata.data));
          this.walletamount = this.responsedata.data[0].rf_wallet_bal;
          // console.log("amount", this.walletamount);

        }
      });


    }
    else {
      this.walletamount = "0";
      console.log("no data found");
    }



  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad FaqPage');

  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }
  Gadgets() {

    if (localStorage.getItem("loggedData")) {
      let prompt = this.alertCtrl.create({
        title: 'Select Gadget Type',
        // message: 'Select option ',
        inputs: [
          {
            type: 'radio',
            label: 'Mobile',
            value: 'Mobile'
          },
          {
            type: 'radio',
            label: 'Laptop',
            value: 'Laptop'
          },
          {
            type: 'radio',
            label: 'Tablet',
            value: 'Tablet'
          },
          // {
          //   type: 'radio',
          //   label: 'Desktop Computer',
          //   value: 'Computer'
          // },
          {
            type: 'radio',
            label: 'Desktop computer',
            value: 'Computer'
          },
          // {
          //   type: 'radio',
          //   label: 'Printer, Tv & Others',
          //   value: 'Printer'
          // },
          {
            type: 'radio',
            label: 'Printers & others',
            value: 'Printer'
          },

        ],
        buttons: [
          {
            text: "Cancel",
            handler: data => {
              console.log("cancel clicked");
            }
          },
          {
            text: "Ok",
            handler: data => {
              console.log(data);
              if (data) {
                localStorage.setItem('gadget', data);
                console.log("search clicked");
                this.navCtrl.push(ServicebookingPage);
              } else {
                let toast = this.toastCtrl.create({
                  message: "Please select gadget type",
                  duration: 3000,
                  position: 'top'
                });
                toast.present();
                return false;
              }

            }
          }]
      });
      prompt.present();
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
              this.app.getRootNav().push(LoginPage);

            }
          }
        ]
      });
      alert.present();
    }
  }

  banner1() {

    if (localStorage.getItem("loggedData")) {
      let prompt = this.alertCtrl.create({
        title: 'Select Gadget Type',
        // message: 'Select option ',
        inputs: [
          {
            type: 'radio',
            label: 'Mobile',
            value: 'Mobile'
          },
          {
            type: 'radio',
            label: 'Laptop',
            value: 'Laptop'
          },
          {
            type: 'radio',
            label: 'Tablet',
            value: 'Tablet'
          },
          {
            type: 'radio',
            label: 'Desktop Computer',
            value: 'Computer'
          },
          {
            type: 'radio',
            label: 'Printer, Tv & Others',
            value: 'Printer'
          },

        ],
        buttons: [
          {
            text: "Cancel",
            handler: data => {
              console.log("cancel clicked");
            }
          },
          {
            text: "Ok",
            handler: data => {
              console.log(data);
              if (data) {
                localStorage.setItem('gadget', data);
                console.log("search clicked");
                this.navCtrl.push(ServicebookingPage);
              } else {
                let toast = this.toastCtrl.create({
                  message: "Please select gadget type",
                  duration: 3000,
                  position: 'top'
                });
                toast.present();
                return false;
              }

            }
          }]
      });
      prompt.present();
    } else {
      let alert = this.alertCtrl.create({
        // title: 'Warning',
        message: 'Please login or register to book service !',
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
              this.app.getRootNav().push(LoginPage);

            }
          }
        ]
      });
      alert.present();
    }
  }

  banner2() {

    if (localStorage.getItem("loggedData")) {
    this.navCtrl.push(InvitefrdPage);
    } else {
      let alert = this.alertCtrl.create({
        // title: 'Warning',
        message: 'Please login or register to book service !',
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
              this.app.getRootNav().push(LoginPage);

            }
          }
        ]
      });
      alert.present();
    }
  }

  banner3() {

    if (localStorage.getItem("loggedData")) {
    this.navCtrl.push(WalletPage);
    } else {
      let alert = this.alertCtrl.create({
        // title: 'Warning',
        message: 'Please login or register to book service !',
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
              this.app.getRootNav().push(LoginPage);

            }
          }
        ]
      });
      alert.present();
    }
  }
  wallet() {

    if (localStorage.getItem("loggedData")) {
      console.log(JSON.parse(localStorage.getItem("loggedData")));
      this.navCtrl.push(WalletPage);
    } else {
      // alert("please login Required");
      // console.log(JSON.parse(localStorage.getItem("loggedData")));
      let alert = this.alertCtrl.create({
        title: 'Warning',
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
              // this.navCtrl.push(RegisterPage);
              // this.navCtrl.push(WalletPage);
              this.app.getRootNav().push(LoginPage);

            }
          }
        ]
      });
      alert.present();
    }
  }
  quoteHistory() {
    let alert = this.alertCtrl.create({
      title: 'Login',
      subTitle: 'Login Required.',
      buttons: ['Ok']
    });


    // alert("test");
    if (localStorage.getItem("loggedData")) {
      this.navCtrl.push(QuotehistoryPage);
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
              // this.navCtrl.setRoot(LoginPage);
              this.app.getRootNav().push(LoginPage);

            }
          }
        ]
      });
      alert.present();
    }
  }
  referAndEarn() {
    // let alert = this.alertCtrl.create({
    //   title: 'Refer & Earn',
    //   subTitle: 'we are almost ready  ...wait for few more days ',
    //   buttons: ['Dismiss']
    // });
    // alert.present();

    if (localStorage.getItem("loggedData")) {
    
      this.navCtrl.push(InvitefrdPage);
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
              this.app.getRootNav().push(LoginPage);

            }
          }
        ]
      });
      alert.present();
    }
  }  
  gotoServicebook() {
    this.navCtrl.push(ServicebookingPage);
  }

  acservice(){
    this.navCtrl.push(OtherservicebookingPage,{item:'AC'});
  }

  plumbing(){
    this.navCtrl.push(OtherservicebookingPage,{item:'Plumbing'});        
  }

  homeAppliance(){
    this.navCtrl.push(OtherservicebookingPage,{item:'HomeAppliance'});        
  }

  beauty(){
    this.navCtrl.push(OtherservicebookingPage,{item:'Beauty'});        
  }

  electrical(){
    this.navCtrl.push(OtherservicebookingPage,{item:'Electrical'});        
  }

}
