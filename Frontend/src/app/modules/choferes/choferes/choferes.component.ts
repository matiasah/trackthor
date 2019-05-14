import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioChoferService } from 'src/app/services/usuario-chofer.service';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator, MatDialogRef } from '@angular/material';
import { Paginator } from 'src/app/models/paginator';
import { UsuarioChofer } from 'src/app/models/usuario-chofer';
import { Observable } from 'rxjs';
import { Page } from 'src/app/models/page';
import { RegistrarChoferComponent } from '../registrar-chofer/registrar-chofer.component';
import { EditarChoferComponent } from '../editar-chofer/editar-chofer.component';
import { EliminarChoferComponent } from '../eliminar-chofer/eliminar-chofer.component';

@Component({
  selector: 'app-choferes',
  templateUrl: './choferes.component.html',
  styleUrls: ['./choferes.component.scss']
})
export class ChoferesComponent implements OnInit {


  // Columnas de datatable
  public displayedColumns: string[] = ['run', 'nombre', 'nombres_chofer', 'fecha_registro', 'edit', 'delete'];

  // Paginación
  public paginator: Paginator<UsuarioChofer>;

  // Data-source
  public dataSource: MatTableDataSource<UsuarioChofer> = new MatTableDataSource();

  // Indicar si se encuentra cargando resultados
  public isLoading: Observable<boolean>;

  // Pagina actual
  public page: Observable<Page>;

  // Sort
  @ViewChild(MatSort)
  public matSort: MatSort;

  // Paginación
  @ViewChild('paginator')
  public matPaginator: MatPaginator;


  public constructor(
    private usuarioChoferService: UsuarioChoferService,
    private dialog: MatDialog
  ) {

    // Instanciar paginador
    this.paginator = this.usuarioChoferService.getPaginator();

    // Observables
    this.isLoading = this.paginator.isLoadingSubject;
    this.page = this.paginator.pageSubject;
  }

  public ngOnInit() {
    this.paginator.init(this.dataSource, this.matPaginator, this.matSort);
  }

  public registrar() {
    // Crear dialogo
    const ref: MatDialogRef<RegistrarChoferComponent> = this.dialog.open(RegistrarChoferComponent, {
      width: '1000px'
    });

    // Al cerrar dialogo
    ref.afterClosed().subscribe(
      response => {
        // Actualizar paginador
        this.paginator.update();
      }
    );
  }

  public editar(chofer: UsuarioChofer) {
    // Crear dialogo
    const ref: MatDialogRef<EditarChoferComponent> = this.dialog.open(EditarChoferComponent, {
      width: '1000px',
      data: chofer
    })

    // Al cerrar dialogo
    ref.afterClosed().subscribe(
      response => {
        // Actualizar paginador
        this.paginator.update();
      }
    );
  }

  public eliminar(chofer: UsuarioChofer) {
    // Crear dialogo
    const ref: MatDialogRef<EliminarChoferComponent> = this.dialog.open(EliminarChoferComponent, {
      width: '1000px',
      data: chofer
    });

    // Al cerrar dialogo
    ref.afterClosed().subscribe(
      response => {
        // Actualizar paginador
        this.paginator.update();
      }
    );
  }
}
