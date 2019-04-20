import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
// import {metaReducers, reducers} from './reducers/app.reducer';
import {uiReducer} from './shared/state/ui/ui.reducer';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // StoreModule.forRoot(reducers, {metaReducers}),
    StoreModule.forRoot({ui: uiReducer}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    // StoreRouterConnectingModule.forRoot({stateKey: 'router'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
