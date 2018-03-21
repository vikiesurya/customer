import { Component } from '@angular/core';
import { IonicPage, NavController,ToastController,LoadingController, AlertController,NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';
import {LoginPage}from '../login/login';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Http,Headers, RequestOptions} from '@angular/http';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  pushData ={"deviceId":"","message":"Thanks Your booking is received will be processed within 24 hours"};
  uesrPass:any;
  userCpass:any;
  disable:any;
  otpverify:any;
  responsedata:any;
  registerpage:any;
  header:any;
  type:any="password";
  show:boolean=false;
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    mobile: new FormControl('',Validators.required),
    cpassword: new FormControl('',Validators.required),
    area: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    pincode: new FormControl('',Validators.required),
    mail: new FormControl('', [Validators.required, Validators.email])
  });
  get username() {
    return this.form.get('username');
  }
  get mobile() {
    return this.form.get('mobile');
  }
  get mail() {
    return this.form.get('mail');
  }
  get password() {
    return this.form.get('password');
  }
  get cpassword() {
    return this.form.get('cpassword');
  }
  get area() {
    return this.form.get('area');
  }
  get city() {
    return this.form.get('city');
  }
  get pincode() {
    return this.form.get('pincode');
  }
  form1 = new FormGroup({
    otp: new FormControl('', Validators.required)
  });
  get otp() {
    return this.form1.get('otp');
  }
  imgData:any;
  audioData:any;
  otpData={"otp":""};
  userData = { "username": "", "mobile":"","mail": "","password": "","cpassword":"","area":"","city":"","pincode":"","deviceId":""};
  constructor(private alertCtrl: AlertController,public transfer: FileTransfer,public file: File,
    public navCtrl: NavController,private loadingCtrl: LoadingController,private toastCtrl: ToastController,
    public AuthServiceProvider:AuthServiceProvider, public navParams: NavParams,public http: Http) {
    this.userCpass=false;
    this.disable=true;
    this.otpverify=false;
    this.registerpage=true;
    if(this.registerpage==true){
      this.header="New User Registration";
    }
    else {
      this.header="OTP Verfication";
    }
    this.userData.deviceId = localStorage.getItem('deviceID');
    this.pushData.deviceId = this.userData.deviceId;
    console.log('device ID = ',this.userData.deviceId);
  }

  push(data){
    console.log("pushData",data);
  this.http.post('http://rytefix.in/sunapi/push.php',data).subscribe((result) => {
    console.log(result);
    }, (err) => {
    console.log(err);
    });
  }

  showPw(){
    console.log("show==false");
    if(this.show==false){
    this.show=true;
    this.type="text";
    }
    else{
    this.show=false;
    this.type="password";
    }
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    if(localStorage.getItem('imageList')){
      this.imgData =JSON.parse(localStorage.getItem('imageList'));
    }
    if(localStorage.getItem('audiolist')){
      this.audioData =JSON.parse(localStorage.getItem('audiolist'));
    }
  }
  pass(data){
    console.log(data);
this.uesrPass=data;
  }
  cpass(data){
    console.log(data);
    if(this.uesrPass==data){
      console.log("true");
this.userCpass=false;
this.disable=false;
    }else{
      console.log("true");
      this.userCpass=true;
    }
  }
  jsonConcat(o1, o2) {
    for (var key in o2) {
      o1[key] = o2[key];
    }
    return o1;
  }
  otpVerify(){
    let toast = this.toastCtrl.create({
      message: 'otp successfully verifid',
      duration: 3000,
      position: 'bottom'
    });
    console.log(this.otpData);
    let logged=JSON.parse(localStorage.getItem("loggedData"));
    //let otpverify=this.jsonConcat(this.otpData, logged);
    logged[0]['otp']=this.otpData['otp'];
      console.log(logged);
    this.AuthServiceProvider.postData(logged[0],'otpVerify').then((result) => {
      this.responsedata=result;
      if(this.responsedata.status==true){
        localStorage.setItem('loggedData',JSON.stringify(this.responsedata.data));
        alert("OTP verified");
        this.navCtrl.setRoot(TabsPage);
      }else{
        alert("Invalid otp");
      }
      
     // this.makedropdown=result;
    //  console.log(this.makedropdown );
        } );
  }
  pushSendAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Already registered mobile number.',
      buttons: ['Dismiss']
    });
    alert.present();
  }
  register(){
    // let toast = this.toastCtrl.create({
    //   message: 'Register successfully',
    //   duration: 3000,
    //   position: 'bottom'
    // });
    
    let loader = this.loadingCtrl.create({content: "Please wait.."});
     loader.present();
    console.log(this.userData);
    if(this.userData.username && this.userData.password && this.userData.cpassword && this.userData.mail && this.userData.mobile && this.userData.area && this.userData.city && this.userData.pincode){
      if(localStorage.getItem('serviceBooking')){
        console.log(JSON.parse(localStorage.getItem('serviceBooking')));
        let service =JSON.parse(localStorage.getItem('serviceBooking'));
        
        let serviceUser=this.jsonConcat(service, this.userData);
        if(serviceUser['image']==""){serviceUser['image']="user_avatar.png";}
        serviceUser['gadget']=localStorage.getItem('gadget');
      console.log(serviceUser);
        this.AuthServiceProvider.postData(serviceUser,'regUser').then((result) => {
          this.responsedata=result;
          if(this.responsedata.status==true){
            loader.dismiss();
            // this.push(this.pushData);
            localStorage.setItem('loggedData',JSON.stringify(this.responsedata.data)); 
            //toast.present();
            console.log("image:"+service.image);
            console.log("image:"+service.audio);
            if(JSON.parse(localStorage.getItem('serviceBooking')).image){this.uploadFile();}
            if(JSON.parse(localStorage.getItem('serviceBooking')).audio){this.uploadAudio(); } 
            this.otpverify=true;
            if(this.otpverify==true){
              this.header="OTP Verfication";
            }
            else {
              
            }
            
            this.registerpage=false;
            console.log(result);
          }else if(this.responsedata.status==false){
            loader.dismiss();
            this.pushSendAlert(); 
          }
            } );
    
      }else if(localStorage.getItem('serviceBooking1')){
        console.log(JSON.parse(localStorage.getItem('serviceBooking1')));
        let service =JSON.parse(localStorage.getItem('serviceBooking1'));
        
        let serviceUser=this.jsonConcat(service, this.userData);
        if(serviceUser['image']==""){serviceUser['image']="user_avatar.png";}
        serviceUser['gadget']=localStorage.getItem('gadget');
      console.log(serviceUser);
        this.AuthServiceProvider.postData(serviceUser,'reg1User').then((result) => {
          this.responsedata=result;
          if(this.responsedata.status==true){
            loader.dismiss();
            // this.push(this.pushData);
            localStorage.setItem('loggedData',JSON.stringify(this.responsedata.data)); 
            //toast.present();
            console.log("image:"+service.image);
            console.log("image:"+service.audio);
            if(JSON.parse(localStorage.getItem('serviceBooking1')).image){this.uploadFile();}
           if(JSON.parse(localStorage.getItem('serviceBooking1')).audio){this.uploadAudio(); }
            this.otpverify=true;
            if(this.otpverify==true){
              this.header="OTP Verfication";
            }
            else {
              
            }
            this.registerpage=false;
            console.log(result);
          }else if(this.responsedata.status==false){
            loader.dismiss();
            this.pushSendAlert(); 
          }
            } );
    
      }else{
        this.AuthServiceProvider.postData(this.userData,'register').then((result) => {
          this.responsedata=result;
          if(this.responsedata.status==true){
            loader.dismiss();
            localStorage.setItem('loggedData',JSON.stringify(this.responsedata.data)); 
            //toast.present();
            this.otpverify=true;
            if(this.otpverify==true){
              this.header="OTP Verfication";
            }
            else {
              
            }
            this.registerpage=false;
            console.log(result);
          }else if(this.responsedata.status==false){
            loader.dismiss();
            this.pushSendAlert(); 
          }
            } );
      }
        
    }else{
      alert("All fields are required");
    }
  }
  loginPage(){
    this.navCtrl.push(LoginPage);
   }
   uploadAudio(){
    const fileTransfer: FileTransferObject = this.transfer.create();
    let options = {
      fileKey: "file",
    fileName: this.audioData[0]['filename'],
    chunkedMode: false,
    mimeType: "multipart/form-data",
    params : {'fileName': this.audioData[0]['filename']}
   };
   
   console.log('filepath',this.audioData[0]['filePath']);
   console.log('filename',this.audioData[0]['filename']);
  // console.log("userid",this.userid);
  //  fileTransfer.upload('<file path>', '<api endpoint>', options)
   fileTransfer.upload(this.audioData[0]['filePath'],'http://rytefix.in/images/audio.php',options)
   .then((data) => {
     console.log(data);
   }, (err) => {
     // error
     console.log(err);
     alert('error');
   })

  }
  uploadFile() {
      let loader = this.loadingCtrl.create({
        content: "Uploading..."
      });
      //loader.present();
      const fileTransfer: FileTransferObject = this.transfer.create();
    
     
      console.log('image name',this.imgData['imgfilename']);
      let options: FileUploadOptions = {
        fileKey: 'file',
        fileName: this.imgData['imgfilename'],
        chunkedMode: false,
        mimeType: "image/jpeg",
        headers: {},
      params : {'fileName': this.imgData['imgfilename']}
        
      }
    
      fileTransfer.upload(this.imgData['imgfilePath'], 'http://rytefix.in/images/image.php', options)
        .then((data) => {
        console.log(data+" Uploaded Successfully");
       // loader.dismiss();
       // this.presentToast("Image uploaded successfully");
      }, (err) => {
        console.log(err);
        loader.dismiss();
        this.presentToast(err);
      });
    }
    presentToast(msg) {
      let toast = this.toastCtrl.create({
        message: msg,
        duration: 3000,
        position: 'bottom'
      });
    
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
    
     // toast.present();
    }

}
