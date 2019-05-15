import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { Geolocation, Map, View, MapBrowserEvent, Coordinate, proj } from 'openlayers';
import { MapComponent } from 'ngx-openlayers';
import { MaquinaService } from 'src/app/services/maquina.service';
import { Maquina } from 'src/app/models/maquina';
import { TipoMaquinaService } from 'src/app/services/tipo-maquina.service';
import { TipoMaquina } from 'src/app/models/tipo-maquina';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Empresa } from 'src/app/models/empresa';

@Component({
    selector: 'app-registrar-maquina',
    templateUrl: './registrar-maquina.component.html',
    styleUrls: ['./registrar-maquina.component.scss']
})
export class RegistrarMaquinaComponent implements OnInit {

    // Maquina a registrar
    public maquina: Maquina = {};

    // Tipos de máquina
    public tiposMaquinas: TipoMaquina[];

    // Empresas
    public empresas: Empresa[];

    // Indicar si se encuentra registrando
    public registrando = false;

    // Formulario
    @ViewChild('form')
    public form: NgForm;

    public constructor(
        private dialogRef: MatDialogRef<RegistrarMaquinaComponent>,
        private snackBar: MatSnackBar,
        private maquinaService: MaquinaService,
        private tipoMaquinaService: TipoMaquinaService,
        private empresaService: EmpresaService
    ) {

    }

    public ngOnInit() {
        // Obtener tipos de máquina
        this.tipoMaquinaService.query().subscribe(
            Response => {
                this.tiposMaquinas = Response;
            }
        );

        // Obtener empresas
        this.empresaService.query().subscribe(
            Response => {
                this.empresas = Response;
            }
        );
    }

    @ViewChild(MapComponent)
    public set map(mapComponent: MapComponent) {
        if (mapComponent != null) {
            // Obtener mapa
            const map: Map = mapComponent.instance;

            // Obtener vista
            const view: View = map.getView();

            // Obtener ubicación actual
            const geolocation: Geolocation = new Geolocation({
                trackingOptions: {
                    enableHighAccuracy: true
                },
                projection: map.getView().getProjection(),
                tracking: true,
            });

            geolocation.on('change:position', () => {
                // Obtener posición
                const position: Coordinate = geolocation.getPosition();

                // Centrar en posición
                view.setCenter(position);
                view.setZoom(15);

                // Desactivar tracking
                geolocation.setTracking(false);
            });
        }
    }

    public setCoordenada(e: MapBrowserEvent) {
        // Transformar coordenadas
        const coordinate: Coordinate = proj.transform(e.coordinate, 'EPSG:3857', 'EPSG:4326');

        // Asignar coordenadas
        this.maquina.latitud = coordinate[0];
        this.maquina.longitud = coordinate[1];
    }

    public onSubmit(): void {
        // Si el formulario es válido
        if (this.form.valid) {
            // Indicar que se encuentra registrando
            this.registrando = true;

            // Registrar
            this.maquinaService.save(this.maquina).subscribe(
                Respose => {
                    // Indicar que no se encuentra registrando
                    this.registrando = false;

                    // Notificar registro exitoso
                    this.snackBar.open('La máquina ha sido registrada', 'Aceptar', { duration: 2000 });

                    // Cerrar modal
                    this.dialogRef.close();
                },
                Error => {
                    // Indicar que no se encuentra registrando
                    this.registrando = false;

                    // Notificar registro erroneo
                    this.snackBar.open('No se ha podido registrar la máquina', 'Aceptar', { duration: 2000 });

                    // Cerrar modal
                    this.dialogRef.close();
                }
            );
        }
    }

}
