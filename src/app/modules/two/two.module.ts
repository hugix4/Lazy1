import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoRoutingModule } from './two-routing.module';

import { B1Component } from '../../components/b1/b1.component';
import { B2Component } from '../../components/b2/b2.component';



@NgModule({
  imports: [
    CommonModule,
    TwoRoutingModule
  ],
  declarations: [B1Component, B2Component]
})
export class TwoModule { }
