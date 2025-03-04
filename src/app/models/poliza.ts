import { Beneficiario } from "./beneficiario";

export interface Poliza {
        id: number;
        clienteId: number;
        aseguradora: string; // San Cristóbal, Sura, etc.
        tipo: 'Auto' | 'Hogar' | 'Vida' | 'Salud';
        descripcion: string;
        fechaInicio: Date;
        fechaVencimiento: Date;
        montoAsegurado: number;
        estado: 'al día' | 'vencida';
        mesesAtrasados?: number;
      
        // Relaciones opcionales según el tipo de seguro
        vehiculoId?: number; // Solo si es "Auto"
        viviendaId?: number; // Solo si es "Hogar"
        beneficiarios?: Beneficiario[]; // Solo si es "Vida" o "Salud"
      }
