import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Pagination } from '../models/pagination';
import { Paginator } from '../models/paginator';
import { Maquina } from '../models/maquina';

@Injectable({
    providedIn: 'root'
})
export class MaquinariaService {

    public constructor(
        private http: HttpClient
    ) {

    }

    public getPaginator(): Paginator<any> {
        return new Paginator(this.http, 'maquinarias', 'maquinarias');
    }

    public query(): Observable<Maquina[]> {
        return this.http.get<Pagination>(environment.api + 'maquinarias')
            .pipe(map(Response => Response._embedded));
    }

    public save(maquina: Maquina): Observable<any> {
        return this.http.post(environment.api + 'maquinarias', maquina);
    }

    public update(maquina: Maquina): Observable<any> {
        return this.http.put(maquina._links.self.href, maquina);
    }

    public delete(maquina: Maquina): Observable<any> {
        return this.http.delete(maquina._links.self.href);
    }
}
