import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';
import { Pagination } from '../models/pagination';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public constructor(
    private http: HttpClient
  ) { }

  public query(): Observable<Cliente[]> {
    return this.http.get<Pagination>(environment.api + 'clientes')
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
