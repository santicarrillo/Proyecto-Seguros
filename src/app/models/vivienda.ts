export interface Vivienda {
        id: number;
        polizaId: number;
        direccion: string;
        ciudad: string;
        provincia: string;
        codigoPostal: string;
        tipo: 'Casa' | 'Departamento';
        metrosCuadrados: number;
        valorEstimado: number;
      }

