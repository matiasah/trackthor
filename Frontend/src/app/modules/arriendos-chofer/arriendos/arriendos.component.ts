import { Component, OnInit, ViewChild } from '@angular/core';
import { Paginator } from 'src/app/models/paginator';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';
import { Page } from 'src/app/models/page';
import { ArriendoService } from 'src/app/services/arriendo.service';
import { Arriendo } from 'src/app/models/arriendo';
import { HoraTrabajada } from 'src/app/models/hora-trabajada';
import { RegistrarHoraTrabajadaComponent } from '../registrar-hora-trabajada/registrar-hora-trabajada.component';

@Component({
    selector: 'app-arriendos',
    templateUrl: './arriendos.component.html',
    styleUrls: ['./arriendos.component.scss']
})
export class ArriendosComponent implements OnInit {

    // Columnas de datatable
    public displayedColumns: string[] = ['fechaInicio', 'fechaTermino', 'cliente', 'maquina', 'registrar-hora'];

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
        this.paginator = this.arriendoService.getPaginatorChofer();

        // Observables
        this.isLoading = this.paginator.isLoadingSubject;
        this.page = this.paginator.pageSubject;
    }

    public ngOnInit() {
        this.paginator.init(this.dataSource, this.matPaginator, this.matSort);
    }

    public registrarHora(arriendo: Arriendo) {
        // Crear dialogo
        this.dialog.open(RegistrarHoraTrabajadaComponent, {
            width: '1000px',
            data: arriendo
        });
    }

}
