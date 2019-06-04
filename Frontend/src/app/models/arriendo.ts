export interface Arriendo {
    createdAt?: Date;
    inicio?: Date;
    termino?: Date;
    _links: { [key: string]: { href: string } };
}
