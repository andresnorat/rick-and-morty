import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  } from '@angular/router';
import { switchMap } from 'rxjs';
import { Location } from '@angular/common';
import { EpisodeService } from 'src/app/services/episode.service';
import { Episode } from 'src/app/models/episode.model';

@Component({
  selector: 'app-episodes-detail',
  templateUrl: './episodes-detail.component.html',
  styleUrls: ['./episodes-detail.component.scss']
})
export class EpisodesDetailComponent {
  episodeId: string | null = null;
  episodes: Episode | null = null;
  statusDetailCharacters: 'loading' | 'success' | 'error' | 'init' = 'init';

  constructor(
    private route: ActivatedRoute,
    private episodeService: EpisodeService,
    private location: Location,
  ) { }



  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.statusDetailCharacters = 'loading'
        this.episodeId = params.get('id')
        if(this.episodeId){
          return this.episodeService.getEpisode(this.episodeId)
        }
        return []
      })
    ).subscribe({
      next: (value) => {
        this.statusDetailCharacters = 'success'
        this.episodes  = value;
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
