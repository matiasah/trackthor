import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Pipe({
    name: 'http'
})
export class HttpPipe implements PipeTransform {

    public constructor(
        private http: HttpClient
    ) {

    }

    public transform(path: string): Observable<any> {
        return this.http.get<any>(path);
    }

}
