import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Pagination } from '../models/pagination';
import { Paginator } from '../models/paginator';
import { Alerta } from '../models/alerta';

@Injectable({
    providedIn: 'root'
})
export class AlertaService {

    public constructor(
        private http: HttpClient
    ) {

    }

    public getPaginator(): Paginator<any> {
        return new Paginator(this.http, 'alertas/search/page', 'alertas');
    }

    public getPaginatorChofer(): Paginator<any> {
        return new Paginator(this.http, 'alertas/search/page-chofer', 'alertas');
    }

    public query(): Observable<Alerta[]> {
        return this.http.get<Pagination>(environment.api + 'alertas')
            .pipe(map(Response => Response._embedded.alertas));
    }

    public get(path: string): Observable<Alerta> {
        return this.http.get<Alerta>(path);
    }

    public save(alerta: Alerta): Observable<any> {
        return this.http.post(environment.api + 'alertas', alerta);
    }

    public update(alerta: Alerta): Observable<any> {
        return this.http.patch(alerta._links.self.href, alerta);
    }

    public delete(alerta: Alerta): Observable<any> {
        return this.http.delete(alerta._links.self.href);
    }

}
