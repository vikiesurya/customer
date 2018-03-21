import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,App ,LoadingController} from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { LoginPage } from '../login/login';
import { Http,Headers, RequestOptions} from '@angular/http';
import {ServicestateProvider} from '../../providers/servicestate/servicestate';


@IonicPage()
@Component({
  selector: 'page-invitefrd',
  templateUrl: 'invitefrd.html',
})
  
export class InvitefrdPage {
  shareurl:any;
  userData: any;
  rewardAmount: any;
  creditHistory: ArrayBuffer;
  loading:any;
  shareContent:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,
    public app:App,
    public actionSheetCtrl: ActionSheetController, 
    public socialSharing: SocialSharing,public http: Http, public serviceState:ServicestateProvider,public loadingCtrl: LoadingController) {

      //  this.getCreditHistory();
      // this.getRewardPoints();
      this.loader();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvitefrdPage');
    this.createShortUrl();
    this.referAndEarnContent();
    // this.redeemRewards();
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

  loader(){
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    this.loading.present();
  }

  createShortUrl(){
    this.userData = JSON.parse(localStorage.getItem('loggedData'));
      let userData = this.userData[0];
      console.log(userData);

      let data;
      var properties = {
        canonicalIdentifier: userData.mobile,
        title: 'Rytefix',
        contentDescription: 'Invitation to rytefix',
      }

      var analytics = {
        channel: 'WhatsApp',
        feature: 'InviteFriends',
        campaign: 'WhatsappShare',
        stage: 'new user',
        tags: ['InviteFriends', userData.username,userData.id,userData.mobile]
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
      Branch.setIdentity(userId).then(function (res) {
        console.log('Response: ' + JSON.stringify(res))
      }).catch(function (err) {
        alert('Error: ' + JSON.stringify(err.message))
      })
      // creating branch object
      Branch.createBranchUniversalObject(properties).then( (res)=> {
        console.log('object: ' + JSON.stringify(res))

        // generating short url 
        res.generateShortUrl(analytics, some_properties).then((res)=> {
          this.shareurl = JSON.stringify(res.url);
          // console.log('shorturl: ' + JSON.stringify(res.url));
          console.log('shorturl: ' + this.shareurl);
          this.loading.dismiss();
        })
      })
  }


  inviteFriends() {    
      console.log('invite friends');
      let message1 = 'Install or Reopen the app here';
      let message = this.shareContent +'\n \n'+ message1 +'\n';
              this.socialSharing.shareViaWhatsApp(message,'',this.shareurl).then((data) => {
                console.log('success');
                var eventName = 'Invites'
                const Branch = window['Branch'];
                Branch.userCompletedAction(eventName).then(function (res) {
                  console.log('Response: ' + JSON.stringify(res))
                }).catch(function (err) {
                  console.log('Error: ' + JSON.stringify(err.message))
                })
              }).catch((e) => {
                console.log(e);
              });
  }

  // getRewardPoints(){
  //   const Branch = window['Branch'];
  //   var bucket = 'rewards'
  //   Branch.loadRewards(bucket).then((res) => {
  //     this.rewardAmount = parseInt(JSON.stringify(res));
  //     this.redeemRewards(this.rewardAmount);
  //     console.log('Reward Response: ', this.rewardAmount);
  //   }).catch(function (err) {
  //     console.log('Reward Error: ' + JSON.stringify(err))
  //   })
  // }

  redeemRewards(data){
    // let userdata = JSON.parse(localStorage.getItem('loggedData'));
    //   let userId = userdata[0].id;
    //   console.log(userId);
    // console.log(data);
    // if(this.rewardAmount!=0){
    //   const Branch = window['Branch'];
    //    var amount = data;
    //   var bucket = 'rewards'
    // let serverData = {userid:userId,credit:amount};
    //   this.http.post('http://rytefix.in/apitest/refernearn.php',serverData).subscribe((result) => {
    // console.log(result);
    // }, (err) => {
    // console.log(err);
    // });
    //   Branch.redeemRewards(amount, bucket).then(function (res) {
    //     console.log('Response: ' + JSON.stringify(res))
    //   }).catch(function (err) {
    //     console.log('Error: ' + JSON.stringify(err))
    //   })
    // }
   
  }

  getCreditHistory(){
    
    const Branch = window['Branch'];
    Branch.creditHistory().then((res) => {
      this.creditHistory = res;
      console.log('credit Response: ',this.creditHistory);
    }).catch(function (err) {
      console.log('Error: ' + JSON.stringify(err))
    })
  }

  

}
