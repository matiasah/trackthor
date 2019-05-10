import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Pagination } from '../models/pagination';
import { Paginator } from '../models/paginator';
import { Empresa } from '../models/empresa';

@Injectable({
    providedIn: 'root'
})
export class EmpresaService {

    public constructor(
        private http: HttpClient
    ) {

    }

    public getPaginator(): Paginator<any> {
        return new Paginator(this.http, 'empresas', 'empresas');
    }

    public query(): Observable<Empresa[]> {
        return this.http.get<Pagination>(environment.api + 'empresas')
            .pipe(map(Response => Response._embedded.empresas));
    }

    public save(empresa: Empresa): Observable<any> {
        return this.http.post(environment.api + 'empresas', empresa);
    }

    public update(empresa: Empresa): Observable<any> {
        return this.http.put(empresa._links.self.href, empresa);
    }

    public delete(empresa: Empresa): Observable<any> {
        return this.http.delete(empresa._links.self.href);
    }
}
