import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgMaterialMultilevelMenuModule} from 'ng-material-multilevel-menu';
import {MaterialModule} from './material/material.module';

@NgModule({
  // imports: [
  //   CommonModule
  // ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    NgMaterialMultilevelMenuModule,
    FlexLayoutModule
  ]
})
export class SharedModule {
}
