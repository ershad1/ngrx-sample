import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from './material/material.module';
import {NgMaterialMultilevelMenuModule} from 'ng-material-multilevel-menu';
import {FlexLayoutModule} from '@angular/flex-layout';

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
