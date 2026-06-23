export interface MemorialEvent {
  tag: 'fundacao' | 'ensino' | 'pesquisa' | 'extensao' | 'gestao' | 'infraestrutura' | 'reconhecimento' | 'parceria' | 'cultura';
  title: string;
  desc: string;
  url?: string;
  articleUrl?: string;
}

export interface MemorialPhoto {
  url: string;
  caption: string;
}

export interface YearData {
  events: MemorialEvent[];
  photos: MemorialPhoto[];
  articleUrl?: string;
}

export type MemorialData = Record<number, YearData>;
