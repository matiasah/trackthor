import { Component, OnInit, ViewChild } from '@angular/core';
import { Arriendo } from 'src/app/models/arriendo';
import { Maquina } from 'src/app/models/maquina';
import { Cliente } from 'src/app/models/cliente';
import { NgForm } from '@angular/forms';
import { ArriendoService } from 'src/app/services/arriendo.service';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { MaquinaService } from 'src/app/services/maquina.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-registrar-arriendo',
  templateUrl: './registrar-arriendo.component.html',
  styleUrls: ['./registrar-arriendo.component.scss']
})
export class RegistrarArriendoComponent implements OnInit {

  // Arriendo a registrar
  public arriendo: Arriendo = {} as Arriendo;

  // Máquinas
  public maquinas: Maquina[];

  // Clientes
  public clientes: Cliente[];

  // Indicar si se encuentra registrando
  public registrando = false;

  // Formulario
  @ViewChild('form')
  public form: NgForm;

  public constructor(
    private arriendoService: ArriendoService,
    private dialogRef: MatDialogRef<RegistrarArriendoComponent>,
    private snackBar: MatSnackBar,
    private maquinaService: MaquinaService,
    private clienteService: ClienteService
  ) {

  }

  public ngOnInit() {

    // Obtener máquinas
    this.maquinaService.query().subscribe(
      Response => {
        this.maquinas = Response;
      }
    );

    // Obtener clientes
    this.clienteService.query().subscribe(
      Response => {
        this.clientes = Response;
      }
    );
  }


  public onSubmit(): void {
    // Si el formulario es válido
    if (this.form.valid) {
      // Indicar que se encuentra registrando
      this.registrando = true;

      // Registrar
      this.arriendoService.save(this.arriendo).subscribe(
        Respose => {
          // Indicar que no se encuentra registrando
          this.registrando = false;

          // Notificar registro exitoso
          this.snackBar.open('El arriendo ha sido registrado', 'Aceptar', { duration: 2000 });

          // Cerrar modal
          this.dialogRef.close();
        },
        Error => {
          // Indicar que no se encuentra registrando
          this.registrando = false;

          // Notificar registro erroneo
          this.snackBar.open('No se ha podido registrar el arriendo', 'Aceptar', { duration: 2000 });

          // Cerrar modal
          this.dialogRef.close();
        }
      );
    }
  }

}
