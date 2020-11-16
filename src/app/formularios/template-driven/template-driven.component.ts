import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent {

  model = {
    nome: null,
    email: null,
    idade: null
  }

  constructor() { }

  
  salvar(){
    console.log(this.model)
    if(this.validar()){
      // salvar
    }
  }

  validar(){
    if(this.model.nome.length < 3){
      alert('O nome precisa ter mais de 3 caracteres')
      return false;
    }

    if(this.model.idade < 0){
      alert('A idade deve ser maior que 0')
      return false;
    }
    return true;
  }

}
