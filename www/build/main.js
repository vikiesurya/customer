webpackJsonp([20],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AddDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AddDataProvider = (function () {
    function AddDataProvider(http) {
        this.http = http;
        console.log('Hello AddDataProvider Provider');
    }
    AddDataProvider.prototype.getFaq = function () {
        return this.http.get('http://rytefix.in/apitest/cusapi.php?action=customerFAQ')
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    AddDataProvider.prototype.getIntroslide = function () {
        return this.http.get('http://rytefix.in/apitest/cusapi.php?action=introSlide')
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    AddDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], AddDataProvider);
    return AddDataProvider;
}());

//# sourceMappingURL=add-data.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicebookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_media__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_servicestate_servicestate__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the ServicebookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Port = (function () {
    function Port() {
    }
    return Port;
}());
var ServicebookingPage = (function () {
    function ServicebookingPage(navCtrl, platform, navParams, media, file, loadingCtrl, transfer, camera, alertCtrl, AuthServiceProvider, toastCtrl, serviceState, http) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.media = media;
        this.file = file;
        this.loadingCtrl = loadingCtrl;
        this.transfer = transfer;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.AuthServiceProvider = AuthServiceProvider;
        this.toastCtrl = toastCtrl;
        this.serviceState = serviceState;
        this.http = http;
        this.recording = false;
        this.audioList = [];
        this.pushData = { "deviceId": "", "message": "Thanks Your booking is received will be processed within 24 hours" };
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            pickup: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            othermake: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            make: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            modelno: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            soft: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            hard: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            loc: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            promocode: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            others: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required)
        });
        this.form1 = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            pickup1: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            make1: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            modelno1: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            describe: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            loc1: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            promocode1: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]()
        });
        this.userData = { "make": "", "othermake": "", "modelno": "", "soft": "", "hard": "", "others": "", "pickup": "", "loc": "", "image": "", "audio": "", "promocode": "" };
        this.userdata1 = { "make1": "", "modelno1": "", "describe": "", "pickup1": "", "loc1": "", "image": "", "audio": "", "promocode1": "" };
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
        }
        else {
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
    Object.defineProperty(ServicebookingPage.prototype, "make", {
        get: function () {
            return this.form.get('make');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServicebookingPage.prototype, "modelno", {
        get: function () {
            return this.form.get('modelno');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServicebookingPage.prototype, "soft", {
        get: function () {
            return this.form.get('soft');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServicebookingPage.prototype, "hard", {
        get: function () {
            return this.form.get('hard');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServicebookingPage.prototype, "others", {
        get: function () {
            return this.form.get('others');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServicebookingPage.prototype, "make1", {
        get: function () {
            return this.form1.get('make1');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServicebookingPage.prototype, "modelno1", {
        get: function () {
            return this.form1.get('modelno1');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServicebookingPage.prototype, "describe", {
        get: function () {
            return this.form1.get('describe');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServicebookingPage.prototype, "loc1", {
        get: function () {
            return this.form1.get('loc1');
        },
        enumerable: true,
        configurable: true
    });
    ServicebookingPage.prototype.portChange = function (event) {
        console.log('port:', event.value.length);
        console.log(event.value.length);
        if (event.value.length < 2) {
            this.disable = true;
            this.locvaild = true;
            this.userData.loc = "";
            this.userdata1.loc1 = "";
            alert("Select Minimum 2 and Maximum 3 areas");
        }
        else if (event.value.length > 3) {
            this.userData.loc = "";
            this.userdata1.loc1 = "";
            alert("Select Minimum 2 and Maximum 3 areas");
            this.disable = true;
            this.locvaild = true;
        }
        else {
            this.locvaild = false;
            this.disable = false;
        }
    };
    ServicebookingPage.prototype.push = function (data) {
        var _this = this;
        console.log("pushData", data);
        this.http.post('http://rytefix.in/sunapi/push.php', data).subscribe(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
        }, function (err) {
            console.log(err);
        });
    };
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
    ServicebookingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicebookingPage');
        // this.promovalid();
    };
    ServicebookingPage.prototype.makeService = function () {
        var _this = this;
        console.log(localStorage.getItem('gadget'));
        var gadget = localStorage.getItem('gadget');
        this.AuthServiceProvider.postData(gadget, 'makeService').then(function (result) {
            _this.makedropdown = result;
            console.log(_this.makedropdown);
        });
    };
    ServicebookingPage.prototype.promocodeuservalid = function (data1) {
        var _this = this;
        console.log(data1);
        if (localStorage.getItem("loggedData")) {
            var logged = JSON.parse(localStorage.getItem("loggedData"));
            // let otpverify=this.jsonConcat(this.otpData, logged);
            logged[0]['promo'] = data1;
            console.log(logged);
            this.AuthServiceProvider.postData(logged[0], 'promouserValid').then(function (result) {
                _this.promouserValid = result;
                console.log(_this.promoValid);
                if (_this.promouserValid.status == true) {
                    _this.userData.promocode = "";
                    _this.userdata1.promocode1 = "";
                    _this.usepromo = true;
                }
                else {
                    _this.usepromo = "";
                }
            });
        }
    };
    ServicebookingPage.prototype.promocodevalid = function (data1) {
        var _this = this;
        console.log(data1);
        this.AuthServiceProvider.postData(data1, 'promoValid').then(function (result) {
            _this.promoValid = result;
            console.log(_this.promoValid);
            if (_this.promoValid.status == true) {
                _this.invalid = "";
                if (localStorage.getItem("loggedData")) {
                    _this.usepromo = "";
                    _this.promocodeuservalid(data1);
                }
                console.log(data1);
            }
            else {
                _this.usepromo = "";
                _this.invalid = true;
                _this.userData.promocode = "";
                _this.userdata1.promocode1 = "";
            }
        });
    };
    // promovalid(){
    //   this.AuthServiceProvider.getData('promoValid').then((result) => {
    //     this.promoValid=result;
    //     console.log(this.promoValid );
    //       } );
    // }
    ServicebookingPage.prototype.softService = function () {
        var _this = this;
        var gadget = localStorage.getItem('gadget');
        this.AuthServiceProvider.postData(gadget, 'softService').then(function (result) {
            _this.softdropdown = result;
            console.log(_this.softdropdown);
        });
    };
    ServicebookingPage.prototype.hardService = function () {
        var _this = this;
        var gadget = localStorage.getItem('gadget');
        this.AuthServiceProvider.postData(gadget, 'hardService').then(function (result) {
            _this.harddropdown = result;
            console.log(_this.harddropdown);
        });
    };
    ServicebookingPage.prototype.preferLocation = function () {
        var _this = this;
        this.AuthServiceProvider.getData('preferLocation').then(function (result) {
            _this.preferdropdown = result;
            _this.loading.dismiss();
            console.log(_this.preferdropdown);
            var data = new Array;
            for (var i = 0; i < _this.preferdropdown.length; i++) {
                var obj = _this.preferdropdown[i];
                data.push(obj.area);
            }
            console.log(data);
            _this.ports = data;
        });
    };
    ServicebookingPage.prototype.jsonConcat = function (o1, o2) {
        for (var key in o2) {
            o1[key] = o2[key];
        }
        return o1;
    };
    ServicebookingPage.prototype.serviceReq = function () {
        var _this = this;
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
            var make = this.userData.othermake;
        }
        else {
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
                this.AuthServiceProvider.promocodevalid(this.userData.promocode).then(function (data) {
                    _this.promovalue = data;
                    console.log(_this.promovalue);
                    if (_this.promovalue.status == true) {
                        _this.invalid = "";
                        if (localStorage.getItem("loggedData")) {
                            _this.usepromo = "";
                            var logged = JSON.parse(localStorage.getItem("loggedData"));
                            logged[0]['promo'] = _this.userData.promocode;
                            console.log(logged);
                            // localStorage.setItem('promodata', JSON.stringify(logged[0]))
                            _this.AuthServiceProvider.postData(logged[0], 'promouserValid').then(function (result) {
                                _this.responseData = result;
                                console.log(_this.responseData);
                                if (_this.responseData.status == true) {
                                    _this.userData.promocode = "";
                                    _this.userdata1.promocode1 = "";
                                    _this.usepromo = true;
                                }
                                else {
                                    _this.usepromo = "";
                                    localStorage.setItem('serviceBooking', JSON.stringify(_this.userData));
                                    _this.bookingConform();
                                }
                            });
                        }
                        else {
                            _this.usepromo = "";
                            localStorage.setItem('serviceBooking', JSON.stringify(_this.userData));
                            _this.bookingConform();
                        }
                    }
                    else {
                        _this.usepromo = "";
                        _this.invalid = true;
                        _this.userData.promocode = "";
                        _this.userdata1.promocode1 = "";
                    }
                });
            }
            else {
                localStorage.setItem('serviceBooking', JSON.stringify(this.userData));
                this.bookingConform();
            }
        }
        else {
            alert(" All fields are required mandatory except picture,audio and promocode");
        }
    };
    ServicebookingPage.prototype.serviceReq1 = function () {
        var _this = this;
        console.log(this.userdata1.loc1);
        this.userdata1['deviceId'] = localStorage.getItem('deviceId');
        // let serviceUser=this.jsonConcat(device, this.userData);
        console.log(this.userdata1);
        // if (this.userdata1.pickup1 && this.userdata1.loc1) {
        if (this.userdata1.make1 && this.userdata1.modelno1 && this.userdata1.describe && this.userdata1.pickup1 && this.userdata1.loc1) {
            if (this.userdata1.promocode1) {
                // var promovalue=this.promocodevalid(this.userdata1.promocode1);
                this.AuthServiceProvider.promocodevalid(this.userdata1.promocode1).then(function (data) {
                    _this.promovalue = data;
                    console.log(_this.promovalue);
                    if (_this.promovalue.status == true) {
                        _this.invalid = "";
                        if (localStorage.getItem("loggedData")) {
                            _this.usepromo = "";
                            var logged = JSON.parse(localStorage.getItem("loggedData"));
                            logged[0]['promo'] = _this.userdata1.promocode1;
                            console.log(logged);
                            // localStorage.setItem('promodata', JSON.stringify(logged[0]))
                            _this.AuthServiceProvider.postData(logged[0], 'promouserValid').then(function (result) {
                                _this.responseData = result;
                                console.log(_this.responseData);
                                if (_this.responseData.status == true) {
                                    _this.userData.promocode = "";
                                    _this.userdata1.promocode1 = "";
                                    _this.usepromo = true;
                                }
                                else {
                                    _this.usepromo = "";
                                    localStorage.setItem('serviceBooking1', JSON.stringify(_this.userdata1));
                                    _this.bookingConform();
                                }
                            });
                        }
                        else {
                            _this.usepromo = "";
                            console.log(_this.userdata1);
                            localStorage.setItem('serviceBooking1', JSON.stringify(_this.userdata1));
                            _this.bookingConform();
                        }
                    }
                    else {
                        _this.usepromo = "";
                        _this.invalid = true;
                        _this.userData.promocode = "";
                        _this.userdata1.promocode1 = "";
                    }
                });
            }
            else {
                localStorage.setItem('serviceBooking1', JSON.stringify(this.userdata1));
                this.bookingConform();
            }
        }
        else {
            alert(" All fields are mandatory except picture,audio and promocode");
        }
    };
    ServicebookingPage.prototype.bookingConform = function () {
        var _this = this;
        // alert("test");
        if (localStorage.getItem("loggedData")) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        }
        else {
            var alert = this.alertCtrl.create({
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
                        handler: function () {
                            console.log('Buy clicked');
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                        }
                    }
                ]
            });
            alert.present();
        }
    };
    ServicebookingPage.prototype.servicemake = function (data) {
        if (data == "others") {
            console.log("other");
            this.other = true;
        }
    };
    ServicebookingPage.prototype.serviceLoc = function (data) {
        console.log(data.length);
        if (data.length < 2) {
            alert("select Minimum 2 service provider areas ");
        }
        else if (data.length >= 2) {
            alert(" select");
            this.disable = false;
        }
    };
    ServicebookingPage.prototype.preferLoc = function () {
        console.log("prefer");
        this.searchBar = true;
    };
    //Audio function Start
    ServicebookingPage.prototype.ionViewWillEnter = function () {
        this.getAudioList();
    };
    ServicebookingPage.prototype.getAudioList = function () {
        if (localStorage.getItem("audiolist")) {
            this.audioList = JSON.parse(localStorage.getItem("audiolist"));
            console.log(this.audioList);
        }
    };
    ServicebookingPage.prototype.audioDelete = function () {
        var _this = this;
        var alerts = this.alertCtrl.create({
            message: 'Are you sure to delete',
            buttons: [
                {
                    text: 'Yes',
                    handler: function (data) {
                        console.log("image removed");
                        //return true;
                        localStorage.setItem("audiolist", "");
                        _this.userData['audio'] = "";
                        _this.userdata1['audio'] = "";
                    }
                },
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function (data) {
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
    };
    ServicebookingPage.prototype.startRecord = function () {
        if (this.platform.is('ios')) {
            this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.mp3';
            this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
            this.Audio = this.media.create(this.filePath);
        }
        else if (this.platform.is('android')) {
            this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.mp3';
            this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
            this.Audio = this.media.create(this.filePath);
        }
        this.Audio.startRecord();
        this.recording = true;
        // this.countStart=true;
        // this.time();
    };
    ServicebookingPage.prototype.stopRecord = function () {
        this.Audio.stopRecord();
        // this.countStart=false;
        // this.stop();
        this.userData['audio'] = this.fileName;
        this.userdata1['audio'] = this.fileName;
        var data = { filename: this.fileName, filePath: this.filePath };
        this.audioList.push(data);
        localStorage.setItem("audiolist", JSON.stringify(this.audioList));
        this.recording = false;
        this.getAudioList();
    };
    ServicebookingPage.prototype.playAudio = function (file, idx) {
        if (this.platform.is('ios')) {
            this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + file;
            this.Audio = this.media.create(this.filePath);
        }
        else if (this.platform.is('android')) {
            this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + file;
            this.Audio = this.media.create(this.filePath);
        }
        this.Audio.play();
        this.Audio.setVolume(0.8);
    };
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
    ServicebookingPage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageURI = imageData;
            _this.imageFileName = 'image' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.jpg';
            _this.userData['image'] = _this.imageFileName;
            console.log(_this.imageFileName);
            _this.userdata1['image'] = _this.imageFileName;
            var data = { imgfilename: _this.imageFileName, imgfilePath: _this.imageURI };
            // this.imgList.push(data);
            localStorage.setItem("imageList", JSON.stringify(data));
        }, function (err) {
            console.log(err);
            _this.presentToast(err);
        });
    };
    ServicebookingPage.prototype.imageDelete = function () {
        var _this = this;
        var alerts = this.alertCtrl.create({
            message: 'Are you sure to delete',
            buttons: [
                {
                    text: 'Yes',
                    handler: function (data) {
                        console.log("image removed");
                        //return true;
                        localStorage.setItem("imageList", "");
                        _this.userData['image'] = "";
                        _this.userdata1['image'] = "";
                    }
                },
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function (data) {
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
    };
    ServicebookingPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
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
    ServicebookingPage.prototype.promocode = function () {
        var cid;
        var bid;
        var promocode;
        this.serviceState.promocode(cid, bid, promocode).subscribe(function (data) {
        }), function (error) {
            console.log(error);
        };
    };
    ServicebookingPage.prototype.promochange = function (data) {
        console.log(data);
    };
    ServicebookingPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    ServicebookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-servicebooking',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefix\src\pages\servicebooking\servicebooking.html"*/'<!--\n\n  Generated template for the ServicebookingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n    <ion-toolbar no-padding>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu" style="color:#fff"></ion-icon>\n\n      </button>\n\n      <ion-title>New Service Booking</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n<ion-content padding *ngIf="mobile">\n\n    <ion-list no-lines>\n\n  <form [formGroup]="form" (ngSubmit)="serviceReq()">\n\n    \n\n    <ion-item >\n\n      \n\n      <!-- <ion-label>Select Make</ion-label> -->\n\n      <ion-select class="my-select" formControlName="make" name="make" [(ngModel)]="userData.make" (ionChange)="servicemake($event)">\n\n        <ion-option value="" disabled>Select Make<sup>*</sup></ion-option>\n\n        <ion-option *ngFor="let key  of makedropdown" value="{{key.id}}">{{key.make_name}}</ion-option>\n\n        <ion-option value="others">others</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  \n\n    <ion-item *ngIf="other">\n\n      <ion-input formControlName="othermake" name="othermake" type="text" [(ngModel)]="userData.othermake" placeholder="Enter Service Make *" clearInput></ion-input>\n\n    </ion-item>\n\n    <div *ngIf="make.touched && make.invalid" class="alertstyle">\n\n      <div *ngIf="make.errors.required">Select Make</div>\n\n    </div>\n\n\n\n    <ion-item>\n\n      <ion-input formControlName="modelno" name="modelno" type="text" [(ngModel)]="userData.modelno" placeholder="Enter Model Number *"\n\n        clearInput></ion-input>\n\n    </ion-item>\n\n    <div *ngIf="modelno.touched && modelno.invalid" class="alertstyle">\n\n      <div *ngIf="modelno.errors.required">Select Model</div>\n\n    </div>\n\n\n\n    <ion-item>\n\n      <ion-label class="align">Select Service Required<sup>*</sup></ion-label>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <!-- <ion-label>Software</ion-label> -->\n\n      <ion-select  class="my-select" formControlName="soft" name="soft" [(ngModel)]="userData.soft">\n\n        <ion-option value="" disabled>Select Software</ion-option>\n\n        <ion-option *ngFor="let key  of softdropdown" value="{{key.id}}">{{key.service}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <!-- <ion-label>Hardware</ion-label> -->\n\n      <ion-select  class="my-select" formControlName="hard" name="hard" [(ngModel)]="userData.hard">\n\n        <ion-option value="" disabled>Select Hardware</ion-option>\n\n        <ion-option *ngFor="let key  of harddropdown" value="{{key.id}}">{{key.service}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n   \n\n    <ion-item>\n\n      <ion-input formControlName="others" name="others" type="text" [(ngModel)]="userData.others" placeholder="Others (optional)" clearInput></ion-input>\n\n    </ion-item>\n\n    <div *ngIf="others.touched && others.invalid||hard.touched && hard.invalid||soft.touched && soft.invalid" class="alertstyle">\n\n      <div *ngIf="others.errors.required||hard.errors.required||soft.errors.required">Select Model</div>\n\n    </div>\n\n\n\n    <ion-item>\n\n      <!-- <ion-label floating>Home Pick Up</ion-label> -->\n\n        <ion-select class="my-select" style="color:#fff"  [(ngModel)]="userData.pickup" formControlName="pickup" >\n\n            <ion-option value="" disabled>Select Home Pick Up <sup>*</sup></ion-option>       \n\n          <ion-option value="required">Required</ion-option>\n\n          <ion-option value="notrequired">Not Required</ion-option>\n\n         \n\n      </ion-select>\n\n      </ion-item>\n\n      \n\n  <ion-item>\n\n    <ion-input   formControlName="promocode" name="promocode" type="text" (focusout)="promocodevalid($event.target.value);" [(ngModel)]="userData.promocode"  placeholder="Enter promo code (optional)"\n\n      clearInput></ion-input>\n\n  </ion-item>\n\n \n\n      <div  *ngIf="invalid" class="alertstyle">Invalid Promocode</div>\n\n      <div  *ngIf="usepromo" class="alertstyle">Already used promocode</div>\n\n    <ion-item>\n\n      <select-searchable  class="my-select"\n\n      formControlName="loc" name="loc" type="text" [(ngModel)]="userData.loc"\n\n          title="Select Preferred Location *"\n\n        \n\n          [items]="ports"\n\n          [canSearch]="true"\n\n          [multiple]="true"\n\n          (onChange)="portChange($event)">\n\n      </select-searchable>\n\n  </ion-item>\n\n  <div  *ngIf="locvaild" class="alertstyle">Select Minimum 2 areas and Maximum 3</div>\n\n \n\n      \n\n     <!-- <ion-item >\n\n      <ion-label>Select Preferred Locationfor Service</ion-label>\n\n      <ion-select formControlName="loc" name="loc" multiple [(ngModel)]="userData.loc" (ionChange)="serviceLoc($event)">\n\n        <ion-option *ngFor="let key  of preferdropdown" >{{key.area}}</ion-option>\n\n      </ion-select>\n\n    </ion-item> -->\n\n    <!-- <ion-item>\n\n      <ion-input formControlName="loc" name="loc" type="text" [(ngModel)]="userData.loc" (focusin)="preferLoc()" placeholder="Select Preferred Locationfor Service" clearInput></ion-input>\n\n    </ion-item> -->\n\n    <ion-row class="img">\n\n      <ion-col col-4> <h6 style="color:#fff" >Picture <sub>(optional)</sub> </h6></ion-col>\n\n      <ion-col col-1 style="color:#fff"><b>:</b></ion-col>\n\n      <ion-col col-6>\n\n      <div class="upload-img" (click)="getImage()">\n\n      {{userData.image}} <ion-icon name="camera"> Browse</ion-icon> </div>\n\n      <div *ngIf="!userData.image==\'\'" class="upload-img" (click)="imageDelete()" >\n\n      <ion-icon name="ios-close-circle"></ion-icon>\n\n      </div> \n\n      </ion-col>\n\n      </ion-row>\n\n      <ion-row class="voice">\n\n      <ion-col col-4> <h6 style="color:#fff" >Voice Note <sub>(optional)</sub></h6></ion-col>\n\n      <ion-col col-1 style="color:#fff"><b>:</b></ion-col>\n\n      <ion-col col-6 ><div *ngIf="userData.audio"> {{userData.audio}}</div>\n\n      <div class="upload-audio" *ngIf="userData.audio" (click)="audioDelete()" >\n\n      <ion-icon name="ios-close-circle"></ion-icon>\n\n      </div>\n\n        <!-- </div> -->\n\n             \n\n              <div class="upload-audio audiostop"  (click)="stopRecord()" *ngIf="recording">\n\n                  <ion-icon name="ios-mic"> Stop</ion-icon>\n\n              </div>\n\n              <div *ngIf="userData.audio==\'\'">\n\n                <div class="upload-audio audiostart" (click)="startRecord()"  *ngIf="!recording" >\n\n                  <ion-icon name="ios-mic-outline"> Record</ion-icon>\n\n              </div>\n\n                \n\n              </div>\n\n             \n\n              <!-- <button ion-button class="record" (click)="stopRecord()" *ngIf="recording"><ion-icon name="ios-mic" color="dark">&nbsp;</ion-icon>&nbsp;&nbsp;Stop</button>\n\n              <button ion-button class="record" (click)="startRecord()" *ngIf="!recording"><ion-icon name="ios-mic" color="dark">&nbsp;</ion-icon>&nbsp;&nbsp;Record</button> -->\n\n      </ion-col>\n\n    </ion-row>\n\n    <!-- <ion-list>\n\n      <ion-item *ngFor="let audio of audioList; index as i;">\n\n        <p>{{audio.filename}}</p>\n\n        {{userData.audio}}\n\n         <button ion-button clear item-end large (click)="playAudio(audio.filename, i)"><ion-icon name="play"></ion-icon></button> \n\n        <div class="upload-audio" (click)="playAudio(audio.filename, i)">\n\n            <ion-icon name="play"></ion-icon>\n\n        </div>\n\n      </ion-item>\n\n    </ion-list> -->\n\n    <!-- <ion-item>\n\n      <p>{{imageURI}}</p>\n\n      <button ion-button color="secondary" (click)="getImage()">Get Image</button>\n\n      <button ion-button (click)="uploadFile()">Upload</button>\n\n    </ion-item> -->\n\n    <button ion-button type="submit" [disabled]="disable" class="sign_btn"  round full>Book Your Service </button>\n\n </form>\n\n </ion-list>\n\n\n\n</ion-content>\n\n\n\n<ion-content padding *ngIf="printer">\n\n    <ion-list no-lines>\n\n  <form [formGroup]="form1" (ngSubmit)="serviceReq1()">\n\n    <ion-item >\n\n      <ion-input formControlName="make1" name="make1" type="text" [(ngModel)]="userdata1.make1" placeholder="Enter Service Make *" clearInput></ion-input>\n\n      <!-- <ion-input formControlName="make1" name="make1" type="text" [(ngModel)]="userdata1.make1" placeholder="Enter device type (eg:AC/Fan etc.) " clearInput></ion-input> -->\n\n    </ion-item>\n\n    <div *ngIf="make1.touched && make1.invalid" class="alertstyle">\n\n      <div *ngIf="make1.errors.required">Select Make</div>\n\n    </div>\n\n\n\n    <ion-item>\n\n      <ion-input formControlName="modelno1" name="modelno1" type="text" [(ngModel)]="userdata1.modelno1" placeholder="Enter Model Number *"\n\n        clearInput></ion-input>\n\n    </ion-item>\n\n    <div *ngIf="modelno1.touched && modelno1.invalid" class="alertstyle">\n\n      <div *ngIf="modelno1.errors.required">Select Model</div>\n\n    </div>\n\n\n\n    <!-- <ion-item>\n\n        <ion-input formControlName="modelno1" name="modelno1" type="text" [(ngModel)]="userdata1.modelno1" placeholder="Enter device make or model"\n\n          clearInput></ion-input>\n\n      </ion-item>\n\n      <div *ngIf="modelno1.touched && modelno1.invalid" class="alertstyle">\n\n        <div *ngIf="modelno1.errors.required">Select Model</div>\n\n      </div> -->\n\n\n\n    <ion-item>\n\n      <ion-textarea formControlName="describe" name="describe" type="text" [(ngModel)]="userdata1.describe" placeholder="Describe the problem "\n\n        clearInput></ion-textarea>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <!-- <ion-label floating>Home Pick Up</ion-label> -->\n\n        <ion-select class="my-select" style="color:#fff"  [(ngModel)]="userdata1.pickup1" formControlName="pickup1" >\n\n            <ion-option value="" disabled>Select Home Pick Up<sup>*</sup></ion-option>       \n\n          <ion-option value="required">Required</ion-option>\n\n          <ion-option value="notrequired">Not Required</ion-option>\n\n         \n\n      </ion-select>\n\n      </ion-item>\n\n        <ion-item>\n\n      <ion-input   formControlName="promocode1" name="promocode1" type="text" (focusout)="promocodevalid($event.target.value);" [(ngModel)]="userdata1.promocode1"  placeholder="Enter promo code (optional)"\n\n        clearInput></ion-input>\n\n    </ion-item>\n\n   \n\n        <div  *ngIf="invalid" class="alertstyle">Invalid Promocode</div>\n\n        <div  *ngIf="usepromo" class="alertstyle">Already used promocode</div>\n\n    <ion-item>\n\n      <select-searchable class="my-select"\n\n      formControlName="loc1" name="loc1" type="text" [(ngModel)]="userdata1.loc1"\n\n          title="Select Preferred Location *"\n\n          [items]="ports"\n\n          [canSearch]="true"\n\n          [multiple]="true"\n\n          (onChange)="portChange($event)">\n\n      </select-searchable>\n\n  </ion-item>\n\n  <div  *ngIf="locvaild" class="alertstyle">Select Minimum 2 areas and Maximum 3</div>\n\n \n\n\n\n    <!-- <ion-item>\n\n      <ion-label>Select Preferred Locationfor Service</ion-label>\n\n      <ion-select formControlName="loc1" name="loc1" multiple [(ngModel)]="userdata1.loc1" (ionChange)="serviceLoc($event)">\n\n        <ion-option *ngFor="let key  of preferdropdown" >{{key.area}}</ion-option>\n\n      </ion-select>\n\n    </ion-item> -->\n\n <!-- <ion-item>\n\n      <ion-input formControlName="loc" name="loc" type="text" [(ngModel)]="userData.loc" (focusin)="preferLoc()" placeholder="Select Preferred Locationfor Service" clearInput></ion-input>\n\n    </ion-item>  -->\n\n    <ion-row class="img">\n\n      <ion-col col-4> <h6 style="color:#fff" >Picture <sub>(optional)</sub> </h6></ion-col>\n\n      <ion-col col-1 style="color:#fff"><b>:</b></ion-col>\n\n      <ion-col col-6>\n\n      <div class="upload-img" (click)="getImage()">\n\n      {{userData.image}} <ion-icon name="camera"> Browse</ion-icon> </div>\n\n      <div *ngIf="!userData.image==\'\'" class="upload-img" (click)="imageDelete()" >\n\n      <ion-icon name="ios-close-circle"></ion-icon>\n\n      </div> \n\n      </ion-col>\n\n      </ion-row>\n\n      <ion-row class="voice">\n\n      <ion-col col-4> <h6 style="color:#fff" >Voice Note <sub>(optional)</sub></h6></ion-col>\n\n      <ion-col col-1 style="color:#fff"><b>:</b></ion-col>\n\n      <ion-col col-6 >\n\n      <!-- <div *ngIf="userData.audio"> {{audio.filename}}</div> -->\n\n      <div *ngIf="userData.audio">\n\n      <div *ngFor="let audio of audioList; index as i;" > {{audio.filename}}</div></div>\n\n      <div class="upload-audio" *ngIf="userData.audio" (click)="audioDelete()" >\n\n      <ion-icon name="ios-close-circle"></ion-icon>\n\n      </div>\n\n        <!-- /////////////////////////// -->\n\n     \n\n        <!-- //////////////////////////////////////// -->\n\n             \n\n              <div class="upload-audio audiostop"  (click)="stopRecord()" *ngIf="recording">\n\n                  <ion-icon name="ios-mic"> Stop</ion-icon>\n\n              </div>\n\n              <div *ngIf="userData.audio==\'\'">\n\n              <div class="upload-audio audiostart"  (click)="startRecord()"  *ngIf="!recording" >\n\n                  <ion-icon name="ios-mic-outline"> Record</ion-icon>\n\n              </div></div>\n\n              <!-- <button ion-button class="record" (click)="stopRecord()" *ngIf="recording"><ion-icon name="ios-mic" color="dark">&nbsp;</ion-icon>&nbsp;&nbsp;Stop</button>\n\n              <button ion-button class="record" (click)="startRecord()" *ngIf="!recording"><ion-icon name="ios-mic" color="dark">&nbsp;</ion-icon>&nbsp;&nbsp;Record</button> -->\n\n      </ion-col>\n\n    </ion-row>\n\n    <!-- //////////////////////////////////////////// -->\n\n    <!-- <ion-list>\n\n      <ion-item *ngFor="let audio of audioList; index as i;">\n\n        <p>{{audio.filename}}</p>\n\n        {{userData.audio}}\n\n        <!-- <button ion-button clear item-end large (click)="playAudio(audio.filename, i)"><ion-icon name="play"></ion-icon></button> -->\n\n        <!-- <div class="upload-audio" (click)="playAudio(audio.filename, i)">\n\n            <ion-icon name="play"></ion-icon>\n\n        </div>\n\n      </ion-item>\n\n    </ion-list>  -->\n\n    <!-- /////////////////////////////////////////// -->\n\n    <button ion-button type="submit" [disabled]="disable" class="sign_btn"  round full>Book Your Service</button>\n\n  </form>\n\n</ion-list>\n\n</ion-content>\n\n\n\n\n\n\n\n<!-- ////////////////////////////////////////////////////////////////// -->\n\n\n\n<ion-content padding *ngIf="beauty">\n\n    <ion-list no-lines>\n\n  <form [formGroup]="form1" (ngSubmit)="serviceReq1()">\n\n    <ion-item >\n\n      <!-- <ion-input formControlName="make1" name="make1" type="text" [(ngModel)]="userdata1.make1" placeholder="Enter Service Make *" clearInput></ion-input> -->\n\n      <ion-input formControlName="make1" name="make1" type="text" [(ngModel)]="userdata1.make1" placeholder="Enter required service (eg:facial)" clearInput></ion-input>\n\n    </ion-item>\n\n    <!-- <div *ngIf="make1.touched && make1.invalid" class="alertstyle">\n\n      <div *ngIf="make1.errors.required">Select Make</div>\n\n    </div> -->\n\n\n\n    <!-- <ion-item>\n\n      <ion-input formControlName="modelno1" name="modelno1" type="text" [(ngModel)]="userdata1.modelno1" placeholder="Enter Model Number *"\n\n        clearInput></ion-input>\n\n    </ion-item>\n\n    <div *ngIf="modelno1.touched && modelno1.invalid" class="alertstyle">\n\n      <div *ngIf="modelno1.errors.required">Select Model</div>\n\n    </div> -->\n\n\n\n    <!-- <ion-item>\n\n        <ion-input formControlName="modelno1" name="modelno1" type="text" [(ngModel)]="userdata1.modelno1" placeholder="Enter hours"\n\n          clearInput></ion-input>\n\n      </ion-item> -->\n\n      <!-- <div *ngIf="modelno1.touched && modelno1.invalid" class="alertstyle">\n\n        <div *ngIf="modelno1.errors.required">Select Model</div>\n\n      </div> -->\n\n\n\n    <!-- <ion-item>\n\n\n\n      \n\n      <ion-textarea formControlName="describe" name="describe" type="text" [(ngModel)]="userdata1.describe" placeholder="Describe the problem "\n\n        clearInput></ion-textarea>\n\n    </ion-item> -->\n\n\n\n    <ion-item>\n\n      <!-- <ion-label floating>Home Pick Up</ion-label> -->\n\n        <ion-select class="my-select" style="color:#fff"  [(ngModel)]="userdata1.pickup1" formControlName="pickup1" >\n\n            <ion-option value="" disabled>Select Home Pick Up<sup>*</sup></ion-option>       \n\n          <ion-option value="required">Required</ion-option>\n\n          <ion-option value="notrequired">Not Required</ion-option>\n\n         \n\n      </ion-select>\n\n      </ion-item>\n\n        <ion-item>\n\n      <ion-input   formControlName="promocode1" name="promocode1" type="text" (focusout)="promocodevalid($event.target.value);" [(ngModel)]="userdata1.promocode1"  placeholder="Enter promo code (optional)"\n\n        clearInput></ion-input>\n\n    </ion-item>\n\n   \n\n        <div  *ngIf="invalid" class="alertstyle">Invalid Promocode</div>\n\n        <div  *ngIf="usepromo" class="alertstyle">Already used promocode</div>\n\n    <ion-item>\n\n      <select-searchable class="my-select"\n\n      formControlName="loc1" name="loc1" type="text" [(ngModel)]="userdata1.loc1"\n\n          title="Select Preferred Location *"\n\n          [items]="ports"\n\n          [canSearch]="true"\n\n          [multiple]="true"\n\n          (onChange)="portChange($event)">\n\n      </select-searchable>\n\n  </ion-item>\n\n  <div  *ngIf="locvaild" class="alertstyle">Select Minimum 2 areas and Maximum 3</div>\n\n    <ion-row class="img">\n\n      <ion-col col-4> <h6 style="color:#fff" >Picture <sub>(optional)</sub> </h6></ion-col>\n\n      <ion-col col-1 style="color:#fff"><b>:</b></ion-col>\n\n      <ion-col col-6>\n\n      <div class="upload-img" (click)="getImage()">\n\n      {{userData.image}} <ion-icon name="camera"> Browse</ion-icon> </div>\n\n      <div *ngIf="!userData.image==\'\'" class="upload-img" (click)="imageDelete()" >\n\n      <ion-icon name="ios-close-circle"></ion-icon>\n\n      </div> \n\n      </ion-col>\n\n      </ion-row>\n\n      <ion-row class="voice">\n\n      <ion-col col-4> <h6 style="color:#fff" >Voice Note <sub>(optional)</sub></h6></ion-col>\n\n      <ion-col col-1 style="color:#fff"><b>:</b></ion-col>\n\n      <ion-col col-6 >\n\n      <div *ngIf="userData.audio">\n\n      <div *ngFor="let audio of audioList; index as i;" > {{audio.filename}}</div></div>\n\n      <div class="upload-audio" *ngIf="userData.audio" (click)="audioDelete()" >\n\n      <ion-icon name="ios-close-circle"></ion-icon>\n\n      </div>\n\n             \n\n              <div class="upload-audio audiostop"  (click)="stopRecord()" *ngIf="recording">\n\n                  <ion-icon name="ios-mic"> Stop</ion-icon>\n\n              </div>\n\n              <div *ngIf="userData.audio==\'\'">\n\n              <div class="upload-audio audiostart"  (click)="startRecord()"  *ngIf="!recording" >\n\n                  <ion-icon name="ios-mic-outline"> Record</ion-icon>\n\n              </div></div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <button ion-button type="submit" [disabled]="disable" class="sign_btn"  round full>Book Your Service</button>\n\n  </form>\n\n</ion-list>\n\n</ion-content>'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefix\src\pages\servicebooking\servicebooking.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_media__["a" /* Media */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_media__["a" /* Media */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_9__providers_servicestate_servicestate__["a" /* ServicestateProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__providers_servicestate_servicestate__["a" /* ServicestateProvider */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* Http */]) === "function" && _o || Object])
    ], ServicebookingPage);
    return ServicebookingPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
}());

//# sourceMappingURL=servicebooking.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotemapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_servicestate_servicestate__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__quotehistory_quotehistory__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__quoteview_quoteview__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var QuotemapPage = (function () {
    function QuotemapPage(navCtrl, AuthServiceProvider, navParams, callNumber, geolocation, alertCtrl, toastCtrl, serviceState, http) {
        this.navCtrl = navCtrl;
        this.AuthServiceProvider = AuthServiceProvider;
        this.navParams = navParams;
        this.callNumber = callNumber;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.serviceState = serviceState;
        this.http = http;
        this.pushData = { "deviceId": "", "message": "" };
        this.regionals = [];
        this.mapload();
    }
    QuotemapPage_1 = QuotemapPage;
    QuotemapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuotemapPage');
        this.quoteget();
    };
    QuotemapPage.prototype.listshow = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__quoteview_quoteview__["a" /* QuoteviewPage */]);
    };
    QuotemapPage.prototype.mapshow = function () {
        this.navCtrl.push(this.navCtrl.getActive().component);
    };
    QuotemapPage.prototype.push = function (data) {
        console.log("pushData", data);
        this.http.post('http://rytefix.in/sunapi/push.php', data).subscribe(function (result) {
            // this.responseData = result;
            console.log(result);
        }, function (err) {
            console.log(err);
        });
    };
    QuotemapPage.prototype.quoteget = function () {
        var _this = this;
        console.log(localStorage.getItem("loggedData"));
        var quotedata = JSON.parse(localStorage.getItem("loggedData"));
        console.log(quotedata);
        this.AuthServiceProvider.postData(quotedata[0], 'quoteView').then(function (result) {
            console.log(result);
            _this.quoteview = result;
            _this.acceptCheck(_this.quoteview);
            console.log(_this.quoteview[0].make_name);
            if (_this.quoteview[0].make_name == null) {
                _this.make = _this.quoteview[0].make;
            }
            else {
                _this.make = _this.quoteview[0].make_name;
            }
            //this.make= this.quoteview[0].make_name;
            _this.cgadget = _this.quoteview[0].gadget;
            _this.model = _this.quoteview[0].model;
            _this.soft = _this.quoteview[0].softService;
            _this.hard = _this.quoteview[0].hardService;
            _this.othermodel = _this.quoteview[0].othermodel;
            _this.pickup = _this.quoteview[0].pickup_type;
            _this.booking_date = _this.quoteview[0].posted_on;
            _this.image = _this.quoteview[0].image;
            _this.audio = _this.quoteview[0].audio;
            _this.description = _this.quoteview[0].bookingdescription;
            _this.preferredlocation = _this.quoteview[0].preferredlocation;
            _this.requestedService = _this.quoteview[0].service;
            _this.timePeriod = _this.quoteview[0].bookingtime_period;
            _this.regionals = result;
            _this.regionals.forEach(function (o) {
                Object.keys(o).forEach(function (k) {
                    if (isFinite(o[k])) {
                        o[k] = +o[k];
                    }
                });
            });
            console.log(_this.regionals);
            _this.mapload();
            // this.navCtrl.setRoot(HomePage);
        });
    };
    QuotemapPage.prototype.quoteChat = function () {
        alert("test");
    };
    QuotemapPage.prototype.quoteCall = function (mobile) {
        console.log(mobile);
        this.callNumber.callNumber(mobile, true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    QuotemapPage.prototype.acceptCheck = function (quoteView) {
        var _this = this;
        quoteView.forEach(function (element) {
            if (element.accept_status == 3) {
                console.log(element);
                _this.Check = "accepted";
                console.log(_this.Check);
            }
        });
    };
    QuotemapPage.prototype.quoteAccept = function (id, data) {
        var _this = this;
        console.log("quote data", data.device_id);
        this.pushData.deviceId = data.device_id;
        this.pushData.message = "Customer has accepted your service. Contact customer to complete the service.";
        // checking for customer if already accepted the quote
        if (this.Check == "accepted") {
            // if accepted throws prompt message to ignore accepted quote
            var promptalert = this.alertCtrl.create({
                title: 'Warning',
                message: 'you have already accepted the quote ! please ignore the accepted quote to accept this.',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                        }
                    }
                ]
            });
            promptalert.present();
        }
        else {
            console.log('quote is not accepted previously');
            var promptalert = this.alertCtrl.create({
                title: 'Accept Quote',
                message: 'Do you want to Accept this Quote?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            console.log(id);
                            _this.AuthServiceProvider.postData(id, 'serviceAccept').then(function (result) {
                                _this.responsedata = result;
                                if (_this.responsedata.status == true) {
                                    //this.refresh();
                                    _this.quoteAccept1(data);
                                    _this.push(_this.pushData);
                                    alert("Service accepted successfully");
                                }
                            });
                        }
                    }
                ]
            });
            promptalert.present();
        }
    };
    QuotemapPage.prototype.quoteAccept1 = function (data) {
        console.log("data", data);
        this.navCtrl.push(QuotemapPage_1, { "data": data });
    };
    QuotemapPage.prototype.quoteIgnore = function (id) {
        var _this = this;
        var promptalert = this.alertCtrl.create({
            title: 'Ignore',
            message: 'Do you want to Ignore this Quote?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log(id);
                        _this.AuthServiceProvider.postData(id, 'serviceIgnore').then(function (result) {
                            _this.responsedata = result;
                            if (_this.responsedata.status == true) {
                                _this.refresh();
                                alert("Service ignored successfully");
                            }
                        });
                    }
                }
            ]
        });
        promptalert.present();
    };
    QuotemapPage.prototype.refresh = function () {
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
        console.log("refresh");
    };
    QuotemapPage.prototype.mapload = function () {
        var _this = this;
        //  this.loadMap(13.08648395538330,80.27350616455078 );
        this.options = {
            enableHighAccuracy: true
        };
        this.geolocation.getCurrentPosition(this.options).then(function (pos) {
            _this.currentPos = pos;
            console.log(pos);
            console.log(pos.coords.latitude + ',' + pos.coords.longitude);
            _this.addMap(pos.coords.latitude, pos.coords.longitude);
            //  this.loadMap(pos.coords.latitude,pos.coords.longitude);
        }, function (err) {
            console.log("error : " + err.message);
        });
    };
    /*##User location load##*/
    QuotemapPage.prototype.addMap = function (lat, long) {
        var _this = this;
        var latLng = new google.maps.LatLng(lat, long);
        var mapOptions = {
            center: latLng,
            zoom: 5,
            visible: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        // this.addMarker();
        var markers = [];
        console.log("regionals", this.regionals);
        var _loop_1 = function (regional) {
            this_1.nabo_img = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
            console.log(regional.latitude + ',' + regional.longitude);
            var markerData = {
                position: {
                    lat: regional.latitude,
                    lng: regional.longitude
                },
                map: this_1.map,
                icon: this_1.nabo_img,
                title: regional.username,
            };
            regional.marker = new google.maps.Marker(markerData);
            markers.push(regional.marker);
            //let content = regional.username; 
            //infoWindow.open(this.map, regional.marker);
            regional.marker.addListener('click', function () {
                var content = "<div><div><b>Vendor name:</b> " + regional.username +
                    "</div><p><b>Exact price:</b> " + regional.exactprice +
                    "</p><p><b>Warranty:</b> " + regional.warranty +
                    "</p><p><b>Description:</b> " + regional.description +
                    "</p><button   class='buttonchat' (ng-click)='quoteChat()' >Chat</button>" +
                    "<button ion-button color='secondary'  class='buttoncall' (click)='quoteCall(" + regional.mobile + ")' icon-only>Call</button>" +
                    "<button ion-button color='primary'  class='buttonacc' (click)='quoteAccept(" + regional.id + regional + ")' icon-only>Accept</button>" +
                    "<button ion-button color='light'  class='buttonig' (click)='quoteIgnore(" + regional.id + ")' icon-only>Ignore</button></div>'";
                var infoWindow = new google.maps.InfoWindow({
                    content: content
                });
                infoWindow.open(_this.map, regional.marker);
                for (var _i = 0, _a = _this.regionals; _i < _a.length; _i++) {
                    var c = _a[_i];
                    console.log(c);
                    c.current = false;
                    // c.infoWindow.close();
                }
                _this.regionals = regional;
                var markerData = {
                    position: {
                        lat: regional.latitude,
                        lng: regional.longitude
                    },
                    map: _this.map,
                    title: regional.title,
                };
                regional.marker = new google.maps.Marker(markerData);
                markers.push(regional.marker);
                console.log(regional.marker);
                console.log(regional);
                console.log(regional.latitude + ',' + regional.longitude);
                //this.othersAddress = regional.username+','+regional.street_address+regional.city +regional.country ;
                // this.othersAddress = ` ${regional.username}, ${regional.street_address}, ${regional.city}, ${regional.country} ` ;
                _this.map.panTo(regional.marker.getPosition());
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = this.regionals; _i < _a.length; _i++) {
            var regional = _a[_i];
            _loop_1(regional);
        }
    };
    // loadMap(lat,long){
    //  console.log(lat+","+long);
    //   console.log("lat and lang")
    //   let latLng= new google.maps.LatLng(lat, long);
    //   console.log(latLng);
    //   let mapOptions={
    //     center:latLng,
    //     zoom:15,
    //     mapTypeId: google.maps.MapTypeId.ROADMAP
    //   }
    // this.map=new google.maps.Map(this.mapElement.nativeElement,mapOptions);
    // this.addMarker();
    // }
    /*##user location mark in map##*/
    QuotemapPage.prototype.addMarker = function () {
        var _this = this;
        console.log("marker");
        // let cur_img='http://rayi.in/naboApi/mapicon/nabo_home.png';
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var content = "<p>This is your current position !</p>";
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
            //this.othersAddress = "This is your current position !";
        });
    };
    QuotemapPage.prototype.completeQuote = function (vid, bid, data) {
        var _this = this;
        // console.log('vid',vid);
        console.log('compelte data', data);
        this.pushData.deviceId = data.device_id;
        this.pushData.message = "Customer has completed your service.";
        var prompt = this.alertCtrl.create({
            message: "Service completed and payment made ?",
            buttons: [
                {
                    text: 'Yes',
                    handler: function (data) {
                        console.log('yes clicked');
                        _this.serviceState.completeService(vid, bid).subscribe(function (data) {
                            console.log(data);
                            console.log(data.status);
                            if (data.status == 'success') {
                                _this.push(_this.pushData);
                                var toast = _this.toastCtrl.create({
                                    message: "Congratulations! You can use the credit",
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.present();
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
                            }
                        }), function (error) {
                            console.log(error);
                        };
                    }
                },
                {
                    text: 'No',
                    handler: function (data) {
                        alert(" Please pay for the service and then complete");
                        return true;
                    }
                }
            ]
        });
        prompt.present();
    };
    QuotemapPage.prototype.declineQuote = function (vid, bid) {
        var _this = this;
        // console.log('data',this.quoteview[0]);
        // let vid = this.quoteview[0].vendor;
        // let bid= this.quoteview[0].booking_id;
        console.log('vendor id', vid);
        console.log('booking id', bid);
        var prompt = this.alertCtrl.create({
            //  message: "Please describe the problem",
            inputs: [
                {
                    //type :'text',
                    name: 'reason',
                    placeholder: 'Reason for decline',
                    value: ""
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        // let validateObj = this.validate(data);
                        if (data.reason == "") {
                            var toast = _this.toastCtrl.create({
                                message: "Please enter the reason ",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            return false;
                        }
                        else {
                            var toast = _this.toastCtrl.create({
                                message: "Now you can accept other quotes",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            _this.serviceState.reportproblem(vid, bid, data.reason).subscribe(function (data) {
                                console.log(data);
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__quotehistory_quotehistory__["a" /* QuotehistoryPage */]);
                            }), function (error) {
                                console.log(error);
                            };
                            // this.navCtrl.push(QuoteviewPage);
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], QuotemapPage.prototype, "mapElement", void 0);
    QuotemapPage = QuotemapPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-quotemap',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefix\src\pages\quotemap\quotemap.html"*/'<!--\n  Generated template for the QuotemapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--\n  Generated template for the QuoteviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-toolbar no-padding>\n      <!-- <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button> -->\n    <ion-title>Quote</ion-title>\n    <!-- <ion-segment>\n        <ion-segment-button  class="button-l" (click)="listshow()">\n          List View\n        </ion-segment-button>\n        <ion-segment-button  class="button-m" (click)="mapshow()">\n          Map View\n        </ion-segment-button>\n      </ion-segment> -->\n  </ion-toolbar>\n  <ion-segment>\n    <ion-segment-button  class="button-l" (click)="listshow()">\n      List View\n    </ion-segment-button>\n    <ion-segment-button  class="button-m" (click)="mapshow()">\n      Map View\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n          <h5 style="color:#000" text-center>Booking Details</h5>\n\n          <ion-row *ngIf = "cgadget">\n              <ion-col col-5 text-left>\n               <b>Service Type</b>\n              </ion-col>\n              <ion-col col-1><b>:</b></ion-col>\n              <ion-col col-6 text-left>\n                  {{cgadget}}\n              </ion-col>\n            </ion-row>\n\n            <ion-row *ngIf = "requestedService">\n                <ion-col col-5 text-left>\n                 <b>Requested Service</b>\n                </ion-col>\n                <ion-col col-1><b>:</b></ion-col>\n                <ion-col col-6 text-left>\n                    {{requestedService}}\n                </ion-col>\n              </ion-row>\n\n             <ion-row *ngIf = "make">\n                     <ion-col col-5 text-left>\n                      <b>Make</b>\n                     </ion-col>\n                     <ion-col col-1><b>:</b></ion-col>\n                     <ion-col col-6 text-left>\n                         {{make}}\n                     </ion-col>\n                   </ion-row>\n                   <ion-row *ngIf = "model">\n                         <ion-col col-5 text-left>\n                          <b>Model</b>\n                         </ion-col>\n                         <ion-col col-1><b>:</b></ion-col>\n                         <ion-col col-6 text-left>\n                             {{model}}\n                         </ion-col>\n                       </ion-row>\n                       <ion-row  *ngIf = "cgadget != \'Beauty_Services\'">\n                             <ion-col col-5 text-left>\n                              <b>Problem</b>\n                             </ion-col>\n                             <ion-col col-1><b>:</b></ion-col>\n                             <ion-col col-6 text-left>\n                                     <p  *ngIf="soft!=\'\'||hard !=\'\'||othermodel !=\'\'||description !=\'\'">{{soft}}{{hard}}{{othermodel}}{{description}}</p>\n                                     \n                             </ion-col>\n                           </ion-row>\n\n                           <ion-row *ngIf = "timePeriod">\n                              <ion-col col-5 text-left>\n                               <b>Time Period</b>\n                              </ion-col>\n                              <ion-col col-1><b>:</b></ion-col>\n                              <ion-col col-6 text-left>\n                                  {{timePeriod}}\n                              </ion-col>\n                            </ion-row>\n\n                           <ion-row *ngIf = "preferredlocation">\n                              <ion-col col-5 text-left>\n                               <b>Preferred Location</b>\n                              </ion-col>\n                              <ion-col col-1><b>:</b></ion-col>\n                              <ion-col col-6 text-left>\n                                  {{preferredlocation}}\n                              </ion-col>\n                            </ion-row>\n                           <ion-row *ngIf = "pickup">\n                                 <ion-col col-5 text-left>\n                                  <b>Pickup</b>\n                                 </ion-col>\n                                 <ion-col col-1><b>:</b></ion-col>\n                                 <ion-col col-6 text-left>\n                                     {{pickup}}\n                                 </ion-col>\n                               </ion-row>\n                               <ion-row>\n                                     <ion-col col-5 text-left>\n                                      <b>Booking Date</b>\n                                     </ion-col>\n                                     <ion-col col-1><b>:</b></ion-col>\n                                     <ion-col col-6 text-left>\n                                         {{booking_date}}\n                                     </ion-col>\n                                   </ion-row>\n                                 </ion-list>\n\n<ion-content class="map-pin">\n  <div #map id="map"></div> \n</ion-content>\n\n<!-- <div class="btn-group switch">\n<button ion-button color="light" class="button" (click)="listshow()" icon-only>List View</button>\n<button ion-button color="light" class="button" (click)="mapshow()" icon-only>Map View</button>\n</div> -->\n\n</ion-content>\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefix\src\pages\quotemap\quotemap.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_6__providers_servicestate_servicestate__["a" /* ServicestateProvider */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */]])
    ], QuotemapPage);
    return QuotemapPage;
    var QuotemapPage_1;
}());

//# sourceMappingURL=quotemap.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendorratingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servicestate_servicestate__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the VendorratingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VendorratingPage = (function () {
    function VendorratingPage(navCtrl, navParams, toastCtrl, serviceState, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.serviceState = serviceState;
        this.http = http;
        this.pushData = { "deviceId": "", "message": "" };
        this.data = navParams.get('item');
        console.log(this.data);
    }
    VendorratingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VendorratingPage');
    };
    VendorratingPage.prototype.onModelChange = function () {
        console.log(this.rate);
    };
    VendorratingPage.prototype.push = function (data) {
        console.log("pushData", data);
        this.http.post('http://rytefix.in/sunapi/push.php', data).subscribe(function (result) {
            // this.responseData = result;
            console.log(result);
        }, function (err) {
            console.log(err);
        });
    };
    VendorratingPage.prototype.submitReview = function () {
        var _this = this;
        if (this.rate) {
            var serverData = { cid: this.data.customer,
                vid: this.data.vendor,
                bid: this.data.booking_id,
                rating: this.rate,
                review: this.review };
            console.log(serverData);
            this.pushData.deviceId = this.data.device_id;
            this.pushData.message = "Customer has completed your service.";
            this.serviceState.vendorReview(serverData).subscribe(function (data) {
                console.log(data);
                if (data.status == "success") {
                    _this.serviceState.completeService(_this.data.vendor, _this.data.booking_id).subscribe(function (data) {
                        console.log(data);
                        console.log(data.status);
                        if (data.status == 'success') {
                            _this.push(_this.pushData);
                            var toast = _this.toastCtrl.create({
                                message: "Congratulations! You can use the credit",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            // this.navCtrl.push(TabsPage);
                        }
                    }), function (error) {
                        console.log(error);
                    };
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                }
            }), function (error) {
                console.log(error);
            };
        }
        else {
            alert('please select star rating for vendor');
        }
    };
    VendorratingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-vendorrating',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefix\src\pages\vendorrating\vendorrating.html"*/'<!--\n  Generated template for the VendorratingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Vendor Rating</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list class="list">\n        <ion-item>\n          <ion-textarea placeholder="Review about vendor" [(ngModel)]="review"></ion-textarea>\n        </ion-item>\n      </ion-list>\n    <rating [(ngModel)]="rate" \n    readOnly="false" \n    max="5" \n    emptyStarIconName="star-outline"\n    halfStarIconName="star-half"\n    starIconName="star" \n    nullable="false" \n    (ngModelChange)="onModelChange($event)"> <!--use it when you need to do something when user clicks on a star. in case you only need to change ngModel property, this property can be ommited.-->\n</rating>\n\n<button ion-button block color="dark" class="button" (click)="submitReview()" block>Review Vendor</button>\n</ion-content>\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefix\src\pages\vendorrating\vendorrating.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_servicestate_servicestate__["a" /* ServicestateProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
    ], VendorratingPage);
    return VendorratingPage;
}());

//# sourceMappingURL=vendorrating.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditotherservicebookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the EditotherservicebookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditotherservicebookingPage = (function () {
    function EditotherservicebookingPage(navCtrl, navParams, AuthServiceProvider, alertCtrl, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AuthServiceProvider = AuthServiceProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userData = { "bookingid": "", "gadget": "", "service": "", "type": "", "description": "", "servicePeriod": "", "pickup": "", "promocode": "", "brand": "" };
        this.presentLoading();
        var data = navParams.get('item');
        this.booking_id = data.booking_id;
        this.userData.bookingid = data.booking_id;
        this.type = data.gadget;
        var date = new Date();
        var maxDate = new Date();
        var numberOfDaysToAdd = 6;
        maxDate.setDate(maxDate.getDate() + numberOfDaysToAdd);
        console.log('max date', maxDate);
        this.min = date.toISOString();
        this.max = maxDate.toJSON().split('T')[0];
        console.log(this.min);
        console.log(this.max);
        console.log(data);
        // CHECKING FOR USER SELECTED SERVICE 
        if (this.type == "A/C") {
            this.AC = true;
            this.userData.gadget = 'A/C';
            this.AuthServiceProvider.postData('A/C', 'servicetypes').then(function (result) {
                _this.acdropdown = result;
                _this.loading.dismiss();
                console.log(_this.acdropdown);
            });
        }
        else {
            if (this.type == "Plumbing") {
                this.Plumbing = true;
                this.userData.gadget = 'Plumbing';
                this.AuthServiceProvider.postData('Plumbing', 'servicetypes').then(function (result) {
                    _this.plumbingropdown = result;
                    _this.loading.dismiss();
                    console.log(_this.plumbingropdown);
                });
            }
            else {
                if (this.type == "Home_Appliances") {
                    this.HomeAppliance = true;
                    this.userData.gadget = 'Home_Appliances';
                    this.AuthServiceProvider.postData('Home_Appliances', 'servicetypes').then(function (result) {
                        _this.hadropdown = result;
                        _this.loading.dismiss();
                        console.log(_this.hadropdown);
                    });
                }
                else {
                    if (this.type == "Beauty_Services") {
                        this.Beauty = true;
                        this.userData.gadget = 'Beauty_Services';
                        this.AuthServiceProvider.postData('Beauty_Services', 'servicetypes').then(function (result) {
                            _this.beautydropdown = result;
                            _this.loading.dismiss();
                            console.log(_this.beautydropdown);
                        });
                    }
                    else {
                        if (this.type == "Electrical") {
                            this.Electrical = true;
                            this.userData.gadget = 'Electrical';
                            this.AuthServiceProvider.postData('Electrical', 'servicetypes').then(function (result) {
                                _this.electricaldropdown = result;
                                _this.loading.dismiss();
                                console.log(_this.electricaldropdown);
                            });
                        }
                    }
                }
            }
        }
    }
    EditotherservicebookingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditotherservicebookingPage');
        this.getBookedService();
    };
    EditotherservicebookingPage.prototype.getBookedService = function () {
        var _this = this;
        this.AuthServiceProvider.postData(this.booking_id, 'editData').then(function (result) {
            _this.bookingData = result[0];
            console.log(_this.bookingData);
            _this.userData.gadget = _this.bookingData.gadget;
            _this.userData.service = _this.bookingData.service;
            _this.userData.type = _this.bookingData.service_type;
            _this.userData.description = _this.bookingData.description;
            _this.userData.servicePeriod = _this.bookingData.time_period;
            _this.userData.brand = _this.bookingData.make;
        });
    };
    // AC SERVICE BOOKING
    EditotherservicebookingPage.prototype.ACbooking = function () {
        var _this = this;
        if (this.userData.service != '' && this.userData.type != '' && this.userData.servicePeriod != '') {
            console.log('success', this.userData);
            this.presentLoading();
            this.AuthServiceProvider.postData(this.userData, 'updateHomeServiceBooking ').then(function (result) {
                _this.responseData = result;
                if (_this.responseData.status == true) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                    _this.loading.dismiss();
                    _this.presentAlert('Thank you', 'Your booking has been saved successfully.');
                }
                console.log(result);
            });
        }
        else {
            this.presentAlert('alert', 'Please fill all the * fields !');
        }
    };
    // PLUMBING SERVICE BOOKING 
    EditotherservicebookingPage.prototype.Plumbingbooking = function () {
        var _this = this;
        if (this.userData.service != '' && this.userData.servicePeriod != '') {
            console.log('success', this.userData);
            this.presentLoading();
            this.AuthServiceProvider.postData(this.userData, 'updateHomeServiceBooking ').then(function (result) {
                _this.responseData = result;
                if (_this.responseData.status == true) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                    _this.loading.dismiss();
                    _this.presentAlert('Thank you', 'Your booking has been saved successfully.');
                }
                console.log(result);
            });
        }
        else {
            this.presentAlert('alert', 'Please fill all the * fields !');
        }
    };
    // HOME APPLIANCE BOOKING 
    EditotherservicebookingPage.prototype.HomeApplianceBooking = function () {
        var _this = this;
        if (this.userData.service != '' && this.userData.servicePeriod != '' && this.userData.brand != '') {
            console.log('success', this.userData);
            this.presentLoading();
            this.AuthServiceProvider.postData(this.userData, 'updateHomeServiceBooking ').then(function (result) {
                _this.responseData = result;
                if (_this.responseData.status == true) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                    _this.loading.dismiss();
                    _this.presentAlert('Thank you', 'Your booking has been saved successfully.');
                }
                console.log(result);
            });
        }
        else {
            this.presentAlert('alert', 'Please fill all the * fields !');
        }
    };
    // BEAUTY SERVICE BOOKING 
    EditotherservicebookingPage.prototype.BeautyBooking = function () {
        var _this = this;
        if (this.userData.service != '' && this.userData.servicePeriod != '') {
            console.log('success', this.userData);
            this.presentLoading();
            this.AuthServiceProvider.postData(this.userData, 'updateHomeServiceBooking ').then(function (result) {
                _this.responseData = result;
                if (_this.responseData.status == true) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                    _this.loading.dismiss();
                    _this.presentAlert('Thank you', 'Your booking has been saved successfully.');
                }
                console.log(result);
            });
        }
        else {
            this.presentAlert('alert', 'Please fill all the * fields !');
        }
    };
    // ELECTRICAL SERVICE BOOKING 
    EditotherservicebookingPage.prototype.ElectricaleBooking = function () {
        var _this = this;
        if (this.userData.service != '' && this.userData.servicePeriod != '') {
            console.log('success', this.userData);
            this.presentLoading();
            this.AuthServiceProvider.postData(this.userData, 'updateHomeServiceBooking ').then(function (result) {
                _this.responseData = result;
                if (_this.responseData.status == true) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                    _this.loading.dismiss();
                    _this.presentAlert('Thank you', 'Your booking has been saved successfully.');
                }
                console.log(result);
            });
        }
        else {
            this.presentAlert('alert', 'Please fill all the * fields !');
        }
    };
    // ALERT CONTROLLER 
    EditotherservicebookingPage.prototype.presentAlert = function (title, msg) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: msg,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    // LOADING CONTROLLER 
    EditotherservicebookingPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    EditotherservicebookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-editotherservicebooking',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefix\src\pages\editotherservicebooking\editotherservicebooking.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit Booking</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<!-- // AC service  -->\n<ion-content padding *ngIf=\'AC\'>\n    <ion-list>\n        <ion-item>\n            <ion-label floating>AC type *</ion-label>\n              <ion-select style="color:rgb(109, 108, 108)"  [(ngModel)]="userData.type">\n                <ion-option value="Window">Window</ion-option>\n                <ion-option value="Split">Split</ion-option>\n            </ion-select>\n            </ion-item>\n  \n        <ion-item>\n            <ion-label floating>Select Required Service *</ion-label>\n              <ion-select style="color:rgb(109, 108, 108)"  [(ngModel)]="userData.service">\n                  <ion-option *ngFor="let key  of acdropdown" value="{{key.id}}">{{key.service}}</ion-option>\n            </ion-select>\n            </ion-item>\n  \n            <ion-item>\n                <ion-label style="color:rgb(109, 108, 108)" floating>Describe your problem (optional)</ion-label>\n                <ion-input [(ngModel)]="userData.description"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                    <ion-label style="color:rgb(109, 108, 108)" floating>Service required on *</ion-label>\n                  <ion-datetime  class="date" [min] = "min" [max] = "max" displayFormat="YYYY / MM / DD" pickerFormat="DD MM YYYY" [(ngModel)]="userData.servicePeriod"></ion-datetime>\n                </ion-item>\n  \n            <button ion-button [disabled]="disable" class="sign_btn" (click)="ACbooking()"  round full>Book Your Service</button>\n    </ion-list>\n     \n  </ion-content>\n  \n  <!-- // Plumbing service  -->\n  <ion-content padding *ngIf=\'Plumbing\'>\n      <ion-list>\n        \n          <ion-item>\n              <ion-label floating>Select Required Service *</ion-label>\n                <ion-select style="color:rgb(109, 108, 108)"  [(ngModel)]="userData.service">\n                    <ion-option *ngFor="let key  of plumbingropdown" value="{{key.id}}">{{key.service}}</ion-option>\n              </ion-select>\n              </ion-item>\n    \n              <ion-item>\n                  <ion-label style="color:rgb(109, 108, 108)" floating>Describe your problem (optional)</ion-label>\n                  <ion-input [(ngModel)]="userData.description"></ion-input>\n                </ion-item>\n      \n                <ion-item>\n                        <ion-label style="color:rgb(109, 108, 108)" floating>Service required on *</ion-label>\n                    <ion-datetime  class="date" [min] = "min" [max] = "max" displayFormat="YYYY / MM / DD" pickerFormat="DD MM YYYY" [(ngModel)]="userData.servicePeriod"></ion-datetime>\n                  </ion-item>\n    \n              <button ion-button [disabled]="disable" class="sign_btn" (click)="Plumbingbooking()"  round full>Book Your Service</button>\n      </ion-list>\n  </ion-content>\n  \n  <!-- // Home Appliances -->\n  <ion-content padding *ngIf=\'HomeAppliance\'>\n      <ion-list>\n        \n          <ion-item>\n              <ion-label floating>Select type of appliances *</ion-label>\n                <ion-select style="color:rgb(109, 108, 108)"  [(ngModel)]="userData.service">\n                    <ion-option *ngFor="let key  of hadropdown" value="{{key.id}}">{{key.service}}</ion-option>\n              </ion-select>\n              </ion-item>\n  \n              <ion-item>\n                  <ion-label style="color:rgb(109, 108, 108)" floating>enter the brand name *</ion-label>\n                  <ion-input [(ngModel)]="userData.brand"></ion-input>\n                </ion-item>\n    \n              <ion-item>\n                  <ion-label style="color:rgb(109, 108, 108)" floating>Describe your problem (optional)</ion-label>\n                  <ion-input [(ngModel)]="userData.description"></ion-input>\n                </ion-item>\n      \n                <ion-item>\n                        <ion-label style="color:rgb(109, 108, 108)" floating>Service required on *</ion-label>\n                    <ion-datetime  class="date" [min] = "min" [max] = "max" displayFormat="YYYY / MM / DD" pickerFormat="DD MM YYYY" [(ngModel)]="userData.servicePeriod"></ion-datetime>\n                  </ion-item>\n    \n              <button ion-button [disabled]="disable" class="sign_btn" (click)="HomeApplianceBooking()"  round full>Book Your Service</button>\n      </ion-list>\n  </ion-content>\n  \n  <!-- // Beauty Service -->\n  <ion-content padding *ngIf=\'Beauty\'>\n      <ion-list>\n        \n          <ion-item>\n              <ion-label floating>Select required service *</ion-label>\n                <ion-select style="color:rgb(109, 108, 108)"  [(ngModel)]="userData.service">\n                    <ion-option *ngFor="let key  of beautydropdown" value="{{key.id}}">{{key.service}}</ion-option>\n              </ion-select>\n              </ion-item>\n  \n              <ion-item>\n                    <ion-label style="color:rgb(109, 108, 108)" floating>Service required on *</ion-label>\n                  <ion-datetime  class="date" [min] = "min" [max] = "max" displayFormat="YYYY / MM / DD" pickerFormat="DD MM YYYY" [(ngModel)]="userData.servicePeriod"></ion-datetime>\n                </ion-item>\n    \n              <button ion-button [disabled]="disable" class="sign_btn" (click)="BeautyBooking()"  round full>Book Your Service</button>\n      </ion-list>\n  </ion-content>\n  \n  <!-- // Electrical Service Booking  -->\n  <ion-content padding *ngIf=\'Electrical\'>\n      <ion-list>\n        \n          <ion-item>\n              <ion-label floating>Select required service *</ion-label>\n                <ion-select style="color:rgb(109, 108, 108)"  [(ngModel)]="userData.service">\n                    <ion-option *ngFor="let key  of electricaldropdown" value="{{key.id}}">{{key.service}}</ion-option>\n              </ion-select>\n              </ion-item>\n  \n              <ion-item>\n                  <ion-label style="color:rgb(109, 108, 108)" floating>Describe your problem (optional)</ion-label>\n                  <ion-input [(ngModel)]="userData.description"></ion-input>\n                </ion-item>\n      \n                <ion-item>\n                        <ion-label style="color:rgb(109, 108, 108)" floating>Service required on *</ion-label>\n                    <ion-datetime  class="date" [min] = "min" [max] = "max" displayFormat="YYYY / MM / DD" pickerFormat="DD MM YYYY" [(ngModel)]="userData.servicePeriod"></ion-datetime>\n                  </ion-item>\n    \n              <button ion-button [disabled]="disable" class="sign_btn" (click)="ElectricaleBooking()"  round full>Book Your Service</button>\n      </ion-list>\n  </ion-content>\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefix\src\pages\editotherservicebooking\editotherservicebooking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], EditotherservicebookingPage);
    return EditotherservicebookingPage;
}());

//# sourceMappingURL=editotherservicebooking.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servicestate_servicestate__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WalletPage = (function () {
    function WalletPage(navCtrl, navParams, AuthServiceProvider, emailComposer, modal, serviceState, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AuthServiceProvider = AuthServiceProvider;
        this.emailComposer = emailComposer;
        this.modal = modal;
        this.serviceState = serviceState;
        this.alertCtrl = alertCtrl;
        var data = JSON.parse(localStorage.getItem('loggedData'));
        this.AuthServiceProvider.postData(data[0], 'getUserdata').then(function (result) {
            _this.responsedata = result;
            if (_this.responsedata.status == true) {
                // toast.present();
                localStorage.setItem('loggedData', JSON.stringify(_this.responsedata.data));
            }
        });
        this.userdata = JSON.parse(localStorage.getItem('loggedData'));
        console.log(this.userdata);
        this.userId = this.userdata[0].id;
        console.log(this.userId);
        this.walletamount = this.userdata[0]['rf_wallet_bal'];
        console.log("walletamount", this.walletamount);
        this.earnings();
        this.referEarnings();
        this.referEarningStatus1();
        this.referEarningStatus2();
        this.welcomeBonus();
        this.welcomeBonusStatus1();
        this.welcomeBonusStatus2();
        // console.log(data[0].rf_wallet_bal);
    }
    WalletPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad WalletPage');
        var data = JSON.parse(localStorage.getItem('loggedData'));
        this.AuthServiceProvider.postData(data[0], 'getUserdata').then(function (result) {
            4;
            _this.responsedata = result;
            if (_this.responsedata.status == true) {
                // toast.present();
                localStorage.setItem('loggedData', JSON.stringify(_this.responsedata.data));
            }
        });
        this.userdata = JSON.parse(localStorage.getItem('loggedData'));
        console.log(this.userdata);
        this.userId = this.userdata[0].id;
        console.log(this.userId);
        this.walletamount = this.userdata[0]['rf_wallet_bal'];
        console.log("walletamount", this.walletamount);
    };
    WalletPage.prototype.redeem = function () {
        var email = {
            to: 'support@rytefix.com',
            //cc: 'admin@rytefix.com',
            bcc: [],
            subject: 'Customer ' + this.userdata[0].username + ' Redeem request for referral amount',
            body: 'the amount requested to redeem by customer is ' + this.referEarning,
            isHtml: true
        };
        // Send a text message using default options
        // this.emailComposer.open(email);
        this.referEarningStatus();
    };
    WalletPage.prototype.openModal = function (item) {
        var data = {
            username: this.userdata[0].username,
            redeemData: item
        };
        var myModal = this.modal.create('RedeemPage', { data: data });
        myModal.present();
    };
    WalletPage.prototype.earnings = function () {
        var _this = this;
        this.serviceState.creditearns(this.userId).subscribe(function (data) {
            _this.items = data;
            console.log(_this.items);
        }), function (error) {
            console.log(error);
        };
    };
    WalletPage.prototype.referEarnings = function () {
        var _this = this;
        var serverData = { userid: this.userId };
        this.serviceState.referEarnings(serverData).subscribe(function (data) {
            _this.referEarning = data.earnings.credits;
            _this.count = data.rowcount;
            console.log(_this.referEarning);
        }), function (error) {
            console.log(error);
        };
    };
    WalletPage.prototype.referEarningStatus = function () {
        var _this = this;
        console.log('referAndEarning test');
        var serverData = { userid: this.userId, credits: this.referEarning };
        this.serviceState.referEarningStatus(serverData).subscribe(function (data) {
            console.log(data.status);
            if (data.status == "success") {
                alert('redeem request sent successfully, our customer support will get back to you shortly');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
            }
        }), function (error) {
            console.log(error);
        };
    };
    WalletPage.prototype.welcomeBonusRedeem = function () {
        var _this = this;
        var alert1 = this.alertCtrl.create({
            title: 'alert',
            message: 'Have you booked and completed the service ?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Buy clicked');
                        console.log('referAndEarning test');
                        var serverData = { userid: _this.userId, credits: _this.welcomeBonusAmount };
                        _this.serviceState.welcomeBonusRedeem(serverData).subscribe(function (data) {
                            console.log(data.status);
                            if (data.status == "success") {
                                alert('redeem request sent successfully, our customer support will get back to you shortly');
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
                            }
                        }), function (error) {
                            console.log(error);
                        };
                    }
                }
            ]
        });
        alert1.present();
    };
    WalletPage.prototype.welcomeBonusStatus1 = function () {
        var _this = this;
        console.log('referAndEarning test');
        var serverData = { userid: this.userId };
        this.serviceState.welcomeBonusStatus1(serverData).subscribe(function (data) {
            console.log('status2', data);
            _this.welcomeBonusAmount1 = data.earnings.credits;
        }), function (error) {
            console.log(error);
        };
    };
    WalletPage.prototype.welcomeBonusStatus2 = function () {
        var _this = this;
        console.log('referAndEarning test');
        var serverData = { userid: this.userId };
        this.serviceState.welcomeBonusStatus2(serverData).subscribe(function (data) {
            console.log('status2', data);
            _this.welcomeBonusAmount2 = data.earnings.credits;
        }), function (error) {
            console.log(error);
        };
    };
    WalletPage.prototype.referEarningStatus1 = function () {
        var _this = this;
        console.log('referAndEarning test');
        var serverData = { userid: this.userId };
        this.serviceState.referEarningStatus1(serverData).subscribe(function (data) {
            console.log('status1', data);
            _this.referEarning1 = data.earnings.credits;
            _this.count1 = data.rowcount;
        }), function (error) {
            console.log(error);
        };
    };
    WalletPage.prototype.referEarningStatus2 = function () {
        var _this = this;
        console.log('referAndEarning test');
        var serverData = { userid: this.userId };
        this.serviceState.referEarningStatus2(serverData).subscribe(function (data) {
            console.log('status2', data);
            _this.referEarning2 = data.earnings.credits;
            _this.count2 = data.rowcount;
        }), function (error) {
            console.log(error);
        };
    };
    WalletPage.prototype.welcomeBonus = function () {
        var _this = this;
        console.log('welcomeBonus');
        var serverData = { userid: this.userId };
        this.serviceState.welcomeBonus(serverData).subscribe(function (data) {
            console.log('status2', data);
            _this.welcomeBonusAmount = data.earnings.credits;
        }), function (error) {
            console.log(error);
        };
    };
    WalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wallet',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefix\src\pages\wallet\wallet.html"*/'<!--\n\n  Generated template for the WalletPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <!-- <ion-buttons left> \n\n        <button ion-button  icon-only clear>\n\n      <ion-icon name="ios-arrow-round-back-outline" class="color-wh"></ion-icon>\n\n    </button>\n\n    </ion-buttons> -->\n\n    <ion-title>Wallet</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="card">\n\n    <div class="cover">\n\n      <h1>WALLET BALANCE</h1>\n\n      <p class="p">₹{{walletamount}}</p>\n\n    </div>\n\n  </div>\n\n  <div class="segment">\n\n    <ion-segment [(ngModel)]="earns">\n\n      <ion-segment-button value="Earns">\n\n        Earnings\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n    <!-- <ion-segment [(ngModel)]="refer">\n\n              <ion-segment-button value="Spends">\n\n                Refer&Earn\n\n              </ion-segment-button>\n\n            </ion-segment> -->\n\n\n\n\n\n  </div>\n\n  <ion-scroll scrollY="true" style="width: 100%; height: 100%;">\n\n\n\n    <div [ngSwitch]="earns">\n\n      <ion-list>\n\n        <div ion-item *ngIf="welcomeBonusAmount">\n\n          <h2>Earning amount : {{welcomeBonusAmount}} </h2>\n\n          <!-- <h2>No of referrals : {{count}} </h2> -->\n\n          <h5>Earned by : Welcome bonus</h5>\n\n          <button ion-button class="redeem" block (click)="welcomeBonusRedeem()"> Redeem your money</button>\n\n        </div>\n\n\n\n        <div ion-item *ngIf="welcomeBonusAmount1">\n\n            <h2>Earning amount : {{welcomeBonusAmount1}} </h2>\n\n            <!-- <h2>No of referrals : {{count}} </h2> -->\n\n            <h5>Earned by : Welcome bonus</h5>\n\n            <h5>Status : Redeem request sent</h5>\n\n          </div>\n\n\n\n          <div ion-item *ngIf="welcomeBonusAmount2">\n\n              <h2>Earning amount : {{welcomeBonusAmount2}} </h2>\n\n              <!-- <h2>No of referrals : {{count}} </h2> -->\n\n              <h5>Earned by : Welcome bonus</h5>\n\n              <h5>Status : Redeemed successfully</h5>\n\n            </div>\n\n\n\n        <div ion-item *ngIf="referEarning">\n\n          <h2>Earning amount : {{referEarning}} </h2>\n\n          <h2>No of referrals : {{count}} </h2>\n\n          <h5>Earned by : Refer & Earn</h5>\n\n          <button ion-button class="redeem" block (click)="redeem()"> Redeem your money</button>\n\n        </div>\n\n\n\n        <div ion-item *ngIf="referEarning1">\n\n          <h2>Earning amount : {{referEarning1}} </h2>\n\n          <h2>No of referrals : {{count1}} </h2>\n\n          <h5>Earned by : Refer & Earn</h5>\n\n          <h5>Status : Redeem request sent</h5>\n\n          <!-- <button ion-button  class="redeem" block (click)="redeem()"> Redeem your money</button> -->\n\n        </div>\n\n\n\n        <div ion-item *ngIf="referEarning2">\n\n          <h2>Earning amount : {{referEarning2}} </h2>\n\n          <h2>No of referrals : {{count2}} </h2>\n\n          <h5>Earned by : Refer & Earn</h5>\n\n          <h5>Status : Redeemed successfully</h5>\n\n          <!-- <button ion-button  class="redeem" block (click)="redeem()"> Redeem your money</button> -->\n\n        </div>\n\n      </ion-list>\n\n\n\n\n\n      <ion-list>\n\n        <div ion-item *ngFor="let item of items">\n\n          <!-- <button > -->\n\n          <!-- <button ion-item > -->\n\n            <!-- <div *ngIf = "item.promo_code">  -->\n\n          <h2>Earning amount : {{item.promo_credits}}</h2>\n\n          <h5>Make : {{item.make_name}}</h5>\n\n          <h6 *ngIf="item.softService">problem : {{item.softService}}</h6>\n\n          <h6 *ngIf="item.hardService">problem : {{item.hardService}}</h6>\n\n          <h6 *ngIf="item.description">problem : {{item.description}}</h6>\n\n          <h5>Earned by : promocode {{item.promo_code}}</h5>\n\n          <h5 *ngIf="item.redeem_status==1">Redeem Status : Request sent</h5>\n\n          <h5 *ngIf="item.redeem_status==2">Redeem Status : Redeemed successfully</h5>\n\n          <h6 *ngIf="item.customer_completed==0 && item.redeem_status==0" class="enable">Complete your service to redeem credits </h6>\n\n          <!-- </button> -->\n\n          <!-- </button> -->\n\n          <button *ngIf="item.customer_completed==1 && item.redeem_status==0" ion-button class="redeem" block (click)="openModal(item)">\n\n          Redeem your money</button>\n\n          <button *ngIf="item.customer_completed==0 && item.redeem_status==0" [disabled]="true" ion-button class="redeem" block (click)="openModal(item)">\n\n          Redeem your money</button>\n\n\n\n        </div>\n\n      <!-- </div> -->\n\n      </ion-list>\n\n    </div>\n\n  </ion-scroll>\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefix\src\pages\wallet\wallet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_3__providers_servicestate_servicestate__["a" /* ServicestateProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], WalletPage);
    return WalletPage;
}());

//# sourceMappingURL=wallet.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherservicebookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OtherservicebookingPage = (function () {
    function OtherservicebookingPage(navCtrl, navParams, AuthServiceProvider, alertCtrl, datePicker, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AuthServiceProvider = AuthServiceProvider;
        this.alertCtrl = alertCtrl;
        this.datePicker = datePicker;
        this.loadingCtrl = loadingCtrl;
        this.userData = { "user_id": "", "gadget": "", "service": "", "type": "", "description": "", "servicePeriod": "", "pickup": "", "promocode": "", "brand": "" };
        this.presentLoading();
        this.userdata = JSON.parse(localStorage.getItem('loggedData'));
        console.log(this.userdata);
        this.userData.user_id = this.userdata[0].id;
        console.log(this.userData.user_id);
        this.type = this.navParams.get('item');
        var date = new Date();
        var maxDate = new Date();
        var numberOfDaysToAdd = 6;
        maxDate.setDate(maxDate.getDate() + numberOfDaysToAdd);
        console.log('max date', maxDate);
        this.min = date.toISOString();
        this.max = maxDate.toJSON().split('T')[0];
        console.log(this.min);
        console.log(this.max);
        console.log(this.type);
        // CHECKING FOR USER SELECTED SERVICE 
        if (this.type == "AC") {
            this.AC = true;
            this.userData.gadget = 'A/C';
            this.AuthServiceProvider.postData('A/C', 'servicetypes').then(function (result) {
                _this.acdropdown = result;
                _this.loading.dismiss();
                console.log(_this.acdropdown);
            });
        }
        else {
            if (this.type == "Plumbing") {
                this.Plumbing = true;
                this.userData.gadget = 'Plumbing';
                this.AuthServiceProvider.postData('Plumbing', 'servicetypes').then(function (result) {
                    _this.plumbingropdown = result;
                    _this.loading.dismiss();
                    console.log(_this.plumbingropdown);
                });
            }
            else {
                if (this.type == "HomeAppliance") {
                    this.HomeAppliance = true;
                    this.userData.gadget = 'Home_Appliances';
                    this.AuthServiceProvider.postData('Home_Appliances', 'servicetypes').then(function (result) {
                        _this.hadropdown = result;
                        _this.loading.dismiss();
                        console.log(_this.hadropdown);
                    });
                }
                else {
                    if (this.type == "Beauty") {
                        this.Beauty = true;
                        this.userData.gadget = 'Beauty_Services';
                        this.AuthServiceProvider.postData('Beauty_Services', 'servicetypes').then(function (result) {
                            _this.beautydropdown = result;
                            _this.loading.dismiss();
                            console.log(_this.beautydropdown);
                        });
                    }
                    else {
                        if (this.type == "Electrical") {
                            this.Electrical = true;
                            this.userData.gadget = 'Electrical';
                            this.AuthServiceProvider.postData('Electrical', 'servicetypes').then(function (result) {
                                _this.electricaldropdown = result;
                                _this.loading.dismiss();
                                console.log(_this.electricaldropdown);
                            });
                        }
                    }
                }
            }
        }
    }
    OtherservicebookingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OtherservicebookingPage');
    };
    // AC SERVICE BOOKING
    OtherservicebookingPage.prototype.ACbooking = function () {
        var _this = this;
        if (this.userData.service != '' && this.userData.type != '' && this.userData.servicePeriod != '') {
            console.log('success', this.userData);
            this.presentLoading();
            this.AuthServiceProvider.postData(this.userData, 'homeservices').then(function (result) {
                _this.responseData = result;
                if (_this.responseData.status == true) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                    _this.loading.dismiss();
                    _this.presentAlert('Thank you', 'Your booking has placed successfully.');
                }
                console.log(result);
            });
        }
        else {
            this.presentAlert('alert', 'Please fill all the * fields !');
        }
    };
    // PLUMBING SERVICE BOOKING 
    OtherservicebookingPage.prototype.Plumbingbooking = function () {
        var _this = this;
        if (this.userData.service != '' && this.userData.servicePeriod != '') {
            console.log('success', this.userData);
            this.presentLoading();
            this.AuthServiceProvider.postData(this.userData, 'homeservices').then(function (result) {
                _this.responseData = result;
                if (_this.responseData.status == true) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                    _this.loading.dismiss();
                    _this.presentAlert('Thank you', 'Your booking has placed successfully.');
                }
                console.log(result);
            });
        }
        else {
            this.presentAlert('alert', 'Please fill all the * fields !');
        }
    };
    // HOME APPLIANCE BOOKING 
    OtherservicebookingPage.prototype.HomeApplianceBooking = function () {
        var _this = this;
        if (this.userData.service != '' && this.userData.servicePeriod != '' && this.userData.brand != '') {
            console.log('success', this.userData);
            this.presentLoading();
            this.AuthServiceProvider.postData(this.userData, 'homeservices').then(function (result) {
                _this.responseData = result;
                if (_this.responseData.status == true) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                    _this.loading.dismiss();
                    _this.presentAlert('Thank you', 'Your booking has placed successfully.');
                }
                console.log(result);
            });
        }
        else {
            this.presentAlert('alert', 'Please fill all the * fields !');
        }
    };
    // BEAUTY SERVICE BOOKING 
    OtherservicebookingPage.prototype.BeautyBooking = function () {
        var _this = this;
        if (this.userData.service != '' && this.userData.servicePeriod != '') {
            console.log('success', this.userData);
            this.presentLoading();
            this.AuthServiceProvider.postData(this.userData, 'homeservices').then(function (result) {
                _this.responseData = result;
                if (_this.responseData.status == true) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                    _this.loading.dismiss();
                    _this.presentAlert('Thank you', 'Your booking has placed successfully.');
                }
                console.log(result);
            });
        }
        else {
            this.presentAlert('alert', 'Please fill all the * fields !');
        }
    };
    // ELECTRICAL SERVICE BOOKING 
    OtherservicebookingPage.prototype.ElectricaleBooking = function () {
        var _this = this;
        if (this.userData.service != '' && this.userData.servicePeriod != '') {
            console.log('success', this.userData);
            this.presentLoading();
            this.AuthServiceProvider.postData(this.userData, 'homeservices').then(function (result) {
                _this.responseData = result;
                if (_this.responseData.status == true) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                    _this.loading.dismiss();
                    _this.presentAlert('Thank you', 'Your booking has placed successfully.');
                }
                console.log(result);
            });
        }
        else {
            this.presentAlert('alert', 'Please fill all the * fields !');
        }
    };
    // ALERT CONTROLLER 
    OtherservicebookingPage.prototype.presentAlert = function (title, msg) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: msg,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    // LOADING CONTROLLER 
    OtherservicebookingPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    OtherservicebookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-otherservicebooking',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefix\src\pages\otherservicebooking\otherservicebooking.html"*/'<!--\n  Generated template for the OtherservicebookingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n    <ion-title>Service Booking</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding *ngIf=\'AC\'>\n  <ion-list>\n      <ion-item>\n          <ion-label floating>AC type *</ion-label>\n            <ion-select style="color:rgb(109, 108, 108)"  [(ngModel)]="userData.type">\n              <ion-option value="Window">Window</ion-option>\n              <ion-option value="Split">Split</ion-option>\n          </ion-select>\n          </ion-item>\n\n      <ion-item>\n          <ion-label floating>Select Required Service *</ion-label>\n            <ion-select style="color:rgb(109, 108, 108)"  [(ngModel)]="userData.service">\n                <ion-option *ngFor="let key  of acdropdown" value="{{key.id}}">{{key.service}}</ion-option>\n          </ion-select>\n          </ion-item>\n\n          <ion-item>\n              <ion-label style="color:rgb(109, 108, 108)" floating>Describe your problem (optional)</ion-label>\n              <ion-input [(ngModel)]="userData.description"></ion-input>\n            </ion-item>\n\n                <!-- <ion-list radio-group [(ngModel)]="userData.servicePeriod">\n                    <ion-list-header class="ion-list-header">Service required on *\n                    </ion-list-header>\n                  \n                    <ion-item>\n                      <ion-label>Today</ion-label>\n                      <ion-radio value="Today"></ion-radio>\n                    </ion-item>\n                  \n                    <ion-item>\n                      <ion-label>Tomorrow</ion-label>\n                      <ion-radio value="Tomorrow"></ion-radio>\n                    </ion-item>\n                  \n                    <ion-item>\n                      <ion-label>WeekEnd</ion-label>\n                      <ion-radio value="WeekEnd"></ion-radio>\n                    </ion-item>\n                  </ion-list> -->\n\n                  <ion-item>\n                      <ion-label style="color:rgb(109, 108, 108)" floating>Service required on *</ion-label>\n                      <ion-datetime  class="date" [min] = "min" [max] = "max" displayFormat="YYYY / MM / DD" pickerFormat="DD MM YYYY" [(ngModel)]="userData.servicePeriod"></ion-datetime>\n                    </ion-item>\n\n          <ion-item>\n              <ion-label style="color:rgb(109, 108, 108)" floating>Promocode (optional)</ion-label>\n              <ion-input [(ngModel)]="userData.promocode"></ion-input>\n            </ion-item>\n\n          <button ion-button [disabled]="disable" class="sign_btn" (click)="ACbooking()"  round full>Book Your Service</button>\n  </ion-list>\n   \n</ion-content>\n\n<!-- // Plumbing service  -->\n<ion-content padding *ngIf=\'Plumbing\'>\n    <ion-list>\n      \n        <ion-item>\n            <ion-label floating>Select Required Service *</ion-label>\n              <ion-select style="color:rgb(109, 108, 108)"  [(ngModel)]="userData.service">\n                  <ion-option *ngFor="let key  of plumbingropdown" value="{{key.id}}">{{key.service}}</ion-option>\n            </ion-select>\n            </ion-item>\n  \n            <ion-item>\n                <ion-label style="color:rgb(109, 108, 108)" floating>Describe your problem (optional)</ion-label>\n                <ion-input [(ngModel)]="userData.description"></ion-input>\n              </ion-item>\n    \n              <ion-item>\n                  <ion-label style="color:rgb(109, 108, 108)" floating>Service required on *</ion-label>\n                  <ion-datetime  class="date" [min] = "min" [max] = "max" displayFormat="YYYY / MM / DD" pickerFormat="DD MM YYYY" [(ngModel)]="userData.servicePeriod"></ion-datetime>\n                </ion-item>\n\n            <ion-item>\n                <ion-label style="color:rgb(109, 108, 108)" floating>Promocode (optional)</ion-label>\n                <ion-input [(ngModel)]="userData.promocode" ></ion-input>\n              </ion-item>\n  \n            <button ion-button [disabled]="disable" class="sign_btn" (click)="Plumbingbooking()"  round full>Book Your Service</button>\n    </ion-list>\n</ion-content>\n\n<!-- // Home Appliances -->\n<ion-content padding *ngIf=\'HomeAppliance\'>\n    <ion-list>\n      \n        <ion-item>\n            <ion-label floating>Select type of appliances *</ion-label>\n              <ion-select style="color:rgb(109, 108, 108)"  [(ngModel)]="userData.service">\n                  <ion-option *ngFor="let key  of hadropdown" value="{{key.id}}">{{key.service}}</ion-option>\n            </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label style="color:rgb(109, 108, 108)" floating>enter the brand name *</ion-label>\n                <ion-input [(ngModel)]="userData.brand"></ion-input>\n              </ion-item>\n  \n            <ion-item>\n                <ion-label style="color:rgb(109, 108, 108)" floating>Describe your problem (optional)</ion-label>\n                <ion-input [(ngModel)]="userData.description"></ion-input>\n              </ion-item>\n    \n              <ion-item>\n                  <ion-label style="color:rgb(109, 108, 108)" floating>Service required on *</ion-label>\n                  <ion-datetime  class="date" [min] = "min" [max] = "max" displayFormat="YYYY / MM / DD" pickerFormat="DD MM YYYY" [(ngModel)]="userData.servicePeriod"></ion-datetime>\n                </ion-item>\n\n            <ion-item>\n                <ion-label style="color:rgb(109, 108, 108)" floating>Promocode (optional)</ion-label>\n                <ion-input [(ngModel)]="userData.promocode" ></ion-input>\n              </ion-item>\n  \n            <button ion-button [disabled]="disable" class="sign_btn" (click)="HomeApplianceBooking()"  round full>Book Your Service</button>\n    </ion-list>\n</ion-content>\n\n<!-- // Beauty Service -->\n<ion-content padding *ngIf=\'Beauty\'>\n    <ion-list>\n      \n        <ion-item>\n            <ion-label floating>Select required service *</ion-label>\n              <ion-select style="color:rgb(109, 108, 108)"  [(ngModel)]="userData.service">\n                  <ion-option *ngFor="let key  of beautydropdown" value="{{key.id}}">{{key.service}}</ion-option>\n            </ion-select>\n            </ion-item>\n\n                  <ion-item>\n                      <ion-label style="color:rgb(109, 108, 108)" floating>Service required on *</ion-label>\n                      <ion-datetime  class="date" [min] = "min" [max] = "max" displayFormat="YYYY / MM / DD" pickerFormat="DD MM YYYY" [(ngModel)]="userData.servicePeriod"></ion-datetime>\n                    </ion-item>\n\n            <ion-item>\n                <ion-label style="color:rgb(109, 108, 108)" floating>Promocode (optional)</ion-label>\n                <ion-input [(ngModel)]="userData.promocode" ></ion-input>\n              </ion-item>\n  \n            <button ion-button [disabled]="disable" class="sign_btn" (click)="BeautyBooking()"  round full>Book Your Service</button>\n    </ion-list>\n</ion-content>\n\n<!-- // Electrical Service Booking  -->\n<ion-content padding *ngIf=\'Electrical\'>\n    <ion-list>\n      \n        <ion-item>\n            <ion-label floating>Select required service *</ion-label>\n              <ion-select style="color:rgb(109, 108, 108)"  [(ngModel)]="userData.service">\n                  <ion-option *ngFor="let key  of electricaldropdown" value="{{key.id}}">{{key.service}}</ion-option>\n            </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label style="color:rgb(109, 108, 108)" floating>Describe your problem (optional)</ion-label>\n                <ion-input [(ngModel)]="userData.description"></ion-input>\n              </ion-item>\n    \n              <ion-item>\n                  <ion-label style="color:rgb(109, 108, 108)" floating>Service required on *</ion-label>\n                      <ion-datetime  class="date" [min] = "min" [max] = "max" displayFormat="YYYY / MM / DD" pickerFormat="DD MM YYYY" [(ngModel)]="userData.servicePeriod"></ion-datetime>\n                    </ion-item>\n\n            <ion-item>\n                <ion-label style="color:rgb(109, 108, 108)" floating>Promocode (optional)</ion-label>\n                <ion-input [(ngModel)]="userData.promocode" ></ion-input>\n              </ion-item>\n  \n            <button ion-button [disabled]="disable" class="sign_btn" (click)="ElectricaleBooking()"  round full>Book Your Service</button>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefix\src\pages\otherservicebooking\otherservicebooking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], OtherservicebookingPage);
    return OtherservicebookingPage;
}());

