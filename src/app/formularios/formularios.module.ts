import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    TemplateDrivenComponent,
    ReactiveFormsComponent
  ],
  imports: [
    CommonModule,
     FormsModule,
     ReactiveFormsModule
    ],
  exports:[
    TemplateDrivenComponent,
    ReactiveFormsComponent
  ]
})
export class FormulariosModule {}
