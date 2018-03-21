import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ServicebookingPage } from '../pages/servicebooking/servicebooking';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { QuotehistoryPage } from '../pages/quotehistory/quotehistory';
import { QuoteviewPage } from '../pages/quoteview/quoteview';
import { QuotemapPage } from '../pages/quotemap/quotemap';
import { FaqPage } from '../pages/faq/faq';
import { ContactusPage } from '../pages/contactus/contactus';
import { ChangepassPage } from '../pages/changepass/changepass';
import { InvitefrdPage } from  '../pages/invitefrd/invitefrd';
import { ProfilePage } from '../pages/profile/profile';
import { ViewacceptQuotePage } from '../pages/viewaccept-quote/viewaccept-quote';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
//import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { SelectSearchableModule } from 'ionic-select-searchable'
import { CallNumber } from '@ionic-native/call-number';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation'; 
import { IntrosliderPage } from '../pages/introslider/introslider';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { AppRate } from '@ionic-native/app-rate';
import { HeaderColor } from '@ionic-native/header-color';
import { WalletPage } from '../pages/wallet/wallet';
import { EmailComposer } from '@ionic-native/email-composer';
import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AddDataProvider } from '../providers/add-data/add-data'; 
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { ServicestateProvider } from '../providers/servicestate/servicestate';
import { EditservicebookingPage } from '../pages/editservicebooking/editservicebooking';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Badge } from '@ionic-native/badge';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { VendorratingPage } from '../pages/vendorrating/vendorrating';
import { Ionic2RatingModule } from 'ionic2-rating';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Device } from '@ionic-native/device';
import { AppUpdate } from '@ionic-native/app-update';
import { OtherservicebookingPage } from '../pages/otherservicebooking/otherservicebooking';
import { DatePicker } from '@ionic-native/date-picker';
import { EditotherservicebookingPage } from '../pages/editotherservicebooking/editotherservicebooking';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TabsPage,
    ServicebookingPage,
    LoginPage,
    QuotehistoryPage,
    QuotemapPage,
    FaqPage,
    ViewacceptQuotePage,
    ContactusPage,
    ChangepassPage,
    ProfilePage,
    InvitefrdPage,
    QuoteviewPage,
    RegisterPage,
    IntrosliderPage,
    WalletPage,
    EditservicebookingPage,
    VendorratingPage,
    OtherservicebookingPage,
    EditotherservicebookingPage
  ],
  imports: [
    BrowserModule,HttpModule,SelectSearchableModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule ,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ServicebookingPage,
    LoginPage,
    RegisterPage,
    TabsPage,
    ViewacceptQuotePage,
    FaqPage,
    ContactusPage,
    ChangepassPage,
    InvitefrdPage,
    ProfilePage,
    QuotehistoryPage,
    QuoteviewPage,
    QuotemapPage,
    IntrosliderPage,
    WalletPage,
    EditservicebookingPage,
    VendorratingPage,
    OtherservicebookingPage,
    EditotherservicebookingPage
  ],
  providers: [
   
    StatusBar,
    SplashScreen,
    Push,
    Geolocation,
    CallNumber,
    Media,
    Facebook,
    File,FileTransfer,FilePath,
    Camera,
    EmailComposer,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,AddDataProvider,
    ServicestateProvider,
    AppRate,
    HeaderColor,
    Badge,
    GoogleAnalytics,
    AndroidPermissions,
    Device,
    AppUpdate,
    DatePicker,
  ]
})
export class AppModule {}
