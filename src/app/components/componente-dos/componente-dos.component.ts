import { Component, OnInit, NgModule } from '@angular/core';
import { Gato } from '../../models/gato';
import { HttpClient } from '@angular/common/http'
import { GatoService } from 'src/app/providers/gato.service';
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-componente-dos',
  templateUrl: './componente-dos.component.html',
  styleUrls: ['./componente-dos.component.css']
})
export class ComponenteDosComponent implements OnInit {
  url = 'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key='
  key = 'live_ssY9l2168QNh0FjlJVVmj4Nw23DQrgWzKCxLTfG96yi96UaVcsuPusbkVCNlcj9A';
  gato: Gato;
  arrGatos: Gato[] = [];
  

  constructor(private gatoServ: GatoService) {
    this.gato = new Gato('12k',
    'https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page='
    ,250, 250);

     this.arrGatos = this.gatoServ.getGato(); 
    setTimeout(()=>{
      this.mostrarGatos(4,7);
    },2000);

    console.log(this.arrGatos);
    
   }

  ngOnInit(): void {
  
  }

  mostrarGatos(i:number, max:number){
    //let i = 0;
    console.log(i);
    this.arrGatos.forEach((gato)=>{
      console.log(i);
      if(i<= max){
        gato.visible=true;
      }else{
        gato.visible=false;
      }
      i++;
    });
  }

  cambiarGato(){
    this.gato.url = this.gato.url + 1;
  }

}
