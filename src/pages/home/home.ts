import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

menuData = [
  { title : "Profile", pic:"assets/imgs/menu2.jpg" , pushPage: "AccountPage"},
  { title : "A propos de nous", pic:"assets/imgs/menu1.jpg" , pushPage: "AboutPage"},
  { title : "Leagues", pic:"assets/imgs/menu2.jpg" , pushPage: "LeaguePage"}
];
logPage: any;

  constructor(public navCtrl: NavController) {
    this.logPage = 'LoginPage';
  }
 
}
