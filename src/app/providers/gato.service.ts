import { Injectable } from '@angular/core';
import { Gato } from '../models/gato';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GatoService {

  gatos: any = [];

  constructor( private httpClient: HttpClient) {
    this.consumirGatos();
  }

  getGato(): Gato[]{
    return this.gatos;
  }

  consumirGatos() {
    this.httpClient.get('https://api.thecatapi.com/v1/images/search?limit=10').subscribe((data) => {
    Array(data).forEach((gato: any) => {
      gato.forEach((cat:any) => {
        let g = new Gato(cat.id, cat.url, cat.width, cat.height);
        this.gatos.push(g);
      });
    }); 
    });
  }
}