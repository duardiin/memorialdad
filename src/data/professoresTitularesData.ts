/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProfessorTitular {
  id: string;
  nome: string;
  /** Ano em que obteve o título de Professor Titular */
  periodoInicio: number;
  /** Preencher apenas se não estiver mais no departamento */
  periodoFim?: number;
  /** Ex: "Professor Titular — Área de Finanças" */
  cargo?: string;
  observacoes?: string;
  /** URL da foto (opcional) */
  foto?: string;
}

// Adicione aqui os registros dos Professores Titulares do DAD.
export const professoresTitulares: ProfessorTitular[] = [
  {
    id: "adriel-rodrigues-oliveira",
    nome: "ADRIEL RODRIGUES DE OLIVEIRA",
    periodoInicio: 2014,
    cargo: "Professor Titular"
  },
  {
    id: "nina-rosa-silveira-cunha",
    nome: "NINA ROSA DA SILVEIRA CUNHA",
    periodoInicio: 2014,
    cargo: "Professor Titular"
  },
  {
    id: "telma-regina-costa-guimaraes-barbosa",
    nome: "TELMA REGINA DA COSTA GUIMARÃES BARBOSA",
    periodoInicio: 2014,
    cargo: "Professor Titular"
  },
  {
    id: "walmer-faroni",
    nome: "WALMER FARONI",
    periodoInicio: 2014,
    cargo: "Professor Titular"
  },
  {
    id: "jose-roberto-reis",
    nome: "JOSE ROBERTO REIS",
    periodoInicio: 2015,
    cargo: "Professor Titular"
  },
  {
    id: "marco-aurelio-marques-ferreira",
    nome: "MARCO AURELIO MARQUES FERREIRA",
    periodoInicio: 2021,
    cargo: "Professor Titular"
  },
  {
    id: "luiz-antonio-abrantes",
    nome: "LUIZ ANTONIO ABRANTES",
    periodoInicio: 2022,
    cargo: "Professor Titular"
  },
  {
    id: "magnus-luiz-emmendoerfer",
    nome: "MAGNUS LUIZ EMMENDOERFER",
    periodoInicio: 2025,
    cargo: "Professor Titular"
  },
  {
    id: "rodrigo-gava",
    nome: "RODRIGO GAVA",
    periodoInicio: 2025,
    cargo: "Professor Titular"
  }
];


  
