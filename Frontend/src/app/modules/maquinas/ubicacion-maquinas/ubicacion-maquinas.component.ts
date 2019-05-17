import { Component, OnInit, ViewChild } from '@angular/core';
import { Geolocation, Map, View, MapBrowserEvent, Coordinate, proj } from 'openlayers';
import { MapComponent } from 'ngx-openlayers';
import { MaquinaService } from 'src/app/services/maquina.service';
import { Maquina } from 'src/app/models/maquina';

@Component({
    selector: 'app-ubicacion-maquinas',
    templateUrl: './ubicacion-maquinas.component.html',
    styleUrls: ['./ubicacion-maquinas.component.scss']
})
export class UbicacionMaquinasComponent implements OnInit {

    // Lista de máquinas
    public maquinas: Maquina[];

    public constructor(
        private maquinaService: MaquinaService
    ) {

    }

    public ngOnInit() {
        // Obtener máquinas
        this.maquinaService.query().subscribe(
            Response => {
                this.maquinas = Response;
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

}
