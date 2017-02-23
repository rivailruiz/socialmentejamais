import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContaPage } from '../pages/conta/conta';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PricePage } from '../pages/price/price';
import { NpessoasPage } from '../pages/npessoas/npessoas';
import { ApoioPage } from '../pages/apoio/apoio';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContaPage,
    HomePage,
    TabsPage,
    PricePage,
    NpessoasPage,
    ApoioPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContaPage,
    HomePage,
    TabsPage,
    PricePage,
    NpessoasPage,
    ApoioPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
