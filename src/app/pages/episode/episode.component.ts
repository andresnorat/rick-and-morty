import { Component } from '@angular/core';
import { Episode } from 'src/app/models/episode.model';
import { EpisodeService } from 'src/app/services/episode.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent {

  episodeImg= "https://www.jotdown.es/wp-content/uploads/2019/05/oie_hCVeLPjJuT8y.jpg"
  episodes:Episode[] = [{
    id: 0,
    name: '',
    air_date: '',
    episode: '',
    characters: [],
    url: '',
    created: ''
  }];

  constructor(
    private episodeService: EpisodeService,
  ) { }

  ngOnInit(): void {
    this.episodeService.getAllEpisodes()
      .subscribe({
        next: (data) => {
          this.episodes = data.results;
        },
        error: (error) => {
          alert('Upp ocurrio un error');
        }
      })
  }
}
