import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-registrar-maquinaria',
  templateUrl: './registrar-maquinaria.component.html',
  styleUrls: ['./registrar-maquinaria.component.scss']
})
export class RegistrarMaquinariaComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<RegistrarMaquinariaComponent>,
  ) { }

  ngOnInit() {
  }

}
