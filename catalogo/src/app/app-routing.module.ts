import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent, BlogListComponent, BlogAddComponent, BlogEditComponent, BlogViewComponent } from './blog/blog.component';
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
  { path: 'registro', component: RegisterUserComponent },
  { path: '404.html', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
