import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyCoreModule } from 'src/lib/my-core';
import { CommonServicesModule } from '../common-services';
import { ContactosComponent, CONTACTOS_COMPONENTES } from './contactos.component';




@NgModule({
  declarations: [
    ContactosComponent, CONTACTOS_COMPONENTES
  ],
  exports: [
    ContactosComponent, CONTACTOS_COMPONENTES
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]), MyCoreModule, CommonServicesModule,
  ]
})
export class ContactosModule { }
