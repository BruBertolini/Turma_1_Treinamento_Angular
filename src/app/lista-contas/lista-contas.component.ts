import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-contas',
  templateUrl: './lista-contas.component.html',
  styleUrls: ['./lista-contas.component.scss']
})
export class ListaContasComponent implements OnInit {

  valorContaUm = 10;
  valorContaDois = 100;

  constructor() { }

  ngOnInit(): void {
  }

  mudaValor(novoValor){
    this.valorContaDois = novoValor;
  }

}
