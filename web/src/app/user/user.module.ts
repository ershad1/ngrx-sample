import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {SharedModule} from '../shared/shared.module';
import {UserEffects} from './state/user.effects';
import {userReducer} from './state/user.reducer';
import {UserListComponent} from './user-list/user-list.component';

import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './user/user.component';



@NgModule({
  declarations: [
    UserComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    StoreModule.forFeature('user', userReducer),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class UserModule {
}
