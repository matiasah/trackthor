import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpPipe } from '../http.pipe';

@NgModule({
  declarations: [
    HttpPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HttpPipe
  ]
})
export class PipesModule { }
