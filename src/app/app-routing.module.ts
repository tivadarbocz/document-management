import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ExamplePdfComponent } from './component/example-pdf/example-pdf.component';
import { DocumentComponent } from './component/document/document.component';
import { HomeComponent } from './component/home/home.component';


const routes:Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'document', component: DocumentComponent},
  {path: 'home', component: HomeComponent}
  //{path: 'detail/:id', component: HeroDetailComponent},
  //{path: 'heroes', component: HeroesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
