import { Beneficiario } from "./beneficiario";

export interface Poliza {
        id: number;
        numero_pol:string;
        clienteId: number;
        empresaId:number;
        aseguradorId: number; // el numero del asegurador
        tipo: 'Auto' | 'Hogar' | 'Vida' | 'Salud';
        descripcion: string;
        fechaInicio: Date;
        fechaVencimiento: Date;
        estado: 'al día' | 'vencida';      
        // Relaciones opcionales según el tipo de seguro
        vehiculoId?: number; // Solo si es "Auto"
        viviendaId?: number; // Solo si es "Hogar"
        beneficiarios?: Beneficiario[]; // Solo si es "Vida" o "Salud"
      }
   