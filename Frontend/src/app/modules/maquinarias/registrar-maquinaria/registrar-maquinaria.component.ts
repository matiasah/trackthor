import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-registrar-maquinaria',
    templateUrl: './registrar-maquinaria.component.html',
    styleUrls: ['./registrar-maquinaria.component.scss']
})
export class RegistrarMaquinariaComponent implements OnInit {

    public registrando: boolean = false;

    // Formulario
    @ViewChild("form")
    public form: NgForm;

    public constructor(
        private dialogRef: MatDialogRef<RegistrarMaquinariaComponent>,
    ) {

    }

    public ngOnInit() {
    }

    public onSubmit(): void {
        
    }

}
