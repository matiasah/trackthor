import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

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
    public iniciando: boolean = false;

    // Indicar si el usuario o contraseña son incorrectos
    public incorrecto: boolean = false;

    public constructor() {

    }

    public ngOnInit() {

    }

    public onSubmit() {
        // Si el formulario es válido
        if (this.form.valid) {
            // Indicar que se encuentra iniciando sesión
            this.iniciando = true;

            // Indicar que usuario o contraseña no son incorrectos
            this.incorrecto = true;
        }
    }

}
