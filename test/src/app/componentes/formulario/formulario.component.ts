import { Component, OnInit } from "@angular/core";
import { Comentario } from "src/app/comun/interfaces";
import { ComentariosService } from "../../services/comentarios.service";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"]
})
export class FormularioComponent implements OnInit {
  comentario: Comentario;
  constructor(private _comentariosService: ComentariosService) {}

  ngOnInit() {}
  guardarValues(us: string, cmnt: string, calif: number) {
    this._comentariosService.saveValues(us, cmnt, calif).subscribe(response => {
      console.log(response);
      if (response.length > 0) {
      }
    });
  }
}
