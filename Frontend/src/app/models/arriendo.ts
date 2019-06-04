export interface Arriendo {
    createdAt?: Date;
    inicio?: Date;
    termino?: Date;
    cliente?: string,
    maquina?: string
    _links: { [key: string]: { href: string } };
}
