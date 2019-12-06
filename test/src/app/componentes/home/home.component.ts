import { Component, OnInit } from "@angular/core";
import { ComentariosService } from "../../services/comentarios.service";
import { Comentario } from "src/app/comun/interfaces";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  arrComentarios: Comentario[] = [];
  constructor(private _comentariosService: ComentariosService) {}

  ngOnInit() {
    //esto ejecutara la funcion comentarios una renderizada la pagina por completo
    this.comentarios();
  }

  comentarios() {
    this._comentariosService.comentarios().subscribe(response => {
      if (response.length > 0) {
        //asignacion de la respuesta a su variable
        this.arrComentarios = response;
      }
      console.log(this.arrComentarios);
    });
  }
}
