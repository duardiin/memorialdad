export interface MemorialPhoto {
  id?: string;
  url: string;
  caption: string;
  title?: string;
}

export interface ExternalLink {
  label: string;
  url: string;
}

export type EventTag =
  | 'fundacao'
  | 'ensino'
  | 'pesquisa'
  | 'extensao'
  | 'gestao'
  | 'infraestrutura'
  | 'reconhecimento'
  | 'parceria'
  | 'cultura'
  | 'nomeacao'
  | 'homenagem'
  | 'comemoracao';

export interface MemorialEvent {
  id?: string;
  tag: string;
  title: string;
  desc: string;
  dateStr?: string;
  photos?: MemorialPhoto[];
  externalLinks?: ExternalLink[];
  articleUrl?: string;
}

export interface YearData {
  events: MemorialEvent[];
  photos: MemorialPhoto[];
  articleUrl?: string;
}

export type MemorialData = Record<number, YearData>;

export interface ChefeDepartamento {
  id: string;
  nome: string;
  periodoInicio: number;
  periodoFim?: number;
  cargo?: string;
  foto?: string;
  observacoes?: string;
}

export interface ProfessorTitular {
  id: string;
  nome: string;
  periodoInicio: number;
  cargo?: string;
  foto?: string;
  observacoes?: string;
}

export interface ProfissionalAdmitido {
  id: string;
  nome: string;
  periodoInicio: number | string;
  periodoFim?: number | string;
  cargo?: string;
  foto?: string;
  observacoes?: string;
}