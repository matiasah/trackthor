export interface UsuarioChofer {
    id?: number;
    run?: string;
    nombre?: string;
    nombresChofer?: string;
    password?: string;
    createdAt?: Date;
    empresa?: string;
    _links?: { [key: string]: { href: string } };
}
