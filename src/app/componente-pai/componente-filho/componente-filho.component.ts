import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-componente-filho',
  templateUrl: './componente-filho.component.html',
  styleUrls: ['./componente-filho.component.scss']
})
export class ComponenteFilhoComponent {

  @Input() valor: number;

  @Output() valorChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  adicionarValor(){
    this.valor += 1;
    this.valorChange.emit(this.valor);
  }

}
