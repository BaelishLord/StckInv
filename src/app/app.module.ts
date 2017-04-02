import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { UsersPage } from '../pages/users/users';
import { LogsPage } from '../pages/logs/logs';
import { ProductsPage } from '../pages/products/products';
import { UserDetailsPage } from '../pages/user-details/user-details';
import { SalesPage } from '../pages/sales/sales';

import { GithubUsers } from '../providers/github-users';
import { ProductsService } from '../providers/products-service';

@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    LogsPage,
    ProductsPage,
    UserDetailsPage,
    SalesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsersPage,
    LogsPage,
    ProductsPage,
    UserDetailsPage,
    SalesPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},GithubUsers,ProductsService]
})
export class AppModule {}
