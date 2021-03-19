import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styles: []
})
export class SearchComponent implements OnInit {

    artistas = [];
    loading: boolean;

    constructor(
        private spotify: SpotifyService
    ) {}

    ngOnInit(): void {}

    buscar(termino: string): any {
        if (!termino.trim().length) {
            this.artistas = [];
            return;
        }
        this.loading = true;
        this.spotify.getArtista(termino).subscribe(data => {
            this.loading = false;
            this.artistas = data;
        });
    }

}
