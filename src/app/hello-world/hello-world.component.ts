import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
  // template: 'Hello {{ myName }}!',
  // styles: ['']
})
export class HelloWorldComponent implements OnInit {

  myName = 'Bruna';

  inputValue = 'Treinamento';
  inputType = 'text';

  constructor() { }

  ngOnInit(): void {
  }

  changeType(){
    this.inputType = "number"
  }

}
