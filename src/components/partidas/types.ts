export interface Time {
  time_id: number;
  nome_popular: string;
  sigla: string;
  escudo: string;
}

export interface Campeonato {
  campeonato_id: number;
  nome: string;
  slug: string;
}

export interface Partida {
  partida_id: number;
  campeonato: Campeonato;
  placar: string;
  time_mandante: Time;
  time_visitante: Time;
  placar_mandante: number | null;
  placar_visitante: number | null;
  disputa_penalti: boolean;
  status: string;
  slug: string;
  data_realizacao: string;
  hora_realizacao: string | null;
  data_realizacao_iso: string;
  estadio: string | null;
  _link: string;
}
