import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paginator } from '../models/paginator';
import { Observable } from 'rxjs';
import { Plan } from '../models/plan';
import { environment } from 'src/environments/environment';
import { Pagination } from '../models/pagination';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  public constructor(
    private http: HttpClient
  ) {

  }

  public getPaginator(): Paginator<any> {
    return new Paginator(this.http, 'planes/search/page', 'planes');
  }

  public getPrincipalPaginator(): Paginator<any> {
    return new Paginator(this.http, 'empresas/search/page-principal', 'empresas');
  }

  public query(): Observable<Plan[]> {
    return this.http.get<Pagination>(environment.api + 'planes')
      .pipe(map(Response => Response._embedded.planes));
  }

  public queryPrincipal(): Observable<Plan[]> {
    return this.http.get<any>(environment.api + 'planes/search/principal')
      .pipe(map(Response => Response._embedded.planes));
  }

  public get(path: string): Observable<Plan> {
    return this.http.get<Plan>(path);
  }

  public save(plan: Plan): Observable<any> {
    return this.http.post(environment.api + 'planes', plan);
  }

  public savePrincipal(plan: Plan): Observable<any> {
    return this.http.post(environment.api + 'planes/principal', plan);
  }

  public update(plan: Plan): Observable<any> {
    return this.http.put(plan._links.self.href, plan);
  }

  public delete(plan: Plan): Observable<any> {
    return this.http.delete(plan._links.self.href);
  }
}
