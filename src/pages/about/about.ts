import { Component } from '@angular/core';
import { PricePage } from '../price/price';
import { NpessoasPage } from '../npessoas/npessoas';
import { ApoioPage } from '../apoio/apoio';
import { NavController, ModalController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers:[PricePage]
})
export class AboutPage {

public valorCerveja;
  constructor(
  	public navCtrl: NavController,
  	public modalCtrl: ModalController,
  	public viewCtrl: ViewController,
    public pagePreco: PricePage
  	) {
      console.log(this.pagePreco.getValorcerveja());
  }


abrirPreco(){
	let abrePreco= this.modalCtrl.create(PricePage);
   abrePreco.present();
}

abrirPessoas(){
  let abrePessoas= this.modalCtrl.create(NpessoasPage);
   abrePessoas.present();
}

fechar(){
	this.viewCtrl.dismiss();
}

abrirApoio(){
  let abreApoio = this.modalCtrl.create(ApoioPage);
  abreApoio.present();
}

}
