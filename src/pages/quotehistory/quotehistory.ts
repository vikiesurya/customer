import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { QuoteviewPage } from '../quoteview/quoteview';
import { EditservicebookingPage } from '../editservicebooking/editservicebooking';
import { AlertController } from 'ionic-angular';
import {ServicestateProvider} from '../../providers/servicestate/servicestate';
import { Badge } from '@ionic-native/badge';
/**
 * Generated class for the QuotehistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotehistory',
  templateUrl: 'quotehistory.html',
})
export class QuotehistoryPage {
  quoteHistory: any;
  responsedata: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public AuthServiceProvider: AuthServiceProvider, private alertCtrl: AlertController, public serviceState:ServicestateProvider, public badge: Badge) {

    this.badge.clear();
  }
  jsonConcat(o1, o2) {
    for (var key in o2) {
      o1[key] = o2[key];
    }
    return o1;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotehistoryPage');
    if (localStorage.getItem("loggedData")) {
      let logged = JSON.parse(localStorage.getItem("loggedData"));
      console.log(logged);
      this.AuthServiceProvider.postData(logged[0], 'quoteHistory').then((result) => {
        console.log(result);
        this.quoteHistory = result;
        console.log("quotehistory", result);
        console.log("id", this.quoteHistory.id);
        // this.navCtrl.setRoot(HomePage);
      });
    }
  }
  refresh() {
    this.navCtrl.push(this.navCtrl.getActive().component);
    console.log("refresh");
  }
  quoteShow(book_id) {
    console.log(book_id);
    let service = JSON.parse(localStorage.getItem('loggedData'));

    service[0]['book_id'] = book_id;
    console.log(service);
    localStorage.setItem('loggedData', JSON.stringify(service));
    console.log(JSON.parse(localStorage.getItem('loggedData')));
    this.navCtrl.push(QuoteviewPage);
  }
  ServiceCancel(cancel_id) {
    console.log(cancel_id);
    let alerts = this.alertCtrl.create({
      title: 'Cancel Booking',
      inputs: [
        {
          name: 'reason',
          placeholder: 'enter the reason'
        },
        // {
        //   name: 'password',
        //   placeholder: 'Password',
        //   type: 'password'
        // }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: data => {
            if (data.reason == "") {
              alert('please enter the reason !')
              return false;
            } else {
              this.serviceState.cancelBooking(cancel_id,data.reason).subscribe(data =>{
                console.log(data);
          
             }),error =>{
               console.log(error);
             }
              this.AuthServiceProvider.postData(cancel_id, 'serviceCancel').then((result) => {
                this.responsedata = result;
                if (this.responsedata.status == true) {
                  this.refresh();
                  alert("Service cancelled successfully");
                } else {

                }

              });
              return true;
            }

          }
        }
      ]
    });
    alerts.present();


  }
  editBooking(book_id, gadget) {
    let data = { booking_id: book_id, gadget: gadget };
    console.log(data);
    this.navCtrl.push(EditservicebookingPage, { item: data });
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    if (localStorage.getItem("loggedData")) {
      let logged = JSON.parse(localStorage.getItem("loggedData"));
      console.log(logged);
      this.AuthServiceProvider.postData(logged[0], 'quoteHistory').then((result) => {
        console.log(result);
        this.quoteHistory = result;
        console.log("quotehistory", result);
        console.log("id", this.quoteHistory.id);
        // this.navCtrl.setRoot(HomePage);
      });
    }

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}
