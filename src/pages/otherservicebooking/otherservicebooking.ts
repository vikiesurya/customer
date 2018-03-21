import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AlertController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-otherservicebooking',
  templateUrl: 'otherservicebooking.html',
})
export class OtherservicebookingPage {
  loading: any;
  type: any;
  AC: any;
  Plumbing: any;
  Beauty: any;
  Electrical: any;
  HomeAppliance: any;
  acdropdown: any;
  hadropdown: any;
  beautydropdown: any;
  electricaldropdown: any;
  plumbingropdown: any;
  userdata: any;
  min: any;
  max: any;
  responseData: any;
  promoValid: any;
  invalid: any;
  usepromo: any;
  promouserValid: any;
  promovalue: any;
  userData = { "user_id": "", "gadget": "", "service": "", "type": "", "description": "", "servicePeriod": "", "pickup": "", "promocode": "", "brand": "" };
  constructor(public navCtrl: NavController, public navParams: NavParams, public AuthServiceProvider: AuthServiceProvider, private alertCtrl: AlertController, private datePicker: DatePicker, public loadingCtrl: LoadingController) {
    this.presentLoading();
    this.userdata = JSON.parse(localStorage.getItem('loggedData'));
    console.log(this.userdata);
    this.userData.user_id = this.userdata[0].id;
    console.log(this.userData.user_id);
    this.type = this.navParams.get('item');
    let date = new Date();
    let maxDate = new Date();
    let numberOfDaysToAdd = 6;
    maxDate.setDate(maxDate.getDate() + numberOfDaysToAdd);
    console.log('max date',maxDate);
    this.min = date.toISOString();
    this.max = maxDate.toJSON().split('T')[0];
    console.log(this.min);
    console.log(this.max);
    console.log(this.type);

    // CHECKING FOR USER SELECTED SERVICE 
    if (this.type == "AC") {
      this.AC = true;
      this.userData.gadget = 'A/C';
      this.AuthServiceProvider.postData('A/C', 'servicetypes').then((result) => {
        this.acdropdown = result;
        this.loading.dismiss();
        console.log(this.acdropdown);
      });
    } else {
      if (this.type == "Plumbing") {
        this.Plumbing = true;
        this.userData.gadget = 'Plumbing';
        this.AuthServiceProvider.postData('Plumbing', 'servicetypes').then((result) => {
          this.plumbingropdown = result;
          this.loading.dismiss();
          console.log(this.plumbingropdown);
        });
      } else {
        if (this.type == "HomeAppliance") {
          this.HomeAppliance = true;
          this.userData.gadget = 'Home_Appliances';
          this.AuthServiceProvider.postData('Home_Appliances', 'servicetypes').then((result) => {
            this.hadropdown = result;
            this.loading.dismiss();
            console.log(this.hadropdown);
          });
        } else {
          if (this.type == "Beauty") {
            this.Beauty = true;
            this.userData.gadget = 'Beauty_Services';
            this.AuthServiceProvider.postData('Beauty_Services', 'servicetypes').then((result) => {
              this.beautydropdown = result;
              this.loading.dismiss();
              console.log(this.beautydropdown);
            });
          } else {
            if (this.type == "Electrical") {
              this.Electrical = true;
              this.userData.gadget = 'Electrical';
              this.AuthServiceProvider.postData('Electrical', 'servicetypes').then((result) => {
                this.electricaldropdown = result;
                this.loading.dismiss();
                console.log(this.electricaldropdown);
              });
            }
          }
        }
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtherservicebookingPage');
  }

  // AC SERVICE BOOKING
  ACbooking() {
    if (this.userData.service != '' && this.userData.type != '' && this.userData.servicePeriod != '') {

      console.log('success', this.userData);
      this.presentLoading();
      this.AuthServiceProvider.postData(this.userData, 'homeservices').then((result) => {
        this.responseData = result;
        if (this.responseData.status == true) {
          this.navCtrl.setRoot(TabsPage);
          this.loading.dismiss();
          this.presentAlert('Thank you', 'Your booking has placed successfully.');
        }
        console.log(result);
      });
    }
    else {
      this.presentAlert('alert', 'Please fill all the * fields !');
    }
  }
  // PLUMBING SERVICE BOOKING 
  Plumbingbooking() {
    if (this.userData.service != '' && this.userData.servicePeriod != '') {

      console.log('success', this.userData);
      this.presentLoading();
      this.AuthServiceProvider.postData(this.userData, 'homeservices').then((result) => {
        this.responseData = result;
        if (this.responseData.status == true) {
          this.navCtrl.setRoot(TabsPage);
          this.loading.dismiss();
          this.presentAlert('Thank you', 'Your booking has placed successfully.');
        }
        console.log(result);
      });
    }
    else {
      this.presentAlert('alert', 'Please fill all the * fields !');
    }
  }
  // HOME APPLIANCE BOOKING 
  HomeApplianceBooking() {

    if (this.userData.service != '' && this.userData.servicePeriod != '' && this.userData.brand != '') {

      console.log('success', this.userData);
      this.presentLoading();
      this.AuthServiceProvider.postData(this.userData, 'homeservices').then((result) => {
        this.responseData = result;
        if (this.responseData.status == true) {
          this.navCtrl.setRoot(TabsPage);
          this.loading.dismiss();
          this.presentAlert('Thank you', 'Your booking has placed successfully.');
        }
        console.log(result);
      });
    }
    else {
      this.presentAlert('alert', 'Please fill all the * fields !');
    }
  }
  // BEAUTY SERVICE BOOKING 
  BeautyBooking() {
    if (this.userData.service != '' && this.userData.servicePeriod != '') {

      console.log('success', this.userData);
      this.presentLoading();
      this.AuthServiceProvider.postData(this.userData, 'homeservices').then((result) => {
        this.responseData = result;
        if (this.responseData.status == true) {
          this.navCtrl.setRoot(TabsPage);
          this.loading.dismiss();
          this.presentAlert('Thank you', 'Your booking has placed successfully.');
        }
        console.log(result);
      });
    }
    else {
      this.presentAlert('alert', 'Please fill all the * fields !');
    }
  }
  // ELECTRICAL SERVICE BOOKING 
  ElectricaleBooking() {
    if (this.userData.service != '' && this.userData.servicePeriod != '') {

      console.log('success', this.userData);
      this.presentLoading();
      this.AuthServiceProvider.postData(this.userData, 'homeservices').then((result) => {
        this.responseData = result;
        if (this.responseData.status == true) {
          this.navCtrl.setRoot(TabsPage);
          this.loading.dismiss();
          this.presentAlert('Thank you', 'Your booking has placed successfully.');
        }
        console.log(result);
      });
    }
    else {
      this.presentAlert('alert', 'Please fill all the * fields !');
    }
  }
  // ALERT CONTROLLER 
  presentAlert(title, msg) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['Dismiss']
    });
    alert.present();
  }
  // LOADING CONTROLLER 
  presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.loading.present();
  }

  //   promocodevalid(data1){
  //     console.log(data1);
  //     this.AuthServiceProvider.postData(data1,'promoValid').then((result) => {
  //      this.promoValid=result;
  //      console.log(this.promoValid );
  //      if(this.promoValid.status==true){
  //        this.invalid="";
  //        if(localStorage.getItem("loggedData")){
  //          this.usepromo="";

  //        this.promocodeuservalid(data1);

  //        }
  //        console.log(data1);
  //      }else{
  //        this.usepromo="";
  //        this.invalid=true;
  //        this.userData.promocode="";

  //      }
  //  } );


  //    }

}
