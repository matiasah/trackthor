import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paginator } from '../models/paginator';
import { Observable } from 'rxjs';
import { Arriendo } from '../models/arriendo';
import { Pagination } from '../models/pagination';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArriendoService {

  constructor(
    private http: HttpClient
  ) { }

  public getPaginator(): Paginator<any> {
    return new Paginator(this.http, 'arriendos/search/page', 'arriendos');
  }

  public query(): Observable<Arriendo[]> {
    return this.http.get<Pagination>(environment.api + 'arriendos')
      .pipe(map(Response => Response._embedded.arriendos));
  }

  public get(path: string): Observable<Arriendo> {
    return this.http.get<Arriendo>(path);
  }

  public save(arriendo: Arriendo): Observable<any> {
    return this.http.post(environment.api + 'arriendos', arriendo);
  }

  public update(arriendo: Arriendo): Observable<any> {
    return this.http.patch(arriendo._links.self.href, arriendo);
  }

  public delete(arriendo: Arriendo): Observable<any> {
    return this.http.delete(arriendo._links.self.href);
  }
}
