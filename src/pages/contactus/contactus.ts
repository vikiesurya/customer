import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the ContactusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html',
})
export class ContactusPage {

  constructor(public navCtrl: NavController, public call: CallNumber,public emailComposer: EmailComposer, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactusPage');
  }
  async contactUs():Promise<any>{
    try{
      await this.call.callNumber('7358711554',true);
    }
    catch(e){
      console.error(e);
    }
  }

  EmailUs(){
    let email = {
      to: 'admin@rytefix.com',
      subject: 'Your Subject',
      body: ' Enter your Query with Username' ,
      isHtml: true
    };

    this.emailComposer.open(email);
  }

}
