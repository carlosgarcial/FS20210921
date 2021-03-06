import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/lib/my-core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {
  acum:number;
  op:string;
  pantalla:string;
  resultado:boolean;

  constructor(private log:LoggerService) {
    this.acum = 0;
    this.op = '+';
    this.pantalla = '0';
    this.resultado = true;
  }

  ponerdigito(num:string):void {
    if(this.pantalla == '0' || this.resultado){
        this.pantalla = num;
        this.resultado = false;
    }else{
        this.pantalla += num;
    }
  }

  calcular(operador:string):void{
    let valor = parseFloat(this.pantalla);
    switch(this.op){
        case '+': this.acum += valor;
        break;
        case '-': this.acum -= valor;
        break;
        case '*': this.acum *= valor;
        break;
        case '/': this.acum /= valor;
        break;
    }

    this.op = operador;
    this.resultado = true;
    this.pantalla = this.acum.toString();
  }

borrar_digito():void{
  if (this.resultado || this.pantalla.length == 1 || (this.pantalla.length == 2 && this.pantalla.startsWith('-'))) {
    this.pantalla = '0';
    this.resultado = true;
} else
    this.pantalla = this.pantalla.substr(0,
    this.pantalla.length - 1);
}

borrar_todo():void{
  this.acum = 0;
  this.op = '+';
  this.pantalla = '0';
  this.resultado = true;
}

cambiar_signo():void{
  this.pantalla = (-this.pantalla).toString();
  this.acum = (-this.acum);
}

poner_coma():void{
  if (this.resultado) {
      this.pantalla = '0.';
      this.resultado = false;
  } else {
      this.pantalla += '.';
  }
}



  ngOnInit(): void {
  }

}
