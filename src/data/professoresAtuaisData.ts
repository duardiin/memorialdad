export interface ProfessorAtual {
  id: string;
  nome: string;
  email: string;
  telefone?: string;
  formacao: string[];
  foto?: string;
  observacoes?: string;
}

export const professoresAtuais: ProfessorAtual[] = [
  {
    id: 'adriele-aparecida-gomes-de-bem',
    nome: 'Adriele Aparecida Gomes de Bem',
    email: 'adriele.bem@ufv.br',
    formacao: [
      'Superior em Administração, 2021, Universidade Federal de Viçosa',
      'M.S. Administração, 2024, Universidade Federal de Viçosa',
    ],
    foto: '/adriele aparecida.jpg'
  },
  {
    id: 'alan-ferreira-de-freitas',
    nome: 'Alan Ferreira de Freitas',
    email: 'alanf.freitas@ufv.br',
    telefone: '(31) 3612-7025',
    formacao: [
      'Superior em Gestão de Cooperativas, 2008, Universidade Federal de Viçosa',
      'M.S. Extensão Rural, 2011, Universidade Federal de Viçosa',
      'D.S. Extensão Rural, 2017, Universidade Federal de Viçosa',
    ],
    foto: '/Alan Ferreira de Freitas.jpg'
  },
  {
    id: 'ana-claudia-azevedo',
    nome: 'Ana Claudia Azevedo',
    email: 'anaazevedo@ufv.br',
    telefone: '(31) 3612-7027',
    formacao: [
      'Superior em Administração, 2011, Faculdade de Nova Serrana - FANS',
      'M.S. Administração, 2014, Universidade FUMEC',
      'D.S. Administração, 2019, USP',
    ],
    foto: '/Ana Claudia Azevedo.jpg'
  },
  {
    id: 'antonio-carlos-brunozi-junior',
    nome: 'Antônio Carlos Brunozi Júnior',
    email: 'antonio.brunozi@ufv.br',
    telefone: '(31) 3612-7032',
    formacao: [
      'Superior em Ciências Contábeis, 2009, Universidade Federal de Viçosa',
      'M.S. Administração, 2010, Universidade Federal de Viçosa',
      'D.S. Ciências Contábeis, 2016, Universidade do Vale do Rio dos Sinos',
    ],
    foto: '/Antônio Carlos Brunozi Júnior.jpg'
  },
  {
    id: 'bruno-tavares',
    nome: 'Bruno Tavares',
    email: 'btavares@ufv.br',
    telefone: '(31) 3612-7013',
    formacao: [
      'Superior em Administração, 1997, Universidade Federal de Viçosa',
      'M.S. Administração, 2000, Universidade Federal de Viçosa',
      'D.S. Administração, 2011, Universidade Federal de Lavras',
    ],
    foto: '/Bruno Tavares.jpg'
  },
  {
    id: 'diego-costa-mendes',
    nome: 'Diego Costa Mendes',
    email: 'diego@ufv.br',
    telefone: '(31) 3612-7017',
    formacao: [
      'Superior em Administração, 2011, Universidade Federal de Pernambuco',
      'D.S. Administração, 2019, Universidade Federal de Pernambuco',
    ],
    foto: '/Diego Costa Mendes.jpg'
  },
  {
    id: 'emanuela-cristina-chiconeli-silva-inez',
    nome: 'Emanuela Cristina Chiconeli Silva Inez',
    email: 'emanuela.silva@ufv.br',
    formacao: [
      'Superior em Ciências Contábeis, 2024, Universidade Federal de Viçosa',
    ],
    foto: '/Emanuela Cristina Chiconeli Silva Inez.jpg'
  },
  {
    id: 'evandro-rodrigues-de-faria',
    nome: 'Evandro Rodrigues de Faria',
    email: 'evandroadm@ufv.br',
    telefone: '(31) 3612-7026',
    formacao: [],
    foto: '/Evandro Rodrigues de Faria.jpg'
  },
  {
    id: 'fernanda-cristina-da-silva',
    nome: 'Fernanda Cristina da Silva',
    email: 'fernanda.silva@ufv.br',
    telefone: '(31) 3612-7020',
    formacao: [
      'Superior em Administração, 2009, Universidade Federal de Viçosa',
      'M.S. Administração, 2011, Universidade Federal de Viçosa',
      'D.S. Administração Pública, 2015, Fundação Getulio Vargas',
    ],
    foto: '/Fernanda Cristina da Silva.jpg'
  },
  {
    id: 'fernanda-maria-de-almeida',
    nome: 'Fernanda Maria de Almeida',
    email: 'fernanda.almeida@ufv.br',
    telefone: '(31) 3612-7024',
    formacao: [
      'Superior em Ciências Econômicas, 2008, Universidade Federal de Viçosa',
      'M.S. Economia, 2009, Universidade Federal de Viçosa',
      'D.S. Economia Aplicada, 2012, UFV',
    ],
    foto: '/Fernanda Maria de Almeida.jpg'
  },
  {
    id: 'gislaine-aparecida-santana-sediyama',
    nome: 'Gislaine Aparecida Santana Sediyama',
    email: 'gislaine.santana@ufv.br',
    telefone: '(31) 3612-7012',
    formacao: [
      'Superior em Ciências Contábeis, 2006, Universidade Federal de Viçosa',
      'M.S. Ciências Contábeis, 2010, Universidade Federal de Minas Gerais',
      'D.S. Controladoria e Contabilidade, 2023, Universidade de São Paulo',
    ],
    foto: '/Gislaine Aparecida Santana Sediyama.jpg'
  },
  {
    id: 'henrique-cordeiro-martins',
    nome: 'Henrique Cordeiro Martins',
    email: 'henrique.c.martins@ufv.br',
    formacao: [
      'Superior em Administração, 1993, Instituto Newton Paiva',
      'D.S. Administração, 2005, Universidade Federal de Minas Gerais',
    ],
    foto: '/Henrique Cordeiro Martins.jpg'
  },
  {
    id: 'josiel-lopes-valadares',
    nome: 'Josiel Lopes Valadares',
    email: 'josiel.valadares@ufv.br',
    telefone: '(31) 3612-7010',
    formacao: [
      'Superior em Administração, 2011, Universidade Federal de Viçosa',
      'M.S. Administração, 2013, Universidade Federal de Viçosa',
      'D.S. Administração, 2016, Universidade Federal de Lavras',
    ],
    foto: '/Josiel Lopes Valadares.jpg'
  },
  {
    id: 'layon-carlos-cezar',
    nome: 'Layon Carlos Cezar',
    email: 'layon.cezar@ufv.br',
    formacao: [
      'Superior em Administração, 2018, Universidade Federal do Rio de Janeiro',
      'M.S. Administração, 2014, UFV',
      'D.S. Administração, 2019, UFES',
    ],
    foto: '/Layon Carlos Cezar.jpg'
  },
  {
    id: 'leandro-rivelli-teixeira-nogueira',
    nome: 'Leandro Rivelli Teixeira Nogueira',
    email: 'leandro.r.nogueira@ufv.br',
    formacao: [
      'D.S. Ciências, 2014, Universidade Federal de Lavras',
    ],
    foto: '/Leandro Rivelli Teixeira Nogueira.jpg'
  },
  {
    id: 'luana-ferreira-dos-santos',
    nome: 'Luana Ferreira dos Santos',
    email: 'luana.f.santos@ufv.br',
    formacao: [
      'Superior em Agronegócio, 2014, UFV',
      'M.S. Administração, 2016, UFV',
      'D.S. Administração, 2020, UFRN',
    ],
    foto: '/Luana Ferreira dos Santos.jpg'
  },
  {
    id: 'luiz-antonio-abrantes',
    nome: 'Luiz Antônio Abrantes',
    email: 'abrantes@ufv.br',
    telefone: '(31) 3612-2202',
    formacao: [
      'M.S. Administração Rural, 1997, Universidade Federal de Lavras',
      'D.S. Administração, 2006, Universidade Federal de Lavras',
    ],
    foto: '/Luiz Antônio Abrantes.jpg'
  },
  {
    id: 'magnus-luiz-emmendoerfer',
    nome: 'Magnus Luiz Emmendoerfer',
    email: 'magnus@ufv.br',
    telefone: '(31) 3612-7026',
    formacao: [
      'Superior em Administração, 2002, Universidade Federal de Santa Catarina',
      'M.S. Administração, 2004, Universidade Federal de Santa Catarina',
      'D.S. Sociologia, 2009, Universidade Federal de Minas Gerais',
    ],
    foto: '/Magnus Luiz Emmendoerfer.jfif'
  },
  {
    id: 'marco-aurelio-marques-ferreira',
    nome: 'Marco Aurelio Marques Ferreira',
    email: 'marcoaurelio@ufv.br',
    telefone: '(31) 3612-7028',
    formacao: [
      'Superior em Administração, 2000, Universidade Federal de Viçosa',
      'M.S. Economia, 2002, Universidade Federal de Viçosa',
      'D.S. Economia, 2005, Universidade Federal de Viçosa',
    ],
    foto: '/Marco Aurelio.jfif'
  },
  {
    id: 'marconi-silva-miranda',
    nome: 'Marconi Silva Miranda',
    email: 'marconi.miranda@ufv.br',
    formacao: [
      'Superior em Matemática, 1998, Universidade Federal de Viçosa',
      'M.S. Estatística Aplicada e Biometria, 2012, Universidade Federal de Viçosa',
      'D.S. Administração, 2022, Universidade Federal de Viçosa',
    ],
    foto: '/Marconi Silva Miranda.jpg'
  },
  {
    id: 'nalbia-de-araujo-santos',
    nome: 'Nalbia de Araújo Santos',
    email: 'nalbia@ufv.br',
    telefone: '(31) 3612-7021',
    formacao: [
      'Superior em Ciências Contábeis, 1990, Universidade Estadual de Montes Claros - Unimontes',
      'M.S. Ciências Contábeis, 2004, Universidade de São Paulo',
      'D.S. Ciências Contábeis, 2012, USP',
    ],
    foto: '/Nalbia de Araújo Santos.jpg'
  },
  {
    id: 'pedro-henrique-jesus-oliveira',
    nome: 'Pedro Henrique Jesus Oliveira',
    email: 'pedro.henrique.oliveira@ufv.br',
    formacao: [
      'Superior em Ciências Contábeis, 2019, Univiçosa',
    ],
    foto: '/Pedro Henrique Jesus Oliveira.jpg'
  },
  {
    id: 'rodrigo-gava',
    nome: 'Rodrigo Gava',
    email: 'rgava@ufv.br',
    telefone: '(31) 3612-7029',
    formacao: [
      'Superior em Administração, 1995, Universidade Federal de Viçosa',
      'M.S. Extensão Rural, 2001, Universidade Federal de Viçosa',
      'D.S. Administração, 2009, Fundação Getulio Vargas',
    ],
    foto: '/Rodrigo Gava.jfif'
  },
  {
    id: 'ronan-pereira-capobiango',
    nome: 'Ronan Pereira Capobiango',
    email: 'ronan.capobiango@ufv.br',
    telefone: '(31) 3612-7019',
    formacao: [
      'Superior em Ciências Contábeis, 2009, Universidade Federal de Viçosa',
      'M.S. Administração, 2012, Universidade Federal de Viçosa',
      'D.S. Ciências Contábeis, 2023, Universidade de Brasília',
    ],
    foto: '/Ronan Capobiango.png'
  },
  {
    id: 'simone-martins',
    nome: 'Simone Martins',
    email: 'simone.m@ufv.br',
    telefone: '(31) 3612-7023',
    formacao: [
      'Superior em Ciências Contábeis, 2005, Universidade Federal de Minas Gerais',
      'Especialização em Gestão Pública, 2005, Faculdade da Região dos Lagos',
      'D.S. Administração, 2015, Universidade Federal de Minas Gerais',
    ],
    foto: '/Simone Martins.jpg'
  },
  {
    id: 'suely-de-fatima-ramos-silveira',
    nome: 'Suely de Fátima Ramos Silveira',
    email: 'sramos@ufv.br',
    telefone: '(31) 3612-7015',
    formacao: [
      'Superior em Ciências Econômicas, 1984, Universidade Federal de Viçosa - UFV',
      'M.S. Economia Aplicada, 1993, Universidade Federal de Viçosa - UFV',
      'D.S. Economia, 2000, Universidade de São Paulo',
    ],
    foto: '/Suely de Fátima Ramos Silveira.jpg'
  },
  {
    id: 'taina-rodrigues-gomide-souza-pinto',
    nome: 'Taina Rodrigues Gomide Souza Pinto',
    email: 'taina.gomide@ufv.br',
    telefone: '(31) 3612-7014',
    formacao: [
      'Superior em Direito, 2007, Sociedade Educacional Diogo Braga Filho - ESUV',
      'Superior em Ciências Contábeis, 2007, Universidade Federal de Viçosa',
      'M.S. Administração, 2009, Universidade Federal de Viçosa',
      'D.S. Administração, 2018, Universidade Federal de Minas Gerais',
    ],
    foto: '/Taina Rodrigues Gomide Souza Pinto.jpg'
  },
  {
    id: 'thiago-de-melo-teixeira-da-costa',
    nome: 'Thiago de Melo Teixeira da Costa',
    email: 'thiagocosta@ufv.br',
    telefone: '(31) 3612-7018',
    formacao: [
      'Superior em Administração, 2003, Universidade Federal de Viçosa',
      'M.S. Economia, 2005, Universidade Federal de Viçosa',
      'D.S. Economia, 2010, UFV',
    ],
    foto: '/Thiago de Melo Teixeira da Costa.jpg'
  },
  {
    id: 'wender-fraga-miranda',
    nome: 'Wender Fraga Miranda',
    email: 'wender.miranda@ufv.br',
    telefone: '(31) 3612-7012',
    formacao: [
      'Superior em Ciências Contábeis, 2000, Faculdades Integradas de Caratinga',
      'Especialização em Administração, 2003, Universidade Federal de Lavras',
      'M.S. Ciências Contábeis, 2006, Fundação Instituto Capixaba de Pesquisas em Contabilidade, Economia e Finanças',
      'D.S. Controladoria e Contabilidade, 2018, Universidade de São Paulo',
    ],
    foto: '/Wender Fraga Miranda.jpg'
  },
  {
    id: 'wescley-silva-xavier',
    nome: 'Wescley Silva Xavier',
    email: 'wescley@ufv.br',
    telefone: '(31) 3612-7016',
    formacao: [
      'Superior em Administração, 2007, Universidade Federal de Viçosa',
      'M.S. Administração, 2010, Universidade Federal de Minas Gerais',
      'D.S. Administração, 2013, Universidade Federal de Minas Gerais',
    ],
    foto: '/Wescley Silva Xavier.jpg'
  },
];
