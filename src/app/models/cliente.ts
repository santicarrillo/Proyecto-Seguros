export interface Cliente {//se crea la interfaz Cliente
    id: number;
    nombre: string;
    apellido: string;
    dni: string;
    email:string;
    telefono: string;
    empresaId: number;//relacion con la empresa
    polizaId: number;//relacion con la poliza
}
