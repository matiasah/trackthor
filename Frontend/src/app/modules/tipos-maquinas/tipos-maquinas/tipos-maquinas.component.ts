import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { TipoMaquinaService } from 'src/app/services/tipo-maquina.service';
import { TipoMaquina } from 'src/app/models/tipo-maquina';
import { Paginator } from 'src/app/models/paginator';

@Component({
    selector: 'app-tipos-maquinas',
    templateUrl: './tipos-maquinas.component.html',
    styleUrls: ['./tipos-maquinas.component.scss']
})
export class TiposMaquinasComponent implements OnInit {

    // Columnas de datatable
    public displayedColumns: string[] = ['id', 'nombre', 'edit', 'delete'];

    // Paginación
    public paginator: Paginator<TipoMaquina>;

    // DataSource
    public dataSource: MatTableDataSource<TipoMaquina> = new MatTableDataSource();

    // Sort
    @ViewChild(MatSort)
    public matSort: MatSort;

    // Paginación
    @ViewChild('paginator')
    public matPaginator: MatPaginator;

    public tipoMaquina: TipoMaquina[];

    public constructor(
        private tipoMaquinaService: TipoMaquinaService
    ) {
        this.paginator = this.tipoMaquinaService.getPaginator();
    }

    public ngOnInit() {
        this.paginator.init(this.dataSource, this.matPaginator, this.matSort);
    }

}
