import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador-empresa',
  templateUrl: './administrador-empresa.component.html',
  styleUrls: ['./administrador-empresa.component.scss']
})
export class AdministradorEmpresaComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public onLogout() {
    // Quitar token
    this.authService.removeToken();

    // Enviar a login
    this.router.navigate(['']);
  }
}
