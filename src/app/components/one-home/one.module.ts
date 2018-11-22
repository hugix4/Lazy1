import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A1Component } from '../../components/a1/a1.component';
import { A2Component } from '../../components/a2/a2.component';
import { OneHomeComponent } from '../../components/one-home/one-home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [A1Component, A2Component, OneHomeComponent]
})
export class OneModule { }
