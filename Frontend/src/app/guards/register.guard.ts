import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class RegisterGuard implements CanActivate {

    public constructor(
        private authService: AuthService
    ) {

    }

    public canActivate(): boolean {
        // Si existe un token válido
        if ( this.authService.isTokenValid() ) {
            // Bloquear vista
            return false;
        }
        // Permitir vista
        return true;
    }

}
