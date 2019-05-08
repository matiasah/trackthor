export interface Pagination {
    _embedded: any;
    _links: {
        self: {
            href: string,
            templated: boolean
        },
        profile: {
            href: string
        }
    };
    page: {
        size: number;
        totalElements: number;
        totalPages: 0;
        number: 0;
    };
}
