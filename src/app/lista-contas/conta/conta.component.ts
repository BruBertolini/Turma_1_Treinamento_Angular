import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.scss'],
})
export class ContaComponent implements OnInit {
  @Input() valorConta: number;

  @Output() valorContaChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  add() {
    this.valorConta = this.valorConta + 10;
    this.valorContaChange.emit( this.valorConta);
  }

  remover() {
    this.valorConta = this.valorConta - 10;
    this.valorContaChange.emit( this.valorConta);
  }
}
