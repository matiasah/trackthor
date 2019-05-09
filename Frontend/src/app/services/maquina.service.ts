import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Maquina } from '../models/maquina';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MaquinaService {

  constructor(private http: HttpClient) { }

  public query(): Observable<Maquina[]> {
    return this.http.get<any>(environment.api + 'maquinas')
      .pipe(map(Response => Response._embedded.maquinas));
  }

  public save(maquina: Maquina): Observable<any> {
    return this.http.post(environment.api + 'maquinas', maquina);
  }

  public update(maquina: Maquina): Observable<any> {
    return this.http.put(maquina._links.self.href, maquina);
  }

  public delete(maquina: Maquina): Observable<any> {
    return this.http.delete(maquina._links.self.href);
  }
}
