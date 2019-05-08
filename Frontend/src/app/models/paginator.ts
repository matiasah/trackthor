import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent } from '@angular/material';
import { environment } from 'src/environments/environment';
import { Pagination } from './pagination';

export class Paginator<T> {

    private dataSource: MatTableDataSource<T>;
    private sort: any = {};
    private pageIndex = 0;
    private pageSize = 5;
    public isLoadingResults = false;

    public constructor(
        private http: HttpClient,
        private path: string,
        private attribute: string
    ) {

        this.query();
    }

    public init(dataSource: MatTableDataSource<T>, paginator: MatPaginator, sort: MatSort): void {
        this.dataSource = dataSource;
        this.dataSource.paginator = paginator;
        this.dataSource.sort = sort;

        // Al cambiar la pagina actual
        paginator.page.subscribe((event: PageEvent) => {
            this.pageIndex = event.pageIndex;
            this.pageSize = event.pageSize;
            this.query();
        });

        // Al cambiar el orden de alguna columna
        sort.sortChange.subscribe(event => {
            if (event.direction === '') {
                this.sort[event.active] = null;
            } else {
                this.sort[event.active] = event.direction;
            }
            this.query();
        });
    }

    private query(): void {
        // Ordenamiento de columnas
        let sortPath = '';

        for (const [column, direction] of Object.entries(this.sort)) {
            sortPath += '&' + column + ',' + direction;
        }

        // Pagina y tamaño
        const pageAndSizePath = 'page=' + this.pageIndex + '&size=' + this.pageSize;

        // Indicar que se encuentra cargando resultados
        this.isLoadingResults = true;

        this.http.get<Pagination>(environment.api + this.path + '?' + pageAndSizePath + sortPath).subscribe(
            Response => {
                // Obtener datos
                this.dataSource.data = Response._embedded[this.attribute];

                // Indicar que no se encuentra cargando resultados
                this.isLoadingResults = true;
            }
        );
    }

}
