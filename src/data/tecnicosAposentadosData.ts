/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TecnicoAposentado {
  id: string;
  nome: string;
  nivel: 'superior' | 'medio';
  observacoes?: string;
  /** URL da foto (opcional) */
  foto?: string;
}

export const NIVEIS_TECNICOS: { id: TecnicoAposentado['nivel']; titulo: string }[] = [
  { id: 'superior', titulo: 'Técnicos de Nível Superior' },
  { id: 'medio', titulo: 'Nível Médio/Apoio' },
];

// Adicione aqui os registros dos Técnicos Administrativos Aposentados do DAD.
export const tecnicosAposentados: TecnicoAposentado[] = [
  { id: "carlos-alberto-freire-resende", nome: "CARLOS ALBERTO FREIRE RESENDE", nivel: "superior", foto: "/1978 “O técnico Carlos Alberto Freire Resende”.avif" },
  { id: "cassia-viviani-silva-santiago", nome: "CASSIA VIVIANI SILVA SANTIAGO", nivel: "superior" },
  { id: "jaci-marina-silva", nome: "JACI MARINA DA SILVA", nivel: "superior" },
  { id: "marcio-jose-ozorio-goncalves", nome: "MÁRCIO JOSE OZÓRIO GONÇALVES", nivel: "superior" },
  { id: "sergio-augusto-pereira-silva", nome: "SÉRGIO AUGUSTO PEREIRA DA SILVA", nivel: "superior" },

  { id: "amanda-oliva-pereira", nome: "AMANDA OLIVA PEREIRA", nivel: "medio" },
  { id: "carmem-antonio-elias", nome: "CARMEM ANTÔNIO ELIAS", nivel: "medio" },
  { id: "luis-carlos-freitas", nome: "LUIS CARLOS DE FREITAS", nivel: "medio" },
  { id: "thiago-santos", nome: "THIAGO DOS SANTOS", nivel: "medio" },
  { id: "weliton-rodrigues", nome: "WELITON RODRIGUES", nivel: "medio" },
  { id: "ivone-moreira-ottomar", nome: "IVONE MOREIRA OTTOMAR", nivel: "medio" },
  { id: "silvania-castro-brommonschenkel", nome: "SILVANIA DE CASTRO BROMMONSCHENKEL", nivel: "medio" },
  { id: "ana-maria-resende-nogueira", nome: "ANA MARIA RESENDE NOGUEIRA", nivel: "medio" },
];
