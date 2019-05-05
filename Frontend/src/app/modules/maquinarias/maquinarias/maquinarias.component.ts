import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { RegistrarMaquinariaComponent } from '../registrar-maquinaria/registrar-maquinaria.component';


@Component({
  selector: 'app-maquinarias',
  templateUrl: './maquinarias.component.html',
  styleUrls: ['./maquinarias.component.scss']
})
export class MaquinariasComponent implements OnInit {

  // Columnas de datatable
  public displayedColumns: string[] = ['id', 'patente', 'tipo', 'chofer'];

  // Data-source
  public dataSource: MatTableDataSource<any> = new MatTableDataSource();

  // Lista de maquinarias (se tiene que cambiar por un modelo de maquinarias)
  public maquinarias: any[] = [
    {
      id: 1,
      patente: "KD3243",
      tipo: "Grúa",
      chofer: "Fabián Mariqueo"
    },
    {
      id: 2,
      patente: "KKSJ32",
      tipo: "Camión",
      chofer: "Pablo Barría"
    },
    {
      id: 3,
      patente: "GGDU34",
      tipo: "Retroexcavadora",
      chofer: "Felipe Quezada"
    },
    {
      id: 4,
      patente: "HHOO45",
      tipo: "Motoniveladora",
      chofer: "Matías Hermosilla"
    }
  ];

  // Sort
  @ViewChild(MatSort)
  public sort: MatSort;

  // Paginación
  @ViewChild("maquinariaPaginator")
  public paginator: MatPaginator;

  public constructor(
    private dialog: MatDialog
  ) {

  }

  public ngOnInit() {
    // Inicializar data-source
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSource.data = this.maquinarias;
  }

  public registrarMaquinaria(){
    this.dialog.open(RegistrarMaquinariaComponent, { width: '1000px' });
  }

}
