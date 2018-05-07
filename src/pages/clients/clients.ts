import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, NavParams } from 'ionic-angular';
import { ClientService } from './../../services/client.service';
import { Client } from './../../models/client.model';
import { ClientInfoPage } from './client-info/client-info';
import { ManageClientPage } from './manage-client/manage-client';


@IonicPage()
@Component({
  selector: 'page-clients',
  templateUrl: 'clients.html',
})
export class ClientsPage {

  listOfClients: Client[];
  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private clientService: ClientService,
              private loadingCtrl: LoadingController) {
  }
 
  onLoadClient(client: Client, index: number) {
    this.navCtrl.push(ClientInfoPage, { client: client, index: index });
    console.log('onLoadClient
    ');
    
  }

  ionViewWillEnter() {
    this.listOfClients = this.clientService.getClients();
    
  }

  onGoToAddClient(){
    this.navCtrl.push(ManageClientPage, { mode : 'New'} );
  }




}
