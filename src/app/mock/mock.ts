import { Vehiculo } from '../models/vehiculo';
import { Vivienda } from '../models/vivienda';
import { Beneficiario } from '../models/beneficiario';
import { Poliza } from '../models/poliza';
import { Asegurador } from '../models/asegurador';
import { Empresa } from '../models/empresa';
export const empresaSeguros : Empresa[]=[
    {
      id: 1,
      nombre: "San Cristóbal",
    },
    {
      id: 2,
      nombre: "Sura"
    }
    
  ];
  
  export const aseguradores:Asegurador[] = [
    {
      id: 1,
      nombre: "Carlos",
      apellido: "Gómez",
      cod_productor: "A12345",
      empresas: [ empresaSeguros[0], empresaSeguros[1]] // Puede trabajar con varias empresas
    },
    {
      id: 2,
      nombre: "Laura",
      apellido: "Fernández",
      cod_productor: "B67890",
      empresas: [ empresaSeguros[2]] // Solo trabaja con Sura
    }
  ];
  
  export const clientes = [
    {
      id: 1,
      nombre: "Juan Pérez",
      dni: "30123456",
      telefono: "111-222-333",
      email: "juanperez@email.com",
      aseguradorId: 1, // Cliente atendido por Carlos Gómez
      empresaId: 1 // Asegurado en San Cristóbal
    },
    {
      id: 2,
      nombre: "María López",
      dni: "29111222",
      telefono: "444-555-666",
      email: "marialopez@email.com",
      aseguradorId: 2, // Cliente atendido por Laura Fernández
      empresaId: 2 // Asegurado en Sura
    }
  ];
  
  export const Mock_polizas :Poliza[]= [
    {
      id: 1,
      numero_pol: "POL-12345",
      clienteId: 1,
      empresaId: 1,
      aseguradorId: 1,
      tipo: "Auto",
      descripcion: "algo de plizas",
      fechaInicio: new Date('25-02-30'),
      estado: "al día",
      fechaVencimiento: new Date('25-06-30')
    },
    {
      id: 2,
      numero_pol: "POL-67890",
      clienteId: 2,
      aseguradorId: 2,
      empresaId: 2,
      descripcion: "algo de plizas",
      fechaInicio: new Date('25-02-30'),
      tipo: "Hogar",
      estado: "vencida",
      fechaVencimiento: new Date('25-06-30')
    }
  ];
  

  export const VEHICULOS_MOCK: Vehiculo[] = [
    { id: 1, polizaId: 101, marca: 'Toyota', modelo: 'Corolla', año: 2020, patente: 'ABC123', chasis: 'CH12345', motor: 'MOT6789', color: 'Blanco' },
    { id: 2, polizaId: 102, marca: 'Ford', modelo: 'Focus', año: 2018, patente: 'DEF456', chasis: 'CH67890', motor: 'MOT1234', color: 'Negro' }
  ];
  

  
  export const VIVIENDAS_MOCK: Vivienda[] = [
    { id: 1, polizaId: 201, direccion: 'Av. Siempre Viva 742', ciudad: 'Springfield', provincia: 'Buenos Aires', codigoPostal: '1234', tipo: 'Casa', metrosCuadrados: 150, valorEstimado: 50000 },
    { id: 2, polizaId: 202, direccion: 'Calle Falsa 123', ciudad: 'Capital Federal', provincia: 'Buenos Aires', codigoPostal: '5678', tipo: 'Departamento', metrosCuadrados: 80, valorEstimado: 30000 }
  ];
  
  
  export const BENEFICIARIOS_MOCK: Beneficiario[] = [
    { id: 1, polizaId: 301, nombre: 'Juan Pérez', dni: '12345678', parentesco: 'Esposo/a' },
    { id: 2, polizaId: 302, nombre: 'María López', dni: '87654321', parentesco: 'Hijo/a' }
  ];
  
