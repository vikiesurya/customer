import { Component } from '@angular/core';
import { IonicPage, ToastController,LoadingController,AlertController, NavController, NavParams } from 'ionic-angular';
import{ RegisterPage } from '../register/register';
import { LoginPage }from '../login/login';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the ChangepassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changepass',
  templateUrl: 'changepass.html',
})
export class ChangepassPage {
    form = new FormGroup({
      npass: new FormControl('', Validators.required),
      cpass: new FormControl('', Validators.required)
       });
       get npass() {
        return this.form.get('npass');
      }
      get cpass() {
        return this.form.get('cpass');
      }
      responsedata:any;
      userCpass:any;
      userPass:any;
      responseData:any;
      disable:any;
  passData={"npass":"","cpass":""};
  constructor(public navCtrl: NavController,private loadingCtrl: LoadingController, public navParams: NavParams,private toastCtrl: ToastController,public AuthServiceProvider:AuthServiceProvider) {
    this.userCpass=false;
    this.disable=true;
    if(localStorage.getItem("loggedData")){
      this.ionViewDidLoad();
    }else{
      this.navCtrl.setRoot(LoginPage);
    }

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangepassPage');
  }
  npassword(data){
    console.log(data);
this.userPass=data;
  }
  cpassword(data){
    console.log(data);
    if(this.userPass==data){
      console.log("true");
this.userCpass=false;
this.disable=false;
    }else{
      console.log("true");
      this.userCpass=true;
    }
  }
changePass(){
  let toast = this.toastCtrl.create({
    message: 'Password Changed successfully',
    duration: 3000,
    position: 'bottom'
  });
  let loader = this.loadingCtrl.create({content: "Please wait.."});
  loader.present();
  console.log(this.passData);
  let loggedData=JSON.parse(localStorage.getItem("loggedData"));
  console.log(loggedData);
  loggedData[0]['resetpass']=this.passData['npass'];
    this.AuthServiceProvider.postData(loggedData[0],'resetPassword').then((result) => {
      this.responsedata=result;
      if(this.responsedata.status==true){
        loader.dismiss();
       
        console.log(result);
        toast.present();
        this.navCtrl.setRoot(LoginPage);
      }else{
        loader.dismiss();
      }
        } );
}

}