//# sourceMappingURL=otherservicebooking.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the ContactusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactusPage = (function () {
    function ContactusPage(navCtrl, call, emailComposer, navParams) {
        this.navCtrl = navCtrl;
        this.call = call;
        this.emailComposer = emailComposer;
        this.navParams = navParams;
    }
    ContactusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactusPage');
    };
    ContactusPage.prototype.contactUs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.call.callNumber('7358711554', true)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ContactusPage.prototype.EmailUs = function () {
        var email = {
            to: 'admin@rytefix.com',
            subject: 'Your Subject',
            body: ' Enter your Query with Username',
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    ContactusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contactus',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefix\src\pages\contactus\contactus.html"*/'<!--\n\n  Generated template for the ContactusPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-toolbar>\n\n      <!-- <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button> -->\n\n    <ion-title>Contact Us</ion-title>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n  <ion-content class="background" align ="center">\n\n    <!-- <img  src=\'http://sunrisetechs.com/images/imgs/appicon.png\' class="animate-right" width= 60% height=\'auto\'/> -->\n\n    <img  src=\'http://rytefix.in/images/imgs/customerAppImages/logo1.png\' class="animate-right" width= 50% height=\'auto\'/>\n\n    <div class="animate-bottom">\n\n        <h5 class="text">Explore Your Options</h5>\n\n    <!-- <div class="div">\n\n    <h1 class="header">About us </h1>\n\n    <p class="paraText"><strong> Rytefix is a free app available to book mobile, laptop and all other electronic gadgets services in Chennai. Connect customers and gadgets service providers in whole new way, intend to bring more transparency and enjoyable experience in market place. Customers have options like “know your cost upfront”, find out “who is nearby” to enjoy hassle free gadgets service experience. Services offered at your doorstep by connecting our trusted service partners with better understanding of your needs on all models of mobiles, laptops and all electronic gadgets. Cracked screen repair and replacement for Samsung , Coolpad and mi brand mobile can be done for very affordable price through RYTEFIX network in Chennai.</strong>\n\n    </p>\n\n    </div> -->\n\n    <button ion-button block class="button" (click)="contactUs()" icon-left>\n\n        <ion-icon name="ios-call-outline"></ion-icon> 7358711554</button> \n\n      <button ion-button block class="emailbutton" (click)="EmailUs()" icon-left>\n\n       <ion-icon name="ios-mail-outline"></ion-icon>support@rytefix.com</button>\n\n     </div>\n\n</ion-content>\n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefix\src\pages\contactus\contactus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ContactusPage);
    return ContactusPage;
}());

