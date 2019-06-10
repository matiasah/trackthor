import { Component, OnInit, ViewChild } from '@angular/core';
import { Plan } from 'src/app/models/plan';
import { Paginator } from 'src/app/models/paginator';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';
import { Page } from 'src/app/models/page';
import { PlanService } from 'src/app/services/plan.service';
import { RegistrarPlanComponent } from '../registrar-plan/registrar-plan.component';
import { EditarPlanComponent } from '../editar-plan/editar-plan.component';
import { EliminarPlanComponent } from '../eliminar-plan/eliminar-plan.component';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss']
})
export class PlanesComponent implements OnInit {

  // Columnas de datatable
  public displayedColumns: string[] = ['nombre', 'descripcion', 'costo', 'fecha_registro', 'edit', 'delete'];

  // Paginación
  public paginator: Paginator<Plan>;

  // Data-source
  public dataSource: MatTableDataSource<Plan> = new MatTableDataSource();

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
    private planService: PlanService,
    private dialog: MatDialog
  ) {
    // Instanciar paginador
    this.paginator = this.planService.getPaginator();

    // Observables
    this.isLoading = this.paginator.isLoadingSubject;
    this.page = this.paginator.pageSubject;
  }

  public ngOnInit() {
    this.paginator.init(this.dataSource, this.matPaginator, this.matSort);
  }

  public registrar() {
    // Abrir dialogo
    const ref: MatDialogRef<RegistrarPlanComponent> = this.dialog.open(RegistrarPlanComponent, {
      width: '1000px'
    });

    // Al cerrar dialogo
    ref.afterClosed().subscribe(
      response => {
        // Actualizar paginador
        this.paginator.update();
      }
    );
  }

  public editar(plan: Plan) {
    // Abrir dialogo
    const ref: MatDialogRef<EditarPlanComponent> = this.dialog.open(EditarPlanComponent, {
      width: '1000px',
      data: plan
    });

    // Al cerrar dialogo
    ref.afterClosed().subscribe(
      response => {
        // Actualizar paginador
        this.paginator.update();
      }
    );
  }

  public eliminar(plan: Plan) {
    // Crear dialogo
    const ref: MatDialogRef<EliminarPlanComponent> = this.dialog.open(EliminarPlanComponent, {
      width: '1000px',
      data: plan
    });

    // Al cerrar dialogo
    ref.afterClosed().subscribe(
      response => {
        // Actualizar paginador
        this.paginator.update();
      }
    );
  }

}
