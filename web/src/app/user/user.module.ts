import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {SharedModule} from '../shared/shared.module';
import {UserEffects} from './state/user.effects';
import {userDetailsReducer} from './state/user.reducers';
import {UserListComponent} from './user-list/user-list.component';
import {UserComponent} from './user/user.component';

import {UserRoutingModule} from './user-routing.module';

@NgModule({
  declarations: [
    UserComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    StoreModule.forFeature('userDetails', userDetailsReducer),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class UserModule {
}
