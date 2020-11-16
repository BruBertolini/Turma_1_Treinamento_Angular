import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ComponenteFilhoComponent } from './componente-pai/componente-filho/componente-filho.component';
import { ComponentePaiComponent } from './componente-pai/componente-pai.component';
import { DiretivasEstruturaisModule } from './diretivas-estruturais/diretivas-estruturais.module';
import { FormulariosModule } from './formularios/formularios.module';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ContaComponent } from './lista-contas/conta/conta.component';
import { ListaContasComponent } from './lista-contas/lista-contas.component';

const routes = [
  { path:'hello-word', component: HelloWorldComponent },
  { path:'data-binding', component: ComponentePaiComponent },
  { path:'data-binding-lista', component: ListaContasComponent },
]

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
    BrowserModule,
    FormsModule,
    DiretivasEstruturaisModule,
    RouterModule.forRoot(routes),
    FormulariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


