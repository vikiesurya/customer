import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import {ServicestateProvider} from '../../providers/servicestate/servicestate';
import { TabsPage } from '../tabs/tabs';
import { Http,Headers, RequestOptions} from '@angular/http';
/**
 * Generated class for the VendorratingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vendorrating',
  templateUrl: 'vendorrating.html',
})
export class VendorratingPage {
  rate:any;
  review:any;
  data:any;
  pushData ={"deviceId":"","message":""};
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,
    public serviceState:ServicestateProvider,
    public http: Http) {
    this.data = navParams.get('item');
    console.log(this.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VendorratingPage');
  }

  onModelChange(){
    console.log(this.rate);
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

  submitReview(){
    if(this.rate){
      let serverData = {cid:this.data.customer,
        vid:this.data.vendor,
        bid:this.data.booking_id,
        rating:this.rate,
        review:this.review};
        console.log(serverData);
        this.pushData.deviceId = this.data.device_id;
     this.pushData.message = "Customer has completed your service.";
      this.serviceState.vendorReview(serverData).subscribe(data =>{
        console.log(data);
        if(data.status == "success"){
          this.serviceState.completeService(this.data.vendor,this.data.booking_id).subscribe(data =>{

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
              // this.navCtrl.push(TabsPage);
            }

         }),error =>{
           console.log(error);
         }
          this.navCtrl.setRoot(TabsPage);
        }
  
     }),error =>{
       console.log(error);
     }
    }else{
      alert('please select star rating for vendor');
    }
   
  }

}
