import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Pagination } from '../models/pagination';
import { Paginator } from '../models/paginator';
import { TipoMaquina } from '../models/tipo-maquina';

@Injectable({
    providedIn: 'root'
})
export class TipoMaquinaService {

    public constructor(
        private http: HttpClient
    ) {

    }

    public getPaginator(): Paginator<any> {
        return new Paginator(this.http, 'tipos-maquinas/search/page', 'tipos-maquinas');
    }

    public query(): Observable<TipoMaquina[]> {
        return this.http.get<Pagination>(environment.api + 'tipos-maquinas')
            .pipe(map(Response => Response._embedded['tipos-maquinas']));
    }

    public get(path: string): Observable<TipoMaquina> {
        return this.http.get<TipoMaquina>(path);
    }

    public save(tipoMaquina: TipoMaquina): Observable<any> {
        return this.http.post(environment.api + 'tipos-maquinas', tipoMaquina);
    }

    public update(tipoMaquina: TipoMaquina): Observable<any> {
        return this.http.put(tipoMaquina._links.self.href, tipoMaquina);
    }

    public delete(tipoMaquina: TipoMaquina): Observable<any> {
        return this.http.delete(tipoMaquina._links.self.href);
    }
}
