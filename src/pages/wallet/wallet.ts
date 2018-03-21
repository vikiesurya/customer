import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import {ServicestateProvider} from '../../providers/servicestate/servicestate';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TabsPage } from '../tabs/tabs';
import { AlertController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html',
})
export class WalletPage {
  userdata:any;
  userId:any;
  walletamount:any;
  earns:any;
  spends:any;
  items : any;
  referEarning:any;
  count:any;
  referEarning1:any;
  count1:any;
  referEarning2:any;
  welcomeBonusAmount:any;
  welcomeBonusAmount1:any;
  welcomeBonusAmount2:any;
  count2:any;
  responsedata:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public AuthServiceProvider:AuthServiceProvider,public emailComposer: EmailComposer, public modal: ModalController, public serviceState:ServicestateProvider,private alertCtrl: AlertController) {
      let data = JSON.parse(localStorage.getItem('loggedData'));
      this.AuthServiceProvider.postData(data[0],'getUserdata').then((result) => {
        this.responsedata=result;
        if(this.responsedata.status==true){
         // toast.present();
          localStorage.setItem('loggedData',JSON.stringify(this.responsedata.data));
          
        }
    });
    this.userdata = JSON.parse(localStorage.getItem('loggedData'));
    console.log(this.userdata);
    this.userId = this.userdata[0].id;
    console.log(this.userId);
    this.walletamount = this.userdata[0]['rf_wallet_bal'];
    console.log("walletamount",this.walletamount);
    this.earnings();
    this.referEarnings();
    this.referEarningStatus1();
    this.referEarningStatus2();
    this.welcomeBonus();
    this.welcomeBonusStatus1();
    this.welcomeBonusStatus2();
    // console.log(data[0].rf_wallet_bal);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WalletPage');
    let data = JSON.parse(localStorage.getItem('loggedData'));
    this.AuthServiceProvider.postData(data[0],'getUserdata').then((result) => {4
      this.responsedata=result;
      if(this.responsedata.status==true){
       // toast.present();
        localStorage.setItem('loggedData',JSON.stringify(this.responsedata.data));
        
      }
  });
  this.userdata = JSON.parse(localStorage.getItem('loggedData'));
  console.log(this.userdata);
  this.userId = this.userdata[0].id;
  console.log(this.userId);
  this.walletamount = this.userdata[0]['rf_wallet_bal'];
  console.log("walletamount",this.walletamount);
  }

  redeem(){

    let email = {
      to: 'support@rytefix.com',
      //cc: 'admin@rytefix.com',
      bcc: [],
      subject: 'Customer '+this.userdata[0].username+' Redeem request for referral amount',
      body: 'the amount requested to redeem by customer is '+this.referEarning,
      isHtml: true
    };
    
    // Send a text message using default options
    // this.emailComposer.open(email);

    this.referEarningStatus();
   

  }

  openModal(item){
    const data = {
      username: this.userdata[0].username,
      redeemData: item
    };
    const myModal =  this.modal.create('RedeemPage',{data : data});
    myModal.present();
  }


  earnings(){
    this.serviceState.creditearns(this.userId).subscribe(data =>{
      this.items = data;
      console.log(this.items);

   }),error =>{
     console.log(error);
   }
  }

  referEarnings(){
    let serverData = {userid:this.userId};
    this.serviceState.referEarnings(serverData).subscribe(data =>{
       this.referEarning = data.earnings.credits;
       this.count = data.rowcount;
      console.log(this.referEarning);

   }),error =>{
     console.log(error);
   }
  }

  referEarningStatus(){
    console.log('referAndEarning test');
    let serverData = {userid:this.userId,credits:this.referEarning};
    this.serviceState.referEarningStatus(serverData).subscribe(data =>{
      console.log(data.status);
      if(data.status == "success"){
        alert('redeem request sent successfully, our customer support will get back to you shortly');
        this.navCtrl.setRoot(TabsPage);
      }

   }),error =>{
     console.log(error);
   }
  }

  welcomeBonusRedeem(){

    let alert1 = this.alertCtrl.create({
      title: 'alert',
      message: 'Have you booked and completed the service ?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Buy clicked');
            console.log('referAndEarning test');
    let serverData = {userid:this.userId,credits:this.welcomeBonusAmount};
    this.serviceState.welcomeBonusRedeem(serverData).subscribe(data =>{
      console.log(data.status);
      if(data.status == "success"){
        alert('redeem request sent successfully, our customer support will get back to you shortly');
        this.navCtrl.setRoot(TabsPage);
      }

   }),error =>{
     console.log(error);
   }
          }
        }
      ]
    });
    alert1.present();
    
  }

  welcomeBonusStatus1(){
    console.log('referAndEarning test');
    let serverData = {userid:this.userId};
    this.serviceState.welcomeBonusStatus1(serverData).subscribe(data =>{
      console.log('status2',data);
      this.welcomeBonusAmount1 = data.earnings.credits;
   }),error =>{
     console.log(error);
   }
  }

  welcomeBonusStatus2(){
    console.log('referAndEarning test');
    let serverData = {userid:this.userId};
    this.serviceState.welcomeBonusStatus2(serverData).subscribe(data =>{
      console.log('status2',data);
      this.welcomeBonusAmount2 = data.earnings.credits;
   }),error =>{
     console.log(error);
   }
  }

  referEarningStatus1(){
    console.log('referAndEarning test');
    let serverData = {userid:this.userId};
    this.serviceState.referEarningStatus1(serverData).subscribe(data =>{
      console.log('status1',data);
      this.referEarning1 = data.earnings.credits;
       this.count1 = data.rowcount;
   }),error =>{
     console.log(error);
   }
  }

  referEarningStatus2(){
    console.log('referAndEarning test');
    let serverData = {userid:this.userId};
    this.serviceState.referEarningStatus2(serverData).subscribe(data =>{
      console.log('status2',data);
      this.referEarning2 = data.earnings.credits;
      this.count2 = data.rowcount;
   }),error =>{
     console.log(error);
   }
  }

  welcomeBonus(){
    console.log('welcomeBonus');
    let serverData = {userid:this.userId};
    this.serviceState.welcomeBonus(serverData).subscribe(data =>{
      console.log('status2',data);
      this.welcomeBonusAmount = data.earnings.credits;
   }),error =>{
     console.log(error);
   }
  }

}
