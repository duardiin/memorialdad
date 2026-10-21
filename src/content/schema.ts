/**
 * Formato do conteúdo adicionado pelo Painel Administrativo (/admin).
 *
 * Esses itens ficam em src/content/*.json e são somados aos dados originais
 * de src/data/*.ts na hora de montar o site (ver src/data/conteudo.ts).
 * Os nomes dos campos seguem os dos dados originais, para a junção ser direta.
 */

export interface MetaItem {
  criadoEm: string;
  criadoPor: string;
  atualizadoEm?: string;
  atualizadoPor?: string;
}

export interface FotoItem {
  url: string;
  caption: string;
}

export interface NoticiaItem {
  id: string;
  year: number;
  tag: string;
  title: string;
  desc: string;
  photos: FotoItem[];
  externalLinks: { label: string; url: string }[];
  articleUrl: string;
  _meta?: MetaItem;
}

export interface GaleriaItem {
  id: string;
  url: string;
  title: string;
  caption: string;
  colorida: boolean;
  _meta?: MetaItem;
}

export interface ChefeItem {
  id: string;
  nome: string;
  periodoInicio: string;
  periodoFim: string | null;
  cargo: string;
  foto: string;
  observacoes: string;
  _meta?: MetaItem;
}

export interface ProfessorTitularItem {
  id: string;
  nome: string;
  periodoInicio: number;
  cargo: string;
  foto: string;
  observacoes: string;
  _meta?: MetaItem;
}

export interface ProfessorAtualItem {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  formacao: string[];
  foto: string;
  observacoes: string;
  _meta?: MetaItem;
}

export interface TecnicoItem {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  foto: string;
  _meta?: MetaItem;
}

export interface ColacaoItem {
  id: string;
  ano: number;
  data: string;
  grupos: { curso?: string; linhas: string[] }[];
  nota?: string;
  _meta?: MetaItem;
}

export interface Colecoes {
  noticias: NoticiaItem;
  galeria: GaleriaItem;
  chefes: ChefeItem;
  professoresTitulares: ProfessorTitularItem;
  professoresAtuais: ProfessorAtualItem;
  tecnicos: TecnicoItem;
  homenageados: ColacaoItem;
}

export type NomeColecao = keyof Colecoes;

export const NOMES_COLECOES: NomeColecao[] = [
  'noticias',
  'galeria',
  'chefes',
  'professoresTitulares',
  'professoresAtuais',
  'tecnicos',
  'homenageados',
];

export const caminhoColecao = (nome: NomeColecao) => `src/content/${nome}.json`;

export type Papel = 'admin' | 'editor';

export interface UsuarioPublico {
  id: string;
  nome: string;
  email: string;
  papel: Papel;
  principal?: boolean;
}

export const ANO_INICIAL = 1974;
