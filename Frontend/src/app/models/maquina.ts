export interface Maquina {
    patente?: string;
    latitud?: number;
    longitud?: number;
    empresa?: string;
    tipoMaquina?: string;
    createdAt?: string;
    _links?: {[key: string]: {href: string}};
}
