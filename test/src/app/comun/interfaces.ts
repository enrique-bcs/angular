export interface Comentario {
  id: number;
  comentario: string;
  usuario: string;
  calificacion: number;
  like: boolean;
}

export interface likes {
  votes: number;
  userVotes: number;
}