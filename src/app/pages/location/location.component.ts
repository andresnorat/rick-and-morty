import { Component } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { Location } from 'src/app/models/location.model';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {

  planet= "https://c4.wallpaperflare.com/wallpaper/519/777/177/rick-and-morty-space-wallpaper-preview.jpg"
  locations:Location[] = [{
    id: 0,
    name: '',
    created: '',
    dimension: '',
    residents: [],
    type: '',
    url: ''
  }];

  constructor(
    private locationService: LocationService,
  ) { }

  ngOnInit(): void {
    this.locationService.getAllLocation()
      .subscribe({
        next: (data) => {
          this.locations = data.results;
        },
        error: (error) => {
          alert('Upp ocurrio un error');
        }
      })
  }
}
