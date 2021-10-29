import { Component, OnInit } from '@angular/core';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { ClienteFormularioComponent } from '../cliente-formulario/cliente-formulario.component';
import { ContactosComponent } from '../contactos/contactos.component';
import { DemosComponent } from '../demos/demos.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { HomeComponent } from '../main';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.scss']
})
export class DinamicoComponent implements OnInit {
  menu = [
    { texto: 'Contact', icono: '', componente: ContactosComponent },
    { texto: 'Cliente_Formulario', icono: '', componente: ClienteFormularioComponent },
    { texto: 'Inicio', icono: '', componente: HomeComponent },
    { texto: 'Demos', icono: '', componente: DemosComponent },
    { texto: 'Calculadora', icono: '', componente: CalculadoraComponent },
    { texto: 'Formulario', icono: '', componente: FormularioComponent },
  ];

  actual = this.menu[0].componente;

  constructor() { }

  seleccionar(indice: number): void {
    this.actual = this.menu[indice].componente;
  }

  ngOnInit(): void {
  }

}
