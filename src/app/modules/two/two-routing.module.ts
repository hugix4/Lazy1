import { AppComponent } from './../../app.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B2Component } from './../../components/b2/b2.component';
import { B1Component } from './../../components/b1/b1.component';

const routes: Routes = [
    { path: '**', redirectTo: '/', pathMatch: 'full' },
    { path: 'b1', component: B1Component },
    { path: 'b2', component: B2Component }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TwoRoutingModule { }
