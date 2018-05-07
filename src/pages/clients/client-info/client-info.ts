import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Client } from './../../../models/client.model';


@IonicPage()
@Component({
  selector: 'page-client-info',
  templateUrl: 'client-info.html',
})
export class ClientInfoPage {
  client : Client;
  index: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.client = this.navParams.get('client');
    this.index = this.navParams.get('index');
  }
  onEditClient(){

  }
  onDeleteClient(){

  }
}
