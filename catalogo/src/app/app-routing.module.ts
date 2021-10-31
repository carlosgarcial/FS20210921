import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent, BlogListComponent, BlogAddComponent, BlogEditComponent, BlogViewComponent } from './blog/blog.component';
import { CategoriaAddComponent, CategoriaEditComponent, CategoriaListComponent, CategoriaViewComponent } from './categoria/categoria.component';
import { IdiomaListComponent, IdiomaAddComponent, IdiomaEditComponent, IdiomaViewComponent } from './idioma/idioma.component';
import { PageNotFoundComponent } from './main';
import { RegisterUserComponent } from './security';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: BlogComponent },
  { path: 'blog', children: [
    { path: '', component: BlogListComponent },
    { path: 'add', component: BlogAddComponent },
    { path: ':id/edit', component: BlogEditComponent },
    { path: ':id', component: BlogViewComponent },
    { path: ':id/:kk', component: BlogViewComponent },
  ]},
  { path: 'categoria', children: [
    { path: '', component: CategoriaListComponent },
    { path: 'add', component: CategoriaAddComponent },
    { path: ':id/edit', component: CategoriaEditComponent },
    { path: ':id', component: CategoriaViewComponent },
    { path: ':id/:kk', component: CategoriaViewComponent },
  ]},
  { path: 'idioma', children: [
    { path: '', component: IdiomaListComponent },
    { path: 'add', component: IdiomaAddComponent },
    { path: ':id/edit', component: IdiomaEditComponent },
    { path: ':id', component: IdiomaViewComponent },
    { path: ':id/:kk', component: IdiomaViewComponent },
  ]},
  { path: 'registro', component: RegisterUserComponent },
  { path: '404.html', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
