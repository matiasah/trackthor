import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Roles } from '../models/roles.enum';
import { RoleRoute } from '../models/role-route.enum';

@Injectable({
    providedIn: 'root'
})
export class RoleGuard implements CanActivate {


    public constructor(
        private authService: AuthService,
        private router: Router,
    ) {

    }

    public canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | boolean {
        // Si existe un token válido
        if (this.authService.isTokenValid()) {

            // Obtener permisos de usuario
            return this.authService.getAuthorities().pipe(map(
                Response => {
                    // Por cada rol
                    for (const authority of Response) {
                        if (RoleRoute[authority.authority] === '/' + route.url[0].path) {
                            // Permitir acceso a ruta
                            return true;
                        } else {
                            // Navegar a la ruta correspondiente
                            this.router.navigate([RoleRoute[authority.authority]]);

                            // Negar acceso a ruta
                            return false;
                        }
                    }

                    // Navegar a login
                    this.router.navigate(['']);

                    // Rol no se posee
                    return false;
                }
            ));
        }

        // Navegar a login
        this.router.navigate(['']);

        // Negar acceso a ruta
        return false;
    }

}
