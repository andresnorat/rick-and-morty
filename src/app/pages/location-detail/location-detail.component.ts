import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  } from '@angular/router';
import { switchMap } from 'rxjs';
import { Location } from '@angular/common';
import { LocationService } from 'src/app/services/location.service';
import { LocationModel } from 'src/app/models/location.model';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss']
})
export class LocationDetailComponent {
  locationId: string | null = null;
  locationCharacters: LocationModel | null = null;
  statusDetailCharacters: 'loading' | 'success' | 'error' | 'init' = 'init';
  residentOne: string = '';
  residentTwo: string = '';

  constructor(
    private route: ActivatedRoute,
    private locationService: LocationService,
    private location: Location,
  ) { }



  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.statusDetailCharacters = 'loading'
        this.locationId = params.get('id')
        if(this.locationId){
          return this.locationService.getLocation(this.locationId)
        }
        return []
      })
    ).subscribe({
      next: (value) => {
        this.statusDetailCharacters = 'success'
        this.locationCharacters  = value;
        const urlResidentOne = value.residents[0];
        const urlResidentTwo = value.residents[1];
        const residenIdOne = urlResidentOne.split('/').pop();
        const residenIdTwo = urlResidentTwo.split('/').pop();
        this.residentOne = residenIdOne;
        this.residentTwo = residenIdTwo;
      },
      error: () => {
        this.statusDetailCharacters = 'error'
      }
    })
  }


  goToBack(){
    this.location.back();
  }
}
