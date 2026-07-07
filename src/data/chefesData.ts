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
  periodoInicio: string;
  periodoFim: string | null;
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
    nome: "Marcos Tanure Sanabio",
    periodoInicio: "10/08/1988",
    periodoFim: "11/09/1989",
    cargo: "",
    observacoes: ""
  },
  {
    id: "2",
    nome: "Roberto de Caralho Araújo",
    periodoInicio: "12/09/1989",
    periodoFim: "01/11/1989",
    cargo: "",
    observacoes: ""
  },
  {
    id: "3",
    nome: "Milton Rodrigues Natalino",
    periodoInicio: "02/11/1989",
    periodoFim: "15/06/1990",
    cargo: "",
    observacoes: ""
  },
  {
    id: "4",
    nome: "Antonio de Figueredo Vieira",
    periodoInicio: "16/06/1990",
    periodoFim: "06/11/1992",
    cargo: "",
    observacoes: ""
  },
  {
    id: "5",
    nome: "Milton Rodrigues Natalino",
    periodoInicio: "07/11/1992",
    periodoFim: "11/05/1995",
    cargo: "",
    observacoes: ""
  },
  {
    id: "6",
    nome: "José Edson Lara",
    periodoInicio: "12/05/1995",
    periodoFim: "07/11/1996",
    cargo: "",
    observacoes: ""
  },
  {
    id: "7",
    nome: "Adriel Rodrigues de Oliveira",
    periodoInicio: "08/11/1996",
    periodoFim: "03/02/1998",
    cargo: "",
    observacoes: ""
  },
  {
    id: "8",
    nome: "Ricardo Correa Gomes",
    periodoInicio: "04/02/1998",
    periodoFim: "01/07/1999",
    cargo: "",
    observacoes: ""
  },
  {
    id: "9",
    nome: "Luiz Antonio Abrantes",
    periodoInicio: "02/07/1999",
    periodoFim: "14/12/2000",
    cargo: "",
    observacoes: ""
  },
  {
    id: "10",
    nome: "Walmer Faroni",
    periodoInicio: "15/12/2000",
    periodoFim: "15/12/2004",
    cargo: "",
    observacoes: ""
  },
  {
    id: "11",
    nome: "Djair Cesário de Araujo",
    periodoInicio: "21/02/2006",
    periodoFim: "11/12/2008",
    cargo: "",
    observacoes: "Pro tempore de 21/02/2006 a 16/03/2006 e efetivo de 16/03/2006 a 11/12/2008; 11/12/2008 a 01/07/2011 e reconduzido em 11/07/2011 a 12/08/2015."
  },
  {
    id: "12",
    nome: "Simone Martins",
    periodoInicio: "12/08/2015",
    periodoFim: "28/08/2017",
    cargo: "",
    observacoes: ""
  },
  {
    id: "13",
    nome: "Bruno Tavares",
    periodoInicio: "29/08/2017",
    periodoFim: "04/06/2019",
    cargo: "",
    observacoes: ""
  },
  {
    id: "14",
    nome: "Josiel Lopes Valadares",
    periodoInicio: "04/06/2019",
    periodoFim: "03/04/2023",
    cargo: "",
    observacoes: ""
  },
  {
    id: "15",
    nome: "Ronan Capobiango",
    periodoInicio: "03/04/2023",
    periodoFim: null,
    cargo: "",
    observacoes: ""
  }
];
