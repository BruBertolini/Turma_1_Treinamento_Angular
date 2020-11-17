import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irNgIf(){
    return '/diretivas-estruturais/ng-if';
  }

  irParaHome(){
    this.router.navigate(['']);
  }

}
