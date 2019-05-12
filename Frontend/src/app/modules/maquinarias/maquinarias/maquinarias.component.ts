import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { Paginator } from 'src/app/models/paginator';
import { Page } from 'src/app/models/page';
import { MaquinaService } from 'src/app/services/maquina.service';
import { Maquina } from 'src/app/models/maquina';
import { RegistrarMaquinariaComponent } from '../registrar-maquinaria/registrar-maquinaria.component';
import { EliminarMaquinaComponent } from '../eliminar-maquina/eliminar-maquina.component';

@Component({
    selector: 'app-maquinarias',
    templateUrl: './maquinarias.component.html',
    styleUrls: ['./maquinarias.component.scss']
})
export class MaquinariasComponent implements OnInit {

    // Columnas de datatable
    public displayedColumns: string[] = ['numero', 'patente', 'tipo', 'fecha_registro', 'edit', 'delete'];

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
        this.dialog.open(RegistrarMaquinariaComponent, { width: '1000px' });
    }

    public eliminar(maquina: Maquina) {
        this.dialog.open(EliminarMaquinaComponent, {
            width: '1000px',
            data: { maquina }
        }).afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(result);
        });
    }

}
