import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-contato',
  templateUrl: './dados-contato.component.html',
  styleUrls: ['./dados-contato.component.css']
})
export class DadosContatoComponent implements OnInit {
  public isOpen: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
