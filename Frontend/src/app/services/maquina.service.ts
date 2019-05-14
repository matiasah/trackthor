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
export class MaquinaService {

    public constructor(
        private http: HttpClient
    ) {

    }

    public getPaginator(): Paginator<any> {
        return new Paginator(this.http, 'maquinas', 'maquinas');
    }

    public query(): Observable<Maquina[]> {
        return this.http.get<Pagination>(environment.api + 'maquinas')
            .pipe(map(Response => Response._embedded.maquinas));
    }

    public get(path: string): Observable<Maquina> {
        return this.http.get<Maquina>(path);
    }

    public save(maquina: Maquina): Observable<any> {
        return this.http.post(environment.api + 'maquinas', maquina);
    }

    public update(maquina: Maquina): Observable<any> {
        return this.http.patch(maquina._links.self.href, maquina);
    }

    public delete(maquina: Maquina): Observable<any> {
        return this.http.delete(maquina._links.self.href);
    }
}
