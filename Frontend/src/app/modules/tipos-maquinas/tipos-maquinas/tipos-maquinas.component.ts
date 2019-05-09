import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { TipoMaquinaService } from 'src/app/services/tipo-maquina.service';
import { TipoMaquina } from 'src/app/models/tipo-maquina';
import { Paginator } from 'src/app/models/paginator';
import { Page } from 'src/app/models/page';
import { RegistrarTipoMaquinaComponent } from '../registrar-tipo-maquina/registrar-tipo-maquina.component';

@Component({
    selector: 'app-tipos-maquinas',
    templateUrl: './tipos-maquinas.component.html',
    styleUrls: ['./tipos-maquinas.component.scss']
})
export class TiposMaquinasComponent implements OnInit {

    // Columnas de datatable
    public displayedColumns: string[] = ['nombre', 'edit', 'delete'];

    // Paginación
    public paginator: Paginator<TipoMaquina>;

    // DataSource
    public dataSource: MatTableDataSource<TipoMaquina> = new MatTableDataSource();

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

    public tipoMaquina: TipoMaquina[];

    public constructor(
        private tipoMaquinaService: TipoMaquinaService,
        private dialog: MatDialog
    ) {
        // Instanciar paginador
        this.paginator = this.tipoMaquinaService.getPaginator();

        // Observables
        this.isLoading = this.paginator.isLoadingSubject;
        this.page = this.paginator.pageSubject;
    }

    public ngOnInit() {
        this.paginator.init(this.dataSource, this.matPaginator, this.matSort);
    }

    public registrar() {
        this.dialog.open(RegistrarTipoMaquinaComponent, { width: '1000px' });
    }

}
