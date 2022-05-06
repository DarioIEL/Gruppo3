import {
  HttpClient
} from "@angular/common/http";
import {
  Injectable
} from "@angular/core";
import {
  map
} from "rxjs";
import {
  Yacht
} from "src/app/model/yacht";

@Injectable({

  providedIn: 'root'
})

export class yachtService {

  

    constructor(private http: HttpClient) {

    }



  getOfferta() {
    return this.http
      .get('https://luxuryyacht-59154-default-rtdb.europe-west1.firebasedatabase.app/yacht.json')
      .pipe(map(response => {
          const yachtsOfferta: Yacht[] = [];


          for (let key in response) {
            if (response[key].offerta == "Si") {
              yachtsOfferta.push((response[key]));
              console.log((response[key]).offerta);

            }
          }


          return yachtsOfferta;
        }

      ))
  }


  getOneYacht() {
    return this.http
      .get < {
        [key: string]: Yacht
      } > ('https://luxuryyacht-59154-default-rtdb.europe-west1.firebasedatabase.app/yacht.json')
      .pipe(map(responseData => {
        const yachtArray: Yacht[] = [];

        for (let key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            yachtArray.push({
              ...responseData[key],
              id: key
            });
          }
          
        }

        return yachtArray;
        
      }))
  }


  deleteYacht(id: string){
    return  this.http.delete('https://luxuryyacht-59154-default-rtdb.europe-west1.firebasedatabase.app/yacht/' + id + '.json')
          
  }




}
