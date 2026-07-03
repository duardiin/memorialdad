import { isReadable } from 'stream';
import { MemorialData } from '../types';
import { Tag } from 'lucide-react';
import { url } from 'inspector';

export const memorialData: MemorialData = {
  1974: {
    events: [
      { tag: 'fundacao', title: 'Criação do Curso de Administração', desc: 'O Curso de Administração de Empresas estava apto a formar bacharel em Administração Pública e de Empresas, estando credenciado para os cargos técnicos de Administração do Serviço Público Federal, Estadual, Municipal, Autárquico e outros, exercendo funções de chefia ou direção, assessoramento e consultoria. Em complemento, o profissional poderia realizar pesquisas, estudos, análises, interpretação, planejamento, Implantação, соordenação e controle dos trabalhos nos campos de administração geral e outros conexos. Estava também credenciado para o magistério em matérias técnicas do campo de Administração na Organização.' },

    ],
    photos: [
      { url: '/1974 “Ampliação da oferta de vagas no Vestibular”.avif', caption: 'Ampliação da oferta de vagas no Vestibular.' },
      { url: '/1974 “Criação do Departamento”.avif', caption: 'Criação do Departamento.' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/1974-ufv-informa'
  },

  1975: {
    events: [
      { tag: 'fundacao', title: 'A Criação do Instituto de Ciências Humanas: Primeiros Passos e Aprovação', desc: 'O anteprojeto de implantação do Instituto foi elaboradopor um Grupo de Trabalho (Portaria 506/75), tendo como membrosBel. Hamilton Martins Silveira, Professores Juraci AurelianoTeixeira, Eloy Gava e Maria da Conceição Rolim Simões. Oplenário do CEPE aprovou na parte referente aosDepartamentos, como proposto, deixando a posteriori o examereferente aos currículos e planos de estudo. Na reunião doCONSU a proposta do Conselheiro M. Maestri foi aprovada porunanimidade: “apoiar a implantação do Instituto de Ciências Humanas”.' },

      { tag: 'ensino', title: 'Início das primeiras turmas de Administração', desc: 'O curso de Administração recebe as primeiras turmas regulares, com currículo voltado à gestão rural.' },

    ],
    photos: [
      { url: '/1974 “Ampliação da oferta de vagas no Vestibular”.avif', caption: 'Ampliação da oferta de vagas no Vestibular.' },
      { url: '/1974 “Criação do Departamento”.avif', caption: 'Criação do Departamento.' },
    ],
    articleUrl: 'https://atom.ufv.br/index.php/1975-ufv-informa'
  },
  1976: {
    events: [
      { tag: 'gestao', title: 'Concurso Docente', desc: 'Implantação do Departamento de Administração de Empresas e de Economia (DAE) e a constituição de suas respectivas Câmaras Curriculares, com nomeação do primeiro chefe do DAE, Prof. Juraci Aureliano, nomeado pelo Reitor  Antônio Fagundes de Sousa  (19 de maio de 1977 N.° 478). O Departamento de Administração e Economia (DAE) agregava os cursos de Administração e Economia, responsáveis pelas disciplinas das áreas de Administração, Contabilidade, Direito, Economia e Ciências Sociais. ' },

      { tag: 'ensino', title: 'Fortalecimento Institucional', desc: 'O Curso de Administração com 25 vagas passa a oferecer 50 vagas em seu Vestibular Unificado (23 de setembro de 1976 N.° 445).' },

      {
        tag: 'ensino', title: 'A Comissão de Implantação e a Estruturação Administrativa do ICH', desc: 'Pela Portaria nº 70 de 11 de fevereiro, o Reitordesignou os Professores Evonir Batista de Oliveira, Juraci Aureliano Teixeira, Sônia Coelho de Alvarenga e Maria da Conceição Rolim Simões para, em comissão, equacionaremtodas as providências à efetiva implantação do Instituto de Ciências Humanas, apresentando a relação numérica e nominal dos componentes de cada Departamento do Instituto, com discriminação e remanejamento de pessoal, caso necessário, à lotação dos vários Departamentos.'
      },

    ],
    photos: [],
    articleUrl: 'https://atom.ufv.br/index.php/1976-ufv-informa'
  },
  1977: {
    events: [
      { tag: 'fundacao', title: 'Implantação do DAE', desc: 'Implantação do Departamento de Administração de Empresas e de Economia (DAE) e a constituição de suas respectivas Câmaras Curriculares, com nomeação do primeiro chefe do DAE, Prof. Juraci Aureliano, nomeado pelo Reitor Antônio Fagundes de Sousa (19 de maio de 1977 N.° 478). O Departamento de Administração e Economia (DAE) agregava os cursos de Administração e Economia, responsáveis pelas disciplinas das áreas de Administração, Contabilidade, Direito, Economia e Ciências Sociais. O Curso de Administração, com 25 vagas, passa a oferecer 50 vagas em seu Vestibular Unificado (23 de setembro de 1976 N.° 445). Para o Projeto Rondon foi indicado Carlos Alberto Freire Resende, integrante do DAE, para elaborar o programa de trabalho da equipe da UFV (11 de agosto de 1977 N.° 490).' },
    ],
    photos: [],
    articleUrl: 'https://atom.ufv.br/index.php/1977-ufv-informa'
  },
  1978: {
    events: [

      { tag: 'gestao', title: 'Gestão e Liderança', desc: 'Alguns eventos marcaram o ano de 1978, consolidando o DAE e o CCH, com a solenidade de posse na Reitoria do Prof. Tancredo Almada Cruz como chefe do Departamento de Administração e Economia (DAE) (n. 542) e do Prof. Dilson Seabra Rocha como Diretor do Centro de Ciências Humanas, Letras e Artes (CCH). Esses e outros eventos foram abrilhantados com a apresentação do Coral da UFV, sob a regência do Prof. João Adamor Dias Neves, professor do DAE (nºs 532 e 544). Ainda nesse ano, o Prof. João Adamor Dias Neves representou a UFV no II Congresso Brasileiro de Treinamento e Desenvolvimento, uma vez que o referido professor lecionava disciplinas dessa área. O técnico do DAE, Carlos Alberto Freire Resende, torna-se Diretor do Campus Avançado de Altamira (n. 553).' },

      { tag: 'ensino', title: 'A Transição de Instituto para Centro de Ciências Humanas (1978)', desc: 'Em razão das escolas superiores adotarem os centros como unidades acadêmicas, o antigo Instituto de Ciências Humanas tornou-se o Centro de Ciências Humanas, em 3 de outubro de 1978, e no qual se inserem os Departamentos de Administração e Economia, de Educação e de Letras e Artes e de Economia Doméstica (Portaria nº 940). Nessa época foram criados também os demais Centros de Ciências (CCA, CCB e CCE).' },
    ],
    photos: [
      { url: '/1978 “Coral da UFV”.avif', caption: 'Coral da UFV.' },
      { url: '/1978 “Direção do CCH”.avif', caption: 'Direção do CCH.' },
      { url: '/1978 “O professor João Adamor Dias Neves recebeu Menção Honrosa”.webp', caption: 'O professor João Adamor Dias Neves recebeu Menção Honrosa' },
      { url: '/1978 “O técnico Carlos Alberto Freire Resende”.avif', caption: 'O técnico Carlos Alberto Freire Resende' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/1978-ufv-informa'
  },
  1979: {
    events: [
      {
        tag: 'extensao',
        title: 'Homologação e Admissão de Docentes no DAE',
        desc: 'Em 02 de março de 1979, reuniu-se o Departamento de Administração e Economia (DAE) sob a presidência do Professor Tancredo Almada Cruz. Durante a reunião, foi lido o Relatório dos Trabalhos da Comissão de Seleção DAE/UFV/79, o qual aprovou por unanimidade a nomeação e admissão dos currículos dos professores Adriel Rodrigues de Oliveira, Maria de Fátima Teixeira Santos, José Reinaldo Pinheiro Diniz, José Morival Henrique e Alberto Esperança.'
      },
      {
        tag: 'extensao',
        title: 'Inclusão em Comissão e Programação da 4ª Semana do Administrador',
        desc: '21 a 26 de Maio de 1979 Neste período, foi programada a realização da Semana do Administrador, uma celebração institucional composta por um cronograma diário e fluido de eventos que englobou a solenidade de abertura com distribuição de materiais no dia vinte e um, uma palestra dedicada à abordagem da profissão no dia vinte e dois, sessões de debates programadas para o dia vinte e três, uma apresentação focada em Pesquisa Operacional sob a perspectiva profissional no dia vinte e quatro, a exibição de um filme temático no dia vinte e cinco e, encerrando as atividades no dia vinte e seis, uma atividade de análise curricular associada a uma palestra direcionada especialmente para os estudantes de Economia. ATA N.4'
      },
      {
        tag: 'ensino',
        title: 'Definição da Composição da Comissão de Seminários',
        desc: 'Em 09 de abril de 1979, em reunião departamental, ficou definida a nova composição da Comissão de Seminários do departamento. Para este período, os professores Eduardo Cadavid Garcia, Juraci Aureliano Teixeira e José Maria Alves foram formalmente designados para integrar a referida comissão.'
      },
      {
        tag: 'extensao',
        title: 'Aprovação de Novo Processo de Admissão e Nomeação do Professor Gualberto Silva',
        desc: 'Em 05 de junho de 1979, os professores do Departamento de Administração e Economia reuniram-se para deliberar sobre novos processos de admissão docente. Na ocasião, foi realizada a leitura e a aprovação por unanimidade do relatório da comissão de seleção de candidatos ao magistério do DAE/UFV/79, resultando na aprovação e nomeação do Professor Gualberto Ferreira da Silva.'
      },
      {
        tag: 'extensao',
        title: 'Professores Evaldo Barbosa e José Maria Assumem as Coordenações do DAE',
        desc: '25 de outubro de 1979 O departamento reuniu-se na sala de reuniões do Departamento de Engenharia Florestal e o presidente comunicou formalmente as novas nomeações e designações de liderança para os cursos de graduação. Conforme anunciado, os professores Evaldo Guimarães Barbosa e José Maria Alves da Silva foram oficialmente nomeados para assumir a Coordenação do Curso de Administração e a Coordenação do Curso de Economia, respectivamente. Após o anúncio, ambos os coordenadores fizeram uso da palavra para expor as diretrizes dos trabalhos que pretendiam desenvolver nas suas respectivas coordenações.'
      },
      {
        tag: 'ensino',
        title: 'DAE Aprova Indicações de Nomes para Câmaras Curriculares de Novos Cursos ',
        desc: '28 de novembro de 1979 Nesta data, os professores do Departamento de Administração e Economia realizaram uma reunião na sala de reuniões do Departamento de Economia Doméstica, sob a presidência do Professor Tancredo Almada Cruz. Durante os trabalhos, os docentes apresentaram as indicações de nomes para compor as listas tríplices voltadas às Câmaras Curriculares de novos cursos, especificamente os cursos de Educação Física e de Medicina Veterinária.'
      },
      {
        tag: 'reconhecimento',
        title: 'Prof. João Adamor da UFV Recebe Menção Honrosa em Concurso Nacional',
        desc: 'Acontecimento meritório para a UFV e o DAE foi a conquista pelo Prof. João Adamor Dias Neves do DAE da Menção Honrosa do III Concurso Nacional de Monografia sobre Administração para o Desenvolvimento, promovido pela Secretaria de Modernização e Reforma Administrativa, pertencente à Secretaria de Planejamento da Presidência da República. O referido Professor concorreu com o trabalho intitulado Avaliação de Desempenho de Professores e Técnicos da Universidade Federal de Viçosa. (n.564)'
      },

      {
        tag: 'gestao',
        title: 'UFV em Destaque: Menção Honrosa Nacional e Posse de Novos Diretores de Centro',
        desc: 'Também nesse ano foram nomeados pelo Ministro da Educação e Cultura e empossados pelo Reitor os novos Diretores dos CCA e do CCH os professores Renato Mário Del Giudice e Dilson Seabra Rocha. (n. 571).'
      },

      {
        tag: 'extensao',
        title: 'Acontecimentos Marcantes no DAE: Premiação, Novas Direções e Extensão em Marketing',
        desc: 'O DAE promoveu o Curso de Marketing Bancário dirigido a bancários e estudantes do curso de Administração de Empresas, ministrado por João Adamor Dias Neves, professor da disciplina Mercadologia. Participaram do curso, representantes dos Bancos do Brasil, Bradesco e Real, bem como pessoas de Ponte Nova, Raul Soares, Teixeiras e Viçosa. O objetivo do curso foi o de compreender e de utilizar os princípios básicos de Marketing de Serviços nas atividades bancárias com nova mentalidade em relação a técnicas e métodos tecnológicos. (n. 578, n. 582).'
      },

      {
        tag: 'cultura',
        title: 'Ciência, Liderança e Arte: O Ano de Ouro do DAE e do Coral da UFV',
        desc: 'O professor João Adamor Dias Neves regeu o Coral, abrilhantando as comemorações do 1º aniversário do Coral da UFV. (n. 579). E, posteriormente, o Coral se apresentou, a convite do Coral Monlevade, no município de João Monlevade, que comemorou os 16 anos do Coral de Monlevade e da Federação Mineira de Conjuntos Corais (n. 581).'
      },

      {
        tag: 'extensao',
        title: 'O Ano de 1979 no DAE: O Marco da 1ª Semana do Administrador e a Consolidação da UFV',
        desc: 'Evento histórico acadêmico ocorreu em 1979 quando o DAE realizou a 1ª Semana do Administrador. Tendo como tema O Papel do Administrador e como palestrantes João Gomes Filho (Presidente do Conselho Regional de Técnicos em Administração de Empresas de Minas Gerais) e Carlos Alberto Boschi (Presidente do Sindicato dos Técnicos em Administração de Empresas de Minas Gerais). A palestra "O Processo de Desenvolvimento de Administração no Brasil" foi proferida por Rubens A. Barbosa Filho da Secretaria Nacional de Planejamento Agrícola, e, Bianor Scelza Cavalcanti (Fundação Getúlio Vargas) abordou o tema Desenvolvimento Organizacional. Pela Universidade Federal de Minas Gerais o Prof. Maurício Roberto Vieira contemplou a plateia com a palestra Pesquisa Operacional do ponto de vista do Administrador. Dilson de Souza Camargo e Paulo Maia, ambos da Fiat Automóveis, falaram sobre Relações Industriais. (n.582).'
      },

      {
        tag: 'extensao',
        title: 'A Consolidação da Administração na UFV em 1979: Protagonismo Nacional, Cultura e Ensino',
        desc: 'O professor Evaldo Guimarães Barbosa, do Departamento de Administração e Economia da Universidade Federal de Viçosa (UFV) participou do I Ciclo de Estudos referente ao Ensino das Ciências Administrativas, em Belo Horizonte, tendo como um dos objetivos dimensionar e caracterizar adequadamente os papéis dos técnicos em Administração. O evento foi promovido pelo MEC, por intermédio da Delegacia Regional de Minas Gerais (DR/4). O Ciclo de Estudos reuniu personalidades como a do secretário do Ensino Superior do MEC, Guilherme Maurício Souza Marcos de la Penha; Alysson Darowish Mitraud, secretário de Apoio do MEC; Adolfo Neves Martins da Costa, diretor-presidente da Companhia de Empreendimentos Gerais; Belmiro Siqueira, assessor da Fundação Escola de Serviço Público do Estado do Rio de Janeiro; e Antônio Sérgio de Medeiros Chaves, secretário adjunto da Administração do Estado de Minas Gerais. (23 de agosto de 1979 N.° 595)'
      },

      {
        tag: 'extensao',
        title: 'O Pioneirismo da Administração na UFV em 1979: Liderança no Ensino, Gestão e Cultura',
        desc: 'Com o objetivo de debater problemas ligados ao ensino de Administração de Empresa, em Minas, estiveram participando do I Ciclo de Estudos de Administração, o diretor do Centro de Ciências Humanas, Letras e Artes da Universidade Federal de Viçosa (UFV), professor Dilson Seabra Rocha, e os professores João Adamor Dias Neves e Evaldo Guimarães Barbosa, do Departamento de Administração e Economia. O Ciclo de Estudos contou com a participação de empresários, professores, diretores e representantes da categoria profissional, que procuraram apresentar, durante a sua realização, subsídios adaptáveis à melhoria do ensino das Ciências Administrativas. (30 de agosto de 1979 N.° 596)'
      },

      {
        tag: 'extensao',
        title: 'O Pioneirismo das Ciências Sociais Aplicadas na UFV em 1979: Administração, Economia e Cultura',
        desc: 'I Semana do Economista foi encerrada com uma palestra sobre Profissão do Economista e o Ensino de Economia no Brasil, feita pelo professor Bernardo Kipmis, representante do professor Paulo César Timm, da Universidade de Brasília. Durante a semana foram abordados temas como: Quadro Geral do Processo de Industrialização Recente no Brasil, Atual Política Econômica do Governo, Inflação e Índice do Custo de Vida, Capital Estrangeiro e Crescimento Econômico e, encerrando, Profissão do Economista e o Ensino de Economia no Brasil. A semana foi muito prestigiada. (23 de agosto de 1979 N.° 595).'
      },
    ],
    photos: [
      { url: '/1979 “1º aniversário do Coral da UFV.”.webp', caption: '1º aniversário do Coral da UFV.' },
      { url: '/1978 “Direção do CCH”.avif', caption: 'Direção do CCH.' },
      { url: '/1979 “Cursos Técnicos”.webp', caption: 'Cursos Técnicos' },
      { url: '/1979 “I Semana do Administrador”.webp', caption: 'I Semana do Administrador' },
      { url: '/1979 “I Semana do Economista”.avif', caption: 'I Semana do Economista' },
      { url: '/1979 “Novos Diretores”.webp', caption: 'Novos Diretores' },
      { url: '/1979 “O professor João Adamor Dias Neves recebeu Menção Honrosa”.webp', caption: 'O professor João Adamor Dias Neves recebeu Menção Honrosa' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/1979-ufv-informa'
  },
  1980: {
    events: [
      {
        tag: 'extensao',
        title: 'DAE Celebra Sucesso de Encontros de Aproximação com Estudantes',
        desc: '03 de outubro de 1980 Em reunião departamental realizada na sala de reuniões do Departamento de Engenharia Florestal, sob a presidência do Professor Eloy Alves Filho, a chefia informou sobre o andamento e o impacto positivo das reuniões celebradas conjuntamente com os estudantes dos cursos de Administração de Empresas e de Ciências Econômicas. O presidente ressaltou que esses encontros comemorativos e de aproximação foram muito positivos para estreitar o diálogo e promover uma maior integração entre o departamento e o corpo discente.'
      },

      {
        tag: 'ensino',
        title: 'Inovação e Simulação',
        desc: 'Realização do "Executivo Game", seminário inovador com jogos de empresas e computadores, coordenado pela Profa. Maria Elena Barbassa.'
      },

      {
        tag: 'extensao',
        title: 'Extensão e Formação',
        desc: 'Alcance regional do Executivo Game em Visconde do Rio Branco e palestras sobre o ensino de Administração no Brasil.'
      },

      {
        tag: 'reconhecimento',
        title: 'Homenagens',
        desc: 'Homenagem de formatura aos professores Jacinto Luiz da Silva e João Adamor.'
      },

      {
        tag: 'extensao',
        title: 'Primeiras atividades de extensão comunitária',
        desc: 'O DAD organiza as primeiras atividades de extensão voltadas a pequenas empresas e produtores rurais.'
      },
    ],
    photos: [],
    articleUrl: 'https://atom.ufv.br/index.php/1980-ufv-informa'
  },
  1981: {
    events: [
      {
        tag: 'extensao',
        title: 'DAE e Conselho de Extensão Promovem Curso Básico de Vendas com Especialista da SIAMAR',
        desc: 'O DAE e o Conselho de Extensão promoveram nos dias 26 e 27 de março o Curso Básico de Vendas, ministrado pelo Prof. Nicolau Martino Netto, diretor presidente da SIAMAR – Serviço Interamericano de Marketing Imp. Exp. Ltda e ex-gerente de Propaganda e Marketing da Union Carbide do Brasil e da Cia. Swift do Brasil. O Curso teve a participação de empresários, executivos, vendedores de Viçosa, de Visconde de Rio Branco e de outras cidades, e de alunos que cursaram ou que estavam cursando a disciplina ADE 220 (Mercadologia). Foram 200 participantes.'
      },
      {
        tag: 'extensao',
        title: 'Planejamento da II Semana do Administrador e Encontros sobre Administração Universitária ',
        desc: '13 de maio de 1981 Durante este período, o Departamento de Administração e Economia deu andamento ao planejamento de suas atividades de extensão com a organização e definição do calendário para a realização da II Semana do Administrador, buscando uma data estratégica com menor concentração de avaliações para os estudantes. Além disso, o corpo docente articulou debates institucionais e de integração acadêmica ao planejar a promoção dos Encontros sobre Administração Universitária, iniciativa voltada para o aperfeiçoamento da gestão e do ensino na área.'
      },
      {
        tag: 'ensino',
        title: 'DAE Aprova Novo Curso Intensivo e Nomeia Professor Gualberto para a AGRIVISA ',
        desc: '19 de maio de 1981 Nesta data, reuniu-se o Colegiado do Departamento de Administração e Economia (DAE) sob a presidência do Professor Eloy Alves Filho. Na ocasião, a Comissão de Ensino emitiu parecer favorável, que foi colocado em votação e aprovado com vinte votos a favor, ratificando a criação de um novo curso intensivo e a implantação da disciplina com código ADE 360. Além disso, o departamento celebrou um acordo de cooperação técnica com a FUNARBE para prestar colaboração na elaboração do estatuto da AGRIVISA, com a nomeação do Professor Gualberto para atuar na diretoria executiva da referida usina experimental de álcool.'
      },
      {
        tag: 'ensino',
        title: 'Convênio DAE/FUNARBE: Recursos para Biblioteca e Contratação de Docentes',
        desc: 'Em 05 de junho de 1981, no Auditório da Engenharia Florestal, o chefe do departamento informou sobre um importante convênio firmado com a Companhia Canavieira de Mineração, via FUNARBE. O DAE recebeu dotação de duzentos mil cruzeiros para novos livros na biblioteca.'
      },
      {
        tag: 'extensao',
        title: 'Composição da Lista Tríplice para a Chefia do DAE ',
        desc: '10 de agosto de 1981 No dia dez de agosto de mil novecentos e oitenta e um, às dezesseis horas, na sala cento e oito do Departamento de Engenharia Florestal, os professores do Departamento de Administração e Economia reuniram-se sob a presidência do Professor Eloy Alves Filho para deliberar sobre a indicação de nomes para a Chefia do Departamento, motivada pela futura saída do então presidente para o exterior. Após a rejeição majoritária de uma proposta que visava delegar a escolha da chefia diretamente à Diretoria do Centro, a assembleia realizou quatro escrutínios para definir a composição e a ordem de preferência dos docentes. O processo resultou na formação de uma lista tríplice oficial para a liderança do departamento, constituída em primeiro lugar pelo Professor Gilson Faria Potsch Magalhães, com quatorze votos, seguido pelo Professor José Maria Alves da Silva, com oito votos, e pelo Professor Juraci Aureliano Teixeira, com cinco votos.'
      },
      {
        tag: 'extensao',
        title: 'Projeto de Planejamento Participativo em Gouveia e Expansão de Cursos de Extensão da UFV ',
        desc: 'Setembro de 1981 O Departamento de Administração e Economia consolidou uma iniciativa de inserção e assessoria comunitária por meio do desenvolvimento de um projeto pioneiro de planejamento participativo e levantamento de demandas locais no município de Gouveia, no Estado de Minas Gerais. Esta atividade de integração acadêmica e social contou com a mobilização de estudantes dos cursos de Administração e de Ciências Econômicas da Universidade Federal de Viçosa (UFV). Adicionalmente, a partir de um diagnóstico realizado junto à municipalidade de Altamira e ao SENAC, o departamento estruturou e planejou a oferta futura de novos cursos de extensão voltados à capacitação profissional, abrangendo áreas como Gerência de Vendas, Análise, Interpretação de Balanço, Introdução à Contabilidade, Administração de Compras, Administração de Material, Organização de Empresas e Organização e Métodos.'
      },
      {
        tag: 'ensino',
        title: 'Eleição da Nova Coordenação de Estudo de Problemas Brasileiros',
        desc: '18 de novembro de 1981 Reunidos na sala dois do Departamento de Engenharia Florestal, sob a presidência do Professor Gilson Faria Potsch Magalhães, foi informada a necessidade e o planejamento para a contratação de novos docentes para compor o corpo técnico da instituição. A medida visa atender às demandas letivas e dar suporte às exigências das atividades de ensino do departamento, formalizando a solicitação para a vinda de três novos professores para o Departamento de Administração e Economia (DAE) e de um professor específico para a área de Estudo de Problemas Brasileiros.'
      },
      {
        tag: 'parceria',
        title: 'DAE e IMAM Firmam Convênio para Impulsionar a Administração Municipal em Minas Gerais',
        desc: 'O DAE e o Instituto Mineiro de Assistência aos Municípios-IMAM, da Secretaria de Estado do Interior e Justiça de Minas Gerais, assinam convênio para desenvolver pesquisa, ensino e extensão na área de Administração Municipal. Já em atividade pioneira de extensão, com apoio do Programa Gilberto Melo esteve no município de Canaã, realizando o Diagnóstico da Prefeitura Municipal de Canaã, detectando as atividades prioritárias a serem realizadas por alunos e professores dos Cursos de Administração de Empresas e de Ciências Econômicas. (19 de Março de 1981 Nº 677).'
      },

      {
        tag: 'extensao',
        title: 'II Semana do Administrador Reúne Grandes Nomes do Cenário Nacional para Debater o Panorama da Área',
        desc: 'Em comemoração a II Semana do Administrador o DAE promoveu o evento com o tema “Panorama Atual da Administração no Brasil”, com participação de 300 autoridades e empresários de Viçosa e região, professores e alunos. Foram ministradas várias palestras, tendo como palestrantes Agrícola de Souza Bethlem, Professor do Mestrado de Administração da COPPE/COPPEAD que discorreu sobre o Panorama Atual da Administração no Brasil; Mário Leme Galvão e Luiz Torello falaram sobre a administração da empresa estatal da EMBRAER; Hélcio Guimarães discorreu sobre a Desburocratização e Administração; e o empresário Gabriel Donato de Andrade, da Construtora Andrade Gutierrez S. A. e da Cooperativa Agroflorestal Ltda. falou sobre a Administração da Empresa Privada Brasileira e o Cooperativismo; o Secretário de Administração do Estado de Minas Gerais, deputado José Machado Sobrinho abordou o tema na Administração Pública; o Presidente da FIAT Automóveis S.A. Miguel Augusto Gonçalves de Souza falou sobre Administração da Empresa Multinacional na Atual Conjuntura Econômica; e o presidente do Conselho Federal de Técnicos de Administração, Guilherme Quintanilha de Almeida discorreu sobre a Administração na Média Empresa Brasileira e o papel do Técnico de Administração. (14 de Maio de 1981 Nº 686* p.3 Anexar foto da plateia da página 3). (28 de Maio de 1981 Nº 687).'
      },

      {
        tag: 'extensao',
        title: 'DAE Promove I Ciclo de Estudos Jurídicos com Grandes Nomes do Direito de Minas Gerais',
        desc: 'I Ciclo de Estudos Jurídicos da UFV foi realizado pelo DAE, contando com palestra sobre Organização Judiciária pelo Prof. Edézio Fernandes, Coordenador da Escola Judicial, desembargador do Tribunal de Justiça de Minas Gerais, Professor da Faculdade de Direito Milton Campos e assessorar jurídico da PLAMBEL; Ricardo Arnaldo Malheiros Fiuza. Presidente da OAB da seção de Minas Gerais, Prof. Aristóteles Atheniense que abordou o tema Reflexos da Economia na Legislação; sobre o tema Estatuto da Terra pelo Desembargador Paulo Viana Gonçalves da 4ª Vara Cível do Tribunal de Justiça de Minas Gerais; sobre o Sistema Tributário Nacional falou novamente o Prof. Edézio Fernandes Júnior. Outras palestras também foram ministradas com grande repercussão jurídica.'
      },

      {
        tag: 'extensao',
        title: 'Professores do DAE Integram Programação da I Semana do Contador em Ponte Nova', desc: 'A I Semana do Contador da Faculdade de Ponte Nova-FACCO teve a participação de professores do DAE, realizada em Ponte Nova com o tema Contabilidade-Apoio Central da Empresa, com o apoio Departamento de Ciências Contábeis e do Diretório Acadêmico, Também pronunciaram palestras na I Semana do Contador os professores Marcos Tanure Sanábio, Nanci Pereira de Vasconcelos e Eloy Gava, pró-reitor Acadêmico; o advogado Paulo Ivo Antonucci; e Hélio Gonçalves Moreira, pró-reitor de Assuntos Comunitários.'
      },

      {
        tag: 'extensao',
        title: 'DAE e Programa Gilberto Melo Promovem Curso Pioneiro de Contabilidade Pública Municipal',
        desc: 'O DAE/Programa Gilberto Melo promove Curso para Auxiliares de Contabilidade. Com ênfase no enfoque prático e no aproveitamento da realidade apresentada por participante, foi realizado o Curso de Atualização de Contabilidade Pública Municipal para Auxiliares de Contabilidade, reunindo representantes de várias cidades da microrregião de Viçosa (foto). O curso é pioneiro na região e, segundo seu coordenador, o professor Marcos Tanure Sanábio, do Departamento de Administração e Economia, visa a integrar a Universidade com as comunidades que a cercam. Os tópicos desenvolvidos durante as 16 horas/aula do curso foram: Classificação de receitas e despesas públicas; Exercícios de classificação de receita; Exercícios de classificação de despesas; Elaboração de notas de empenho e Elaboração de balancetes. A promoção é do DAE, Conselho de Extensão e do Programa Gilberto Melo da UFV. A solenidade de abertura do curso foi feita pelo presidente do Conselho de Extensão, Antônio Luiz de Lima, com a presença do coordenador do programa Gilberto Melo, Wagner Fernandes; do técnico do DAE, economista Carlos Alberto Freire Resende e das estagiárias que formam a equipe envolvida na promoção: Eliana Yassuko Hashimoto, Ana Maria Assunção, Núbia Serpa Dias e Maria Emília Rodrigues, todas do DAE.'
      },

      {
        tag: 'gestao',
        title: 'Professor Gilson Faria Potsch Magalhães Assume a Chefia do DAE',
        desc: 'Tomou posse como chefe do Departamento de Administração e Economia o Prof. Gilson Faria Potsch Magalhães.'
      },

      {
        tag: 'extensao',
        title: 'Alunos de Administração da UFV Realizam Visita Técnica à Sadia em Belo Horizonte',
        desc: 'Visita de Estudos à Sadia Comercial Ltda.- Os alunos do curso de Administração de Empresas do Departamento de Administração e Economia do Centro de Ciências Humanas, Letras e Artes da Universidade Federal de Viçosa realizaram, no dia 29 de outubro, uma visita de estudos à empresa Sadia Comercial Ltda., em Belo Horizonte, com o objetivo de conhecer a estrutura e a organização de vendas dos produtos Sadia. Além de proporcionar aos alunos conhecimentos sobre aspectos práticos de administração e vendas, a visita trouxe outros benefícios, como a solicitação, por parte do gerente-geral da empresa, para que lhe sejam enviados currículos dos formandos em Administração de Empresas, o que pode representará um próspero mercado de trabalho. Os visitantes foram acompanhados pelo professor João Adamor Dias Neves, do Departamento de Administração e Economia.'
      },

      {
        tag: 'extensao',
        title: 'DAE Conclui Curso de Marketing Básico para Empresários e Acadêmicos de Ponte Nova',
        desc: 'Curso de Marketing Básico - DAE Terminou, dia 1.º do corrente, o Curso Marketing Básico, oferecido pelo Departamento de Administração e Economia del Centro de Ciencias Humanas, Letras e Artes da Universidade Federal de Viçosa aos alunos e professores da Faculdade de Ciências Contábeis de Ponte Nova (FACCO) e para empresários daquela cidade. O curso esteve a cargo dos professores João Adamor Dias Neves (coordenador) e José Edson Lara e constou de 30 horas/ aula.'
      },
    ],
    photos: [],
    articleUrl: 'https://atom.ufv.br/index.php/1981-ufv-informa'
  },
  1982: {
    events: [
      {
        tag: 'reconhecimento',
        title: 'Chefe de Gabinete da UFV recebe Homenagem e Ministra Aula Inaugural na FACCO',
        desc: 'Chefe de gabinete é homenageado em Assessoria de Assuntos Culturais Ponte Nova durante aula inaugural divulga a programação de março O chefe de gabinete do reitor da Universidade Federal de Viçosa, advogado Carlos Roberto Ramos, pronunciou, ontem, em Ponte Nova, a aula inaugural da Faculdade de Ciências Contábeis (FACCO), tendo abordado o tema «Psicotrópicos», falando dos graves problemas provocados por seu uso na sociedade moderna (foto). Durante a solenidade. foi agraciado com uma placa de prata em reconhecimento pelos relevantes serviços prestados, oferecida pela Faculdade e pelo Diretório Académico da FACCO, a ele entregue por sua esposa, D. Maria José Carneiro Ramos. Estiveram presentes os alunos do estabelecimento e representantes da comunidade. Na ocasião, o conferencista foi saudado pelo presidente do Diretório Acadêmico, Leonel del Rey de Melo e apresentado pelo da Faculdade, professor Hélcio Totini, que destacou as funções por ele exercidas naquela Faculdade: Professor de Direito Tributário, Estudo de Problemas Brasileiros, Introdução à Ciència do Direito desde 1975 até 1979, sendo também, diretor do Departamento de Sociologia e Política, em 1976 е chefe do Departamento de Ciências Econômicas em 1977. A mesa dos trabalhos foi formada pelo presidente da Associação Comercial de Ponte Nova e da Fundação Pio Penna, Pio Gonçalves Penna; pela diretora da FACCO, professora Maria Imaculada Alves M. Ferreira; pelo prefeito municipal de Ponte Nova, Antônio Bartolomeu Barbosa; pelo vice-diretor da FACCO, professor Hélcio Тоtini; pela diretora do Colégio Pontenovense, Ilka Maria; e реlo presidente e por toda a diretoria do Diretório Académico'
      },

      {
        tag: 'ensino',
        title: 'Estudantes de Administração recebem treinamento prático no CENTREINAR.',
        desc: 'O oito de junho próximo, está sendo realizado, no Centro Nacional de Treinamento em Armazenagem (Centreinar), o Curso de Administração de Unidades Armazenadoras, para 18 formandos do Curso de Administração da Universidade Federal de Viçosa (UFV). A promoção é do Centreinar e da UFV, através do Departamento de Administração e Economia (DAE) do Centro de Ciências Humanas, Letras e Artes. A coordenação está a cargo do professor Roberto Proença Passarinho, do Centreinar, que também ministrou a primeira aula. O objetivo do curso é treinar os estudantes na área de armazenagem e facilitar estágios em unidades armazenadoras e entidades ligadas ao setor. A abertura do curso foi feita pelo professor Gilson Faria Potsch Magalhães, chefe do DAE (foto) e pelo coordenador técnico do Centreinar, Osmar Ribeiro. Também presente o professor José Edson Lara, do DAE. No dia 16 de março, os participantes receberam aula do professor Ronald Echangi, diretor do Centro para Investigaciones en Grãos y Semillas (CIGRAS). da Universidade de Costa Rica e representante da FAO, que ora visita a UFV, sobre Contaminação em Grãos e Sementes por Micotoxinas. Nas próximas semanas, os estudantes vão visitar, como aula prática, as instalações de uma unidade armazenadora, pertencente à Cia. de Armazéns e Silos do Estado de Minas Gerais (Casemg). As aulas do curso estão sendo ministradas todas às terças-feiras, de 14h às 16h e quintas-feiras, de 15h às 17h.'
      },

      {
        tag: 'extensao',
        title: 'A Consolidação das Ciências Sociais Aplicadas na UFV: Das Primeiras Semanas Acadêmicas à Projeção Nacional',
        desc: 'III Semana do Administrador – Foi realizada no dia 21 de maio a III Semana do Administrador, com o tema “Aspectos Atuais da Pequena е Média Empresa”, numa promoção do Departamento de Administração e Economia, com a participação de 350 professores, estudantes, empresários de Ponte Nova, Visconde de Rio Branco e Viçosa e profissionais da regiãol A sessão solene de abertura teve a apresentação do Coral da UFV e o professor Claude Machline, da EASP/Fundação Getúlio Vargas, fez palestra sobre «Produção na Pequena e Média Empresa». A III Semana do Administrador contou com os palestrantes Prof. José Carlos Coimbra da PUC/SP e chefe do Departamento de Promoção e Mercados da Carteira de Comércio Exterior da CACEX do Banco do Brasil, com a palestra «Pequena e Média Empresa no Comércio Exterior»; Prof. Luiz Gaj da USP, abordando “А Função de O&M (Organização e Métodos) no Processo de Modernização Administrativa”; Marcos Carvalho Elizeu coordenador do Programa de Exportação do CEAG-MG, com “Formação de Consórcios para Pequena e Média Empresa”; Luiz Inácio Tadeu Muraro, com “Planejamento na Pequena e Média Empresa», consultor da Arthur Anderson Auditoria; Inocêncio Magela de Oliveira, coordenador de Recursos Humanos e Treinamento Empresarial do CEAG-MG; Eles Rodrigues de Oliveira da Vale do Rio Doce e empresário com «Depoimento sobre uma Pequena Empresa»; enquanto o presidente da Nacional Leasing Arrendamento Mercantil S/A e diretor geral de Crédito do Banco Nacional S/A, Francisco Murilo Zerbini, e o diretor de Operações da Nacional Leasing Arrendamento Mercantil S/A, Amaro Rocha, falaram sobre “Crédito, Taxas de Juros, Leasing”.'
      },

      {
        tag: 'extensao',
        title: 'A Consolidação das Ciências Sociais Aplicadas na UFV: Da Teoria Acadêmica à Prática Industrial',
        desc: 'Estudantes de Administração e Economia visitaram, nos dias 15 e 20 de abril, as instalações da empresa Usinas Siderúrgicas de Minas Gerais (Usiminas), no município de Ipatinga-MG. O objetivo da visita foi proporcionar aos alunos um contato direto com os parques fabris de uma grande indústria, permitindo o conhecimento dos fluxos de produção, bem como da natureza dos serviços auxiliares na produção de aço. Outra finalidade da viagem foi observar a estrutura ambiental interna e externa de um grande projeto industrial, como a Usiminas. Além de percorrer as várias unidades da Usiminas, os universitários assistiram a раlestra do engenheiro Sebastião Araújo Silveira, da Divisão de Treinamento de Pessoal, sobre "A Filosofia de Administração da Usiminas”. Também foram acertados os detalhes relativos à colocação de estagiários da UFV naquela indústria siderúrgica mineira.'
      },

      {
        tag: 'extensao',
        title: 'A Consolidação das Ciências Sociais Aplicadas na UFV (1979-1982): Da Pesquisa Premiada à Prática Industrial',
        desc: 'O Departamento de Administração e Economia promoveu o Seminário «Avaliação de Desempenho”, ministrado pelo professor João Adamor Dias Neves, com participação de  empresários e/ou pessoas que atuam na área de Recursos Humanos, em Viçosa e região, e, ainda, alunos que cursam Administração, a partir do 6° período. (20 de Maio de 1982 Nº 738).'
      },

      {
        tag: 'ensino',
        title: 'A Consolidação das Ciências Sociais Aplicadas na UFV: Desenvolvimento, Direito Agrário e Extensão Regional',
        desc: 'Departamento de Administração e Economia realizou o I Ciclo de Estudos sobre Direito Agrário, com o objetivo de analisar a questão agrária brasileira, tendo em vista a postura jurídica frente à distribuição e fixação do homem à terra e o significado político, econômico e social da existência do latifúndio improdutivo na esfera agrária vigente. Na oportunidade, o Coral da UFV apresentou várias canções. Presentes, entre outros, o chefe do Departamento de Administração e Economia (DAE), professor Gilson Faria Potsch Magalhães; os presidentes da 42ª Subseção da Ordem dos Advogados do Brasil, Diogo Braga Filho; da Associação Comercial de Viçosa, Manoel Rodrigues da Silva Pontes; do Sindicato Rural, Hélio Henrique Fontes; da Cooperativa dos Produtores Rurais de Viçosa, Almiro Paradela; os professores do DAE, Valéria Aroeira Braga Duarte Ferreira, Amaury Machado Possas Araújo e Maria Elena Barbassa; e a representante dos alunos, acadêmica Sueli Leite. Os conferencistas foram os professores Fernando Pereira Sodero, da Universidade de São Paulo, que falou sobre "Uma Visão do Direito Agrário"; e Paulo Tominn Borges, da Universidade Federal de Goiás, abordando a “Usucapião”. Também palestraram os professores Igor Tenório, da Universidade de Brasília, falando do "Sistema Nacional Econômico Florestal"; e Octávio Junqueira de Mello Alvarenga, presidente da Sociedade Nacional da Agricultura, sobre "Justiça Agrária". A palestra de encerramento ficou a cargo do professor Marcos Afonso Borges, da Universidade Federal de Goiás, também com tema "Justiça Agrária".'
      },

      {
        tag: 'gestao',
        title: 'Posse de gestores',
        desc: 'Tomaram posse o Pró-Reitor Acadêmico e os novos diretores dos Centros de Ciências Agrárias, Ciências Exatas e Tecnológicas, Ciências Biológicas e da Saúde e Ciências Humanas, Letras e Artes (CCH) e os presidentes dos Conselhos de Graduação, Pós-Graduação, Pesquisa e Extensão tomaram posse, em solenidade realizada na Reitoria, sob a presidência do Reitor Antônio Fagundes de Sousa, presentes dirigentes, professores, servidores e convidados. O Prof. Juraci Aureliano Teixeira do DAE tomou posse no CCH. (12 de Agosto de 1982 Nº 750).'
      },

      {
        tag: 'extensao',
        title: 'III Semana do Economista debate os rumos e desafios da economia brasileira na UFV',
        desc: 'III Semana do Economista foi realizada, com o tema "Economia: uma Polêmica Atual", reunindo professores e estudantes da UFV, empresários e profissionais da região de Viçosa e cidades vizinhas. A initiative foi do Departamento de Administração e Economia (DAE) do Centro de Ciências Humanas, Letras e Artes da UFV, tendo como coordenadora a professorа Maria Elena Barbassa. Foram realizadas palestras diárias, abordando assuntos como inflação, empresas estatais e problemas atuais da economia brasileira. As palestras foram proferidas por Francisco de Paula Queiróz, assessor do Departamento de Promoção e Mercado do Banco do Brasil e ex-professor da PUC-SP, representante do diretor da Cacex, sobre "Economia Internacional", mostrando a atual crise mundial e as possibilidades do Brasil nos mercados externos, tendo ainda ressaltado o esforço do governo federal para o aumento das exportações de produtos primários e manufaturados; pelo diretor da Carteira de Comércio Exterior do Banco do Brasil, Benedito Fonseca Moreira, com o título "Economia Internacional"; pelo professor Lacyr Maffia de Oliveira, da Universidade Federal de Minas Gerais e presidente do Instituto de Pesquisas Econômicas e Administrativas, de Belo Horizonte, sobre "Custo de Vida e Inflação"; pelo professor Philippe Reichstul, da Universidade de São Paulo, sobre "Empresas Estatais"; pelo professor Fernando Antônio Rezende da Silva, da Pontificia Universidade Católica e Fundação Getúlio Vargas, do Rio de Janeiro, com o tema "A Centralização de Poderes na Federação Brasileira: Problemas Atuais e Sugestões de Reforma"; e, pelo José Teófilo de Oliveira, superintendente do Instituto de Planejamento/ Instituto de Planejamento Econômico e Social (IPLAN/ IPES), de Brasilia, sobre "Economia Brasileira: Evolução Recente".'
      },

      {
        tag: 'ensino',
        title: 'I Ciclo de Estudos Contábeis na UFV debate inovação e análise financeira',
        desc: 'I Ciclo de Estudos Contábeis aconteceu nos dias 6 e7 de outubro, destinado a professores, estudantes que tenham cursado Contabilidade Geral, empresários, contadores da região e funcionários da UFV. O I Ciclo contou com as seguintes palestras: "Demonstrações Financeiras: Um Enfoque Gerencial", pelo chefe da Divisão de Contabilidade Central da Petrobrás, Gilberto Amaro Rodrigues; "O Desempenho da Função Contábil e o Uso de Processamento Eletrônico de Dados", pelo chefe da Divisão de Contabilidade da Sede da Petrobrás, Eurico Ribeiro, ambos do Rio de Janeiro. O evento contou ainda com as palestras "Sociedades Coligadas, Controladoras e Controladas", "Equivalência Patrimonial" e "Consolidação das Demonstrações Financeiras". O Seminário de Análise Financeira foi conduzido pelos Profs. Adriel Rodrigues de Oliveira, José Clévio Dias Casali e Milton Rodrigues Natalino do Departamento de Administração e Economia, sendo abordados os tópicos: Patrimônio, Demonstrativos Financeiros de acordo com a Nova Lei das Sociedades Anónimas, Análises Horizontal e Vertical, Análise por Índices, Capital de Giro: Apuração e Projeção; Sistema Du pont de Análise e Fluxo de Caixa. O Seminário teve como objetivo de promover a reciclagem dos participantes no que tange à nomenclatura dos demonstrativos financeiros e iniciá-los em conceitos e técnicas de análise.'
      },

      {
        tag: 'extensao',
        title: 'Estudantes de Administração e Economia vivenciam a prática da gestão pública em Juiz de Fora',
        desc: 'Estudantes de Administração e Economia participam de debates em Juiz de Fora, visitando a Prefeitura e órgãos de administração municipal. O objetivo da visita foi proporcionar complementação da formação técnico-profissional, pelo contato com a prática administrativa, quando foi realizado um ciclo de palestras e debates sobre a administração de cidades de médio porte, com a participação do prefeito Francisco Antônio Mello Reis, do secretário municipal da Fazenda, Vicente Araújo dos Santos, e do ex-diretor da autarquia IPPLAN, José Márcio Paschoalino. Foram abordados aspectos administrativos e jurídicos, processos de limpeza urbana, раvimentação de ruas e urbanização, entre outros, além de contatos com presidiários albergados, que trabalham em obras do município. O grupo, formado por alunos da disciplina Administração Municipal (ADE 208), teve como acompanhante o professor Marcos Tanure Sanábio, do Departamento de Administração e Economia da UFV. Segundo ele, a disciplina ADE 208 visa a capacitar o aluno para atender o contexto da administração municipal. (14 de Outubro de 1982 Nº 759).'
      },

      {
        tag: 'extensao',
        title: 'UFV realiza II Ciclo de Estudos Jurídicos com a presença de renomados especialistas',
        desc: 'Com cinco palestras, seguidas de debates, e com a participação de professores e estudantes da Universidade Federal de Viçosa (UFV), advogados e empresários da região, o Departamento de Administração e Economia da UFV realizaram, durante três dias, o II Ciclo de Estudos Jurídicos. Estiveram presentes os professores Gilson Faria Potsch Magalhães, chefe do Departamento de Administração e Economia (DAE); Valéria Aroeira Braga Valéria Duarte Ferreira, coordenadorа do ciclo, e que fez a apresentação do conferencista da noite; Maria Elena Barbassa, presidente da Comissão de Extensão do DAE; e os Juízes de Direito, Júlio Henrique Prado Bueno, da comarca de Viçosa, e Wander Paulo Marotta Моreira, da comarca de Ponte Nova. O Professor Jair Leonardo Lopes, titular de Direito Penal da UFMG e ex-desembargador do Tribunal de Justiça, falou sobre Direito Penal Econômico; o professor Osmar Brina discorreu sobre Sociedade Anônima, e o professor Paulo Emílio Ribeiro de Vilhena abordou o tema Principio de Direito do Trabalho. Os professores José Alfredo Baracho e Paulo Neves de Carvalho falaram, respectivamente, sobre Federalismo e Administração Municipal Perspectiva. (21 de Outubro de 1982 Nº 760).'
      },

      {
        tag: 'extensao',
        title: 'FACCO e UFV promovem a II Semana do Contador em Ponte Nova',
        desc: 'A Faculdade de Ciências Contábeis de Ponte Nova (FACCO), com apoio da Universidade Federal de Viçosa (UFV) e colaboração da Fundação Arthur Bernardes (Funarbe), realizou  a II Semana do Contador com o tema "O Processo Econômico e suas Relações Contábeis e Sociais". Os trabalhos contaram com a palestra sobre "O Crédito Agrícola no Brasil", pelo diretor José Kleber Leite de Castro, da Carteira de Crédito Agrícola do Banco Central do Brasil. e os demais palestrantes foram o professor Antônio Luiz de Lima, do Departamento de Economia Rural da UFV, os professores José Edson Lara e Nanci Pereira de Vasconcelos do Departamento de Administração e Economia da UFV; e o engenheiro industrial Francisco José de Almeida Neto, da Cia. Industrial de Papel, do Rio de Janeiro.  (21 de Outubro de 1982 Nº 760).'
      },

      {
        tag: 'extensao',
        title: 'Alunos de Administração da UFV realizam visita técnica à Pink Alimentos em Belo Horizonte',
        desc: 'Os alunos do curso de Administração de Empresas realizaram, no dia 28 de outubro, uma visita à Pink Alimentos do Brasil Ltda., situada no Bairro Betânia, em Belo Horizonte, como parte das exigências práticas da disciplina "Administração de Vendas". Os visitantes percorreram as instalações da empresa, com ilustrações e demonstrações do processo de fabricação e embalagem de seus produtos. Na oportunidade, o gerente administrativo Adalberto Carneiro fez palestra, enfatizando os problemas de comercialização, os tipos de clientes, o sistema de distribuição e de preços e as estratégias mercadológicas adotadas para se firmar no mercado. Também disse das dificuldades da empresa, pois trabalha com capital próprio e é familiar. A viagem foi coordenada pelo professor João Adamor Dias Neves, responsável pela área mercadológica do Departamento de Administração e Economia da UFV.  (18 de Novembro de 1982 Nº 764).'
      }
    ],
    photos: [
      { url: '/Chefe de Gabinete da UFV recebe Homenagem.jpg', caption: 'Chefe de Gabinete da UFV recebe Homenagem.' },
      { url: '/1982 - Amaro Rocha.jpg', caption: 'Ο conferencista Amaro Rocha ao fazer sua palestra.' },
      { url: '/1982 - I Ciclo de Estudos Contábeis.jpg', caption: 'A professora Nanci Pereira de Vasconcelos, na mesa da solenidade, quando apresentava os conferencistas.' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/1921-ufv-informa'
  },
  1983: {
    events: [
      {
        tag: 'infraestrutura',
        title: 'Aquisição de Equipamentos de Vídeo e Expansão da Infraestrutura Acadêmica',
        desc: 'Março de 1983 O departamento expandiu e modernizou os recursos de sua infraestrutura física e de apoio acadêmico com a aquisição e apresentação de novos equipamentos de vídeo cassete. Essa incorporação tecnológica foi planejada e estruturada para dar suporte direto e dinamizar o desenvolvimento das futuras atividades e projetos de extensão da unidade de ensino.'
      },
      {
        tag: 'extensao',
        title: 'Instituição da Data Oficial de Aniversário do DAE',
        desc: 'Em 10 de maio de 1983, em decorrência de deliberações anteriores registradas em ata no Colegiado e por solicitação do chefe do departamento, ficou formalmente instituído o dia 10 de maio como a data oficial de aniversário e comemoração do DAE. A celebração foi estabelecida pelo fato de o departamento ter sido originalmente implantado e instalado nesta respectiva data.'
      },
      {
        tag: 'extensao',
        title: 'Colegiado Aprova Regimento Interno em Votação Secreta e Debate Questões Pedagógicas ',
        desc: '17 de maio de 1983 O Colegiado reuniu-se em sessão continuada para deliberar sobre a aprovação e a estruturação do Regimento Interno do DAE. Após amplas discussões de propostas de modificação, o texto final do regulamento foi colocado em votação secreta e integralmente aprovado, com data histórica fixada em 17 de maio de 1983. Na mesma reunião, a Professora Maria de Fátima, na condição de presidente da Comissão de Ensino, prestou esclarecimentos e chamou a atenção dos presentes para as problemáticas pedagógicas e a necessidade de engajamento do corpo docente nos trabalhos da comissão.'
      },
      {
        tag: 'extensao',
        title: 'Definição de Representantes junto à Câmara Curricular de Engenharia Civil',
        desc: 'Em julho de 1983, o colegiado realizou um processo de escolha interna para a definição de representantes do Departamento de Administração e Economia junto à Câmara Curricular do Curso de Engenharia Civil, estruturando a representação da área em outras unidades da instituição através da formação de uma lista tríplice de candidatos.'
      },
      {
        tag: 'extensao',
        title: 'Professores do DAE Ministram Curso de Administração Financeira em São Lourenço',
        desc: 'Professores do DAE ministram Curso de Administração Financeira em São Lourenço para micro, pequenas e médias empresas, com 40 participantes. A promoção foi da Educação & Cultura S/C- Educa e do Departamento de Administração e Economia, mediante convênio. Foram ministradas 24 horas/aula, pelos professores José Clévio Dias Casali e Milton Rodrigues Natalino, sob a coordenação da professora Nina Rosa da Silveira Cunha. O programa do curso incluiu as seguintes matérias: Noções de Contabilidade, pаtrimônio e Balanço, Análise de Balanço (horizontal e vertical e índices financeiros e econômicos), Orçamento de Caixa (entradas e saídas, controle de preço e controle de empréstimos e aplicações). T.R.I. (R.O.I. Taxa de Retorno de Investimento e Método "Du Pont" de Análise). (24 de Fevereiro de 1983 Nº 779).'
      },

      {
        tag: 'gestao',
        title: 'DAE Realiza I Seminário de Avaliação e Reprogramação',
        desc: 'DAE promoveu I Seminário de Avaliação e Reprogramação durante três dias, realizado no auditório do Centro Nacional de Treinamento em Armazenagem (Centreinar). O objetivo foi discutir, intensivamente, os atuais problemas do Departamento, em todos os seus aspectos, que será uma rotina no início de cada período letivo. O seminário constou de exposição de temas específicos do DAE, debate em grupo, reunião plenária e, no final, foi discutida a seleção das alternativas. As apresentações de textos foram: "O papel da Universidade", pela professora Lenita Maria Turchi Pacheco. "O Ensino e a profissão do Administrador", pelo professor José Edson Lara, e "О Ensino e a profissão do Economista", pelo professor Alfredo Lopes da Silva Neto. А exposição da Comissão de Ensino foi feita pelo professor José Maria Alves da Silva, da Comissão de Pesquisa, pelo professor Orlando Monteiro da Silva, e da Comissão de Extensão, pela professora Маria Elena Barbassa. A última exposição foi do professor Gilson Faria Potsch Magalhães, chefe do DAE, que discorreu sobre a administration do seu Departamento. (03 de Março de 1983 Nº 780)'
      },

      {
        tag: 'extensao',
        title: 'Professores do DAE Participam de Seminário da IBM no Rio de Janeiro',
        desc: 'No período de seis a oito do corrente, foi realizado, no Rio de Janeiro, o Seminário de Planejamento e Controle da Produção para Docentes Universitários, no Centro Educacional Residencial da Gávea, sob o patrocínio da IBM do Brasil - Indústria, Máquinas e Serviços Ltda. O objetivo da promoção foi proporcionar uma reciclagem na área de Planejamento е Controle da Produção, mediante a aplicação do Conceito COPICS (modelo para implantar sistemas na indústria), e, ainda, estimular o entrosamento entre docentes de várias universidades, nas áreas de Administração da Produção e Engenharia Industrial. Participaram do seminário 20 professores, e a Universidade Federal de Viçosa foi representada pelos professores Nina Rosa da Silveira Cunha e José Edson Lara, ambos do Departamento de Administração e Economia. (14 de Àbril de 1983 Nº 786).'
      },

      {
        tag: 'extensao',
        title: 'Professor do DAE Ministra Treinamento para Servidores da Funarbe',
        desc: 'A Fundação Arthur Bernardes (Funarbe) promoveu, dia 21, no auditório do Centro Nacional de Treinamento em Armazenagem (Centreinar), um Curso de Treinamento Intensivo para seus servidores, ministrado pelo professor João Adamor Dias Neves, do DAE. O curso, primeiro de uma série, teve a presença de 35 servidores, além dos dirigentes da área comercial e da administração da Funarbe. Seu objetivo principal foi oferecer conhecimentos para a melhoria do atendimento aos usuários do supermercado. Os demais cursos, também com palestras e debates, foram dirigidos por professores do Departamento de Administração e Economia, com a participação inclusive de estudantes da UFV. Segundo o presidente da Funarbe, Afonso Sérgio Corrêa de Faria, o órgão está com nova diretriz, para maior integração com a UFV, cumprindo assim seus objetivos estatutários: dar apoio direto às atividades de Ensino, Pesquisa e Extensão. Atualmente, a Funarbe tem participado de alguns convênios com a UFV e a tendência é aumentar sua atuação nessas atividades, facilitando o entrosamento entre as duas instituições.'
      },

      {
        tag: 'ensino',
        title: 'IV Semana do Administrador Discute Pequenas e Médias Empresas',
        desc: 'Com uma apresentação musical, no auditório do Departamento de Engenharia Florestal, a cargo do Conservatório de Visconde do Rio Branco, o empresário Nicolau Martino debateu na IV Semana do Administrador o tema central "Administração na Pequena e Média Empresa". A IV Semana do Administrador teve como palestrantes o administrador de empresas Luiz Inácio Tadeu Muraro e o empresário José de Almeida Neto. Também durante a IV Semana foram apresentadas palestras sobre "Computadores: Panorama Nacional", por Luís Julião Braga, técnico da Central de Processamento de Dados da UFV e Paulo Bastos Tigre, do Instituto de Economia Industrial da UFRJ. Os demais palestrantes convidados foram: Alderino Vieira Ferraz, de Guarani-MG, que fez um "Depoimento de um empresário da Zona da Mata sobre sua experiência em consórcio para exportação"; Francisco José de Almeida Neto, de Ponte Nova- MG, sobre "Dificuldades da Pequena e Média Empresa no Interior"; e Nicolau Martino Netto, sobre "Aspectos de Treinamento de Pessoal em P.M.C.". Participaram dos trabalhos professores, estudantes, empresários de Viçosa e de cidades vizinhas e profissionais liberais.'
      },

      {
        tag: 'gestao',
        title: 'Professor Gilson Magalhães Assume a Chefia do DAE',
        desc: 'Reitor empossa os novos chefes de Departamentos da UFV e do Centro de Ciências Humanas, Letras e Artes: Gilson Faria Potsch MagaIhães, do Departamento de Administração e Economia (16 de Junho de 1983 Nº 795).'
      },

      {
        tag: 'extensao',
        title: 'Estudantes de Administração Realizam Visita Técnica em Congonhas',
        desc: 'Alunos do Curso de Administração de Empresas, que cursam a disciplina Administração de Pessoal I, realizaram viagem de estudos à Ferteco Mineração S/A, empresa de metalurgia, no município de Congonhas. O objetivo da visita foi conhecer práticas de pessoal, tais como recrutamento, seleção, treinamento, cargos e salários, benefícios, higiene e segurança do trabalho. Os serviços executados foram apresentados aos estudantes da UFV pelos chefes dos Departamentos Social, de Administração de Pessoal e de Segurança e Higiene do Trabalho, que fizeram uma rápida exposição de cada setor, durante mais de três horas. Em seguida, foram debatidos com os expositores diversos assuntos, sob a coordenação do professor da disciplina, João Adamor Dias Neves. Depois, os visitantes foram conhecer o sistema de pessoal da Prefeitura de Congonhas e suas práticas de pessoal. Foi interessante aos alunos constatar o que realmente está sendo feito em termos de administração de pessoal numa prefeitura e em uma empresa privada, com 1.400 empregados. Na oportunidade, a Ferteco colocou-se à disposição da UFV para novos contatos, incluindo a possibilidade de estágio para os estudantes do curso de Administração de Empresas.'
      },

      {
        tag: 'ensino',
        title: 'Curso no Centreinar Capacita Estudantes do DAE em Armazenagem',
        desc: 'No período de cinco de abril a 17 de junho, foi realizado, no Centro Nacional de Treinamento em Armazenagem (Centreinar), o Curso de Administração de Unidades Armazenadoras, com a participação de 24 estudantes de Administração e Economia. A realização do curso foi em virtude de um acordo entre o DAE e o Centreinar, com o objetivo de proporcionar aos alunos uma visão panorâmica dos aspectos econômicos e técnicos da armazenagem de produtos agrícolas, tornando-os capazes de exercer atividades administrativas em unidades armazenadoras. A coordenação foi do técnico Roberto Proença Passarinho, do Centreinar, e do professor José Edson Lara, do DAE.'
      },

      {
        tag: 'ensino',
        title: 'Imprensa Universitária Lança Apostila da Professora Nina Rosa',
        desc: 'Imprensa Universitária edita mais 8 apostilas para os estudantes de graduação. Dentre as apostilas foi editada "Administração e Esforço Motivacional", da prоfessora Nina Rosa da Silveira Cunha, do Departamento de Administração e Economia, com 27 páginas, a Cr$333,00. "Administração e Esforço Motivacional", da prоfessora Nina Rosa da Silveira Cunha, do Departamento de Administração e Economia, 27 páginas, Cr$333,00. Administração e Esforço Motivacional da Profa. Nina Rosa da Silveira Cunha – DAE. (04 de Agosto de 1983 Nº 802)'
      },

      {
        tag: 'extensao',
        title: 'DAE Promove Palestra Sobre o Novo Currículo de Economia',
        desc: 'DAE promove palestra sobre o novo currículo do curso de Economia. Esteve na Universidade Federal de Viçosa, no dia 19 de agosto, o ex-diretor da Capes, Cláudio de Moura Castro, atual secretário executivo do Conselho Nacional de Recursos Humanos do Ipea/Seplan. O objetivo de sua visita foi proferir uma palestra, a convite do DAE, sobre o tema «Concepção do Novo Currículo de Economia», com a presença de professores e estudantes dos cursos de Administração e Economia, os professores Gilson Faria Potsch Magalhães, chefe do DAE, o palestrante Cláudio de Moura Castro e Juraci Aureliano Teixeira, diretor do CCH da UFV. (1º Setembro de 1983 Nº 806)'
      },

      {
        tag: 'extensao',
        title: 'IV Semana do Economista Debate a Crise Econômica na UFV',
        desc: 'O tema da IV Semana do Economista, que foi realizada de três a sete de outubro, é "A Economia em Crise". A promoção é do Departamento de Administração e Economia e do Centro Acadêmico de Economia. Além de cinco palestras técnicas, lançamento de livro, debates, grupos de estudo e exibição de filmes, haverá outras atividades, programadas pelo Centro Acadêmico de Economia. A abertura da sessão foi feita pelo estudante Sebastião César, do Centro Acadêmico de economia, que apresentou o palestrante da noite. O primeiro palestrante foi o professor Paulo Márcio de Mello, da Universidade do Estado do Rio de Janeiro (UERJ), que discorreu sobre o "Papel do economista: sociedade e crise". Os demais convidados foram os professores Lauro Campos, da UnB; João Antônio de Paula, do Cedeplar-MG; Carlos Longo, da USP; e Luiz Flávio Rainho, da UFJF e Funalfa. Durante a Semana do Economista, foi lançado o livro "As lutas operárias e sindicais em São Bernardo", e realizadas atividades artísticas, exibição de filmes e debates de interesse dos estudantes. (22 de Setembro de 1983 Nº 809).'
      },

      {
        tag: 'extensao',
        title: 'DAE Promove Curso de Compras e Patrimônio para Servidores da UFV',
        desc: 'Com a participação de 26 servidores das Diretorias Financeira e de Material da Universidade Federal de Viçosa (UFV), foi realizado o curso Compras, Armazenamento e Patrimônio, promovido pelo DAE, Diretoria Financeira e Diretoria de Material. O objetivo foi proporcionar aos participantes reciclagem de conhecimentos e treinamento em sua área de atuação, com ênfase no intercâmbio entre os servidores das duas Diretorias e na intensificação da noção do conjunto que é a Administração de Mаterial. O curso foi ministrado pelo professor Marcos Tanure Sanábio, do DAE, que revelou ser esta a primeira vez que se toma iniciativa desse tipo na UFV. Foram usadas apostilas e métodos audiovisuais com o emprego do videocassete. O programa foi dividido em módulos em que se abordaram: Aspecto Legal das Compras, Aspectos Operacionais das Compras, Armazenamento, Controle de Estoque, Patrimônio e Sistemas de Materiais. (10 de Novembro de 1983 Nº 816)'
      },

      {
        tag: 'extensao',
        title: 'Alunos do DAE Organizam Palestra com Especialista da Alcan',
        desc: 'O gerente de Métodos da Alcan Alumínio do Brasil, Paulo Sá Grise (foto), fez, dia oito, palestra, abordando a "Produtividade Industrial", numa iniciativa dos acadêmicos Maria do C. Bartolomeu, Zélia A. M. Oliveira, Maria I. Feliciana, Afonso Rocha, Júlio C. Pena e Irene D. Alves, sob a coordenação do professor José Edson Lara, do Departamento de Administração e Economia, responsável pela área de Administração da Produção. De acordo com Paulo Sá Grise, a produtividade é "medida em que os esforços dos homens, realizados nas empresas (com trabalho, organization, planejamento, conflitos, decisões etc.), sejam os mais adequados à consecução dos objetivos" ou o "resultado da aplicação de conhecimento a recursos disponíveis para consecução dos objetivos da empresa". (24 de Novembro de 1983 Nº 818)'
      },
    ],
    photos: [
      { url: '/1983 “Os Novos Diretores ”.webp', caption: 'Novos Diretores' },
      { url: '/1983 - curso.jpg', caption: 'Os servidores da Funarbe' },
      { url: '/1983 - Antonio Fagundes.jpg', caption: '0 Reitor Antônio Fagundes de Sousa abre o I Curso Básico de Apicultura.' },
      { url: '/1983 - Silvio.jpg', caption: 'O professor Sílvio Galdino de Carvalho Lima, ao falar sobre o cooperativismo como instrumento de desenvolvimento rural.' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/1983-ufv-informa'
  },
  1984: {
    events: [
      {
        tag: 'ensino',
        title: 'Aprovação da Programação de ADE 188 para o 1º Semestre de 1984',
        desc: 'A Pró-Reitoria Acadêmica aprovou a programação de ADE 188 — Estudo de Problemas Brasileiros 1, para o primeiro semestre de 1984, sob a coordenação do professor Adolfo Egídio Reis, do Departamento de Administração e Economia. (21 de Fevereiro de 1984 Nº 883)'
      },

      {
        tag: 'pesquisa',
        title: 'Cálculo do Índice Mensal de Preços ao Consumidor em Viçosa pelo DAE',
        desc: 'O DAE vai calcular o índice mensal de preços ao consumidor em Viçosa, a taxa de elevação do custo de vida na cidade, obtido com o processamento dos preços de cada um dos itens da cesta básica. A pesquisa realiza-se com recursos do Conselho Nacional de Desenvolvimento e Tecnológico CNPq, sob a coordenação do Prof. Tancredo Almada Cruz. (03 de Àbril de 1984 Nº 889)  (25 de Àbril de 1984 Nº 892)'
      },

      {
        tag: 'extensao',
        title: 'Realização do Curso de Mercado de Capitais pelo DAE e Centro Acadêmico de Administração',
        desc: 'O DAE e o Centro Académico de Administração promoveram o treinamento de estudantes na Bolsa, com o Curso de Mercado de Capitais, com grande número de participantes. O curso é ministrado pelo economista Renato Côrtes Teixeira, da Bolsa de Valores do Rio de Janeiro. A Comissão de Extensão, formada pelos professores Valéria Aroeira Braga Duarte Ferreira, Carlos Alberto Freire Resende e Juarez de Magalhães Rodrigues, compuseram a mesa diretora da abertura do curso juntamente com a professora Maria Lúcia Simonini, Sérgio, presidente do Centro Acadêmico de Administração. Em seu programa, foi apresentado o Sistema Financeiro Nacional, o Mercado de Ações, Bolsa de Valores, O Investidor e a Bolsa Bolsa para Universitários'
      },

      {
        tag: 'extensao',
        title: 'Curso de Mercado de Capitais',
        desc: 'A convite do Departamento de Administração e Economia do Centro de Ciências Humanas, Letras e Artes da Universidade Federal de Viçosa (UFV), o economista Renato Côrtes Teixeira, da Bolsa de Valores do Rio de Janeiro, ministrou, entre os dias 6 e 10, o Curso de Mercado de Capitais para uma turma de 80 participantes, reunindo principalmente estudantes da área.Ministrado no Centro de Ensino de Extensão, o curso atendeu aos objetivos da Comissão de Extensão do Departamento e do Núcleo Educacional da Bolsa de Valores do Rio de Janeiro, no sentido de atrair as atenções do público universitário para as atividades do Mercado de Capitais e as opções que oferece como mercado de trabalho.'
      },
    ],
    photos: [],
    articleUrl: 'https://atom.ufv.br/index.php/1984-ufv-informa'
  },
  1985: {
    events: [
      {
        tag: 'extensao',
        title: 'Marco Comemorativo: Oitavo Ano de Fundação do DAE',
        desc: 'Em 10 de março de 1985, o Departamento de Administração e Economia (DAE) completou oficialmente oito anos de sua fundação e início das atividades acadêmicas. Em virtude desse marco, o Senhor Presidente lembrou os membros do Colegiado sobre a relevância da data e sugeriu a realização de um almoço integrado para o dia vinte e cinco de março do respectivo ano.'
      },
      {
        tag: 'extensao',
        title: 'DAE Recorre a Respaldo Jurídico para Contratar Professora Sílvia Toyoshima',
        desc: 'Em 25 de abril de 1985, durante sessão presidida pelo Professor Gilson Faria Potsch Magalhães, o departamento deliberou sobre a recomposição docente. Devido ao fim do contrato anterior da Professora Sílvia Harumi Toyoshima e vedações regimentais de recontratação na mesma área, o Colegiado analisou o parecer da Assessoria Jurídica e aprovou por unanimidade a nomeação da referida professora para uma nova área de ensino.'
      },
      {
        tag: 'pesquisa',
        title: 'Cursos de Reciclagem Docente e Implantação do Novo Currículo de Economia',
        desc: '18 de dezembro de 1985  A reunião do Colegiado do Departamento de Administração e Economia, realizada às dezoito horas e trinta minutos na sala número cento e dez do Departamento de Engenharia Florestal. Durante a sessão, foi abordada a implantação de um novo currículo para a área de economia, o que motivou o planejamento de futuros cursos de reciclagem direcionados aos professores da área para apoiá-los nessa transição. Essa iniciativa de reformulação e capacitação docente deverá contar com o suporte do CORECON e da Associação das Instituições de Graduação em Economia, entidade criada recentemente no congresso de Vitória, tendo a proposta recebido excelente receptividade por parte de todo o colegiado presente.'
      },
      {
        tag: 'pesquisa',
        title: 'Preços ao Consumidor em Viçosa Sobem 11,39% no Mês de Maio',
        desc: 'Administração e Economia do Centro de Ciências Humanas, Letras e Artes da Universidade Federal de Viçosa informou que, during o mês de maio, os preços ao consumidor em Viçosa subiram 11,39 por cento em média. De acordo com a análise dos dados coletados, este índice, superior ao de abril, deve-se principalmente aos reajustes de preços em função do novo salário-mínimo, já que em Viçosa a maior atividade econômica concentra-se no setor de serviços, no qual a mão de obra tem maior participação nos custos.O grupo que apresentou maior alta foi o das Despesas Pessoais, com 29,7 por cento, sendo que, dentro desse grupo, o item que apresentou maior crescimento foi o dos Serviços Pessoais (costureira, empregados domésticos, sapataria, barbearia, cabeleireiro e manicure), com 61,9 por cento.Outro grupo que também apresentou alta significativa foi o da Saúde e Cuidados Pessoais, com 19,9 por cento, onde se destaca o atendimento médico/dentário, com 15,6 por cento, serviços de hospital, com 75 por cento, e serviços de laboratório, com 100 por cento de aumento.Já o grupo da Alimentação não apresentou crescimento considerável, situando-se em 7,4 por cento. O grupo Vestuário teve um crescimento menor do que o do mês anterior, ficando em 10,5 por cento.'
      },

      {
        tag: 'gestao',
        title: 'Empossado o novo diretor administrativo-financeiro da Funarbe',
        desc: 'Em solenidade realizada na última segunda-feira, na Reitoria da Universidade Federal de Viçosa (UFV), o reitor Geraldo Martins Chaves empossou o novo diretor administrativo-financeiro da Fundação Arthur Bernardes (Funarbe), o professor José Clévio Dias Casali, do Departamento de Administração e Economia.Após as assinaturas do termo de posse, o reitor da UFV elogiou e agradeceu o trabalho do ex-diretor Carlos Roberto Vasconcelos Barros, ressaltando a importância das tarefas a serem desenvolvidas pelo professor José Clévio Dias Casali. Também salientou o papel de destaque da Funarbe na área de desenvolvimento regional. Durante o evento, o reitor Geraldo Martins Chaves realizou a entrega formal do ato de nomeação ao professor José Clévio.Ao agradecer a confiança da administration da UFV, o novo diretor da Funarbe manifestou seu empenho em trabalhar, com dedicação, para o crescimento das atividades da Fundação, que vem prestando excelentes serviços à comunidade e à região. Participaram da reunião dirigentes da UFV e da Funarbe, professores, servidores, gerentes de estabelecimentos bancários e outros convidados.'
      },

      {
        tag: 'gestao',
        title: 'Posse dos novos diretores dos Centros de Ciências da UFV',
        desc: 'No CCH, tomou posse o Prof. Gilson Faria Potsch Magalhães.'
      },

      {
        tag: 'reconhecimento',
        title: 'Professora da UFV defende tese com nota 10, distinção e louvor',
        desc: 'A professora Nanci Pereira de Vasconcelos (foto), do Departamento de Administração e Economia da Universidade Federal de Viçosa, defendeu, dia 1º último, sua tese de doutorado na Faculdade de Economia e Administração, obtendo a nota 10, com distinção e louvor.Participaram da banca examinadora os professores doutores Stephen Charles Kanitz (orientador da tese), Sérgio de Iudícibus, Josir Simeone Gomes, Eliseu Martins e Claudio Roberto Contador.Em seu trabalho, intitulado “Aspectos financeiros das empresas do Estado de São Paulo, de 1945 a 1982, e a Lei das Falências e Concordatas”, a professora Nanci Pereira de Vasconcelos analisa, sob o aspecto teórico, o ambiente contábil-financeiro e o desempenho das empresas industriais de São Paulo em 1945, que serviu de base para os preceitos legais que regem o instituto da falência.São formuladas propostas para a adequação da legislação ao novo ambiente estabelecido com o passar das décadas, assegurando a credores e devedores uma forma justa e economicamente eficiente na solução dos problemas, possibilitando às empresas privadas meios para desenvolverem suas atividades e promoverem sua reorganização administrativo-financeira.'
      },
    ],
    photos: [],
    articleUrl: 'https://atom.ufv.br/index.php/1988-ufv-informa'
  },
  1986: {
    events: [
      {
        tag: 'extensao',
        title: 'Criação da Semana do Empresário e Inauguração do Núcleo de Assistência',
        desc: 'Em junho de 1986, o DAE expandiu suas atividades ao aprovar a criação da Semana do Empresário e definir um curso de computação para o fim de maio. Em termos de infraestrutura, anunciou para agosto a inauguração do Núcleo de Assistência Integral à Pequena Empresa no DAE, planejado para ocorrer junto com o Encontro de Empresários da Zona da Mata.'
      },
      {
        tag: 'extensao',
        title: 'Planejamento para Integração com Atividades do Centro Acadêmico',
        desc: 'Em agosto de 1986, em uma reunião do colegiado, o corpo docente realizou o planejamento e a alteração dos horários das aulas convencionais, deliberando formalmente que as atividades letivas seriam suspensas a partir de determinado horário para permitir que os estudantes do departamento participassem de uma reunião promovida pelo Centro Acadêmico de Administração.'
      },
      {
        tag: 'extensao',
        title: 'Melhora na Imagem Institucional do DAE e Homenagem Coletiva',
        desc: '31 de outubro de 1986 Em reunião conduzida pelo Professor Tancredo Almada Cruz, a chefia informou aos presentes que a imagem do departamento perante a comunidade havia melhorado significativamente devido aos trabalhos realizados, gerando demandas de diversos órgãos. Na mesma oportunidade, foi anunciado que o chefe do departamento receberia uma homenagem da Associação Comercial de Viçosa, comemoração esta que ele declarou estender a toda a equipe do departamento.'
      },
      {
        tag: 'reconhecimento',
        title: 'Formatura de 1986: Registros Históricos do DAE',
        desc: 'Os formandos e seus homenageados, nas escadarias do Edifício Arthur da Silva Bernardes. Dos cursos do Departamento de Administração e Economia foram: Administração - professores Maria Elena Barbassa, Gualberto Ferreira da Silva e José Clévio Dias Casali; Ciências Econômicas - professoras Lenita Maria Turchi Pacheco e Juraci Aureliano Teixeira.'
      },

      {
        tag: 'extensao',
        title: 'DAE Lança Programa de Apoio para Novos Empresários',
        desc: 'O DAE tem programa para empresário em potencial Qualquer pessoa interessada em iniciar um empreendimento por conta própria poderá participar da reunião, onde será apresentado o Programa Novos Empresários, que tem o objetivo de atender o empresário em potencial, em qualquer setor de atividade, com atendimento individualizado aos que o solicitarem. A iniciativa é do Departamento de Administração e Economia, juntamente com o Centro de Apoio à Pequena e Média Empresa (CEAG) do Governo Estadual, e com o Centro Acadêmico de Administração. A ideia é dar oportunidade a quem pretenda montar um negócio por conta própria, proporcionando apoio gerencial, técnico e financeiro, com a interveniência do Banco de Desenvolvimento de Minas Gerais e Instituto de Desenvolvimento Industrial de Minas Gerais (INDI).'
      },

      {
        tag: 'extensao',
        title: 'Encontro do Programa Novos Empresários Reúne Autoridades e Futuros Empreendedores',
        desc: 'Com o objetivo de dar oportunidade os empresários em potencial em montar seus próprios negócios da região, proporcionando-lhes apoio gerencial, técnico financeiro, realizou-se, um encontro numeroso no qual público presente de tomar conhecimento Programa do Novos Empresários estiveram presentes representantes de diversos órgãos envolvidos no programa, autoridades e universitários. O programa vem tendo o Apoio do Centro de Pequena e Média Empresa (CEAG-MG), do Banco de Desenvolvimento do Estado Minas Gerais e pelo Instituto de Desenvolvimento Industrial (INDI), os quais contam com o apoio do Departamento de Administração e Economia. O encontro foi aberto pelo Vice-Reitor Cid Martins e a exposição sobre as características do programa ficou а cargo do diretor-executivo do CEAG.MG, Mauro Batista Santos Ferreira. Este especificou a sistemática a ser adotada por quem esteja pretendendo constituir uma empresa. Falaram ainda os representantes dos diversos órgãos presentes (BDMG, INDI, Cia. de Distritos Industriais e Fundação Centro Tecnológico de Minas Gerais CETEC), com esclarecimentos sobre as questões levantadas no debate que se seguiu à palestra. No dia seguinte, os interessados puderam apresentar suas propostas aos promotores do encontro, tendo sido anotados diversos projetos nos mais diversos setores, para implantação em Viçosa e na região. Os empresarios em potencial poderão beneficiar-se com as facilidades do programa, bastando, para isso, que procurem o Departamento de Administração e Economia.'
      },

      {
        tag: 'parceria',
        title: 'DAE e EPAMIG Reúnem-se para Planejar Desenvolvimento da Zona da Mata',
        desc: 'Realizou-se reunião entre professores do Departamento de Administração e Economia (DAE) e o chefe do Departamento de Estudos е Pesquisas da EPAMIG, para estabelecer propostas de trabalho conjunto entre as duas instituições, sobre a necessidade da elaboração de estudos para um novo programa de desenvolvimento da Zona da Mata mineira. Presentes, ainda, como representantes da EРАMIG, o chefe do Centro Regional de Pesquisa da Zona da Mata, Antônio de Pádua Nacif, o chefe adjunto del Centro, Paulo César Resende Fontes, e os pesquisadores Francisco Lopes Cançado Júnior e Glória Zélia Teixeira Caixeta.'
      },

      {
        tag: 'ensino',
        title: 'VII Semana do Administrador Debate os Reflexos da Reestruturação Econômica',
        desc: 'A VII Semana do Administrador, pelo Departamento e Administração e Economia e pelo Centro Acadêmico de Administração, tendo como tema central reflexos da os reestruturação econômica na Administração. Os serão prelecionistas foram a presidente do Conselho Regional Administração, Sônia Ferreira de Ferraz, e o presidente do Sindicato dos Administradores de Minas de Gerais, Wander Pimentel, que abordaram o aspecto legal da profissão e o mercado de trabalho e enfocando o mesmo assunto, Graccho Machado Pimentel, o presidente da Associação Brasileira de Administração. Falou também o Presidente da Wembley, sobre a experiência de sua empresa na abertura capital e do Decreto-Lei 2283/86, destacando a importância da participação do estudante e do profissional no setor do processo; e uma mesa redonda/debate sobre as mudanças econômicas e seus reflexos sobre a gestão empresarial, com a participa- diretor do Armarinho Santo Antônio Sinval Campos , Mendes; do diretor da empresa Móveis Itatiaia, Lincoln César Penna Costa, ambos de Ubá; e do presidente da Associação Comercial de Viçosa, Francisco Tadeu de Sena Fernandes. A abertura do evento foi presidida pelo professor NicoJino Taranto Fortes, chefe de Gabinete do Reitor e os professores da UFV Gilson Faria Potsch Magalhāes, diretor do Centro de Ciências Humanas, Letras e Artes; Antônio Luiz de Lima, presidente do Conselho de Extensão; Tancredo Almada Cruz, chefe do Departamento de Administração e Economia; Roberto de Carvalho Araújo, coordenador da Semana; o presidente da Associação Comercial е Industrial de Ubá, Norton Antônio Fagundes Reis; o presidente da ACV, Francisco Tadeu de Sena Fernandes; o presidente do Centro Acadêmico de Administração, Wanildo Silva Santos; e o vereador Sebastião José Barreto, presidente da Câmara Municipal de Ubá. O Coral da UFV, regido pelo maestro Rogério Moreira Campos, abrilhantou a solenidade de abertura, com diversos números musicais.'
      },

      {
        tag: 'extensao',
        title: 'DAE e CORECON Promovem Curso de Perícia Judicial para Economistas e Estudantes',
        desc: 'O DAE, Centro Acadêmico de Economia e Conselho Regional de Economia promoveram o Curso de Perícia Judicial com 50 vagas para economistas e estudantes de graduação no curso de Ciências Econômicas. O curso visa preparar os participantes para atuarem na área judicial e foi ministrado pelo economista Renato Arantes Meirelles, presidente da Comissão de Fiscalização е Ética Profissional e coordenador das delegacias regionais do Conselho Regional de Economia'
      },

      {
        tag: 'cultura',
        title: 'I "Show" do Administrador Integra Alunos e Professores da UFV',
        desc: '1986 – Numa promoção do Centro Acadêmico de Administração da UFV, foi realizado, o I "Show" do Administrador, com o objetivo de buscar maior integração entre alunos e professores do curso, que este ano comemora seu décimo aniversário de criação na UFV. O espetáculo terá diversas manifestações artísticas, como teatro, música, dança, poesia, desenho e pintura. A promoção, que tem como tema "А Cultura é fundamental em qualquer profissional", conta com o apoio da Divisão de Assuntos Culturais da Pró-Reitoria de Assuntos Comunitários da UFV. A entrada é franca. (15 de Maio de 1986 Nº 947)'
      },

      {
        tag: 'ensino',
        title: 'DAE e Centro Acadêmico Realizam Curso de Programação e Controle da Produção Industrial',
        desc: '1986 – O DAE e o Centro Acadêmico de Administração realizaram o Curso de Programação e Controle da Produção Industrial, com 30 horas-aula e trataram sobre temas diversos como gráficos de controle de qualidade, controle de qualidade na indústria de alimentos, problemas na área de produção, desenvolvimento operational do produto, programação da produção, produtividade e manutenção. O curso teve como temas a Prevenção de Acidentes do Trabalho na Indústria, que ficou a cargo do professor Sérgio Antônio Rohm, do Departamento Engenharia Civil da UFV; Gráficos de Controle de Qualidade, assunto exposto pelo professor Carlos Arthur Barbosa da Silva, do Departamento de Tecnologia de Alimentos; e Controle de Qualidade na Indústria de Alimentos, pelo professor Antônio Carlos Gomes de Souza, também do Departamento de Tecnologia de Alimentos. A programação foi encerrada pelo professor Ior Titton, da Fundação João Pinheiro, que abordou Problemas nas Áreas de Produção, Desenvolvimento Operacional de Produto, Programação da Produção e Produtividade e Manutenção. (15 de Maio de 1986 Nº 947) (29 de Maio de 1986 Nº 949)'
      },

      {
        tag: 'extensao',
        title: 'Presidente da Associação Brasileira de Administração Ministra Curso sobre Microempresa',
        desc: '1986 – O presidente da Associação Brasileira de Administração, Graccho Machado Maciel, será o instrutor do Curso sobre a Microempresa, a ser ministrada na Universidade Federal de Viçosa, numa promoção do Departamento de Administração e Economia, Centro Acâdêmico de Administração e Associação Brasileira de Administração. As inscrições poderão ser feitas diariamente, no Centro Acadêmico de Administração, com Joaquim Felício Júnior e Marco Aurélio Pereira de Almeida, representantes da Associação Brasileira de Administração. (21 de Maio de 1986 Nº 948) (29 de Maio de 1986 Nº 949) (05 de Junho de 1986 Nº 950)'
      },

      {
        tag: 'reconhecimento',
        title: 'Formandos de Administração e Ciências Econômicas Escolhem Homenageados',
        desc: '1986 – Os formandos de cada um dos cursos escolheram seus homenageados. São eles: Administração - professores Gualberto Ferreira da Silva, José Clévio Dias Casali e Maria Elena Barbassa; Ciências Econômicas - pais, colegas e professores que lutaram pela formação profissional e manifestaram grande interesse no avanço da democratização (especial) e os professores José Reinaldo Pinheiro Diniz e Newton Paulo Bueno (17 de Julho de 1986 Nº 956)'
      },

      {
        tag: 'fundacao',
        title: 'I Encontro de Empresários da Zona da Mata Inaugura o NAIPE',
        desc: '1986 – Na programação do I Encontro de Empresários da Zona da Mata foi inaugurado o Núcleo de Assistência Integral à Pequena Empresa (NAIPE). O NAIPE foi desenvolvido a partir de um convênio firmado entre a Universidade Federal de Viçosa (UFV), através de seu Departamento de Administração e Economia (DAE), com o Banco de Desenvolvimento do Estado de Minas Gerais (BDMG), o Instituto de Desenvolvimento Industrial de Minas Gerais (INDI) e o Centro de Apoio à Pequena e Média Empresa de Minas Gerais (CEAG-MG). O programa visa, fundamentalmente, promover o desenvolvimento financeiro e tecnológico das micro, pequenas e médias empresas da região. O Escritório do NAIPE localiza-se nas dependências do DAE/UFV e servirá para atendimento externo aos interessados no programa, que também conta com o apoio da Associação Comercial de Viçosa (ACV), uma das promotoras do I Encontro de Empresários da Zona da Mata. Juntamente com a ACV, a Federação das Associações Comerciais de Minas Gerais (FACEMG) e a Coordenadoria das Associações Comerciais da Microrregião também fazem parte da programação do encontro empresarial. (07 de Agosto de 1986 Nº 959)'
      },

      {
        tag: 'extensao',
        title: 'Solenidade Inaugural do Encontro de Empresários Redige Carta e Entrega Comendas',
        desc: '1986 – A solenidade inaugural foi aberta pelo Reitor Geraldo Martins Chaves, que passou a presidência da sessão ao empresário Lúcio Assunção, representante da presidência da Federação das Associações Comerciais del Estado de Minas Gerais (FACEMG). Ambos discorreram sobre o рapel da livre iniciativa e a importância do intercâmbio Empresa-Universidade, modernizando e otimizando o desempenho da atividade empresarial. Falaram também o presidente da Associação Comercial de Viçosa (ACV), Francisco Tadeu Sena Fernandes, e após, o Secretário de Estado da Indústria e Comércio, Francisco Guilherme Gonçalves, que abordou o tema: O Papel da Livre Initiative no Desenvolvimento Econômico, Social e Político da Zona da Mata, Luiz Antônio Caixeiro Stephan, presidente da Associação Comercial de Juiz de Fora e coordenador regional da FACEMG. A solenidade foi encerrada com o pronunciamento do secretário adjunto da Indústria e do Comércio de Minas Gerais, Paulo Sérgio Ribeiro da Silva, discorrendo sobre a atuação da Secretaria, especialmente quanto às empresas de pequeno e médio porte. Após o plenário dos Empresários e da Tribuna Livre, foi redigida a Carta dos Empresários da Zona da Mata e, a seguir, aconteceu a inauguração do Núcleo de Assistência Integral à Pequena Empresa (NAIPE), de acordo com o Convênio firmado entre a UFV, através do DAE, com o Banco de Desenvolvimento do Estado de Minas Gerais (BDMG), o Centro de Apoio à Pequena e Média Empresa de Minas Gerais (CEAG MG) e o Instituto de Desenvolvimento Industrial de Minas Gerais (INDI). A primeira parte do Encontro terminou com a colocação de uma corbelha de flores no busto de Arthur Bernardes, no saguão do Edifício Arthur da Silva Bernardes, na UFV. A segunda parte do I Encontro de Empresários da Zona da Mata contou com a Sessão Solene de Encerramento, na Churrascaria e Cabana Rodas, com a entrega da Comenda do Mérito Arthur Bernardes, aos seguintes agraciados: Vice-Reitor da UFV, professor Cid Martins Batista, José Bernardes Santana e Danilo de Castro. Após a homenagem ås Diretorias das novas Associações Comerciais da Microrregião e o jantar de confraternização, haverá um Baile Social no Viçosa Atlético Clube, encerrando o evento. (07 de Agosto de 1986 Nº 959) (14 de Agosto de 1986 Nº 960)'
      },

      {
        tag: 'gestao',
        title: 'Reitor da UFV Inaugura NAIPE e Autoridades Prestam Homenagem a Arthur Bernardes',
        desc: '1986 – O Reitor da UFV, professor Geraldo Martins Chaves, inaugurou, o Núcleo de Assistência Integral à Pequena Empresa (NAIPE), nas dependências do Departamento de Administração e Economia da UFV. O evento fez parte do I Encontro de Empresários da Zona da Mata. O NAIPE é fruto de um convênio assinado entre a UFV, através do DAE, e o Banco de Desenvolvimento de Minas Gerais (BDMG), o Centro de Apoio à Pequena e Média Empresa de Minas Gerais (CEAG-MG) e o Instituto de Desenvolvimento Industrial de Minas Gerais (INDI), atendendo aos interessados, nas instalações recém-inauguradas no DAE. О Reitor descerrou a placa de inaunguração do Núcleo juntamente com Jairo Teixeira, dirigente do BDMG, representando o presidente daquele banco, Sérgio Murta. Após o descerramento da placa, Jairo Teixeira enfatizou a importância do convénio assinado, ao mesmo tempo em que destacou um maior fomento ao ensino proporcionado pela UFV através, desse projeto. O dirigente do BDMG colocou o Banco «à disposição total da UFV, no momento em que se deseja fortalecer a integração do órgão com esta Universidade»., Em seguida, o Reitor congratulou-se com o DAE que, «numa hora muito feliz e própria, procurou o caminho do comprometimento com a comunidade, ampliando a sua atuação e dando-lhe condições de desenvolvimento. Reiterando que a Agricultura é pedra fundamental no crescimento do País, o Reitor da UFV acrescentou também que a Agricultura não está sozinha nessa responsabilidade e somente com trabalhos neste aspecto que alcançaremos força e êxito para soerguer nossa região, principalmente. Em seguida, as autoridades deslocaram-se para o saguão do Edifício Агthur da Silva Bernardes para prestarem uma homenagem ao filho mais ilustre de Viçosa. Na oportunidade, o Reitor solicitou que o senador Alfredo Campos e o deputado e ex-governador Rondon Pacheco colocassem a corbelha de flores no busto de Arthur da Silva Bernardes. Depois, foi a vez da Associação Comercial de Viçosa prestar a sua homenagem, cuja corbelha de flores foi depositada por Lúcio de Souza Assumpção- presidente em exercício da Federação das Associações Comerciais de Minas Gerais (FACEMG) - a pedido do presidente da ACV, Francisco Tadeu de Sena Fernandes. O advogado Tarcísio Gomide falou em nome da UFV, saudando os presentes, destacando em seguida a inteligência, o patriotismo, a justiça e a fé como qualidades inerentes a Arthur da Silva Bernardes, predicados de um homem digno. Quatro merecimentos e quatro responsabilidades de um homem austero, que não agia sem método. (14 de Agosto de 1986 Nº 960)'
      },

      {
        tag: 'ensino',
        title: 'DAE e Centro Acadêmico Promovem Cursos de Comércio Exterior e Recrutamento',
        desc: '1986 – O Curso de Comércio Exterior foi ministrado pelo diretor cultural da Associação Brasileira de Administração (ABTA), Joao Gabriel de Sá Albernaz, comprador internacional da Mannesmann; pela professora Rita de Cássia Liberato, da Universidade Federal de Minas Gerais e da UNA- Ciências Gerenciais; pelo assessor Alexandre Moura Marques, da Diretoria Comercial da empresa Serviço de Соmércio Exterior; pelo gerente de câmbio do Grupo BMG, Cláudio Santos Viana; pelo gerente da Área de Financiamento Externo, Samuel Thiebault, da Açominas; e pelo diretor da empresa Divisa, Idalmo Rezende, com participação especial do professor José Edson Lara do DAE. A promoção foi do DAE e do Centro Acadêmico de Administração da UFV e do Sindicato dos Administradores de Minas Gerais. A coordenação foi dos representantes da ABTA em Viçosa, Marco Aurélio Pereira de Almeida e Joaquim Felício Júnior. Outro curso foi oferecido aos interessados, desta vez abordando Recrutamento e Seleção de Pessoal. As aulas estiveram a cargo do coordenador do Serviço de Encaminhamento Profissional (SEP), Juarez Guppi de Castro. A iniciativa foi do Departamento de Administração e Economia, dos representantes da ABTA em Viçosa, Joaquim Felício Júnior e Marco Aurélio Pereira de Almeida, e do Sindicato dos Administradores do Estado de Minas Gerais. (11 de Setembro de 1986 Nº 964) (25 de Setembro de 1986 Nº 966)'
      },

      {
        tag: 'extensao',
        title: 'DAE Promove Ciclo de Debates sobre a Constituinte',
        desc: '1986 – DAE promoveu debate sobre a Constituinte com debates e formação de mesa-redonda, O Ciclo de Debates sobre a Constituinte, promovido pelo DAE, teve três etapas: o professor Carlos Roberto Ramos, do DAE, discorreu sobre «Constituição: origem, conceito; Poder Constituinte e história das constituições brasileiras; o professor José Alfredo Baracho, da Universidade Federal de Minas Gerais, falou a respeito de «Presidencialismo x Parlamentarismo». (25 de Setembro de 1986 Nº 966)'
      },

      {
        tag: 'extensao',
        title: 'NAIPE e DAE Convidam Empresários para Seis Cursos de Gestão',
        desc: '1986 – O DAE convidou empresários e futuros empresários para os cursos que o Núcleo de Assistência Integral à Pequena Empresa (NAIPE). Foram, ao todo, seis cursos, dentro da área: Administration da Pequena Empresa, Administração de Pessoal, Sistema de Informações Contábeis, Análise de Custos, Administração de Estoques e Administração de Vendas. (25 de Setembro de 1986 Nº 966) (16 de Outubro de 1986 Nº 969) OBSERVAÇÃO: INSERIR DOCUMENTOS'
      },

      {
        tag: 'extensao',
        title: 'Encerramento dos Cursos Voltados para Pequenas Empresas no NAIPE',
        desc: '1986 – Com 38 inscritos, número superior ao número de vagas oferecido, encerrou-se o Curso «Administração da Pequena Empresa», ministrado pela professora Nina Rosa Silveira Cunha, do Departamento de Administração e Economia, e, oferecido pelo Núcleo de Apoio Integral à Pequena Empresa (NAIPE. O programa constou de uma série de cursos, todos voltados para empresários e futuros empresários da região, como o Curso Administração de Pessoal, ministrado pelo professor Juarez Magalhães Rodrigues; Sistema de Informações Contábeis, ministrado pela professora Nanci Pereira de Vasconcelos; Análise de Custos, pelo professor José Clévio Dias Casali; "Administração de Estoques" pelo professor Márcio Jose Ozório Gonçalves; e "Administração de Vendas", pelo professor José Edson Lara, todos do DAE/UFV. Lembrando que o NAIPE firmou com convênio com o BDMG, com o CEAG e INDI. (16 de Outubro de 1986 Nº 969) (06 de Novembro de 1986 Nº 972)'
      },

      {
        tag: 'ensino',
        title: 'Palestra da Copersucar Discute Reflexos do Plano Cruzado e Comércio de Commodities',
        desc: '1986 – Empresários, estudantes e professores participaram de uma palestra ministrada pelo Assessor de Exportação da Copersucar, Reinaldo de Barros Alcântara, e pelo Assessor da Diretoria de Suprimentos daquela empresa, Luís Roberto Martins Silveira. A promoção foi do Departamento de Administração e Economia da UFV, com a coordenação do professor José Edson Lara. Os temas Reflexos do Plano Cruzado no Comércio Exterior de Commodities e Panorama da Administração de Materiais foram os temas das palestras. Além dessas, ainda foi feita uma exposição em vídeo-cassete, mostrando os canaviais, usinas e Centros de Pesquisa da Copersucar, cuja sede é em São Paulo, e tem abrangência de 72 usinas cooperadas de açúcar e álcool. Na oportunidade, o Assessor de Exportação da empresa paulista destacou que «se a atual tendência permanecer, poderá faltar álcool para atendimento de uma frota de 2.500 mil veículos em circulação no País». Outro aspecto salientado por Reinaldo de Barros Alcântara foi com relação aos profissionais da área: No Brasil, praticamente não existem especialistas em comércio exterior de "commodities" (bens primários). Esta é uma das razões do fraco desempenho das vendas externas dos nossos produtos exportáveis. Os diretores da Copersucar ainda mantiveram contatos com o Reitor da UFV, professor Geraldo Martins Chaves, e com o presidente da Fundação Arthur Bernardes (FUNARBE). professor Pedro Henrique Monnerat, quando foram discutidos aspectos gerais vinculados a essa área. (30 de Outubro de 1986 Nº 971)'
      },
    ],
    photos: [
      { url: '/1986 - Formandos.jpg', caption: 'Os formandos e seus homenageados, nas escadarias do Edificio Arthur da Silva Bernardes.' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/1986-ufv-informa'
  },
  1987: {
    events: [

      {
        tag: 'infraestrutura',
        title: 'Obras das Novas Instalações e o Desmembramento dos Departamentos de Administração e Economia',
        desc: '02 de outubro de 1987 Na reunião do Colegiado tratou estritamente de trâmites burocráticos e expedientes internos da gestão universitária. As discussões do período concentraram-se em processos de avaliação de desempenho e afastamento de docentes para capacitação, organização de simpósios internos de pesquisa, substituição temporária de professores em comissões devido a licenças e contestações formais sobre redação de atas anteriores. Sendo assim, de acordo com os critérios estabelecidos, não foram identificados registros válidos relativos a comemorações, festas, inaugurações de instalações físicas, homenagens ou propostas para a criação de novos cursos de graduação ou extensão.'
      },
      { tag: 'ensino', title: 'Administração: Um dos 22 Cursos da UFV', desc: 'O curso de Administração foi um dos 22 cursos de graduação escolhidos para compor a oferta acadêmica da Universidade Federal de Viçosa (UFV), sendo disponibilizado aos estudantes no período noturno.' },
      { tag: 'gestao', title: 'Posse de José Edson Lara como Diretor Administrativo-Financeiro', desc: 'O Reitor da Universidade Federal de Viçosa (UFV), professor Geraldo Martins Chaves, deu posse a José Edson Lara como o novo Diretor administrativo-financeiro da Fundação Arthur Bernardes (FUNARBE).' },
      { tag: 'reconhecimento', title: 'Professora Nanci à Frente do Novo Núcleo de Treinamento do DAE', desc: 'Sob a coordenação da professora Nanci Pereira de Vasconcelos, o Departamento de Administração e Economia (DAE) da UFV implementou o Núcleo de Treinamento Profissional na área de Contabilidade. A professora destaca que o objetivo do sistema é fazer com que os estudantes simulem e acompanhem as atividades de uma empresa fictícia, garantindo que o aluno tenha "a vivência da teoria, com uma verdadeira integração interdisciplinar". Segundo a coordenadora, essa metodologia prática beneficiará imediatamente até mesmo os calouros ingressantes de 1987.' },
      { tag: 'ensino', title: 'I Semana do Empresário', desc: 'I Semana do Empresário, um evento promovido pelo Conselho de Extensão (CEE) e pelo Departamento de Administração e Economia (DAE) da UFV será realizada de quatro a sete de agosto na UFV.' },
    ],
    photos: [
      { url: '/1987 “O Diretor do CCH. professor Gilson Faria Potsch Magalhães”.jpg', caption: 'O Diretor do CCH. professor Gilson Faria Potsch Magalhães' },
      { url: '/1987 “O Reitor da UFV, professor Geraldo Martins Chaves, dá posse ao novo Diretor administrativo-financeiro da FUNARBE.”.jpg', caption: 'O Reitor da UFV, professor Geraldo Martins Chaves, dá posse ao novo Diretor administrativo-financeiro da FUNARBE.' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/1977-ufv-informa-2'
  },
  1988: {
    events: [
      {
        tag: 'ensino',
        title: 'Propostas de Expansão Acadêmica e Avaliação da Área de Administração',
        desc: 'Março de 1988 Durante as deliberações do colegiado, o DAE deu um importante passo em direção à expansão de suas atividades de ensino com a apresentação e discussão de uma proposta preliminar voltada para a criação do novo Curso de Direito na instituição. Além disso, em reuniões subsequentes do mesmo mês, o corpo docente avaliou novas propostas para a criação de futuros cursos e recomendou que a decisão final sobre essas implementações fosse submetida à análise aprofundada da área de Administração.'
      },
      {
        tag: 'extensao',
        title: 'Integração de Novos Professores e Representante Estudantil ao Colegiado',
        desc: 'Em 12 de maio de 1988, nesta reunião de Colegiado, o departamento acolheu a nomeação e a participação regular de novos integrantes. Após a aprovação coletiva, o representante estudantil efetivo do curso de Administração e os novos professores indicados foram convidados a participar formalmente dos trabalhos do Colegiado, integrando as atividades regulares daquele período letivo.'
      },
      { tag: 'gestao', title: 'Il Encontro Mineiro sobre Ensino de Economia', desc: 'Realizado nos dias 18 e 19 de agosto de 1988, o evento ocorreu no Centro de Ensino de Extensão da Universidade Federal de Viçosa (UFV). Com o tema central "Técnicas de Pesquisa e Monografia", o encontro buscou fortalecer o intercâmbio entre docentes e discentes, além de aprimorar programas acadêmicos e bibliografias da área.' },

      { tag: 'gestao', title: 'UFV Propõe Criação do Curso de Ciências Contábeis para Suprir Demanda Regional', desc: 'O Departamento de Administração e Economia (DAE) da Universidade Federal de Viçosa encaminhou, em abril de 1988, uma proposta preliminar para a implementação do curso de graduação em Ciências Contábeis. A iniciativa, assinada pelos professores Nanci Pereira de Vasconcelos e Milton Rodrigues Natalino, visa preencher uma lacuna na área de ciências humanas da instituição.' },

      { tag: 'gestao', title: 'VIII Semana do Administrador', desc: 'O Centro Acadêmico de Administração promoverá, de 16 a 19 de agosto, a VIII Semana do Administrador. O evento será realizado no auditório do Edifício Reinaldo de Jesus Araújo, com abertura às 19h. n.1063' },
      { tag: 'gestao', title: 'II Semana do Empresário', desc: 'O Departamento de Administração e Economia (DAE) da UFV realizará, de 10 a 14 de julho, a II Semana do Empresário. O evento busca integrar empresários e executivos à universidade através de cursos sobre análise de custos, informática e planejamento para pequenas e médias empresas. Inscrições podem ser feitas por correio ou telefone, com direito a alojamento gratuito no campus. n.1047' },
      { tag: 'reconhecimento', title: 'Homenagem ao Professor Carlos Roberto Ramos', desc: 'Durante as festividades de formatura da Turma de Janeiro de 1988 da Universidade Federal de Viçosa (UFV), os formandos de cada curso escolheram seus homenageados. No curso de Administração, o professor Carlos Roberto Ramos foi o homenageado escolhido. Na mesma ocasião, os formandos em Administração também receberam uma homenagem especial. n.1033' },
      { tag: 'gestao', title: 'I Encontro de Administração Municipal', desc: 'Entre os dias 16 e 18 de março, a UFV promoveu o I Encontro de Administração Municipal no auditório do Edifício Reinaldo de Jesus Araújo. O objetivo foi reunir prefeitos e técnicos da Zona da Mata para analisar problemas locais e buscar soluções com suporte universitário. A iniciativa faz parte da filosofia da instituição de integrar-se ativamente ao desenvolvimento da sua região. n. 1039' },
      { tag: 'ensino', title: 'Professor do DAE fala sobre dinâmica do investimento em economias capitalistas', desc: 'O professor Newton Paulo Bueno, do DAE, debateu a dinâmica do investimento em economias capitalistas em palestra na UFV. Baseado em Keynes e Kalecki, ele criticou políticas recessivas, argumentando que a expansão é o estado natural do capitalismo. Bueno alertou que a recessão causa o sucateamento econômico ao romper a natureza sequencial dos investimentos.' },
      { tag: 'gestao', title: 'Posse do DAD 1ª Chefia e do DEE 1ª Chefia', desc: 'Em 19 de agosto de 1988, o Reitor Geraldo Martins Chaves empossou os primeiros chefes dos novos departamentos de Administração (DAD) e Economia (DEE) da UFV. A solenidade marcou o desmembramento do antigo Departamento de Administração e Economia, oficializando as seguintes lideranças: Professor Juraci Aureliano Teixeira: 1ª chefia do Departamento de Economia. Professor Marcos Tanure Sanábio: 1ª chefia do Departamento de Administração. n.1074' },
      { tag: 'gestao', title: 'Nova Diretoria da FUNARBE', desc: 'O professor José Edson Lara assumiu o cargo de diretor administrativo-financeiro da Fundação Arthur Bernardes (FUNARBE) em 1º de agosto. Empossado pelo Reitor Geraldo Martins Chaves, ele compõe a nova diretoria ao lado dos professores Sebastião César Cardoso Brandão (presidente) e Carlos Sigueyuki Sediyama (diretor-técnico). A nova gestão trabalhará sob um estatuto reformulado que visa dar maior independência à Fundação. n.1037' },
      {
        tag: 'infraestrutura',
        title: 'Tratativas para o novo prédio do Departamento de Administração',
        desc: '16 de dezembro de 1988 a ata número onze detalha a reunião do Colegiado do Departamento de Administração, realizada às dez horas na sala de reuniões do Departamento de Engenharia Florestal. No encerramento da sessão, o Senhor Presidente compartilhou informações institucionais de grande relevância para a infraestrutura e a expansão acadêmica do departamento, destacando a realização de uma reunião com o Magnífico Reitor para tratar diretamente sobre o andamento das obras de construção das novas instalações físicas destinadas ao prédio do Departamento de Administração, cuja agenda incluiu um encontro planejado no próprio hall do referido edifício em obras. Adicionalmente, no âmbito do desenvolvimento de novos cursos e atendendo a uma solicitação formal do Centro Acadêmico de Administração, debateu-se o planejamento e o oferecimento futuro do Curso de Informática Aplicada à Administração. '
      },
    ],
    photos: [
      { url: '/1988 “Os formandos e os homenageados da Turma de Janeiro de 1988 da Universidade Federal de Viçosa.”.jpg', caption: 'Os formandos e os homenageados da Turma de Janeiro de 1988 da Universidade Federal de Viçosa.' },
      { url: '/1988 “O Reitor Geraldo Martins Chaves cumprimenta o professor Marcos Tanure Sanábio, vendo-se, à direita, o professor Juraci Aureliano Teixeira.”.jpg', caption: 'O Reitor Geraldo Martins Chaves cumprimenta o professor Marcos Tanure Sanábio, vendo-se, à direita, o professor Juraci Aureliano Teixeira.' },
      { url: '/1988 “Professor Newton Paulo Bueno”.jpg', caption: 'Professor Newton Paulo Bueno.' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/1988-ufv-informa-2'
  },
  1989: {
    events: [
      {
        tag: 'extensao',
        title: 'Relatos sobre o Espaço Físico do Prédio e Planejamento Integrado da Semana do Fazendeiro e Semana do Empresário',
        desc: 'A reunião do Colegiado do Departamento de Administração realizada na sala de reuniões do Departamento de Engenharia Florestal, foram apresentadas importantes deliberações relativas às instalações físicas e eventos de extensão do departamento. No âmbito da infraestrutura e espaço físico do DAD, o Senhor Presidente conduziu relatos informativos mapeados sob o item de assuntos gerais dedicados ao prédio e gerenciamento do espaço físico da unidade. Adicionalmente, discutiu-se em plenário a articulação de eventos institucionais de extensão com a proposta de unificar e realizar, na mesma data, as atividades comemorativas e programáticas voltadas para a Semana do Fazendieiro e a Semana do Empresário.'
      },
      {
        tag: 'infraestrutura',
        title: 'Instalação de microcomputadores e propostas de novas disciplinas',
        desc: 'Em 20 de fevereiro de 1989, o Senhor Presidente informou oficialmente aos membros do Colegiado que os novos microcomputadores adquiridos pelo DAD já se encontravam devidamente instalados, detalhando que uma das unidades foi alocada na sala de reuniões do NAIPE e outras duas no laboratório do Departamento de Engenharia Florestal. Na mesma ocasião, discutiu-se a criação de disciplinas de Administração voltadas para outros cursos da instituição, oportunidade em que o professor Gualberto comprometeu-se em estruturar duas novas disciplinas de Informática aplicadas à Administração (Banco de Dados e Tecnologia da Informática) e o professor Evaldo manifestou igual intenção em criar matérias voltadas para pequenas e médias empresas.'
      },
      {
        tag: 'ensino',
        title: 'Propostas de criação das disciplinas de Informática Aplicada e Novos Empreendimentos',
        desc: 'Em 14 de abril de 1989, nesta reunião, o Senhor Presidente evidenciou ao Colegiado a necessidade interna de se viabilizar a criação de novas disciplinas específicas para a grade do curso de Administração, citando formalmente os títulos de Informática Aplicada e Novos Empreendimentos. Em consonância com a demanda, a professora Rina Rosa realizou a apresentação de um programa analítico voltado para a Criação de Empresas, que havia sido elaborado por ela.'
      },
      {
        tag: 'infraestrutura',
        title: 'Aprovação da ocupação do DAD no novo prédio e curso de extensão concluído',
        desc: 'Em 19 de outubro de 1989, em relação ao espaço físico departamental, o Senhor Presidente apresentou ao Colegiado a planta do prédio do DAD, informando que a comissão da obra se reuniu com o arquiteto Paulo, da prefeitura universitária, que solicitou dados sobre as divisões internas conforme as necessidades. Após debates, o Colegiado aprovou por maioria que o DAD ficasse instalado nas dependências do terceiro andar e na parte térrea (garagem) da nova edificação. Também nesta data, a professora Rina Rosa informou a conclusão do segundo curso de extensão em Informática Aplicada à Administração.'
      },
      { tag: 'extensao', title: 'Professoras da UFV visitam Universidades do Canadá', desc: 'Em 1989, a Universidade Federal de Viçosa (UFV) deu um passo histórico rumo ao fortalecimento do empreendedorismo regional ao iniciar uma cooperação técnica com a Universidade de Quebec, no Canadá.O pontapé inicial ocorreu quando as professoras Maria Elena Barbassa e Nina Rosa visitaram a instituição canadense para negociar a parceria. Logo em seguida, em março do mesmo ano, professores da Universidade de Quebec retribuíram a visita, indo até o Departamento de Administração da UFV para firmar o intercâmbio.O grande objetivo dessa cooperação internacional era criar o Centro de Estudos e Pesquisa de Pequena e Média Empresa em Viçosa. Para consolidar o centro e capacitar o corpo docente, o projeto previa o treinamento de professores da UFV em nível de doutorado no Canadá, além da implementação pioneira de cursos de mestrado (com previsão de início para 1991) e doutorado na universidade mineira.Além do ganho acadêmico, a iniciativa buscava implantar, de forma pioneira, "Incubatórios de Empresa" (as chamadas incubadoras), com o propósito de fomentar o empreendedorismo local e gerar novos empregos no município de Viçosa. n. 1107' },

      { tag: 'extensao', title: 'III Semana do Empresário', desc: 'A III Semana do Empresário ocorrerá de 10 a 14 de julho na UFV, focando em empresários e profissionais do setor. O evento oferecerá cursos de curta duração sobre temas como administração em tempos de crise, informática aplicada e marketing para pequenas empresas. Paralelamente, haverá uma exposição de produtos e serviços aberta ao público no campus. A organização conta com o apoio da Associação Comercial de Viçosa e do CEAG-MG. n. 1102 n.1118' },

      { tag: 'ensino', title: 'UFV e Québec: Um Marco na Administração', desc: 'Em março de 1989, professores da Universidade de Quebec visitaram o Departamento de Administração da UFV para firmar um intercâmbio histórico. O grande objetivo dessa cooperação internacional era criar o Centro de Estudos e Pesquisa de Pequena e Média Empresa na universidade. O projeto envolvia treinar professores da UFV no doutorado no Canadá e fundar um curso de mestrado em Viçosa para 1991. n.1087 n.1094 n.1107' },

      { tag: 'infraestrutura', title: 'Departamentos de Administração e Economia terão novas sedes', desc: 'As novas sedes dos Departamentos de Administração e Economia da UFV estão em fase adiantada, com o primeiro pavimento de uma estrutura de 3.410 m² quase concluído atrás do Edifício Reinaldo de Jesus Araújo. O projeto racionalista prevê, no térreo, 24 gabinetes duplos, áreas administrativas, laboratórios e salas de leitura e computação. Os andares superiores deverão abrigar os departamentos de Letras e Artes e de Educação. n.1121' },

      { tag: 'gestao', title: 'Reitor empossa novos chefes de departamento da UFV', desc: 'O reitor Antônio Fagundes de Sousa empossou os novos chefes de 23 departamentos da UFV para um novo período administrativo. As cerimônias ocorreram em 11 e 13 de setembro de 1989, após votações internas em cada órgão. O reitor destacou que o processo respeitou a vontade da maioria e deve focar no trabalho institucional diante da crise nas universidades. Entre os empossados está o professor Roberto de Carvalho Araújo da Administração. n. 1117' },

      { tag: 'extensao', title: 'Imprensa Universitária da UFV Lança Três Obras', desc: 'A Imprensa Universitária da Universidade Federal de Viçosa (UFV) publicou recentemente três novas obras. A primeira delas é "Tabelas Financeiras – Juros Compostos", de autoria do professor Gualberto Ferreira da Silva (Departamento de Administração), que traz tabelas financeiras calculadas em microcomputador ao longo de 254 páginas. A segunda obra é "Memória da Reunião do Programa de Pesquisa de Soja do Estado de Minas Gerais – 1986", escrita por pesquisadores da UFV e da Epamig (Neyson Eustáquio Arantes, Isamar Ferreira de Paiva, Antônio Machado Headley e José Pedroso Neto). Por fim, foram lançados os "Anais do IX Encontro de Mirmecologia", volume de 412 páginas que reúne trabalhos apresentados por pesquisadores brasileiros e estrangeiros durante o evento científico ocorrido na UFV em julho de 1988. n. 1127' },

      { tag: 'reconhecimento', title: 'Falecimento do professor Roberto de Carvalho Araújo ', desc: 'O professor Roberto de Carvalho Araújo, chefe do Departamento de Administração da UFV, faleceu em 20 de dezembro de 1989, em Belo Horizonte. Formado em Direito, Administração e Economia, ele era mestre pela PUC-Rio e planejava cursar doutorado na Espanha. O velório ocorreu no Salão Nobre da universidade, seguido de missa solene no Santuário de Santa Rita de Cássia e sepultamento no Cemitério Dom Viçoso. Roberto pertencia a uma família tradicional de Viçosa e deixou esposa e três filhos. n.1130' },
    ],
    photos: [
      { url: '/1989 “As professoras Nina Rosa da S. Cunhas e Maria E. Barbassa”.jpg', caption: 'OAs professoras Nina Rosa da S. Cunhas e Maria Elena Barbassa' },
      { url: '/1989 “Construção do Departamento de Administração e Economia”.jpg', caption: 'Construção do Departamento de Administração e Economia.' },
      { url: '/1989 “O professor Roberto de Carvalho Araújo. ”.jpg', caption: 'O professor Roberto de Carvalho Araújo.' },
      { url: '/1989 “O Reitor Antônio Fagundes faz seu discurso durante a solenidade de posse”.jpg', caption: 'O Reitor Antônio Fagundes faz seu discurso durante a solenidade de posse' },
      { url: '/1989 Os professores canadenses, acompanhados de professores do Departamento de Administração.jpg', caption: 'Os professores canadenses, acompanhados de professores do Departamento de Administração.' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/1989-ufv-informa'
  },
  1990: {
    events: [

      { tag: 'reconhecimento', title: 'UFV perde mais um professor', desc: 'O professor Gualberto Ferreira da Silva faleceu aos 51 anos, no dia 9 de janeiro, no Rio de Janeiro. Natural da capital carioca e mestre pela COPPE/UFRJ, ele atuava como professor assistente VI no Departamento de Administração da UFV desde 1979. Sua formação incluía o bacharelado em Administração pela FCEPRJ, concluído em 1977. O sepultamento ocorreu na tarde de seu falecimento, no Cemitério da Estrada da Cacuia, na Ilha do Governador. n.1131' },
      { tag: 'extensao', title: 'IV Semana do Empresário', desc: 'A IV Semana do Empresário ocorreu de 2 a 5 de outubro de 1990 na UFV, oferecendo 16 cursos de curta duração sobre gestão, informática e marketing. O evento reuniu empresários, gerentes e profissionais para debater o setor e expor produtos em áreas cedidas pela universidade. A organização foi uma parceria entre o Conselho de Extensão, o Departamento de Administração e o Naipe, com apoio de entidades como a ACV e o Ceag-MG. n.1158' },

      {
        tag: 'extensao',
        title: 'Boas-vindas a novo docente no DAD',
        desc: 'A professora Maria Elena solicitou e registrou em ata um voto de boas-vindas ao professor Antônio de Figueiredo Vieira.'
      },
      {
        tag: 'pesquisa',
        title: 'Aprovação de proposta para mestrado interdisciplinar com a Universidade de Québec',
        desc: 'Em 15 de maio de 1990, em uma reunião informal convocada previamente com a presença dos docentes do DAD, e cujos desdobramentos foram discutidos nesta sessão oficial, foi debatida e aprovada de forma unânime pelo Colegiado uma proposta para o estabelecimento de um programa de mestrado interdisciplinar. O projeto prevê o oferecimento de disciplinas na área de Gerência de Empresas Agroindustriais junto ao Departamento de Tecnologia de Alimentos e está associado ao Projeto de Cooperação Técnica Internacional firmado no nível de mestrado entre a Universidade Federal de Viçosa (Brasil) e a Universidade de Québec (Canadá), abrindo-se a possibilidade de criar uma concentração voltada para a Agroindústria no mestrado do próprio DAD.'
      },
      {
        tag: 'ensino',
        title: 'Estudos de viabilidade para a criação dos cursos de Direito e Ciências Contábeis',
        desc: 'Em 18 de julho de 1990, durante a sessão do Colegiado, o professor José Maria realizou uma explanação detalhada a respeito da viabilidade técnica e das dificuldades operacionais para a futura criação do curso de graduação em Direito na UFV, informando que o documento oficial de planejamento estava sendo elaborado pelos professores da área para posterior envio à chefia do DAD. Na mesma reunião, a professora Nanci informou que, em conjunto com o professor Milton, estava estruturando um documento de teor semelhante focado na viabilidade e planejamento para a criação do curso de Ciências Contábeis na instituição, que também seria encaminhado ao chefe do departamento.'
      },
      {
        tag: 'extensao',
        title: 'Participação do DAD na Semana do CCH e na Semana do Administrador',
        desc: 'Em 29 de agosto de 1990, no que diz respeito ao planejamento de festividades e integração institutional, o Senhor Presidente comunicou oficialmente ao Colegiado a realização programada da Semana do Centro de Ciências Humanas, Letras e Artes (CCH), destacando que o DAD ficaria responsável pela coordenação de um dos eventos da programação. Na oportunidade, ele abriu debate e consultou os membros do departamento sobre o interesse de participação tanto na referida Semana do CCH quanto nas celebrações da tradicional Semana do Administrador.'
      },
      {
        tag: 'ensino',
        title: 'Criação da comissão do curso de Direito e definição de prioridades institucionais',
        desc: 'Em 12 de outubro de 1990, o professor José Maria expôs os detalhes de uma reunião na SEGEPLAN, na qual foi transmitido o desejo do magnífico Reitor de que o novo curso de Direito fosse implantado na UFV com início já no segundo semestre de 1991. Para atender a essa meta, o Colegiado aprovou a criação de uma comissão de estudos dedicada ao curso e o envio de um ofício para avaliar a transferência do professor Guy Capdeville para o DAD. Em contrapartida, ao avaliar o parecer sobre a transformação do curso de Cooperativismo em Bacharelado, o Colegiado aprovou uma moção declarando que o DAD não dispunha de condições momentâneas para colaborar, visto que possuía outras prioridades institucionais imediatas (Direito, Ciências Contábeis, aumento de vagas e pós-graduação).'
      },
      {
        tag: 'infraestrutura',
        title: 'Conclusão do laboratório de microcomputadores do DAD e aquisição de novas máquinas',
        desc: 'Em 7 de dezembro de 1990, no que tange ao aprimoramento do espaço físico e suporte às atividades acadêmicas do departamento, foi registrada em ata a conclusão da obra física do laboratório de microcomputadores do DAD. Paralelamente à finalização desse espaço, foi anunciada a compra de trinta e cinco novas máquinas destinadas ao Núcleo de Treinamento Profissional.'
      },
      { tag: 'extensao', title: 'Professor Canadense visita a UFV', desc: 'O professor canadense André Courtemanche, da Universidade de Quebec, visitou a UFV entre 14 de abril e 4 de maio de 1990 para discutir um programa de cooperação técnica. O projeto prevê o treinamento de doutorado para professores do Departamento de Administração e a criação de um mestrado focado em pequenas e médias empresas. A parceria visa transformar o Naipe em um centro de excelência e incentivar a criação de novas empresas na região. Além dele, a pesquisadora canadense Verna J. Higgins também visitou a instituição para seminários sobre fitopatologia e biotecnologia. n. 1147' },
      { tag: 'extensao', title: 'Departamento de Administração', desc: 'O Departamento de Administração da UFV promoveu a IV Semana do Empresário, oferecendo 16 cursos de capacitação e áreas para exposição de produtos. O setor também avançou em entendimentos para um intercâmbio com a Universidade de Quebec, visando o treinamento de doutorado de seus professores e a criação de um mestrado em pequenas empresas. Administrativamente, o departamento foi marcado pela posse do chefe Roberto de Carvalho Araújo em 1989 e pelo seu posterior falecimento em dezembro do mesmo ano. n.1163' },
    ],
    photos: [{ url: '/1990 “André Courtemanche”.jpg', caption: 'André Courtemanche.' }],
    articleUrl: 'https://atom.ufv.br/index.php/1990-ufv-informa'
  },
  1991: {
    events: [
      { tag: 'extensao', title: 'V Semana do Empresário', desc: 'A Universidade Federal de Viçosa (UFV) realizará, de 8 a 12 de julho, a V Semana do Empresário, evento voltado para a reciclagem e discussão de novas alternativas de negócios para empresários e gerentes. n.1191' },
      { tag: 'extensao', title: 'XVII Encontro Nacional dos Estudantes de Administração', desc: 'Cerca de dois mil estudantes de diversas regiões do país são esperados em Viçosa, entre 8 e 12 de julho, para o XVII Encontro Nacional dos Estudantes de Administração. O evento é organizado pelo Centro Acadêmico da UFV, pela Executiva Nacional da categoria e pelo Departamento de Administração da instituição. n.1178' },
      { tag: 'ensino', title: 'TV Viçosa inicia suas transmissões', desc: 'Os preparativos para o início das transmissões da TV Viçosa, vinculada à Fundação Rádio e Televisão Educativa (RTV), estão praticamente concluídos e a estreia deve ocorrer nos próximos dias. A emissora terá programação voltada para interesses comunitários da microrregião, com ênfase especial em jornalismo regional durante a retransmissão da Rede Brasil (TVE). A equipe de trabalho aproveitará funcionários e estudantes da própria UFV, sendo estes últimos selecionados por concurso. n.1199' },
    ],
    photos: [{ url: '/1991 “Formandos de Janeiro de 1991. ”.jpg', caption: 'Formandos de Janeiro de 1991.' }],
    articleUrl: 'https://atom.ufv.br/index.php/1991-ufv-informa'
  },
  1992: {
    events: [
      { tag: 'fundacao', title: 'Inaugurado o Prédio do CCH na UFV', desc: 'No dia 11 de setembro de 1992, às 14 horas, a Universidade Federal de Viçosa (UFV) realizou a inauguração oficial do edifício-sede que passou a abrigar os Departamentos de Administração, Economia, Letras e Artes. O prédio foi projetado para ser a estrutura definitiva do Centro de Ciências Humanas, Letras e Artes (CCH) da instituição. A solenidade contou com o tradicional corte da fita simbólica e o descerramento da placa comemorativa. O ato foi conduzido pelo então reitor da UFV, professor Antônio Fagundes de Sousa, acompanhado pelo economista Tarcísio Fialho de Oliveira, diretor-administrativo do Sistema Estaminas de Comunicação (que na ocasião representava o jornalista Camilo Teixeira da Costa). Também estiveram presentes o diretor-geral do jornal Estado de Minas, João Bosco Martins Sales, o diretor do CCH, professor Juraci Aureliano Teixeira, o chefe do Departamento de Economia, professor Eloy Alves Filho, além do prefeito do Campus, engenheiro Rômulo Laurindo Lopes de Freitas, e do mestre-de-obra Vicente da Paixão Filho.' },
      { tag: 'extensao', title: 'Empresa Júnior do DAD', desc: 'Fundação da Empresa Júnior vinculada ao DAD, oferecendo serviços de consultoria.' },
      { tag: 'ensino', title: 'Profa. Maria Elena Barbassa', desc: 'A professora Maria Elena Barbassa é a coordenadora de um seminário sobre qualidade total nas organizações, que será proferido pelo professor norte-americano Ronald F. Farina na UFV. O evento aborda uma visão sistêmica da qualidade em todos os setores, visando melhorar o desempenho e a eficiência institucional.' },
      { tag: 'extensao', title: 'V Semana do Empresário', desc: 'A V Semana do Empresário, organizada pela UFV e ACV, ocorrerá de 23 a 27 de agosto para promover a integração entre executivos e a universidade. O evento focará no intercâmbio de conhecimentos técnicos e gerenciais para pequenas e microempresas através de cursos e debates. Inscrições estão abertas até 17 de agosto, com oferta de alojamento pela instituição' },
      { tag: 'infraestrutura', title: 'Professor Canadense visita a UFV', desc: 'O professor canadense H. J. Swatland, da Universidade de Guelph, visitou a UFV para ministrar o curso "Avaliação da Qualidade da Carne" e proferir uma palestra sobre o uso de fibras óticas na análise de produtos de origem animal. Especialista em ciência da carne e biologia muscular, ele apresentou tecnologias avançadas para prever a qualidade do produto final. ' },
      { tag: 'extensao', title: 'DAD promove curso sobre bolsa de valores', desc: 'O Departamento de Administração (DAD) da UFV promoveu um curso sobre Bolsa de Valores em parceria com a Bolsa de Valores de Minas Gerais (BVMG). O evento contou com palestras dos superintendentes Paulo Henrique Ayres Pena e Lacyr Maffia, que abordaram o funcionamento do mercado, a capitalização de empresas e métodos de análise de ações. O curso visou capacitar alunos e profissionais, esclarecendo dúvidas sobre investimentos e o ambiente de negociação.' },
      { tag: 'infraestrutura', title: 'Prédio do CCH', desc: 'O prédio do Centro de Ciências Humanas, Letras e Artes (CCH) da UFV tem inauguração prevista para o final de agosto de 1992. A obra, iniciada em junho após anos de paralisação, abrigará os departamentos de Economia, Administração e Letras, além do curso de Direito. Para cumprir o cronograma, a reitoria autorizou a contratação de funcionários temporários e regime de trabalho noturno. A nova estrutura de três pavimentos e 4.000 m² visa solucionar a carência de espaço físico para docentes e técnicos.' },
      { tag: 'ensino', title: 'Alunos de Administração promovem palestras', desc: 'Os egressos da turma de 1991 de Administração da Unioeste, conhecidos como "Calouros 91", realizam periodicamente eventos e palestras para compartilhar experiências de mercado com os atuais estudantes. A iniciativa visa fortalecer o networking e integrar gerações, oferecendo uma visão prática da profissão aos acadêmicos.' },
    ],
    photos: [
      { url: '/1992 “Aspecto da palestra do professor canadense”.jpg', caption: 'Aspecto da palestra do professor canadense.' },
      { url: '/1992 inauguração do dad.jpg', caption: 'Inaugurado o prédio do CCH' },
      { url: '/1992 - Antonio Fagundes.jpg', caption: 'Reitor Antonio Fagundes discursa na inauguragdo. ' },
      { url: '/1992 - Juraci.jpg', caption: 'O diretor do CCH, professor Juraci Aureliano Teixeira, fala aos presentes' },
    ],
    articleUrl: 'https://atom.ufv.br/index.php/1992-jornal-da-ufv'
  },
  1993: {
    events: [
      { tag: 'nomeacao', title: 'Contratação de Docente e Voto de Louvor', desc: 'Aprovação unânime da nomeação do técnico Afonso Augusto Teixeira de Freitas de Carvalho Lima para o cargo de professor. Na mesma data, foi aprovado um voto de louvor e homenagem à professora Graça pela sugestão de ampliar a participação do departamento na diretoria do Centro e em posições administrativas.' },
      { tag: 'homenagem', title: 'Voto de Louvor ao Conselheiro Evaldo Guimarães Barbosa', desc: 'Aprovação de voto de louvor, elogio e agradecimento especial ao conselheiro Evaldo Guimarães Barbosa, prestando uma homenagem formal pela sua dedicação e trabalho na melhoria do programa do PET.' },
      { tag: 'ensino', title: 'DAD promove palestra', desc: 'O DAD promoveu palestra sobre "Técnicas Gerenciais Japonesas" no auditório do Departamento de Engenharia Florestal no dia 10 de novembro.' },
      { tag: 'extensao', title: 'UFES Busca Integração com a UFV', desc: 'Com o objetivo de conhecer a sólida experiência da Universidade Federal de Viçosa (UFV) na realização de eventos corporativos e de extensão, representantes da Universidade Federal do Espírito Santo (UFES) realizaram uma visita oficial ao campus de Viçosa. A comitiva capixaba foi composta pelo assessor da Pró-Reitoria de Extensão, Nelton Martins Yin, e pelo diretor do Departamento de Integração com o Setor Produtivo, Anselmo Frizera Júnior, acompanhados pelo consultor Paulo Raul Guimarães Souza, do Sebrae-ES. Motivada pela intenção de realizar a sua própria I Semana do Empresário ainda naquele ano, a equipe da UFES reuniu-se com docentes e técnicos da Comissão de Extensão do Departamento de Administração da UFV e formalizou um convite para que a equipe mineira ministre palestras durante o evento no Espírito Santo. Tiveram participação os professores e técnicos Cássia Viviani Silva Santiago, José Roberto Reis, Afonso Augusto Teixeira de Freitas de Carvalho Lima e Beatriz de Freitas Dias' },
      { tag: 'extensao', title: 'Técnicas Gerenciais Japonesas no Armarinho Santo Antônio', desc: 'O administrador de empresas Sérgio Maia Botelho, consultor do Armarinho Santo Antônio de Ubá (MG), proferiu uma palestra na Universidade Federal de Viçosa (UFV) abordando o tema "Técnicas Gerenciais Japonesas em Empresa Nacional: uma experiência positiva". O evento, promovido pelo Departamento de Administração (DAD) por meio do Programa Especial de Treinamento (PET) e coordenado pelo professor José Edson Lara, destacou o caso de sucesso da empresa mineira. Em sua apresentação, Botelho detalhou o processo de implementação de gestão de qualidade no armarinho, que englobou o uso de ferramentas estruturadas como seminários motivacionais, diagramas de causa e efeito.' },
    ],
    photos: [{ url: '/1993 “Formandos de agosto de 1993”.jpg', caption: 'Formandos de agosto de 1993.' }],
    articleUrl: 'https://atom.ufv.br/index.php/1993-jornal-da-ufv'
  },
  1994: {
    events: [

      { tag: 'fundacao', title: 'Aprovação da Empresa Júnior na CEPE', desc: 'Ocorreu a aprovação da criação da Empresa Júnior de Consultoria em reunião realizada pela Coordenação de Ensino, Pesquisa e Extensão (CEPE) da UFV. O Presidente comunicou oficialmente ao colegiado a aprovação da criação da Empresa Júnior de Consultoria, chancelada no mês anterior pela CEPE.' },

      { tag: 'ensino', title: 'Ratificação da Criação do Curso de Direito', desc: 'Aprovação por unanimidade do ato "ad referendum" do Chefe do DAD relativo à criação do Curso de Direito e homologação do respectivo Plano de Curso, ratificando a decisão da Ata nº 53/91.' },

      { tag: 'ensino', title: 'Primeira revista do PET', desc: 'O Departamento de Administração da UFV lançou a primeira edição da Revista do PET Administração, sob a coordenação do professor José Edson Lara. A publicação visa divulgar as atividades de ensino, pesquisa e extensão desenvolvidas pelo grupo, além de oferecer um espaço para produções científicas de estudantes e professores.' },

      { tag: 'fundacao', title: 'Criação do Centro Acadêmico de Consultoria – CACE', desc: 'Estudantes de Administração e Economia da UFV constituíram o Centro Acadêmico de Consultoria Empresarial (CACE), uma empresa júnior que visa aproximar a teoria acadêmica da prática profissional. A entidade presta serviços de consultoria e assessoria a micro, pequenas e médias empresas, além de produtores rurais da região.' },

      { tag: 'extensao', title: 'Professores e estudantes de Administração realizam visita de estudos ao Sul de Minas', desc: 'Um grupo de professores e estudantes do curso de Administração da UFV visitou Santa Rita do Sapucaí para conhecer a estrutura do Inatel e seu processo de incubação de empresas. Durante a visita ao "Vale da Eletrônica", o grupo conheceu empresas como a Inaco Telecomunicações e discutiu a realidade da Empresa Júnior CACE. A equipe da UFV também foi convidada a auxiliar o Inatel na implantação de um programa com as atribuições do PET.' },
    ],
    photos: [
      { url: '/1994 “O professor José Edson Lara fala durante o lançamento da revista”.jpg', caption: 'O professor José Edson Lara fala durante o lançamento da revista.' },
      { url: '/1994 “Professores e estudantes na visita ao sul de Minas”.jpg', caption: 'Professores e estudantes na visita ao sul de Minas.' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/1994-jornal-da-ufv'
  },
  1995: {
    events: [
      { tag: 'extensao', title: 'Programação de Eventos do DAD e Parceria com o CRA', desc: 'Aprovação unânime da programação de eventos do DAD para o ano de 1995 e recebimento de ofício do Conselho Regional de Administração (CRA) propondo participação nos eventos regionais.' },
      { tag: 'ensino', title: 'Seminário com a Professora Suzana Braga Rodrigues', desc: 'Anúncio da visita da professora Suzana Braga Rodrigues para a apresentação do seminário "Gerência e Cultura nas Organizações".' },
      { tag: 'comemoracao', title: 'Lançamento da Revista do PET e 30 Anos de Administração', desc: 'Comunicado oficial do recebimento de felicitações pelo lançamento da Revista do PET/Administração e apresentação do programa de comemoração de "Administração 30 Anos na UFV".' },
      { tag: 'ensino', title: 'Proposta de Especialização em nível de Pós-Graduação', desc: 'A Comissão de Pós-Graduação expôs a proposta para a criação de um novo curso de Pós-Graduação em nível de Especialização com carga mínima de 420 horas, sendo incorporado ao plano geral da Comissão de Planejamento.' },
      { tag: 'ensino', title: 'Curso de Chefia e Liderança', desc: 'O Curso de Chefia e Liderança, coordenado pelos professores José Edson Lara e Arnete Folgaça, recebeu uma avaliação positiva dos participantes. A iniciativa focou no desenvolvimento de habilidades gerenciais e na melhoria das relações interpessoais no ambiente de trabalho. O sucesso do evento reforçou a importância da capacitação contínua para o fortalecimento das lideranças na instituição.' },
    ],
    photos: [
      { url: '/1995 “Colação de grau dos novos profissionais”.jpg', caption: 'Colação de grau dos novos profissionais.' },
      { url: '/1995 “Os formandos da Turma de Julho de 1995”.jpg', caption: 'Os formandos da Turma de Julho de 1995.' },
      { url: '/1995 “Pós Graduandos de Dezembro de 1995”.jpg', caption: 'Pós Graduandos de Dezembro de 1995.' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/1995-jornal-da-ufv'
  },
  1996: {
    events: [
      { tag: 'nomeacao', title: 'Nomeação de Ricardo Correa Gomes', desc: 'Comunicação da nomeação de Ricardo Correa Gomes no Diário Oficial da União na área Contábil-Financeira.' },
      { tag: 'extensao', title: 'Homenagem ao CACE', desc: ' Registro de homenagem prestada pela Associação Comercial de Viçosa ao CACE.' },
      { tag: 'homenagem', title: 'Docentes homenageados pela ASPUV', desc: 'O Colegiado decidiu estender a homenagem da ASPUV a todos os professores da ativa e também, em memória, aos professores Roberto e Gualberto.' },
      { tag: 'nomeacao', title: 'Homologação de Concurso Público para Docentes', desc: 'Oficialização da homologação dos resultados para preenchimento de vagas docentes: Lourival de Castro Vale (Contábil-Financeira), Luciana de Oliveira Miranda Gomes e Jorge Alberto dos Santos (Administração Geral e RH).' },
      { tag: 'gestao', title: 'Nomeações de professores do DAD para administração superior X', desc: 'Pró-Reitoria de Assuntos Comunitários - Prof. Walmer Faroni, Coordenadoria do Sistema Rádio e Televisão - Prof. Sérgio Augusto Pereira Monteiro, Diretoria de Recursos Humanos - Profa. Nina Rosa da Silveira Cunha. ' },
    ],
    photos: [
      { url: '/1996 “Formandos de 1996”.jpg', caption: 'Formandos de 1996.' },
      { url: '/1996 “Parte da turma dos Formandos”.jpg', caption: 'Parte da turma dos Formandos.' },
      { url: '/1996 “Prof. Sérgio Augusto Pereira Monteiro”.jpg', caption: 'Prof. Sérgio Augusto Pereira Monteiro”.jpg' },
      { url: '/1996 “Profa. Nina Rosa da Silveira Cunha”.jpg', caption: 'Profa. Nina Rosa da Silveira Cunha.' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/1996-jornal-da-ufv'
  },
  1997: {
    events: [
      { tag: 'nomeacao', title: 'Contratação de Docente, Novo Tutor do PET e Biblioteca Setorial', desc: 'Aprovação da contratação de Jorge Alberto dos Santos e extinção de certame correlato. Aprovação do prof. Adriel Rodrigues de Oliveira como tutor do PET com voto de reconhecimento ao prof. José Edson Lara. Debate sobre coordenação para a Biblioteca Setorial.' },
      { tag: 'nomeacao', title: 'Homologação do Professor Luiz Cláudio Lopes Alves X', desc: 'Aprovação unânime do resultado do concurso na área de Administração da Produção/Material/Novas Empresas, elegendo Luiz Cláudio Lopes Alves para o cargo de Professor Assistente I.' },
      { tag: 'ensino', title: 'Aprovação da Especialização em Administração Municipal', desc: 'Aprovação unânime da implantação do curso de especialização Lato-Sensu em Administração Municipal, com carga horária de 400 horas-aulas com disciplinas aos sábados.' },
      { tag: 'extensao', title: 'Planejamento de Atividades de Extensão do 2º Semestre X', desc: 'Deliberação sobre o cronograma que integrará o Dia do Administrador, Encontro Mineiro de Administração Municipal, Simpósio Sobre Qualidade Total, Semana de Trainees e curso de Gestão da Inovação.' },

      { tag: 'nomeacao', title: 'Nomeação de Eliezer Egídio e Organização das Salas de Informática', desc: 'Comunicação da nomeação de Eliezer Egídio e Silva (Mercadologia/Estratégia). Definição do uso dos computadores da coordenação (estrito de docentes) e da sala 13 (compartilhado entre professores e bolsistas). Boas-vindas oficiais prestadas pelo prof. Adriel Rodrigues de Oliveira e demais conselheiros ao recém-nomeado professor Eliezer.' },

      { tag: 'extensao', title: 'Nomeação do professor Adriel como diretor do CCH', desc: 'Nomeação do prof. Adriel como diretor do CCH.' },

      { tag: 'ensino', title: 'I Semana do Empresário e Atuação do DAD/CEE', desc: 'O Departamento de Administração e Economia (DAD) e o Conselho de Extensão (CEE) da UFV promovem, entre 12 e 18 de julho, a I Semana do Empresário. O evento tem como objetivo aproximar executivos e empresários da universidade, oferecendo conhecimentos técnicos e gerenciais para o desenvolvimento de diversos setores empresariais.' },

      { tag: 'gestao', title: 'Cursos do NAIPE', desc: 'O Núcleo de Assistência Integrada à Pequena Empresa (NAIPE) encerrou o curso de "Administração de Vendas", que foi ministrado por José Edson Lara para 34 inscritos. A coordenadora Nina Rosa Silveira Cunha confirmou que o NAIPE pretende repetir e ampliar a oferta de cursos.' },

      { tag: 'gestao', title: 'Núcleo de Treinamento Profissional em Contabilidade', desc: 'O Departamento de Administração e Economia (DAE) da UFV iniciou, no primeiro semestre de 1987, as atividades do Núcleo de Treinamento Profissional. Coordenado pela professora Nanci Pereira de Vasconcelos, o núcleo funciona no Pavilhão de Aulas (sala 309) e visa familiarizar os estudantes com os procedimentos práticos e executivos da área empresarial.' },

      { tag: 'gestao', title: 'Posse na FUNARBE', desc: 'O Reitor da UFV, professor Geraldo Martins Chaves, empossou José Edson Lara como o novo Diretor Administrativo-Financeiro da Fundação Arthur Bernardes (FUNARBE). Administrador de empresas e ex-chefe da Divisão de Marketing do órgão, Lara substituiu José Clévio Dias Casali. Em seu discurso, ele enfatizou a necessidade de uma "revisão corporativa" e de um trabalho integrado para reestruturar as áreas administrativa e financeira da instituição a curto prazo.' },
    ],
    photos: [
      { url: '/1997 “O Reitor da UFV, professor Geraldo Martins Chaves, dá posse ao novo Diretor administrativo-financeiro da FUNARBE.”.jpg', caption: 'O Reitor da UFV, professor Geraldo Martins Chaves, dá posse ao novo Diretor administrativo-financeiro da FUNARBE' },
      { url: '/1997 “Volta às aulas”.jpg', caption: 'Volta às aulas.' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/1997-jornal-da-ufv'
  },
  1998: {
    events: [
      { tag: 'nomeacao', title: 'Boas-vindas ao Professor Jailson de Oliveira Arieira', desc: 'Recepção institucional ao professor Jailson de Oliveira Arieira.' },

      { tag: 'homenagem', title: 'Projeto PROIN e Parabenização pelo Resultado no Provão', desc: 'Atualizações sobre o status do Projeto PROIN e compartilhamento de cartão do Reitor parabenizando os professores do DAD pelo expressivo resultado obtido no Exame Nacional de Cursos (Provão).' },

      { tag: 'ensino', title: 'Primeiros Selecionados', desc: 'Uma Comissão de Seleção presidida pelo professor Adriel selecionou os quatro primeiros estudantes da turma de 1988 para integrarem o programa:  Carla Carvalho Malaquias, Edson Mauro Santos, Geraldo Magela de Abreu e Geraldo Vieira Júnior.' },
      { tag: 'ensino', title: 'Doutorado na Escócia', desc: 'O professor João Adamor Dias Neves, do Departamento de Administração do Centro de Ciências Humanas, Letras e Artes, regressou à UFV após concluir o seu doutorado na Universidade de Stirling, na Escócia. O seu programa foi focado na área de Administração de Pequenas e Médias Empresas, sob a orientação do professor Stewart Butts.' },
      { tag: 'infraestrutura', title: 'Reestruturação Acadêmica', desc: 'Os novos departamentos foram criados para substituir o antigo Departamento de Administração e Economia do Centro de Ciências Humanas, Letras e Artes.' },
      { tag: 'gestao', title: 'Implantação do PET na Administração', desc: 'O Departamento de Administração da UFV teve sua proposta aprovada pela CAPES para a implantação de um dos primeiros Programas Especiais de Treinamento do Brasil nessa área. O programa é orientado pelo professor Adriel Rodrigues de Oliveira, que atua como tutor e foi o responsável pela iniciativa da proposta.' },
      { tag: 'ensino', title: 'Palestra sobre Dinâmica de Investimento e Economia Capitalista', desc: 'O professor Newton Paulo Bueno proferiu uma palestra no auditório do Departamento de Economia Rural (DER) abordando o tema: "A dinâmica do investimento em economias capitalistas: um questionamento sobre o princípio do ajustamento do estoque de capital".' },
      { tag: 'ensino', title: 'Homenagem ao Professor Carlos Roberto Ramos', desc: 'Curso de Administração: O professor Carlos Roberto Ramos foi o homenageado escolhido especificamente pelos formandos do curso de Administração. Homenagem Especial: Além do professor, os próprios "formandos em Administração" foram citados como alvo de uma homenagem especial dentro do curso.' },
      { tag: 'gestao', title: 'UFV Promove II Semana do Empresário em Julho', desc: 'O Departamento de Administração e Economia (DAE) da Universidade Federal de Viçosa (UFV), em conjunto com o Conselho de Extensão, realizará entre os dias 10 e 14 de julho a II Semana do Empresário.' },
      { tag: 'gestao', title: 'Novas Chefias', desc: 'Departamento de Administração (DAD): Assumiu como primeiro chefe o professor Marcos Tanure Sanábio.  Departamento de Economia (DEE): Assumiu como primeiro chefe o professor Juraci Aureliano Teixeira.' },
    ],
    photos: [
      { url: '/1998 “1 Encontro de Administração Municipal da Zona da Mata”.jpg', caption: '1 Encontro de Administração Municipal da Zona da Mata' },
      { url: '/1998 “Autoridades participantes da mesa-redonda.”.jpg', caption: 'Autoridades participantes da mesa redonda.' },
      { url: '/1998 “O professor João Adamor.”.jpg', caption: 'O professor João Adamor.' },
      { url: '/1998 “O Reitor Geraldo Martins Chaves cumprimenta o professor Marcos Tanure Sanábio, vendo-se, à direita, o professor Juraci Aureliano Teixeira.”.jpg', caption: 'O Reitor Geraldo Martins Chaves cumprimenta o professor Marcos Tanure Sanábio, vendo-se, à direita, o professor Juraci Aureliano Teixeira.' },
      { url: '/1998 “Os formandos e os homenageados da Turma de Janeiro de 1988 da Universidade Federal de Viçosa.”.jpg', caption: 'Os formandos e os homenageados da Turma de Janeiro de 1988 da Universidade Federal de Viçosa..' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/1998-jornal-da-ufv'
  },
  1999: {
    events: [
      { tag: 'ensino', title: 'Aula Inaugural da Pós-Graduação em Gestão Estratégica', desc: 'Realização da aula inaugural do Curso de Pós-Graduação Lato Sensu em Gestão Estratégica, com preenchimento total das vagas ofertadas.' },
      { tag: 'ensino', title: '6º Ciclo de Estudos Pedagógicos', desc: 'Realizado em janeiro de 1999, este ciclo reuniu mais de 200 educadores para analisar os impactos da então recente Lei de Diretrizes e Bases (LDB). O Professor Adriel Rodrigues de Oliveira teve participação central no evento.' },
      { tag: 'ensino', title: 'IV Congresso e IV Mostra de Ciências Humanas, Letras e Artes', desc: 'Iniciativa conjunta das universidades federais de Minas Gerais para debater o papel das ciências humanas na universidade contemporânea.' },
      { tag: 'reconhecimento', title: 'Participação da Profa. Nina Rosa da Silveira Cunha', desc: 'A professora atua como uma das orientadoras do projeto "Minuto Gerencial", coordenando estudantes do PET de Administração.' },
      { tag: 'ensino', title: 'Pós-Graduação Lato Sensu em Gestão Estratégica', desc: 'O DAD anunciou a criação do curso coordenado pela Professora Telma Regina da C. G. Barbosa.' },
    ],
    photos: [
      { url: '/1999 “Formandos de Março de 1999”.png', caption: 'Formandos de Março de 1999.' },
      { url: '/1999 “O pró-reitor Walmer Faroni e os novos membros da CMA”.png', caption: 'O pró-reitor Walmer Faroni e os novos membros da CMA.' },
      { url: '/1999 “Parte do público do seminário ”.jpg', caption: 'Parte do público do seminário.' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/1999-jornal-da-ufv'
  },
  2000: {
    events: [
      { tag: 'ensino', title: 'Segunda Turma de Gestão Estratégica e Novo Laboratório', desc: 'Avaliação do projeto de Pós-Graduação para a Agência de Desenvolvimento de Ubá (2ª turma em Gestão Estratégica). Efetivação do novo Laboratório de Informática estruturado com recursos do PROIN.' },
      { tag: 'nomeacao', title: 'Contratação de Docentes Substitutos', desc: 'Homologação e divulgação do resultado dos concursos para professores substitutos nas áreas Contábil Financeira e de Gerenciamento e Sistemas de Informações.' },
      { tag: 'infraestrutura', title: 'Novo Curso em Ubá e Liberação de Salas no Subsolo', desc: 'Aprovação do curso em "Gestão Empresarial" em Ubá.' },
      { tag: 'infraestrutura', title: 'Agradecimento por Instalação da Sala do CACE', desc: 'Liberação de 4 salas no subsolo do anexo ao Prédio de Ciências Humanas para abrigar o CACE, monitoria, almoxarifado/arquivo morto e pequenas reuniões. Agradecimento formal pela cessão e instalação da sala destinada ao Centro Acadêmico de Consultoria Empresarial (CACE) localizada no anexo do prédio do departamento.' },
      { tag: 'gestao', title: 'Encontro Mineiro de Empresas', desc: 'O evento reuniu representantes de diversas empresas juniores e entidades de classe para discutir o mercado de trabalho.' },
      { tag: 'ensino', title: 'Formandos de Janeiro de 2000', desc: 'A colação de grau da Turma de Janeiro de 2000 reuniu 530 formandos, a maior da instituição até então.' },
    ],
    photos: [
      { url: '/2000 “A diretora Nina Rosa da Silveira Cunha recebe a homenagem dos funcionários da DRH”.jpg', caption: 'A diretora Nina Rosa da Silveira Cunha recebe a homenagem dos funcionários da DRH.' },
      { url: '/2000 “Momento da entrega do material sos representantes da Luve ”.png', caption: 'Momento da entrega do material aos representantes da Luve.' },
      { url: '/2000 “O futebol dos veteranos”.jpg', caption: 'O futebol dos veteranos.' },
      { url: '/2000 “Os Formandos de Janeiro de 2000”.png', caption: 'Os Formandos de Janeiro de 2000.' },
      { url: '/2000 “Os Formandos de Outubro de 2000”.png', caption: 'Os Formandos de Outubro de 2000.' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/2000-jornal-da-ufv'
  },
  2001: {
    events: [
      { "tag": "extensao", "title": "Planejamento dos 25 Anos do Curso", "desc": "Definição de que a Comissão de Extensão, o coordenador do curso e a chefia do DAD apresentariam uma proposta para a celebração do vigésimo quinto aniversário do curso de Administração." },
      { "tag": "ensino", "title": "Demanda de Pós-Graduação em Ponte Nova", "desc": "Debate sobre a solicitação da Faculdade de Ciências Contábeis (FACCO) de Ponte Nova (MG) para o oferecimento de uma turma de Pós-Graduação Lato Sensu." },
      { "tag": "extensao", "title": "Aprovação da Programação Festiva", "desc": "Submissão e aprovação formal, com alterações, da proposta com a programação do evento comemorativo dos 25 anos do Curso de Administração." },
      { "tag": "ensino", "title": "Encerramento de Turma em Ubá", "desc": "Comunicação oficial sobre a conclusão das atividades e fechamento da primeira turma do Curso de Pós-Graduação Lato Sensu realizado na cidade de Ubá." },
      { tag: 'gestao', title: 'I Meeting de Administração', desc: 'Evento idealizado para oferecer cursos de curta duração com o tema "Novas Tecnologias e Administração".' },
      { tag: 'ensino', title: 'Posse de Chefes de Departamento', desc: 'O reitor empossa novos chefes, incluindo o professor Walmer Faroni no Departamento de Administração (DAD).' },
      { tag: 'reconhecimento', title: 'Excelência em Administração', desc: 'O curso de Administração da UFV manteve a avaliação "A" consecutivamente desde 1997.' },
    ],
    photos: [
      { url: '/2001 “Autoridades que compuseram a mesa de abertura no meeting de administração”.png', caption: 'Autoridades na mesa de abertura do Meeting de Administração.' },
      { url: '/2001 “Cleiton, Jorge Alberto e Alessandra”.jpg', caption: 'Cleiton, Jorge Alberto e Alessandra.' },
      { url: '/2001 “Formandos de Agosto de 2001”.png', caption: 'Formandos de Agosto de 2001.' },
      { url: '/2001 “Mesa que presidiu a posse dos novos chefes de departamentos”.jpg', caption: 'Mesa que presidiu a posse dos novos chefes de departamentos.' },
      { url: '/2001 “Os Formandos de Março de 2001”.png', caption: 'Os Formandos de Março de 2001.' },
      { url: '/2001 “Processo Seletivo de 2001”.png', caption: 'Processo Seletivo de 2001.' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/2001-jornal-da-ufv'
  },
  2002: {
    events: [
      { tag: 'ensino', title: 'Homenagens dos Formandos', desc: 'Novos profissionais prestam reconhecimento ao paraninfo Walmer Faroni e à Profa. Telma Regina. (AVERIGUAR VERICIDADE)' },
      { tag: 'ensino', title: 'Empreendedorismo e Inovação', desc: 'Curso focado em inovação para profissionais ligados ao Centev/UFV e Incubadora de Empresas.' },
      { "tag": "ensino", "title": "Mudança de Nomenclatura em Pós-Graduação", "desc": "Aprovação por unanimidade da alteração do nome do Curso de Pós-Graduação Lato Sensu de 'Gestão Empresarial' para 'Gestão e Diagnóstico Empresarial', por proposição do professor Jailson de Oliveira Arieira." },
      { "tag": "ensino", "title": "Novas Turmas de Especialização 2002/2003", "desc": "Aprovação unânime da proposta da professora Telma Regina C.G. Barbosa para abertura de novas turmas em Gestão Estratégica e em Gestão e Diagnóstico Empresarial, incluindo homologação de calendário e custos." },
      { "tag": "ensino", "title": "Parceria UFV e IETEC em Gestão Ambiental", "desc": "Apresentação da proposta do professor Flávio Alencar d' Araújo Couto para criação da pós-graduação lato sensu em Política e Gestão Ambiental, a ser oferecida em Belo Horizonte via convênio com o IETEC." },
      { "tag": "gestao", "title": "Boas-vindas a Novos Docentes", "desc": "Acolhimento formal e boas-vindas aos quatro novos professores recém-contratados que iniciaram suas atividades no departamento no dia 01 de julho de 2002." },
      { "tag": "gestao", "title": "Novo Coordenador da Biblioteca Setorial", "desc": "Comunicação da nomeação do Administrador Sérgio Augusto Pereira Monteiro para o cargo de coordenador da Biblioteca Setorial do DAD, em substituição à professora Eliene Cristina Barros Ribeiro." },
      { "tag": "ensino", "title": "Oferta de Pós-Graduação para 2003", "desc": "Aprovação por unanimidade do oferecimento de duas novas turmas de pós-graduação lato sensu em Gestão Estratégica e em Diagnóstico Empresarial para o ano letivo de 2003." },
      { "tag": "gestao", "title": "Diretrizes Acadêmicas e Consolidação de Cursos", "desc": "Discussão de informes do CCH em Guiricema, com destaque para o direcionamento estratégico voltado para a consolidação de cursos novos na instituição." },
    ],
    photos: [
      { url: '/2002 “Autoridades discutem o Centev”.jpg', caption: 'Autoridades discutem o Centev.' },
      { url: '/2002 “Formandos de Maio de 2002”.png', caption: 'Formandos de Maio de 2002.' },
      { url: '/2002 “Formandos de Setembro de 2002”.png', caption: 'Formandos de Setembro de 2002.' },
      { url: '/2002 “O servidor Daniel assina o livro de posse”.jpg', caption: 'O servidor Daniel assina o livro de posse.' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/2002-jornal-da-ufv'
  },
  2003: {
    events: [
      { "tag": "ensino", "title": "Expansão da Pós-Graduação para Ubá", "desc": "Aprovação unânime para abertura de nova turma de Gestão e Diagnóstico Empresarial na cidade de Ubá (MG), com previsão de início em maio de 2003 e término em agosto de 2004." },
      { "tag": "gestao", "title": "Reformulação do Núcleo de Estágio", "desc": "Comunicação sobre o andamento das tratativas e diretrizes institucionais acerca da reformulação do Núcleo de Estágio da UFV." },
      { "tag": "infraestrutura", "title": "Convênio DAD e MASTERMAQ", "desc": "Formalização de parceria com a empresa MASTERMAQ para a cessão de softwares especializados voltados ao suporte da prática de contabilidade no departamento." },
      { "tag": "ensino", "title": "Novas Ofertas e Curso em Gestão Municipal", "desc": "Aprovação unânime para abertura de turma em Gestão Estratégica e Diagnóstico Empresarial (2004-2006) e aprovação da primeira turma do novo curso de pós-graduação lato sensu em Gestão Municipal." },
      { tag: 'infraestrutura', title: 'Comemoração do 15º Aniversário do DAD', desc: 'Sessão solene celebra os 15 anos de consolidação do departamento como unidade de prestígio.' },
      { tag: 'ensino', title: 'Atividades do Curso de Administração', desc: 'Aula da Saudade ministrada pelo professor José de Arimateia de Oliveira.' },
    ],
    photos: [
      { url: '/2003 “Formandos de Março de 2003”.png', caption: 'Formandos de Março de 2003.' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/2003-jornal-da-ufv'
  },
  2004: {
    events: [
      { "tag": "ensino", "title": "Projeto do Stricto Sensu em Administração Pública", "desc": "Apreciação e aprovação unânime do Projeto de Criação do Curso de Pós-Graduação Stricto Sensu focado na área de Administração Pública/Gestão Municipal." },
      { "tag": "ensino", "title": "Alteração no Projeto do Stricto Sensu", "desc": "Aprovação unânime do novo escopo do projeto de Stricto Sensu (Processo n.º 2348/2004) e determinação do arquivamento do processo de criação inicial." },
      { "tag": "gestao", "title": "Aprovação do Stricto Sensu no CCH", "desc": "Comunicação oficial de que o curso de Pós-Graduação Stricto Sensu em Administração obteve aprovação formal perante o Conselho Departamental do CCH." },
      { "tag": "ensino", "title": "Homologação do Mestrado e Reconhecimento de Ciências Contábeis", "desc": "Boas-vindas a nova professora, homologação final da aprovação do Mestrado em Administração e divulgação da Portaria MEC n.º 1628 que oficializou o reconhecimento do curso de Ciências Contábeis." },
      { "tag": "gestao", "title": "Dia do Administrador e Visita da Diretora do CCH", "desc": "Lembrança do Dia do Administrador e recepção do pedido de visita da Diretora do Centro de Ciências Humanas, Letras e Artes." },
      { "tag": "gestao", "title": "Moções de Congratulação ao Departamento", "desc": "Recebimento de Moção do CCH pela aprovação do Mestrado em Administração Pública e Moção de Congratulação da Câmara Municipal de Viçosa pelo sucesso do I Seminário de Contabilidade." },
      { "tag": "extensao", "title": "Avaliação CAPES e I Jornada Acadêmica", "desc": "Destaque para correspondência da CAPES sobre a avaliação do Mestrado em Administração Pública e anúncio de abertura da I Jornada Acadêmica de Administração." },
      { "tag": "gestao", "title": "Integração de Professora Voluntária", "desc": "Aprovação unânime do processo de solicitação de uma docente para se integrar ao corpo docente do DAD na condição de professora voluntária." },
      { "tag": "extensao", "title": "Treinamento para a Secretaria do Meio Ambiente", "desc": "Esclarecimentos sobre o Termo Aditivo ao Convênio entre IEF, UFV e SIF para treinamento de chefes e supervisores da Secretaria do Meio Ambiente de MG, realizado nas instalações da UFV." },
      { tag: 'gestao', title: 'Eleição para Reitor', desc: 'Definição da lista tríplice com vitória da chapa dos professores Carlos Sediyama e Cláudio Furtado Soares.' },
      { tag: 'ensino', title: 'Novos Chefes de Departamentos', desc: 'Professor Walmer Faroni é reconduzido e empossado como chefe do DAD pra o novo quadriênio no dia 15 de dezembro de 2004.' },
      { tag: 'gestao', title: 'Nova Diretoria da Funarbe', desc: 'Posse da nova gestão executiva com Orlando Monteiro da Silva como diretor-presidente.' },
    ],
    photos: [
      { url: '/2004 “Carlos Sediyama e Cláudie Furtado foram eleitos como os primeiros da lista encaminhada ao MEC.”.jpg', caption: 'Carlos Sediyama e Cláudio Furtado na lista do MEC.' },
      { url: '/2004 “Carlos Sedylama (dir) e Cláudio Furtado. ”.jpg', caption: 'Carlos Sediyama e Cláudio Furtado.' },
      { url: '/2004 “Formandos de Janeiro de 2004”.png', caption: 'Formandos de Janeiro de 2004.' },
      { url: '/2004 “Formandos de Julho de 2004”.png', caption: 'Formandos de Julho de 2004.' },
      { url: '/2004 “O professor Orlando Monteire da Silva fala durante sua posse”.jpg', caption: 'O professor Orlando Monteiro da Silva fala durante sua posse.' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/2004-jornal-da-ufv'
  },
  2005: {
    events: [
      { tag: 'ensino', title: 'Aulas da Saudade', desc: 'Homenagem ao professor Antônio de Figueiredo Vieira na última aula simbólica da turma.' },
      { tag: 'infraestrutura', title: 'Capacitação para Gestores', desc: 'Ciclo de palestras voltado para dirigentes, ministrado por professores experientes do DAD.' },
      { tag: 'gestao', title: 'Criação da Coopera', desc: 'Comissão instituída para otimização dos procedimentos e rotinas administrativas da universidade.' },
      { tag: 'extensao', title: 'Convênio entre o DAD e a SEMAD', desc: 'No início de abril de 2005, o Departamento de Administração (DAD) da UFV realizou o curso "Desenvolvimento de Habilidades para Chefes e Supervisores". Fruto de um convênio com a Semad, o treinamento capacitou 58 diretores do IEF, da FEAM e da própria secretaria no Centro de Ensino de Extensão. Sob a condução de professores da universidade, as palestras abordaram temas cruciais como planejamento, motivação, gerenciamento e ética no serviço público.' },
      { tag: 'extensao', title: 'Alinhamento Estratégico da Gestão Institucional', desc: 'Sob a coordenação da Pró-Reitoria de Planejamento e Orçamento, professores do Departamento de Administração (DAD) ministraram palestras sobre Planejamento Estratégico Institucional para as chefias da UFV. Integradas ao Plano de Gestão 2005–2008, as atividades abordaram a definição de missão, valores e metas institucionais. O encontro subsidiou debates subsequentes com os diretores de centros para desdobrar as diretrizes para todos os departamentos da universidade.' },
    ],
    photos: [
      { url: '/2005 “Formandos de Janeiro de 2005”.png', caption: 'Formandos de Janeiro de 2005.' },
      { url: '/2005 “Os participantes do treinamento assistem palestrs no CEE.”.jpg', caption: 'Participantes do treinamento no CEE.' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/2005-jornal-da-ufv'
  },
  2006: {
    events: [
      { "tag": "ensino", "title": "Criação do Curso em Controladoria e Finanças", "desc": "Aprovação unânime da proposta para a criação do Curso de Pós-Graduação Lato Sensu em Controladoria e Finanças, com previsão de início para novembro de 2006." },
      { "tag": "ensino", "title": "Implantação do Curso de Administração a Distância (EAD)", "desc": "Definições dos coordenadores e comissão para o curso EAD (Resolução 5/2006), com início em agosto nos polos de Viçosa e Florestal, além de autorização para compra de equipamentos e seleção de 11 tutores." },
      { "tag": "infraestrutura", "title": "Reorganização do Espaço Físico do DAD", "desc": "Aprovação unânime de nova proposta de infraestrutura: manutenção da Biblioteca Setorial no local de origem e remanejamento das salas do PET, grupo de pesquisa, mestrado e coordenações." },
      { "tag": "gestao", "title": "Nomeação de Novos Professores", "desc": "Comunicação oficial das portarias de nomeação dos professores Robson Zuccolotto e Magnus Luiz Emmendoerfer para o corpo docente." },
      { tag: 'ensino', title: 'Aulas da Saudade', desc: 'Homenagem ao professor Antônio de Figueiredo Vieira na última aula simbólica da turma.' },
      { tag: 'infraestrutura', title: 'Capacitação para Gestores', desc: 'Ciclo de palestras voltado para dirigentes, ministrado por professores experientes do DAD.' },
      { tag: 'gestao', title: 'Criação da Coopera', desc: 'Comissão instituída para otimização dos procedimentos e rotinas administrativas da universidade.' },
    ],
    photos: [
      { url: '/2005 “Formandos de Janeiro de 2005”.png', caption: 'Formandos de Janeiro de 2005.' },
      { url: '/2005 “Os participantes do treinamento assistem palestrs no CEE.”.jpg', caption: 'Participantes do treinamento no CEE.' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/2006-jornal-da-ufv'
  },
  2007: {
    events: [

      { "tag": "ensino", "title": "Novas Turmas de Lato Sensu (2007-2009)", "desc": "Aprovação unânime da abertura de duas turmas para as especializações em Gestão Estratégica e em Gestão e Diagnóstico Empresarial." },

      { "tag": "gestao", "title": "Mudança de Nome do Departamento de Administração", "desc": "Aprovação unânime da proposta de alteração da denominação do nome do Departamendo de Administração, que passou a se chamar oficialmente Departamento de Administração e Contabilidade." },

      { "tag": "gestao", "title": "Homenagem por Aposentadoria", "desc": "Entrega solene de placa de homenagem à professora Maria da Graça Nemer Jentzsch pela sua aposentadoria. 17 de julho de 2007" },

      { tag: 'gestao', title: 'Cace Consultoria', desc: 'Consolidação da empresa júnior na prestação de serviços para a Zona da Mata mineira.' },
    ],
    photos: [

    ],
    articleUrl: 'https://atom.ufv.br/index.php/2007-jornal-da-ufv'
  },
  2008: {
    events: [
      { "tag": "extensao", "title": "Cace Consultoria Jr. apresenta workshop em encontro mundial de empresas juniores", "desc": "A Cace Consultoria Jr, empresa júnior de Administração da UFV, participou da 3ª Junior Enterprise World Conference na cidade de Porto, em Portugal. O evento propiciou uma rica troca de experiências sobre as diferenças entre os modelos de gestão aplicados por brasileiros e europeus. N 1.417" },
      { "tag": "extensao", "title": "15 Anos da CACE", "desc": " Ata nº 259/2008 – 12 de agosto de 2008. A professora Suely de Fátima Ramos Silveira compartilhou informes institucionais destacando a celebração dos 15 anos da Central de Empresas Juniores (CACE)." },
      
      { "tag": "extensao", "title": "Parabéns aos 20 anos do PET", "desc": "Ata nº 262/2008 – 09 de dezembro de 2008. Encerrando o ciclo de celebrações registradas e homenagens no final do ano, o DAD manifestou-se formalmente durante a reunião para parabenizar o grupo PET e a sua respectiva coordenação em virtude das festividades e comemorações relativas aos seus 20 anos de existência. Destaque aos preparativos do evento 'DAD & PET 20 Anos', aviso sobre a I Mostra de Administração Pública na Sala de Conferências." },

    ],
    photos: [{ url: '/2007 “O professor Guerrero (3º ‡ esquerda) durante sua visita ao Centev.”.jpg', caption: 'O professor Guerrero durante sua visita ao Centev.' }],
    articleUrl: 'https://atom.ufv.br/index.php/2008-jornal-da-ufv'
  },
  2009: {
    events: [
      { tag: 'extensao', title: 'Dissertação do Mestrado em Administração Recebe Diploma de Honra ao Mérito em Convenção Mineira', desc: 'O trabalho intitulado "Contribuição de Melhoria e a Lei de Responsabilidade Fiscal: Um estudo de caso da Mesorregião da Zona da Mata Mineira", de autoria de Tainá Rodrigues Gomide Souza Pinto, figurou entre os premiados na Convenção Mineira de Contabilidade, sediada em Belo Horizonte entre os dias 21 e 23 de outubro. A pesquisa foi agraciada com o Diploma de Honra ao Mérito no Prêmio Internacional de Produção Contábil Técnico-Científica Prof. Dr. Antônio Lopes de Sá. O artigo premiado consiste em um recorte de sua dissertação desenvolvida no Programa de Mestrado em Administração da UFV, sob a orientação do professor Walmer Faroni. Nº 1.428 (12 de dezembro de 2009)' },

      { "tag": "gestao", "title": "Criação do IPPDS e Recursos do CT-INFRA", "desc": "17 de dezembro de 2009 – Ata nº 273/2009 O Colegiado aprovou o referendo referente à proposta de criação do Instituto de Políticas Públicas e Desenvolvimento Sustentável da UFV (IPPDS), uma iniciativa conjunta que envolve os departamentos de Administração, Economia, Economia Doméstica e Economia Rural. Também foi anunciada a aprovação de recursos financeiros do CT-INFRA/FINEP destinados às instalações físicas do Centro de Ciências Humanas, Letras e Artes, englobando a construção de um hall com lanchonete e recepção, um auditório, uma sala para computadores e uma biblioteca para os programas de pós-graduação. Por fim, foi aprovado o calendário do curso de pós-graduação lato sensu em Controladoria e Finanças, cuja oferta foi definida para o dia 10 de abril de 2010." },

      { tag: 'gestao', title: 'Posse do Professor Luiz Antônio Abrantes', desc: 'O professor Luiz Antônio Abrantes, em 30 de dezembro de 2009, toma posse como pró-reitor de Gestão de Pessoas da UFV. Nº 1.421 (28 de fevereiro de 2009)' },
      { tag: 'extensao', title: 'Lançamento da Revista APGS', desc: 'Em setembro de 2009 o DAD lança a primeira edição da revista eletrônica Administração Pública e Gestão Social. N 1.427 ' },
    ],
    photos: [
      { url: '/2009 “A professora Tainá.”.jpg', caption: 'A professora Tainá.' },
      { url: '/2009 - CAPA REVISTA PGS.png', caption: 'CAPA REVISTA PGS' },
      { url: '/2009 “O pré-reitor Luiz Antônio Abrantes faz seu pronunciamento, tendo o lado o diretor-assistente Ely Rosa.”.jpg', caption: 'O pró-reitor Luiz Antônio Abrantes em seu pronunciamento.' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/2009-jornal-da-ufv'
  },

  2010: {
    events: [
      { "tag": "ensino", "title": "Orçamentos de Pós-Graduação e Criação do NUPEC", "desc": "16 de março de 2010 – Ata nº 274/2010. Foi formalizada a criação do Núcleo de Pesquisa em Contabilidade (NUPEC), voltado para a Iniciação Científica do curso de Ciências Contábeis." },

      { "tag": "gestao", "title": "Visita do Reitor e Futuros Cursos X", "desc": "12 de novembro de 2010 – Ata nº 278/2010 O Colegiado recebeu uma visita oficial do Magnífico Reitor e da Vice-Reitora da instituição, acompanhados pelo Diretor do Centro de Ciências Humanas, Letras e Artes. No encontro, discutiu-se o andamento do curso de Ciências Contábeis, cujas instâncias haviam aprovado o Projeto Pedagógico, e debateu-se a futura criação de uma graduação em Administração no horário diurno, bem como a inserção da área de Administração Pública na grade. Houve também relatos sobre a criação e o panorama do curso de pós-graduação em Administração Pública e o funcionamento do curso Lato Sensu em Controladoria e Finanças. X" },

      { tag: 'extensao', title: 'O II Emapegs e a Coordenação de Marco Aurélio', desc: 'Ocorreu em 10 e 11 de junho o segundo EMAPEG coordenado pelo professor Marco Aurélio Marques Ferreira, do DAD.' },

      { tag: 'reconhecimento', title: 'Reconhecimento no Aniversário do Curso', desc: 'O curso de Administração do DAD celebrou seus 35 anos de fundação consolidando-se como uma referência na formação de profissionais capacitados para atuar em diversos setores da economia. O evento contou com a presença de autoridades acadêmicas, como o reitor e o diretor do CCH.' },

      { tag: 'reconhecimento', title: 'Excelência no Enade e Destaque do Curso de Administração', desc: 'O curso de Administração do DAD UFV alcançou um resultado histórico ao obter a nota máxima 5 no Exame Nacional de Desempenho dos Estudantes (Enade) de 2009, consolidando sua posição entre os melhores do país. Nº 1.436' },

    ],
    photos: [{ url: '/2010 O professor Walmer Faroni.png', caption: 'O professor Walmer Faroni.' },],
    articleUrl: 'https://atom.ufv.br/index.php/2010-jornal-da-ufv'
  },

  2011: {
    events: [
      { tag: 'ensino', title: 'Resumo do Livro e Temas Abordados', desc: 'A obra intitulada "Administração Pública, Gestão Social e Economia Solidária" foi organizada pelos professores Marco Aurélio Ferreira Marques, Magnus Luiz Emmendoerfer e Rodrigo Gava, da UFV.' },
      
       { tag: 'ensino', title: 'Lançamento de Curso e Divulgação no Dia do Administrador', desc: 'Lançamento de Curso e Divulgação no Dia do Administrador na Ata n.º 285/2011 (1 de setembro de 2011) Na reunião realizada no primeiro dia de setembro de dois mil e onze, no âmbito de novos cursos de pós-graduação, a professora Nina Rosa da Silveira Cunha expôs informações sobre o andamento do curso lato sensu em Gestão Estratégica e Ambiental. Na mesma oportunidade, tratando sobre o apoio institucional do departamento a eventos e datas comemorativas, o Senhor Presidente prestou esclarecimentos e informou aos presentes sobre as ações ativas de divulgação e homenagem ao Dia do Administrador, realizadas por meio de veiculações em jornal e outdoor em parceria com o Conselho Regional.' },

    ],
    photos: [],
    articleUrl: 'https://atom.ufv.br/index.php/2011-jornal-da-ufv'
  },
  2012: {
    events: [
    
      { tag: 'gestao', title: 'Recondução da professora Suely no IPPDS', desc: 'O Instituto de Políticas Públicas e Desenvolvimento Sustentável da Universidade Federal de Viçosa realizou a cerimônia de posse de sua nova diretoria, reconduzindo a professora Suely de Fátima Ramos Silveira, do Departamento de Administração, ao cargo de diretora para um novo mandato.' },
      { tag: 'reconhecimento', title: 'Homenagem à Professora Suely de Fátima Ramos Silveira', desc: 'A professora Suely de Fátima Ramos Silveira, vinculada ao Departamento de Administração, foi agraciada com a Medalha de Mérito em Extensão durante as festividades do 85º aniversário de fundação da Universidade Federal de Viçosa. Essa honraria reconhece sua trajetória de dedicação e as relevantes contribuições oferecidas à instituição ao longo de sua carreira, especialmente no âmbito das atividades extensionistas que aproximam a universidade da comunidade. A entrega da medalha ocorreu em uma sessão solene que reuniu autoridades, profissionais e membros da comunidade acadêmica para rememorar fatos históricos e prestar homenagens àqueles que ajudaram a construir a trajetória vitoriosa da UFV.' },

    ],
    photos: [],
    articleUrl: 'https://atom.ufv.br/index.php/2012-jornal-da-ufv'
  },
  2013: {
    events: [
      { "tag": "gestao", "title": "Homenagens e Menções Honrosas", "desc": "Ata nº 294/2013 – 1º de março de 2013 Nesta reunião, o Colegiado registrou homenagens e menções honrosas a membros do corpo docente pelas suas conquistas acadêmicas, parabenizando o professor Magnus Luiz Emmendoerfer em decorrência da reclassificação da revista Administração Pública e Gestão Social como periódico B3 pela Qualis e também a professora Suely de Fátima Ramos Silveira por conta de sua indicação oficial como pesquisadora do CNPq." },


      { "tag": "gestao", "title": "Avaliação da CAPES", "desc": "Ata nº 299/2013 – 12 de dezembro de 2013. Curso de pós graduação em administração, em nível de mestrado, conquista conceito 4 na CAPES." },

    ],
    photos: [],
    articleUrl: 'https://atom.ufv.br/index.php/2013-jornal-da-ufv'
  },

  2014: {
    events: [
      
      { "tag": "infraestrutura", "title": "Obras do Anexo e Mudança de Departamento de Letras", "desc": "Ata nº 302/2014 (11 de junho de 2014) No início desta sessão, a presidência apresentou informes sobre as instalações físicas do departamento, destacando a conclusão da primeira etapa da obra do anexo do DAD, a qual ficava dependendo da liberação de recursos financeiros por parte da UFV para que pudesse ser finalizada. Adicionalmente, foi comunicada aos presentes a mudança do Departamento de Letras e a respectiva reforma do prédio." },

    ],
    photos: [],
    articleUrl: ''
  },

  2015: {
    events: [
   
      { "tag": "gestao", "title": "Comemoração de Aniversários", "desc": "Ata nº 310/2015 (25 de agosto de 2015)  ao departamento, que compreendem as comemorações dos 15 anos do Curso de Ciências Contábeis, 10 anos da Pós-Graduação em Administração, 40 anos do curso de Administração e os 50 anos do Departamento de Administração e Contabilidade." },

      { "tag": "ensino", "title": "Implantação do Curso de Doutorado", "desc": "Comunicação oficial sobre o início das atividades do novo curso de doutorado, com previsão de implantação para o primeiro semestre de 2016." },

      { tag: 'reconhecimento', title: 'Homenagens a Titulares e Aposentadoria no Departamento', desc: '24 de fevereiro de 2015: Nesta data, foram prestadas homenagens aos professores Nina Rosa da Silveira Cunha e Walmer Faroni pela aprovação para a categoria de professores titulares do departamento. Adicionalmente, o professor Antônio de Figueiredo Vieira comunicou o início de seu processo de aposentadoria, recebendo agradecimentos formais da professora Nina Rosa da Silveira Cunha, em nome de todo o departamento, pela convivência e dedicação ao longo de seus 25 anos de atividades docentes no DAD/UFV.' },

      { tag: 'ensino', title: 'Tramitação do Doutorado em Administração', desc: '17 de abril de 2015: No campo da pós-graduação, informou-se que o processo para a criação do curso de doutorado em Administração foi aprovado pelo Conselho de Ensino, Pesquisa e Extensão (CEPE) e encaminhado para a avaliação da CAPES.' },
      
      { tag: 'gestao', title: 'Sucessão na Chefia do Departamento e Eleição de Simone Martins', desc: '26 de junho de 2015: A reunião marcou a sucessão na chefia do Departamento de Administração e Contabilidade, onde a professora Simone Martins foi eleita para o cargo com 17 votos favoráveis. Na ocasião, a nova chefe eleita e a Diretora do Centro de Ciências Humanas parabenizaram o professor Djair Cesário de Araújo pela gestão que se encerrava.' }
    ],
    photos: [],
    articleUrl: ''
  },
  2016: {
    events: [
      { tag: 'gestao', title: 'Professor Magnus Luiz Emmendoerfer é o novo coordenador do Programa de Pós-Graduação Stricto Sensu', desc: 'ATA 317. 04 de março de 2016: No âmbito das nomeações, o professor Magnus Luiz Emmendoerfer foi formalizado como o novo coordenador do Programa de Pós-Graduação Stricto Sensu.' },

      { tag: 'gestao', title: ' Nova Coordenação de Curso', desc: 'ATA 319. 15 de abril de 2016: No âmbito acadêmico, o professor Djair Cesário de Araújo foi anunciado como o novo coordenador do curso de Administração.' },

      { tag: 'reconhecimento', title: 'Congratulações a Docente', desc: 'ATA 321 2. 10 de junho de 2016: Registro formal de congratulações ao professor Marco Aurélio Marques Ferreira por sua indicação ao cargo de Diretor de Publicação e Comunicação pela Associação Brasileira de Administração Pública.' },

      { tag: 'reconhecimento', title: 'Nova Editoria da Revista APGS', desc: 'ATA 322. 01 de julho de 2016: O professor Josiel Lopes Valadares foi nomeado para o cargo de editor adjunto da revista Administração Pública e Gestão Social (APGS).' },

      { tag: 'gestao', title: 'Tutoria do PET', desc: 'ATA 323. 12 de agosto de 2016: Eleição do professor Thiago de Melo Teixeira da Costa como o novo tutor do PET-ADM.' },

      { tag: 'reconhecimento', title: 'Premiações Docentes e Evento Gestão em Perspectivas', desc: 'ATA 324. 09 de setembro de 2016: O Colegiado registrou congratulações ao professor Josiel Lopes Valadares pelo recebimento do Prêmio Guerreiro Ramos de Gestão Pública e ao professor Magnus Luiz Emmendoerfer pela realização do Simpósio Internacional de Administração Pública (SINAP).' },
    ],
    photos: [],
    articleUrl: ''
  },
  2017: {
    events: [

      { tag: 'reconhecimento', title: 'Prestação de Contas e Legado da Primeira Chefe do DAD', desc: 'Ata nº 328/2017. 24 de agosto de 2017: Durante a prestação de contas da gestão 2015-2017, foram destacados avanços significativos na infraestrutura e organização do departamento, como a preparação do plano de ocupação do anexo do CCH I, a ampliação do espaço físico para pós-graduandos e a criação de novas salas de aula e de iniciação científica. No âmbito administrativo e de pessoal, ressaltou-se a recuperação da vaga de administrador do DAD e o fortalecimento de comissões de apoio. A professora Simone Martins foi homenageada pelos docentes presentes, que a parabenizaram pelo legado de profissionalismo e dedicação, destacando o marco histórico de ter sido a primeira mulher a ocupar a chefia do departamento.' },

    ],
    photos: [],
    articleUrl: ''
  },
  2018: {
    events: [
      { tag: 'gestao', title: 'Novos Integrantes', desc: 'Ata nº 335/2018. 22 de março de 2018: Nesta data, o Senhor Presidente deu as boas-vindas ao professor Antônio Carlos Brunozi Júnior como o novo integrante do Colegiado.' },
      { tag: 'gestao', title: 'Nomeação de Coordenadores de Administração e Contabilidade', desc: 'Ata nº 336/2018. 26 de abril de 2018: Durante a reunião, o Colegiado formalizou a nomeação de novos coordenadores para os cursos oferecidos pelo departamento, sendo designado o professor Evandro Rodrigues de Faria para a coordenação do curso de Administração e o professor Antônio Carlos Brunozi Júnior para a coordenação do curso de Ciências Contábeis.' },

      { tag: 'extensao', title: 'Encontro Brasileiro de Administração Pública', desc: 'Ata nº 337/2018. 15 de junho de 2018: Ocorreu o V Encontro Brasileiro de Administração Pública em Viçosa, realizado pelo DAD e coordenado pelo professor Magnus Luiz Emmendoerfer.' },


      { tag: 'reconhecimento', title: 'Aniversário do PET ADM', desc: 'Ata nº 339/2018. 14 de setembro de 2018: Comemoração dos 30 anos de existência do PET ADM no departamento.' },

    ],
    photos: [],
    articleUrl: ''
  },

  2019: {
    events: [
    
      {
        tag: 'infraestrutura',
        title: 'Ocupação do Terceiro Andar do Acesso ao CCH1',
        desc: '(18 de junho de 2019) O DAD assume oficialmente a ocupação do terceiro andar do edifício CCH1.'
      },
   
    ],
    photos: [],
    articleUrl: ''
  },

  2020: {
    events: [
      { "tag": "gestao", "title": "Inauguração de Auditório", "desc": "Ata 351/2020 – 13 de março de 2020. Entre os informes apresentados, destacou-se a inauguração do auditório do CCH1, espaço que passou a ser compartilhado com o DEE. Na mesma ocasião, a professora Tainá Rodrigues Gomide Souza Pinto informou o Colegiado a respeito do início das atividades e das aulas do curso MBA em Gestão Empresarial." },

      { "tag": "ensino", "title": "Aprovação da Pós-Graduação em Administração Pública Municipal", "desc": "Ata 352/2020 – 15 de maio de 2020. O curso de pós-graduação lato sensu em Administração Pública Municipal foi oficialmente aprovado pela PPG." },

      { "tag": "gestao", "title": "Premiações", "desc": "Ata 357/2020 – 13 de novembro de 2020. O Senhor Presidente parabenizou publicamente o professor Magnus Luiz Emmendoerfer pelo encerramento de seu mandato e excelente trabalho na Sociedade Brasileira de Administração Pública, além de estender as homenagens ao professor Alan Ferreira de Freitas e ao pós-graduando Samuel Soares da Silva pelo prêmio de melhor artigo recebido. " },

      { tag: 'infraestrutura', title: 'Atualização da logomarca', desc: ' Atualização da logomarca oficial do DAD.' },

    ],
    photos: [],
    articleUrl: ''
  },
  2021: {
    events: [
      { "tag": "infraestrutura", "title": "Melhorias nas Instalações e Doação de Máquinas", "desc": "Ata 359/2021 – 26 de fevereiro de 2021. Melhoria das estruturas das salas da CACE, CECCO e PET e aprimoramento da rede de internet. " },

      { "tag": "infraestrutura", "title": "Reformas e Produção de Documentário", "desc": "Ata 360/2021 – 26 de março de 2021. Nesta reunião, foi anunciada a reforma em andamento na sala de reuniões e a aquisição de novos computadores para o departamento. Informou-se ainda que os professores Afonso Augusto Teixeira de Freitas de Carvalho Lima, Nina Rosa da Silveira Cunha e Walmer Faroni iniciaram os trabalhos de produção de um documentário dedicado a registrar a história do Departamento de Administração e Contabilidade. Na mesma ocasião, foram instalados dois novos gabinetes na ala administrativa do DAD e comunicou-se o andamento da contratação de Brendow de Oliveira Fraga para atuar na área de Marketing." },

      { "tag": "infraestrutura", "title": "Acolhimento de Docentes e Obras de Infraestrutura", "desc": "Ata 362/2021 – 07 de maio de 2021. Ficou registrado o acolhimento formal e as boas-vindas do Colegiado aos professores Leandro Rivelli Teixeira Nogueira, que teve sua redistribuição devidamente efetivada, e Brendow de Oliveira Fraga, que assumiu o cargo de professor substituto na área de Marketing. O período também foi marcado pela execução de obras de infraestrutura predial, pela compra de novas mobílias destinadas à sala de reuniões, pela aquisição de aparelhos de ar-condicionado, pela substituição de projetores de dados (data-shows) e por novas melhorias implementadas na rede de internet do DAD." },

      { "tag": "ensino", "title": "Criação de Disciplinas e Planejamento do ReceptiviDAD", "desc": "Ata 363/2021 – 25 de junho de 2021. O Colegiado aprovou a criação de novas disciplinas voltadas para o programa de pós-graduação, sendo elas: ADM 614 (Gestão Pública em Organizações), ADM 621 (Desenvolvimento Territorial, Inovação e Empreendedorismo no Setor Público), ADM 631 (Teoria das Organizações), ADM 633 (Teoria Crítica da Sociedade, Populismo e Democracia), ADM 643 (Métodos Quantitativos de Avaliação de Impacto em Políticas Públicas), ADM 644 (Instituições e Políticas Públicas) e ADM 645 (Análise de Políticas Públicas). Além disso, foi apresentada a estruturação do evento \"ReceptiviDAD\", programado para ocorrer em 14 de julho com o objetivo de recepcionar os estudantes calouros por meio de apresentações da coordenação, da matriz curricular dos cursos e de movimentos estudantis, prevendo inclusive a criação de um vídeo institucional com a apresentação dos professores do departamento. Registrou-se também o planejamento de uma atividade complementar de acolhimento organizada pelo Centro Acadêmico de Administração na primeira semana de aulas." },
      
      { "tag": "ensino", "title": "Ata 364/2021 – 30 de julho de 2021. Aula Inaugural do PPGADM e Curso na Semana do Fazendeiro", "desc": "Nesta data, informou-se sobre a realização da aula inaugural do PPGADM ministrada pela professora Celina Souza, bem como sobre a oferta de uma segunda turma do Minter. Também foi destacada a oferta de um curso de extensão conduzido pelo departamento durante as atividades da Semana do Fazendeiro." },

      { "tag": "extensao", "title": "Aniversário da Revista de Ciências Humanas", "desc": "Ata 366/2021 – 20 de agosto de 2021. Nesta data, foi informada a realização de uma comemoração especial em virtude do aniversário da Revista de Ciências Humanas. Como parte das celebrations da revista vinculada ao centro, anunciou-se uma chamada de trabalho direcionada para uma edição comemorativa da publicação." },
      
      { "tag": "infraestrutura", "title": "Parceria com FUNARBE e Ampliação do Supermercado Escola", "desc": "Nesta reunião, foram apresentadas importantes atualizações sobre a infraestrutura e instalações voltadas ao suporte acadêmico do departamento em parceria com a FUNARBE. Registrou-se a inauguração oficial da nova sala de aula prática, além de benfeitorias estruturais na sala de aula teórica. Adicionalmente, foi comunicada a execução de uma obra de ampliação na infraestrutura do supermercado Escola, visando aprimorar o espaço físico de apoio logístico para a realização das aulas práticas." },

      { "tag": "infraestrutura", "title": "Adequação para o Retorno Presencial", "desc": "Nesta sessão extraordinária, foi formalmente comunicado pelo chefe do departamento que as dependências físicas e as instalações do DAD encontravam-se plenamente prontas, estruturadas e adequadas para acolher o retorno das atividades letivas na modalidade presencial." },
      { "tag": "ensino", "title": "Abertura de MBA e Homenagem ao Professor Walmer Faroni", "desc": "Nesta ocasião, o Colegiado aprovou o oferecimento e a abertura de uma nova turma para o curso de MBA em Gestão Empresarial, cujo projeto pedagógico foi estruturado para início em março de 2022, prevendo as atividades em formato presencial. Na mesma data, definiu-se no cronograma de eventos que a homenagem oficial do departamento ao professor Walmer Faroni, em reconhecimento aos seus relevantes serviços prestados, seria realizada de forma presencial no mês de janeiro subsequente." },
      { "tag": "gestao", "title": "Preparativos para o Retorno Presencial e Confraternização", "desc": "Nesta data, o encerramento do ano letivo foi marcado por comunicações da chefia do departamento, que destacou em seus informes os preparativos organizacionais para o retorno definitivo das atividades às instalações físicas em caráter presencial, bem como a realização de um evento de confraternização entre os membros do departamento." },

      { tag: 'infraestrutura', title: 'Obras e Melhorias Físicas', desc: 'Reforma da sala de videoconferência, estruturação das salas da CACE, CECCO e PET, e instalação de novos gabinetes docentes.' },
      { tag: 'reconhecimento', title: 'Documentário Histórico', desc: 'Início da produção de um documentário sobre a história do Departamento de Administração e Contabilidade pelos professores Afonso, Nina Rosa e Walmer.' },
      { tag: 'ensino', title: 'Evento ReceptiviDAD', desc: 'Criação de evento de acolhimento aos calouros com apresentação de matriz curricular e vídeo institucional do corpo docente.' },
      { tag: 'ensino', title: 'MBA em Gestão Empresarial', desc: 'Retomada do curso de MBA na modalidade remota e aprovação de nova turma presencial para 2022.' },
      { tag: 'reconhecimento', title: 'Comércio Justo', desc: 'UFV recebe o título de Universidade Latino-americana pelo Comércio Justo após acordo de cooperação internacional.' },
      { tag: 'reconhecimento', title: 'Despedida do Prof. Walmer Faroni', desc: 'Homenagem e celebração em reconhecimento aos serviços prestados pelo professor Walmer Faroni ao DAD após decisão de não renovar vínculo voluntário.' },
      { tag: 'pesquisa', title: 'Publicação de Destaque', desc: 'Lançamento do primeiro livro sobre Cooperativismo na Mineração no Brasil, vinculado a docente do departamento.' },
    ],
    photos: [],
    articleUrl: ''
  },
  2022: {
    events: [
      { "tag": "gestao", "title": "Vacância na Área de Marketing e Estudo de Demandas", "desc": "Durante a reunião virtual realizada no dia vinte e oito de janeiro de dois mil e vinte e dois, o Colegiado discutiu a migração de um docente para a área de Marketing do Departamento de Administração e Contabilidade (DAD), motivada por um pedido de vacância na referida área. Diante dessa movimentação nas vagas do departamento, foi deliberada a necessidade de que a Comissão de Ensino realizasse um estudo detalhado sobre as demandas do curso de Administração para balizar as próximas decisões de ocupação de vagas docentes no departamento." },
      { "tag": "ensino", "title": "Pós-Graduação Externa, Vaga para Estratégia e Comércio Justo", "desc": "No dia vinte e cinco de fevereiro de dois mil e vinte e dois, foram aprovadas as atuações de professores do DAD em programas de pós-graduação externos, incluindo o suporte e a indicação de docentes como orientadores para a criação do Curso de Mestrado Profissional em Administração Pública do IF Baiano, além da atualização da participação no Mestrado Profissional da UEA. Na mesma ocasião, definiu-se que o preenchimento da vaga decorrente de vacância seria destinado à área de Estratégia. Além disso, houve o anúncio de que, no dia nove de março, a instituição seria formalmente reconhecida como a segunda universidade do Brasil parceira do projeto Comércio Justo." },
      { "tag": "ensino", "title": "Cátedra UNESCO, Concurso de Estratégia e Internacionalização", "desc": "Em vinte e cinco de março de dois mil e vinte e dois, o Colegiado homologou ad referendum o Acordo Internacional entre a UNESCO e a UFV para a Cátedra em Economia Criativa e Políticas Públicas. Também foi aprovado o edital do concurso para professor da classe adjunto na área de Estratégia, com exigência de titulação em nível de graduação e doutorado em Administração. No âmbito de eventos institucionais, foi aprovada a formação de uma comissão docente para organizar o ReceptiviDAD, evento voltado ao acolhimento dos calouros de 2022. Posteriormente, na reunião de trinta e um de março, que contou com a visita do Diretor do Centro de Ciências Humanas (CCH), foram abordadas as diretrizes de internacionalização, incluindo a oferta piloto de disciplinas em língua inglesa na graduação e na pós-graduação como estratégia de internacionalização em casa." },
      { "tag": "gestao", "title": "Professores Substitutos, Indicações de Condecorações e Lato Sensu", "desc": "Na reunião de seis de maio de dois mil e neo-visto e dois, a chefia deu as boas-vindas oficiais aos novos professores substitutos do departamento. No âmbito das celebrações e condecorações institucionais, foram apresentados os prazos finais para as indicações das condecorações anuais da universidade, abrangendo a Medalha de Ouro Peter Henry Rolfs do Mérito em Extensão, Mérito Administrativo, Mérito em Pesquisa e Mérito em Ensino, além da indicação para a Medalha de Ordem do Mérito do Ex-Aluno da UFV. Adicionalmente, informou-se o andamento do curso lato sensu em Gestão Pública Municipal, programado para iniciar em setembro na cidade de Conceição do Mato Dentro." },
      { "tag": "infraestrutura", "title": "Resultado de Concurso, Disciplinas de Contábeis e Demandas de Espaço", "desc": "No dia primeiro de julho de dois mil e vinte e dois, o Colegiado aprovou o resultado final do concurso para professor adjunto da área de Estratégia, que resultou em quatro candidatos aprovados. Na área de ensino, foi chancelada a criação das novas disciplinas de extensão CCO 380, CCO 381, CCO 382, CCO 383 e CCO 384, voltadas para o curso de Ciências Contábeis. No dia vinte e dois de julho, os debates se concentraram nas demandas de instalações físicas e infraestrutura estrutural do departamento. Foram pleiteados espaços para a instalação física do Núcleo de Apoio Contábil e Fiscal (NAF) e do Núcleo de Estágio dos cursos de Administração e Ciências Contábeis. Na mesma reunião, os representantes da Liga de Empreendedorismo da UFV e do projeto Aulão Solidário apresentaram suas iniciativas e justificaram solicitações para a ocupação de salas fixas nas dependências do DAD." },
      { "tag": "ensino", "title": "Histórica Reformulação do Curso de Administração e Espaço Físico", "desc": "No dia cinco de agosto de dois mil e vinte e dois, o departamento aprovou uma ampla e histórica reformulação no curso de Administração. Esta atualização da matriz curricular envolveu a criação de dezessete novas disciplinas, contemplando matérias como Tópicos Contemporâneos em Marketing, Comportamento do Consumidor, Logística, Gestão por Competências, Introdução ao Mercado de Capitais, Valuation, Plano de Negócios e diferentes Projetos de Extensão. O Colegiado registrou que a aprovação dessa proposta representou um marco de consolidação e atualização de conteúdos voltados ao contexto contemporâneo da graduação. No tocante à infraestrutura, a chefia apresentou a planilha de distribuição e ocupação das salas e o Colegiado decidiu não ceder espaços para atender a demandas externas." },
      { "tag": "extensao", "title": "Parcerias Governamentais, Acordo Internacional e Início de Curso", "desc": "Durante a reunião realizada em dezesseis de setembro de dois mil e vinte e dois, foram validados importantes acordos institucionais vinculados ao fomento de atividades ligadas ao departamento. No campo das cooperações externas, formalizou-se o Acordo de Parceria entre o DAD-UFV e a Prefeitura Municipal de Congonhas (MG) para o desenvolvimento do Plano Municipal de Desenvolvimento de Economia Criativa. Adicionalmente, foi estabelecido um Acordo de Parceria com a Prefeitura Municipal de Belo Horizonte voltado para a estruturação dos Indicadores Culturais do Sistema Municipal de Cultura, bem como um amplo convênio internacional envolvendo a UFV, a Universidad Complutense de Madrid (UCM) e a Erasmus University Rotterdam para potencializar ações acadêmicas. No âmbito do ensino voltado ao público externo, comunicou-se o início das atividades do curso lato sensu em Gestão Pública Municipal, sediado no município de Conceição do Mato Dentro." },
      { "tag": "infraestrutura", "title": "Programa 5S, Transferência de Acervo e Mostra Científica", "desc": "No dia treze de outubro de dois mil e vinte e dois, o Colegiado tratou de modificações significativas nas instalações físicas e no gerenciamento do espaço físico ocupado pelo departamento. Foi apresentada uma reestruturação nas dependências físicas do DAD sob o Programa 5S, executada por uma equipe técnica de cooperação integrada por estudantes de Administração, que promoveu melhorias organizacionais evidenciadas por registros fotográficos. Em termos de alocação de bens, o Colegiado aprovou a transferência integral do acervo da Biblioteca Setorial do DAD para a Biblioteca Central. Por fim, no plano dos eventos e celebrações institucionais, aprovou-se ad referendum a realização da I Mostra Científica e Tecnológica da Cátedra UNESCO em Economia Criativa e Políticas Públicas, agendada para ocorrer no Centro de Artes e Convenções da Universidade Federal de Ouro Preto (UFOP)." },
      { "tag": "gestao", "title": "Confraternização Natalina e Atividades Descentralizadas", "desc": "Em reunião ocorrida no dia seis de dezembro de dois mil e vinte e dois, o departamento alinhou os preparativos organizacionais para a sua Confraternização Natalina tradicional. Na mesma data, foram apresentadas atualizações sobre as atividades acadêmicas descentralizadas, destacando-se a realização do segundo encontro presencial do curso lato sensu em Gestão Pública Municipal, ocorrido diretamente no município parceiro de Conceição do Mato Dentro." },

      { tag: 'gestao', title: 'Período Híbrido de Transição (PHT)', desc: 'Definição de diretrizes para o retorno presencial das disciplinas práticas e manutenção do formato remoto para teóricas.' },
      { tag: 'infraestrutura', title: 'Expansão do Laboratório', desc: 'Proposta de ampliação da capacidade do laboratório de informática para 40 computadores e renovação tecnológica dos gabinetes.' },
      { tag: 'ensino', title: 'Expansão Regional', desc: 'Criação do curso lato sensu em Gestão Pública Municipal em parceria com a prefeitura de Conceição do Mato Dentro.' },
      { tag: 'gestao', title: 'Organização de Espaços Estudantis', desc: 'Criação de mapa de salas e formulário de regras para ocupação do prédio por Ligas Acadêmicas e Centros Acadêmicos.' },
      { tag: 'reconhecimento', title: 'Excelência na Pós-Graduação', desc: 'O Programa de Pós-Graduação em Administração (PPGAdm) conquista o Conceito 5 na avaliação quadrienal da CAPES.' },
      { tag: 'gestao', title: 'Projeto 5S no DAD', desc: 'Implementação do Projeto 5S para melhoria da organização e do ambiente de trabalho nas dependências do departamento.' },
    ],
    photos: [],
    articleUrl: ''
  },
  2023: {
    events: [
      { "tag": "ensino", "title": "Recepção de Calouros ReceptiviDAD", "desc": "Ata 385/2023 (17 de março de 2023). Nesta reunião, a coordenadora do curso de Ciências Contábeis, professora Tainá Rodrigues Gomide Souza Pinto, detalhou as atividades programadas para o evento \"RECEPTIVIDAD\", agendado para ocorrer entre os dias 21 e 23 de março de 2023. O evento comemorativo e acadêmico foi estruturado para promover a integração dos novos estudantes calouros com o corpo docente e os coordenadores do departamento, incluindo a realização de uma aula magna." },
      { "tag": "extensao", "title": "Instalações do NAF e Dia da Contabilidade", "desc": "Ata 386/2023 (14 de abril de 2023). O professor Wender Fraga Miranda compartilhou atualizações sobre as instalações físicas do Núcleo de Apoio Fiscal (NAF), um projeto de extensão estruturado sob termo de cooperação com a participação de estudantes de Administração, Ciências Contábeis, Economia e Direito. Foi informado que o núcleo passou a funcionar na casa 48 da Vila Gianetti, compartilhando o espaço com o Laboratório de Prática Jurídica do Departamento de Direito. Adicionalmente, foi anunciado um evento comemorativo em celebração ao Dia da Contabilidade, agendado para os dias 24 e 25 de abril de 2023 no auditório do CCH1, contando com a colaboração de profissionais da Receita Federal." },
      { "tag": "gestao", "title": "Galeria dos Chefes e Sucesso do ReceptiviDAD", "desc": "Ata 387/2023 (19 de maio de 2023) –. O colegiado apreciou a elaboration de um projeto cultural e de homenagem voltado para a criação de uma exposição de fotos dos professores que já exerceram a chefia do Departamento de Administração e Contabilidade. Durante a discussão, sugeriu-se a implementação de uma galeria virtual contendo o histórico e as biografias dos ex-chefes no site oficial do DAD, além da confecção de um álbum físico de fotografias como registro de recordação. Na mesma oportunidade, o professor Wender Fraga Miranda registrou formalmente seu agradecimento e satisfação pelo engajamento coletivo no sucesso do evento ReceptiviDAD." },
      { "tag": "gestao", "title": "Medalha de Mérito e Uai Summit Viçosa", "desc": "Ata 389/2023 (14 de julho de 2023). Durante o encontro, o professor Alan Ferreira de Freitas compartilhou o envolvimento da Liga de Empreendedorismo da UFV (LEV) como uma das organizadoras do \"Uai Summit Viçosa\", classificado como o maior evento de inovação corporativa da região. Promovido em parceria com a ViçosaTec e o grupo CSC, o evento foi projetado com o propósito de debater casos reais de sucesso em inovação e transformação digital. Previamente, na Ata 387/2023, o departamento também formalizou uma homenagem ao aprovar a indicação do professor Marcelo José Braga para receber a Medalha Peter Henry Rolfs do Mérito em Pesquisa, reconhecendo sua trajetória institucional." },
      { "tag": "extensao", "title": "Eventos Científicos e Extensão no DAD", "desc": "Ata 390/2023 (15 de setembro de 2023). O encerramento da reunião foi marcado por felicitações ao professor Josiel Lopes Valadares pela condução do \"V Simpósio de Inovação, Empreendedorismo e Gestão Pública\" (SIEGEP). Complementarmente, foram apresentados os preparativos para o evento \"Gestão em Perspectiva\", programado para o dia 17 de outubro de 2023, englobando palestras e painéis com a participação de egressos de Administração e Ciências Contábeis e o suporte de entidades como CACE, CECCO e PET. Por fim, a professora Simone Martins estendeu um convite para o evento \"Troca de Saberes sobre Ações e Políticas para o Envelhecimento e Velhices\", agendado para os dias 25 e 26 de outubro de 2023." },
      { "tag": "extensao", "title": "Relato do Gestão em Perspectiva e Lançamento de Livro", "desc": "Ata 391/2023 (20 de outubro de 2023). O professor Wender Fraga Miranda apresentou um relatório consolidado sobre a execução do evento \"Gestão em Perspectiva\", direcionando agradecimentos formais à chefia, aos servidores técnico-administrativos e às organizações estudantis envolvidas pelo apoio prestado. Na mesma sessão, a professora Simone Martins convidou a comunidade para o evento conjunto \"AE Minas Gerais\", realizado em parceria com a Secretaria de Estado de Desenvolvimento Social de Minas Gerais (Sedese-MG) e a Rede de Apoio à Pessoa Idosa. O acontecimento também serviu de palco para o lançamento oficial do livro intitulado “A Universidade e o Envelhecimento Populacional: Diálogos e Experiências em Construção no Brasil”, sediado no Instituto de Políticas Públicas e Desenvolvimento Sustentável (IPPDS)." },
      { "tag": "extensao", "title": "Confraternização Natalina e Encontro LabQuali", "desc": "Ata 392/2023 (17 de novembro de 2023). No segmento de assuntos gerais da reunião, o Presidente comunicou formalmente o agendamento da celebração de confraternização natalina do departamento, definida para o dia 15 de dezembro de 2023. Adicionalmente, o professor Bruno Tavares partilhou informações sobre a realização do \"I Encontro de Pesquisa Qualitativa LabQuali/UFV\", cujo acontecimento foi marcado para o dia 30 de novembro de 2023 nas dependências do Instituto de Políticas Públicas e Desenvolvimento Sustentável (IPPDS)." },
      { "tag": "gestao", "title": "Comissão de Acolhimento e Atividades da CECCO", "desc": "Ata 393/2023 (08 de dezembro de 2023). Nesta última sessão do ano, o presidente anunciou a instituição da comissão encarregada da recepção aos novos calouros, designando os professores Diego Costa Mendes, Tainá Rodrigues Gomide Souza Pinto, Fernanda Cristina da Silva e Layon Carlos Cezar para a organização do acolhimento. O encontro também abriu espaço para uma apresentação comemorativa e de resultados conduzida pela diretoria da Empresa Júnior CECCO, representada por Maria Eduarda Viana, Diego Nogueira de Freitas e Jonas Souza David, que expuseram o histórico de membros, metas batidas, mídias sociais e a consolidação de 74 contratos de prestação de serviços fechados no período." },
      { tag: 'gestao', title: 'Nova Tutoria PET', desc: 'Nomeação do professor Josiel Lopes Valadares como o novo tutor do PET Administração.' },
      { tag: 'ensino', title: 'Dia da Contabilidade', desc: 'Evento comemorativo com a participação de profissionais da Receita Federal no auditório do CCH1.' },
      { tag: 'reconhecimento', title: 'Memória Institucional', desc: 'Aprovação do projeto da galeria de fotos e biografias dos ex-chefes do departamento (física e virtual).' },
      { tag: 'infraestrutura', title: 'Programa PROLADI', desc: 'Seleção de propostas para modernização de laboratórios didáticos através de recursos institucionais.' },
      { tag: 'gestao', title: 'Comissão de TI', desc: 'Criação de comissão específica para centralizar as demandas tecnológicas e de manutenção do Laboratório de Informática.' },
      { tag: 'ensino', title: 'Nova Coordenação PPGAdm', desc: 'Nomeação do professor Antônio Carlos Brunozi Júnior como coordenador da Pós-Graduação.' },
       
    ],
    photos: [],
    articleUrl: ''
  },
  2024: {
    events: [
      { "tag": "gestao", "title": "Homenagem ao Dia das Mulheres e Melhorias na Infraestrutura", "desc": "Ata 394/2024 – 08 de março de 2024. Nesta data, o colegiado realizou uma homenagem a todas as mulheres em comemoração ao Dia Internacional das Mulheres. Na dimensão das instalações físicas e infraestrutura do departamento, foram transmitidos informes sobre a realização de serviços de dedetização e de limpeza na caixa d’água, além da manutenção dos aparelhos de ar-condicionado localizados na sala de conferência e no laboratório de informática. Também foi comunicada a chegada de 15 novos computadores, a execução de obras de pintura na sala da CECCO e no laboratório de informática, bem como a aquisição de dois suportes para banners e backdrop. Adicionalmente, registrou-se a previsão de que no ano de dois mil e vinte e seis serão comemorados os cinquenta anos do curso de Administração e os cem anos da Universidade Federal de Viçosa." },
      { "tag": "infraestrutura", "title": "Aquisições do Edital PROLADI e Demandas do Laboratório", "desc": "Ata 395/2024 – 05 de abril de 2024. No âmbito das instalações e melhorias estruturais do departamento, informou-se que, por meio do edital PROLADI, foram adquiridos inicialmente vinte e cinco computadores e, posteriormente, o Laboratório de Informática foi contemplado com mais duas unidades. Diante disso, a presidência da Comissão do Laboratório solicitou formalmente o aporte de mais computadores, cadeiras e softwares de uso geral para o aprimoramento do espaço." },
      { "tag": "gestao", "title": "Homenagem da SBAP e Comunicação nos Gabinetes", "desc": "Ata 396/2024 – 12 de julho de 2024. Nesta reunião, o departamento registrou uma homenagem conferida pela Sociedade Brasileira de Administração Pública, que agraciou o Programa de Pós-Graduação em Administração pelos relevantes serviços prestados. Em relação às ferramentas de comunicação das instalações físicas, foi apresentada pelo representante dos servidores a possibilidade de passar a utilizar o número de telefone fixo do gabinete como uma conta de WhatsApp Business." },
      { "tag": "infraestrutura", "title": "Menção de Inovação do NIT e Orçamentos de Infraestrutura", "desc": "Ata 399/2024 – 06 de dezembro de 2024. Na última reunião do ano, o departamento celebrou o recebimento de uma menção de Difusão da Cultura de Proteção da Propriedade Intelectual e Inovação, concedida ao DAD durante a comemoração dos 25 anos do Núcleo de Inovação Tecnológica (NIT/UFV). Em relação à infraestrutura e projetos das instalações físicas, foi programada a realização da dedetização do prédio para o dia 26 de dezembro. Além disso, houve a apresentação e aprovação do orçamento elaborado pela Tetu (Empresa Júnior do curso de Arquitetura e Urbanismo) destinado ao projeto da sala de metodologias ativas, no valor de R$ 4.400,00 divididos entre o DAD e o Departamento de Economia, junto com o orçamento para a reforma do hall do DAD, estipulado em R$ 1.600,00." },
      { tag: 'infraestrutura', title: 'Revitalização e Novos Equipamentos', desc: 'Recepção de 15 novos computadores via edital PROLADI e manutenção geral de ar-condicionado e pinturas (CECCO e Laboratório).' },
      { tag: 'reconhecimento', title: 'Prêmio SBAP', desc: 'Homenagem da Sociedade Brasileira de Administração Pública pelos serviços prestados pelo PPGAdm.' },
      { tag: 'gestao', title: 'Planejamento Centenário UFV', desc: 'Início da organização da Conferência Internacional da Cátedra Unesco para 2026, ano do centenário da universidade.' },
      { tag: 'reconhecimento', title: 'Propriedade Intelectual', desc: 'DAD recebe menção honrosa pela difusão da cultura de proteção da propriedade intelectual e inovação na UFV.' },
      { tag: 'infraestrutura', title: 'Metodologias Ativas', desc: 'Aprovação de projeto para criação de sala de metodologias ativas e revitalização do hall de entrada do DAD.' },
    ],
    photos: [
    ],
    articleUrl: ''
  },

  2025: {
    events: [
      { "tag": "ensino", "title": "Andamento e Planejamento do ReceptiviDAD", "desc": "Ata 400/2025 – 24 de janeiro de 2025. Nesta data, foram transmitidos informes sobre o andamento e planejamento de recepção aos novos estudantes do departamento. Ficou definida a realização do evento ReceptiviDAD, agendado para ocorrer no período de 10 a 12 de março do corrente ano, voltado para as atividades de recepção aos calouros dos cursos de Administração e Ciências Contábeis." },
      { "tag": "gestao", "title": "Nomeação de Docente, 62 anos da ASPUV e Homenagem às Mães", "desc": "Ata 403/2025 – 09 de maio de 2025. Ocorreu o informe oficial de que a nomeação do professor Henrique Cordeiro Martins foi devidamente publicada no dia 15 de abril daquele ano. Adicionalmente, constou na pauta a abordagem sobre as celebrações e reflexões em torno dos 62 anos da ASPUV. Para encerrar as atividades da reunião, foi prestada uma homenagem especial às mães em virtude da passagem do seu dia." },
      { "tag": "infraestrutura", "title": "Condecoração do NAF e Sala de Metodologia Ativa", "desc": "Ata 404/2025 – 06 de junho de 2025. Registrou-se uma homenagem prestada pela Receita Federal, que condecorou o Núcleo de Apoio Contábil e Fiscal (NAF) da UFV em reconhecimento à parceria consolidada e pela relevante contribuição promovida em prol do progresso da educação e da cidadania fiscal brasileira. Na mesma oportunidade, foram debatidos detalhes sobre a infraestrutura e o projeto voltado à instalação física da sala de metodologia ativa." },
      { "tag": "gestao", "title": "Convite para a Confraternização Natalina do DAD", "desc": "Ata 407/2025 – 24 de outubro de 2025. Nesta reunião, os integrantes do departamento foram oficialmente informados e convidados para a confraternização natalina do DAD, cuja data de realização foi agendada para o dia 11 de dezembro." },
      { "tag": "infraestrutura", "title": "Condicionamento de Projeto à Estrutura Física", "desc": "Ata 408/2025 – 28 de novembro de 2025. Nesta sessão, deliberou-se que a aprovação de um projeto institucional ficaria estritamente condicionada à viabilização e suporte de uma estrutura física nas dependências do DAD. Por fim, o presidente reiterou o informe sobre a realização da confraternização do DAD marcada para o dia 11 de dezembro." },
      { tag: 'ensino', title: 'Evento ReceptiviDAD e Integração', desc: 'Planejamento e execução do evento de recepção aos calouros de Administração e Ciências Contábeis, com a constituição de uma banca organizadora específica.' },
      { tag: 'ensino', title: 'Doutorado em Parceria com a UEA', desc: 'Formalização do doutorado em Administração (Administração Pública) por meio de Projetos de Cooperação entre Instituições (PCI) com a Universidade do Estado do Amazonas.' },
      { tag: 'infraestrutura', title: 'Sala de Metodologia Ativa', desc: 'Início da execução do projeto da sala de metodologia ativa do departamento, com a primeira parcela paga à Tetu Jr..' },
      { tag: 'cultura', title: 'Copa DAD 2025', desc: 'Aprovação do projeto estudantil Copa DAD, visando a integração esportiva entre os cursos de Administração, Contabilidade e Economia.' },
      { tag: 'gestao', title: 'Expansão do Corpo Docente', desc: 'Nomeação e recepção oficial do professor Henrique Cordeiro Martins ao Colegiado do departamento.' },
      { tag: 'gestao', title: 'Selo UFV + Sustentável', desc: 'Adesão do DAD ao Selo UFV + Sustentável, incentivando a integração do tema em eventos e trabalhos de conclusão de curso.' },
      { tag: 'reconhecimento', title: 'Homenagem ao NAF', desc: 'Receita Federal homenageia o Núcleo de Apoio Contábil e Fiscal (NAF) da UFV por sua relevante contribuição à educação fiscal.' },
      { tag: 'reconhecimento', title: 'Premiações e Aniversários', desc: 'Celebração dos 15 anos do IPPDS e premiação de calouros de Ciências Contábeis no concurso de ideias de negócios do INOVAR 2025.' },
      { tag: 'infraestrutura', title: 'Manutenção Predial e Confraternização', desc: 'Realização de melhorias físicas (limpeza de caixa d’água, janelas e dedetização) e confirmação da confraternização natalina do DAD.' },
      { "tag": "gestao", "title": "Contratação de Estagiário de T.I. e Projeto do Memorial do DAD", "desc": "Aos doze dias do mês de agosto de dois mil e vinte e cinco, às quatorze horas, sob a presidência do professor Ronan Pereira Capobiango, o Senhor Presidente informou formalmente ao Colegiado sobre a contratação do programador estagiário Eduardo Jesus para integrar a equipe técnica do departamento. O novo colaborador assumiu a função com a missão de solucionar as demandas pendentes na área de Tecnologia da Informação (T.I.) do prédio, além de atuar diretamente como desenvolvedor responsável pelo projeto do Memorial do DAD, plataforma digital que abrigará a galeria virtual e o resgate histórico da trajetória do Departamento de Administração e Contabilidade. Em seguida, os docentes presentes manifestaram votos de boas-vindas e ressaltaram a relevância estratégica da contratação para impulsionar a modernização tecnológica e a preservação da memória institucional." },
    ],
    photos: [{ url: '/2023 - Duardin.jpg', caption: 'O Programador Estagiário, Eduardo Jesus' }],
    articleUrl: ''
  },
};