//# sourceMappingURL=contactus.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_add_data_add_data__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FaqPage = (function () {
    function FaqPage(navCtrl, faqapi, navParams) {
        this.navCtrl = navCtrl;
        this.faqapi = faqapi;
        this.navParams = navParams;
        // fdata:any={};
        this.item = [];
        this.gotoFaq();
    }
    FaqPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FaqPage');
        this.gotoFaq();
    };
    FaqPage.prototype.gotoFaq = function () {
        var _this = this;
        console.log("data");
        this.faqapi.getFaq()
            .subscribe(function (data) {
            _this.item = data[0].content;
            //this.fdata=this.item.fdata;
            console.log(_this.item);
            // console.log(this.fdata.content);
        });
    };
    FaqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-faq',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefix\src\pages\faq\faq.html"*/'<!--\n\n  Generated template for the FaqPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <!-- <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button> -->\n\n    <ion-title>FAQ</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div [innerHTML]= "this.item"></div> \n\n</ion-content>\n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefix\src\pages\faq\faq.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_add_data_add_data__["a" /* AddDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], FaqPage);
    return FaqPage;
}());

//# sourceMappingURL=faq.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntrosliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_add_data_add_data__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IntrosliderPage = (function () {
    function IntrosliderPage(navCtrl, intro, navParams, menu) {
        this.navCtrl = navCtrl;
        this.intro = intro;
        this.navParams = navParams;
        this.menu = menu;
        this.showSkip = true;
        this.dir = 'ltr';
        localStorage.setItem('introslider', JSON.stringify(true));
        this.gotointro();
        // this.slides = [
        //   {
        //     title: "WHY RYTEFIX ?",
        //     description: "Rytefix is a free app available to book mobile, laptop and all other electronic gadgets services in Chennai. Enjoy hassle free experience.",
        //     image: 'assets/imgs/slider1.jpg',
        //   },
        //   {
        //     title: "WHAT WE DO ?",
        //     description: "Connect customers and gadgets service providers in whole new way, intend to bring more transparency and enjoyable experience in market place.",
        //     image: 'assets/imgs/slider2.jpg',
        //   },
        //   {
        //     title: "HASSLE FREE EXPERIENCE",
        //     description: "We cover almost every gadgets and brands with great offers and discounts.",
        //     image: 'assets/imgs/slider3.jpg',
        //   }
        // ];
    }
    IntrosliderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntrosliderPage');
        this.gotointro();
    };
    IntrosliderPage.prototype.signIn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    IntrosliderPage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    IntrosliderPage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    IntrosliderPage.prototype.gotointro = function () {
        var _this = this;
        console.log("data");
        this.intro.getIntroslide()
            .subscribe(function (data) {
            _this.data1 = data.data[1];
            _this.data2 = data.data[2];
            _this.data3 = data.data[3];
            _this.title1 = _this.data1.title;
            _this.content1 = _this.data1.content;
            _this.title2 = _this.data2.title;
            _this.content2 = _this.data2.content;
            _this.title3 = _this.data3.title;
            _this.content3 = _this.data3.content;
            console.log("data1", _this.title1);
            console.log("data2", _this.content1);
            console.log("data3", _this.data3);
            //  this.fdata=data.data;
            //  for (let data1 of this.fdata.data)
            //this.item= this.fdata.data;
            //  this.item=data1.title
            //    {
            //  console.log("title"+ this.fdata);
            //    }
            // this.item=this.fdata.id.
            //this.item=this.fdata.slides.id;
            // console.log("id",this.fdata.id);
            // console.log(this.fdata.content);
        });
    };
    IntrosliderPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    IntrosliderPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    IntrosliderPage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    IntrosliderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-introslider',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefix\src\pages\introslider\introslider.html"*/'<!-- <ion-header no-shadow class="navColor">\n\n  <ion-navbar >\n\n    <ion-buttons end *ngIf="showSkip">\n\n      <button ion-button (click)="home()" color="primary">SKIP</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<!-- <ion-content no-bounce>\n\n  <ion-slides pager="true" dir="{{dir}}" (ionSlideWillChange)="onSlideChangeStart($event)">\n\n    <ion-slide *ngFor="let slide of slides">\n\n      <img [src]="slide.image" class="slide-image" />\n\n      <!-- <h2 class="slide-title" [innerHTML]="slide.title"></h2> -->\n\n      <!-- <p [innerHTML]="slide.description"></p> -->\n\n    <!-- </ion-slide>\n\n    <ion-slide>\n\n      <img src="assets/imgs/appicon2.png" class="slide-image" />\n\n      <h2 class="slide-title"></h2>\n\n      <button ion-button block class="bonusButton"  icon-end (click)="startApp()">\n\n        REGISTER TO GET 250 CREDITS\n\n        <ion-icon name="arrow-forward"></ion-icon>\n\n      </button>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>  -->\n\n<ion-content>\n\n  <ion-slides >\n\n    <!-- <ion-slide id="slide1">\n\n      <div style="margin-top:-50px">\n\n        <ion-buttons end *ngIf="showSkip">\n\n            <button ion-button (click)="home()" class="color-wh" clear>SKIP</button>\n\n          </ion-buttons>\n\n      <img src="http://rytefix.in/images/imgs/customerAppImages/introscreen-1.png" />\n\n    </div>\n\n    <h5 class="title1"><b>{{title1}}</b></h5>\n\n    <p><b>{{content1}}</b></p> -->\n\n    <!-- ////////////////////////////////////////////////////////////////////// -->\n\n      <!-- <h5 class="title"><b>Gadgets Needs Service ?</b></h5> -->\n\n      <!-- <p><b>Rytefix is a free app available to book mobile, laptop and all other electronic gadgets services in Chennai. Enjoy hassle free experience.</b></p> -->\n\n  <!-- /////////////////////////////////////////////////////////////////////////////////////// -->\n\n    <!-- </ion-slide> -->\n\n    <!-- <ion-slide id="slide2">\n\n        <div style="margin-top:-50px">\n\n            <ion-buttons end *ngIf="showSkip">\n\n                <button ion-button (click)="home()" class="color-wh" clear>SKIP</button>\n\n              </ion-buttons>\n\n          <img src="http://rytefix.in/images/imgs/customerAppImages/introscreen-2.png" />\n\n        </div>\n\n        <h5 class="title"><b>{{title2}}</b></h5>\n\n        <p><b>{{content2}}</b></p> -->\n\n        <!-- <h5 class="title"><b>WHAT WE DO ?</b></h5> -->\n\n        <!-- <p><b>Connect customers and gadgets service providers in whole new way, intend to bring more transparency and enjoyable experience in market place.</b></p>  -->\n\n    \n\n      <!-- </ion-slide> -->\n\n    <ion-slide id="slide3">\n\n        <div style="margin-top:-50px">\n\n            <!-- <ion-buttons end *ngIf="showSkip">\n\n                <button ion-button (click)="home()" class="color-wh" clear>SKIP</button>\n\n              </ion-buttons> -->\n\n          <img src="http://rytefix.in/images/imgs/customerAppImages/introchecking.png" />\n\n        </div>\n\n        <!-- <h5 class="title"><b>{{title3}}</b></h5> -->\n\n        <!-- <p><b>{{content3}}</b></p>\n\n        <h5 class="title"><b>HASSLE FREE EXPERIENCE</b></h5>\n\n        <p><b>We cover almost every gadgets and brands with great offers and discounts.</b></p>  -->\n\n      \n\n        <ion-row >\n\n         <ion-col col-6>\n\n            <button ion-button block round  class="bonusButton"  icon-end (click)="signIn()" style="margin-bottom: 10px">\n\n                <p>Existing user </p>&nbsp; Sign In       \n\n               </button>\n\n         </ion-col>\n\n         <ion-col col-6>\n\n            <button ion-button block round class="bonusButton"  icon-end (click)="signUp()">\n\n                <p>New user </p>&nbsp; Sign Up\n\n             </button>\n\n          </ion-col>\n\n       </ion-row>\n\n       \n\n          \n\n        \n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefix\src\pages\introslider\introslider.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_add_data_add_data__["a" /* AddDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"]])
    ], IntrosliderPage);
    return IntrosliderPage;
}());

