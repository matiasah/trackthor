import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TipoMaquina } from '../models/tipo-maquina';

@Injectable({
    providedIn: 'root'
})
export class TipoMaquinaService {

    public constructor(private http: HttpClient) { }

    public query(): Observable<TipoMaquina[]> {
        return this.http.get<any>(environment.api + 'tipo-maquina')
            .pipe(map(Response => Response._embedded));
    }

    public save(tipoMaquina: TipoMaquina): Observable<any> {
        return this.http.post(environment.api + 'tipo-maquina', tipoMaquina);
    }

    public update(tipoMaquina: TipoMaquina): Observable<any> {
        return this.http.put(tipoMaquina._links.self.href, tipoMaquina);
    }

    public delete(tipoMaquina: TipoMaquina): Observable<any> {
        return this.http.delete(tipoMaquina._links.self.href);
    }
}
