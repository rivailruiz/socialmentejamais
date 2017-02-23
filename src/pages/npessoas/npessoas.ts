import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the Npessoas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-npessoas',
  templateUrl: 'npessoas.html'
})
export class NpessoasPage {

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public viewCtrl: ViewController
  	 ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NpessoasPage');
  }


fechar(){
	this.viewCtrl.dismiss();
}


}
