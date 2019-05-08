import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Pagination } from '../models/pagination';
import { TipoMaquina } from '../models/tipo-maquina';
import { Paginator } from '../models/paginator';

@Injectable({
    providedIn: 'root'
})
export class TipoMaquinaService {

    public constructor(
        private http: HttpClient
    ) { }

    public getPaginator(): Paginator<any> {
        return new Paginator(this.http, 'tipos-maquinas', 'tipos-maquinas');
    }

    public query(): Observable<TipoMaquina[]> {
        return this.http.get<Pagination>(environment.api + 'tipos-maquinas')
            .pipe(map(Response => Response._embedded));
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
