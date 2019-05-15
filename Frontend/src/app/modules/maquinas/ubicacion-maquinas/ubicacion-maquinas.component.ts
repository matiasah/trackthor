import { Component, OnInit } from '@angular/core';
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

}
