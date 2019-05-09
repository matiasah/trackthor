import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { MaquinariaService } from 'src/app/services/maquinaria.service';
import { Maquina } from 'src/app/models/maquina';
import { Paginator } from 'src/app/models/paginator';
import { Page } from 'src/app/models/page';
import { RegistrarMaquinariaComponent } from '../registrar-maquinaria/registrar-maquinaria.component';

@Component({
    selector: 'app-maquinarias',
    templateUrl: './maquinarias.component.html',
    styleUrls: ['./maquinarias.component.scss']
})
export class MaquinariasComponent implements OnInit {

    // Columnas de datatable
    public displayedColumns: string[] = ['numero', 'patente', 'fecha_registro', 'show', 'edit', 'delete'];

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
        private maquinariaService: MaquinariaService,
        private dialog: MatDialog
    ) {
        // Instanciar paginador
        this.paginator = this.maquinariaService.getPaginator();

        // Observables
        this.isLoading = this.paginator.isLoadingSubject;
        this.page = this.paginator.pageSubject;
    }

    public ngOnInit() {
        this.paginator.init(this.dataSource, this.matPaginator, this.matSort);
    }

    public registrarMaquinaria() {
        this.dialog.open(RegistrarMaquinariaComponent, { width: '1000px' });
    }

}
