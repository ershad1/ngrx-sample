import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  {path: '', redirectTo: 'user', pathMatch: 'full'},
  {
    path: '',
    loadChildren: './user/user.module#UserModule',
    canActivate: []
  },
  // {
  //   path: '**',
  //   redirectTo: '/'
  // }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
