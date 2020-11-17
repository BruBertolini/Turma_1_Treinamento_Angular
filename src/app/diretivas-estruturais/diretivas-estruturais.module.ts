import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais.component';
import { DiretivasEstruturaisRoutingModule } from './diretivas-estruturais.routing.module';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';

@NgModule({
  declarations: [
    DiretivasEstruturaisComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DiretivasEstruturaisRoutingModule,
  ]
})
export class DiretivasEstruturaisModule {}
