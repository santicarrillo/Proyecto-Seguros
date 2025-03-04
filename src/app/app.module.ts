import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
const routes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)  // 🚀 Asegúrate de que esto está bien importado
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
