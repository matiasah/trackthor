export interface Maquina {

    id: number;
    patente: string;
    createdAt: string;

    _links: {[key: string]: {href: string}};
}
