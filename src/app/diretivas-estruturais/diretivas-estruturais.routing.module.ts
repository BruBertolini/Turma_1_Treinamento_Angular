import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';

const routes = [
  {
    path: 'diretivas-estruturais',
    component: DiretivasEstruturaisComponent,
    children: [
        { path: 'ng-if', component: NgIfComponent },
        { path: 'ng-for', component: NgForComponent },
        { path: 'ng-switch', component: NgSwitchComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class DiretivasEstruturaisRoutingModule {}
