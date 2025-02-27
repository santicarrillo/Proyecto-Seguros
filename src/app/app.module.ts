import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AseguradorComponent } from './asegurador/asegurador.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { PolizaComponent } from './poliza/poliza.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AseguradorComponent,
    UsuarioComponent,
    PolizaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
