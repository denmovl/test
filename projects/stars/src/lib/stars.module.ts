import { NgModule } from '@angular/core';
import { StarsComponent } from './stars.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ StarsComponent ],
  imports: [ ReactiveFormsModule, CommonModule ],
  exports: [ StarsComponent ]
})
export class StarsModule {
}
