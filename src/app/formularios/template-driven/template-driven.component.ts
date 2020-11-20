import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent {

  model = {
    nome: '',
    email: '',
    idade: 0
  }

  constructor() { }

  
  salvar(){
    if(this.validar()){
      console.log(this.model)
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
