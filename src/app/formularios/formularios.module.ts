import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { MeuServicoService } from './meu-servico.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TemplateDrivenComponent,
    ReactiveFormsComponent
  ],
  imports: [
    CommonModule,
     FormsModule,
     ReactiveFormsModule,
     HttpClientModule
    ],
  exports:[
    TemplateDrivenComponent,
    ReactiveFormsComponent
  ],
  providers:[
    MeuServicoService
  ]
})
export class FormulariosModule {}
