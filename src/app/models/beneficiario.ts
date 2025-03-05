export interface Beneficiario {//se crea la interfaz Beneficiario 
    id: number;
    polizaId: number;
    nombre: string;
    dni: string;
    parentesco: 'Esposo/a' | 'Hijo/a' | 'Padre/Madre' | 'Otro';
  }