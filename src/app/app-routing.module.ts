// import { ThreeRoutingModule } from './modules/three/three-routing.module';
// import { TwoRoutingModule } from './modules/two/two-routing.module';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { OneRoutingModule } from './modules/one/one-routing.module';


const routes: Routes = [
  {
    path: 'one',
    loadChildren: '../app/components/one-home/one.module#OneModule'
  },
  {
    path: 'two',
    loadChildren: '../app/modules/two/two.module#TwoModule'
  },
  {
    path: 'three',
    loadChildren: '../app/modules/three/three.module#ThreeModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
]

export const AppRoutingModule = RouterModule.forRoot(routes);
// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes)
//   ],
//   exports: [RouterModule],
//   declarations: []
// })
// export class AppRoutingModule { }
