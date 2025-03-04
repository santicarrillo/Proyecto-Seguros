export interface Cliente {
    id: number;
    nombre: string;
    apellido: string;
    dni: string;
    empresaId: number;//relacion con la empresa
    polizaId: number;//relacion con la poliza
}
