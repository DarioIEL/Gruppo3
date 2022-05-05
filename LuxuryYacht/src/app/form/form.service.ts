import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Yacht } from "../model/yacht"

@Injectable({
    providedIn: 'root'
  })

export class formService{

    // yachts: Yacht[] = [];

	constructor(private http: HttpClient) {
	}

    addYacht(nome: string, modello: string, capienza: number, prezzo: number, descrizione: string, immagine: string, offerta: string){
        const dataYacht: Yacht = {nome: nome, modello: modello, capienza: capienza, prezzo: prezzo, descrizione: descrizione, immagine: immagine, offerta: offerta}

        this.http.post(
            "https://luxuryyacht-59154-default-rtdb.europe-west1.firebasedatabase.app/yacht.json",
            dataYacht
        ).subscribe(yacht => {
            console.log(yacht);
            
        })
    }

//se si clicca su modifica cancella tutto e rimane solo il record inserito

    // modYatch(nome: string, modello: string, capienza: number, prezzo: number, descrizione: string, immagine: string, offerta: string){
    //     const dataYacht: Yacht = {nome: nome, modello: modello, capienza: capienza, prezzo: prezzo, descrizione: descrizione, immagine: immagine, offerta: offerta}

    //     this.http.put("https://luxuryyacht-59154-default-rtdb.europe-west1.firebasedatabase.app/yacht.json/id",
    //     dataYacht).subscribe(yacht =>{
    //         console.log(yacht);
            
    //     })
    // }

    getYacht(){
        return this.http
        .get('https://luxuryyacht-59154-default-rtdb.europe-west1.firebasedatabase.app/yacht.json')
        .pipe(map(response =>{
            const yachts: Yacht[] = [];
            // console.log(response);
            
            for(let key in response){
                yachts.push(response[key]);
                //console.log(key);
                
            }
            return yachts
        }))
    }
    // delYacht(yachtData: {nome: string, modello: string, capienza: number, prezzo: number, descrizione: string, immagine: string, key: string}){
        //  return this.http.delete(yachtData.nome, yachtData.modello, yachtData.capienza, yachtData.prezzo , yachtData.descrizione, yachtData.immagine, yachtData.key)
    
    //     })

    // }

    

}