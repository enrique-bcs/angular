import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Comentario } from "../comun/interfaces";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ComentariosService {
  constructor(private _http: HttpClient) {}
  url: string = "https://localhost:44334";
  comentarios(): Observable<Comentario[]> {
    return this._http.get<Comentario[]>(`${this.url}/api/comentarios`, {});
  }

  saveValues(
    usuario: string,
    comentario: string,
    calificacion: number
  ): Observable<Comentario> {
    return this._http.post<Comentario>(`${this.url}/api/comentarios`, {
      id: 0,
      comentario: comentario,
      usuario: usuario,
      calificacion: parseInt(calificacion + "")
    });
  }
}
