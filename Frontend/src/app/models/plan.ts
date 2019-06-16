export interface Plan {
    nombre?: string;
    descripcion?: string;
    costo?: number;
    createdAt?: string;
    _links: {[key: string]: {href: string}};
}
