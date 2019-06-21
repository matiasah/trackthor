import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';
import { Paginator } from 'src/app/models/paginator';
import { Page } from 'src/app/models/page';
import { HoraTrabajadaService } from 'src/app/services/hora-trabajada.service';
import { HoraTrabajada } from 'src/app/models/hora-trabajada';
import { EliminarHoraTrabajadaComponent } from '../eliminar-hora-trabajada/eliminar-hora-trabajada.component';

@Component({
    selector: 'app-horas-trabajadas',
    templateUrl: './horas-trabajadas.component.html',
    styleUrls: ['./horas-trabajadas.component.scss'],
})
export class HorasTrabajadasComponent implements OnInit {

    // Columnas de datatable
    public displayedColumns: string[] = ['usuario', 'arriendo', 'horas', 'fecha_registro', 'delete'];

    // Paginación
    public paginator: Paginator<HoraTrabajada>;

    // Data-source
    public dataSource: MatTableDataSource<HoraTrabajada> = new MatTableDataSource();

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
        private horaTrabajadaService: HoraTrabajadaService,
        private dialog: MatDialog
    ) {
        // Instanciar paginador
        this.paginator = this.horaTrabajadaService.getPrincipalPaginator();

        // Observables
        this.isLoading = this.paginator.isLoadingSubject;
        this.page = this.paginator.pageSubject;
    }

    public ngOnInit() {
        this.paginator.init(this.dataSource, this.matPaginator, this.matSort);
    }

    public eliminar(horaTrabajada: HoraTrabajada) {
        // Crear dialogo
        const ref: MatDialogRef<EliminarHoraTrabajadaComponent> = this.dialog.open(EliminarHoraTrabajadaComponent, {
            width: '1000px',
            data: horaTrabajada
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
