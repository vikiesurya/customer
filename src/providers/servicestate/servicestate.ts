// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the ServicestateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicestateProvider {
  url: string = 'http://rytefix.in/apitest';
  constructor(public http: Http) {
    console.log('Hello ServicestateProvider Provider');
  }

  // http://rytefix.in/apitest/cusapi.php?action=cancelBooking&bid=3351&cancelreason=TestCancelbooking

  cancelBooking(bid,reason){
    console.log('bookingId',bid);
    console.log('reason',reason);
    return this.http.get("http://rytefix.in/apitest/cusapi.php?action=cancelBooking&bid="+bid+"&cancelreason="+reason)
    .map(res =>{ 
       console.log(res.json());
      return res.json()
    })
    
  }

  reportproblem(vid,bid,reason){
   
  // return this.http.get("http://rytefix.in/apitest/vendorapinew.php?action=newServiceDetails&vid="+userid)
  return this.http.get("http://rytefix.in/apitest/cusapi.php?action=cusReportProblem&vid="+vid+"&bid="+bid+"&reason="+reason)
  .map(res =>{ 
     console.log(res.json());
    return res.json()
  })
  
}

completeService(vid,bid){
   
return this.http.get("http://rytefix.in/apitest/cusapi.php?action=bookingCompleted&bid="+bid+"&vid="+vid)
.map(res =>{ 
   console.log(res.json());
  return res.json()
})

}

// http://sunrisetechs.com/api/cusapi.php?action=promoApply&cid=101&bid=121&pcode=Test

creditearns(cid){
  return this.http.get("http://rytefix.in/apitest/cusapi.php?action=customerEarning&cid="+cid)
  .map(res =>{ 
     console.log(res.json());
    return res.json()
  })
  
  }

  promocode(cid,bid,pcode){
    return this.http.get("http://rytefix.in/apitest/cusapi.php?action=promoApply&cid="+cid+"&bid="+bid+"&pcode="+pcode)
  .map(res =>{ 
     console.log(res.json());
    return res.json()
  })
  }
  Redeem(cid,bid){
    console.log('cid',cid);
    console.log('bid',bid);
    return this.http.get(this.url+"/cusapi.php?action=redeemStatus&cid="+cid+"&bid="+bid)
  .map(res =>{ 
     console.log(res.json());
    return res.json()
  })
  }

  verifyMobile(mobile){
    console.log('mobile',mobile);
    return this.http.get('http://rytefix.in/apitest/cusapi.php?action=mobileVerify&mobile='+mobile)
  .map(res =>{ 
     console.log(res.json());
    return res.json()
  })
  }

  verifyMobileStatus(mobile){
    console.log('mobile',mobile);
    return this.http.get('http://rytefix.in/apitest/verifyNumber.php',mobile)
  .map(res =>{ 
     console.log(res.json());
    return res.json()
  })
  }

  referEarnings(data){
    console.log(data);
    // let serverData = {userid:data};
    return this.http.post('http://rytefix.in/apitest/referrals.php',data)
  .map(res =>{ 
    //  console.log(res.json());
    return res.json()
  })
  }

  referEarningStatus(data){
    console.log(data);
    // let serverData = {userid:data};
    return this.http.get('http://rytefix.in/apitest/updateapi.php?action=redeemURmoney&cid='+data.userid+'&credits='+data.credits)
  .map(res =>{ 
    //  console.log(res.json());
    return res.json()
  })
  }

  welcomeBonusRedeem(data){
    console.log(data);
    // let serverData = {userid:data};
    return this.http.get('http://rytefix.in/apitest/updateapi.php?action=redeemWelcomeBonus&cid='+data.userid+'&credits='+data.credits)
  .map(res =>{ 
    //  console.log(res.json());
    return res.json()
  })
  }

  welcomeBonusStatus1(data){
    console.log(data);
    // let serverData = {userid:data};
    return this.http.post('http://rytefix.in/apitest/welcome_status1.php',data)
  .map(res =>{ 
    //  console.log(res.json());
    return res.json()
  })
  }

  welcomeBonusStatus2(data){
    console.log(data);
    // let serverData = {userid:data};
    return this.http.post('http://rytefix.in/apitest/welcome_status2.php',data)
  .map(res =>{ 
    //  console.log(res.json());
    return res.json()
  })
  }


  referEarningStatus1(data){
    console.log(data);
    // let serverData = {userid:data};
    return this.http.post('http://rytefix.in/apitest/referrals_redeem1.php',data)
  .map(res =>{ 
    //  console.log(res.json());
    return res.json()
  })
  }

  referEarningStatus2(data){
    console.log(data);
    // let serverData = {userid:data};
    return this.http.post('http://rytefix.in/apitest/referrals_redeem2.php',data)
  .map(res =>{ 
    //  console.log(res.json());
    return res.json()
  })
  }

  welcomeBonus(data){
    console.log(data);
    // let serverData = {userid:data};
    return this.http.post('http://rytefix.in/apitest/referrals_welcome.php',data)
  .map(res =>{ 
    //  console.log(res.json());
    return res.json()
  })
  }

  vendorReview(data){
    console.log(data);
    // let serverData = {userid:data};
    return this.http.post('http://rytefix.in/apitest/vendorreview.php',data)
  .map(res =>{ 
    //  console.log(res.json());
    return res.json()
  })
  }

  referAndEarnContent(){
    // 
    return this.http.get('http://rytefix.in/apitest/refer_n_earn_content.php')
    .map(res =>{ 
        console.log(res.json());
      return res.json()
    })
  }
}
