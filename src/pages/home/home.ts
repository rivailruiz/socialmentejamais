import { Component } from '@angular/core';
import { NavController, AlertController, ToastController, ModalController, NavParams } from 'ionic-angular';
import { ContaPage } from '../conta/conta';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {

  public frases = [
    "Você pediu mais uma cerveja!",
    "Opa! Desce mais uma!",
    "Desce gelo!",
    "Mais uma pra conta!",
    "Se beber não dirija."
  ];

	public numeroCervejas: number = 0;
  constructor(
  	public navCtrl: NavController,
  	private alertCtrl: AlertController,
  	public toastCtrl: ToastController,
    public modalCtrl: ModalController,
  	public navParams: NavParams
  	) {
  	console.log(this.numeroCervejas);
  }



maisUmaCerveja(){
	this.numeroCervejas = this.numeroCervejas +1;
	
	 let toast = this.toastCtrl.create({
          message: 'Desce gelo!',
          duration: 1500,
          position: "top"
        });
        toast.present();

}

fecharConta(numeroCervejas){
	let fechaConta= this.modalCtrl.create(ContaPage, {numeroCervejas: this.numeroCervejas});
   fechaConta.present();
}

reseta(){
  let alert = this.alertCtrl.create({
    title: 'Resetar quantidade',
    message: 'Tem certeza de que deseja resetar?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
        }
      },
      {
        text: 'Resetar',
        handler: () => {
          this.numeroCervejas = 0;
        }
      }
    ]
  });
  alert.present();

  
}


}
