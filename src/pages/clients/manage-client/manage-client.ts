import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import {
  IonicPage, NavParams,
  ActionSheetController,
  AlertController,
  ToastController, NavController } from 'ionic-angular';
import { Client } from './../../../models/client.model';
import { ClientService } from '../../../services/client.service';

@IonicPage()
@Component({
  selector: 'page-manage-client',
  templateUrl: 'manage-client.html',
})
export class ManageClientPage implements OnInit {

  mode = 'New';
  selectOptions = ['Male', 'Female'];
  clientForm: FormGroup;
  client: Client;
  index: number;

  constructor(private navParams: NavParams,
              private actionSheetController: ActionSheetController,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              private clientService: ClientService,
              private navCtrl: NavController) {
  }

  ngOnInit() {
    this.mode = this.navParams.get('mode');
    if (this.mode == 'Edit') {
      this.client = this.navParams.get('client');
      this.index = this.navParams.get('index');
    }
    this.initializeForm();
  }

  onSubmit() {
    const value = this.clientForm.value;
    let clients = [];

    if (this.mode == 'Edit') {
      // this.clientService.updateRecipe(this.index, value.title, value.description, value.difficulty, ingredients);
    } else {
      this.clientService.addClient(value.firstName, 
                                  value.lastName, 
                                  value.gender, 
                                  value.address,
                                  value.uploadDocs,
                                  value.email,
                                  value.phoneNo);
    }
    this.clientForm.reset();
    this.navCtrl.popToRoot();
  }

  onManageIngredients() {

  }
  private createNewIngredientAlert() {

  }
  
  private initializeForm() {
    let firstName = null;
    let lastName = null;
    let gender = 'Male';
    let address = null;
    let uploadDocs = null;
    let email = null;
    let phoneNo = null;
    let clients = [];

    if (this.mode == 'Edit') {
      firstName = this.client.firstName;
      lastName = this.client.lastName;
      gender = this.client.gender;
      address = this.client.address;
      uploadDocs = this.client.uploadDocs;
      email = this.client.email;
      phoneNo = this.client.phoneNo;
    }

    this.clientForm = new FormGroup({
      firstName: new FormControl(firstName, Validators.required),
      lastName: new FormControl(lastName, Validators.required),
      gender: new FormControl(gender, Validators.required),
      address: new FormControl(address, Validators.required),
      uploadDocs: new FormControl(uploadDocs, null),
      email: new FormControl(email, null),
      phoneNo: new FormControl(phoneNo, Validators.required)
      // ,
      // 'ingredients': new FormArray(ingredients)
    });
  }

  
}
