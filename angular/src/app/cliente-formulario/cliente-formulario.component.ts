import { Component, OnInit } from '@angular/core';
import { NotificationService, NotificationType } from '../common-services';
import { Injectable } from '@angular/core';

export interface Cliente{
  id: number | null;
  tienda: number | null;
  nombre: string;
  apellidos: string;
  correo: string | null;
  direccion: string | null;
  activo: boolean | null;
  fecha_creacion: Date | null;
  fecha_ultima_modificacion: Date | null;
  edad: number | null;
  dni: string | null;
}
@Injectable({providedIn: 'root'})
export class ClienteViewModel {
  Listado: Array<Cliente> = [
    {id: 1, tienda: 2, nombre: 'Pepito', apellidos: 'Guillo', correo: 'pepito@grillo', direccion: 'Mi casa', activo: true, fecha_creacion:null,fecha_ultima_modificacion:null, edad: 99, dni: '12345678Z'}
  ]
  Elemento: Cliente =  {id: null, tienda: null, nombre: '', apellidos: '', correo: null, direccion: '', activo: true, fecha_creacion: null,fecha_ultima_modificacion:null, edad: null, dni: null}
  IsAdd = true;

  constructor(private notify: NotificationService) {

  }

  public cancel(){

  }

  public send(){
    this.notify.add((this.IsAdd ? 'Nuevos: ' : 'Modificados: ') + JSON.stringify(this.Elemento), NotificationType.info)
  }


}
@Component({
  selector: 'app-cliente-formulario',
  templateUrl: './cliente-formulario.component.html',
  styleUrls: ['./cliente-formulario.component.scss']
})

export class ClienteFormularioComponent implements OnInit {

  errorObligacion: string = 'Este campo es obligatorio.';
  errorCorreo: string = 'Este correo no cumple con el formato válido.';
  errorMinMax: string = 'Debe tener entre 16 y 67 años.';
  errorfecha: string = 'El formato de fecha no es válido.';

  constructor(public vm: ClienteViewModel) { }


  ngOnInit(): void {
  }

}
