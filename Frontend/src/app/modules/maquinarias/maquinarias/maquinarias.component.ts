import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { RegistrarMaquinariaComponent } from '../registrar-maquinaria/registrar-maquinaria.component';
import { Maquina } from 'src/app/models/maquina';
import { MaquinaService } from 'src/app/services/maquina.service';


@Component({
    selector: 'app-maquinarias',
    templateUrl: './maquinarias.component.html',
    styleUrls: ['./maquinarias.component.scss']
})
export class MaquinariasComponent implements OnInit {

    // Columnas de datatable
    public displayedColumns: string[] = ['numero', 'patente', 'fecha_registro', 'show', 'edit', 'delete'];

    // Data-source
    public dataSource: MatTableDataSource<any> = new MatTableDataSource();

    // Lista de maquinarias registradas en el sistema para la empresa actual
    public maquinarias: Maquina[] = [];

    // Sort
    @ViewChild(MatSort)
    public sort: MatSort;

    // Paginación
    @ViewChild('maquinariaPaginator')
    public paginator: MatPaginator;

    public constructor(
        private dialog: MatDialog,
        private maquinaService: MaquinaService
    ) {
        
    }

    public ngOnInit() {
        // Inicializar data-source
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        this.maquinaService.query().subscribe(
            Response => {
                this.maquinarias = Response;
                this.dataSource.data = this.maquinarias;
            },
            Error => {

            }
        );
                
    }

    public registrarMaquinaria() {
        this.dialog.open(RegistrarMaquinariaComponent, { width: '1000px' });
    }

}
