import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DosComponent } from './../../components/dos/dos.component';
import { UnoComponent } from 'src/app/components/uno/uno.component';

const routes: Routes = [
  { path: 'dos', component: DosComponent },
  { path: 'uno', component: UnoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThreeRoutingModule { }
