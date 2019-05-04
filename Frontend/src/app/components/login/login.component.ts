import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { UserToken } from 'src/app/models/user-token';

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
        private authService: AuthService
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
                Response => {
                    // Crear instancia de token
                    const userToken: UserToken = {
                        access_token: Response.access_token,
                        expiration: new Date(Date.now() + Response.expires_in * 1000),
                        token_type: Response.token_type,
                    }

                    // Fijar token
                    this.authService.setToken(userToken);
                },
                error => {
                    // Indicar que no se encuentra iniciando sesión
                    this.iniciando = false;

                    // Indicar que usuario o contraseña son incorrectos
                    this.incorrecto = true;
                }
            )
        }
    }

}
