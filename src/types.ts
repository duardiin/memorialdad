export interface MemorialEvent {
  tag: 'fundacao' | 'ensino' | 'pesquisa' | 'extensao' | 'gestao' | 'infraestrutura' | 'reconhecimento' | 'parceria' | 'cultura';
  title: string;
  desc: string;
  url?: string;
}

export interface MemorialPhoto {
  url: string;
  caption: string;
}

export interface YearData {
  events: MemorialEvent[];
  photos: MemorialPhoto[];
}

export type MemorialData = Record<number, YearData>;
