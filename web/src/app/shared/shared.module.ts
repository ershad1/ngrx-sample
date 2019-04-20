import {CommonModule} from '@angular/common';
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
    MaterialModule,
    NgMaterialMultilevelMenuModule,
    FlexLayoutModule
  ]
})
export class SharedModule {
}
