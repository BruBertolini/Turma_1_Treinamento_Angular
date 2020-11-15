import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  lista = [
    { nome: 'Daniel', idade: 3},
    { nome: 'Mariane', idade: 5},
    { nome: 'Andressa', idade: 6},
    { nome: 'Max', idade: 9},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
