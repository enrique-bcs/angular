import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//Rutas
import { APP_ROUTING } from "./app.routes";

//servicios
import { ComentariosService } from "./services/comentarios.service";

//componentes
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./componentes/shared/navbar/navbar.component";
import { FormularioComponent } from "./componentes/formulario/formulario.component";
import { HomeComponent } from "./componentes/home/home.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormularioComponent,
    HomeComponent
  ],
  imports: [BrowserModule, APP_ROUTING, HttpClientModule],
  providers: [ComentariosService],
  bootstrap: [AppComponent]
})
export class AppModule {}
