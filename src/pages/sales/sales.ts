import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FormBuilder, FormGroup } from '@angular/forms';
/*
  Generated class for the Sales page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sales',
  templateUrl: 'sales.html'
})

export class SalesPage {
  myForm: FormGroup;
  private myData: any;

  constructor(public navCtrl: NavController, private builder: FormBuilder) {
  	this.myForm = builder.group({
      'product': '',
      'serialno': '',
      'saledate': '',
      'size': '',
      'quantity': '',
      'mrpperunit': '',
      'totalcostprice': ''
    })
  }

  onSubmit(formData) {
    console.log('Form data is ', formData);
    this.myData = formData;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalesPage');
  }

}
