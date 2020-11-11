import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-datos-usuario-admin',
  templateUrl: './datos-usuario-admin.component.html',
  styleUrls: ['./datos-usuario-admin.component.css']
})
export class DatosUsuarioAdminComponent implements OnInit {

  constructor(private _route: ActivatedRoute, public http: HttpClient) { }

  data: Data[] = new Array();

  recogerDatos(){
    
    this.http.get('assets/datos.json').subscribe(data => {

      let usaurio = this._route.snapshot.paramMap.get('usuario');
      //this.data = JSON.parse(JSON.stringify(data));
      
      for(var x in data){
        if(data[x].usuario == usaurio){
          this.data.push(data[x]);
        }
      }
    
    })
  }

  ngOnInit(): void {
    this.recogerDatos();
  }

}
