import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatSnackBar } from '@angular/material';
import { Observable, timer, Subscription } from 'rxjs';
import { Paginator } from 'src/app/models/paginator';
import { Page } from 'src/app/models/page';
import { MaquinaService } from 'src/app/services/maquina.service';
import { Maquina } from 'src/app/models/maquina';
import { Geolocation, Coordinate } from 'openlayers';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

    // Máquina a la cual se le actualiza la ubicación
    public maquina?: Maquina | null;

    // Posición de la maquina
    public posicion: Coordinate;

    // Timer que envía posición de maquina
    public timerSubscription: Subscription;

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
        private snackBar: MatSnackBar
    ) {
        // Instanciar paginador
        this.paginator = this.maquinaService.getPrincipalChoferPaginator();

        // Observables
        this.isLoading = this.paginator.isLoadingSubject;
        this.page = this.paginator.pageSubject;
    }

    public ngOnInit() {
        this.paginator.init(this.dataSource, this.matPaginator, this.matSort);

        // Obtener ubicación actual
        const geolocation: Geolocation = new Geolocation();

        // Activar tracking
        geolocation.setTracking(true);

        // Al recibir ubicación
        geolocation.on('change:position', () => {
            // Obtener posición
            this.posicion = geolocation.getPosition();
        });

        // Enviar posición cada 5 segundos
        this.timerSubscription = timer(0, 5000).subscribe(
            () => {
                // Si hay máquina y se desea transmitir ubicación
                if (this.maquina && this.transmitir) {
                    // Actualizar ubicación de la maquina
                    this.maquina.latitud = this.posicion[0];
                    this.maquina.longitud = this.posicion[1];

                    // Enviar ubicación de la máquina
                    this.maquinaService.update(this.maquina).subscribe(() => {
                        // Nada que hacer
                    });
                }
            }
        );
    }

    public ngOnDestroy() {
        // Eliminar timer
        this.timerSubscription.unsubscribe();
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
