import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

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
