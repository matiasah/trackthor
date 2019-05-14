import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';
import { Paginator } from 'src/app/models/paginator';
import { Page } from 'src/app/models/page';
import { MaquinaService } from 'src/app/services/maquina.service';
import { Maquina } from 'src/app/models/maquina';
import { RegistrarMaquinaComponent } from '../registrar-maquina/registrar-maquina.component';
import { EliminarMaquinaComponent } from '../eliminar-maquina/eliminar-maquina.component';
import { EditarMaquinaComponent } from '../editar-maquina/editar-maquina.component';

@Component({
    selector: 'app-maquinas',
    templateUrl: './maquinas.component.html',
    styleUrls: ['./maquinas.component.scss']
})
export class MaquinasComponent implements OnInit {

    // Columnas de datatable
    public displayedColumns: string[] = ['patente', 'tipo', 'fecha_registro', 'edit', 'delete'];

    // Paginación
    public paginator: Paginator<Maquina>;

    // Data-source
    public dataSource: MatTableDataSource<Maquina> = new MatTableDataSource();

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
        private maquinaService: MaquinaService,
        private dialog: MatDialog
    ) {
        // Instanciar paginador
        this.paginator = this.maquinaService.getPaginator();

        // Observables
        this.isLoading = this.paginator.isLoadingSubject;
        this.page = this.paginator.pageSubject;
    }

    public ngOnInit() {
        this.paginator.init(this.dataSource, this.matPaginator, this.matSort);
    }

    public registrar() {
        // Crear dialogo
        const ref: MatDialogRef<RegistrarMaquinaComponent> = this.dialog.open(RegistrarMaquinaComponent, {
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

    public editar(maquina: Maquina) {
        // Crear dialogo
        const ref: MatDialogRef<EditarMaquinaComponent> = this.dialog.open(EditarMaquinaComponent, {
            width: '1000px',
            data: maquina
        })

        // Al cerrar dialogo
        ref.afterClosed().subscribe(
            response => {
                // Actualizar paginador
                this.paginator.update();
            }
        );
    }

    public eliminar(maquina: Maquina) {
        // Crear dialogo
        const ref: MatDialogRef<EliminarMaquinaComponent> = this.dialog.open(EliminarMaquinaComponent, {
            width: '1000px',
            data: maquina
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
