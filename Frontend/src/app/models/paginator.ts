import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent, Sort } from '@angular/material';
import { environment } from 'src/environments/environment';
import { Pagination } from './pagination';
import { BehaviorSubject, Observable } from 'rxjs';
import { Page } from './page';

export class Paginator<T> {

    public constructor(
        private http: HttpClient,
        private path: string,
        private attribute: string
    ) {

    }

    private dataSource: MatTableDataSource<T>;
    private sort: any = {};
    private pageIndex = 0;
    private pageSize = 5;

    public pageSubject: BehaviorSubject<Page> = new BehaviorSubject({ pageIndex: 0, length: 0 });
    public isLoadingSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

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
        sort.sortChange.subscribe((event: Sort) => {
            if (event.direction === '') {
                delete this.sort[event.active];
            } else {
                this.sort[event.active] = event.direction;
            }
            this.query();
        });

        this.query();
    }

    private query(): void {
        // Ordenamiento de columnas
        let sortPath = '';

        for (const [column, direction] of Object.entries(this.sort)) {
            sortPath += 'sort=' + column + ',' + direction + '&';
        }

        // Pagina y tamaño
        const pageAndSizePath = 'page=' + this.pageIndex + '&size=' + this.pageSize;

        // Indicar que se encuentra cargando resultados
        this.isLoadingSubject.next(true);

        this.http.get<Pagination>(environment.api + this.path + '?' + sortPath + pageAndSizePath).subscribe(
            Response => {
                // Obtener datos
                this.dataSource.data = Response._embedded[this.attribute];

                // Indicar la pagina actual
                this.pageSubject.next({
                    pageIndex: Response.page.number,
                    length: Response.page.totalElements,
                });

                // Indicar que no se encuentra cargando resultados
                this.isLoadingSubject.next(false);
            }
        );
    }

}
