import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductsPage {
  myForm: FormGroup;
  private myData: any;

  constructor(public navCtrl: NavController, private builder: FormBuilder) {
  	this.myForm = builder.group({
      'subject': '',
      'message': '',
      'name': '',
      'serialno': '',
      'date': '',
      'party': '',
      'color': '',
      'size': '',
      'priceperunit': '',
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
    console.log('ionViewDidLoad ProductsPage');
  }

}
