export interface Cliente {
    nombres?: string;
    rut?: string;
    telefono?: string;
    createdAt?: string;
    _links: { [key: string]: { href: string } };
}
