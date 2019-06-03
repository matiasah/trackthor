import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { RoleRoute } from '../models/role-route.enum';
import { AnimationPlayer } from '@angular/animations';

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {

    public constructor(
        private authService: AuthService,
        private router: Router
    ) {

    }

    public canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | boolean {
        // Si el token es válido
        if (this.authService.isTokenValid()) {
            // Obtener permisos de usuario
            return this.authService.getAuthorities().pipe(map(
                Response => {
                    // Por cada rol
                    for (const authority of Response) {
                        // Si el rol tiene ruta
                        if (RoleRoute[authority.authority as any]) {
                            // Navegar a la ruta correspondiente
                            this.router.navigate([RoleRoute[authority.authority as any]]);

                            // Negar acceso a ruta
                            return false;
                        } else {
                            // Permitir acceso a ruta
                            return true;
                        }
                    }

                    // Rol no se posee
                    return true;
                }
            ));
        }

        return true;
    }

}
