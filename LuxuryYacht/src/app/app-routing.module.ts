import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContattiComponent } from './contatti/contatti.component';
import { HomeComponent } from './home/home.component';
import { OffertaComponent } from './offerta/offerta.component';
import { TutteComponent } from './tutte/tutte.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tutte',component: TutteComponent},
  {path: 'contatti',component: ContattiComponent},
  {path: 'offerta',component: OffertaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
