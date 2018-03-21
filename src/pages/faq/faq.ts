import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddDataProvider } from '../../providers/add-data/add-data'; 
/**
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class FaqPage {
 // fdata:any={};
  item:any=[];
  constructor(public navCtrl: NavController,public faqapi:AddDataProvider, public navParams: NavParams) {
    this. gotoFaq();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqPage');
    this. gotoFaq();
  }
  gotoFaq(){
   console.log("data");
    this.faqapi.getFaq()
      .subscribe(data =>{
        this.item=data[0].content;
        //this.fdata=this.item.fdata;
        console.log(this.item);
       // console.log(this.fdata.content);
       
      })
}
}