//# sourceMappingURL=introslider.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, loadingCtrl, toastCtrl, transfer, AuthServiceProvider, camera, file, filePath, platform, actionSheetCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.transfer = transfer;
        this.AuthServiceProvider = AuthServiceProvider;
        this.camera = camera;
        this.file = file;
        this.filePath = filePath;
        this.platform = platform;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.fileopen = false;
        this.lastImage = null;
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            mobile: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            area: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            city: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            pincode: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            mail: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].email])
        });
        this.userData = { "username": "", "mobile": "", "mail": "", "area": "", "city": "", "pincode": "" };
        if (localStorage.getItem('loggedData')) {
            this.ionViewDidLoad();
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
        }
        this.editProfile = true;
        this.submitProfile = false;
        this.cancelProfile = false;
        this.isDisable = true;
    }
    Object.defineProperty(ProfilePage.prototype, "username", {
        get: function () {
            return this.form.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfilePage.prototype, "mobile", {
        get: function () {
            return this.form.get('mobile');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfilePage.prototype, "mail", {
        get: function () {
            return this.form.get('mail');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfilePage.prototype, "area", {
        get: function () {
            return this.form.get('area');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfilePage.prototype, "city", {
        get: function () {
            return this.form.get('city');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfilePage.prototype, "pincode", {
        get: function () {
            return this.form.get('pincode');
        },
        enumerable: true,
        configurable: true
    });
    ProfilePage.prototype.chooseimg = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    ProfilePage.prototype.takePicture = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                    console.log(currentName);
                    console.log(correctPath);
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                console.log(currentName);
                console.log(correctPath);
            }
        }, function (err) {
            _this.ImagepresentToast('Error while selecting image.');
        });
    };
    ProfilePage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    ProfilePage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    ProfilePage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    // Always get the accurate path to your apps folder
    ProfilePage.prototype.pathForImage = function (img) {
        if (localStorage.getItem('loggedData')) {
            if (img === null) {
                //return 'assets/imgs/user.jpg';
                var imgData = JSON.parse(localStorage.getItem('loggedData'));
                var image = "http://rytefix.in/images/imgs/" + imgData[0]['profile_pic'];
                return image;
            }
            else {
                this.fileopen = true;
                return cordova.file.dataDirectory + img;
            }
        }
    };
    ProfilePage.prototype.uploadImage = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        //  loader.present();
        var fileTransfer = this.transfer.create();
        console.log('image name', this.lastImage);
        var options = {
            fileKey: 'file',
            fileName: this.lastImage,
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {},
            params: { 'fileName': this.lastImage }
        };
        fileTransfer.upload(this.pathForImage(this.lastImage), 'http://rytefix.in/images/image.php', options)
            .then(function (data) {
            console.log(data + " Uploaded Successfully");
            alert("Image Uploaded Successfully");
            console.log(data);
            var result = data.responseCode;
            if (result == 200) {
                var userData = {};
                userData = JSON.parse(localStorage.getItem('loggedData'));
                userData[0]['profile_pic'] = _this.lastImage;
                console.log(userData);
                localStorage.setItem('loggedData', JSON.stringify(userData));
                _this.AuthServiceProvider.postData(userData[0], 'userProfileimg').then(function (result) {
                    // loading.present();
                    _this.responseData = result;
                    if (true == _this.responseData.status) {
                        _this.fileopen = false;
                        _this.ImagepresentToast('Image uploaded succesfully.');
                        _this.refresh();
                    }
                }, function (err) {
                    _this.fileopen = false;
                    _this.ImagepresentToast('Image upload failed.');
                });
                // this.ImagepresentToast('Image succesful uploaded.');
                // this.fileopen = false;
            }
        }, function (err) {
            console.log(err);
            loader.dismiss();
            _this.presentToast(err);
        });
    };
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
    ProfilePage.prototype.refresh = function () {
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
        console.log('page refreshed');
    };
    ProfilePage.prototype.profileactive = function () {
        this.isDisable = false;
        this.editProfile = false;
        this.submitProfile = true;
        this.cancelProfile = true;
    };
    ProfilePage.prototype.profilecancel = function () {
        this.isDisable = true;
        this.editProfile = true;
        this.submitProfile = false;
        this.cancelProfile = false;
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
        this.getuser();
    };
    ProfilePage.prototype.getuser = function () {
        var _this = this;
        if (localStorage.getItem('loggedData')) {
            var userdata = JSON.parse(localStorage.getItem('loggedData'));
            // console.log(userdata['id']);
            this.AuthServiceProvider.postData(userdata[0], 'getUserdata').then(function (result) {
                _this.responsedata = result;
                if (_this.responsedata.status == true) {
                    var user_detail = _this.responsedata.data[0];
                    _this.userData = user_detail;
                    _this.userData.mail = _this.userData['email'];
                }
            });
        }
    };
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
    ProfilePage.prototype.profileUpdate = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({ content: "Please wait.." });
        loader.present();
        var toast = this.toastCtrl.create({
            message: 'Profile updated successfully',
            duration: 3000,
            position: 'bottom'
        });
        var userdata = JSON.parse(localStorage.getItem('loggedData'));
        this.userData['id'] = userdata[0]['id'];
        console.log(this.userData);
        this.AuthServiceProvider.postData(this.userData, 'profileUpdate').then(function (result) {
            _this.responsedata = result;
            if (_this.responsedata.status == true) {
                loader.dismiss();
                var user_detail = _this.responsedata.data[0];
                _this.userData = user_detail;
                _this.userData.mail = _this.userData['email'];
                toast.present();
                _this.refresh();
            }
        });
    };
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
    ProfilePage.prototype.ImagepresentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefix\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>Profile</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <!-- <img class="pimg" src="{{pathForImage(lastImage)}}" onerror="this.onerror=null;this.src=\'http://rayi.in/naboapi/mapicon/user.jpg\'"/> -->\n\n    <!-- <img class="pimg" src="http://rayi.in/naboapi/mapicon/user.jpg"/>\n\n     -->\n\n     <img class="pimg" src="{{pathForImage(lastImage)}}" (click)="chooseimg()"/>\n\n    <div class="upload-img" (click)="chooseimg()">\n\n        <ion-icon name="camera"></ion-icon>\n\n    </div>\n\n    <ion-footer [hidden]="fileopen == false">\n\n      <ion-toolbar color="primary">\n\n        <ion-buttons>\n\n          <button ion-button icon-left (click)="chooseimg()">\n\n            <ion-icon name="camera"></ion-icon>Change Image\n\n          </button>\n\n          <button ion-button icon-left (click)="uploadImage()" [disabled]="lastImage === null">\n\n            <ion-icon name="cloud-upload"></ion-icon>Upload\n\n          </button>\n\n        </ion-buttons>\n\n      </ion-toolbar>\n\n    </ion-footer>  \n\n    <form [formGroup]="form" (ngSubmit)="profileUpdate()" >\n\n      <!-- <ion-fab  right edge>\n\n          <button ion-fab  class="sign_btn" (click)="profileactive()" ><ion-icon name="create"></ion-icon></button>\n\n      </ion-fab> -->\n\n       \n\n      <ion-fab  right edge *ngIf="editProfile" style="margin-top: -14%">\n\n          <button ion-fab mini  class="sign_btn" (click)="profileactive()" ><ion-icon name="create"></ion-icon></button>\n\n      </ion-fab>\n\n      <ion-fab  right edge *ngIf="cancelProfile">\n\n          <button ion-fab  class="signbtn" (click)="profilecancel()" mini><ion-icon name="close"></ion-icon></button>\n\n      </ion-fab>\n\n      <ion-fab  right edge class="close" *ngIf="submitProfile">\n\n          <button ion-fab type="submit" class="sign_btn"  mini><ion-icon name="checkmark"></ion-icon></button>\n\n      </ion-fab>\n\n      <!-- <div style="margin-top:30px"> -->\n\n      <ion-item>\n\n        <ion-label ><ion-icon name="contact"></ion-icon> </ion-label>\n\n        <ion-input  disabled="{{isDisable}}" formControlName="username" placeholder="Username" focuser id="usersignup" type="text" [(ngModel)]="userData.username"></ion-input>\n\n       \n\n     </ion-item>\n\n     <div *ngIf="username.touched && username.invalid" class="alertstyle">\n\n       <div *ngIf="username.errors.required">Please provide a username</div>\n\n     </div>\n\n  \n\n      <ion-item>\n\n      <ion-label ><ion-icon name="ios-call"></ion-icon> </ion-label>\n\n      <ion-input  disabled="{{isDisable}}" formControlName="mobile" placeholder="Mobile" type="number" [(ngModel)]="userData.mobile"></ion-input>\n\n    </ion-item>\n\n    <div *ngIf="mobile.touched && mobile.invalid" class="alertstyle">\n\n      <div *ngIf="mobile.errors.required">Please provide a mobile no</div>\n\n    </div>\n\n  \n\n     <ion-item>\n\n       <ion-label ><ion-icon name="mail"></ion-icon> </ion-label>\n\n       <ion-input  disabled="{{isDisable}}" formControlName="mail" placeholder="Email" type="text" [(ngModel)]="userData.mail"></ion-input>\n\n     </ion-item>\n\n     <div *ngIf="mail.touched && mail.invalid" class="alertstyle">\n\n       <div *ngIf="mail.errors.required">Email is required</div>\n\n       <div *ngIf="mail.errors.email">Invaild email format</div>\n\n     </div>\n\n  \n\n    <ion-item>\n\n      <ion-label ><ion-icon name="ios-pin"></ion-icon></ion-label>\n\n      <ion-input  disabled="{{isDisable}}" formControlName="area" placeholder="Area" type="text"[(ngModel)]="userData.area"></ion-input>\n\n    </ion-item>\n\n    <div *ngIf="area.touched && area.invalid" class="alertstyle">\n\n      <div *ngIf="area.errors.required">Please provide a area</div>\n\n    </div> \n\n    <ion-item>\n\n      <ion-label ><ion-icon name="ios-pin"></ion-icon></ion-label>\n\n      <ion-input  disabled="{{isDisable}}" formControlName="city" placeholder="City" type="text"  [(ngModel)]="userData.city"></ion-input>\n\n    </ion-item>\n\n    <div *ngIf="city.touched && city.invalid" class="alertstyle">\n\n      <div *ngIf="city.errors.required">Please provide a city</div>\n\n    </div> \n\n    <ion-item>\n\n      <ion-label ><ion-icon name="ios-pin"></ion-icon></ion-label>\n\n      <ion-input  disabled="{{isDisable}}" formControlName="pincode" placeholder="Pincode" type="number"  [(ngModel)]="userData.pincode"></ion-input>\n\n    </ion-item>\n\n    <div *ngIf="pincode.touched && pincode.invalid" class="alertstyle">\n\n      <div *ngIf="pincode.errors.required">Please provide a pincode</div>\n\n    </div>   \n\n  <!-- </div> -->\n\n     <!-- <button ion-button type="submit" [disabled]="disable" class="sign_btn"   round full>Register</button> -->\n\n     </form> \n\n</ion-content>\n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefix\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// let apiUrl = 'http://sunrisetechs.com/sunapi/';
var apiUrl = 'http://rytefix.in/sunapi/';
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthServiceProvider = (function () {
    function AuthServiceProvider(http) {
        this.http = http;
        console.log('Hello AuthServiceProvider Provider');
    }
    AuthServiceProvider.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            //let options = new RequestOptions({headers:headers});
            _this.http.post(apiUrl + type, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.getData = function (type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //let options = new RequestOptions({headers:headers});
            _this.http.get(apiUrl + type)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.promocodevalid = function (data1) {
        var _this = this;
        console.log(data1);
        var type = "promoValid";
        var credentials = data1;
        //console.log(this.promoValid );
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            //let options = new RequestOptions({headers:headers});
            _this.http.post(apiUrl + type, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 142;

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invitefrd_invitefrd__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quotehistory_quotehistory__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__quotehistory_quotehistory__["a" /* QuotehistoryPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__invitefrd_invitefrd__["a" /* InvitefrdPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabs',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefix\src\pages\tabs\tabs.html"*/'<ion-tabs tabsPlacement= "bottom">\n\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n    <ion-tab [root]="tab2Root" tabTitle="My Booking" [tabBadge]= "3" tabIcon="md-albums"></ion-tab>\n\n    <ion-tab [root]="tab3Root" tabTitle="Refer & earn" tabIcon="md-cash"></ion-tab>\n\n  </ion-tabs>'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefix\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/changepass/changepass.module": [
		319,
		19
	],
	"../pages/contactus/contactus.module": [
		320,
		18
	],
	"../pages/editotherservicebooking/editotherservicebooking.module": [
		321,
		17
	],
	"../pages/editservicebooking/editservicebooking.module": [
		322,
		16
	],
	"../pages/faq/faq.module": [
		323,
		15
	],
	"../pages/introslider/introslider.module": [
		325,
		14
	],
	"../pages/invitefrd/invitefrd.module": [
		324,
		13
	],
	"../pages/login/login.module": [
		326,
		12
	],
	"../pages/otherservicebooking/otherservicebooking.module": [
		327,
		11
	],
	"../pages/profile/profile.module": [
		329,
		10
	],
	"../pages/quotehistory/quotehistory.module": [
		328,
		9
	],
	"../pages/quotemap/quotemap.module": [
		330,
		8
	],
	"../pages/quoteview/quoteview.module": [
		331,
		7
	],
	"../pages/redeem/redeem.module": [
		332,
		0
	],
	"../pages/register/register.module": [
		333,
		6
	],
	"../pages/servicebooking/servicebooking.module": [
		334,
		5
	],
	"../pages/tabs/tabs.module": [
		335,
		4
	],
	"../pages/vendorrating/vendorrating.module": [
		338,
		3
	],
	"../pages/viewaccept-quote/viewaccept-quote.module": [
		336,
		2
	],
	"../pages/wallet/wallet.module": [
		337,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 184;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicestateProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { HttpClient } from '@angular/common/http';



/*
  Generated class for the ServicestateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServicestateProvider = (function () {
    function ServicestateProvider(http) {
        this.http = http;
        this.url = 'http://rytefix.in/apitest';
        console.log('Hello ServicestateProvider Provider');
    }
    // http://rytefix.in/apitest/cusapi.php?action=cancelBooking&bid=3351&cancelreason=TestCancelbooking
    ServicestateProvider.prototype.cancelBooking = function (bid, reason) {
        console.log('bookingId', bid);
        console.log('reason', reason);
        return this.http.get("http://rytefix.in/apitest/cusapi.php?action=cancelBooking&bid=" + bid + "&cancelreason=" + reason)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    ServicestateProvider.prototype.reportproblem = function (vid, bid, reason) {
        // return this.http.get("http://rytefix.in/apitest/vendorapinew.php?action=newServiceDetails&vid="+userid)
        return this.http.get("http://rytefix.in/apitest/cusapi.php?action=cusReportProblem&vid=" + vid + "&bid=" + bid + "&reason=" + reason)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    ServicestateProvider.prototype.completeService = function (vid, bid) {
        return this.http.get("http://rytefix.in/apitest/cusapi.php?action=bookingCompleted&bid=" + bid + "&vid=" + vid)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    // http://sunrisetechs.com/api/cusapi.php?action=promoApply&cid=101&bid=121&pcode=Test
    ServicestateProvider.prototype.creditearns = function (cid) {
        return this.http.get("http://rytefix.in/apitest/cusapi.php?action=customerEarning&cid=" + cid)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    ServicestateProvider.prototype.promocode = function (cid, bid, pcode) {
        return this.http.get("http://rytefix.in/apitest/cusapi.php?action=promoApply&cid=" + cid + "&bid=" + bid + "&pcode=" + pcode)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    ServicestateProvider.prototype.Redeem = function (cid, bid) {
        console.log('cid', cid);
        console.log('bid', bid);
        return this.http.get(this.url + "/cusapi.php?action=redeemStatus&cid=" + cid + "&bid=" + bid)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    ServicestateProvider.prototype.verifyMobile = function (mobile) {
        console.log('mobile', mobile);
        return this.http.get('http://rytefix.in/apitest/cusapi.php?action=mobileVerify&mobile=' + mobile)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    ServicestateProvider.prototype.verifyMobileStatus = function (mobile) {
        console.log('mobile', mobile);
        return this.http.get('http://rytefix.in/apitest/verifyNumber.php', mobile)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    ServicestateProvider.prototype.referEarnings = function (data) {
        console.log(data);
        // let serverData = {userid:data};
        return this.http.post('http://rytefix.in/apitest/referrals.php', data)
            .map(function (res) {
            //  console.log(res.json());
            return res.json();
        });
    };
    ServicestateProvider.prototype.referEarningStatus = function (data) {
        console.log(data);
        // let serverData = {userid:data};
        return this.http.get('http://rytefix.in/apitest/updateapi.php?action=redeemURmoney&cid=' + data.userid + '&credits=' + data.credits)
            .map(function (res) {
            //  console.log(res.json());
            return res.json();
        });
    };
    ServicestateProvider.prototype.welcomeBonusRedeem = function (data) {
        console.log(data);
        // let serverData = {userid:data};
        return this.http.get('http://rytefix.in/apitest/updateapi.php?action=redeemWelcomeBonus&cid=' + data.userid + '&credits=' + data.credits)
            .map(function (res) {
            //  console.log(res.json());
            return res.json();
        });
    };
    ServicestateProvider.prototype.welcomeBonusStatus1 = function (data) {
        console.log(data);
        // let serverData = {userid:data};
        return this.http.post('http://rytefix.in/apitest/welcome_status1.php', data)
            .map(function (res) {
            //  console.log(res.json());
            return res.json();
        });
    };
    ServicestateProvider.prototype.welcomeBonusStatus2 = function (data) {
        console.log(data);
        // let serverData = {userid:data};
        return this.http.post('http://rytefix.in/apitest/welcome_status2.php', data)
            .map(function (res) {
            //  console.log(res.json());
            return res.json();
        });
    };
    ServicestateProvider.prototype.referEarningStatus1 = function (data) {
        console.log(data);
        // let serverData = {userid:data};
        return this.http.post('http://rytefix.in/apitest/referrals_redeem1.php', data)
            .map(function (res) {
            //  console.log(res.json());
            return res.json();
        });
    };
    ServicestateProvider.prototype.referEarningStatus2 = function (data) {
        console.log(data);
        // let serverData = {userid:data};
        return this.http.post('http://rytefix.in/apitest/referrals_redeem2.php', data)
            .map(function (res) {
            //  console.log(res.json());
            return res.json();
        });
    };
    ServicestateProvider.prototype.welcomeBonus = function (data) {
        console.log(data);
        // let serverData = {userid:data};
        return this.http.post('http://rytefix.in/apitest/referrals_welcome.php', data)
            .map(function (res) {
            //  console.log(res.json());
            return res.json();
        });
    };
    ServicestateProvider.prototype.vendorReview = function (data) {
        console.log(data);
        // let serverData = {userid:data};
        return this.http.post('http://rytefix.in/apitest/vendorreview.php', data)
            .map(function (res) {
            //  console.log(res.json());
            return res.json();
        });
    };
    ServicestateProvider.prototype.referAndEarnContent = function () {
        // 
        return this.http.get('http://rytefix.in/apitest/refer_n_earn_content.php')
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    ServicestateProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ServicestateProvider);
    return ServicestateProvider;
}());

//# sourceMappingURL=servicestate.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewacceptQuotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quoteview_quoteview__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the ViewacceptQuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewacceptQuotePage = (function () {
    function ViewacceptQuotePage(navCtrl, call, alertCtrl, toastCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.call = call;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.viewdata = this.navParams.get('data');
        console.log("problem", this.viewdata.hardService);
        console.log("viewdata", this.viewdata);
    }
    ViewacceptQuotePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewacceptQuotePage');
    };
    ViewacceptQuotePage.prototype.contactUs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.call.callNumber(this.viewdata.mobile, true)];
                    case 1:
                        _a.sent();
                        console.log("mobile no", this.viewdata.mobile);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ViewacceptQuotePage.prototype.declineQuote = function () {
        var _this = this;
        console.log('declineQuote');
        var prompt = this.alertCtrl.create({
            message: "Please describe the problem",
            inputs: [
                {
                    //type :'text',
                    name: 'reason',
                    placeholder: 'Reason for decline',
                    value: ""
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        // let validateObj = this.validate(data);
                        if (data.reason == "") {
                            var toast = _this.toastCtrl.create({
                                message: "Please enter the reason ",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            return false;
                        }
                        else {
                            var toast = _this.toastCtrl.create({
                                message: "Now you can accept other quotes",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            _this.gotoQuoteview();
                            //return false;
                        }
                    }
                }
            ]
        });
        prompt.present();
        // this.gotoQuoteview();
    };
    ViewacceptQuotePage.prototype.completeQuote = function () {
        var _this = this;
        console.log('declineQuote');
        var prompt = this.alertCtrl.create({
            message: "Service completed in service center and you paid for the service",
            buttons: [
                {
                    text: 'Yes',
                    handler: function (data) {
                        console.log('yes clicked');
                        var toast = _this.toastCtrl.create({
                            message: "Congratulations! You can use the credit",
                            duration: 3000,
                            position: 'bottom'
                        });
                        // this.btntext='Complete';     
                        toast.present();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                        //this.gotoQuoteview();
                        //return false;
                    }
                },
                {
                    text: 'No',
                    handler: function (data) {
                        alert(" Please pay for the service and then complete");
                        return true;
                    }
                }
            ]
        });
        prompt.present();
    };
    ViewacceptQuotePage.prototype.gotoQuoteview = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__quoteview_quoteview__["a" /* QuoteviewPage */]);
    };
    ViewacceptQuotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-viewaccept-quote',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefix\src\pages\viewaccept-quote\viewaccept-quote.html"*/'<!--\n\n  Generated template for the ViewacceptQuotePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n\n\n    <ion-toolbar no-padding>\n\n      <ion-title>Response Details</ion-title>\n\n    </ion-toolbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      <h4 class="text1">Booking Details</h4>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n        <ion-row>\n\n            <ion-col col-4 text-left>\n\n            <h5><b>Make</b></h5>\n\n        </ion-col>\n\n        <ion-col col-1><b>:</b></ion-col>\n\n        <ion-col col-7 text-left>\n\n            <h5> {{viewdata.make_name}}</h5>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n          <ion-col col-4 text-left>\n\n           <h5><b>Model</b></h5>\n\n       </ion-col>\n\n       <ion-col col-1><b>:</b></ion-col>\n\n       <ion-col col-7 text-left>\n\n           <h5>  {{viewdata.model}}</h5>\n\n       </ion-col>\n\n     </ion-row>\n\n     <ion-row>    \n\n       <ion-col col-4 text-left>\n\n           <h5><b>Problem</b></h5>\n\n       </ion-col>\n\n       <ion-col col-1><b>:</b></ion-col>\n\n       <ion-col col-7 text-left>\n\n         <p *ngIf="softService!=\'\'||hardServise !=\'\'||others !=\'\'">{{viewdata.softService}}{{viewdata.hardService}}{{viewdata.others}}</p>\n\n       </ion-col>\n\n     </ion-row>\n\n     <ion-row >\n\n            <ion-col col-4 text-left>\n\n           <h5><b>Pickup</b></h5>\n\n       </ion-col>\n\n       <ion-col col-1><b>:</b></ion-col>\n\n       <ion-col col-7 text-left>\n\n           <h5>   {{viewdata.pickup}}</h5>\n\n       </ion-col>\n\n     </ion-row>\n\n     <ion-row>   \n\n        <ion-col col-4 text-left>\n\n            <h5><b>Booking Date</b></h5>\n\n        </ion-col>\n\n        <ion-col col-1><b>:</b></ion-col>      \n\n  <ion-col col-7  text-left>\n\n  <h5>{{viewdata.posted_on}}</h5>\n\n         </ion-col>\n\n         </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n\n        <h4 class="text1">Assigned Vendor</h4>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-row>   \n\n          <ion-col col-4 text-left>\n\n              <h5><b>Name</b></h5>\n\n          </ion-col>\n\n          <ion-col col-1><b>:</b></ion-col>      \n\n    <ion-col col-7  text-left>\n\n    <h5>{{viewdata.username}}</h5>\n\n           </ion-col>\n\n           </ion-row>\n\n           <ion-row>   \n\n              <ion-col col-4 text-left>\n\n                  <h5><b>Area</b></h5>\n\n              </ion-col>\n\n              <ion-col col-1><b>:</b></ion-col>      \n\n        <ion-col col-7  text-left>\n\n        <h5>{{viewdata.area}}</h5>\n\n               </ion-col>\n\n               </ion-row>\n\n               <ion-row>   \n\n                  <ion-col col-4 text-left>\n\n                      <h5><b>Contact No</b></h5>\n\n                  </ion-col>\n\n                  <ion-col col-1><b>:</b></ion-col>      \n\n            <ion-col col-5 text-left>\n\n            <h5>{{viewdata.mobile}}</h5>\n\n                   </ion-col>\n\n                   <ion-col col-2>\n\n                      <button ion-button color="secondary" small round icon-only (click)="contactUs()"><ion-icon name="ios-call-outline"></ion-icon></button>\n\n                   </ion-col>\n\n                   </ion-row>\n\n                   <ion-row>\n\n                     <ion-col col-12 text-center>\n\n                       <h4  class="text2">Quotation Details</h4>\n\n                     </ion-col>\n\n                   </ion-row>\n\n                   <ion-row>\n\n                      <ion-col col-5 text-left>\n\n                       <b>  Original Spare Price</b>\n\n                      </ion-col>\n\n                      <ion-col col-1><b>:</b></ion-col>\n\n                      <ion-col col-6 text-left>\n\n                          {{viewdata.exactprice}}\n\n                      </ion-col>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                            <ion-col col-5 text-left>\n\n                             <b> Second Quality Price</b>\n\n                            </ion-col>\n\n                            <ion-col col-1><b>:</b></ion-col>\n\n                            <ion-col col-6 text-left>\n\n                                {{viewdata.second_quality_price}}\n\n                            </ion-col>\n\n                          </ion-row>\n\n                          <ion-row>\n\n                                <ion-col col-5 text-left>\n\n                                 <b> Time Required</b>\n\n                                </ion-col>\n\n                                <ion-col col-1><b>:</b></ion-col>\n\n                                <ion-col col-6 text-left>\n\n                                    {{viewdata.time_period}}\n\n                                </ion-col>\n\n                              </ion-row>\n\n                    <ion-row>\n\n                        <ion-col col-5 text-left>\n\n                         <b> Warranty</b>\n\n                        </ion-col>\n\n                        <ion-col col-1><b>:</b></ion-col>\n\n                        <ion-col col-6 text-left>\n\n                            {{viewdata.warranty}}\n\n                        </ion-col>\n\n                      </ion-row>\n\n                      <ion-row>\n\n                            <ion-col col-5 text-left>\n\n                             <b> Home Pick Up</b>\n\n                            </ion-col>\n\n                            <ion-col col-1><b>:</b></ion-col>\n\n                            <ion-col col-6 text-left>\n\n                                {{viewdata.pickup_type}}\n\n                            </ion-col>\n\n                          </ion-row>\n\n                      <ion-row>\n\n                          <ion-col col-5 text-left>\n\n                           <b> Description</b>\n\n                          </ion-col>\n\n                          <ion-col col-1><b>:</b></ion-col>\n\n                          <ion-col col-6 text-left>\n\n                              {{viewdata.description}}\n\n                          </ion-col>\n\n                        </ion-row>\n\n                        <ion-row>\n\n                            <ion-col col-5 text-left>\n\n                             <b> Expires In</b>\n\n                            </ion-col>\n\n                            <ion-col col-1><b>:</b></ion-col>\n\n                            <ion-col col-6 text-left>\n\n                              \n\n                            </ion-col>\n\n                          </ion-row> \n\n                          <!-- <ion-row>-->\n\n                              <!-- <ion-col col-2></ion-col> -->\n\n                                <!-- <ion-col col-6> -->\n\n                                  <button ion-button color="secondary" (click)="completeQuote()" block>Complete the service</button>\n\n                                <!-- </ion-col> -->\n\n                                <!-- <ion-col col-2></ion-col> -->\n\n                                <!-- <ion-col col-6> -->\n\n                                    <button ion-button color="dark" (click)="declineQuote()" block>Report the problem</button>\n\n                                  <!-- </ion-col> -->\n\n                                  <!-- <ion-col col-2></ion-col> -->\n\n                              <!-- </ion-row> -->\n\n    </ion-card-content>\n\n  </ion-card>\n\n  \n\n  \n\n    </ion-content> \n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefix\src\pages\viewaccept-quote\viewaccept-quote.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ViewacceptQuotePage);
    return ViewacceptQuotePage;
}());

//# sourceMappingURL=viewaccept-quote.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(264);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__changepass_changepass__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tabs_tabs__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_servicestate_servicestate__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__quotehistory_quotehistory__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, transfer, file, alertCtrl, menuCtrl, loadingCtrl, navParams, toastCtrl, AuthServiceProvider, http, serviceState) {
        this.navCtrl = navCtrl;
        this.transfer = transfer;
        this.file = file;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.AuthServiceProvider = AuthServiceProvider;
        this.http = http;
        this.serviceState = serviceState;
        this.pushData = { "deviceId": "", "message": "Thanks Your booking is received will be processed within 24 hours" };
        this.form = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            mobile: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            pass: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required)
        });
        this.form1 = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            mobile1: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required)
        });
        this.form2 = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            otp: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required)
        });
        this.forgotData = { "mobile1": "" };
        this.otpData = { "otp": "" };
        this.loginData = { "mobile": "", "pass": "", "deviceId": "" };
        this.forgotMobile = false;
        this.loginscreen = true;
        this.otpverify = false;
        this.loginData.deviceId = localStorage.getItem('deviceID');
        console.log('device ID = ', this.loginData.deviceId);
        this.pushData.deviceId = this.loginData.deviceId;
        this.loggedService();
        this.menuCtrl.swipeEnable(false);
    }
    LoginPage_1 = LoginPage;
    Object.defineProperty(LoginPage.prototype, "mobile", {
        get: function () {
            return this.form.get('mobile');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginPage.prototype, "pass", {
        get: function () {
            return this.form.get('pass');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginPage.prototype, "mobile1", {
        get: function () {
            return this.form1.get('mobile1');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginPage.prototype, "otp", {
        get: function () {
            return this.form2.get('otp');
        },
        enumerable: true,
        configurable: true
    });
    LoginPage.prototype.verifyMobile = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'verify',
                    handler: function (data) {
                        if (data.mobile != '') {
                            var mobile = { mobile: data.mobile };
                            _this.serviceState.verifyMobile(data.mobile).subscribe(function (data) {
                                if (data.status == "success") {
                                    var alert_1 = _this.alertCtrl.create({
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
                                                handler: function (data) {
                                                    console.log('Cancel clicked');
                                                }
                                            },
                                            {
                                                text: 'Verify',
                                                handler: function (otpdata) {
                                                    if (otpdata.OTP == data.otp) {
                                                        var toast = _this.toastCtrl.create({
                                                            message: 'Mobile number verified successfully!',
                                                            duration: 3000,
                                                            position: 'bottom'
                                                        });
                                                        toast.present();
                                                        _this.navCtrl.setRoot(LoginPage_1);
                                                    }
                                                    else {
                                                        var toast = _this.toastCtrl.create({
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
                                    alert_1.present();
                                }
                                console.log(data);
                            }), function (error) {
                                console.log(error);
                            };
                        }
                        else {
                            var toast = _this.toastCtrl.create({
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
    };
    LoginPage.prototype.loggedService = function () {
        var _this = this;
        if (localStorage.getItem('imageList')) {
            this.imgData = JSON.parse(localStorage.getItem('imageList'));
        }
        if (localStorage.getItem('audiolist')) {
            this.audioData = JSON.parse(localStorage.getItem('audiolist'));
        }
        var toast = this.toastCtrl.create({
            message: 'Service book successfully',
            duration: 3000,
            position: 'bottom'
        });
        var toast1 = this.toastCtrl.create({
            message: 'Service notbook successfully',
            duration: 3000,
            position: 'bottom'
        });
        var loader = this.loadingCtrl.create({ content: "booking service.." });
        if (localStorage.getItem("loggedData")) {
            var loggedid = JSON.parse(localStorage.getItem("loggedData"));
            console.log("logged Data", loggedid);
            if (localStorage.getItem('serviceBooking')) {
                var loggedData = JSON.parse(localStorage.getItem('serviceBooking'));
                console.log("BookingData", loggedData);
                loader.present();
                //let loggedData=this.jsonConcat(service, logged);
                //  if(loggedData['image']==""){loggedData['image']="user_avatar.png";}
                loggedData['id'] = loggedid[0].id;
                loggedData['username'] = loggedid[0].username;
                loggedData['email'] = loggedid[0].email;
                loggedData['gadget'] = localStorage.getItem('gadget');
                console.log(loggedData);
                this.AuthServiceProvider.postData(loggedData, 'serLogged').then(function (result) {
                    console.log(result);
                    _this.responseData = result;
                    if (_this.responseData.status == true) {
                        // toast.present();
                        loader.dismiss();
                        if (JSON.parse(localStorage.getItem('serviceBooking'))['image']) {
                            if (JSON.parse(localStorage.getItem('serviceBooking'))['image'] == JSON.parse(localStorage.getItem("loggedData"))['image']) { }
                            else {
                                _this.uploadFile();
                            }
                        }
                        if (JSON.parse(localStorage.getItem('serviceBooking'))['audio']) {
                            _this.uploadAudio();
                        }
                        // this.push(this.pushData);  
                        if (_this.responseData.msg) {
                            _this.bookingComplete(_this.responseData.msg);
                        }
                        else {
                            _this.bookingComplete1();
                        }
                    }
                    else {
                        toast1.present();
                    }
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__tabs_tabs__["a" /* TabsPage */]);
                });
            }
            else if (localStorage.getItem('serviceBooking1')) {
                var loggedData = JSON.parse(localStorage.getItem('serviceBooking1'));
                //let loggedData=this.jsonConcat(service, logged);
                // if(loggedData['image']==""){loggedData['image']="user_avatar.png";}
                loggedData['id'] = loggedid[0].id;
                loggedData['username'] = loggedid[0].username;
                loggedData['email'] = loggedid[0].email;
                loggedData['gadget'] = localStorage.getItem('gadget');
                console.log(loggedData);
                this.AuthServiceProvider.postData(loggedData, 'ser1Logged').then(function (result) {
                    console.log(result);
                    _this.responseData = result;
                    if (_this.responseData.status == true) {
                        // toast.present();
                        //  this.push(this.pushData);
                        if (JSON.parse(localStorage.getItem('serviceBooking1'))['image']) {
                            if (JSON.parse(localStorage.getItem('serviceBooking1'))['image'] == JSON.parse(localStorage.getItem("loggedData"))['image']) { }
                            else {
                                _this.uploadFile();
                            }
                        }
                        if (JSON.parse(localStorage.getItem('serviceBooking1'))['audio']) {
                            _this.uploadAudio();
                        }
                        if (_this.responseData.msg) {
                            _this.bookingComplete(_this.responseData.msg);
                        }
                        else {
                            _this.bookingComplete1();
                        }
                    }
                    else {
                        toast1.present();
                    }
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__tabs_tabs__["a" /* TabsPage */]);
                });
            }
        }
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.push = function (data) {
        console.log("pushData", data);
        this.http.post('http://rytefix.in/sunapi/push.php', data).subscribe(function (result) {
            // this.responseData = result;
            console.log(result);
        }, function (err) {
            console.log(err);
        });
    };
    LoginPage.prototype.forgotPass = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
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
        this.AuthServiceProvider.postData(this.forgotData, 'forgotPass').then(function (result) {
            console.log(result);
            _this.responsedata = result;
            if (_this.responsedata.status == true) {
                //toast.present();
                _this.otpverify = true;
                _this.forgotMobile = false;
                _this.loginscreen = false;
            }
            else {
                alert.present();
                _this.otpverify = false;
                _this.forgotMobile = true;
                _this.loginscreen = false;
            }
        });
    };
    LoginPage.prototype.jsonConcat = function (o1, o2) {
        for (var key in o2) {
            o1[key] = o2[key];
        }
        return o1;
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: 'Login successfully',
            duration: 3000,
            position: 'bottom'
        });
        var toast1 = this.toastCtrl.create({
            message: 'Invalid username & password',
            duration: 3000,
            position: 'bottom'
        });
        var loader = this.loadingCtrl.create({ content: "Please wait.." });
        loader.present();
        console.log(this.loginData);
        if (localStorage.getItem('serviceBooking')) {
            var service = JSON.parse(localStorage.getItem('serviceBooking'));
            console.log("bookingDetails", service);
            var serviceUser = this.jsonConcat(service, this.loginData);
            serviceUser['gadget'] = localStorage.getItem('gadget');
            this.AuthServiceProvider.postData(serviceUser, 'serLogin').then(function (result) {
                _this.responsedata = result;
                if (_this.responsedata.status == true) {
                    loader.dismiss();
                    localStorage.setItem('loggedData', JSON.stringify(_this.responsedata.data));
                    //toast.present();
                    if (JSON.parse(localStorage.getItem('serviceBooking'))['image']) {
                        _this.uploadFile();
                    }
                    if (JSON.parse(localStorage.getItem('serviceBooking'))['audio']) {
                        _this.uploadAudio();
                    }
                    console.log(_this.responsedata);
                    if (_this.responsedata.msg) {
                        _this.bookingComplete(_this.responsedata.msg);
                    }
                    else {
                        _this.bookingComplete1();
                    }
                }
                else {
                    loader.dismiss();
                    toast1.present();
                }
            });
        }
        else if (localStorage.getItem('serviceBooking1')) {
            var service = JSON.parse(localStorage.getItem('serviceBooking1'));
            var serviceUser = this.jsonConcat(service, this.loginData);
            serviceUser['gadget'] = localStorage.getItem('gadget');
            // if(serviceUser['image']==""){serviceUser['image']="user_avatar.png";}
            this.AuthServiceProvider.postData(serviceUser, 'ser1Login').then(function (result) {
                _this.responsedata = result;
                if (_this.responsedata.status == true) {
                    loader.dismiss();
                    localStorage.setItem('loggedData', JSON.stringify(_this.responsedata.data));
                    console.log(result);
                    //toast.present();
                    console.log("image:" + JSON.parse(localStorage.getItem('serviceBooking1')).image);
                    console.log("audio:" + JSON.parse(localStorage.getItem('serviceBooking1')).audio);
                    console.log("image:" + JSON.parse(localStorage.getItem('serviceBooking1'))['image']);
                    console.log("audio:" + JSON.parse(localStorage.getItem('serviceBooking1'))['audio']);
                    if (JSON.parse(localStorage.getItem('serviceBooking1'))['image']) {
                        _this.uploadFile();
                    }
                    if (JSON.parse(localStorage.getItem('serviceBooking1'))['audio']) {
                        _this.uploadAudio();
                    }
                    if (_this.responsedata.msg) {
                        _this.bookingComplete(_this.responsedata.msg);
                    }
                    else {
                        _this.bookingComplete1();
                    }
                }
                else {
                    loader.dismiss();
                    toast1.present();
                }
            });
        }
        else if (localStorage.getItem('serviceBooking') == "" || localStorage.getItem('serviceBooking1') == "") {
            this.AuthServiceProvider.postData(this.loginData, 'Login').then(function (result) {
                _this.responsedata = result;
                if (_this.responsedata.status == true) {
                    loader.dismiss();
                    localStorage.setItem('loggedData', JSON.stringify(_this.responsedata.data));
                    console.log(result);
                    toast.present();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__tabs_tabs__["a" /* TabsPage */]);
                }
                else {
                    loader.dismiss();
                    toast1.present();
                }
            });
        }
        else {
            this.AuthServiceProvider.postData(this.loginData, 'Login').then(function (result) {
                _this.responsedata = result;
                if (_this.responsedata.status == true) {
                    loader.dismiss();
                    localStorage.setItem('loggedData', JSON.stringify(_this.responsedata.data));
                    console.log(result);
                    toast.present();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__tabs_tabs__["a" /* TabsPage */]);
                }
                else {
                    loader.dismiss();
                    toast1.present();
                }
            });
        }
    };
    LoginPage.prototype.bookingComplete1 = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Service Booking',
            message: 'Service booking submitted successfully! within 24 hours you will get response from rytefix partner.',
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        console.log('Buy clicked');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__quotehistory_quotehistory__["a" /* QuotehistoryPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    LoginPage.prototype.bookingComplete = function (data) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Service Booking',
            message: 'Service booking submitted successfully! within 24 hours you will get response from rytefix partner.',
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        console.log('Buy clicked');
                        if (data) {
                            _this.promo(data);
                        }
                        else {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__quotehistory_quotehistory__["a" /* QuotehistoryPage */]);
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    LoginPage.prototype.promo = function (data) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Promo Status',
            message: data,
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        console.log('Buy clicked');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__tabs_tabs__["a" /* TabsPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    LoginPage.prototype.reg = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.forgot = function () {
        this.forgotMobile = true;
        this.loginscreen = false;
        this.otpverify = false;
    };
    LoginPage.prototype.otpVerify = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: 'OTP verified successfully',
            duration: 3000,
            position: 'bottom'
        });
        var toast1 = this.toastCtrl.create({
            message: 'Invalid OTP',
            duration: 3000,
            position: 'bottom'
        });
        console.log(this.otpData);
        if (localStorage.getItem("loggedData")) {
            var logged = JSON.parse(localStorage.getItem("loggedData"));
            // let otpverify=this.jsonConcat(this.otpData, logged);
            logged[0]['otp'] = this.otpData['otp'];
            console.log(logged);
            this.AuthServiceProvider.postData(logged[0], 'otpVerify').then(function (result) {
                _this.responsedata = result;
                if (_this.responsedata.status == true) {
                    toast.present();
                    localStorage.setItem('loggedData', JSON.stringify(_this.responsedata.data));
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__tabs_tabs__["a" /* TabsPage */]);
                }
                else {
                    toast1.present();
                }
                // this.makedropdown=result;
                //  console.log(this.makedropdown );
            });
        }
        else {
            console.log(this.otpData['otp']);
            //      delete this.responsedata.data['otp'];
            //    delete this.responsedata.data['otp'];
            console.log(this.responsedata);
            console.log(this.responsedata.data);
            this.responsedata.data[0]['otp'] = this.otpData['otp'];
            var otpdata_1 = this.responsedata.data;
            console.log(otpdata_1);
            //let otpverify=this.jsonConcat(this.otpData, this.responsedata.data);
            this.AuthServiceProvider.postData(otpdata_1[0], 'otpVerify').then(function (result) {
                4;
                _this.responsedata = result;
                if (_this.responsedata.status == true) {
                    toast.present();
                    localStorage.setItem('loggedData', JSON.stringify(otpdata_1));
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__changepass_changepass__["a" /* ChangepassPage */]);
                }
                else {
                    toast1.present();
                }
            });
        }
    };
    LoginPage.prototype.uploadAudio = function () {
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: "file",
            fileName: this.audioData[0]['filename'],
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: { 'fileName': this.audioData[0]['filename'] }
        };
        console.log('filepath', this.audioData[0]['filePath']);
        console.log('filename', this.audioData[0]['filename']);
        // console.log("userid",this.userid);
        //  fileTransfer.upload('<file path>', '<api endpoint>', options)
        fileTransfer.upload(this.audioData[0]['filePath'], 'http://rytefix.in/images/audio.php', options)
            .then(function (data) {
            console.log(data);
        }, function (err) {
            // error
            console.log(err);
            alert('error');
        });
    };
    LoginPage.prototype.uploadFile = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        //  loader.present();
        var fileTransfer = this.transfer.create();
        console.log('image name', this.imgData['imgfilename']);
        var options = {
            fileKey: 'file',
            fileName: this.imgData['imgfilename'],
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {},
            params: { 'fileName': this.imgData['imgfilename'] }
        };
        fileTransfer.upload(this.imgData['imgfilePath'], 'http://rytefix.in/images/image.php', options)
            .then(function (data) {
            console.log(data + " Uploaded Successfully");
            //    loader.dismiss();
            // this.presentToast("Image uploaded successfully");
        }, function (err) {
            console.log(err);
            loader.dismiss();
            _this.presentToast(err);
        });
    };
    LoginPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        // toast.present();
    };
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefix\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding *ngIf="loginscreen" class="content">\n\n    <img class="logo" src="assets/imgs/logo.png"> \n\n    <p class="text">Rytefix</p>\n\n  <form [formGroup]="form" (ngSubmit)="login()" >\n\n  \n\n\n\n    <ion-item>\n\n  <ion-label> <ion-icon name="ios-call"></ion-icon> </ion-label>\n\n    <ion-input formControlName="mobile" type="number" [(ngModel)]="loginData.mobile" placeholder="Mobile"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label> <ion-icon name="lock"></ion-icon> </ion-label>\n\n    <ion-input formControlName="pass" type="password" [(ngModel)]="loginData.pass" placeholder="Password"></ion-input>\n\n  </ion-item>\n\n  \n\n   <button ion-button type="submit"  class="sign_btn"   round full>Login</button>\n\n   </form> \n\n   <ion-row style="margin-top: 20px">\n\n    <ion-col col-12 text-center>\n\n       <a href="#" (click)="forgot()" class="frpw">Forgot Password</a>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row style="margin-top: 30px">\n\n      <ion-col col-12 text-center>\n\n          <b class="color-wh">New to Rytefix ?</b><a href="#" (click)="reg()" class="register"> SIGN UP</a>\n\n      </ion-col>\n\n    </ion-row>\n\n   <!-- <a href="#" (click)="reg()">Register</a>\n\n   <a href="#" (click)="forgot()">Forgot password</a> -->\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n<ion-content padding  *ngIf="forgotMobile" class="content" >\n\n  <h5 class="color-wh" text-center><b>OTP Verification</b></h5>\n\n  <form [formGroup]="form1" (ngSubmit)="forgotPass()" >\n\n\n\n  <ion-item style="margin-top:80px">\n\n    <ion-label>   <ion-icon name="lock"></ion-icon> </ion-label>\n\n    <ion-input formControlName="mobile1" type="number" [(ngModel)]="forgotData.mobile1" placeholder="Mobile"></ion-input>\n\n  </ion-item>\n\n  \n\n   <button ion-button type="submit"  class="sign_btn"   round full>Verify</button>\n\n   </form> \n\n</ion-content> \n\n\n\n\n\n\n\n\n\n<ion-content padding  *ngIf="otpverify" class="content">\n\n    <h5 class="color-wh" text-center><b>OTP Verification</b></h5>\n\n  <form [formGroup]="form2" (ngSubmit)="otpVerify()" >\n\n\n\n  <ion-item style="margin-top:80px">\n\n    <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n\n    <ion-input formControlName="otp" type="text" [(ngModel)]="otpData.otp" placeholder="OTP"></ion-input>\n\n  </ion-item>\n\n  \n\n   <button ion-button type="submit"  class="sign_btn"   round full>Verify</button>\n\n   </form> \n\n</ion-content> '/*ion-inline-end:"N:\ionicprojects\rytefix\rytefix\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_10__providers_servicestate_servicestate__["a" /* ServicestateProvider */]])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_servicebooking_servicebooking__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_quotehistory_quotehistory__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_quoteview_quoteview__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_quotemap_quotemap__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_faq_faq__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_contactus_contactus__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_changepass_changepass__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_invitefrd_invitefrd__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_profile_profile__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_viewaccept_quote_viewaccept_quote__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_auth_service_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ionic_select_searchable__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_ionic_select_searchable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_call_number__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_geolocation__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_introslider_introslider__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_facebook__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_app_rate__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_header_color__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_wallet_wallet__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_email_composer__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_media__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_file__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_file_transfer__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_file_path__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_camera__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_add_data_add_data__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_push__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_servicestate_servicestate__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_editservicebooking_editservicebooking__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_social_sharing__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_badge__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_google_analytics__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_vendorrating_vendorrating__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_ionic2_rating__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_android_permissions__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ionic_native_device__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_app_update__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_otherservicebooking_otherservicebooking__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ionic_native_date_picker__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_editotherservicebooking_editotherservicebooking__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























