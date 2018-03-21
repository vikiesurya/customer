import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
import { AddDataProvider } from '../../providers/add-data/add-data'; 
import { LoginPage } from '../login/login';
export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-introslider',
  templateUrl: 'introslider.html',
})
export class IntrosliderPage {

  slides: Slide[];
  showSkip = true;
  dir: string = 'ltr';
item:any;
data1:any;
data2:any;
data3:any;
title1:any;
content1:any;
title2:any;
content2:any;
title3:any;
content3:any;
  constructor(public navCtrl: NavController,
    public intro:AddDataProvider, public navParams: NavParams, public menu: MenuController) {
      localStorage.setItem('introslider',JSON.stringify(true)); 
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntrosliderPage');
   this.gotointro();
  }

  signIn() {
    this.navCtrl.push(LoginPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }
  signUp() {
    this.navCtrl.push(RegisterPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  home() {
    this.navCtrl.setRoot(TabsPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }
  gotointro(){
    console.log("data");
     this.intro.getIntroslide()
       .subscribe(data =>{
         this.data1 = data.data[1];
         this.data2 = data.data[2];
         this.data3 = data.data[3];
         this.title1=this.data1.title;
        this.content1=this.data1.content;
        this.title2=this.data2.title;
        this.content2=this.data2.content;
        this.title3=this.data3.title;
        this.content3=this.data3.content;

         console.log("data1",this.title1);
         console.log("data2",this.content1);
         console.log("data3",this.data3);
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
        
       })
 }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
