import { Component, OnInit, ViewChild } from '@angular/core';
import { Paginator } from 'src/app/models/paginator';
import { Arriendo } from 'src/app/models/arriendo';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';
import { Page } from 'src/app/models/page';
import { ArriendoService } from 'src/app/services/arriendo.service';
import { RegistrarArriendoComponent } from '../registrar-arriendo/registrar-arriendo.component';
import { EditarArriendoComponent } from '../editar-arriendo/editar-arriendo.component';

@Component({
  selector: 'app-arriendos',
  templateUrl: './arriendos.component.html',
  styleUrls: ['./arriendos.component.scss']
})
export class ArriendosComponent implements OnInit {

  // Columnas de datatable
  public displayedColumns: string[] = ['fechaInicio', 'fechaTermino', 'cliente', 'edit', 'delete'];

  // Paginación
  public paginator: Paginator<Arriendo>;

  // Data-source
  public dataSource: MatTableDataSource<Arriendo> = new MatTableDataSource();

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
    private arriendoService: ArriendoService,
    private dialog: MatDialog
  ) {
    // Instanciar paginador
    this.paginator = this.arriendoService.getPaginator();

    // Observables
    this.isLoading = this.paginator.isLoadingSubject;
    this.page = this.paginator.pageSubject;
  }

  public ngOnInit() {
    this.paginator.init(this.dataSource, this.matPaginator, this.matSort);
  }

  public registrar() {
    // Crear dialogo
    const ref: MatDialogRef<RegistrarArriendoComponent> = this.dialog.open(RegistrarArriendoComponent, {
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

  public editar(arriendo: Arriendo) {
    // Crear dialogo
    const ref: MatDialogRef<EditarArriendoComponent> = this.dialog.open(EditarArriendoComponent, {
      width: '1000px',
      data: arriendo
    });

    // Al cerrar dialogo
    ref.afterClosed().subscribe(
      response => {
        // Actualizar paginador
        this.paginator.update();
      }
    );
  }

  public eliminar(arriendo: Arriendo) {

  }

}
