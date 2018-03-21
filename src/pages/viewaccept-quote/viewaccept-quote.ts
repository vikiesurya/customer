import { Component } from '@angular/core';
import {ToastController, AlertController,IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import {QuoteviewPage} from '../quoteview/quoteview';
import {TabsPage} from '../tabs/tabs';

/**
 * Generated class for the ViewacceptQuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewaccept-quote',
  templateUrl: 'viewaccept-quote.html',
})
export class ViewacceptQuotePage {
  
  viewdata :any;
  constructor(public navCtrl: NavController,
    public call: CallNumber,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,public navParams: NavParams) {
      this.viewdata=this.navParams.get('data');
      console.log("problem",this.viewdata.hardService)
      console.log("viewdata",this.viewdata);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewacceptQuotePage');
  }
  
  async contactUs():Promise<any>{
    try{
      await this.call.callNumber(this.viewdata.mobile,true);
      console.log("mobile no", this.viewdata.mobile);
    }
    catch(e){
      console.error(e);
    }
  }
  declineQuote(){
    console.log('declineQuote');
      let prompt = this.alertCtrl.create({
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
            handler: data => {
              console.log('Cancel clicked');  
            }
          },
          {
            text:'Ok',
            handler: data => {
              // let validateObj = this.validate(data);
                        if (data.reason == "") {
                          let toast = this.toastCtrl.create({
                            message: "Please enter the reason ",
                            duration: 3000,
                            position: 'bottom'
                          });
                          toast.present();
                            return false;
                        } 
                        else {
                          let toast = this.toastCtrl.create({
                                message: "Now you can accept other quotes",
                                duration: 3000,
                                position: 'bottom'
                              });
                              toast.present();
                              this.gotoQuoteview();
                              //return false;
                        }            
            }
          }
        ]
      });
      prompt.present();
     // this.gotoQuoteview();
  
  }
  completeQuote(){
    console.log('declineQuote');
    let prompt = this.alertCtrl.create({
      message: "Service completed in service center and you paid for the service",
      buttons: [
        {
          text: 'Yes',
          handler: data => {
            console.log('yes clicked'); 
              let toast = this.toastCtrl.create({
                    message: "Congratulations! You can use the credit",
                    duration: 3000,
                    position: 'bottom'
                  });
                 // this.btntext='Complete';     
                  toast.present();
                  this.navCtrl.push(TabsPage);
                  //this.gotoQuoteview();
                  //return false;
            
          }
        },
        {
          text:'No',
          handler: data => {  
           alert(" Please pay for the service and then complete");
            return true;
          }
        }
      ]
    });
    prompt.present();
  }
  
   gotoQuoteview(){
     this.navCtrl.push(QuoteviewPage);
   }
}
