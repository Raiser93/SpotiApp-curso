import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: []
})
export class HomeComponent implements OnInit {

    nuevasCanciones = [];
    loading: boolean;
    error = false;
    errorMessage: string;

    constructor(
        private spotify: SpotifyService
    ) {
        this.loading = true;
        this.spotify.getNewReleases().subscribe(data => {
            console.log(data);
            this.nuevasCanciones = data;
            this.loading = false;
        }, error => {
            console.error(error);
            this.error = true;
            this.loading = false;
            this.errorMessage = error.error.error.message;
        });
    }

    ngOnInit(): void {}

}
