import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the Apoio page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-apoio',
  templateUrl: 'apoio.html'
})
export class ApoioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApoioPage');
  }

  fechar(){
	this.viewCtrl.dismiss();
}

abreInstagram(){
	console.log("abrir instagram");
}
}
