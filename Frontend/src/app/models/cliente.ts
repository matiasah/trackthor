export interface Cliente {
    nombres?: string,
    rut?: string,
    telefono?: string,
    _links: { [key: string]: { href: string } };
}