//import { UniqueDeviceID } from '@ionic-native/unique-device-id';





























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_servicebooking_servicebooking__["a" /* ServicebookingPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_quotehistory_quotehistory__["a" /* QuotehistoryPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_quotemap_quotemap__["a" /* QuotemapPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_faq_faq__["a" /* FaqPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_viewaccept_quote_viewaccept_quote__["a" /* ViewacceptQuotePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contactus_contactus__["a" /* ContactusPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_changepass_changepass__["a" /* ChangepassPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_invitefrd_invitefrd__["a" /* InvitefrdPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_quoteview_quoteview__["a" /* QuoteviewPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_introslider_introslider__["a" /* IntrosliderPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_wallet_wallet__["a" /* WalletPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_editservicebooking_editservicebooking__["a" /* EditservicebookingPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_vendorrating_vendorrating__["a" /* VendorratingPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_otherservicebooking_otherservicebooking__["a" /* OtherservicebookingPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_editotherservicebooking_editotherservicebooking__["a" /* EditotherservicebookingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_23_ionic_select_searchable__["SelectSearchableModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/changepass/changepass.module#ChangepassPageModule', name: 'ChangepassPage', segment: 'changepass', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contactus/contactus.module#ContactusPageModule', name: 'ContactusPage', segment: 'contactus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editotherservicebooking/editotherservicebooking.module#EditotherservicebookingPageModule', name: 'EditotherservicebookingPage', segment: 'editotherservicebooking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editservicebooking/editservicebooking.module#EditservicebookingPageModule', name: 'EditservicebookingPage', segment: 'editservicebooking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faq/faq.module#FaqPageModule', name: 'FaqPage', segment: 'faq', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invitefrd/invitefrd.module#InvitefrdPageModule', name: 'InvitefrdPage', segment: 'invitefrd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/introslider/introslider.module#IntrosliderPageModule', name: 'IntrosliderPage', segment: 'introslider', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/otherservicebooking/otherservicebooking.module#OtherservicebookingPageModule', name: 'OtherservicebookingPage', segment: 'otherservicebooking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quotehistory/quotehistory.module#QuotehistoryPageModule', name: 'QuotehistoryPage', segment: 'quotehistory', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quotemap/quotemap.module#QuotemapPageModule', name: 'QuotemapPage', segment: 'quotemap', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quoteview/quoteview.module#QuoteviewPageModule', name: 'QuoteviewPage', segment: 'quoteview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/redeem/redeem.module#RedeemPageModule', name: 'RedeemPage', segment: 'redeem', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/servicebooking/servicebooking.module#ServicebookingPageModule', name: 'ServicebookingPage', segment: 'servicebooking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewaccept-quote/viewaccept-quote.module#ViewacceptQuotePageModule', name: 'ViewacceptQuotePage', segment: 'viewaccept-quote', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet/wallet.module#WalletPageModule', name: 'WalletPage', segment: 'wallet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vendorrating/vendorrating.module#VendorratingPageModule', name: 'VendorratingPage', segment: 'vendorrating', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_45_ionic2_rating__["a" /* Ionic2RatingModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_servicebooking_servicebooking__["a" /* ServicebookingPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_viewaccept_quote_viewaccept_quote__["a" /* ViewacceptQuotePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_faq_faq__["a" /* FaqPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contactus_contactus__["a" /* ContactusPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_changepass_changepass__["a" /* ChangepassPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_invitefrd_invitefrd__["a" /* InvitefrdPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_quotehistory_quotehistory__["a" /* QuotehistoryPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_quoteview_quoteview__["a" /* QuoteviewPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_quotemap_quotemap__["a" /* QuotemapPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_introslider_introslider__["a" /* IntrosliderPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_wallet_wallet__["a" /* WalletPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_editservicebooking_editservicebooking__["a" /* EditservicebookingPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_vendorrating_vendorrating__["a" /* VendorratingPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_otherservicebooking_otherservicebooking__["a" /* OtherservicebookingPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_editotherservicebooking_editotherservicebooking__["a" /* EditotherservicebookingPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_38__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_media__["a" /* Media */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_34__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_35__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_social_sharing__["a" /* SocialSharing */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_22__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_37__providers_add_data_add_data__["a" /* AddDataProvider */],
                __WEBPACK_IMPORTED_MODULE_39__providers_servicestate_servicestate__["a" /* ServicestateProvider */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_app_rate__["a" /* AppRate */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_header_color__["a" /* HeaderColor */],
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_badge__["a" /* Badge */],
                __WEBPACK_IMPORTED_MODULE_43__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
                __WEBPACK_IMPORTED_MODULE_46__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                __WEBPACK_IMPORTED_MODULE_47__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_48__ionic_native_app_update__["a" /* AppUpdate */],
                __WEBPACK_IMPORTED_MODULE_50__ionic_native_date_picker__["a" /* DatePicker */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotehistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quoteview_quoteview__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editservicebooking_editservicebooking__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_servicestate_servicestate__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_badge__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the QuotehistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuotehistoryPage = (function () {
    function QuotehistoryPage(navCtrl, navParams, AuthServiceProvider, alertCtrl, serviceState, badge) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AuthServiceProvider = AuthServiceProvider;
        this.alertCtrl = alertCtrl;
        this.serviceState = serviceState;
        this.badge = badge;
        this.badge.clear();
    }
    QuotehistoryPage.prototype.jsonConcat = function (o1, o2) {
        for (var key in o2) {
            o1[key] = o2[key];
        }
        return o1;
    };
    QuotehistoryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad QuotehistoryPage');
        if (localStorage.getItem("loggedData")) {
            var logged = JSON.parse(localStorage.getItem("loggedData"));
            console.log(logged);
            this.AuthServiceProvider.postData(logged[0], 'quoteHistory').then(function (result) {
                console.log(result);
                _this.quoteHistory = result;
                console.log("quotehistory", result);
                console.log("id", _this.quoteHistory.id);
                // this.navCtrl.setRoot(HomePage);
            });
        }
    };
    QuotehistoryPage.prototype.refresh = function () {
        this.navCtrl.push(this.navCtrl.getActive().component);
        console.log("refresh");
    };
    QuotehistoryPage.prototype.quoteShow = function (book_id) {
        console.log(book_id);
        var service = JSON.parse(localStorage.getItem('loggedData'));
        service[0]['book_id'] = book_id;
        console.log(service);
        localStorage.setItem('loggedData', JSON.stringify(service));
        console.log(JSON.parse(localStorage.getItem('loggedData')));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__quoteview_quoteview__["a" /* QuoteviewPage */]);
    };
    QuotehistoryPage.prototype.ServiceCancel = function (cancel_id) {
        var _this = this;
        console.log(cancel_id);
        var alerts = this.alertCtrl.create({
            title: 'Cancel Booking',
            inputs: [
                {
                    name: 'reason',
                    placeholder: 'enter the reason'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'OK',
                    handler: function (data) {
                        if (data.reason == "") {
                            alert('please enter the reason !');
                            return false;
                        }
                        else {
                            _this.serviceState.cancelBooking(cancel_id, data.reason).subscribe(function (data) {
                                console.log(data);
                            }), function (error) {
                                console.log(error);
                            };
                            _this.AuthServiceProvider.postData(cancel_id, 'serviceCancel').then(function (result) {
                                _this.responsedata = result;
                                if (_this.responsedata.status == true) {
                                    _this.refresh();
                                    alert("Service cancelled successfully");
                                }
                                else {
                                }
                            });
                            return true;
                        }
                    }
                }
            ]
        });
        alerts.present();
    };
    QuotehistoryPage.prototype.editBooking = function (book_id, gadget) {
        var data = { booking_id: book_id, gadget: gadget };
        console.log(data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__editservicebooking_editservicebooking__["a" /* EditservicebookingPage */], { item: data });
    };
    QuotehistoryPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        if (localStorage.getItem("loggedData")) {
            var logged = JSON.parse(localStorage.getItem("loggedData"));
            console.log(logged);
            this.AuthServiceProvider.postData(logged[0], 'quoteHistory').then(function (result) {
                console.log(result);
                _this.quoteHistory = result;
                console.log("quotehistory", result);
                console.log("id", _this.quoteHistory.id);
                // this.navCtrl.setRoot(HomePage);
            });
        }
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    QuotehistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-quotehistory',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefix\src\pages\quotehistory\quotehistory.html"*/'<ion-header no-border>\n\n\n\n  <ion-toolbar no-padding>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu" class="color-wh"></ion-icon>\n\n      </button>\n\n    <ion-title>Booking History</ion-title>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="content">\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content\n\n        pullingText="Pull to refresh"\n\n        refreshingSpinner="circles"\n\n        refreshingText="Refreshing...">\n\n          </ion-refresher-content>\n\n                          </ion-refresher>\n\n      \n\n  <ion-list>\n\n    <ion-item *ngFor="let item of quoteHistory">\n\n\n\n        <ion-row *ngIf="item.gadget">\n\n            <ion-col col-5 text-left>\n\n             <b>Service</b>\n\n            </ion-col>\n\n            <ion-col col-1><b>:</b></ion-col>\n\n            <ion-col col-6 text-left>\n\n                <p>   {{item.gadget}}</p>\n\n            </ion-col>\n\n          </ion-row>\n\n            <ion-row *ngIf="item.make" >\n\n                    <ion-col col-5 text-left>\n\n                     <!-- <b *ngIf = \'item.gadget =="tv_printer_AC_others"\'>Service</b> -->\n\n                     <b>Make</b>\n\n\n\n                    </ion-col>\n\n                    <ion-col col-1><b>:</b></ion-col>\n\n                    <ion-col col-4 text-left>\n\n                        <p>  {{item.make_name}}</p><p *ngIf="item.make_name==null">{{item.make}}</p>\n\n                    </ion-col>\n\n                    <!-- <ion-col col-2  *ngIf="(item.cancel_status!=1||item.cancel_status!=2) && (item.customer_completed==0)" style="margin-top:-2%" >\n\n                        <button ion-button  [disabled]="item.accept_status" [hidden]="item.booking_id||item.cancel_status"class="edit" small round (click)="editBooking(item.book_id,item.gadget)" icon-only><ion-icon name="md-create"></ion-icon></button>\n\n                    </ion-col> -->\n\n                  </ion-row>\n\n                  <ion-row *ngIf="item.model">\n\n                        <ion-col col-5 text-left>\n\n                         <b>Model</b>\n\n                        </ion-col>\n\n                        <ion-col col-1><b>:</b></ion-col>\n\n                        <ion-col col-6 text-left>\n\n                            <p>   {{item.model}}</p>\n\n                        </ion-col>\n\n                      </ion-row>\n\n                      <ion-row>\n\n                          <ion-col col-5 text-left>\n\n                           <b> Booking Date</b>\n\n                          </ion-col>\n\n                          <ion-col col-1><b>:</b></ion-col>\n\n                          <ion-col col-6 text-left>\n\n                             <p> {{item.posted_on}}</p>\n\n                          </ion-col>\n\n                        </ion-row>\n\n\n\n                        <ion-row>\n\n                          <ion-col col-5 text-left>\n\n                           <b>Status</b>\n\n                          </ion-col>\n\n                          <ion-col col-1><b>:</b></ion-col>\n\n                          <ion-col col-6 text-left>\n\n                             \n\n                            <div *ngIf="!item.cancel_status">\n\n                              <p *ngIf="(!item.id||!item.accept_status||item.accept_status==1)&&(item.customer_completed==0)"> <span class="color1">In-progress</span></p>\n\n                              <!-- <p *ngIf="item.accept_status==1">In-progress</p> -->\n\n                             \n\n                              \n\n                            </div>\n\n                            <div *ngIf="(item.cancel_status==1||item.cancel_status==2) && (item.customer_completed==0)"><span class="color4">Booking Cancelled</span></div>\n\n                            <p *ngIf="(item.cancel_status==3) && (item.customer_completed==0)"><span class="color4">Cancel Request Sent</span></p>\n\n                            <div *ngIf="item.customer_completed==1"><span class="color3">Service completed</span></div>\n\n                          </ion-col>\n\n                        </ion-row>\n\n                        <div class="btn-group">\n\n                          <ion-row>\n\n                            <!-- <ion-col col-6 text-center>\n\n                                <button ion-button color="primary" full [disabled]="!item.booking_id||!item.accept_status" round class="button" small (click)="quoteShow(item.book_id)">Quotes</button>\n\n                            </ion-col> -->\n\n                            <ion-col col-6 text-center>\n\n                              <button ion-button color="primary" full round class="button" small (click)="quoteShow(item.book_id)">Quotes</button>\n\n                          </ion-col>\n\n                            <!-- <ion-col col-3 text-center>\n\n                              <button ion-button color="primary" [disabled]="item.id" class="edit" small (click)="editBooking(item.book_id,item.gadget)" icon-only>Edit</button>\n\n                            </ion-col> -->\n\n                              <ion-col col-6 text-center  *ngIf="(item.cancel_status!=1||item.cancel_status!=2) && (item.customer_completed==0)">\n\n                                  <button ion-button  [hidden]="item.cancel_status" full class="danger" round small (click)="ServiceCancel(item.book_id)" >Cancel Booking</button>\n\n                              </ion-col>\n\n                            </ion-row>\n\n                              </div>\n\n                        </ion-item></ion-list>\n\n                        <div *ngIf ="quoteHistory?.length == 0">\n\n                            <ion-label class="datalength">No Service Booking History To Show</ion-label>\n\n                            </div>\n\n\n\n                          \n\n</ion-content>\n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefix\src\pages\quotehistory\quotehistory.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_5__providers_servicestate_servicestate__["a" /* ServicestateProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_badge__["a" /* Badge */]])
    ], QuotehistoryPage);
    return QuotehistoryPage;
}());

//# sourceMappingURL=quotehistory.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_push__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_quotehistory_quotehistory__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_quoteview_quoteview__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_faq_faq__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contactus_contactus__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_changepass_changepass__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_invitefrd_invitefrd__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_introslider_introslider__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_facebook__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_app_rate__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_header_color__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_badge__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_social_sharing__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_login_login__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_google_analytics__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_android_permissions__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_device__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_app_update__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_servicestate_servicestate__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





























