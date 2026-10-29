/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Agradecido {
  nome: string;
  /** Função ou motivo do agradecimento (opcional) */
  descricao?: string;
  /** URL da foto (opcional) */
  foto?: string;
}

// Equipe principal do projeto do Memorial.
export const equipePrincipal: Agradecido[] = [
  { nome: 'Afonso Augusto', foto: '/Afonso.png' },
  { nome: 'Nina Rosa', foto: '/Nina Rosa.jpg' },
  { nome: 'Walmer Faroni', foto: '/Walmer Faroni atual.jpeg' },
  { nome: 'Eduardo Jesus', foto: '/Eduardo.jpg' },
];

// Adicione aqui os demais nomes a quem o Memorial agradece.
// Exemplo: { nome: 'Fulano de Tal', descricao: 'Cessão de fotografias' },
export const agradecimentos: Agradecido[] = [
  { nome: 'Ronan Pereira Capobiango', descricao: 'Chefe do DAD e demais professores' },
  { nome: 'Jansen Cardoso Pereira', descricao: 'Pelo apoio administrativo' },
  { nome: 'DCI — Diretoria de Comunicação Institucional', descricao: 'Pelo imediato acolhimento e elaboração do vídeo' },
  { nome: 'Gustavo Soares Sabioni', descricao: 'Pelo apoio histórico' },
  { nome: 'Eduardo Luiz dos Santos', descricao: 'Pelo acesso aos primeiros arquivos históricos' },


  { nome: 'Demais colaboradores do DAD' },
];
