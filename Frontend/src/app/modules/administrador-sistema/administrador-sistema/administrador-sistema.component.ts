import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-administrador-sistema',
    templateUrl: './administrador-sistema.component.html',
    styleUrls: ['./administrador-sistema.component.scss']
})
export class AdministradorSistemaComponent implements OnInit {

    public constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    public ngOnInit() {

    }

    public onLogout() {
        // Quitar token
        this.authService.removeToken();

        // Enviar a login
        this.router.navigate(['']);
    }

}
