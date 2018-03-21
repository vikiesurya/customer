import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform,AlertController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SelectSearchable } from 'ionic-select-searchable';
import { QuotehistoryPage } from '../quotehistory/quotehistory';
/**
 * Generated class for the EditservicebookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
class Port {
  public id: number;
  public name: string;
}

@IonicPage()
@Component({
  selector: 'page-editservicebooking',
  templateUrl: 'editservicebooking.html',
})
export class EditservicebookingPage {
  ports: Port[];
    port: Port;
  responseData : any;
  disable:any;
  userid:any;
  makedropdown:any;
  harddropdown:any;
  softdropdown:any;
  preferdropdown:any;
  other:any;
  searchBar:any;
  items:any;
  booking_id:any;
  gadget:any;
  mobile:any;
  printer:any;
  bookingData:any;
  recording: boolean = false;
  filePath: string;
  fileName: string;
  Audio: MediaObject;
  audioList: any[] = [];
  imageURI:any;
  imageFileName:any;
  imgList:any;
  userData = {"make":"","othermake":"","modelno":"","soft":"","hard": "","others": "","pickup":"","loc":"","image":"","audio":"","bookingid":""};
  userdata1 = {"make1":"","modelno1":"","describe":"","pickup1":"","loc1":"","image":"","audio":"","bookingid":""};

  form = new FormGroup({
    pickup: new FormControl('',Validators.required),
    make: new FormControl('', Validators.required),
    othermake:new FormControl(''),
    modelno: new FormControl('', Validators.required),
    soft: new FormControl('', Validators.required),
    hard: new FormControl('', Validators.required),
    loc: new FormControl('', Validators.required),
    promocode: new FormControl(),
    others: new FormControl('', Validators.required)
     });

     form1 = new FormGroup({
      pickup1: new FormControl('',Validators.required),
      make1: new FormControl('', Validators.required),
      modelno1: new FormControl('', Validators.required),
      describe: new FormControl('', Validators.required),
      loc1: new FormControl('', Validators.required),
      promocode1: new FormControl()
       });

       get make() {
        return this.form.get('make');
      }
      get modelno() {
        return this.form.get('modelno');
      }
      get soft() {
        return this.form.get('soft');
      }
      get hard() {
        return this.form.get('hard');
      }
      get others() {
        return this.form.get('others');
      }

      get make1() {
        return this.form1.get('make1');
      }
      get modelno1() {
        return this.form1.get('modelno1');
      }
      get describe() {
        return this.form1.get('describe');
      }
    
      get loc1() {
        return this.form1.get('loc1');
      }
      val:any;
      locvaild:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public AuthServiceProvider:AuthServiceProvider,public media: Media,
    public file: File,
    public loadingCtrl: LoadingController,
    public transfer: FileTransfer,
    private camera: Camera,
    public platform: Platform,
    private alertCtrl: AlertController,
    public toastCtrl: ToastController,) {

    let data = navParams.get('item');
    this.booking_id = data.booking_id;
    this.gadget = data.gadget;

    this.preferLocation();
    if(this.gadget =="Mobile"||this.gadget =="Laptop"||this.gadget =="Tablet"){
      console.log('gadget',this.gadget);
      this.makeService();
      this.softService();
      this.hardService();
     this.getBookedService();
      this.mobile=true;
      this.printer=false;
    }else{
      this.getBookedService1();
      this.printer=true;
    }
    this.disable=true;
    this.other=false;
    this.searchBar=false;
    
  }
 
  portChange(event: { component: SelectSearchable, value: any }) {
    console.log('port:', event.value.length);
    console.log(event.value.length);
    if(event.value.length < 2){ 
      this.disable=true;
      this.locvaild=true;
      alert("Select Minimum 2 service provider ");
    }else if(event.value.length >3){
      alert("Select Maximum 3 service provider ");
      this.disable=true;
      this.locvaild=true;
    }else{
      this.locvaild=false;
      this.disable=false;
    }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditservicebookingPage');
  }
// get booking data to edit
  getBookedService(){

    this.AuthServiceProvider.postData(this.booking_id,'editData').then((result) => {
      this.bookingData=result;
      console.log('booking data:'+this.bookingData[0] );
      this.userData.soft = this.bookingData[0].software;
      console.log(this.bookingData[0].make);
      if(isNaN(this.bookingData[0].make)){
        console.log("num");
        
        this.userData.make = "others";
        this.userData.othermake= this.bookingData[0].make;
        this.other=true;
      }else{
        console.log("text");
        this.userData.make = this.bookingData[0].make;
      }
      
      this.userData.modelno = this.bookingData[0].model;
      this.userData.hard = this.bookingData[0].hardware;
      this.userData.others = this.bookingData[0].others;
      this.userData.bookingid = this.booking_id;
      this.userData.image = this.bookingData[0].image;
      this.userData.audio = this.bookingData[0].audio;
      if(this.bookingData[0].pickup_type == 'yes'){
        this.userData.pickup = 'required';
      }else{
        this.userData.pickup = 'notrequired';
      }
        } );

        console.log('userdata' ,this.userData);
        console.log('userdata1' ,this.userdata1);
  }
  getBookedService1(){

    this.AuthServiceProvider.postData(this.booking_id,'editData').then((result) => {
      this.bookingData=result;
      console.log('booking data',this.bookingData[0] );
      this.userdata1.make1 = this.bookingData[0].make;
      this.userdata1.modelno1 = this.bookingData[0].model;
      this.userdata1.describe = this.bookingData[0].description;
      this.userdata1.image = this.bookingData[0].image;
      this.userdata1.audio = this.bookingData[0].audio;
      this.userdata1.bookingid = this.booking_id;
      if(this.bookingData[0].pickup_type == 'yes'){
        this.userdata1.pickup1 = 'required';
      }else{
        this.userdata1.pickup1 = 'notrequired';
      }
      
        } );

        console.log('userdata' ,this.userData);
        console.log('userdata1' ,this.userdata1);
  }

  serviceReq() {   
    console.log(this.userData.loc);
    console.log(this.userData);
    if(this.userData.soft || this.userData.hard ||this.userData.others){
      var prodata="data";
      }
      if(this.userData.soft || this.userData.hard ||this.userData.others){
        var prodata="data";
        }
      if(this.userData.make=="others"){
        var make=this.userData.othermake
      }else{
      make=this.userData.make ;
      }
      if(this.userData.make=="others"){
        this.userData['make']=this.userData.othermake;
        }
    if (make && this.userData.modelno && prodata && this.userData.pickup && this.userData.loc) {
       
      this.AuthServiceProvider.postData(this.userData,'updateBooking').then((result) => {
        this.responseData=result;
        console.log('booking data',this.bookingData );
        console.log(this.userData.image);
        console.log(this.userData.audio);
        console.log(this.bookingData[0].image);
        console.log(this.bookingData[0].audio);
            if(this.responseData.status== true){
              if(this.userData.image!=this.bookingData[0].image){
                console.log("image");
                this.uploadFile();
              }
              if(this.userData.audio!=this.bookingData[0].audio){
                console.log("audio");
                this.uploadAudio();
              }
              
              this.navCtrl.setRoot(QuotehistoryPage);
            }else{
              let toast = this.toastCtrl.create({
                message: 'error on updating data',
                duration: 3000,
                position: 'bottom'
              });
              toast.present();
            }
          } );
      }else{
        alert("All fields required");
      }
   }

   serviceReq1() {   
    console.log(this.userdata1.loc1);
 
    console.log(this.userdata1);
    if (this.userdata1.make1 && this.userdata1.modelno1 && this.userdata1.describe  || this.userdata1.pickup1 && this.userdata1.loc1) {
    //  this.navCtrl.setRoot(LoginPage);
    this.AuthServiceProvider.postData(this.userdata1,'update1Booking').then((result) => {
      this.responseData=result;
      console.log('booking data',this.bookingData );
      if(this.responseData.status== true){
        if(this.userdata1.image!=this.bookingData[0].image){
          this.uploadFile();
        }
        if(this.userdata1.audio != this.bookingData[0].audio){
          this.uploadAudio();
          
        }
        this.navCtrl.setRoot(QuotehistoryPage);
      }else{
        let toast = this.toastCtrl.create({
          message: 'error on updating data',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      }
        } );
      }else{
        alert("All fields required");
      }
   }

  makeService(){
    let gadget= this.gadget;
    console.log(gadget);
    this.AuthServiceProvider.postData(gadget,'makeService').then((result) => {
      this.makedropdown=result;
      console.log(this.makedropdown );
        } );
  }
  softService(){

    let gadget=this.gadget;
    this.AuthServiceProvider.postData(gadget,'softService').then((result) => {
   
            this.softdropdown = result;
            console.log( this.softdropdown);
      } );
  }
  hardService(){
    let gadget=this.gadget;
    this.AuthServiceProvider.postData(gadget,'hardService').then((result) => {
    
      this.harddropdown = result;
      console.log(this.harddropdown );
      } );
  }
  preferLocation(){
    this.AuthServiceProvider.getData('preferLocation').then((result) => {
      this.preferdropdown=result;
      console.log(this.preferdropdown );
       var data = new Array;
      for (var i = 0; i < this.preferdropdown.length; i++) {
        var obj = this.preferdropdown[i];
        data.push(obj.area);

      }    
      console.log(data);
      this.ports=data;
        } );
  }
  serviceLoc(data){
    console.log(data.length);
    if(data.length < 2){ 
      alert("Select Minimum 2 service provider areas ");
    }else if(data.length >=2){
      alert(" select");
      this.disable=false;
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
      this.imageFileName = 'image'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.jpg';
      this.userData['image'] = this.imageFileName;

      console.log(this.imageFileName);
      this.userdata1['image']=this.imageFileName;
      let data = { imgfilename: this.imageFileName,imgfilePath:this.imageURI };
   // this.imgList.push(data);
    localStorage.setItem("imageList", JSON.stringify(data));
    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
  }
  imageDelete(){
    let alerts = this.alertCtrl.create({
      message: 'Are you sure to delete',
      buttons: [
        {
          text: 'Yes',
          handler: data => {
            console.log("image removed");
            //return true;
             localStorage.setItem("imageList", "");
   
             this.userData['image'] ="";
             this.userdata1['image']="";
           
          }
        },
        {
          text: 'No',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
            return true;
          }
        }
     
      ]
      
    });
    alerts.present();
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
  preferLoc(){
    console.log("prefer");
    this.searchBar=true;
  }
  
  //Audio function Start
  ionViewWillEnter() {
    this.getAudioList();
  }
  getAudioList() {
    if(localStorage.getItem("audiolist")) {
      this.audioList = JSON.parse(localStorage.getItem("audiolist"));
      console.log(this.audioList);
    }
  }
audioDelete(){
  let alerts = this.alertCtrl.create({
    message: 'Are you sure to delete',
    buttons: [
      {
        text: 'Yes',
        handler: data => {
          console.log("image removed");
          //return true;
          localStorage.setItem("audiolist", "");
          this.userData['audio']="";
            this.userdata1['audio']="";
         
        }
      },
      {
        text: 'No',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
          return true;
        }
      }
    
    ]
    
  });
  alerts.present();
}

  startRecord() {
    
    if (this.platform.is('ios')) {
      this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.3gp';
      this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
      this.Audio = this.media.create(this.filePath);
    } else if (this.platform.is('android')) {
      this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.3gp';
      this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
      this.Audio = this.media.create(this.filePath);
      
    }
    this.Audio.startRecord();
    this.recording = true;
    // this.countStart=true;
    // this.time();
  }

  stopRecord() {
   
    this.Audio.stopRecord();
    // this.countStart=false;
    // this.stop();
    this.userData['audio']=this.fileName;
    this.userdata1['audio']=this.fileName;
    let data = { filename: this.fileName,filePath:this.filePath };
    this.audioList.push(data);
    localStorage.setItem("audiolist", JSON.stringify(this.audioList));
    this.recording = false;
     this.getAudioList();
  }

  playAudio(file,idx) {
    if (this.platform.is('ios')) {
      this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + file;
      this.Audio = this.media.create(this.filePath);
    } else if (this.platform.is('android')) {
      this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + file;
      this.Audio = this.media.create(this.filePath);
    }
    this.Audio.play();
    this.Audio.setVolume(0.8);
  }

   uploadFile() {

      // let loader = this.loadingCtrl.create({
      //   content: "Uploading..."
      // });
      // loader.present();
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
        // loader.dismiss();
        this.presentToast("Image uploaded successfully");
        this.imageDelete();
      }, (err) => {
        console.log(err);
        // loader.dismiss();
        this.presentToast(err);
      });
    
  }


  uploadAudio(){
    const fileTransfer: FileTransferObject = this.transfer.create();
    let options = {
      fileKey: "file",
    fileName: this.fileName,
    chunkedMode: false,
    mimeType: "multipart/form-data",
    params : {'fileName': this.fileName}
   };
   
   console.log('filepath',this.filePath);
   console.log('filename',this.fileName);
   console.log("userid",this.userid);
  //  fileTransfer.upload('<file path>', '<api endpoint>', options)
   fileTransfer.upload(this.filePath,'http://rytefix.in/images/audio.php',options)
   .then((data) => {
     console.log(data);
     this.audioDelete();
   }, (err) => {
     // error
     console.log(err);
     alert('error');
   })

  }

}
