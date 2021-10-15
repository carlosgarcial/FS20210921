import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ContactosAddComponent, ContactosEditComponent, ContactosListComponent, ContactosViewComponent } from './contactos/contactos.component';
import { DemosComponent } from './demos/demos.component';
import { LibrosAddComponent, LibrosComponent, LibrosEditComponent, LibrosListComponent, LibrosViewComponent } from './libros/libros.component';
import { HomeComponent, PageNotFoundComponent } from './main';
import { RegisterUserComponent } from './security';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'demos', component: DemosComponent },
  { path: 'chisme/de/hacer/numeros', component: CalculadoraComponent },
  // { path: 'contactos', component: ContactosListComponent },
  // { path: 'contactos/add', component: ContactosAddComponent },
  // { path: 'contactos/:id/edit', component: ContactosEditComponent },
  // { path: 'contactos/:id', component: ContactosViewComponent },
  // { path: 'contactos/:id/:kk', component: ContactosViewComponent },
  { path: 'contactos', children: [
    { path: '', component: ContactosListComponent},
    { path: 'add', component: ContactosAddComponent},
    { path: ':id/edit', component: ContactosEditComponent},
    { path: ':id', component: ContactosViewComponent},
    { path: ':id/:kk', component: ContactosViewComponent},
  ]},
  { path: 'libros', children: [
    { path: '', component: LibrosListComponent },
    { path: 'add', component: LibrosAddComponent },
    { path: ':id/edit', component: LibrosEditComponent },
    { path: ':id', component: LibrosViewComponent },
    { path: ':id/:kk', component: LibrosViewComponent },
  ]},
  { path: 'antonie/hasted', redirectTo: '/contactos/27'},
  { path: 'config', loadChildren: () => import('./config/config.module').then(mod => mod.ConfigModule)},
  { path: 'registro', component: RegisterUserComponent },
  { path: '404.html', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
