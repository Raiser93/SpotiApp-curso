import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-artista',
    templateUrl: './artista.component.html',
    styles: []
})
export class ArtistaComponent {

    artista: any;
    loadingArtista: boolean;
    loadingTopTracks: boolean;
    topTracks: any;

    constructor(
        private route: ActivatedRoute,
        private spotify: SpotifyService
    ) {
        this.route.params.subscribe(({id}) => {
            this.getArtista(id);
            this.getTopTracks(id);
        });
    }

    getArtista(id): void {
        this.loadingArtista = true;
        this.spotify.getArtistaForId(id).subscribe(data => {
            console.log(data);
            this.artista = data;
            this.loadingArtista = false;
        });
    }

    getTopTracks(id: string): void {
        this.loadingTopTracks = true;
        this.spotify.getTopTracks(id).subscribe(data => {
            console.log(data);
            this.topTracks = data;
            this.loadingTopTracks = false;
        });
    }

}
