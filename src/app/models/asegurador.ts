import { Empresa } from './empresa';
export interface Asegurador {//se crea la interfaz Asegurador
    id: number;
    nombre: string;
    apellido:string;
    cod_productor:string;
    empresas: Empresa[];
  }