var MyApp = (function () {
    function MyApp(AuthServiceProvider, toastCtrl, platform, statusBar, loadingCtrl, splashScreen, appRate, headerColor, alertCtrl, fb, push, badge, socialSharing, actionSheetCtrl, ga, androidPermissions, http, device, appUpdate, serviceState) {
        var _this = this;
        this.AuthServiceProvider = AuthServiceProvider;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.statusBar = statusBar;
        this.loadingCtrl = loadingCtrl;
        this.splashScreen = splashScreen;
        this.appRate = appRate;
        this.headerColor = headerColor;
        this.alertCtrl = alertCtrl;
        this.fb = fb;
        this.push = push;
        this.badge = badge;
        this.socialSharing = socialSharing;
        this.actionSheetCtrl = actionSheetCtrl;
        this.ga = ga;
        this.androidPermissions = androidPermissions;
        this.http = http;
        this.device = device;
        this.appUpdate = appUpdate;
        this.serviceState = serviceState;
        this.profilepic = "user_avatar.png";
        this.logfun = "Login";
        localStorage.setItem('serviceBooking', "");
        localStorage.setItem('serviceBooking1', "");
        localStorage.setItem('gadget', "");
        this.splashScreen.show();
        this.initializeApp();
        platform.resume.subscribe(function () {
            _this.handleBranch();
        });
        console.log("test");
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__["a" /* TabsPage */] },
            { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__["a" /* ProfilePage */] },
            { title: 'Change Password', component: __WEBPACK_IMPORTED_MODULE_11__pages_changepass_changepass__["a" /* ChangepassPage */] },
            { title: 'Invite Friends', component: __WEBPACK_IMPORTED_MODULE_12__pages_invitefrd_invitefrd__["a" /* InvitefrdPage */] },
            { title: 'Quote & Response', component: __WEBPACK_IMPORTED_MODULE_7__pages_quotehistory_quotehistory__["a" /* QuotehistoryPage */] },
            { title: 'Quote', component: __WEBPACK_IMPORTED_MODULE_8__pages_quoteview_quoteview__["a" /* QuoteviewPage */] },
        ];
    }
    MyApp.prototype.referAndEarnContent = function () {
        var _this = this;
        console.log('content');
        this.serviceState.referAndEarnContent().subscribe(function (data) {
            console.log(data);
            _this.shareContent = data.data;
            console.log(_this.shareContent);
        }), function (error) {
            console.log(error);
        };
    };
    MyApp.prototype.handleBranch = function () {
        var _this = this;
        if (!this.platform.is('cordova')) {
            return;
        }
        var Branch = window['Branch'];
        Branch.initSession(function (data) {
            _this.linkData = data;
            if (data['+clicked_branch_link']) {
                // read deep link data on click
                var eventName = 'referred_install';
                var Branch_1 = window['Branch'];
                Branch_1.userCompletedAction(eventName).then(function (res) {
                    console.log('Response: ' + JSON.stringify(res));
                }).catch(function (err) {
                    console.log('Error: ' + JSON.stringify(err.message));
                });
                console.log('Deep Link Data: ', _this.linkData);
                _this.testData = data['~tags'];
                // console.log('Deep Link Data: ', );
                var serverData = { userid: _this.testData[2], deviceid: _this.referDeviceId };
                _this.http.post('http://rytefix.in/apitest/refernearncheck.php', serverData).subscribe(function (result) {
                    console.log(result['_body']);
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    MyApp.prototype.menuOpened = function () {
        var _this = this;
        if (localStorage.getItem('loggedData')) {
            var data = JSON.parse(localStorage.getItem('loggedData'));
            this.AuthServiceProvider.postData(data[0], 'getUserdata').then(function (result) {
                _this.imgData = result;
                if (_this.imgData.status == true) {
                    // toast.present();
                    localStorage.setItem('loggedData', JSON.stringify(_this.imgData.data));
                    _this.profilepic = _this.imgData.data[0]['profile_pic'];
                    console.log("amount", _this.imgData);
                    _this.username = _this.imgData.data[0].username;
                    console.log("pics", _this.imgData.data[0]['profile_pic']);
                    console.log("image", _this.imgData.data[0].username);
                    _this.logfun = "Logout";
                }
            });
        }
        else {
            console.log("no data found");
            this.profilepic = "user_avatar.png";
            this.username = '';
            this.logfun = "Login";
        }
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        if (this.logfun == "Logout") {
            var alert = this.alertCtrl.create({
                title: 'Confirm Logout',
                message: 'Are you sure want to Logout?',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: function () {
                            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]);
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            _this.logfun = "Login";
                            _this.logoutconf();
                        }
                    }
                ]
            });
            alert.present();
        }
        else {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */]);
            setTimeout(function () {
                _this.logfun = "Logout";
            }, 400);
            // return true;
        }
    };
    MyApp.prototype.logoutconf = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({ content: "Please wait.." });
        var Branch = window['Branch'];
        ///////////////BRANCH LOGOUT IMPLEMENTATION
        // Branch.logout().then(function (res) {
        //               console.log('Response: ' + JSON.stringify(res))
        //             }).catch(function (err) {
        //               console.log('Error: ' + JSON.stringify(err.message))
        //             })
        var toast = this.toastCtrl.create({
            message: 'Logout successfully',
            duration: 3000,
            position: 'bottom'
        });
        if (localStorage.getItem("loggedData")) {
            loader.present();
            var userData = JSON.parse(localStorage.getItem('loggedData'));
            console.log(userData);
            this.AuthServiceProvider.postData(userData[0], 'logout').then(function (result) {
                _this.responseData = result;
                if (true == _this.responseData.status) {
                    loader.dismiss();
                    console.log(_this.responseData);
                    localStorage.setItem('loggedData', "");
                    localStorage.setItem('serviceBooking', "");
                    localStorage.setItem('serviceBooking1', "");
                    localStorage.setItem('gadget', "");
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__["a" /* TabsPage */]);
                    toast.present();
                    _this.menuOpened();
                    _this.loginupdate();
                }
            }, function (err) {
                // Error log
            });
        }
        else {
            console.log("not logged");
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]);
        }
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            console.log('Device UUID is: ' + _this.device.uuid);
            _this.referDeviceId = _this.device.uuid;
            console.log(_this.referDeviceId);
            _this.androidPermissions.requestPermissions([_this.androidPermissions.PERMISSION.CAMERA, _this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION, _this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION]);
            // const updateUrl = 'http://rytefix.in/apitest/apkUpdate.xml';
            //  this.appUpdate.checkAppUpdate(updateUrl);
            _this.ga.startTrackerWithId('UA-100833789-1')
                .then(function () {
                console.log('Google analytics is ready now');
                _this.ga.trackView('APP LAUNCHED');
                // Tracker is ready
                // You can now track pages or set additional information such as AppVersion or UserId
            })
                .catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
            /////////////////////////////////// PUSH NOTIFICATION IMPLEMENTATION
            _this.push.hasPermission()
                .then(function (res) {
                if (res.isEnabled) {
                    console.log('We have permission to send push notifications');
                }
                else {
                    console.log('We do not have permission to send push notifications');
                }
            });
            localStorage.setItem('deviceID', "");
            var options = {
                android: {},
                ios: {
                    alert: 'true',
                    badge: true,
                    sound: 'false'
                },
                windows: {},
                browser: {
                    pushServiceURL: 'http://push.api.phonegap.com/v1/push'
                }
            };
            var pushObject = _this.push.init(options);
            pushObject.on('notification').subscribe(function (notification) {
                _this.badge.set(1);
                _this.badge.increase(1);
                console.log('Received a notification', notification);
                var alert = _this.alertCtrl.create({
                    title: notification['title'],
                    message: notification['message'],
                    buttons: [
                        {
                            text: 'ok',
                            handler: function () {
                                console.log('called');
                                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_quotehistory_quotehistory__["a" /* QuotehistoryPage */]);
                            }
                        }
                    ]
                });
                alert.present();
            });
            pushObject.on('registration').subscribe(function (registration) {
                console.log('Device registered', registration);
                _this.deviceID = {};
                _this.deviceID["deviceid"] = registration['registrationId'];
                console.log("deviceid =" + _this.deviceID["deviceid"]);
                localStorage.setItem('deviceID', _this.deviceID["deviceid"]);
                console.log(localStorage.getItem('deviceID'));
                _this.loginupdate();
            });
            pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
            _this.handleBranch();
            console.log(localStorage.getItem('introslider'));
            if (localStorage.getItem('loggedData')) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__["a" /* TabsPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_14__pages_introslider_introslider__["a" /* IntrosliderPage */];
            }
            _this.statusBar.backgroundColorByHexString('#0679c9');
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.loginupdate = function () {
        if (localStorage.getItem('loggedData')) {
            console.log("data found");
            this.imgData = JSON.parse(localStorage.getItem('loggedData'));
            this.image = this.imgData[0]['profile_pic'];
            console.log("image", this.imgData[0].username);
            this.profilepic = this.image;
            this.username = this.imgData[0].username;
            this.refresh();
            this.logfun = "Logout";
        }
        else {
            this.refresh();
            console.log("no data found");
        }
    };
    MyApp.prototype.refresh = function () {
        // this.nav.push(this.nav.getActive().component);
        // console.log("refresh");
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.inviteFriends = function () {
        var _this = this;
        this.referAndEarnContent();
        if (localStorage.getItem("loggedData")) {
            this.userData = JSON.parse(localStorage.getItem('loggedData'));
            var userData = this.userData[0];
            console.log(userData.username);
            var data_1;
            var properties = {
                canonicalIdentifier: userData.username,
                title: 'Rytefix',
                contentDescription: 'Invitation to rytefix',
            };
            var analytics = {
                channel: 'WhatsApp',
                feature: 'InviteFriends',
                campaign: 'WhatsappShare',
                stage: 'new user',
                tags: ['InviteFriends', userData.username]
            };
            // optional fields
            var some_properties = {
                $android_url: 'https://play.google.com/store/apps/details?id=com.com.rytefix&hl=en',
                $match_duration: 2000,
                custom_integer: Date.now(),
            };
            // create a branchUniversalObj variable to reference with other Branch methods
            var branchUniversalObj = null;
            var userId = userData.username;
            // setting user Identity
            var Branch_2 = window['Branch'];
            // creating branch object
            Branch_2.createBranchUniversalObject(properties).then(function (res) {
                console.log('object: ' + JSON.stringify(res));
                // generating short url 
                res.generateShortUrl(analytics, some_properties).then(function (res) {
                    data_1 = JSON.stringify(res.url);
                    console.log('shorturl: ' + JSON.stringify(res.url));
                });
            });
            console.log('invite friends');
            var actionSheet = this.actionSheetCtrl.create({
                title: 'invite friends via',
                buttons: [
                    {
                        text: 'Whatsapp',
                        role: 'destructive',
                        handler: function () {
                            console.log('whatsapp clicked');
                            var message1 = 'Install or Reopen the app here';
                            var message = _this.shareContent + '\n \n' + message1 + '\n';
                            _this.socialSharing.shareViaWhatsApp(message, '', data_1).then(function (data) {
                                console.log('success');
                                var eventName = 'Invites';
                                Branch_2.userCompletedAction(eventName).then(function (res) {
                                    console.log('Response: ' + JSON.stringify(res));
                                }).catch(function (err) {
                                    console.log('Error: ' + JSON.stringify(err.message));
                                });
                            }).catch(function (e) {
                                console.log(e);
                            });
                        }
                    }, {
                        text: 'Facebook',
                        handler: function () {
                            console.log('facebook clicked');
                            var message1 = 'Install or Reopen the app here';
                            var message = _this.shareContent + ' \n \n' + message1 + '\n';
                            _this.socialSharing.shareViaFacebook(message, '', data_1).then(function () {
                                console.log('success');
                            }).catch(function (e) {
                                console.log(e);
                            });
                        }
                    }, {
                        text: 'More',
                        handler: function () {
                            console.log('More clicked');
                            var message1 = 'Install or Reopen the app here';
                            // let message = 'Book Mobile and Laptop repair service in Rytefix, get your first service for free. Service centers available all over Chennai. \n \n Here is the list of some of our lucky customers \n http://rytefix.com/event/eventhistory/ \n \n'+ message1 +'\n';
                            var message = _this.shareContent + '\n \n' + message1 + '\n';
                            _this.socialSharing.share(message, '', '', data_1).then(function () {
                                console.log('success');
                            }).catch(function (e) {
                                console.log(e);
                            });
                        }
                    }, {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            actionSheet.present();
        }
        else {
            var alert = this.alertCtrl.create({
                // title: 'Warning',
                message: 'Please login or register to use this feature !',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'OK',
                        handler: function () {
                            console.log('Buy clicked');
                            _this.nav.push(__WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */]);
                        }
                    }
                ]
            });
            alert.present();
        }
    };
    MyApp.prototype.rateUs = function () {
        console.log("clicked");
        this.appRate.preferences.storeAppURL = {
            android: 'https://play.google.com/store/apps/details?id=com.com.rytefix',
        };
        this.appRate.navigateToAppStore();
    };
    MyApp.prototype.gotoTabspage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__["a" /* TabsPage */]);
    };
    MyApp.prototype.gotoProfilepage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__["a" /* ProfilePage */]);
    };
    MyApp.prototype.gotoChangepasspage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_11__pages_changepass_changepass__["a" /* ChangepassPage */]);
    };
    MyApp.prototype.FAQ = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_faq_faq__["a" /* FaqPage */]);
    };
    MyApp.prototype.contactUs = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_10__pages_contactus_contactus__["a" /* ContactusPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefix\src\app\app.html"*/'<ion-menu [content]="content" (ionOpen)="menuOpened()" >\n\n  <ion-header no-border >\n\n    <ion-toolbar no-padding>\n\n      <ion-title style="color:#fff">Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content class="custom">\n\n    <ion-card text-center class="hide-card">\n\n        <img class="pimg" src="http://rytefix.in/images/imgs/{{profilepic}}" class="custom-avatar"/>\n\n        <h2>{{username}}</h2>\n\n       \n\n    </ion-card>\n\n       <ion-list>\n\n          <ion-item menuClose (click)="gotoTabspage()" detail-push>\n\n              <img src="http://rytefix.in/images/imgs/customerAppImages/home.png" />\n\n              Home\n\n          </ion-item>\n\n\n\n          <ion-item menuClose (click)="gotoProfilepage()" detail-push>\n\n              <img src="http://rytefix.in/images/imgs/customerAppImages/user.png" />\n\n              Profile\n\n          </ion-item>\n\n          <ion-item menuClose (click)="gotoChangepasspage()" detail-push>\n\n              <img src="http://rytefix.in/images/imgs/customerAppImages/lock.png" />\n\n            Change Password\n\n          </ion-item>\n\n          <ion-item menuClose (click)="inviteFriends()" detail-push>\n\n              <img src="http://rytefix.in/images/imgs/customerAppImages/flag.png" />\n\n             Invite Friends\n\n          </ion-item>\n\n          <ion-item menuClose (click)="rateUs()" detail-push>\n\n            <img src="http://rytefix.in/images/imgs/customerAppImages/rate.png" />\n\n           Rate Us\n\n        </ion-item>\n\n        <ion-item menuClose (click)="FAQ()" detail-push>\n\n            <img src="http://rytefix.in/images/imgs/customerAppImages/rate.png" />\n\n           FAQ\n\n        </ion-item>\n\n        <ion-item menuClose (click)="contactUs()" detail-push>\n\n            <img src="http://rytefix.in/images/imgs/customerAppImages/rate.png" />\n\n           Contact Us\n\n        </ion-item>\n\n        <ion-item menuClose detail-push>\n\n            <!-- <img src="http://rytefix.in/images/imgs/customerAppImages/logout.png" /> -->\n\n            <button ion-button clear icon-left (click)="logout()" color="dark" full style="font-size:1.4rem"><ion-icon name="log-out" ></ion-icon> {{logfun}}</button>\n\n            <!-- <ion-icon item-start name="log-out" ></ion-icon> -->\n\n            <!-- {{logfun}} -->\n\n            </ion-item>\n\n          </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefix\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_16__ionic_native_app_rate__["a" /* AppRate */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_16__ionic_native_app_rate__["a" /* AppRate */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_17__ionic_native_header_color__["a" /* HeaderColor */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_17__ionic_native_header_color__["a" /* HeaderColor */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_15__ionic_native_facebook__["a" /* Facebook */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_15__ionic_native_facebook__["a" /* Facebook */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_push__["a" /* Push */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_push__["a" /* Push */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_19__ionic_native_badge__["a" /* Badge */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_19__ionic_native_badge__["a" /* Badge */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_20__ionic_native_social_sharing__["a" /* SocialSharing */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_20__ionic_native_social_sharing__["a" /* SocialSharing */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_22__ionic_native_google_analytics__["a" /* GoogleAnalytics */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_22__ionic_native_google_analytics__["a" /* GoogleAnalytics */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_23__ionic_native_android_permissions__["a" /* AndroidPermissions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_23__ionic_native_android_permissions__["a" /* AndroidPermissions */]) === "function" && _s || Object, typeof (_t = typeof __WEBPACK_IMPORTED_MODULE_24__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_24__angular_http__["b" /* Http */]) === "function" && _t || Object, typeof (_u = typeof __WEBPACK_IMPORTED_MODULE_25__ionic_native_device__["a" /* Device */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_25__ionic_native_device__["a" /* Device */]) === "function" && _u || Object, typeof (_v = typeof __WEBPACK_IMPORTED_MODULE_26__ionic_native_app_update__["a" /* AppUpdate */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_26__ionic_native_app_update__["a" /* AppUpdate */]) === "function" && _v || Object, typeof (_w = typeof __WEBPACK_IMPORTED_MODULE_27__providers_servicestate_servicestate__["a" /* ServicestateProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_27__providers_servicestate_servicestate__["a" /* ServicestateProvider */]) === "function" && _w || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefix\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefix\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_servicestate_servicestate__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__quotemap_quotemap__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__editservicebooking_editservicebooking__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__vendorrating_vendorrating__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__editotherservicebooking_editotherservicebooking__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var QuoteviewPage = (function () {
    function QuoteviewPage(navCtrl, AuthServiceProvider, navParams, callNumber, alertCtrl, toastCtrl, serviceState, http) {
        this.navCtrl = navCtrl;
        this.AuthServiceProvider = AuthServiceProvider;
        this.navParams = navParams;
        this.callNumber = callNumber;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.serviceState = serviceState;
        this.http = http;
        this.pushData = { "deviceId": "", "message": "" };
    }
    QuoteviewPage_1 = QuoteviewPage;
    QuoteviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuoteviewPage');
        this.quoteget();
    };
    QuoteviewPage.prototype.listshow = function () {
        this.navCtrl.push(this.navCtrl.getActive().component);
    };
    QuoteviewPage.prototype.mapshow = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__quotemap_quotemap__["a" /* QuotemapPage */]);
    };
    QuoteviewPage.prototype.push = function (data) {
        console.log("pushData", data);
        this.http.post('http://rytefix.in/sunapi/push.php', data).subscribe(function (result) {
            // this.responseData = result;
            console.log(result);
        }, function (err) {
            console.log(err);
        });
    };
    QuoteviewPage.prototype.quoteget = function () {
        var _this = this;
        console.log(localStorage.getItem("loggedData"));
        var quotedata = JSON.parse(localStorage.getItem("loggedData"));
        console.log(quotedata);
        this.cdata = quotedata[0].book_id;
        this.AuthServiceProvider.postData(quotedata[0], 'quoteView').then(function (result) {
            console.log(result);
            _this.quoteview = result;
            _this.acceptCheck(_this.quoteview);
            console.log(_this.quoteview[0].make_name);
            _this.cgadget = _this.quoteview[0].gadget;
            if (_this.quoteview[0].make_name == null) {
                _this.make = _this.quoteview[0].make;
            }
            else {
                _this.make = _this.quoteview[0].make_name;
            }
            //this.make= this.quoteview[0].make_name;
            _this.gadget = _this.quoteview[0].gadget;
            console.log(_this.gadget);
            _this.model = _this.quoteview[0].model;
            _this.soft = _this.quoteview[0].softService;
            _this.hard = _this.quoteview[0].hardService;
            _this.othermodel = _this.quoteview[0].othermodel;
            _this.pickup = _this.quoteview[0].pickup_type;
            _this.booking_date = _this.quoteview[0].posted_on;
            _this.image = _this.quoteview[0].image;
            _this.audio = _this.quoteview[0].audio;
            _this.description = _this.quoteview[0].bookingdescription;
            _this.cancelStatus = _this.quoteview[0].cancel_status;
            _this.preferredlocation = _this.quoteview[0].preferredlocation;
            _this.requestedService = _this.quoteview[0].service;
            _this.timePeriod = _this.quoteview[0].bookingtime_period;
            _this.quoteview.forEach(function (element) {
                if (element.accept_status != null) {
                    _this.status = element.accept_status;
                    console.log('accept status', element.accept_status);
                }
            });
        });
    };
    QuoteviewPage.prototype.quoteChat = function () {
        alert("Soon we will launch");
    };
    QuoteviewPage.prototype.quoteCall = function (mobile) {
        console.log(mobile);
        this.callNumber.callNumber(mobile, true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    QuoteviewPage.prototype.acceptCheck = function (quoteView) {
        var _this = this;
        quoteView.forEach(function (element) {
            if (element.accept_status == 3) {
                console.log(element);
                _this.Check = "accepted";
                console.log(_this.Check);
            }
        });
    };
    QuoteviewPage.prototype.quoteAccept = function (id, data) {
        var _this = this;
        console.log("quote data", data.device_id);
        this.pushData.deviceId = data.device_id;
        this.pushData.message = "Customer has accepted your service. Contact customer to complete the service.";
        // checking for customer if already accepted the quote
        if (this.Check == "accepted") {
            // if accepted throws prompt message to ignore accepted quote
            var promptalert = this.alertCtrl.create({
                title: 'Warning',
                message: 'you have already accepted the quote ! please ignore the accepted quote to accept this.',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                        }
                    }
                ]
            });
            promptalert.present();
        }
        else {
            console.log('quote is not accepted previously');
            var promptalert = this.alertCtrl.create({
                title: 'Accept Quote',
                message: 'Do you want to Accept this Quote?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            console.log(id);
                            _this.AuthServiceProvider.postData(data, 'serviceAccept').then(function (result) {
                                _this.responsedata = result;
                                _this.push(_this.pushData);
                                if (_this.responsedata.status == true) {
                                    //this.refresh();
                                    _this.quoteAccept1(data);
                                    _this.push(_this.pushData);
                                    alert("Service accepted successfully");
                                }
                            });
                        }
                    }
                ]
            });
            promptalert.present();
        }
    };
    QuoteviewPage.prototype.quoteAccept1 = function (data) {
        console.log("data", data);
        this.navCtrl.push(QuoteviewPage_1, { "data": data });
    };
    QuoteviewPage.prototype.quoteIgnore = function (id) {
        var _this = this;
        var promptalert = this.alertCtrl.create({
            title: 'Ignore',
            message: 'Do you want to Ignore this Quote?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log(id);
                        _this.AuthServiceProvider.postData(id, 'serviceIgnore').then(function (result) {
                            _this.responsedata = result;
                            if (_this.responsedata.status == true) {
                                _this.refresh();
                                alert("Service ignored successfully");
                            }
                        });
                    }
                }
            ]
        });
        promptalert.present();
    };
    QuoteviewPage.prototype.refresh = function () {
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
        console.log("refresh");
    };
    QuoteviewPage.prototype.completeQuote = function (vid, bid, data) {
        var _this = this;
        // console.log('vid',vid);
        var data1 = data;
        console.log('compelte data', data);
        console.log('compelte data', data1);
        this.pushData.deviceId = data.device_id;
        this.pushData.message = "Customer has completed your service.";
        var prompt = this.alertCtrl.create({
            message: "Service completed and payment made ?",
            buttons: [
                {
                    text: 'Yes',
                    handler: function (data) {
                        console.log('yes clicked');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__vendorrating_vendorrating__["a" /* VendorratingPage */], { item: data1 });
                        //   this.serviceState.completeService(vid,bid).subscribe(data =>{
                        //     console.log(data);
                        //     console.log(data.status);
                        //     if(data.status == 'success'){
                        //       this.push(this.pushData);
                        //       let toast = this.toastCtrl.create({
                        //         message: "Congratulations! You can use the credit",
                        //         duration: 3000,
                        //         position: 'bottom'
                        //       });     
                        //       toast.present();
                        //       // this.navCtrl.push(TabsPage);
                        //     }
                        //  }),error =>{
                        //    console.log(error);
                        //  }
                    }
                },
                {
                    text: 'No',
                    handler: function (data) {
                        alert(" Please pay for the service and then complete");
                        return true;
                    }
                }
            ]
        });
        prompt.present();
    };
    QuoteviewPage.prototype.declineQuote = function (vid, bid) {
        var _this = this;
        // console.log('data',this.quoteview[0]);
        // let vid = this.quoteview[0].vendor;
        // let bid= this.quoteview[0].booking_id;
        console.log('vendor id', vid);
        console.log('booking id', bid);
        var prompt = this.alertCtrl.create({
            //message: "Please describe the problem",
            inputs: [
                {
                    //type :'text',
                    name: 'reason',
                    placeholder: 'Reason for decline',
                    value: ""
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        // let validateObj = this.validate(data);
                        if (data.reason == "") {
                            var toast = _this.toastCtrl.create({
                                message: "Please enter the reason ",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            return false;
                        }
                        else {
                            var toast = _this.toastCtrl.create({
                                message: "Now you can accept other quotes",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            _this.serviceState.reportproblem(vid, bid, data.reason).subscribe(function (data) {
                                console.log(data);
                                _this.refresh();
                                //this.navCtrl.push(QuotehistoryPage);
                            }), function (error) {
                                console.log(error);
                            };
                            // this.navCtrl.push(QuoteviewPage);
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    QuoteviewPage.prototype.editBooking = function (cdata, cgadget) {
        var data = { booking_id: cdata, gadget: cgadget };
        console.log("data", data);
        if (cgadget == "A/C" || cgadget == "Plumbing" || cgadget == "Home_Appliances" || cgadget == "Beauty_Services" || cgadget == "Electrical") {
            console.log('new edit booking');
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__editotherservicebooking_editotherservicebooking__["a" /* EditotherservicebookingPage */], { item: data });
        }
        else {
            // console.log('old edit booking');
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__editservicebooking_editservicebooking__["a" /* EditservicebookingPage */], { item: data });
        }
    };
    QuoteviewPage = QuoteviewPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-quoteview',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefix\src\pages\quoteview\quoteview.html"*/'<!--\n\n  Generated template for the QuoteviewPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n\n\n  <ion-toolbar no-padding>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu" class="color-wh"></ion-icon>\n\n      </button>\n\n    <ion-title>Quote</ion-title>\n\n    <!-- <ion-segment>\n\n        <ion-segment-button  class="button-l" (click)="listshow()">\n\n          List View\n\n        </ion-segment-button>\n\n        <ion-segment-button  class="button-m" (click)="mapshow()">\n\n          Map View\n\n        </ion-segment-button>\n\n      </ion-segment> -->\n\n  </ion-toolbar>\n\n  <ion-segment>\n\n    <ion-segment-button  class="button-l" (click)="listshow()">\n\n      List View\n\n    </ion-segment-button>\n\n    <ion-segment-button  class="button-m" (click)="mapshow()">\n\n      Map View\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n</ion-header>\n\n\n\n\n\n<ion-content style="padding:10px;"  >\n\n    <div *ngIf="image">\n\n            <ion-thumbnail  class="item-profile" >\n\n                    <img src="http://rytefix.in/images/imgs/{{image}}"/>\n\n                  </ion-thumbnail>\n\n            \n\n    </div>\n\n\n\n       \n\n   <ion-list class="listbg">\n\n          \n\n      <ion-row>\n\n          <ion-col col-12 class="head" text-center>\n\n              <h4><b>Booking Details</b></h4>\n\n          </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf = "cgadget">\n\n            <ion-col col-4 text-left>\n\n             <b>Service Type</b>\n\n            </ion-col>\n\n            <ion-col col-1><b>:</b></ion-col>\n\n            <ion-col col-7 text-left>\n\n                {{cgadget}}\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-row *ngIf = "requestedService">\n\n                <ion-col col-4 text-left>\n\n                 <b>Requested Service</b>\n\n                </ion-col>\n\n                <ion-col col-1><b>:</b></ion-col>\n\n                <ion-col col-7 text-left>\n\n                    {{requestedService}}\n\n                </ion-col>\n\n              </ion-row>\n\n\n\n           <ion-row *ngIf = "make">\n\n               <ion-col col-4 text-left>\n\n                    <b>Make</b>\n\n                   </ion-col>\n\n               <ion-col col-1><b>:</b></ion-col>\n\n               <ion-col col-7 text-left>\n\n                   {{make}}\n\n               </ion-col>\n\n             </ion-row>\n\n\n\n             <ion-row *ngIf = "model">\n\n                 <ion-col col-4 text-left>\n\n                  <b>Model</b>\n\n                 </ion-col>\n\n                 <ion-col col-1><b>:</b></ion-col>\n\n                 <ion-col col-7 text-left>\n\n                     {{model}}\n\n                 </ion-col>\n\n               </ion-row>\n\n               <ion-row *ngIf = "timePeriod">\n\n                    <ion-col col-4 text-left>\n\n                     <b>Time Period</b>\n\n                    </ion-col>\n\n                    <ion-col col-1><b>:</b></ion-col>\n\n                    <ion-col col-7 text-left>\n\n                        {{timePeriod}}\n\n                    </ion-col>\n\n                  </ion-row>\n\n               \n\n               <ion-row *ngIf = "cgadget != \'Beauty_Services\'">\n\n                   <ion-col col-4 text-left>\n\n                    <b>Problem</b>\n\n                   </ion-col>\n\n                   <ion-col col-1><b>:</b></ion-col>\n\n                   <ion-col col-7 text-left>\n\n                       <div *ngIf="soft!=\'\'||hard !=\'\'||othermodel !=\'\'||description !=\'\'">{{soft}}{{hard}}{{othermodel}}{{description}}</div>\n\n                   </ion-col>\n\n                 </ion-row>\n\n                 <ion-row *ngIf = "preferredlocation">\n\n                     <ion-col col-4 text-left>\n\n                      <b>Preferred Location</b>\n\n                     </ion-col>\n\n                     <ion-col col-1><b>:</b></ion-col>\n\n                     <ion-col col-7 text-left>\n\n                         {{preferredlocation}}\n\n                     </ion-col>\n\n                   </ion-row>\n\n                   <ion-row *ngIf = "pickup">\n\n                        <ion-col col-4 text-left>\n\n                         <b>Pickup</b>\n\n                        </ion-col>\n\n                        <ion-col col-1><b>:</b></ion-col>\n\n                        <ion-col col-7 text-left>\n\n                            {{pickup}}\n\n                        </ion-col>\n\n                      </ion-row>\n\n                   <ion-row>\n\n                       <ion-col col-4 text-left>\n\n                        <b> Booking Date</b>\n\n                       </ion-col>\n\n                       <ion-col col-1><b>:</b></ion-col>\n\n                       <ion-col col-7 text-left>\n\n                           {{booking_date}}\n\n                       </ion-col>\n\n                     </ion-row>\n\n                     <div *ngIf="audio">\n\n                            <audio controls>\n\n                            <source src="http://rytefix.in/images/audio/{{audio}}" type="audio/mp3">\n\n                                <!-- <source src="http://sunrisetechs.com/images/audio/test.mp3"type="audio/mp3"> -->\n\n                            </audio>\n\n                            </div>\n\n                            <button ion-button class="edit" block *ngIf ="status==null && cancelStatus==null" small round  (click)="editBooking(cdata,cgadget)">edit booking details</button>\n\n                        </ion-list>\n\n                   \n\n                          \n\n                        <hr class="style1">  \n\n                        <ion-item>\n\n                                <h2 class="head1"><b>Quotes Received</b></h2>\n\n                                 </ion-item> \n\n                      \n\n         <ion-list *ngFor="let item of quoteview">\n\n            <ion-card style="background-color:rgba(19, 18, 18, 0.03);" *ngIf="item.accept_status">\n\n           <!-- <ion-slides pager="true"> -->\n\n                <!-- <ion-list> -->\n\n           <!-- <ion-slide  > -->\n\n               \n\n          <ion-card-header>\n\n                <ion-row>\n\n                        <ion-col col-12 text-center class="box">\n\n                            {{item.username}}\n\n                        </ion-col>\n\n                      </ion-row>\n\n                  \n\n          </ion-card-header>\n\n                    \n\n              <ion-card-content>\n\n\n\n              \n\n                   \n\n                     <ion-row *ngIf="item.exactprice">\n\n                         <ion-col col-5 text-left>\n\n                          <b>  Original Price</b>\n\n                         </ion-col>\n\n                         <ion-col col-1><b>:</b></ion-col>\n\n                         <ion-col col-6 text-left>\n\n                             {{item.exactprice}}\n\n                         </ion-col>\n\n                       </ion-row>\n\n                       <ion-row *ngIf="item.second_quality_price">\n\n                               <ion-col col-5 text-left>\n\n                                <b> 2nd Quality Price</b>\n\n                               </ion-col>\n\n                               <ion-col col-1><b>:</b></ion-col>\n\n                               <ion-col col-6 text-left>\n\n                                   {{item.second_quality_price}}\n\n                               </ion-col>\n\n                             </ion-row>\n\n                             <ion-row *ngIf="item.time_period">\n\n                                   <ion-col col-5 text-left>\n\n                                    <b> Time Required</b>\n\n                                   </ion-col>\n\n                                   <ion-col col-1><b>:</b></ion-col>\n\n                                   <ion-col col-6 text-left>\n\n                                       {{item.time_period}}\n\n                                   </ion-col>\n\n                                 </ion-row>\n\n                       <ion-row *ngIf="item.warranty">\n\n                           <ion-col col-5 text-left>\n\n                            <b> Warranty</b>\n\n                           </ion-col>\n\n                           <ion-col col-1><b>:</b></ion-col>\n\n                           <ion-col col-6 text-left>\n\n                               {{item.warranty}}\n\n                           </ion-col>\n\n                         </ion-row>\n\n                         <ion-row *ngIf="item.pickup">\n\n                               <ion-col col-5 text-left>\n\n                                <b> Home Pick Up</b>\n\n                               </ion-col>\n\n                               <ion-col col-1><b>:</b></ion-col>\n\n                               <ion-col col-6 text-left>\n\n                                   {{item.pickup}}\n\n                               </ion-col>\n\n                             </ion-row>\n\n                         <ion-row *ngIf="item.description">\n\n                             <ion-col col-5 text-left>\n\n                              <b> Description</b>\n\n                             </ion-col>\n\n                             <ion-col col-1><b>:</b></ion-col>\n\n                             <ion-col col-6 text-left>\n\n                                 {{item.description}}\n\n                             </ion-col>\n\n                           </ion-row>\n\n                           <div *ngIf="item.audio">\n\n                            <audio controls>\n\n                            <source src="http://rytefix.in/images/audio/{{item.audio}}" type="audio/mp3">\n\n                                <!-- <source src="http://sunrisetechs.com/images/audio/test.mp3"type="audio/mp3"> -->\n\n                            </audio>\n\n                            </div>\n\n                           <ion-row *ngIf="item.accept_status==2">\n\n                                <ion-col col-5 text-left>\n\n                                 <b> Reason</b>\n\n                                </ion-col>\n\n                                <ion-col col-1><b>:</b></ion-col>\n\n                                <ion-col col-6 text-left>\n\n                                  {{item.reason}}\n\n                                </ion-col>\n\n                              </ion-row> \n\n                              <ion-row *ngIf="item.customer_completed==1">\n\n                                <ion-col col-5 text-left>\n\n                                 <b> Status</b>\n\n                                </ion-col>\n\n                                <ion-col col-1><b>:</b></ion-col>\n\n                                <ion-col col-6 text-left>\n\n                                  Customer completed the Services\n\n                                </ion-col>\n\n                              </ion-row> \n\n                              <ion-row *ngIf="item.accept_status==2">\n\n                                    <ion-col col-5 text-left>\n\n                                     <b> Status</b>\n\n                                    </ion-col>\n\n                                    <ion-col col-1><b>:</b></ion-col>\n\n                                    <ion-col col-6 text-left>\n\n                                     Declined by vendor\n\n                                    </ion-col>\n\n                                  </ion-row> \n\n                                  <ion-row *ngIf="item.accept_status==4">\n\n                                        <ion-col col-5 text-left>\n\n                                         <b> Status</b>\n\n                                        </ion-col>\n\n                                        <ion-col col-1><b>:</b></ion-col>\n\n                                        <ion-col col-6 text-left>\n\n                                         Declined by Customer\n\n                                        </ion-col>\n\n                                      </ion-row> \n\n                           <ion-row *ngIf="item.accept_status==1||item.accept_status==3">   \n\n                                <ion-col col-5 text-left>\n\n                                    <b>Contact Service Center</b>\n\n                                </ion-col>\n\n                                <ion-col col-1><b>:</b></ion-col>      \n\n                          <ion-col col-3 >\n\n                                <button ion-button color="primary" small round icon-only (click)="quoteCall(item.mobile)">\n\n                                        <ion-icon ios="ios-call" md="md-call"></ion-icon></button>\n\n                                 </ion-col>\n\n                                 <ion-col col-3>\n\n                                       <button ion-button  color="dark" small round icon-only (click)="quoteChat(item.id)" >\n\n                                   <ion-icon ios="ios-chatbubbles" md="md-chatbubbles"></ion-icon></button>\n\n                                 </ion-col>\n\n                                 </ion-row>\n\n                           <!-- <ion-row>\n\n                               <ion-col col-5 text-left>\n\n                                <b> Expires In</b>\n\n                               </ion-col>\n\n                               <ion-col col-1><b>:</b></ion-col>\n\n                               <ion-col col-6 text-left>\n\n                                 \n\n                               </ion-col>\n\n                             </ion-row>      -->\n\n               \n\n               \n\n              <div *ngIf="item.accept_status==1||item.accept_status==3&&item.customer_completed==0">\n\n               <div class="btn-group">\n\n                  <ion-row>\n\n                    <!-- <ion-col col-3>\n\n                        <button ion-button color="dark" [hidden]="item.cancel_status" small class="button" (click)="quoteChat(item.id)" icon-only>Chat</button>          \n\n                    </ion-col> -->\n\n                       <!-- <ion-col col-3>\n\n                               <button ion-button color="secondary" [hidden]="item.cancel_status"  small class="button" (click)="quoteCall(item.mobile)" icon-only>Call</button>\n\n                              </ion-col>-->\n\n                           <ion-col *ngIf="item.accept_status==1" col-6 text-center> \n\n                               <!-- <button ion-button color="primary" [hidden]="item.cancel_status" small class="button" (click)="quoteAccept1(item)" icon-only>Accept</button> -->\n\n                               <button ion-button color="secondary" [hidden]="item.cancel_status"  class="button" (click)="quoteAccept(item.id,item)" >Accept</button>\n\n                              </ion-col>\n\n                               <ion-col *ngIf="item.accept_status==1" col-6 text-center>\n\n                                       <button ion-button color="light" [hidden]="item.cancel_status"  class="button" (click)="quoteIgnore(item.id)" >Ignore</button>\n\n                                   </ion-col>\n\n                                </ion-row>\n\n                                   <ion-row>\n\n                                       <ion-col col-12 text-center>\n\n                                            <div *ngIf="item.accept_status==3">\n\n                                                    <button ion-button block color="secondary" class="button" (click)="completeQuote(item.vendor,item.booking_id,item)" block>Complete the service</button>\n\n                                                </div>\n\n                                       </ion-col>\n\n                                   </ion-row>\n\n                                  \n\n                                    <ion-row>\n\n                                            <ion-col col-12 text-center>\n\n                                                    <div *ngIf="item.accept_status==3">    \n\n                                                            <button ion-button block color="dark" class="button" (click)="declineQuote(item.vendor,item.booking_id)" block>Decline the vendor</button>\n\n                                                              </div>\n\n                                            </ion-col>\n\n                                        </ion-row>\n\n                                        \n\n\n\n<!-- ////////////////////////////////////////////////////////////////////////////                                    -->\n\n<!-- <ion-col *ngIf="item.accept_status==1||item.accept_status==2" col-3>\n\n               \n\n        <button ion-button color="primary" [hidden]="item.cancel_status" small class="button" (click)="quoteAccept(item.id,item)" icon-only>Accept</button>\n\n       </ion-col>\n\n        <ion-col *ngIf="item.accept_status==1||item.accept_status==2" col-3>\n\n                <button ion-button color="light" [hidden]="item.cancel_status" small class="button" (click)="quoteIgnore(item.id)" icon-only>Ignore</button>\n\n            </ion-col> -->\n\n                                               \n\n                 \n\n                </div>\n\n                </div>\n\n            </ion-card-content>\n\n        <!-- </ion-list> -->\n\n            <!-- </ion-slide> -->\n\n                <hr class="style1">\n\n            <!-- </ion-list> -->\n\n       \n\n        <!-- </ion-slides> -->\n\n    </ion-card>\n\n<!-- <hr class="style1"> -->\n\n</ion-list>\n\n\n\n\n\n</ion-content> \n\n\n\n\n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefix\src\pages\quoteview\quoteview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_servicestate_servicestate__["a" /* ServicestateProvider */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]])
    ], QuoteviewPage);
    return QuoteviewPage;
    var QuoteviewPage_1;
}());

//# sourceMappingURL=quoteview.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitefrdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_servicestate_servicestate__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InvitefrdPage = (function () {
    function InvitefrdPage(navCtrl, navParams, alertCtrl, app, actionSheetCtrl, socialSharing, http, serviceState, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.actionSheetCtrl = actionSheetCtrl;
        this.socialSharing = socialSharing;
        this.http = http;
        this.serviceState = serviceState;
        this.loadingCtrl = loadingCtrl;
        //  this.getCreditHistory();
        // this.getRewardPoints();
        this.loader();
    }
    InvitefrdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InvitefrdPage');
        this.createShortUrl();
        this.referAndEarnContent();
        // this.redeemRewards();
    };
    InvitefrdPage.prototype.referAndEarnContent = function () {
        var _this = this;
        console.log('content');
        this.serviceState.referAndEarnContent().subscribe(function (data) {
            console.log(data);
            _this.shareContent = data.data;
            console.log(_this.shareContent);
        }), function (error) {
            console.log(error);
        };
    };
    InvitefrdPage.prototype.loader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    InvitefrdPage.prototype.createShortUrl = function () {
        var _this = this;
        this.userData = JSON.parse(localStorage.getItem('loggedData'));
        var userData = this.userData[0];
        console.log(userData);
        var data;
        var properties = {
            canonicalIdentifier: userData.mobile,
            title: 'Rytefix',
            contentDescription: 'Invitation to rytefix',
        };
        var analytics = {
            channel: 'WhatsApp',
            feature: 'InviteFriends',
            campaign: 'WhatsappShare',
            stage: 'new user',
            tags: ['InviteFriends', userData.username, userData.id, userData.mobile]
        };
        // optional fields
        var some_properties = {
            $android_url: 'https://play.google.com/store/apps/details?id=com.com.rytefix&hl=en',
            $match_duration: 2000,
            custom_integer: Date.now(),
        };
        // create a branchUniversalObj variable to reference with other Branch methods
        var branchUniversalObj = null;
        var userId = userData.username;
        // setting user Identity
        var Branch = window['Branch'];
        Branch.setIdentity(userId).then(function (res) {
            console.log('Response: ' + JSON.stringify(res));
        }).catch(function (err) {
            alert('Error: ' + JSON.stringify(err.message));
        });
        // creating branch object
        Branch.createBranchUniversalObject(properties).then(function (res) {
            console.log('object: ' + JSON.stringify(res));
            // generating short url 
            res.generateShortUrl(analytics, some_properties).then(function (res) {
                _this.shareurl = JSON.stringify(res.url);
                // console.log('shorturl: ' + JSON.stringify(res.url));
                console.log('shorturl: ' + _this.shareurl);
                _this.loading.dismiss();
            });
        });
    };
    InvitefrdPage.prototype.inviteFriends = function () {
        console.log('invite friends');
        var message1 = 'Install or Reopen the app here';
        var message = this.shareContent + '\n \n' + message1 + '\n';
        this.socialSharing.shareViaWhatsApp(message, '', this.shareurl).then(function (data) {
            console.log('success');
            var eventName = 'Invites';
            var Branch = window['Branch'];
            Branch.userCompletedAction(eventName).then(function (res) {
                console.log('Response: ' + JSON.stringify(res));
            }).catch(function (err) {
                console.log('Error: ' + JSON.stringify(err.message));
            });
        }).catch(function (e) {
            console.log(e);
        });
    };
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
    InvitefrdPage.prototype.redeemRewards = function (data) {
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
    };
    InvitefrdPage.prototype.getCreditHistory = function () {
        var _this = this;
        var Branch = window['Branch'];
        Branch.creditHistory().then(function (res) {
            _this.creditHistory = res;
            console.log('credit Response: ', _this.creditHistory);
        }).catch(function (err) {
            console.log('Error: ' + JSON.stringify(err));
        });
    };
    InvitefrdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-invitefrd',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefix\src\pages\invitefrd\invitefrd.html"*/'<!--\n\n  Generated template for the InvitefrdPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>Refer & Earn</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n  <ion-thumbnail class="pic">\n\n    <img src="http://rytefix.in/images/imgs/customerAppImages/refer&earn.jpg" />\n\n  </ion-thumbnail>\n\n \n\n\n\n\n\n\n\n<ion-row>\n\n<ion-col col-12 text-center>\n\n    <button ion-button color="secondary"  round class="invite"(click)="inviteFriends()" icon-left>\n\n        <ion-icon name="logo-whatsapp" class="color-wh">\n\n      \n\n      </ion-icon>invite via whatsapp</button>\n\n      \n\n</ion-col>\n\n</ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefix\src\pages\invitefrd\invitefrd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__providers_servicestate_servicestate__["a" /* ServicestateProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], InvitefrdPage);
    return InvitefrdPage;
}());

//# sourceMappingURL=invitefrd.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ChangepassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangepassPage = (function () {
    function ChangepassPage(navCtrl, loadingCtrl, navParams, toastCtrl, AuthServiceProvider) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.AuthServiceProvider = AuthServiceProvider;
        this.form = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            npass: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            cpass: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required)
        });
        this.passData = { "npass": "", "cpass": "" };
        this.userCpass = false;
        this.disable = true;
        if (localStorage.getItem("loggedData")) {
            this.ionViewDidLoad();
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        }
    }
    Object.defineProperty(ChangepassPage.prototype, "npass", {
        get: function () {
            return this.form.get('npass');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangepassPage.prototype, "cpass", {
        get: function () {
            return this.form.get('cpass');
        },
        enumerable: true,
        configurable: true
    });
    ChangepassPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangepassPage');
    };
    ChangepassPage.prototype.npassword = function (data) {
        console.log(data);
        this.userPass = data;
    };
    ChangepassPage.prototype.cpassword = function (data) {
        console.log(data);
        if (this.userPass == data) {
            console.log("true");
            this.userCpass = false;
            this.disable = false;
        }
        else {
            console.log("true");
            this.userCpass = true;
        }
    };
    ChangepassPage.prototype.changePass = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: 'Password Changed successfully',
            duration: 3000,
            position: 'bottom'
        });
        var loader = this.loadingCtrl.create({ content: "Please wait.." });
        loader.present();
        console.log(this.passData);
        var loggedData = JSON.parse(localStorage.getItem("loggedData"));
        console.log(loggedData);
        loggedData[0]['resetpass'] = this.passData['npass'];
        this.AuthServiceProvider.postData(loggedData[0], 'resetPassword').then(function (result) {
            _this.responsedata = result;
            if (_this.responsedata.status == true) {
                loader.dismiss();
                console.log(result);
                toast.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
            }
            else {
                loader.dismiss();
            }
        });
    };
    ChangepassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-changepass',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefix\src\pages\changepass\changepass.html"*/'<!--\n\n  Generated template for the ChangepassPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-toolbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu" class="color-wh"></ion-icon>\n\n      </button>\n\n    <ion-title>Change Password</ion-title>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="margin-top:80px">\n\n  <form [formGroup]="form" (ngSubmit)="changePass()" >\n\n  \n\n    <ion-item>\n\n    <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n\n    <ion-input formControlName="npass" type="password" placeholder="New Password" (focusout)="npassword($event.target.value)"  [(ngModel)]="passData.npass"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label ><ion-icon name="lock"></ion-icon> </ion-label>\n\n    <ion-input formControlName="cpass" type="password" placeholder="Confirm Password" (focusout)="cpassword($event.target.value)"  [(ngModel)]="passData.cpass"></ion-input>\n\n  </ion-item>\n\n  <div *ngIf="userCpass">Password not match</div>\n\n   <button ion-button type="submit"  class="sign_btn" [disabled]="disable"  round full>Ok</button>\n\n   </form> \n\n</ion-content>\n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefix\src\pages\changepass\changepass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], ChangepassPage);
    return ChangepassPage;
}());

//# sourceMappingURL=changepass.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tabs_tabs__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(alertCtrl, transfer, file, navCtrl, loadingCtrl, toastCtrl, AuthServiceProvider, navParams, http) {
        this.alertCtrl = alertCtrl;
        this.transfer = transfer;
        this.file = file;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.AuthServiceProvider = AuthServiceProvider;
        this.navParams = navParams;
        this.http = http;
        this.pushData = { "deviceId": "", "message": "Thanks Your booking is received will be processed within 24 hours" };
        this.type = "password";
        this.show = false;
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            mobile: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            cpassword: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            area: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            city: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            pincode: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            mail: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].email])
        });
        this.form1 = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            otp: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required)
        });
        this.otpData = { "otp": "" };
        this.userData = { "username": "", "mobile": "", "mail": "", "password": "", "cpassword": "", "area": "", "city": "", "pincode": "", "deviceId": "" };
        this.userCpass = false;
        this.disable = true;
        this.otpverify = false;
        this.registerpage = true;
        if (this.registerpage == true) {
            this.header = "New User Registration";
        }
        else {
            this.header = "OTP Verfication";
        }
        this.userData.deviceId = localStorage.getItem('deviceID');
        this.pushData.deviceId = this.userData.deviceId;
        console.log('device ID = ', this.userData.deviceId);
    }
    Object.defineProperty(RegisterPage.prototype, "username", {
        get: function () {
            return this.form.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterPage.prototype, "mobile", {
        get: function () {
            return this.form.get('mobile');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterPage.prototype, "mail", {
        get: function () {
            return this.form.get('mail');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterPage.prototype, "password", {
        get: function () {
            return this.form.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterPage.prototype, "cpassword", {
        get: function () {
            return this.form.get('cpassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterPage.prototype, "area", {
        get: function () {
            return this.form.get('area');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterPage.prototype, "city", {
        get: function () {
            return this.form.get('city');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterPage.prototype, "pincode", {
        get: function () {
            return this.form.get('pincode');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterPage.prototype, "otp", {
        get: function () {
            return this.form1.get('otp');
        },
        enumerable: true,
        configurable: true
    });
    RegisterPage.prototype.push = function (data) {
        console.log("pushData", data);
        this.http.post('http://rytefix.in/sunapi/push.php', data).subscribe(function (result) {
            console.log(result);
        }, function (err) {
            console.log(err);
        });
    };
    RegisterPage.prototype.showPw = function () {
        console.log("show==false");
        if (this.show == false) {
            this.show = true;
            this.type = "text";
        }
        else {
            this.show = false;
            this.type = "password";
        }
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
        if (localStorage.getItem('imageList')) {
            this.imgData = JSON.parse(localStorage.getItem('imageList'));
        }
        if (localStorage.getItem('audiolist')) {
            this.audioData = JSON.parse(localStorage.getItem('audiolist'));
        }
    };
    RegisterPage.prototype.pass = function (data) {
        console.log(data);
        this.uesrPass = data;
    };
    RegisterPage.prototype.cpass = function (data) {
        console.log(data);
        if (this.uesrPass == data) {
            console.log("true");
            this.userCpass = false;
            this.disable = false;
        }
        else {
            console.log("true");
            this.userCpass = true;
        }
    };
    RegisterPage.prototype.jsonConcat = function (o1, o2) {
        for (var key in o2) {
            o1[key] = o2[key];
        }
        return o1;
    };
    RegisterPage.prototype.otpVerify = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: 'otp successfully verifid',
            duration: 3000,
            position: 'bottom'
        });
        console.log(this.otpData);
        var logged = JSON.parse(localStorage.getItem("loggedData"));
        //let otpverify=this.jsonConcat(this.otpData, logged);
        logged[0]['otp'] = this.otpData['otp'];
        console.log(logged);
        this.AuthServiceProvider.postData(logged[0], 'otpVerify').then(function (result) {
            _this.responsedata = result;
            if (_this.responsedata.status == true) {
                localStorage.setItem('loggedData', JSON.stringify(_this.responsedata.data));
                alert("OTP verified");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__tabs_tabs__["a" /* TabsPage */]);
            }
            else {
                alert("Invalid otp");
            }
            // this.makedropdown=result;
            //  console.log(this.makedropdown );
        });
    };
    RegisterPage.prototype.pushSendAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Already registered mobile number.',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    RegisterPage.prototype.register = function () {
        // let toast = this.toastCtrl.create({
        //   message: 'Register successfully',
        //   duration: 3000,
        //   position: 'bottom'
        // });
        var _this = this;
        var loader = this.loadingCtrl.create({ content: "Please wait.." });
        loader.present();
        console.log(this.userData);
        if (this.userData.username && this.userData.password && this.userData.cpassword && this.userData.mail && this.userData.mobile && this.userData.area && this.userData.city && this.userData.pincode) {
            if (localStorage.getItem('serviceBooking')) {
                console.log(JSON.parse(localStorage.getItem('serviceBooking')));
                var service_1 = JSON.parse(localStorage.getItem('serviceBooking'));
                var serviceUser = this.jsonConcat(service_1, this.userData);
                if (serviceUser['image'] == "") {
                    serviceUser['image'] = "user_avatar.png";
                }
                serviceUser['gadget'] = localStorage.getItem('gadget');
                console.log(serviceUser);
                this.AuthServiceProvider.postData(serviceUser, 'regUser').then(function (result) {
                    _this.responsedata = result;
                    if (_this.responsedata.status == true) {
                        loader.dismiss();
                        // this.push(this.pushData);
                        localStorage.setItem('loggedData', JSON.stringify(_this.responsedata.data));
                        //toast.present();
                        console.log("image:" + service_1.image);
                        console.log("image:" + service_1.audio);
                        if (JSON.parse(localStorage.getItem('serviceBooking')).image) {
                            _this.uploadFile();
                        }
                        if (JSON.parse(localStorage.getItem('serviceBooking')).audio) {
                            _this.uploadAudio();
                        }
                        _this.otpverify = true;
                        if (_this.otpverify == true) {
                            _this.header = "OTP Verfication";
                        }
                        else {
                        }
                        _this.registerpage = false;
                        console.log(result);
                    }
                    else if (_this.responsedata.status == false) {
                        loader.dismiss();
                        _this.pushSendAlert();
                    }
                });
            }
            else if (localStorage.getItem('serviceBooking1')) {
                console.log(JSON.parse(localStorage.getItem('serviceBooking1')));
                var service_2 = JSON.parse(localStorage.getItem('serviceBooking1'));
                var serviceUser = this.jsonConcat(service_2, this.userData);
                if (serviceUser['image'] == "") {
                    serviceUser['image'] = "user_avatar.png";
                }
                serviceUser['gadget'] = localStorage.getItem('gadget');
                console.log(serviceUser);
                this.AuthServiceProvider.postData(serviceUser, 'reg1User').then(function (result) {
                    _this.responsedata = result;
                    if (_this.responsedata.status == true) {
                        loader.dismiss();
                        // this.push(this.pushData);
                        localStorage.setItem('loggedData', JSON.stringify(_this.responsedata.data));
                        //toast.present();
                        console.log("image:" + service_2.image);
                        console.log("image:" + service_2.audio);
                        if (JSON.parse(localStorage.getItem('serviceBooking1')).image) {
                            _this.uploadFile();
                        }
                        if (JSON.parse(localStorage.getItem('serviceBooking1')).audio) {
                            _this.uploadAudio();
                        }
                        _this.otpverify = true;
                        if (_this.otpverify == true) {
                            _this.header = "OTP Verfication";
                        }
                        else {
                        }
                        _this.registerpage = false;
                        console.log(result);
                    }
                    else if (_this.responsedata.status == false) {
                        loader.dismiss();
                        _this.pushSendAlert();
                    }
                });
            }
            else {
                this.AuthServiceProvider.postData(this.userData, 'register').then(function (result) {
                    _this.responsedata = result;
                    if (_this.responsedata.status == true) {
                        loader.dismiss();
                        localStorage.setItem('loggedData', JSON.stringify(_this.responsedata.data));
                        //toast.present();
                        _this.otpverify = true;
                        if (_this.otpverify == true) {
                            _this.header = "OTP Verfication";
                        }
                        else {
                        }
                        _this.registerpage = false;
                        console.log(result);
                    }
                    else if (_this.responsedata.status == false) {
                        loader.dismiss();
                        _this.pushSendAlert();
                    }
                });
            }
        }
        else {
            alert("All fields are required");
        }
    };
    RegisterPage.prototype.loginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.uploadAudio = function () {
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: "file",
            fileName: this.audioData[0]['filename'],
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: { 'fileName': this.audioData[0]['filename'] }
        };
        console.log('filepath', this.audioData[0]['filePath']);
        console.log('filename', this.audioData[0]['filename']);
        // console.log("userid",this.userid);
        //  fileTransfer.upload('<file path>', '<api endpoint>', options)
        fileTransfer.upload(this.audioData[0]['filePath'], 'http://rytefix.in/images/audio.php', options)
            .then(function (data) {
            console.log(data);
        }, function (err) {
            // error
            console.log(err);
            alert('error');
        });
    };
    RegisterPage.prototype.uploadFile = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        //loader.present();
        var fileTransfer = this.transfer.create();
        console.log('image name', this.imgData['imgfilename']);
        var options = {
            fileKey: 'file',
            fileName: this.imgData['imgfilename'],
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {},
            params: { 'fileName': this.imgData['imgfilename'] }
        };
        fileTransfer.upload(this.imgData['imgfilePath'], 'http://rytefix.in/images/image.php', options)
            .then(function (data) {
            console.log(data + " Uploaded Successfully");
            // loader.dismiss();
            // this.presentToast("Image uploaded successfully");
        }, function (err) {
            console.log(err);
            loader.dismiss();
            _this.presentToast(err);
        });
    };
    RegisterPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        // toast.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefix\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n  <ion-toolbar no-padding>\n\n  <ion-title>{{header}}</ion-title>\n\n</ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding *ngIf="registerpage" class="content">\n\n<form [formGroup]="form" (ngSubmit)="register()" >\n\n  <ion-item>\n\n  <ion-label>   <ion-icon name="contact"></ion-icon> </ion-label>\n\n    <ion-input formControlName="username" focuser id="usersignup" type="text" placeholder="Username" [(ngModel)]="userData.username"></ion-input>\n\n   \n\n </ion-item>\n\n <div *ngIf="username.touched && username.invalid" class="alertstyle">\n\n   <div *ngIf="username.errors.required">Please provide a username</div>\n\n </div>\n\n\n\n  <ion-item>\n\n  <ion-label>  <ion-icon name="ios-call"></ion-icon> </ion-label>\n\n  <ion-input formControlName="mobile" type="number" placeholder="Mobile" [(ngModel)]="userData.mobile"></ion-input>\n\n</ion-item>\n\n<div *ngIf="mobile.touched && mobile.invalid" class="alertstyle">\n\n  <div *ngIf="mobile.errors.required">Please provide a mobile no</div>\n\n</div>\n\n\n\n <ion-item>\n\n<ion-label>   <ion-icon name="mail"></ion-icon> </ion-label>\n\n   <ion-input formControlName="mail" type="text" placeholder="Email" [(ngModel)]="userData.mail"></ion-input>\n\n </ion-item>\n\n <div *ngIf="mail.touched && mail.invalid" class="alertstyle">\n\n   <div *ngIf="mail.errors.required">Email is required</div>\n\n   <div *ngIf="mail.errors.email">Invaild email format</div>\n\n </div>\n\n\n\n <ion-item>\n\n<ion-label>   <ion-icon name="lock"></ion-icon> </ion-label>\n\n   <ion-input formControlName="password" type= "{{type}}" placeholder="Password" (focusout)="pass($event.target.value)" [(ngModel)]="userData.password"></ion-input>\n\n   <a ion-button clear color="dark" icon-only item-end (click)="showPw()">\n\n    <ion-icon name="md-eye"></ion-icon>\n\n    </a>\n\n </ion-item>\n\n <div *ngIf="password.touched && password.invalid" class="alertstyle">\n\n   <div *ngIf="password.errors.required">Please provide a password</div>\n\n  \n\n </div>\n\n <ion-item>\n\n<ion-label>  <ion-icon name="lock"></ion-icon> </ion-label>\n\n  <ion-input formControlName="cpassword" type= "{{type}}" placeholder="Confirm Password" (focusout)="cpass($event.target.value)" [(ngModel)]="userData.cpassword"></ion-input>\n\n  <a ion-button clear color="dark" icon-only item-end (click)="showPw()">\n\n    <ion-icon name="md-eye"></ion-icon>\n\n    </a>\n\n</ion-item>\n\n<div *ngIf="cpassword.touched && cpassword.invalid" class="alertstyle">\n\n  <div *ngIf="cpassword.errors.required">Please provide a password</div>\n\n</div>  \n\n<div *ngIf="userCpass">Password not match</div>\n\n<ion-item>\n\n<ion-label> <ion-icon name="ios-pin"></ion-icon> </ion-label>\n\n  <ion-input formControlName="area" type="text" placeholder="Area" [(ngModel)]="userData.area"></ion-input>\n\n</ion-item>\n\n<div *ngIf="area.touched && area.invalid" class="alertstyle">\n\n  <div *ngIf="area.errors.required">Please provide a area</div>\n\n</div> \n\n<ion-item>\n\n<ion-label> <ion-icon name="ios-pin"></ion-icon></ion-label>\n\n  <ion-input formControlName="city" type="text" placeholder="City" [(ngModel)]="userData.city"></ion-input>\n\n</ion-item>\n\n<div *ngIf="city.touched && city.invalid" class="alertstyle">\n\n  <div *ngIf="city.errors.required">Please provide a city</div>\n\n</div> \n\n<ion-item>\n\n<ion-label> <ion-icon name="ios-pin"></ion-icon></ion-label>\n\n  <ion-input formControlName="pincode" type="number" placeholder="Pincode" [(ngModel)]="userData.pincode"></ion-input>\n\n</ion-item>\n\n<div *ngIf="pincode.touched && pincode.invalid" class="alertstyle">\n\n  <div *ngIf="pincode.errors.required">Please provide a pincode</div>\n\n</div>   \n\n\n\n <button ion-button type="submit" [disabled]="disable" class="sign_btn"   round full>Register</button>\n\n </form> \n\n <ion-row>\n\n    <ion-col col-12 text-center>\n\n       <b>Existing User ? </b><a href="#" (click)="loginPage()">Login</a>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n\n\n\n\n<!-- /*otp*/ -->\n\n\n\n<ion-content padding class="content" *ngIf="otpverify" >\n\n<form [formGroup]="form1" (ngSubmit)="otpVerify()" >\n\n\n\n<ion-item class="optscreen">\n\n  <ion-label ><ion-icon name="lock"></ion-icon></ion-label>\n\n  <ion-input formControlName="otp" type="password" placeholder="OTP" [(ngModel)]="otpData.otp"></ion-input>\n\n</ion-item>\n\n\n\n <button ion-button type="submit"  class="sign_btn"   round full>Verify</button>\n\n </form> \n\n</ion-content> '/*ion-inline-end:"N:\ionicprojects\rytefix\rytefix\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditservicebookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_media__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__quotehistory_quotehistory__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the EditservicebookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Port = (function () {
    function Port() {
    }
    return Port;
}());
var EditservicebookingPage = (function () {
    function EditservicebookingPage(navCtrl, navParams, AuthServiceProvider, media, file, loadingCtrl, transfer, camera, platform, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AuthServiceProvider = AuthServiceProvider;
        this.media = media;
        this.file = file;
        this.loadingCtrl = loadingCtrl;
        this.transfer = transfer;
        this.camera = camera;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.recording = false;
        this.audioList = [];
        this.userData = { "make": "", "othermake": "", "modelno": "", "soft": "", "hard": "", "others": "", "pickup": "", "loc": "", "image": "", "audio": "", "bookingid": "" };
        this.userdata1 = { "make1": "", "modelno1": "", "describe": "", "pickup1": "", "loc1": "", "image": "", "audio": "", "bookingid": "" };
        this.form = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            pickup: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            make: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            othermake: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](''),
            modelno: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            soft: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            hard: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            loc: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            promocode: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            others: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required)
        });
        this.form1 = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            pickup1: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            make1: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            modelno1: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            describe: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            loc1: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            promocode1: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]()
        });
        var data = navParams.get('item');
        this.booking_id = data.booking_id;
        this.gadget = data.gadget;
        this.preferLocation();
        if (this.gadget == "Mobile" || this.gadget == "Laptop" || this.gadget == "Tablet") {
            console.log('gadget', this.gadget);
            this.makeService();
            this.softService();
            this.hardService();
            this.getBookedService();
            this.mobile = true;
            this.printer = false;
        }
        else {
            this.getBookedService1();
            this.printer = true;
        }
        this.disable = true;
        this.other = false;
        this.searchBar = false;
    }
    Object.defineProperty(EditservicebookingPage.prototype, "make", {
        get: function () {
            return this.form.get('make');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditservicebookingPage.prototype, "modelno", {
        get: function () {
            return this.form.get('modelno');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditservicebookingPage.prototype, "soft", {
        get: function () {
            return this.form.get('soft');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditservicebookingPage.prototype, "hard", {
        get: function () {
            return this.form.get('hard');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditservicebookingPage.prototype, "others", {
        get: function () {
            return this.form.get('others');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditservicebookingPage.prototype, "make1", {
        get: function () {
            return this.form1.get('make1');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditservicebookingPage.prototype, "modelno1", {
        get: function () {
            return this.form1.get('modelno1');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditservicebookingPage.prototype, "describe", {
        get: function () {
            return this.form1.get('describe');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditservicebookingPage.prototype, "loc1", {
        get: function () {
            return this.form1.get('loc1');
        },
        enumerable: true,
        configurable: true
    });
    EditservicebookingPage.prototype.portChange = function (event) {
        console.log('port:', event.value.length);
        console.log(event.value.length);
        if (event.value.length < 2) {
            this.disable = true;
            this.locvaild = true;
            alert("Select Minimum 2 service provider ");
        }
        else if (event.value.length > 3) {
            alert("Select Maximum 3 service provider ");
            this.disable = true;
            this.locvaild = true;
        }
        else {
            this.locvaild = false;
            this.disable = false;
        }
    };
    EditservicebookingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditservicebookingPage');
    };
    // get booking data to edit
    EditservicebookingPage.prototype.getBookedService = function () {
        var _this = this;
        this.AuthServiceProvider.postData(this.booking_id, 'editData').then(function (result) {
            _this.bookingData = result;
            console.log('booking data:' + _this.bookingData[0]);
            _this.userData.soft = _this.bookingData[0].software;
            console.log(_this.bookingData[0].make);
            if (isNaN(_this.bookingData[0].make)) {
                console.log("num");
                _this.userData.make = "others";
                _this.userData.othermake = _this.bookingData[0].make;
                _this.other = true;
            }
            else {
                console.log("text");
                _this.userData.make = _this.bookingData[0].make;
            }
            _this.userData.modelno = _this.bookingData[0].model;
            _this.userData.hard = _this.bookingData[0].hardware;
            _this.userData.others = _this.bookingData[0].others;
            _this.userData.bookingid = _this.booking_id;
            _this.userData.image = _this.bookingData[0].image;
            _this.userData.audio = _this.bookingData[0].audio;
            if (_this.bookingData[0].pickup_type == 'yes') {
                _this.userData.pickup = 'required';
            }
            else {
                _this.userData.pickup = 'notrequired';
            }
        });
        console.log('userdata', this.userData);
        console.log('userdata1', this.userdata1);
    };
    EditservicebookingPage.prototype.getBookedService1 = function () {
        var _this = this;
        this.AuthServiceProvider.postData(this.booking_id, 'editData').then(function (result) {
            _this.bookingData = result;
            console.log('booking data', _this.bookingData[0]);
            _this.userdata1.make1 = _this.bookingData[0].make;
            _this.userdata1.modelno1 = _this.bookingData[0].model;
            _this.userdata1.describe = _this.bookingData[0].description;
            _this.userdata1.image = _this.bookingData[0].image;
            _this.userdata1.audio = _this.bookingData[0].audio;
            _this.userdata1.bookingid = _this.booking_id;
            if (_this.bookingData[0].pickup_type == 'yes') {
                _this.userdata1.pickup1 = 'required';
            }
            else {
                _this.userdata1.pickup1 = 'notrequired';
            }
        });
        console.log('userdata', this.userData);
        console.log('userdata1', this.userdata1);
    };
    EditservicebookingPage.prototype.serviceReq = function () {
        var _this = this;
        console.log(this.userData.loc);
        console.log(this.userData);
        if (this.userData.soft || this.userData.hard || this.userData.others) {
            var prodata = "data";
        }
        if (this.userData.soft || this.userData.hard || this.userData.others) {
            var prodata = "data";
        }
        if (this.userData.make == "others") {
            var make = this.userData.othermake;
        }
        else {
            make = this.userData.make;
        }
        if (this.userData.make == "others") {
            this.userData['make'] = this.userData.othermake;
        }
        if (make && this.userData.modelno && prodata && this.userData.pickup && this.userData.loc) {
            this.AuthServiceProvider.postData(this.userData, 'updateBooking').then(function (result) {
                _this.responseData = result;
                console.log('booking data', _this.bookingData);
                console.log(_this.userData.image);
                console.log(_this.userData.audio);
                console.log(_this.bookingData[0].image);
                console.log(_this.bookingData[0].audio);
                if (_this.responseData.status == true) {
                    if (_this.userData.image != _this.bookingData[0].image) {
                        console.log("image");
                        _this.uploadFile();
                    }
                    if (_this.userData.audio != _this.bookingData[0].audio) {
                        console.log("audio");
                        _this.uploadAudio();
                    }
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__quotehistory_quotehistory__["a" /* QuotehistoryPage */]);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: 'error on updating data',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                }
            });
        }
        else {
            alert("All fields required");
        }
    };
    EditservicebookingPage.prototype.serviceReq1 = function () {
        var _this = this;
        console.log(this.userdata1.loc1);
        console.log(this.userdata1);
        if (this.userdata1.make1 && this.userdata1.modelno1 && this.userdata1.describe || this.userdata1.pickup1 && this.userdata1.loc1) {
            //  this.navCtrl.setRoot(LoginPage);
            this.AuthServiceProvider.postData(this.userdata1, 'update1Booking').then(function (result) {
                _this.responseData = result;
                console.log('booking data', _this.bookingData);
                if (_this.responseData.status == true) {
                    if (_this.userdata1.image != _this.bookingData[0].image) {
                        _this.uploadFile();
                    }
                    if (_this.userdata1.audio != _this.bookingData[0].audio) {
                        _this.uploadAudio();
                    }
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__quotehistory_quotehistory__["a" /* QuotehistoryPage */]);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: 'error on updating data',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                }
            });
        }
        else {
            alert("All fields required");
        }
    };
    EditservicebookingPage.prototype.makeService = function () {
        var _this = this;
        var gadget = this.gadget;
        console.log(gadget);
        this.AuthServiceProvider.postData(gadget, 'makeService').then(function (result) {
            _this.makedropdown = result;
            console.log(_this.makedropdown);
        });
    };
    EditservicebookingPage.prototype.softService = function () {
        var _this = this;
        var gadget = this.gadget;
        this.AuthServiceProvider.postData(gadget, 'softService').then(function (result) {
            _this.softdropdown = result;
            console.log(_this.softdropdown);
        });
    };
    EditservicebookingPage.prototype.hardService = function () {
        var _this = this;
        var gadget = this.gadget;
        this.AuthServiceProvider.postData(gadget, 'hardService').then(function (result) {
            _this.harddropdown = result;
            console.log(_this.harddropdown);
        });
    };
    EditservicebookingPage.prototype.preferLocation = function () {
        var _this = this;
        this.AuthServiceProvider.getData('preferLocation').then(function (result) {
            _this.preferdropdown = result;
            console.log(_this.preferdropdown);
            var data = new Array;
            for (var i = 0; i < _this.preferdropdown.length; i++) {
                var obj = _this.preferdropdown[i];
                data.push(obj.area);
            }
            console.log(data);
            _this.ports = data;
        });
    };
    EditservicebookingPage.prototype.serviceLoc = function (data) {
        console.log(data.length);
        if (data.length < 2) {
            alert("Select Minimum 2 service provider areas ");
        }
        else if (data.length >= 2) {
            alert(" select");
            this.disable = false;
        }
    };
    EditservicebookingPage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageURI = imageData;
            _this.imageFileName = 'image' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.jpg';
            _this.userData['image'] = _this.imageFileName;
            console.log(_this.imageFileName);
            _this.userdata1['image'] = _this.imageFileName;
            var data = { imgfilename: _this.imageFileName, imgfilePath: _this.imageURI };
            // this.imgList.push(data);
            localStorage.setItem("imageList", JSON.stringify(data));
        }, function (err) {
            console.log(err);
            _this.presentToast(err);
        });
    };
    EditservicebookingPage.prototype.imageDelete = function () {
        var _this = this;
        var alerts = this.alertCtrl.create({
            message: 'Are you sure to delete',
            buttons: [
                {
                    text: 'Yes',
                    handler: function (data) {
                        console.log("image removed");
                        //return true;
                        localStorage.setItem("imageList", "");
                        _this.userData['image'] = "";
                        _this.userdata1['image'] = "";
                    }
                },
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                        return true;
                    }
                }
            ]
        });
        alerts.present();
    };
    EditservicebookingPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    EditservicebookingPage.prototype.preferLoc = function () {
        console.log("prefer");
        this.searchBar = true;
    };
    //Audio function Start
    EditservicebookingPage.prototype.ionViewWillEnter = function () {
        this.getAudioList();
    };
    EditservicebookingPage.prototype.getAudioList = function () {
        if (localStorage.getItem("audiolist")) {
            this.audioList = JSON.parse(localStorage.getItem("audiolist"));
            console.log(this.audioList);
        }
    };
    EditservicebookingPage.prototype.audioDelete = function () {
        var _this = this;
        var alerts = this.alertCtrl.create({
            message: 'Are you sure to delete',
            buttons: [
                {
                    text: 'Yes',
                    handler: function (data) {
                        console.log("image removed");
                        //return true;
                        localStorage.setItem("audiolist", "");
                        _this.userData['audio'] = "";
                        _this.userdata1['audio'] = "";
                    }
                },
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                        return true;
                    }
                }
            ]
        });
        alerts.present();
    };
    EditservicebookingPage.prototype.startRecord = function () {
        if (this.platform.is('ios')) {
            this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.3gp';
            this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
            this.Audio = this.media.create(this.filePath);
        }
        else if (this.platform.is('android')) {
            this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.3gp';
            this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
            this.Audio = this.media.create(this.filePath);
        }
        this.Audio.startRecord();
        this.recording = true;
        // this.countStart=true;
        // this.time();
    };
    EditservicebookingPage.prototype.stopRecord = function () {
        this.Audio.stopRecord();
        // this.countStart=false;
        // this.stop();
        this.userData['audio'] = this.fileName;
        this.userdata1['audio'] = this.fileName;
        var data = { filename: this.fileName, filePath: this.filePath };
        this.audioList.push(data);
        localStorage.setItem("audiolist", JSON.stringify(this.audioList));
        this.recording = false;
        this.getAudioList();
    };
    EditservicebookingPage.prototype.playAudio = function (file, idx) {
        if (this.platform.is('ios')) {
            this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + file;
            this.Audio = this.media.create(this.filePath);
        }
        else if (this.platform.is('android')) {
            this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + file;
            this.Audio = this.media.create(this.filePath);
        }
        this.Audio.play();
        this.Audio.setVolume(0.8);
    };
    EditservicebookingPage.prototype.uploadFile = function () {
        var _this = this;
        // let loader = this.loadingCtrl.create({
        //   content: "Uploading..."
        // });
        // loader.present();
        var fileTransfer = this.transfer.create();
        console.log('image name', this.imageFileName);
        var options = {
            fileKey: 'file',
            fileName: this.imageFileName,
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {},
            params: { 'fileName': this.imageFileName }
        };
        fileTransfer.upload(this.imageURI, 'http://rytefix.in/images/image.php', options)
            .then(function (data) {
            console.log(data + " Uploaded Successfully");
            // loader.dismiss();
            _this.presentToast("Image uploaded successfully");
            _this.imageDelete();
        }, function (err) {
            console.log(err);
            // loader.dismiss();
            _this.presentToast(err);
        });
    };
    EditservicebookingPage.prototype.uploadAudio = function () {
        var _this = this;
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: "file",
            fileName: this.fileName,
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: { 'fileName': this.fileName }
        };
        console.log('filepath', this.filePath);
        console.log('filename', this.fileName);
        console.log("userid", this.userid);
        //  fileTransfer.upload('<file path>', '<api endpoint>', options)
        fileTransfer.upload(this.filePath, 'http://rytefix.in/images/audio.php', options)
            .then(function (data) {
            console.log(data);
            _this.audioDelete();
        }, function (err) {
            // error
            console.log(err);
            alert('error');
        });
    };
    EditservicebookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-editservicebooking',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefix\src\pages\editservicebooking\editservicebooking.html"*/'<ion-header no-border>\n\n  <ion-toolbar no-padding>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"  class="color-wh"></ion-icon>\n\n    </button>\n\n    <ion-title>Edit Booking</ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding *ngIf="mobile">\n\n  <ion-list no-lines>\n\n<form [formGroup]="form" (ngSubmit)="serviceReq()">\n\n  <ion-item >\n\n    <!-- <ion-label>Select Make</ion-label> -->\n\n    <ion-select class="my-select" formControlName="make" name="make" [(ngModel)]="userData.make" >\n\n      <ion-option value="" disabled>Select Make<sup>*</sup></ion-option>\n\n      <ion-option *ngFor="let key  of makedropdown" value="{{key.id}}">{{key.make_name}}</ion-option>\n\n      <ion-option value="others">others</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n  <ion-item *ngIf="other">\n\n      <ion-input formControlName="othermake" name="othermake" type="text" [(ngModel)]="userData.othermake" placeholder="Enter Service Make" clearInput></ion-input>\n\n    </ion-item>\n\n  <div *ngIf="make.touched && make.invalid" class="alertstyle">\n\n    <div *ngIf="make.errors.required">Select Make</div>\n\n  </div>\n\n\n\n  <ion-item>\n\n    <ion-input formControlName="modelno" name="modelno" type="text" [(ngModel)]="userData.modelno" placeholder="Enter Model Number *"\n\n      clearInput></ion-input>\n\n  </ion-item>\n\n  <div *ngIf="modelno.touched && modelno.invalid" class="alertstyle">\n\n    <div *ngIf="modelno.errors.required">Select Model</div>\n\n  </div>\n\n\n\n  <ion-item>\n\n    <ion-label class="align">Select Service Required <sup>*</sup></ion-label>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <!-- <ion-label>Software</ion-label> -->\n\n    <ion-select  class="my-select" formControlName="soft" name="soft" [(ngModel)]="userData.soft">\n\n    \n\n      <ion-option value=""  disabled>Select Software</ion-option> \n\n      <ion-option *ngFor="let key  of softdropdown" value="{{key.id}}" >{{key.service}}</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <!-- <ion-label>Hardware</ion-label> -->\n\n    <ion-select  class="my-select" formControlName="hard" name="hard" [(ngModel)]="userData.hard">\n\n      <ion-option value="" disabled>Select Hardware</ion-option>\n\n      <ion-option *ngFor="let key  of harddropdown" value="{{key.id}}">{{key.service}}</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n \n\n  <ion-item>\n\n    <ion-input formControlName="others" name="others" type="text" [(ngModel)]="userData.others" placeholder="Others" clearInput></ion-input>\n\n  </ion-item>\n\n  <div *ngIf="others.touched && others.invalid||hard.touched && hard.invalid||soft.touched && soft.invalid" class="alertstyle">\n\n    <div *ngIf="others.errors.required||hard.errors.required||soft.errors.required">Select Model</div>\n\n  </div>\n\n\n\n  <ion-item>\n\n    <!-- <ion-label floating>Home Pick Up</ion-label> -->\n\n      <ion-select class="my-select" style="color:#fff"  [(ngModel)]="userData.pickup" formControlName="pickup" >\n\n          <ion-option value="" disabled>Select Home Pick Up<sup>*</sup></ion-option>       \n\n        <ion-option value="required">Required</ion-option>\n\n        <ion-option value="notrequired">Not Required</ion-option>\n\n       \n\n    </ion-select>\n\n    </ion-item>\n\n  <ion-item>\n\n    <select-searchable  class="my-select"\n\n    formControlName="loc" name="loc" type="text" [(ngModel)]="userData.loc"\n\n        title="Select Preferred Location *"\n\n      \n\n        [items]="ports"\n\n        [canSearch]="true"\n\n        [multiple]="true"\n\n        (onChange)="portChange($event)">\n\n    </select-searchable>\n\n</ion-item>\n\n<div  *ngIf="locvaild" class="alertstyle">Select Minimum 2 areas and Maximum 3</div>\n\n<!-- <ion-item>\n\n    <ion-input   formControlName="promocode" name="promocode" type="text" [(ngModel)]="userData.promocode" placeholder="Enter promo code"\n\n      clearInput></ion-input>\n\n  </ion-item> -->\n\n   <!-- <ion-item >\n\n    <ion-label>Select Preferred Locationfor Service</ion-label>\n\n    <ion-select formControlName="loc" name="loc" multiple [(ngModel)]="userData.loc" (ionChange)="serviceLoc($event)">\n\n      <ion-option *ngFor="let key  of preferdropdown" >{{key.area}}</ion-option>\n\n    </ion-select>\n\n  </ion-item> -->\n\n  <!-- <ion-item>\n\n    <ion-input formControlName="loc" name="loc" type="text" [(ngModel)]="userData.loc" (focusin)="preferLoc()" placeholder="Select Preferred Locationfor Service" clearInput></ion-input>\n\n  </ion-item> -->\n\n  <ion-row class="img">\n\n    <ion-col col-4> <h6 style="color:#fff" >Picture <sub>(optional)</sub> </h6></ion-col>\n\n    <ion-col col-1 style="color:#fff"><b>:</b></ion-col>\n\n    <ion-col col-6>\n\n    <div class="upload-img" (click)="getImage()">\n\n    {{userData.image}} <ion-icon name="camera"></ion-icon> </div>\n\n    <div class="upload-img" (click)="imageDelete()" *ngIf="!recording">\n\n    <ion-icon name="ios-close-circle"></ion-icon>\n\n    </div> \n\n    </ion-col>\n\n    </ion-row>\n\n    <ion-row class="voice">\n\n    <ion-col col-4> <h6 style="color:#fff" >Voice Note <sub>(optional)</sub></h6></ion-col>\n\n    <ion-col col-1 style="color:#fff"><b>:</b></ion-col>\n\n    <ion-col col-6 ><div *ngIf="userData.audio"> {{userData.audio}}</div>\n\n    <div class="upload-audio" *ngIf="userData.audio" (click)="audioDelete()">\n\n    <ion-icon name="ios-close-circle"></ion-icon>\n\n    </div>\n\n           \n\n            <div class="upload-audio audiostop"  (click)="stopRecord()" *ngIf="recording">\n\n                <ion-icon name="ios-mic"></ion-icon>\n\n            </div>\n\n            <!-- <div class="upload-audio audiostart"  (click)="startRecord()"  *ngIf="!recording" >\n\n                <ion-icon name="ios-mic-outline"></ion-icon>\n\n            </div> -->\n\n            <div *ngIf="userData.audio==\'\'">\n\n              <div class="upload-audio audiostart" (click)="startRecord()"  *ngIf="!recording" >\n\n                <ion-icon name="ios-mic-outline"></ion-icon>\n\n            </div>\n\n              \n\n            </div>\n\n            <!-- <button ion-button class="record" (click)="stopRecord()" *ngIf="recording"><ion-icon name="ios-mic" color="dark">&nbsp;</ion-icon>&nbsp;&nbsp;Stop</button>\n\n            <button ion-button class="record" (click)="startRecord()" *ngIf="!recording"><ion-icon name="ios-mic" color="dark">&nbsp;</ion-icon>&nbsp;&nbsp;Record</button> -->\n\n    </ion-col>\n\n  </ion-row>\n\n  <!-- <ion-list>\n\n    <ion-item *ngFor="let audio of audioList; index as i;">\n\n      <p>{{audio.filename}}</p>\n\n      {{userData.audio}}\n\n       <button ion-button clear item-end large (click)="playAudio(audio.filename, i)"><ion-icon name="play"></ion-icon></button> \n\n      <div class="upload-audio" (click)="playAudio(audio.filename, i)">\n\n          <ion-icon name="play"></ion-icon>\n\n      </div>\n\n    </ion-item>\n\n  </ion-list> -->\n\n  <!-- <ion-item>\n\n    <p>{{imageURI}}</p>\n\n    <button ion-button color="secondary" (click)="getImage()">Get Image</button>\n\n    <button ion-button (click)="uploadFile()">Upload</button>\n\n  </ion-item> -->\n\n  <button ion-button type="submit" [disabled]="disable" class="sign_btn"  round full>Service Request</button>\n\n</form>\n\n</ion-list>\n\n\n\n</ion-content>\n\n<ion-content padding *ngIf="printer">\n\n  <ion-list no-lines>\n\n<form [formGroup]="form1" (ngSubmit)="serviceReq1()">\n\n  <ion-item >\n\n    <ion-input formControlName="make1" name="make1" type="text" [(ngModel)]="userdata1.make1" placeholder="Enter Service Make *" clearInput></ion-input>\n\n  </ion-item>\n\n  <div *ngIf="make1.touched && make1.invalid" class="alertstyle">\n\n    <div *ngIf="make1.errors.required">Select Make</div>\n\n  </div>\n\n\n\n  <ion-item>\n\n    <ion-input formControlName="modelno1" name="modelno1" type="text" [(ngModel)]="userdata1.modelno1" placeholder="Enter Model Number *"\n\n      clearInput></ion-input>\n\n  </ion-item>\n\n  <div *ngIf="modelno1.touched && modelno1.invalid" class="alertstyle">\n\n    <div *ngIf="modelno1.errors.required">Select Model</div>\n\n  </div>\n\n\n\n  <ion-item>\n\n    \n\n    <ion-textarea formControlName="describe" name="describe" type="text" [(ngModel)]="userdata1.describe" placeholder="Describe the problem *"\n\n      clearInput></ion-textarea>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <!-- <ion-label floating>Home Pick Up</ion-label> -->\n\n      <ion-select class="my-select" style="color:#fff"  [(ngModel)]="userdata1.pickup1" formControlName="pickup1" >\n\n          <ion-option value="" disabled>Select Home Pick Up<sup>*</sup></ion-option>       \n\n        <ion-option value="required">Required</ion-option>\n\n        <ion-option value="notrequired">Not Required</ion-option>\n\n       \n\n    </ion-select>\n\n    </ion-item>\n\n  <ion-item>\n\n    <select-searchable\n\n    formControlName="loc1" name="loc1" type="text" [(ngModel)]="userdata1.loc1"\n\n        title="Select Preferred Location *"\n\n        [items]="ports"\n\n        [canSearch]="true"\n\n        [multiple]="true"\n\n        (onChange)="portChange($event)">\n\n    </select-searchable>\n\n</ion-item>\n\n<div  class="alertstyle">\n\n    <div >*Select Minimum 2 areas and Maximum 3</div>\n\n  </div>\n\n<!-- <ion-item>\n\n    <ion-input formControlName="promocode1" name="promocode1" type="text" [(ngModel)]="userdata1.promocode1" placeholder="Enter promo code"\n\n      clearInput></ion-input>\n\n  </ion-item> -->\n\n  <!-- <ion-item>\n\n    <ion-label>Select Preferred Locationfor Service</ion-label>\n\n    <ion-select formControlName="loc1" name="loc1" multiple [(ngModel)]="userdata1.loc1" (ionChange)="serviceLoc($event)">\n\n      <ion-option *ngFor="let key  of preferdropdown" >{{key.area}}</ion-option>\n\n    </ion-select>\n\n  </ion-item> -->\n\n<!-- <ion-item>\n\n    <ion-input formControlName="loc" name="loc" type="text" [(ngModel)]="userData.loc" (focusin)="preferLoc()" placeholder="Select Preferred Locationfor Service" clearInput></ion-input>\n\n  </ion-item>  -->\n\n  <div class="upload-img" (click)="getImage()">\n\n      <ion-icon name="camera"></ion-icon>\n\n      <p>{{imageURI}}</p>\n\n      {{userData.image}}\n\n  </div>\n\n  \n\n  <ion-row class="voice">\n\n    <ion-col col-4> <h6 style="color:#fff" >Voice Note <sub>(optional)</sub></h6></ion-col>\n\n    <ion-col col-1 class="color-wh"><b>:</b></ion-col>\n\n    <ion-col col-4>\n\n        <!-- <button class="record" ion-button (click)="audio()"></button>\n\n            <ion-icon name="ios-mic" color="dark">&nbsp;</ion-icon> record</button> -->\n\n            <div class="upload-audio" (click)="stopRecord()" *ngIf="recording">\n\n                <ion-icon name="ios-mic"></ion-icon>\n\n            </div>\n\n            <div class="upload-audio" (click)="startRecord()"  *ngIf="!recording" >\n\n                <ion-icon name="ios-mic"></ion-icon>\n\n            </div>\n\n            <!-- <button ion-button class="record" (click)="stopRecord()" *ngIf="recording"><ion-icon name="ios-mic" color="dark">&nbsp;</ion-icon>&nbsp;&nbsp;Stop</button>\n\n            <button ion-button class="record" (click)="startRecord()" *ngIf="!recording"><ion-icon name="ios-mic" color="dark">&nbsp;</ion-icon>&nbsp;&nbsp;Record</button> -->\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-list>\n\n    <ion-item *ngFor="let audio of audioList; index as i;">\n\n      <p>{{audio.filename}}</p>\n\n      {{userData.audio}}\n\n      <!-- <button ion-button clear item-end large (click)="playAudio(audio.filename, i)"><ion-icon name="play"></ion-icon></button> -->\n\n      <div class="upload-audio" (click)="playAudio(audio.filename, i)">\n\n          <ion-icon name="play"></ion-icon>\n\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button type="submit" [disabled]="disable" class="sign_btn"  round full>Save Booking</button>\n\n</form>\n\n</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"N:\ionicprojects\rytefix\rytefix\src\pages\editservicebooking\editservicebooking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_media__["a" /* Media */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], EditservicebookingPage);
    return EditservicebookingPage;
}());

//# sourceMappingURL=editservicebooking.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicebooking_servicebooking__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quotehistory_quotehistory__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wallet_wallet__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__invitefrd_invitefrd__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__otherservicebooking_otherservicebooking__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
// import { Http, Headers, RequestOptions } from '@angular/http';










var HomePage = (function () {
    // user: FormGroup;
    function HomePage(navCtrl, AuthServiceProvider, alertCtrl, toastCtrl, app, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.AuthServiceProvider = AuthServiceProvider;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.app = app;
        this.http = http;
        this.home = true;
        this.print = false;
        // console.log("view",localStorage.getItem('loggedData'));
        if (localStorage.getItem('loggedData')) {
            var data = JSON.parse(localStorage.getItem('loggedData'));
            this.userId = data[0].id;
            console.log(this.userId);
            ///////////////BRANCH LOGIN IMPLEMENTATION
            // const Branch = window['Branch'];
            // var userId = data[0].username;
            // Branch.setIdentity(userId).then(function (res) {
            //   console.log('Response: ' + JSON.stringify(res))
            // }).catch(function (err) {
            //   console.log('Error: ' + JSON.stringify(err.message))
            // })
            // this.getCreditHistory();
            // this.getRewardPoints();
            this.AuthServiceProvider.postData(data[0], 'getUserdata').then(function (result) {
                _this.responsedata = result;
                if (_this.responsedata.status == true) {
                    // toast.present();
                    localStorage.setItem('loggedData', JSON.stringify(_this.responsedata.data));
                    _this.walletamount = _this.responsedata.data[0].rf_wallet_bal;
                    // console.log("amount", this.walletamount);
                }
            });
        }
        else {
            this.walletamount = "0";
            console.log("no data found");
        }
    }
    HomePage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad FaqPage');
    };
    HomePage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', currentIndex);
    };
    HomePage.prototype.Gadgets = function () {
        var _this = this;
        if (localStorage.getItem("loggedData")) {
            var prompt_1 = this.alertCtrl.create({
                title: 'Select Gadget Type',
                // message: 'Select option ',
                inputs: [
                    {
                        type: 'radio',
                        label: 'Mobile',
                        value: 'Mobile'
                    },
                    {
                        type: 'radio',
                        label: 'Laptop',
                        value: 'Laptop'
                    },
                    {
                        type: 'radio',
                        label: 'Tablet',
                        value: 'Tablet'
                    },
                    // {
                    //   type: 'radio',
                    //   label: 'Desktop Computer',
                    //   value: 'Computer'
                    // },
                    {
                        type: 'radio',
                        label: 'Desktop computer',
                        value: 'Computer'
                    },
                    // {
                    //   type: 'radio',
                    //   label: 'Printer, Tv & Others',
                    //   value: 'Printer'
                    // },
                    {
                        type: 'radio',
                        label: 'Printers & others',
                        value: 'Printer'
                    },
                ],
                buttons: [
                    {
                        text: "Cancel",
                        handler: function (data) {
                            console.log("cancel clicked");
                        }
                    },
                    {
                        text: "Ok",
                        handler: function (data) {
                            console.log(data);
                            if (data) {
                                localStorage.setItem('gadget', data);
                                console.log("search clicked");
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__servicebooking_servicebooking__["a" /* ServicebookingPage */]);
                            }
                            else {
                                var toast = _this.toastCtrl.create({
                                    message: "Please select gadget type",
                                    duration: 3000,
                                    position: 'top'
                                });
                                toast.present();
                                return false;
                            }
                        }
                    }
                ]
            });
            prompt_1.present();
        }
        else {
            var alert_1 = this.alertCtrl.create({
                // title: 'Warning',
                message: 'Please login or register to use this feature !',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'OK',
                        handler: function () {
                            console.log('Buy clicked');
                            _this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    HomePage.prototype.banner1 = function () {
        var _this = this;
        if (localStorage.getItem("loggedData")) {
            var prompt_2 = this.alertCtrl.create({
                title: 'Select Gadget Type',
                // message: 'Select option ',
                inputs: [
                    {
                        type: 'radio',
                        label: 'Mobile',
                        value: 'Mobile'
                    },
                    {
                        type: 'radio',
                        label: 'Laptop',
                        value: 'Laptop'
                    },
                    {
                        type: 'radio',
                        label: 'Tablet',
                        value: 'Tablet'
                    },
                    {
                        type: 'radio',
                        label: 'Desktop Computer',
                        value: 'Computer'
                    },
                    {
                        type: 'radio',
                        label: 'Printer, Tv & Others',
                        value: 'Printer'
                    },
                ],
                buttons: [
                    {
                        text: "Cancel",
                        handler: function (data) {
                            console.log("cancel clicked");
                        }
                    },
                    {
                        text: "Ok",
                        handler: function (data) {
                            console.log(data);
                            if (data) {
                                localStorage.setItem('gadget', data);
                                console.log("search clicked");
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__servicebooking_servicebooking__["a" /* ServicebookingPage */]);
                            }
                            else {
                                var toast = _this.toastCtrl.create({
                                    message: "Please select gadget type",
                                    duration: 3000,
                                    position: 'top'
                                });
                                toast.present();
                                return false;
                            }
                        }
                    }
                ]
            });
            prompt_2.present();
        }
        else {
            var alert_2 = this.alertCtrl.create({
                // title: 'Warning',
                message: 'Please login or register to book service !',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'OK',
                        handler: function () {
                            console.log('Buy clicked');
                            _this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                        }
                    }
                ]
            });
            alert_2.present();
        }
    };
    HomePage.prototype.banner2 = function () {
        var _this = this;
        if (localStorage.getItem("loggedData")) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__invitefrd_invitefrd__["a" /* InvitefrdPage */]);
        }
        else {
            var alert_3 = this.alertCtrl.create({
                // title: 'Warning',
                message: 'Please login or register to book service !',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'OK',
                        handler: function () {
                            console.log('Buy clicked');
                            _this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                        }
                    }
                ]
            });
            alert_3.present();
        }
    };
    HomePage.prototype.banner3 = function () {
        var _this = this;
        if (localStorage.getItem("loggedData")) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__wallet_wallet__["a" /* WalletPage */]);
        }
        else {
            var alert_4 = this.alertCtrl.create({
                // title: 'Warning',
                message: 'Please login or register to book service !',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'OK',
                        handler: function () {
                            console.log('Buy clicked');
                            _this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                        }
                    }
                ]
            });
            alert_4.present();
        }
    };
    HomePage.prototype.wallet = function () {
        var _this = this;
        if (localStorage.getItem("loggedData")) {
            console.log(JSON.parse(localStorage.getItem("loggedData")));
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__wallet_wallet__["a" /* WalletPage */]);
        }
        else {
            // alert("please login Required");
            // console.log(JSON.parse(localStorage.getItem("loggedData")));
            var alert_5 = this.alertCtrl.create({
                title: 'Warning',
                message: 'Please login or register to use this feature !',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'OK',
                        handler: function () {
                            console.log('Buy clicked');
                            // this.navCtrl.push(RegisterPage);
                            // this.navCtrl.push(WalletPage);
                            _this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                        }
                    }
                ]
            });
            alert_5.present();
        }
    };
    HomePage.prototype.quoteHistory = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Login',
            subTitle: 'Login Required.',
            buttons: ['Ok']
        });
        // alert("test");
        if (localStorage.getItem("loggedData")) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__quotehistory_quotehistory__["a" /* QuotehistoryPage */]);
        }
        else {
            var alert_6 = this.alertCtrl.create({
                // title: 'Warning',
                message: 'Please login or register to use this feature !',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'OK',
                        handler: function () {
                            console.log('Buy clicked');
                            // this.navCtrl.setRoot(LoginPage);
                            _this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                        }
                    }
                ]
            });
            alert_6.present();
        }
    };
    HomePage.prototype.referAndEarn = function () {
        // let alert = this.alertCtrl.create({
        //   title: 'Refer & Earn',
        //   subTitle: 'we are almost ready  ...wait for few more days ',
        //   buttons: ['Dismiss']
        // });
        // alert.present();
        var _this = this;
        if (localStorage.getItem("loggedData")) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__invitefrd_invitefrd__["a" /* InvitefrdPage */]);
        }
        else {
            var alert_7 = this.alertCtrl.create({
                // title: 'Warning',
                message: 'Please login or register to use this feature !',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'OK',
                        handler: function () {
                            console.log('Buy clicked');
                            _this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                        }
                    }
                ]
            });
            alert_7.present();
        }
    };
    HomePage.prototype.gotoServicebook = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__servicebooking_servicebooking__["a" /* ServicebookingPage */]);
    };
    HomePage.prototype.acservice = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__otherservicebooking_otherservicebooking__["a" /* OtherservicebookingPage */], { item: 'AC' });
    };
    HomePage.prototype.plumbing = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__otherservicebooking_otherservicebooking__["a" /* OtherservicebookingPage */], { item: 'Plumbing' });
    };
    HomePage.prototype.homeAppliance = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__otherservicebooking_otherservicebooking__["a" /* OtherservicebookingPage */], { item: 'HomeAppliance' });
    };
    HomePage.prototype.beauty = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__otherservicebooking_otherservicebooking__["a" /* OtherservicebookingPage */], { item: 'Beauty' });
    };
    HomePage.prototype.electrical = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__otherservicebooking_otherservicebooking__["a" /* OtherservicebookingPage */], { item: 'Electrical' });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"N:\ionicprojects\rytefix\rytefix\src\pages\home\home.html"*/'<ion-header no-border>\n\n        <ion-toolbar no-padding>\n\n            <button ion-button menuToggle>\n\n                <ion-icon class="color-wh" name="menu"></ion-icon>\n\n            </button>\n\n            <ion-title>Home</ion-title>\n\n        </ion-toolbar>\n\n    </ion-header>\n\n<ion-content>\n\n        <ion-slides class="slides" pager="true"autoplay="2000" loop="true" speed="1000" >\n\n                <ion-slide >\n\n                  <img src = \'http://rytefix.in/images/imgs/customerAppImages/banners.jpg\' (click)="Gadgets()">\n\n                </ion-slide >\n\n                <ion-slide >\n\n                        <img src = \'http://rytefix.in/images/imgs/customerAppImages/banners1.jpg\' (click)="banner2()">\n\n                </ion-slide>\n\n                <ion-slide >\n\n                        <img src = \'http://rytefix.in/images/imgs/customerAppImages/banners2.jpg\' (click)="Gadgets()">\n\n                </ion-slide>\n\n              </ion-slides>\n\n       \n\n              <ion-grid>\n\n                    <div class="animate-left">\n\n              <ion-row>\n\n                  <ion-col col-6 text-center (click)="Gadgets()"  class="ion-col" >\n\n                    <!-- <div class="round"> -->\n\n                            <img src="\n\n                            http://rytefix.in/images/imgs/customerAppImages/icon-1.png" class="img-1"/>\n\n                    <!-- </div>    -->\n\n                   \n\n                        <p>Mobile & laptop</p>\n\n             </ion-col>\n\n                  <ion-col col-6 text-center (click)="acservice()"  class="ion-col">\n\n                        <!-- <div class="round"> -->\n\n                        <img src="\n\n                        http://rytefix.in/images/imgs/customerAppImages/icon-2.png" class="img-1"/>\n\n                       <!-- </div> -->\n\n                        <p>AC service</p>\n\n                  </ion-col>\n\n              </ion-row>\n\n            </div>\n\n\n\n            <div class="animate-right">\n\n              <ion-row>\n\n                    <ion-col col-6 text-center (click)="plumbing()"  class="ion-col">\n\n                            <!-- <div class="round"> -->\n\n                            <img src="\n\n                            http://rytefix.in/images/imgs/customerAppImages/icon-4.png" class="img-1"/>\n\n                        <!-- </div> -->\n\n                            <p>Plumbing services</p>\n\n                    </ion-col>\n\n\n\n                    <ion-col col-6 text-center (click)="homeAppliance()"  class="ion-col">\n\n                            <!-- <div class="round"> -->\n\n                            <img src="\n\n                            http://rytefix.in/images/imgs/customerAppImages/icon-4.png" class="img-1"/>\n\n                        <!-- </div> -->\n\n                            <p>Home appliances</p>\n\n                    </ion-col>\n\n                </ion-row>\n\n                </div>\n\n\n\n                <div class="animate-right">\n\n                        <ion-row>\n\n                              <!-- <ion-col col-6  text-center (click)="wallet()"  class="ion-col">\n\n                                      <img src="\n\n                                      http://rytefix.in/images/imgs/customerAppImages/icon-3.png" class="img-1"  style="opacity:0.5"/>\n\n                                      <p>RF Wallet</p>\n\n                                      <span class="balance">₹{{walletamount}}</span>\n\n                                      \n\n                              </ion-col> -->\n\n                              <ion-col col-6 text-center (click)="beauty()"  class="ion-col">\n\n                                    <!-- <div class="round"> -->\n\n                                    <img src="\n\n                                    http://rytefix.in/images/imgs/customerAppImages/icon-4.png" class="img-1"/>\n\n                                <!-- </div> -->\n\n                                    <p>Beauty Services</p>\n\n                            </ion-col>\n\n                              <ion-col col-6 text-center (click)="electrical()"  class="ion-col">\n\n                                      <!-- <div class="round"> -->\n\n                                      <img src="\n\n                                      http://rytefix.in/images/imgs/customerAppImages/icon-4.png" class="img-1"/>\n\n                                  <!-- </div> -->\n\n                                      <p>Electrical services</p>\n\n                              </ion-col>\n\n                          </ion-row>\n\n                          </div>\n\n            </ion-grid>\n\n\n\n            \n\n   \n\n</ion-content>\n\n    \n\n    \n\n    '/*ion-inline-end:"N:\ionicprojects\rytefix\rytefix\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"], __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[240]);
//# sourceMappingURL=main.js.map