import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {UserDetailsListComponent} from './user-details-list/user-details-list.component';
import {UserDetailsComponent} from './user-details/user-details.component';

import {UserRoutingModule} from './user-routing.module';
import {EffectsModule} from '@ngrx/effects';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {UserDetailsEffects} from './state/user-details.effects';
import {userDetailsReducer} from './state/user-details.reducers';

@NgModule({
  declarations: [
    UserDetailsComponent,
    UserDetailsListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    StoreModule.forFeature('userDetails', userDetailsReducer),
    EffectsModule.forFeature([UserDetailsEffects])
  ]
})
export class UserModule {
}
