import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paginator } from '../models/paginator';
import { Observable } from 'rxjs';
import { UsuarioChofer } from '../models/usuario-chofer';
import { Pagination } from '../models/pagination';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioChoferService {

  constructor(
    private http: HttpClient
  ) { }

  public getPaginator(): Paginator<any> {
    return new Paginator(this.http, 'usuarios-choferes', 'usuarios-choferes');
  }

  public query(): Observable<UsuarioChofer[]> {
    return this.http.get<Pagination>(environment.api + 'usuarios-choferes')
      .pipe(map(Response => Response._embedded["usuarios-choferes"]));
  }

  public get(path: string): Observable<UsuarioChofer> {
    return this.http.get<UsuarioChofer>(path);
  }

  public save(usuarioChofer: UsuarioChofer): Observable<any> {
    return this.http.post(environment.api + 'usuarios-choferes', usuarioChofer);
  }

  public update(usuarioChofer: UsuarioChofer): Observable<any> {
    return this.http.patch(usuarioChofer._links.self.href, usuarioChofer);
  }

  public delete(usuarioChofer: UsuarioChofer): Observable<any> {
    return this.http.delete(usuarioChofer._links.self.href);
  }

}
