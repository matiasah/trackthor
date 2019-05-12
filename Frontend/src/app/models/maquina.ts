import { Observable } from 'rxjs';
import { Empresa } from './empresa';
import { TipoMaquina } from './tipo-maquina';

export interface Maquina {
    patente?: string;
    empresa?: string | Observable<Empresa>;
    tipoMaquina?: string | Observable<TipoMaquina>;
    createdAt?: string;
    _links?: {[key: string]: {href: string}};
}
