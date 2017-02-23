import { Component } from '@angular/core';

import { NavController,ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-conta',
  templateUrl: 'conta.html'
})
export class ContaPage {
	public numeroCervejas: number;
	public valorCerveja: number = 10;
	public total: number;
	public qtdPessoas: number = 2;

  

  constructor(
  			public navCtrl: NavController,
  			public viewCtrl: ViewController,
  			public navParams: NavParams
  			) {

  			this.numeroCervejas = navParams.get('numeroCervejas');
  			this.calcula(this.numeroCervejas, this.valorCerveja, this.qtdPessoas);
  			
  			}


  	calcula(qtdC, valor, qtdP){
  		this.total = this.numeroCervejas * this.valorCerveja / this.qtdPessoas;
  		return this.total;
  	}

	fechar(){
		this.viewCtrl.dismiss();
	}

}
