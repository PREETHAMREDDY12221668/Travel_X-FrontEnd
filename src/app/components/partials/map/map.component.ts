import { Component, ElementRef, Input, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import * as L from 'leaflet';
import { Map, tileLayer, LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() latitude: number = 0;
  @Input() longitude: number = 0;
  private readonly DEFAULT_LATLNG: LatLngTuple = [31.25668904107862, 75.70535807672496];

  @ViewChild('map', {static: true})
  mapRef!: ElementRef;

  map!: Map;
  marker!: L.Marker;

  @Output() locationFound = new EventEmitter<LatLngTuple>();

  constructor() { }

  ngOnInit(): void {
    this.initializeMap();
  }

  initializeMap() {
    this.map = new Map(this.mapRef.nativeElement, {
      attributionControl: false
    }).setView([this.DEFAULT_LATLNG[0], this.DEFAULT_LATLNG[1]], 10);

    tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map);

    this.marker = L.marker(this.DEFAULT_LATLNG, {
      icon: L.divIcon({
        className: 'leaflet-div-icon',
        html: '<i class="fas fa-map-marker-alt"></i>', // Font Awesome icon class
        iconSize: [24, 24], // Size of the icon
        iconAnchor: [12, 24] // Point of the icon which corresponds to the marker's location
      })
    }).addTo(this.map);
  }

  findLocation() {
    this.map.setView([this.latitude, this.longitude], 10);
    this.marker.setLatLng([this.latitude, this.longitude]);
    this.locationFound.emit([this.latitude, this.longitude]);
  }
}
