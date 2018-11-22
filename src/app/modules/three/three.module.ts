import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeRoutingModule } from './three-routing.module';
import { UnoComponent } from 'src/app/components/uno/uno.component';
import { DosComponent } from './../../components/dos/dos.component';


@NgModule({
  imports: [
    CommonModule,
    ThreeRoutingModule
  ],
  declarations: [UnoComponent, DosComponent]
})
export class ThreeModule { }
