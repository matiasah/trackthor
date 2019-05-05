import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    // Usuario que se va a registrar
    public usuario: Usuario = {};

    // Formulario
    @ViewChild('form')
    public form: NgForm;

    // Indicar si se encuentra registrando
    public registrando = false;

    // Indicar si hubo error al registrarse
    public error = false;

    // Indicar si el registro fue exitoso
    public exito = false;

    public constructor(
        private authService: AuthService
    ) {

    }

    public ngOnInit() {

    }

    public onSubmit() {
        // Si el formulario es válido
        if (this.form.valid) {
            // Indicar que se encuentra registrando
            this.registrando = true;

            // Indicar que no hubo error todavia
            this.error = false;

            // Indicar que no hubo exito todavia
            this.exito = false;

            // Iniciar sesión
            this.authService.register(this.usuario).subscribe(
                Response => {
                    // Indicar que no se encuentra registrando
                    this.registrando = false;

                    if ( Response === true ) {
                        // Indicar que hubo exito al registrarse
                        this.exito = true;
                    } else {
                        // Indicar que hubo error
                        this.error = true;
                    }
                },
                Error => {
                    // Indicar que no se encuentra iniciando sesión
                    this.registrando = false;

                    // Indicar que hubo error al registrarse
                    this.error = true;
                }
            );
        }
    }

}
