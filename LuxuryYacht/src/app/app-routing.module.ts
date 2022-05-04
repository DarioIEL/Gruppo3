import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContattiComponent } from './contatti/contatti.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';

import { NoleggioComponent } from './noleggio/noleggio.component';
import { OffertaComponent } from './offerta/offerta.component';
import { TutteComponent } from './tutte/tutte.component';

const routes: Routes = [
  //home
  {path: '', component: HomeComponent},

  //tutte
  {path: 'tutte',component: TutteComponent},
  {path: 'noleggio', component: NoleggioComponent},

  //contatti
  {path: 'contatti',component: ContattiComponent},

  //offerte
  {path: 'offerta',component: OffertaComponent},

  //inserimento
  {path: 'form',component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
