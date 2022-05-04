import { Component, OnInit } from '@angular/core';
import { formService } from '../form/form.service';

@Component({
  selector: 'app-mod-card',
  templateUrl: './mod-card.component.html',
  styleUrls: ['./mod-card.component.css']
})
export class ModCardComponent implements OnInit {

  constructor(private formService: formService) { }

  ngOnInit(): void {
  }

  // creaYacht(dataYacht: {nome: string, modello: string, capienza: number, prezzo: number, descrizione: string, immagine: string, offerta: string}, mioForm){
  //   this.formService.modYatch(dataYacht.nome, dataYacht.modello, dataYacht.capienza, dataYacht.prezzo, dataYacht.descrizione, dataYacht.immagine, dataYacht.offerta);
  //   (mioForm);
  // }

  

}
