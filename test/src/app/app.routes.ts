import { Routes, RouterModule } from "@angular/router";
import { Component } from "@angular/core";
import { HomeComponent } from "./componentes/home/home.component";
import { FormularioComponent } from "./componentes/formulario/formulario.component";

const APP_ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  { path: "formulario", component: FormularioComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
