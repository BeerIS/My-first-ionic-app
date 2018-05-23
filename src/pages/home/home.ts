import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  msg = "";
  username;
  password;
  constructor(public navCtrl: NavController) {

  }

  signIn(username,password)
  {
    // alert("OK " + username + " " + password);
    // let msg;
    if(username==="admin"&&password==="superman")
    {
      this.msg = "OK";
    }
    else
    {
      this.msg = "Invalid username or password";
    }
    // alert(msg);
  }
  clearForm()
  {
    this.username="";
    this.password="";
  }


}
