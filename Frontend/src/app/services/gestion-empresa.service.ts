import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Pagination } from '../models/pagination';
import { Paginator } from '../models/paginator';
import { GestionEmpresa } from '../models/gestion-empresa';

@Injectable({
    providedIn: 'root'
})
export class GestionEmpresaService {

    public constructor(
        private http: HttpClient
    ) {

    }

    public getPaginator(): Paginator<any> {
        return new Paginator(this.http, 'gestiones-empresas/search/page', 'gestiones-empresas');
    }

    public query(): Observable<GestionEmpresa[]> {
        return this.http.get<Pagination>(environment.api + 'gestiones-empresas')
            .pipe(map(Response => Response._embedded['gestiones-empresas']));
    }

    public get(path: string): Observable<GestionEmpresa> {
        return this.http.get<GestionEmpresa>(path);
    }

    public save(gestionEmpresa: GestionEmpresa): Observable<any> {
        return this.http.post(environment.api + 'gestiones-empresas', gestionEmpresa);
    }

    public update(gestionEmpresa: GestionEmpresa): Observable<any> {
        return this.http.put(gestionEmpresa._links.self.href, gestionEmpresa);
    }

    public delete(gestionEmpresa: GestionEmpresa): Observable<any> {
        return this.http.delete(gestionEmpresa._links.self.href);
    }
}
