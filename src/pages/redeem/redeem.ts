import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,LoadingController,ToastController} from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { TabsPage } from '../tabs/tabs';
import {ServicestateProvider} from '../../providers/servicestate/servicestate';
/**
 * Generated class for the RedeemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-redeem',
  templateUrl: 'redeem.html',
})
export class RedeemPage {
  data:any;
  imageURI:any;
  imageFileName:any;
  imgList:any;
  image:any = 'image';
  check1: boolean;
  check2: boolean;
  check3:boolean;

  constructor(public view: ViewController,public navCtrl:NavController, public serviceState:ServicestateProvider,public navParams: NavParams,public emailComposer: EmailComposer,public media: Media,public file: File,public loadingCtrl: LoadingController,public transfer: FileTransfer,private camera: Camera,public toastCtrl: ToastController) {
   this.data = this.navParams.get('data');
   console.log(this.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RedeemPage');
  }
  close(){
    this.view.dismiss();
  }

  redeem(){
    if( this.check1 == true && this.check2 == true && this.check3 == true){
      // if (this.image == ''){
      //   let msg = 'please attach your photo to redeem your balance'
      //   //  this.presentToast(msg);
      // }else{

        this.uploadFile();
        let email = {
          to: 'support@rytefix.com',
         // cc: 'admin@rytefix.com',
          bcc: [],
          subject: 'Customer '+this.data.username+' Redeem wallet balance',
          body: 'The amount requested to redeem by customer is '+this.data.redeemData.promo_credits,
          isHtml: true
        };
        
        // Send a text message using default options
        this.emailComposer.open(email);  
        this.updateRedeemStatus(this.data.redeemData.customer,this.data.redeemData.booking_id);
      // } 
    }
    else{
      let msg = 'please complete and rate the vendor to redeem your balance';
      this.presentToast(msg);
    }
    

  }
  updateRedeemStatus(cid,bid){
    this.serviceState.Redeem(cid,bid).subscribe(data =>{
      console.log(data);
      this.close();
      this.navCtrl.setRoot(TabsPage);

   }),error =>{
     console.log(error);
   }
  }

  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
  
    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
      this.imageFileName = 'CustomerImage'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.jpg';
       this.image = this.imageFileName;

      console.log(this.imageFileName);
      // this.userdata1['image']=this.imageFileName;
      let data = { imgfilename: this.imageFileName,imgfilePath:this.imageURI };
   // this.imgList.push(data);
    localStorage.setItem("imageList", JSON.stringify(data));
    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
  }
  imageDelete(){
     this.image ="image";
    // this.userdata1['image']="";
  }
  uploadFile() {
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();
  
   
    console.log('image name',this.imageFileName);
    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: this.imageFileName,
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {},
    params : {'fileName': this.imageFileName}
      
    }
  
    fileTransfer.upload(this.imageURI, 'http://rytefix.in/images/image.php', options)
      .then((data) => {
      console.log(data+" Uploaded Successfully");
      loader.dismiss();
      this.presentToast("Image uploaded successfully");
    }, (err) => {
      console.log(err);
      loader.dismiss();
      // this.presentToast(err);
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
  
    toast.present();
  }
}
