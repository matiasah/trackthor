import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { RoleRoute } from 'src/app/models/role-route.enum';
import { Usuario } from 'src/app/models/usuario';
import { UserToken } from 'src/app/models/user-token';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    // Usuario que va a iniciar sesión
    public usuario: Usuario = {};

    // Formulario
    @ViewChild('form')
    public form: NgForm;

    // Indicar si se encuentra iniciando sesión
    public iniciando = false;

    // Indicar si el usuario o contraseña son incorrectos
    public incorrecto = false;

    public constructor(
        private authService: AuthService,
        private router: Router
    ) {

    }

    public ngOnInit() {

    }

    public onSubmit() {
        // Si el formulario es válido
        if (this.form.valid) {
            // Indicar que se encuentra iniciando sesión
            this.iniciando = true;

            // Indicar que usuario o contraseña no son incorrectos
            this.incorrecto = false;

            // Iniciar sesión
            this.authService.login(this.usuario).subscribe(
                responseToken => {
                    // Crear instancia de token
                    const userToken: UserToken = {
                        access_token: responseToken.access_token,
                        expiration: new Date(Date.now() + responseToken.expires_in * 1000),
                        token_type: responseToken.token_type,
                    };

                    // Fijar token
                    this.authService.setToken(userToken);

                    // Obtener roles
                    this.authService.getAuthorities().subscribe(
                        authorities => {
                            // Por cada rol
                            for (const authority of authorities) {
                                // Si el rol tiene ruta
                                if (RoleRoute[authority.authority]) {
                                    // Navegar a la ruta correspondiente
                                    this.router.navigate([RoleRoute[authority.authority]]);

                                    // Romper iteración
                                    break;
                                }
                            }
                        }
                    );

                    // Enviar a sistema
                    this.router.navigate(['ae']);
                },
                error => {
                    // Indicar que no se encuentra iniciando sesión
                    this.iniciando = false;

                    // Indicar que usuario o contraseña son incorrectos
                    this.incorrecto = true;
                }
            );
        }
    }

}
