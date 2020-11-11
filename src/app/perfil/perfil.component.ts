
import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  data: [];

  constructor(public http: HttpClient) { }

  recogerDatos(){
    this.http.get('assets/datos.json').subscribe(data => {

      this.data = JSON.parse(JSON.stringify(data));
      
      return this.data;

    });
  }

  ngOnInit(): void {
    this.recogerDatos();
  }

}