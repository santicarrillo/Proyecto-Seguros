import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { PolizasComponent } from './pages/polizas/polizas.component';
import { DetallePolizaComponent } from './pages/detalle-poliza/detalle-poliza.component';
import { DetalleBienAseguradoComponent } from './pages/detalle-bien-asegurado/detalle-bien-asegurado.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirección inicial
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'polizas', component: PolizasComponent },
  { path: 'polizas/:id', component: DetallePolizaComponent },
  { path: 'polizas/:id/detalle', component: DetalleBienAseguradoComponent },
  { path: '**', redirectTo: 'login' } // Ruta por defecto si no encuentra la página
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
