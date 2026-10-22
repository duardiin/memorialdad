/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ExProfessor {
  id: string;
  nome: string;
  /** URL da foto (opcional) */
  foto?: string;
}

// Adicione aqui os nomes dos Ex-Professores do DAD.
export const exProfessores: ExProfessor[] = [
  { id: "aguida-garreth-ferraz-rocha", nome: "ÁGUIDA GARRETH FERRAZ ROCHA" },
  { id: "alcindo-cipriano-argolo-mendes", nome: "ALCINDO CIPRIANO ARGOLO MENDES", foto: '/Alcindo.jfif' },
  { id: "edson-arlindo-silva", nome: "EDSON ARLINDO SILVA" },
  { id: "emanuel-rodrigues-matos-junqueira", nome: "EMANUEL RODRIGUES DE MATOS JUNQUEIRA" },
  { id: "gustavo-melo-silva", nome: "GUSTAVO MELO SILVA" },
  { id: "jailson-oliveira-arieira", nome: "JAILSON DE OLIVEIRA ARIEIRA", foto: '/Jailson.png' },
  { id: "jorge-alberto-santos", nome: "JORGE ALBERTO DOS SANTOS", foto: '/Jorge.png' },
  { id: "pablo-rogers-silva", nome: "PABLO ROGERS SILVA" },
  { id: "ricardo-correa-gomes", nome: "RICARDO CORRÊA GOMES", foto: "/Ricardo Correa Gomes.jpeg" },
  { id: "robson-zuccolotto", nome: "ROBSON ZUCCOLOTTO" },
  { id: "simone-leticia-raimundini", nome: "SIMONE LETÍCIA RAIMUNDINI", foto: "/Simone.png" },
  { id: "maria-elena-barbassa", nome: "MARIA ELENA BARBASSA" },
  { id: "marcos-tanure-sanabio", nome: "MARCOS TANURE SANÁBIO", foto: "/Marcos Tanure.jpeg" },
  { id: "carlos-roberto-ramos", nome: "CARLOS ROBERTO RAMOS", foto: "/Carlos Roberto Ramos.png" },
  { id: "evaldo-guimaraes-barbosa", nome: "EVALDO GUIMARÃES BARBOSA" },
  { id: "jose-edson-lara", nome: "JOSÉ EDSON LARA", foto: "/José Edson Lara.jpeg" },
  { id: "jose-maria-santos", nome: "JOSÉ MARIA DOS SANTOS" },
  { id: "luciano-zille-pereira", nome: "LUCIANO ZILLE PEREIRA" },
  { id: "olivio-vicente-campos", nome: "OLIVIO VICENTE DE CAMPOS" },
  { id: "sylvia-maria-machado-vendramini", nome: "SYLVIA MARIA MACHADO VENDRAMINI" },
  { id: "terezinha-bezerra-albino-oliveira", nome: "TEREZINHA BEZERRA ALBINO OLIVEIRA" },
  { id: "valeria-braga-duarte-ferreira", nome: "VALÉRIA A. BRAGA DUARTE FERREIRA" },
];
