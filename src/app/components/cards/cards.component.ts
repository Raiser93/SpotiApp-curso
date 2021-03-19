import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styles: []
})
export class CardsComponent {

    @Input() items = [];

    constructor(
        private router: Router
    ) {}

    verArtista(item): void {
        let id: string;
        switch (item.type) {
            case 'artist': {
                id = item.id;
                break;
            }
            case 'album': {
                id = item.artists[0].id;
                break;
            }
        }

        this.router.navigate(['/artista', id]);
    }

}
