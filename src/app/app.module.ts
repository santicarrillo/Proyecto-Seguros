import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { PolizasComponent } from './pages/polizas/polizas.component';
import { DetallePolizaComponent } from './pages/detalle-poliza/detalle-poliza.component';
import { DetalleBienAseguradoComponent } from './pages/detalle-bien-asegurado/detalle-bien-asegurado.component';
const routes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ClientesComponent,
    PolizasComponent,
    DetallePolizaComponent,
    DetalleBienAseguradoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)  // 🚀 Asegúrate de que esto está bien importado
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
