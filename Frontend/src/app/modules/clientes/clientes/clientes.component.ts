import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';
import { Paginator } from 'src/app/models/paginator';
import { Page } from 'src/app/models/page';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/cliente';
import { RegistrarClienteComponent } from '../registrar-cliente/registrar-cliente.component';

@Component({
    selector: 'app-clientes',
    templateUrl: './clientes.component.html',
    styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

    // Columnas de datatable
    public displayedColumns: string[] = ['nombres', 'rut', 'telefono', 'fecha_registro', 'edit', 'delete'];

    // Paginación
    public paginator: Paginator<Cliente>;

    // Data-source
    public dataSource: MatTableDataSource<Cliente> = new MatTableDataSource();

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
        private clienteService: ClienteService,
        private dialog: MatDialog
    ) {
        // Instanciar paginador
        this.paginator = this.clienteService.getPaginator();

        // Observables
        this.isLoading = this.paginator.isLoadingSubject;
        this.page = this.paginator.pageSubject;
    }

    public ngOnInit() {
        this.paginator.init(this.dataSource, this.matPaginator, this.matSort);
    }

    public registrar() {
        // Abrir dialogo
        const ref: MatDialogRef<RegistrarClienteComponent> = this.dialog.open(RegistrarClienteComponent, {
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

    public eliminar(cliente: Cliente) {
        /*
        // Crear dialogo
        const ref: MatDialogRef<EliminarEmpresaComponent> = this.dialog.open(EliminarEmpresaComponent, {
            width: '1000px',
            data: empresa
        });

        // Al cerrar dialogo
        ref.afterClosed().subscribe(
            response => {
                // Actualizar paginador
                this.paginator.update();
            }
        );
        */
    }

}
