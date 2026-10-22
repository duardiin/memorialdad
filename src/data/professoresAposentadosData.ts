/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProfessorAposentado {
  id: string;
  nome: string;
  observacoes?: string;
  /** URL da foto (opcional) */
  foto?: string;
}

// Adicione aqui os registros dos Professores Aposentados do DAD.
export const professoresAposentados: ProfessorAposentado[] = [
  { id: "adriel-rodrigues-oliveira", nome: "ADRIEL RODRIGUES DE OLIVEIRA", foto: "/Adriel-Rodrigues.jpeg" },
  { id: "afonso-augusto-teixeira-freitas-carvalho-lima",foto:'/Afonso.png', nome: "AFONSO AUGUSTO TEIXEIRA DE FREITAS DE CARVALHO LIMA" },
  { id: "antonio-figueiredo-vieira", nome: "ANTÔNIO DE FIGUEIREDO VIEIRA", foto: "/Antonio de Figueredo Vieira.jpeg" },
  { id: "adolfo-egidio-reis", nome: "ADOLFO EGÍDIO REIS", foto: '/Adolfo Egidio.png' },
  { id: "djair-cesario-araujo", nome: "DJAIR CESÁRIO DE ARAÚJO", foto: "/Djair Cesário de Araujo.jpeg" },
  { id: "jacinto-luiz-silva", nome: "JACINTO LUIZ DA SILVA" },
  { id: "juarez-magalhaes-rodrigues", nome: "JUAREZ MAGALHÃES RODRIGUES", foto: '/Juarez Rodrigues.png' },
  { id: "maria-graca-nemer-jentzsch", nome: "MARIA DA GRAÇA NEMER JENTZSCH" },
  { id: "milton-rodrigues-natalino", nome: "MILTON RODRIGUES NATALINO", foto: "/Milton Rodrigues Natalino.jpeg" },
  { id: "nanci-pereira-vasconcelos", nome: "NANCI PEREIRA DE VASCONCELOS" },
  { id: "nina-rosa-silveira-cunha", nome: "NINA ROSA DA SILVEIRA CUNHA", foto: "/Nina Rosa.jpg" },
  { id: "telma-regina-costa-guimaraes-barbosa", nome: "TELMA REGINA DA COSTA GUIMARÃES BARBOSA", foto: "/TELMA REGINA DA COSTA GUIMARÃES BARBOSA.jfif" },
  { id: "walmer-faroni", nome: "WALMER FARONI", foto: "/faroni.png" },
];
