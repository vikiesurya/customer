import { Component } from '@angular/core';
import { IonicPage, NavController,ActionSheetController,Platform, NavParams,ToastController,LoadingController, AlertController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { LoginPage }from '../login/login';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var cordova: any;
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  fileopen = false;
  loading: any;
  responseData : any;
  lastImage: string = null;
  form = new FormGroup({
    username: new FormControl('', Validators.required),
   
    mobile: new FormControl('',Validators.required),
   
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

  get area() {
    return this.form.get('area');
  }
  get city() {
    return this.form.get('city');
  }
  get pincode() {
    return this.form.get('pincode');
  }
  responsedata:any;
  submitProfile:any;
  cancelProfile:any;
  editProfile:any;
  isDisable:any;
  userData = { "username": "", "mobile":"","mail": "","area":"","city":"","pincode":""};
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private transfer: FileTransfer,
    public AuthServiceProvider:AuthServiceProvider,
    private camera: Camera,     
    private file: File, 
    private filePath: FilePath, public platform: Platform,
     public actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController) {
      if(localStorage.getItem('loggedData')){
        this.ionViewDidLoad();
      }else{
        this.navCtrl.setRoot(LoginPage);
      }
      this.editProfile=true;
      this.submitProfile=false;
      this.cancelProfile=false;
      this.isDisable=true;
     
  }
  public chooseimg() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }
  public takePicture(sourceType) {
    // Create options for the Camera Dialog
    var options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };
   
    // Get the data of an image
    this.camera.getPicture(options).then((imagePath) => {
      // Special handling for Android library
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
            console.log(currentName);
            console.log(correctPath);
          });
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        console.log(currentName);
        console.log(correctPath);
      }
    }, (err) => {
      this.ImagepresentToast('Error while selecting image.');
    });
  }
  private createFileName() {
    var d = new Date(),
    n = d.getTime(),
    newFileName =  n + ".jpg";
    return newFileName;
  }
   
  // Copy the image to a local folder
  private copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      this.lastImage = newFileName;
    }, error => {
      this.presentToast('Error while storing file.');
    });
  }
   
  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
   
  // Always get the accurate path to your apps folder
  public pathForImage(img) {
    if(localStorage.getItem('loggedData')){
      if (img === null) {
        //return 'assets/imgs/user.jpg';
        var imgData = JSON.parse(localStorage.getItem('loggedData'));
        var image = "http://rytefix.in/images/imgs/" + imgData[0]['profile_pic'];
        return image;
      } else {
        this.fileopen = true;
        return cordova.file.dataDirectory + img;
      }
    }
 
  } 
  uploadImage() {
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
  //  loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();
  
   
    console.log('image name',this.lastImage);
    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: this.lastImage,
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {},
    params : {'fileName': this.lastImage}
      
    }
  
    fileTransfer.upload(this.pathForImage(this.lastImage), 'http://rytefix.in/images/image.php', options)
      .then((data) => {
      console.log(data+" Uploaded Successfully");
 alert("Image Uploaded Successfully");
 console.log(data);
      var result = data.responseCode;
      if(result == 200) {
        var userData = {} 
        userData = JSON.parse(localStorage.getItem('loggedData'));
        userData[0]['profile_pic'] = this.lastImage;
        console.log(userData);
        localStorage.setItem('loggedData',JSON.stringify(userData));
        this.AuthServiceProvider.postData(userData[0], 'userProfileimg').then((result) => {
          // loading.present();
          this.responseData = result;
          
          if(true == this.responseData.status){
            this.fileopen = false;
            this.ImagepresentToast('Image uploaded succesfully.');
            this.refresh();
          }
        }, (err) => {
          this.fileopen = false;
          this.ImagepresentToast('Image upload failed.');
        });
        // this.ImagepresentToast('Image succesful uploaded.');
        // this.fileopen = false;
      }
    }, (err) => {
      console.log(err);
      loader.dismiss();
      this.presentToast(err);
    });
  }
  // public uploadImage() {
  //   // Destination URL
  //   var url = "'http://sunrisetechs.com/images/image.php'";
   
  //   // File for Upload
  //   var targetPath = this.pathForImage(this.lastImage);
   
  //   // File name only
  //   var filename = this.lastImage;
  //   var options = {
  //     fileKey: "file",
  //     fileName: filename,
  //     chunkedMode: false,
  //     mimeType: "multipart/form-data",
  //     params : {'fileName': filename}
  //   };
   
  //   const fileTransfer: FileTransferObject = this.transfer.create();
   
  //   this.loading = this.loadingCtrl.create({
  //     content: 'Uploading...',
  //   });
  //   this.loading.present();
   
  //   // Use the FileTransfer to upload the image
  //   fileTransfer.upload(targetPath, url, options).then((data) => {
  //     this.loading.dismissAll();
  //     console.log(data);
  //     var result = data.response;
  //     if(result == 'true') {
  //       var userData = {} 
  //       userData = JSON.parse(localStorage.getItem('loggedData'));
  //       userData[0]['profile_pic'] = this.lastImage;
  //       console.log(userData);
  //       localStorage.setItem('loggedData',JSON.stringify(userData));
  //       this.AuthServiceProvider.postData(userData[0], 'userProfileimg').then((result) => {
  //         // loading.present();
  //         this.responseData = result;
  //         var user_detail=this.responseData;
  //         if(true == this.responseData.status){
  //           this.fileopen = false;
  //           this.ImagepresentToast('Image succesful uploaded.');
  //           this.refresh();
  //         }
  //       }, (err) => {
  //         this.fileopen = false;
  //         this.ImagepresentToast('Image upload failed.');
  //       });
  //       // this.ImagepresentToast('Image succesful uploaded.');
  //       // this.fileopen = false;
  //     }
  //   }, err => {
  //     this.loading.dismissAll()
  //     this.fileopen = false;
  //     this.ImagepresentToast('Error while uploading file.');
  //   });
  // }
  /*##User image upload function end##*/
  refresh() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
    console.log('page refreshed');
  }
  profileactive(){
    this.isDisable=false;
    this.editProfile=false;
    this.submitProfile=true;
    this.cancelProfile=true;
  }
  profilecancel(){
    this.isDisable=true;
    this.editProfile=true;
    this.submitProfile=false;
    this.cancelProfile=false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  this.getuser();
  }
  getuser(){
    if(localStorage.getItem('loggedData')){
    var userdata= JSON.parse(localStorage.getItem('loggedData'));
   // console.log(userdata['id']);
    this.AuthServiceProvider.postData(userdata[0],'getUserdata').then((result) => {
        this.responsedata=result;
        if(this.responsedata.status==true){
          let user_detail=this.responsedata.data[0];
          this.userData=user_detail;
          this.userData.mail=this.userData['email'];
        }
    });
  }
  }
  // public pathForImage(img) {
  //   if (img === null) {
  //     //return 'assets/imgs/user.jpg';
  //     var imgData = JSON.parse(localStorage.getItem('userData'));
  //     var image = "http://rayi.in/naboapi/uploads/" + imgData['profile_pic'];
  //     return image;
  //   } else {
  //     this.fileopen = true;
  //     return cordova.file.dataDirectory + img;
  //   }
  // }
  profileUpdate(){
    let loader = this.loadingCtrl.create({content: "Please wait.."});
    loader.present();
    let toast = this.toastCtrl.create({
      message: 'Profile updated successfully',
      duration: 3000,
      position: 'bottom'
    });
      var userdata= JSON.parse(localStorage.getItem('loggedData'));
      this.userData['id']=userdata[0]['id'];
  
      console.log(this.userData);
      this.AuthServiceProvider.postData(this.userData,'profileUpdate').then((result) => {
          this.responsedata=result;
          if(this.responsedata.status==true){
            loader.dismiss();
            let user_detail=this.responsedata.data[0];
            this.userData=user_detail;
            this.userData.mail=this.userData['email'];
            toast.present();
            this.refresh();
          }
      });
   
  }
  // public uploadImage() {
  //   // Destination URL
  //   var url = "http://rayi.in/naboapi/profileImageupload";
   
  //   // File for Upload
  //   var targetPath = this.pathForImage(this.lastImage);
   
  //   // File name only
  //   var filename = this.lastImage;
  //   var options = {
  //     fileKey: "file",
  //     fileName: filename,
  //     chunkedMode: false,
  //     mimeType: "multipart/form-data",
  //     params : {'fileName': filename}
  //   };
   
  //   const fileTransfer: FileTransferObject = this.transfer.create();
   
  //   this.loading = this.loadingCtrl.create({
  //     content: 'Uploading...',
  //   });
  //   this.loading.present();
   
  //   // Use the FileTransfer to upload the image
  //   fileTransfer.upload(targetPath, url, options).then((data) => {
  //     this.loading.dismissAll();
  //     console.log(data);
  //     var result = data.response;
  //     if(result == 'true') {
  //       var userData = {} 
  //       userData = JSON.parse(localStorage.getItem('userData'));
  //       userData['photo'] = this.lastImage;
  //       localStorage.setItem('userData',JSON.stringify(userData));
  //       this.AuthServiceProvider.postData(userData, 'updateUserImagename').then((result) => {
  //         // loading.present();
  //         this.responseData = result;
  //         var user_detail=this.responseData;
  //         if(true == this.responseData.status){
  //           this.fileopen = false;
  //           this.ImagepresentToast('Image succesful uploaded.');
  //           this.refresh();
  //         }
  //       }, (err) => {
  //         this.fileopen = false;
  //         this.ImagepresentToast('Image upload failed.');
  //       });
  //       // this.ImagepresentToast('Image succesful uploaded.');
  //       // this.fileopen = false;
  //     }
  //   }, err => {
  //     this.loading.dismissAll()
  //     this.fileopen = false;
  //     this.ImagepresentToast('Error while uploading file.');
  //   });
  // }
  ImagepresentToast(msg) {
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
  // refresh() {
  //   this.navCtrl.setRoot(this.navCtrl.getActive().component);
  //   console.log('page refreshed');
  // }
  

}
