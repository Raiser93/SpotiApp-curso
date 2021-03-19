import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TOKEN } from '../config';

@Injectable({
    providedIn: 'root'
})
export class SpotifyService {
    constructor(
        private http: HttpClient
    ) {}

    getQuery(query: string): Observable<any> {
        const url = `https://api.spotify.com/v1/${query}`;
        const headers = new HttpHeaders({
            Authorization: `Bearer ${TOKEN}`
        });
        return this.http.get(url, {headers});
    }

    getNewReleases(): Observable<any> {
        return this.getQuery('browse/new-releases?limit=20').pipe(
            // tslint:disable-next-line:no-string-literal
            map(resp => resp['albums'].items)
        );
    }

    getArtista(termino: string): Observable<any> {
        return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
            // tslint:disable-next-line: no-string-literal
            map((resp: any) => resp['artists'].items)
        );
    }

    getArtistaForId(id: string): Observable<any> {
        return this.getQuery(`artists/${id}`).pipe(
            // tslint:disable-next-line: no-string-literal
            map((resp: any) => resp)
        );
    }

    getTopTracks(id: string): Observable<any> {
        return this.getQuery(`artists/${id}/top-tracks?market=co`).pipe(
            // tslint:disable-next-line: no-string-literal
            map((resp: any) => resp.tracks)
        );
    }
}
