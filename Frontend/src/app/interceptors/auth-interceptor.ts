import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserToken } from '../models/user-token';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    private CLIENT_ID = 'android-client';
    private CLIENT_SECRET = 'android-secret';

    public constructor(
        private authService: AuthService
    ) {

    }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // ¿Se ha enviado la petición al backend?
        if (request.url.startsWith(environment.api)) {
            // Ruta
            const route: string = request.url.substring(environment.api.length);

            // ¿Es la ruta de OAuth2?
            if (route.substr(0, 5) === 'oauth') {
                // Autorización
                const authorization: string = 'Basic ' + window.btoa(this.CLIENT_ID + ':' + this.CLIENT_SECRET);

                // Cabeceras
                const headers: HttpHeaders = request.headers.set('Authorization', authorization);

                // Copiar petición
                const newRequest: HttpRequest<any> = request.clone({
                    headers
                });

                return next.handle(newRequest);
            } else if (this.authService.isTokenValid()) {
                // Obtener token
                const token: UserToken = this.authService.getToken();

                // Cabeceras
                const headers: HttpHeaders = request.headers.set('Authorization', token.token_type + ' ' + token.access_token);

                // Copiar petición
                const newRequest: HttpRequest<any> = request.clone({
                    headers
                });

                return next.handle(newRequest);
            }
        }

        return next.handle(request);
    }


}
