import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Pagination } from '../models/pagination';
import { Paginator } from '../models/paginator';
import { HoraTrabajada } from '../models/hora-trabajada';

@Injectable({
    providedIn: 'root'
})
export class HoraTrabajadaService {

    public constructor(
        private http: HttpClient
    ) {

    }

    public getPrincipalPaginator(): Paginator<any> {
        return new Paginator(this.http, 'horas-trabajadas/search/page-principal', 'horas-trabajadas');
    }

    public query(): Observable<HoraTrabajada[]> {
        return this.http.get<Pagination>(environment.api + 'horas-trabajadas')
            .pipe(map(Response => Response._embedded['horas-trabajadas']));
    }

    public get(path: string): Observable<HoraTrabajada> {
        return this.http.get<HoraTrabajada>(path);
    }

    public save(horaTrabajada: HoraTrabajada): Observable<any> {
        return this.http.post(environment.api + 'horas-trabajadas', horaTrabajada);
    }

    public update(horaTrabajada: HoraTrabajada): Observable<any> {
        return this.http.put(horaTrabajada._links.self.href, horaTrabajada);
    }

    public delete(horaTrabajada: HoraTrabajada): Observable<any> {
        return this.http.delete(horaTrabajada._links.self.href);
    }
}
