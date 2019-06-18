import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { Paginator } from 'src/app/models/paginator';
import { Page } from 'src/app/models/page';
import { MaquinaService } from 'src/app/services/maquina.service';
import { Maquina } from 'src/app/models/maquina';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

    // Máquina a la cual se le actualiza la ubicación
    public maquina?: Maquina | null;

    // Indicar si debe transmitir
    public transmitir: boolean;

    // Columnas de datatable
    public displayedColumns: string[] = ['patente', 'tipo', 'fecha_registro'];

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
        private snackBar: MatSnackBar,
    ) {
        // Instanciar paginador
        this.paginator = this.maquinaService.getPrincipalChoferPaginator();

        // Observables
        this.isLoading = this.paginator.isLoadingSubject;
        this.page = this.paginator.pageSubject;
    }

    public ngOnInit() {
        this.paginator.init(this.dataSource, this.matPaginator, this.matSort);
    }

    public seleccionar(maquina: Maquina): void {
        // Si es la máquina actual
        if (maquina == this.maquina) {
            // Des-seleccionar
            this.maquina = null;

            if (this.transmitir) {
                // Notificar que se dejó de transmitir
                this.snackBar.open('No hay máquina seleccionada, se dejará de transmitir la ubicación actual', 'Aceptar', { duration: 2000 });
            }
        } else {
            // Seleccionar
            this.maquina = maquina;

            // Si hay máquina seleccionada
            if (this.maquina && this.transmitir) {
                // Notificar que se dejó de transmitir
                this.snackBar.open('Se ha cambiado de máquina, se dejará de transmitir la ubicación actual', 'Aceptar', { duration: 2000 });
            }
        }
        this.transmitir = false;
    }

}
