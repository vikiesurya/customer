import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { SelectSearchable } from 'ionic-select-searchable';
import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ServicestateProvider } from '../../providers/servicestate/servicestate';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
/**
 * Generated class for the ServicebookingPage page.
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
  selector: 'page-servicebooking',
  templateUrl: 'servicebooking.html',
})
export class ServicebookingPage {
  loading:any;
  deviceId: any;
  ports: Port[];
  port: Port;
  responseData: any;
  disable: any;
  userid: any;
  makedropdown: any;
  harddropdown: any;
  softdropdown: any;
  preferdropdown: any;
  other: any;
  searchBar: any;
  items: any;
  recording: boolean = false;
  filePath: string;
  fileName: string;
  Audio: MediaObject;
  audioList: any[] = [];
  imageURI: any;
  imageFileName: any;
  imgList: any;
  countStart: any;
  promoValid: any;
  invalid: any;
  usepromo: any;
  promouserValid: any;
  promovalue: any;
  pushData = { "deviceId": "", "message": "Thanks Your booking is received will be processed within 24 hours" };
  form = new FormGroup({
    pickup: new FormControl('', Validators.required),
    othermake: new FormControl(''),
    make: new FormControl('', Validators.required),
    modelno: new FormControl('', Validators.required),
    soft: new FormControl('', Validators.required),
    hard: new FormControl('', Validators.required),
    loc: new FormControl('', Validators.required),
    promocode: new FormControl(),
    others: new FormControl('', Validators.required)
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
  form1 = new FormGroup({
    pickup1: new FormControl('', Validators.required),
    make1: new FormControl('', Validators.required),
    modelno1: new FormControl('', Validators.required),
    describe: new FormControl('', Validators.required),
    loc1: new FormControl('', Validators.required),
    promocode1: new FormControl()
  });
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
  printer: any;
  mobile: any;
  beauty: any;
  locvaild: any;
  timecount: any;
  userData = { "make": "", "othermake": "", "modelno": "", "soft": "", "hard": "", "others": "", "pickup": "", "loc": "", "image": "", "audio": "", "promocode": "" };
  userdata1 = { "make1": "", "modelno1": "", "describe": "", "pickup1": "", "loc1": "", "image": "", "audio": "", "promocode1": "" };
  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public navParams: NavParams,
    public media: Media,
    public file: File,
    public loadingCtrl: LoadingController,
    public transfer: FileTransfer,
    private camera: Camera,
    private alertCtrl: AlertController,
    public AuthServiceProvider: AuthServiceProvider,
    public toastCtrl: ToastController,
    public serviceState: ServicestateProvider,
    public http: Http) {
      this.presentLoading();
    this.deviceId = localStorage.getItem('deviceID');
    this.pushData.deviceId = this.deviceId;
    // console.log('deviceId', this.pushData);
    // this.push(this.pushData);
    this.invalid = "";
    this.usepromo = "";
    this.locvaild = false;
    localStorage.setItem('serviceBooking', "");
    localStorage.setItem('serviceBooking1', "");
    localStorage.setItem("imageList", "");
    localStorage.setItem("audiolist", "");
    //   this.countStart=false;
    //  this.time();
    this.preferLocation();

    //this.userData.require = this.form.controls['name="check"'].value;
    if (localStorage.getItem('gadget') == "Mobile" || localStorage.getItem('gadget') == "Laptop" || localStorage.getItem('gadget') == "Tablet") {
      this.makeService();
      this.softService();
      this.hardService();
      //this.promovalid();

      this.mobile = true;
      this.printer = false;
      this.beauty = false;
    } else {
      // if(localStorage.getItem('gadget')=="Printer"){

      //   this.beauty = true;
      // }else{

      this.printer = true;
      // }

    }

    this.disable = true;
    this.other = false;
    this.searchBar = false;

  }
  portChange(event: { component: SelectSearchable, value: any }) {
    console.log('port:', event.value.length);
    console.log(event.value.length);
    if (event.value.length < 2) {
      this.disable = true;
      this.locvaild = true;
      this.userData.loc = "";
      this.userdata1.loc1 = "";
      alert("Select Minimum 2 and Maximum 3 areas");

    } else if (event.value.length > 3) {
      this.userData.loc = "";
      this.userdata1.loc1 = "";
      alert("Select Minimum 2 and Maximum 3 areas");
      this.disable = true;
      this.locvaild = true;
    } else {
      this.locvaild = false;
      this.disable = false;
    }
  }

  push(data) {
    console.log("pushData", data);
    this.http.post('http://rytefix.in/sunapi/push.php', data).subscribe((result) => {
      this.responseData = result;
      console.log(this.responseData);
    }, (err) => {
      console.log(err);
    });
  }
  // time(){
  //   if(this.countStart==true){
  //    var   seconds = 0, minutes = 0, hours = 0;
  //    seconds++;
  //    if (seconds >= 60) {
  //        seconds = 0;
  //        minutes++;
  //        if (minutes >= 60) {
  //            minutes = 0;
  //            hours++;
  //        }
  //    } 
  //   this.timecount =  (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
  // console.log(this.timecount);

  //   }else{
  //    this.stop();
  //   }
  //  }

  //  stop(){
  //    clearTimeout(setTimeout(this.time(), 1000));
  //  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicebookingPage');
    // this.promovalid();
  }
  makeService() {
    console.log(localStorage.getItem('gadget'));

    let gadget = localStorage.getItem('gadget');
    this.AuthServiceProvider.postData(gadget, 'makeService').then((result) => {
      this.makedropdown = result;
      console.log(this.makedropdown);
    });
  }
  promocodeuservalid(data1) {
    console.log(data1);

    if (localStorage.getItem("loggedData")) {
      let logged = JSON.parse(localStorage.getItem("loggedData"));
      // let otpverify=this.jsonConcat(this.otpData, logged);
      logged[0]['promo'] = data1;
      console.log(logged);
      this.AuthServiceProvider.postData(logged[0], 'promouserValid').then((result) => {
        this.promouserValid = result;
        console.log(this.promoValid);
        if (this.promouserValid.status == true) {
          this.userData.promocode = "";
          this.userdata1.promocode1 = "";
          this.usepromo = true;
        } else {
          this.usepromo = "";

        }
      });
    }
  }
  promocodevalid(data1) {
    console.log(data1);
    this.AuthServiceProvider.postData(data1, 'promoValid').then((result) => {
      this.promoValid = result;
      console.log(this.promoValid);
      if (this.promoValid.status == true) {
        this.invalid = "";
        if (localStorage.getItem("loggedData")) {
          this.usepromo = "";

          this.promocodeuservalid(data1);

        }
        console.log(data1);
      } else {
        this.usepromo = "";
        this.invalid = true;
        this.userData.promocode = "";
        this.userdata1.promocode1 = "";

      }
    });


  }

  // promovalid(){

  //   this.AuthServiceProvider.getData('promoValid').then((result) => {
  //     this.promoValid=result;
  //     console.log(this.promoValid );
  //       } );
  // }
  softService() {

    let gadget = localStorage.getItem('gadget');
    this.AuthServiceProvider.postData(gadget, 'softService').then((result) => {

      this.softdropdown = result;
      console.log(this.softdropdown);
    });
  }
  hardService() {
    let gadget = localStorage.getItem('gadget');
    this.AuthServiceProvider.postData(gadget, 'hardService').then((result) => {

      this.harddropdown = result;
      console.log(this.harddropdown);
    });
  }
  preferLocation() {
    this.AuthServiceProvider.getData('preferLocation').then((result) => {
      this.preferdropdown = result;
      this.loading.dismiss();
      console.log(this.preferdropdown);
      var data = new Array;
      for (var i = 0; i < this.preferdropdown.length; i++) {
        var obj = this.preferdropdown[i];
        data.push(obj.area);

      }
      console.log(data);
      this.ports = data;
    });
  }
  jsonConcat(o1, o2) {
    for (var key in o2) {
      o1[key] = o2[key];
    }
    return o1;
  }
  serviceReq() {
    console.log(this.userData.loc);
    var prodata = "";
    var make = "";
    this.userData['deviceId'] = localStorage.getItem('deviceId');
    // let serviceUser=this.jsonConcat(device, this.userData);
    console.log("test:" + this.userData.othermake);

    if (this.userData.soft || this.userData.hard || this.userData.others) {
      var prodata = "data";
    }
    if (this.userData.make == "others") {
      var make = this.userData.othermake
    } else {
      make = this.userData.make;
    }
    console.log(this.userData);
    console.log(prodata);
    if (make && this.userData.modelno && prodata && this.userData.pickup && this.userData.loc) {
      if (this.userData.make == "others") {
        this.userData['make'] = this.userData.othermake;
      }
      console.log("promo:" + this.userData.promocode);
      if (this.userData.promocode) {
        // var promovalue=this.promocodevalid(this.userdata1.promocode1);
        this.AuthServiceProvider.promocodevalid(this.userData.promocode).then(data => {
          this.promovalue = data;
          console.log(this.promovalue);
          if (this.promovalue.status == true) {
            this.invalid = "";
            if (localStorage.getItem("loggedData")) {
              this.usepromo = "";
              let logged = JSON.parse(localStorage.getItem("loggedData"));
              logged[0]['promo'] = this.userData.promocode;
              console.log(logged);
              // localStorage.setItem('promodata', JSON.stringify(logged[0]))
              this.AuthServiceProvider.postData(logged[0], 'promouserValid').then((result) => {
                this.responseData = result;
                console.log(this.responseData);
                if (this.responseData.status == true) {
                  this.userData.promocode = "";
                  this.userdata1.promocode1 = "";
                  this.usepromo = true;
                } else {
                  this.usepromo = "";
                  localStorage.setItem('serviceBooking', JSON.stringify(this.userData));
                  this.bookingConform();
                }

              });

            } else {
              this.usepromo = "";
              localStorage.setItem('serviceBooking', JSON.stringify(this.userData));
              this.bookingConform();
            }

          } else {
            this.usepromo = "";
            this.invalid = true;
            this.userData.promocode = "";
            this.userdata1.promocode1 = "";

          }
        })



      } else {
        localStorage.setItem('serviceBooking', JSON.stringify(this.userData));
        this.bookingConform();
      }


    } else {
      alert(" All fields are required mandatory except picture,audio and promocode");
    }
  }
  serviceReq1() {
    console.log(this.userdata1.loc1);

    this.userdata1['deviceId'] = localStorage.getItem('deviceId');
    // let serviceUser=this.jsonConcat(device, this.userData);

    console.log(this.userdata1);
    // if (this.userdata1.pickup1 && this.userdata1.loc1) {
    if (this.userdata1.make1 && this.userdata1.modelno1 && this.userdata1.describe && this.userdata1.pickup1 && this.userdata1.loc1) {
      if (this.userdata1.promocode1) {
        // var promovalue=this.promocodevalid(this.userdata1.promocode1);
        this.AuthServiceProvider.promocodevalid(this.userdata1.promocode1).then((data) => {
          this.promovalue = data;
          console.log(this.promovalue);
          if (this.promovalue.status == true) {
            this.invalid = "";
            if (localStorage.getItem("loggedData")) {
              this.usepromo = "";
              let logged = JSON.parse(localStorage.getItem("loggedData"));
              logged[0]['promo'] = this.userdata1.promocode1;
              console.log(logged);
              // localStorage.setItem('promodata', JSON.stringify(logged[0]))
              this.AuthServiceProvider.postData(logged[0], 'promouserValid').then((result) => {
                this.responseData = result;
                console.log(this.responseData);
                if (this.responseData.status == true) {
                  this.userData.promocode = "";
                  this.userdata1.promocode1 = "";
                  this.usepromo = true;
                } else {
                  this.usepromo = "";
                  localStorage.setItem('serviceBooking1', JSON.stringify(this.userdata1));
                  this.bookingConform();
                }

              });

            } else {
              this.usepromo = "";
              console.log(this.userdata1);
              localStorage.setItem('serviceBooking1', JSON.stringify(this.userdata1));
              this.bookingConform();
            }

          } else {
            this.usepromo = "";
            this.invalid = true;
            this.userData.promocode = "";
            this.userdata1.promocode1 = "";

          }
        })
      } else {
        localStorage.setItem('serviceBooking1', JSON.stringify(this.userdata1));
        this.bookingConform();
      }

    } else {
      alert(" All fields are mandatory except picture,audio and promocode");
    }
  }
  bookingConform() {

    // alert("test");
    if (localStorage.getItem("loggedData")) {
      this.navCtrl.push(LoginPage);
    } else {
      let alert = this.alertCtrl.create({
        //title: 'Service Booking',
        message: 'Please Login or Register to submit your service booking',
        buttons: [
          // {
          //   text: 'Cancel',
          //   role: 'cancel',
          //   handler: () => {
          //     console.log('Cancel clicked');
          //   }
          // },
          {
            text: 'OK',
            handler: () => {

              console.log('Buy clicked');
              this.navCtrl.push(LoginPage);
            }
          }
        ]
      });
      alert.present();
    }
  }
  servicemake(data) {

    if (data == "others") {
      console.log("other");
      this.other = true;
    }
  }
  serviceLoc(data) {
    console.log(data.length);
    if (data.length < 2) {
      alert("select Minimum 2 service provider areas ");
    } else if (data.length >= 2) {
      alert(" select");
      this.disable = false;
    }
  }


  preferLoc() {
    console.log("prefer");
    this.searchBar = true;
  }

  //Audio function Start
  ionViewWillEnter() {
    this.getAudioList();
  }
  getAudioList() {
    if (localStorage.getItem("audiolist")) {
      this.audioList = JSON.parse(localStorage.getItem("audiolist"));
      console.log(this.audioList);
    }
  }
  audioDelete() {
    let alerts = this.alertCtrl.create({
      message: 'Are you sure to delete',
      buttons: [
        {
          text: 'Yes',
          handler: data => {
            console.log("image removed");
            //return true;
            localStorage.setItem("audiolist", "");
            this.userData['audio'] = "";
            this.userdata1['audio'] = "";

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
    // localStorage.setItem("audiolist", "");
    // this.userData['audio']="";
    //   this.userdata1['audio']="";
  }

  startRecord() {

    if (this.platform.is('ios')) {
      this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.mp3';
      this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
      this.Audio = this.media.create(this.filePath);
    } else if (this.platform.is('android')) {
      this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.mp3';
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
    this.userData['audio'] = this.fileName;
    this.userdata1['audio'] = this.fileName;
    let data = { filename: this.fileName, filePath: this.filePath };
    this.audioList.push(data);
    localStorage.setItem("audiolist", JSON.stringify(this.audioList));
    this.recording = false;
    this.getAudioList();
  }

  playAudio(file, idx) {
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

  // uploadAudio(){
  //   const fileTransfer: FileTransferObject = this.transfer.create();
  //   let options = {
  //     fileKey: "file",
  //   fileName: this.fileName,
  //   chunkedMode: false,
  //   mimeType: "multipart/form-data",
  //   params : {'fileName': this.fileName}
  //  };

  //  console.log('filepath',this.filePath);
  //  console.log('filename',this.fileName);
  //  console.log("userid",this.userid);
  // //  fileTransfer.upload('<file path>', '<api endpoint>', options)
  //  fileTransfer.upload(this.filePath,'http://sunrisetechs.com/images/audio.php',options)
  //  .then((data) => {
  //    console.log(data);
  //  }, (err) => {
  //    // error
  //    console.log(err);
  //    alert('error');
  //  })

  // }

  //Image function

  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
      this.imageFileName = 'image' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.jpg';
      this.userData['image'] = this.imageFileName;

      console.log(this.imageFileName);
      this.userdata1['image'] = this.imageFileName;
      let data = { imgfilename: this.imageFileName, imgfilePath: this.imageURI };
      // this.imgList.push(data);
      localStorage.setItem("imageList", JSON.stringify(data));
    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
  }
  imageDelete() {
    let alerts = this.alertCtrl.create({
      message: 'Are you sure to delete',
      buttons: [
        {
          text: 'Yes',
          handler: data => {
            console.log("image removed");
            //return true;
            localStorage.setItem("imageList", "");

            this.userData['image'] = "";
            this.userdata1['image'] = "";

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
    // localStorage.setItem("imageList", "");

    // this.userData['image'] ="";
    // this.userdata1['image']="";
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
  // uploadFile() {
  //   let loader = this.loadingCtrl.create({
  //     content: "Uploading..."
  //   });
  //   loader.present();
  //   const fileTransfer: FileTransferObject = this.transfer.create();


  //   console.log('image name',this.imageFileName);
  //   let options: FileUploadOptions = {
  //     fileKey: 'file',
  //     fileName: this.imageFileName,
  //     chunkedMode: false,
  //     mimeType: "image/jpeg",
  //     headers: {},
  //   params : {'fileName': this.imageFileName}

  //   }

  //   fileTransfer.upload(this.imageURI, 'http://sunrisetechs.com/images/image.php', options)
  //     .then((data) => {
  //     console.log(data+" Uploaded Successfully");
  //     loader.dismiss();
  //     this.presentToast("Image uploaded successfully");
  //   }, (err) => {
  //     console.log(err);
  //     loader.dismiss();
  //     this.presentToast(err);
  //   });
  // }

  promocode() {
    let cid;
    let bid;
    let promocode;
    this.serviceState.promocode(cid, bid, promocode).subscribe(data => {

    }), error => {
      console.log(error);
    }
  }
  promochange(data) {
    console.log(data);
  }

  presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.loading.present();
  }

}
