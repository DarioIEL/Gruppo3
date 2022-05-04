import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { formService } from './form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  yachts = []

  constructor(private formService: formService) { }

  ngOnInit(): void {
  }

  creaYacht(dataYacht: {nome: string, modello: string, capienza: number, prezzo: number, descrizione: string, immagine: string, offerta: string}, mioForm){
    this.formService.addYacht(dataYacht.nome, dataYacht.modello, dataYacht.capienza, dataYacht.prezzo, dataYacht.descrizione, dataYacht.immagine, dataYacht.offerta);
    this.clearFilters(mioForm);
  }


clearFilters(mioForm: NgForm) {
  mioForm.reset()  
}



}
