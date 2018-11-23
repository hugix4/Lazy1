// import { OneHomeComponent } from 'src/app/components/one-home/one-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A1Component } from './../../components/a1/a1.component';
import { A2Component } from './../../components/a2/a2.component';

const routes: Routes = [
    { path: 'a1', component: A1Component },
    { path: 'a2', component: A2Component }
    // { path: '', component: OneHomeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OneRoutingModule { }
