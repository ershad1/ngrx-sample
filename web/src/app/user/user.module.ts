import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {UserDetailsListComponent} from './user-details-list/user-details-list.component';
import {UserDetailsComponent} from './user-details/user-details.component';

import {UserRoutingModule} from './user-routing.module';

@NgModule({
  declarations: [
    UserDetailsComponent,
    UserDetailsListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule {
}
