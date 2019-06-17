import { Component, OnInit, ViewChild } from '@angular/core';
import { Paginator } from 'src/app/models/paginator';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';
import { Page } from 'src/app/models/page';
import { AlertaService } from 'src/app/services/alerta.service';
import { Alerta } from 'src/app/models/alerta';
import { RegistrarAlertaComponent } from '../registrar-alerta/registrar-alerta.component';
import { EliminarAlertaComponent } from '../../alertas/eliminar-alerta/eliminar-alerta.component';

@Component({
    selector: 'app-alertas',
    templateUrl: './alertas.component.html',
    styleUrls: ['./alertas.component.scss']
})
export class AlertasComponent implements OnInit {

    // Columnas de datatable
    public displayedColumns: string[] = ['descripcion', 'empresa', 'usuario', 'fecha_creacion', 'delete'];

    // Paginación
    public paginator: Paginator<Alerta>;

    // Data-source
    public dataSource: MatTableDataSource<Alerta> = new MatTableDataSource();

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
        private alertaService: AlertaService,
        private dialog: MatDialog
    ) {
        // Instanciar paginador
        this.paginator = this.alertaService.getPaginatorChofer();

        // Observables
        this.isLoading = this.paginator.isLoadingSubject;
        this.page = this.paginator.pageSubject;
    }

    public ngOnInit() {
        this.paginator.init(this.dataSource, this.matPaginator, this.matSort);
    }

    public registrar() {
        // Crear dialogo
        const ref: MatDialogRef<RegistrarAlertaComponent> = this.dialog.open(RegistrarAlertaComponent, {
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

    public eliminar(alerta: Alerta) {
        // Crear dialogo
        const ref: MatDialogRef<EliminarAlertaComponent> = this.dialog.open(EliminarAlertaComponent, {
            width: '1000px',
            data: alerta
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
