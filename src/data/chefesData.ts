/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Registro dos chefes que passaram pelo Departamento de Administração
 * e Contabilidade (DAD/DAE) da UFV.
 *
 * Como preencher:
 * - id: identificador único (pode ser sequencial: '1', '2', '3'...)
 * - nome: nome completo do professor/professora
 * - periodoInicio: ano em que assumiu a chefia
 * - periodoFim: ano em que deixou a chefia (use `null` se for a gestão atual)
 * - cargo: opcional. Padrão é "Chefe do Departamento". Use para diferenciar
 *          "Chefe do DAE" (antes de 1988) de "Chefe do DAD" (depois de 1988),
 *          ou para registrar subchefias.
 * - foto: opcional. URL ou base64 de uma foto do professor.
 * - observacoes: opcional. Um breve destaque da gestão (marcos, projetos, etc).
 */

export interface ChefeDepartamento {
  id: string;
  nome: string;
  periodoInicio: number;
  periodoFim: number | null;
  cargo?: string;
  foto?: string;
  observacoes?: string;
}

export const chefesDepartamento: ChefeDepartamento[] = [
  // Exemplo de preenchimento — substitua pelos dados reais do departamento:
  // {
  //   id: '1',
  //   nome: 'Prof. Fulano de Tal',
  //   periodoInicio: 1977,
  //   periodoFim: 1979,
  //   cargo: 'Chefe do DAE',
  //   observacoes: 'Primeiro chefe do então Departamento de Administração e Economia.',
  // },
  {
    id: "1",
    nome: "Ronan Pereira Capobiango",
    periodoInicio: "08/11/1996",
    periodoFim: "03/02/1998",
    cargo: "",
    observacoes: ""
  }
];
