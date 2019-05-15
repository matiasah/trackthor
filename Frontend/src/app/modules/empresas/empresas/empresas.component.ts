import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';
import { Paginator } from 'src/app/models/paginator';
import { Page } from 'src/app/models/page';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Empresa } from 'src/app/models/empresa';
import { RegistrarEmpresaComponent } from '../registrar-empresa/registrar-empresa.component';

@Component({
    selector: 'app-empresas',
    templateUrl: './empresas.component.html',
    styleUrls: ['./empresas.component.scss']
})
export class EmpresasComponent implements OnInit {

    // Columnas de datatable
    public displayedColumns: string[] = ['nombre', 'rut', 'telefono', 'fecha_registro', 'edit', 'delete'];

    // Paginación
    public paginator: Paginator<Empresa>;

    // Data-source
    public dataSource: MatTableDataSource<Empresa> = new MatTableDataSource();

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
        private empresaService: EmpresaService,
        private dialog: MatDialog
    ) {
        // Instanciar paginador
        this.paginator = this.empresaService.getPaginator();

        // Observables
        this.isLoading = this.paginator.isLoadingSubject;
        this.page = this.paginator.pageSubject;
    }

    public ngOnInit() {
        this.paginator.init(this.dataSource, this.matPaginator, this.matSort);
    }

    public registrar() {
        // Abrir dialogo
        const ref: MatDialogRef<RegistrarEmpresaComponent> = this.dialog.open(RegistrarEmpresaComponent, {
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

}
