import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-pai',
  templateUrl: './componente-pai.component.html',
  styleUrls: ['./componente-pai.component.scss']
})
export class ComponentePaiComponent implements OnInit {

  valorUm = 1;
  valorDois = 2;

  constructor() { }

  ngOnInit(): void {
  }

  mudarValorUm(valorNovo: number){
    this.valorUm = valorNovo;
    console.log('Valor recebido do filho 1:', valorNovo);
  }

  mudarValorDois(valorNovo: number){
    this.valorDois = valorNovo;
    console.log('Valor recebido do filho 2:', valorNovo);
  }

}
