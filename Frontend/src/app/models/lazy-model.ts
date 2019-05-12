import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class LazyModel {

    public constructor(http: HttpClient, json: any) {
        // Copiar atributos de la clase
        for (const [key, value] of Object.entries(json)) {
            this[key] = value;
        }

        // Copiar _links
        for (const [key, value] of Object.entries(json._links)) {
            this[key] = http.get((value as any).href).pipe(map(
                response => {
                    if ( Array.isArray(response) ) {
                        return response.map(object => new LazyModel(http, object));
                    }
                    return new LazyModel(http, response);
                }
            ));
        }
    }
}
