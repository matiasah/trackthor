export interface Alerta {
    descripcion?: string;
    empresa?: string;
    usuario?: string;
    createdAt?: string;
    _links: { [key: string]: { href: string } };
}
