import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Pagination } from '../models/pagination';
import { Paginator } from '../models/paginator';
import { Cliente } from '../models/cliente';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {

    public constructor(
        private http: HttpClient
    ) {

    }

    public getPaginator(): Paginator<any> {
        return new Paginator(this.http, 'clientes/search/page', 'clientes');
    }

    public query(): Observable<Cliente[]> {
        return this.http.get<Pagination>(environment.api + 'clientes')
            .pipe(map(Response => Response._embedded.clientes));
    }

    public queryFirst10ByNombresContaining(nombres: string): Observable<Cliente[]> {
        // Parámetros
        let params: HttpParams = new HttpParams();

        // Fijar parámetro "nombres"
        params = params.set('nombres', nombres);

        // Obtener lista de clientes
        return this.http.get<any>(environment.api + 'clientes/search/10-nombres', { params: params })
            .pipe(map(Response => Response._embedded.clientes));
    }

    public get(path: string): Observable<Cliente> {
        return this.http.get<Cliente>(path);
    }

    public save(cliente: Cliente): Observable<any> {
        return this.http.post(environment.api + 'clientes', cliente);
    }

    public update(cliente: Cliente): Observable<any> {
        return this.http.put(cliente._links.self.href, cliente);
    }

    public delete(cliente: Cliente): Observable<any> {
        return this.http.delete(cliente._links.self.href);
    }
}
