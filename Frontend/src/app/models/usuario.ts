export interface Usuario {
    id?: number;
    nombre?: string;
    password?: string;
    createdAt?: Date;
    _links?: {[key: string]: {href: string}};
}
