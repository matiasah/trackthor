import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import { Observable, forkJoin } from 'rxjs';
import { Geolocation, Map, View, MapBrowserEvent, Coordinate, proj } from 'openlayers';
import { MapComponent } from 'ngx-openlayers';
import { MaquinaService } from 'src/app/services/maquina.service';
import { Maquina } from 'src/app/models/maquina';
import { TipoMaquinaService } from 'src/app/services/tipo-maquina.service';
import { TipoMaquina } from 'src/app/models/tipo-maquina';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Empresa } from 'src/app/models/empresa';

@Component({
    selector: 'app-editar-maquina',
    templateUrl: './editar-maquina.component.html',
    styleUrls: ['./editar-maquina.component.scss']
})
export class EditarMaquinaComponent implements OnInit {

    // Maquina que se desea editar
    public maquina: Maquina;

    // Tipos de maquinas disponibles
    public tiposMaquinas: TipoMaquina[];

    // Empresas disponibles
    public empresas: Empresa[];

    // Indicar si se encuentra registrando
    public registrando = false;

    // Formulario
    @ViewChild('form')
    public form: NgForm;

    public constructor(
        private dialogRef: MatDialogRef<EditarMaquinaComponent>,
        private maquinaService: MaquinaService,
        @Inject(MAT_DIALOG_DATA) private data: any,
        private tipoMaquinaService: TipoMaquinaService,
        private empresaService: EmpresaService,
        private snackBar: MatSnackBar,
    ) {

    }

    public ngOnInit() {
        // Obtener la maquina sin los datos observables
        this.maquinaService.get(this.data._links.self.href).subscribe(
            maquina => {
                // Obtener empresa
                const obsEmpresa: Observable<Empresa> = this.empresaService.get(maquina._links.empresa.href);

                // Obtener tipo de maquina
                const obsTipoMaquina: Observable<TipoMaquina> = this.tipoMaquinaService.get(maquina._links.tipoMaquina.href);

                forkJoin(obsEmpresa, obsTipoMaquina).subscribe(
                    (Response: [Empresa, TipoMaquina]) => {
                        // Asignar maquina
                        maquina.empresa = Response[0]._links.self.href;

                        // Asignar empresa
                        maquina.tipoMaquina = Response[1]._links.self.href;

                        // Asignar maquina
                        this.maquina = maquina;
                    }
                );
            }
        );

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
            // Obtener vista
            const view: View = mapComponent.instance.getView();

            // Centrar mapa
            view.setCenter(proj.transform([this.maquina.latitud, this.maquina.longitud], 'EPSG:4326', 'EPSG:3857'));
            view.setZoom(15);
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
            this.maquinaService.update(this.maquina).subscribe(
                Respose => {
                    // Indicar que no se encuentra registrando
                    this.registrando = false;

                    // Notificar registro exitoso
                    this.snackBar.open('La máquina ha sido Editada', 'Aceptar', { duration: 2000 });

                    // Cerrar modal
                    this.dialogRef.close();
                },
                Error => {
                    // Indicar que no se encuentra registrando
                    this.registrando = false;

                    // Notificar registro erroneo
                    this.snackBar.open('No se ha podido Editar la máquina', 'Aceptar', { duration: 2000 });

                    // Cerrar modal
                    this.dialogRef.close();
                }
            );
        }
    }

}
