export interface Empresa {
    nombre?: string;
    rut?: string;
    telefono?: string;
    createdAt?: string;
    _links?: {[key: string]: {href: string}};
}
