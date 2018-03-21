import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { CallNumber } from '@ionic-native/call-number';
import { ViewacceptQuotePage } from '../viewaccept-quote/viewaccept-quote';
import { AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import {ServicestateProvider} from '../../providers/servicestate/servicestate';
import { QuotehistoryPage } from '../quotehistory/quotehistory';
import { Http,Headers, RequestOptions} from '@angular/http';
import { QuotemapPage } from '../quotemap/quotemap';
import { EditservicebookingPage } from '../editservicebooking/editservicebooking';
import { VendorratingPage } from '../vendorrating/vendorrating';
import { EditotherservicebookingPage } from '../editotherservicebooking/editotherservicebooking';
/**
 * Generated class for the QuoteviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@IonicPage()
@Component({
  selector: 'page-quoteview',
  templateUrl: 'quoteview.html',
})
export class QuoteviewPage {
  pushData ={"deviceId":"","message":""};
  make: any;
  model: any;
  problem: any;
  pickup: any;
  bookingdate: any;
  soft: any;
  hard: any;
  othermodel: any;
  booking_date: any;
  image: any;
  audio: any;
 
  mapview: any;
  listview: any;
  quoteview: any;
  gadget:any;
  quotview: any;
  requestedService:any;
  responsedata: any;
  nabo_img: any;
  Check : any;
  preferredlocation:any;
  description:any;
  cdata:any;
  cgadget:any;
  status: any;
  cancelStatus:any;
  timePeriod:any;
  constructor(public navCtrl: NavController,
    public AuthServiceProvider: AuthServiceProvider,
    public navParams: NavParams,
    private callNumber: CallNumber,
    private alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public serviceState:ServicestateProvider,
    public http: Http) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuoteviewPage');

    this.quoteget();
  }
  listshow() {
    this.navCtrl.push(this.navCtrl.getActive().component);
  }
  mapshow() {
    this.navCtrl.setRoot(QuotemapPage);
  }

  push(data){
    console.log("pushData",data);
  this.http.post('http://rytefix.in/sunapi/push.php',data).subscribe((result) => {
    // this.responseData = result;
    console.log(result);
    }, (err) => {
    console.log(err);
    });
  }
  quoteget() {
    console.log(localStorage.getItem("loggedData"));
    var quotedata = JSON.parse(localStorage.getItem("loggedData"));
    console.log(quotedata);
    this.cdata=quotedata[0].book_id;
    this.AuthServiceProvider.postData(quotedata[0], 'quoteView').then((result) => {
      console.log(result);
      this.quoteview = result;
      this.acceptCheck(this.quoteview);
      console.log(this.quoteview[0].make_name);
      this.cgadget=this.quoteview[0].gadget;
      if (this.quoteview[0].make_name == null) {
        this.make = this.quoteview[0].make;
      } else {
        this.make = this.quoteview[0].make_name;

      }
      //this.make= this.quoteview[0].make_name;
      this.gadget = this.quoteview[0].gadget;
      console.log(this.gadget);
      this.model = this.quoteview[0].model;
      this.soft = this.quoteview[0].softService;
      this.hard = this.quoteview[0].hardService;
      this.othermodel = this.quoteview[0].othermodel;
      this.pickup = this.quoteview[0].pickup_type;
      this.booking_date = this.quoteview[0].posted_on;
      this.image = this.quoteview[0].image;
      this.audio = this.quoteview[0].audio;
      this.description= this.quoteview[0].bookingdescription;
      this.cancelStatus = this.quoteview[0].cancel_status;
      this.preferredlocation= this.quoteview[0].preferredlocation;
      this.requestedService = this.quoteview[0].service;
      this.timePeriod = this.quoteview[0].bookingtime_period;
    
      this.quoteview.forEach(element => {
        if(element.accept_status != null){
          this.status = element.accept_status;
          console.log('accept status',element.accept_status);
        }
        
        
      });
    
    });

  }
  quoteChat() {
    alert("Soon we will launch");

  }
  quoteCall(mobile) {
    console.log(mobile);
    this.callNumber.callNumber(mobile, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }

  acceptCheck(quoteView){
    quoteView.forEach(element => {
      if(element.accept_status == 3){
        console.log(element);
        this.Check = "accepted";
        console.log(this.Check);
      }
     
    });
  }
  quoteAccept(id, data) {
    console.log("quote data",data.device_id);
    this.pushData.deviceId = data.device_id;
    this.pushData.message = "Customer has accepted your service. Contact customer to complete the service.";
      // checking for customer if already accepted the quote
      if(this.Check == "accepted"){
      // if accepted throws prompt message to ignore accepted quote
        let promptalert = this.alertCtrl.create({
      title: 'Warning',
      message: 'you have already accepted the quote ! please ignore the accepted quote to accept this.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            
          }
        }
      ]
    });
    promptalert.present();
      }
      // else it allows to accept quote
      else{
          console.log('quote is not accepted previously');

           let promptalert = this.alertCtrl.create({
      title: 'Accept Quote',
      message: 'Do you want to Accept this Quote?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log(id);
            this.AuthServiceProvider.postData(data, 'serviceAccept').then((result) => {
              this.responsedata = result;
                 this.push(this.pushData);
              if (this.responsedata.status == true) {
                //this.refresh();
                this.quoteAccept1(data);
                this.push(this.pushData);
                alert("Service accepted successfully");
              }
            });
          }
        }
      ]
    });
    promptalert.present();
        
      }
  }

  quoteAccept1(data) {
    console.log("data", data);
    this.navCtrl.push(QuoteviewPage, { "data": data });
  }

  quoteIgnore(id) {

    let promptalert = this.alertCtrl.create({
      title: 'Ignore',
      message: 'Do you want to Ignore this Quote?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log(id);
            this.AuthServiceProvider.postData(id, 'serviceIgnore').then((result) => {
              this.responsedata = result;
              if (this.responsedata.status == true) {
                this.refresh();
                alert("Service ignored successfully");

              }

            });
          }
        }
      ]
    });
    promptalert.present();

  }
  refresh() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
    console.log("refresh");
  }
 

  completeQuote(vid,bid,data){
    // console.log('vid',vid);
    let data1 = data;
     console.log('compelte data',data);
     console.log('compelte data',data1);
     
     this.pushData.deviceId = data.device_id;
     this.pushData.message = "Customer has completed your service.";

    let prompt = this.alertCtrl.create({
      message: "Service completed and payment made ?",
      buttons: [
        {
          text: 'Yes',
          handler: data => {
            console.log('yes clicked'); 
            this.navCtrl.push(VendorratingPage, { item: data1 });
          //   this.serviceState.completeService(vid,bid).subscribe(data =>{

          //     console.log(data);
          //     console.log(data.status);
          //     if(data.status == 'success'){
          //       this.push(this.pushData);
          //       let toast = this.toastCtrl.create({
          //         message: "Congratulations! You can use the credit",
          //         duration: 3000,
          //         position: 'bottom'
          //       });     
          //       toast.present();
          //       // this.navCtrl.push(TabsPage);
          //     }

          //  }),error =>{
          //    console.log(error);
          //  }
             
            
          }
        },
        {
          text:'No',
          handler: data => {  
           alert(" Please pay for the service and then complete");
            return true;
          }
        }
      ]
    });
    prompt.present();
  }

  declineQuote(vid,bid){
    // console.log('data',this.quoteview[0]);
    // let vid = this.quoteview[0].vendor;
    // let bid= this.quoteview[0].booking_id;
    console.log('vendor id',vid);
    console.log('booking id',bid);
      let prompt = this.alertCtrl.create({
        //message: "Please describe the problem",
        inputs: [
          {
            //type :'text',
            name: 'reason',
            placeholder: 'Reason for decline',
            value: ""
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');  
            }
          },
          {
            text:'Ok',
            handler: data => {
              // let validateObj = this.validate(data);
                        if (data.reason == "") {
                          let toast = this.toastCtrl.create({
                            message: "Please enter the reason ",
                            duration: 3000,
                            position: 'bottom'
                          });
                          toast.present();
                            return false;
                        } 
                        else {
                          let toast = this.toastCtrl.create({
                                message: "Now you can accept other quotes",
                                duration: 3000,
                                position: 'bottom'
                              });
                              toast.present();
                              this.serviceState.reportproblem(vid,bid,data.reason).subscribe(data =>{

                                 console.log(data);
                                 this. refresh();
                                 //this.navCtrl.push(QuotehistoryPage);

                              }),error =>{
                                console.log(error);
                              }
                              // this.navCtrl.push(QuoteviewPage);
                        }            
            }
          }
        ]
      });
      prompt.present();
  
  }
  editBooking(cdata,cgadget){
    let data ={booking_id:cdata,gadget:cgadget};
    console.log("data",data);
    if(cgadget == "A/C" || cgadget == "Plumbing" || cgadget == "Home_Appliances" || cgadget == "Beauty_Services" || cgadget == "Electrical"){
      console.log('new edit booking');
      this.navCtrl.push(EditotherservicebookingPage, {item: data});
    }else{
      // console.log('old edit booking');
      this.navCtrl.push(EditservicebookingPage, {item: data});
    }
    
  }

}
