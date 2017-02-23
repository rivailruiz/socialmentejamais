import { Component } from '@angular/core';
import { NavController, AlertController, ToastController, ModalController, NavParams } from 'ionic-angular';
import { ContaPage } from '../conta/conta';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {



  public bounce: boolean = false;
  public frases = [];
  public frase: any;

	public numeroCervejas: number = 0;
  constructor(
  	public navCtrl: NavController,
  	private alertCtrl: AlertController,
  	public toastCtrl: ToastController,
    public modalCtrl: ModalController,
  	public navParams: NavParams
  	) {
    
  }


retornaFrase(){
    this.frases = [
    "Você pediu mais uma cerveja!",
    "Opa! Desce mais uma!",
    "Desce gelo!",
    "Mais uma pra conta!",
    "Se beber não dirija.",
    "Vai devagar, meu chapa!",
    "Ta bebendo mais que Opala, hein!",
    "Fora Temer!"
  ];
     var i = Math.floor(8*Math.random());
     this.frase = (this.frases[i]);
     console.log(this.frase);
}

maisUmaCerveja(frase){
	this.numeroCervejas = this.numeroCervejas +1;
  this.retornaFrase();

	 let toast = this.toastCtrl.create({
          message: this.frase,
          duration: 1500,
          position: "top"
        });
        toast.present();
        this.bounce = true;
        setTimeout(function(bounce){ this.bounce=false; }, 1000);
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
          this.bounce = false;
        }
      }
    ]
  });
  alert.present();

  
}




}
