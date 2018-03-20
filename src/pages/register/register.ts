import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  reg = {
    email: '',
    password1: '',
    password2: ''
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public alertCtrl: AlertController, private afAuth: AngularFireAuth
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  displayAlert(alertTitle, alertSub) {
    let theAlert = this.alertCtrl.create({
      title : alertTitle,
      subTitle: alertSub,
      buttons: ['OK']
    });
    theAlert.present();
  }
  regSuccess(res){
    this.displayAlert(this.reg.email, "Compte ajouté avec succès!");
    this.afAuth.auth.signInWithEmailAndPassword(this.reg.email, this.reg.password1)
    .then( res => this.navCtrl.push(HomePage))
    .catch( err => this.displayAlert("Error",err)) ;
  }
  registerAccount(){
    if(this.reg.password1 != this.reg.password2)
    {
     this.displayAlert("Erreur de mot de passe!","Les mots de passe de ne confondent pas!")
     this.reg.password1 = '';
     this.reg.password2 = '';
    }
    else{
      this.afAuth.auth.createUserWithEmailAndPassword(this.reg.email, this.reg.password1)
      .then( res => this.regSuccess(res))
      .catch( err => this.displayAlert("Error",err)) ;
    }
  }
}
