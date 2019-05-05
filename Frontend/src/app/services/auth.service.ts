import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserToken } from '../models/user-token';
import { ResponseToken } from '../models/response-token';
import { Usuario } from '../models/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    // Token actual
    private token: UserToken;

    public constructor(
        private http: HttpClient
    ) {
        // Leer datos de localstorage
        const tokenData: string = localStorage.getItem('token');

        // Si hay token
        if (tokenData != null) {
            // Leer token de local storage
            this.token = JSON.parse(tokenData);
        }
    }

    /**
     * Intentar logear un usuario
     *
     * @param usuario El usuario
     */
    public login(usuario: Usuario): Observable<ResponseToken> {

        // Formulario con datos de usuario
        const form: FormData = new FormData();
        form.set('grant_type', 'password');
        form.set('username', usuario.nombre);
        form.set('password', usuario.password);

        // Enviar petición
        return this.http.post<ResponseToken>(environment.api + 'oauth/token', form);
    }

    public register(usuario: Usuario): Observable<boolean> {
        return this.http.post<boolean>(environment.api + 'auth/store', usuario);
    }

    /**
     * Definir token
     *
     * @param token El token
     */
    public setToken(token: UserToken): void {
        // Almacenar token en localstorage
        localStorage.setItem('token', JSON.stringify(token));

        // Cachear en memoria
        this.token = token;
    }

    /**
     * Eliminar token
     */
    public removeToken(): void {
        // Eliminar token de localstorage
        localStorage.removeItem('token');

        // Quitar de caché
        this.token = null;
    }

    /**
     * Obtener token
     */
    public getToken(): UserToken {
        // Retornar token en memoria
        return this.token;
    }

    /**
     * Validar duración del token
     */
    public isTokenValid(): boolean {
        // Si hay token, y hay fecha de expiración
        if (this.token != null && this.token.expiration != null) {
            // Verificar que la fecha de expiración no haya superado la fecha actual
            return this.token.expiration.getTime() > Date.now();
        }
        return false;
    }

}
