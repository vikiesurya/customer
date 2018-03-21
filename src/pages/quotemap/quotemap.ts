import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { CallNumber } from '@ionic-native/call-number';
import { ViewacceptQuotePage } from '../viewaccept-quote/viewaccept-quote';
import { AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import {ServicestateProvider} from '../../providers/servicestate/servicestate';
import { QuotehistoryPage } from '../quotehistory/quotehistory';
import { QuoteviewPage } from '../quoteview/quoteview';
import { Http,Headers, RequestOptions} from '@angular/http';
/**
 * Generated class for the QuoteviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@IonicPage()
@Component({
  selector: 'page-quotemap',
  templateUrl: 'quotemap.html',
})
export class QuotemapPage {

  pushData ={"deviceId":"","message":""};
  options: GeolocationOptions;
  currentPos: Geoposition;
  regionals: any = [];
  map: any;
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
  preferredlocation:any;
  @ViewChild('map') mapElement: ElementRef;
  mapview: any;
  listview: any;
  quoteview: any;
  quotview: any;
  responsedata: any;
  nabo_img: any;
  Check : any;
  description:any;
  requestedService :any;
  timePeriod :any;
  cgadget:any;
  constructor(public navCtrl: NavController,
    public AuthServiceProvider: AuthServiceProvider,
    public navParams: NavParams,
    private callNumber: CallNumber,
    private geolocation: Geolocation,
    private alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public serviceState:ServicestateProvider,
    public http: Http) {
    this.mapload();
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotemapPage');

    this.quoteget();
  }
  listshow() {
    this.navCtrl.setRoot(QuoteviewPage);
  }
  mapshow() {
    this.navCtrl.push(this.navCtrl.getActive().component);
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
    this.AuthServiceProvider.postData(quotedata[0], 'quoteView').then((result) => {
      console.log(result);
      this.quoteview = result;
      this.acceptCheck(this.quoteview);
      console.log(this.quoteview[0].make_name);
      if (this.quoteview[0].make_name == null) {
        this.make = this.quoteview[0].make;
      } else {
        this.make = this.quoteview[0].make_name;

      }
      //this.make= this.quoteview[0].make_name;
      this.cgadget = this.quoteview[0].gadget;
      this.model = this.quoteview[0].model;
      this.soft = this.quoteview[0].softService;
      this.hard = this.quoteview[0].hardService;
      this.othermodel = this.quoteview[0].othermodel;
      this.pickup = this.quoteview[0].pickup_type;
      this.booking_date = this.quoteview[0].posted_on;
      this.image = this.quoteview[0].image;
      this.audio = this.quoteview[0].audio;
      this.description= this.quoteview[0].bookingdescription;
      this.preferredlocation= this.quoteview[0].preferredlocation;
      this.requestedService = this.quoteview[0].service;
      this.timePeriod = this.quoteview[0].bookingtime_period;
      this.regionals = result;
      this.regionals.forEach(function (o) {
        Object.keys(o).forEach(function (k) {
          if (isFinite(o[k])) {
            o[k] = +o[k];
          }
        });
      });

      console.log(this.regionals);
      this.mapload();
      // this.navCtrl.setRoot(HomePage);
    });

  }
  quoteChat() {
    alert("test");

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
            this.AuthServiceProvider.postData(id, 'serviceAccept').then((result) => {
              this.responsedata = result;
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
    this.navCtrl.push(QuotemapPage, { "data": data });
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
  mapload() {
    //  this.loadMap(13.08648395538330,80.27350616455078 );
    this.options = {
      enableHighAccuracy: true
    };

    this.geolocation.getCurrentPosition(this.options).then((pos: Geoposition) => {

      this.currentPos = pos;
      console.log(pos);
      console.log(pos.coords.latitude + ',' + pos.coords.longitude)
      this.addMap(pos.coords.latitude, pos.coords.longitude);
      //  this.loadMap(pos.coords.latitude,pos.coords.longitude);
    }, (err: PositionError) => {
      console.log("error : " + err.message);
    });

  }
  /*##User location load##*/
  addMap(lat, long) {
    let latLng = new google.maps.LatLng(lat, long);
    let mapOptions = {
      center: latLng,
      zoom: 5,
      visible: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    // this.addMarker();
    let markers = [];
    console.log("regionals", this.regionals);
    for (let regional of this.regionals) {
      this.nabo_img = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
      console.log(regional.latitude + ',' + regional.longitude);
      let markerData = {
        position: {
          lat: regional.latitude,
          lng: regional.longitude
        },
        map: this.map,
        icon: this.nabo_img,
        title: regional.username,
      };

      regional.marker = new google.maps.Marker(markerData);
      markers.push(regional.marker);
      //let content = regional.username; 

      //infoWindow.open(this.map, regional.marker);
      regional.marker.addListener('click', () => {

        let content = "<div><div><b>Vendor name:</b> " + regional.username +
          "</div><p><b>Exact price:</b> " + regional.exactprice +
          "</p><p><b>Warranty:</b> " + regional.warranty +
          "</p><p><b>Description:</b> " + regional.description +
          "</p><button   class='buttonchat' (ng-click)='quoteChat()' >Chat</button>" +
          "<button ion-button color='secondary'  class='buttoncall' (click)='quoteCall(" + regional.mobile + ")' icon-only>Call</button>" +
          "<button ion-button color='primary'  class='buttonacc' (click)='quoteAccept(" + regional.id + regional + ")' icon-only>Accept</button>" +
          "<button ion-button color='light'  class='buttonig' (click)='quoteIgnore(" + regional.id + ")' icon-only>Ignore</button></div>'";
        let infoWindow = new google.maps.InfoWindow({
          content: content
        });
        infoWindow.open(this.map, regional.marker);
        for (let c of this.regionals) {
          console.log(c);
          c.current = false;
          // c.infoWindow.close();
        }
        this.regionals = regional;

        let markerData = {
          position: {
            lat: regional.latitude,
            lng: regional.longitude
          },
          map: this.map,

          title: regional.title,
        };
        regional.marker = new google.maps.Marker(markerData);
        markers.push(regional.marker);
        console.log(regional.marker);
        console.log(regional);

        console.log(regional.latitude + ',' + regional.longitude);

        //this.othersAddress = regional.username+','+regional.street_address+regional.city +regional.country ;
        // this.othersAddress = ` ${regional.username}, ${regional.street_address}, ${regional.city}, ${regional.country} ` ;

        this.map.panTo(regional.marker.getPosition());

      });
    }

  }
  // loadMap(lat,long){
  //  console.log(lat+","+long);
  //   console.log("lat and lang")
  //   let latLng= new google.maps.LatLng(lat, long);
  //   console.log(latLng);
  //   let mapOptions={
  //     center:latLng,
  //     zoom:15,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   }
  // this.map=new google.maps.Map(this.mapElement.nativeElement,mapOptions);
  // this.addMarker();
  // }
  /*##user location mark in map##*/
  addMarker() {
    console.log("marker");
    // let cur_img='http://rayi.in/naboApi/mapicon/nabo_home.png';
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<p>This is your current position !</p>";
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
      //this.othersAddress = "This is your current position !";
    });

  }

  completeQuote(vid,bid,data){
    // console.log('vid',vid);
     console.log('compelte data',data);
     this.pushData.deviceId = data.device_id;
     this.pushData.message = "Customer has completed your service.";

    let prompt = this.alertCtrl.create({
      message: "Service completed and payment made ?",
      buttons: [
        {
          text: 'Yes',
          handler: data => {
            console.log('yes clicked'); 
            this.serviceState.completeService(vid,bid).subscribe(data =>{

              console.log(data);
              console.log(data.status);
              if(data.status == 'success'){
                this.push(this.pushData);
                let toast = this.toastCtrl.create({
                  message: "Congratulations! You can use the credit",
                  duration: 3000,
                  position: 'bottom'
                });     
                toast.present();
                this.navCtrl.push(TabsPage);
              }

           }),error =>{
             console.log(error);
           }
             
            
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
      //  message: "Please describe the problem",
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
                                 this.navCtrl.push(QuotehistoryPage);

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
}
