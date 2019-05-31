import { Empresa } from './empresa';
import { Usuario } from './usuario';

export interface GestionEmpresa {
    empresa?: Empresa;
    usuario?: Usuario;
    createdAt?: string;
    _links: {[key: string]: {href: string}};
}
