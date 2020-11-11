import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  private map;
  private icon;

  constructor() { }

  ngOnInit(): void {

    this.map = L.map('map', {
      center: [ 43.2862,-1.8704 ],
      zoom: 11
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
   
    this.icon = {
      icon: L.icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 13, 0 ],
        // specify the path here
        iconUrl: 'http://localhost:4200/marker-icon.png',
        shadowUrl: 'http://localhost:4200/marker-shadow.png'
     })
    };
    
    L.marker([51.5, -0.09], this.icon).addTo(this.map).on('click', onClick);

    var lan = "You're here";

    function onClick(e) {
      alert(this.getLatLng());
      lan = this.getLatLng();
    }

    L.marker([43.2862,-1.8704]).addTo(this.map).on('click', onClick).bindPopup(lan)
    .openPopup();

    var markersLayer = new L.LayerGroup();  
    this.map.addLayer(markersLayer);
    
    const controlSearch = L.Control.Search({
      position:'topleft',
      layer: markersLayer,  // name of the layer
      initial: false,
      zoom: 11,        // set zoom to found location when searched
      marker: false,
      textPlaceholder: 'search...' // placeholder while nothing is searched
    });

    this.map.addControl(controlSearch);
  }



}