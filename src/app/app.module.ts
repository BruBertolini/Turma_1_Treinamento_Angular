import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ComponentePaiComponent } from './componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './componente-pai/componente-filho/componente-filho.component';
import { ListaContasComponent } from './lista-contas/lista-contas.component';
import { ContaComponent } from './lista-contas/conta/conta.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent,
    ListaContasComponent,
    ContaComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
