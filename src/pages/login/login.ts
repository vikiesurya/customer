import { Component } from '@angular/core';
import { IonicPage, ToastController,LoadingController,AlertController, NavController, NavParams, MenuController  } from 'ionic-angular';
import{ RegisterPage } from '../register/register';
import { HomePage }from '../home/home';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ChangepassPage } from '../changepass/changepass';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Http,Headers, RequestOptions} from '@angular/http';
import { TabsPage } from '../tabs/tabs';
import {ServicestateProvider} from '../../providers/servicestate/servicestate';
import { QuotehistoryPage } from '../quotehistory/quotehistory';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  pushData ={"deviceId":"","message":"Thanks Your booking is received will be processed within 24 hours"};
  imageFileName:any;
  filePath:any;
  fileName:any;
  imageURI:any;
  imgData:any;
  audioData:any;
  form = new FormGroup({
    mobile: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required)
     });
     get mobile() {
      return this.form.get('mobile');
    }
    get pass() {
      return this.form.get('pass');
    }
    form1 = new FormGroup({
      mobile1: new FormControl('', Validators.required)
       });
       get mobile1() {
        return this.form1.get('mobile1');
      }
      form2 = new FormGroup({
        otp: new FormControl('', Validators.required)
         });
         get otp() {
          return this.form2.get('otp');
        }
    responsedata:any;
    responseData:any;
    forgotMobile:any;
    otpverify:any;
    loginscreen:any;
    forgotData={"mobile1":""};
    otpData={"otp":""};
    loginData={"mobile":"","pass":"","deviceId":""};
  constructor(public navCtrl: NavController,public transfer: FileTransfer,public file: File,
    private alertCtrl: AlertController,
    private menuCtrl: MenuController,
    private loadingCtrl: LoadingController, public navParams: NavParams,private toastCtrl: ToastController,public AuthServiceProvider:AuthServiceProvider,public http: Http, public serviceState:ServicestateProvider) {
  this.forgotMobile=false;
  this.loginscreen=true;
  this.otpverify=false;

  this.loginData.deviceId = localStorage.getItem('deviceID');
  console.log('device ID = ',this.loginData.deviceId);
      this.pushData.deviceId = this.loginData.deviceId;
      this.loggedService();
      this.menuCtrl.swipeEnable(false);
  }

  verifyMobile(){

    let alert = this.alertCtrl.create({
      title: 'mobile verification',
      inputs: [
        {
          name: 'mobile',
          placeholder: 'enter mobile number '
        }
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
          text: 'verify',
          handler: data => {
            if (data.mobile != '') {
              let mobile = {mobile: data.mobile}
              this.serviceState.verifyMobile(data.mobile).subscribe(data =>{
                if(data.status =="success"){
                  let alert = this.alertCtrl.create({
                    title: 'enter OTP',
                    inputs: [
                      {
                        name: 'OTP',
                        placeholder: 'enter OTP'
                      }
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
                        text: 'Verify',
                        handler: otpdata => {
                          if (otpdata.OTP == data.otp) {
                            let toast = this.toastCtrl.create({
                              message: 'Mobile number verified successfully!',
                              duration: 3000,
                              position: 'bottom'
                            });
                            toast.present();
                            this.navCtrl.setRoot(LoginPage);
                          } else {
                            let toast = this.toastCtrl.create({
                              message: 'Invalid OTP !',
                              duration: 3000,
                              position: 'bottom'
                            });
                            toast.present();
                            return false;
                          }
                        }
                      }
                    ]
                  });
                  alert.present();
                }
                console.log(data);
             }),error =>{
               console.log(error);
             }
            } else {
              let toast = this.toastCtrl.create({
                message: 'please enter the mobile number !',
                duration: 3000,
                position: 'bottom'
              });
              toast.present();
              return false;
            }
          }
        }
      ]
    });
    alert.present();
  }

  loggedService(){
    if(localStorage.getItem('imageList')){
      this.imgData =JSON.parse(localStorage.getItem('imageList'));
    }
    if(localStorage.getItem('audiolist')){
      this.audioData =JSON.parse(localStorage.getItem('audiolist'));
    }
       
    let toast = this.toastCtrl.create({
      message: 'Service book successfully',
      duration: 3000,
      position: 'bottom'
    });
    let toast1 = this.toastCtrl.create({
      message: 'Service notbook successfully',
      duration: 3000,
      position: 'bottom'
    });
    let loader = this.loadingCtrl.create({content: "booking service.."});
    if(localStorage.getItem("loggedData")){
        let loggedid=JSON.parse(localStorage.getItem("loggedData"));
        console.log("logged Data", loggedid);
       if(localStorage.getItem('serviceBooking')){
        let loggedData =JSON.parse(localStorage.getItem('serviceBooking'));
        console.log("BookingData", loggedData);
        loader.present();
        //let loggedData=this.jsonConcat(service, logged);
      //  if(loggedData['image']==""){loggedData['image']="user_avatar.png";}
        loggedData['id']=loggedid[0].id;
        loggedData['username']=loggedid[0].username;
        loggedData['email']=loggedid[0].email;
        loggedData['gadget']=localStorage.getItem('gadget');
        console.log(loggedData);
        this.AuthServiceProvider.postData(loggedData,'serLogged').then((result) => {
          console.log(result);
          this.responseData=result;
          if(this.responseData.status==true){
          // toast.present();
          loader.dismiss();
           if(JSON.parse(localStorage.getItem('serviceBooking'))['image'])
           {
             if(JSON.parse(localStorage.getItem('serviceBooking'))['image']==JSON.parse(localStorage.getItem("loggedData"))['image']){}else{this.uploadFile();}}
             
           if(JSON.parse(localStorage.getItem('serviceBooking'))['audio']){this.uploadAudio(); }

            // this.push(this.pushData);  
            if(this.responseData.msg){
              this.bookingComplete(this.responseData.msg);
            }else{
              this.bookingComplete1();
            }
           
          }else{
           toast1.present();
          }
          this.navCtrl.setRoot(TabsPage);
        });
       }else if(localStorage.getItem('serviceBooking1')){
        let loggedData =JSON.parse(localStorage.getItem('serviceBooking1'));
        //let loggedData=this.jsonConcat(service, logged);
        // if(loggedData['image']==""){loggedData['image']="user_avatar.png";}
        loggedData['id']=loggedid[0].id;
        loggedData['username']=loggedid[0].username;
        loggedData['email']=loggedid[0].email;
        loggedData['gadget']=localStorage.getItem('gadget');
        console.log(loggedData);
        this.AuthServiceProvider.postData(loggedData,'ser1Logged').then((result) => {
          console.log(result);
          this.responseData=result;
          if(this.responseData.status==true){
          // toast.present();
          //  this.push(this.pushData);
           if(JSON.parse(localStorage.getItem('serviceBooking1'))['image'])
           {
             if(JSON.parse(localStorage.getItem('serviceBooking1'))['image']==JSON.parse(localStorage.getItem("loggedData"))['image']){}else{this.uploadFile();}}
             
           if(JSON.parse(localStorage.getItem('serviceBooking1'))['audio']){this.uploadAudio(); }
           if(this.responseData.msg){
            this.bookingComplete(this.responseData.msg);
          }else{
            this.bookingComplete1();
          }
          }else{
           toast1.present();
          }
          this.navCtrl.setRoot(TabsPage);
        });
       }
      
           
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
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
  forgotPass(){
   
    let alert = this.alertCtrl.create({
      title: 'Forgot',
      subTitle: 'This mobile no is not registered. Please register to use our service',
      buttons: ['Ok']
    });
    // let toast = this.toastCtrl.create({
    //   message: 'OTP verify successfully',
    //   duration: 3000,
    //   position: 'bottom'
    // });
console.log(this.forgotData);
this.AuthServiceProvider.postData(this.forgotData,'forgotPass').then((result) => {
  console.log(result)
  this.responsedata=result;
  if(this.responsedata.status==true){
    
    //toast.present();
    this.otpverify=true;
    this.forgotMobile=false;
    this.loginscreen=false;
  }else{
    alert.present();
    this.otpverify=false;
    this.forgotMobile=true;
    this.loginscreen=false;
  }

});
  }
  
  jsonConcat(o1, o2) {
    for (var key in o2) {
      o1[key] = o2[key];
    }
    return o1;
  }
  login(){
    let toast = this.toastCtrl.create({
      message: 'Login successfully',
      duration: 3000,
      position: 'bottom'
    });
    let toast1 = this.toastCtrl.create({
      message: 'Invalid username & password',
      duration: 3000,
      position: 'bottom'
    });
    let loader = this.loadingCtrl.create({content: "Please wait.."});
    loader.present();
    console.log(this.loginData);
    if(localStorage.getItem('serviceBooking')){
      let service =JSON.parse(localStorage.getItem('serviceBooking'));
      console.log("bookingDetails",service);
      let serviceUser=this.jsonConcat(service, this.loginData);
      serviceUser['gadget']=localStorage.getItem('gadget');
      this.AuthServiceProvider.postData(serviceUser,'serLogin').then((result) => {
        this.responsedata=result;
        if(this.responsedata.status==true){
          loader.dismiss();
         
          localStorage.setItem('loggedData',JSON.stringify(this.responsedata.data)); 
          //toast.present();
          if(JSON.parse(localStorage.getItem('serviceBooking'))['image']){this.uploadFile();}
          if(JSON.parse(localStorage.getItem('serviceBooking'))['audio']){this.uploadAudio(); }
          console.log(this.responsedata)
          if(this.responsedata.msg){
            this.bookingComplete(this.responsedata.msg);
          }else{
            this.bookingComplete1();
          }
        }else{
          loader.dismiss();
          toast1.present(); 
        }
      
          } );
    }else if(localStorage.getItem('serviceBooking1')){
      let service =JSON.parse(localStorage.getItem('serviceBooking1'));
      let serviceUser=this.jsonConcat(service, this.loginData);
      serviceUser['gadget']=localStorage.getItem('gadget');
      // if(serviceUser['image']==""){serviceUser['image']="user_avatar.png";}
      this.AuthServiceProvider.postData(serviceUser,'ser1Login').then((result) => {
        this.responsedata=result;
        if(this.responsedata.status==true){
          loader.dismiss();
          localStorage.setItem('loggedData',JSON.stringify(this.responsedata.data)); 
          console.log(result);
          //toast.present();
          console.log("image:"+JSON.parse(localStorage.getItem('serviceBooking1')).image);
          console.log("audio:"+JSON.parse(localStorage.getItem('serviceBooking1')).audio);
          console.log("image:"+JSON.parse(localStorage.getItem('serviceBooking1'))['image']);
          console.log("audio:"+JSON.parse(localStorage.getItem('serviceBooking1'))['audio']);
          if(JSON.parse(localStorage.getItem('serviceBooking1'))['image']){ this.uploadFile();}
          if(JSON.parse(localStorage.getItem('serviceBooking1'))['audio']){this.uploadAudio();}
          if(this.responsedata.msg){
            this.bookingComplete(this.responsedata.msg);
          }else{
            this.bookingComplete1();
          }
        }else{
          loader.dismiss();
          toast1.present();
        }
      } );
    }else if(localStorage.getItem('serviceBooking')==""||localStorage.getItem('serviceBooking1')==""){
      this.AuthServiceProvider.postData(this.loginData,'Login').then((result) => {
        this.responsedata=result;
        if(this.responsedata.status==true){
          loader.dismiss();
          localStorage.setItem('loggedData',JSON.stringify(this.responsedata.data)); 
          console.log(result);
          toast.present();
          this.navCtrl.setRoot(TabsPage);
        }else{
          loader.dismiss();
          toast1.present();
        }
      
          } );
    }else{
      this.AuthServiceProvider.postData(this.loginData,'Login').then((result) => {
        this.responsedata=result;
        if(this.responsedata.status==true){
          loader.dismiss();
          localStorage.setItem('loggedData',JSON.stringify(this.responsedata.data)); 
          console.log(result);
          toast.present();
          this.navCtrl.setRoot(TabsPage);
        }else{
          loader.dismiss();
          toast1.present();
        }
      
          } );
    }
  }
  bookingComplete1(){
    let alert = this.alertCtrl.create({
      title: 'Service Booking',
      message: 'Service booking submitted successfully! within 24 hours you will get response from rytefix partner.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('Buy clicked');
            
              this.navCtrl.push(QuotehistoryPage);
            
            
          }
        }
      ]
    });
    alert.present();
} 
  bookingComplete(data){
    let alert = this.alertCtrl.create({
      title: 'Service Booking',
      message: 'Service booking submitted successfully! within 24 hours you will get response from rytefix partner.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('Buy clicked');
            if(data){
              this.promo(data);
            }else{
              this.navCtrl.push(QuotehistoryPage);
            }
            
          }
        }
      ]
    });
    alert.present();
} 
promo(data){
  let alert = this.alertCtrl.create({
    title: 'Promo Status',
    message: data,
    buttons: [
      {
        text: 'OK',
        handler: () => {
          console.log('Buy clicked');
          this.navCtrl.push(TabsPage);
        }
      }
    ]
  });
  alert.present();
} 
  reg(){
    this.navCtrl.setRoot(RegisterPage);
  }
  forgot(){
this.forgotMobile=true;
this.loginscreen=false;
this.otpverify=false;
  }
  otpVerify(){
    let toast = this.toastCtrl.create({
      message: 'OTP verified successfully',
      duration: 3000,
      position: 'bottom'
    });
    let toast1 = this.toastCtrl.create({
      message: 'Invalid OTP',
      duration: 3000,
      position: 'bottom'
    });
    console.log(this.otpData);
    if(localStorage.getItem("loggedData")){
      let logged=JSON.parse(localStorage.getItem("loggedData"));
     // let otpverify=this.jsonConcat(this.otpData, logged);
      logged[0]['otp']=this.otpData['otp'];
      console.log(logged);
      this.AuthServiceProvider.postData(logged[0],'otpVerify').then((result) => {
        this.responsedata=result;
        if(this.responsedata.status==true){
          toast.present();
          localStorage.setItem('loggedData',JSON.stringify(this.responsedata.data));
          this.navCtrl.setRoot(TabsPage);
        }else{
          toast1.present();
        }
        
       // this.makedropdown=result;
      //  console.log(this.makedropdown );
          } );
    }else{
      console.log(this.otpData['otp']);
//      delete this.responsedata.data['otp'];
  //    delete this.responsedata.data['otp'];
  console.log(this.responsedata);
      console.log(this.responsedata.data);
      this.responsedata.data[0]['otp']=this.otpData['otp'];
      let otpdata=this.responsedata.data;
      console.log(otpdata);
      //let otpverify=this.jsonConcat(this.otpData, this.responsedata.data);
      this.AuthServiceProvider.postData(otpdata[0],'otpVerify').then((result) => {4
        this.responsedata=result;
        if(this.responsedata.status==true){
          toast.present();
          localStorage.setItem('loggedData',JSON.stringify(otpdata));
          this.navCtrl.setRoot(ChangepassPage);
        }else{
          toast1.present();
        }
    });
  }
 
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
      //  loader.present();
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
      //    loader.dismiss();
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

