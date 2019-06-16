import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-chofer',
    templateUrl: './chofer.component.html',
    styleUrls: ['./chofer.component.scss'],
})
export class ChoferComponent implements OnInit {

    public constructor(
        private authService: AuthService,
        private router: Router
    ) {

    }

    public ngOnInit() {
        
    }

    public onLogout() {
        // Quitar token
        this.authService.removeToken();

        // Enviar a login
        this.router.navigate(['']);
    }

}
