import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Products } from '../../models/products';

import { ProductsService } from '../../providers/products-service';

@Component({
  selector: 'page-logs',
  templateUrl: 'logs.html'
})
export class LogsPage {
  products: Products[];
  originalproducts: Products[];

  constructor(public navCtrl: NavController, private productsservice: ProductsService) {
  	productsservice.load().subscribe(products => {
  		console.log(products, "prod");
      // this.products = products;
      // this.originalproducts = products;
    })

    // productsservice
    //   .searchUsers('scotch').subscribe(products => {
    //     console.log(products)
    // });
  }

  ionViewDidLoad() {
    console.log('Hello Logs Page');
  }
}