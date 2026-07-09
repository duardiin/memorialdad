/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProfissionalAdmitido {
  id: string;
  nome: string;
  /** Ano de admissão no departamento */
  periodoInicio: number;
  /** Preencher apenas se não estiver mais no departamento */
  periodoFim?: number;
  /** Ex: "Técnico Administrativo", "Secretário(a)" */
  cargo?: string;
  observacoes?: string;
  /** URL da foto (opcional) */
  foto?: string;
}

// Adicione aqui os registros dos Profissionais Admitidos no DAD.
export const profissionaisAdmitidos: ProfissionalAdmitido[] = [];
