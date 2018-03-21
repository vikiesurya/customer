import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the EditotherservicebookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editotherservicebooking',
  templateUrl: 'editotherservicebooking.html',
})
export class EditotherservicebookingPage {
  booking_id:any;
  gadget:any;
  bookingData:any;
  type:any;
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
  loading:any;
  responseData:any;
  min:any;
  max:any;
  userData = { "bookingid": "", "gadget": "", "service": "", "type": "", "description": "", "servicePeriod": "", "pickup": "", "promocode": "", "brand": "" };
  constructor(public navCtrl: NavController, public navParams: NavParams,public AuthServiceProvider:AuthServiceProvider, private alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.presentLoading();
    let data = navParams.get('item');
    this.booking_id = data.booking_id;
    this.userData.bookingid = data.booking_id;
    this.type = data.gadget;
    let date = new Date();
    let maxDate = new Date();
    let numberOfDaysToAdd = 6;
    maxDate.setDate(maxDate.getDate() + numberOfDaysToAdd);
    console.log('max date',maxDate);
    this.min = date.toISOString();
    this.max = maxDate.toJSON().split('T')[0];
    console.log(this.min);
    console.log(this.max);
    console.log(data);

    // CHECKING FOR USER SELECTED SERVICE 
    if (this.type == "A/C") {
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
        if (this.type == "Home_Appliances") {
          this.HomeAppliance = true;
          this.userData.gadget = 'Home_Appliances';
          this.AuthServiceProvider.postData('Home_Appliances', 'servicetypes').then((result) => {
            this.hadropdown = result;
            this.loading.dismiss();
            console.log(this.hadropdown);
          });
        } else {
          if (this.type == "Beauty_Services") {
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
    console.log('ionViewDidLoad EditotherservicebookingPage');
    this.getBookedService();
  }

  getBookedService(){

    this.AuthServiceProvider.postData(this.booking_id,'editData').then((result) => {
      this.bookingData=result[0];
      console.log(this.bookingData);
      
      this.userData.gadget = this.bookingData.gadget;
      this.userData.service = this.bookingData.service;
      this.userData.type = this.bookingData.service_type;
      this.userData.description = this.bookingData.description;
      this.userData.servicePeriod = this.bookingData.time_period;
      this.userData.brand = this.bookingData.make;
     
        } );
  }

   // AC SERVICE BOOKING
   ACbooking() {
    if (this.userData.service != '' && this.userData.type != '' && this.userData.servicePeriod != '') {

      console.log('success', this.userData);
      this.presentLoading();
      this.AuthServiceProvider.postData(this.userData, 'updateHomeServiceBooking ').then((result) => {
        this.responseData = result;
        if (this.responseData.status == true) {
          this.navCtrl.setRoot(TabsPage);
          this.loading.dismiss();
          this.presentAlert('Thank you', 'Your booking has been saved successfully.');
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
      this.AuthServiceProvider.postData(this.userData, 'updateHomeServiceBooking ').then((result) => {
        this.responseData = result;
        if (this.responseData.status == true) {
          this.navCtrl.setRoot(TabsPage);
          this.loading.dismiss();
          this.presentAlert('Thank you', 'Your booking has been saved successfully.');
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
      this.AuthServiceProvider.postData(this.userData, 'updateHomeServiceBooking ').then((result) => {
        this.responseData = result;
        if (this.responseData.status == true) {
          this.navCtrl.setRoot(TabsPage);
          this.loading.dismiss();
          this.presentAlert('Thank you', 'Your booking has been saved successfully.');
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
      this.AuthServiceProvider.postData(this.userData, 'updateHomeServiceBooking ').then((result) => {
        this.responseData = result;
        if (this.responseData.status == true) {
          this.navCtrl.setRoot(TabsPage);
          this.loading.dismiss();
          this.presentAlert('Thank you', 'Your booking has been saved successfully.');
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
      this.AuthServiceProvider.postData(this.userData, 'updateHomeServiceBooking ').then((result) => {
        this.responseData = result;
        if (this.responseData.status == true) {
          this.navCtrl.setRoot(TabsPage);
          this.loading.dismiss();
          this.presentAlert('Thank you', 'Your booking has been saved successfully.');
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
}
