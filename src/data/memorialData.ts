import { isReadable } from 'stream';
import { MemorialData } from '../types';
import { Tag } from 'lucide-react';
import { url } from 'inspector';
import { label } from 'motion/react-client';

export const memorialData: MemorialData = {
  1974: {
    events: [
      {
        tag: 'fundacao',
        title: 'Gênese do Curso de Administração',
        desc: 'O Conselho de Graduação estudou a viabilidade de implantação do Curso de Administração de Empresas, para o qual também se pensou em uma possível diversificação em  Administração de Empresas Rurais (06 set. nº 321).',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      }
    ],
    photos: [],
    articleUrl: ''
  },

  1975: {
    events: [
      {
        tag: 'fundacao',
        title: 'A Criação do Instituto de Ciências Humanas: Primeira Passos e Aprovação',
        desc: 'Da Escola Superior de Ciências Domésticas germinaram as Ciências Humanas com a implantação do Instituto de Ciências Humanas, aprovado em duas instâncias: CEPE (Ata 72 de 1975) e CONSU (Ata 42/75). (Colocar a ATA (está no seu Whatsapp))\nO anteprojeto de implantação do Instituto foi elaborado por um Grupo de Trabalho (Portaria 506/75), tendo como membros Bel. Hamilton Martins Silveira, Professores Juraci Aureliano Teixeira, Eloy Gava e Maria da Conceição Rolim Simões. O plenário do CEPE aprovou na parte referente aos Departamentos, como proposto, deixando a posteriori o exame referente aos currículos e planos de estudo. Na reunião do CONSU a proposta do Conselheiro M. Maestri foi aprovada por unanimidade: "apoiar a implantação do Instituto de Ciências Humanas".',
        photos: [{
          url: 'public/1975 - ATA 42.75.jpeg',      // Caminho do arquivo da imagem (ex: '/foto.jpg')
          caption: 'ATA 42/75'   // Legenda ou descrição da foto
        }],
        externalLinks: [],
        articleUrl: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/a/b/3/ab3e2c941dd8e96fbadc03dc9761e014427d3fb1ea8939b02c7be861f5753f89/Edi____o_n395.pdf'
      },
      {
        tag: 'fundacao',
        title: 'Criação do Curso de Administração',
        desc: 'O Curso de Administração de Empresas estava apto a formar bacharel em Administração Pública e de Empresas, estando credenciado para os cargos técnicos de Administração do Serviço Público Federal, Estadual, Municipal, Autárquico e outros, exercendo funções de chefia ou direção, assessoramento e consultoria. Em complemento, o profissional poderia realizar pesquisas, estudos, análises, interpretação, planejamento, Implantação, соordenação e controle dos trabalhos nos campos de administração geral e outros conexos. Estava também credenciado para o magistério em matérias técnicas do campo de Administração na Organização. (12set. n.395)',
        photos: [],
        externalLinks: [],
        articleUrl: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/a/b/3/ab3e2c941dd8e96fbadc03dc9761e014427d3fb1ea8939b02c7be861f5753f89/Edi____o_n395.pdf'
      },
      {
        tag: 'ensino',
        title: 'Início das primeiras turmas de Administração',
        desc: 'O curso de Administração recebe as primeiras turmas regulares. (12set. n.395)',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      }
    ],
    photos: [],
    articleUrl: ''
  },

  1976: {
    events: [
      {
        tag: 'gestao',
        title: 'Admissão de Evaldo',
        desc: 'Admissão do docente Evaldo no Departamento de  Administração e Economia (DAE), com início das atividades em 01/11/1976.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Primeiro Vestibular',
        desc: 'Foram oferecidas 25 vagas no vestibular de 1976 para o Curso de Administração de Empresas e 25 para o curso de Ciências Econômicas (02jan. n.409)',
        photos: [],
        externalLinks: [],
        articleUrl: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/d/9/1/d91b0ad695cd2f0a5139e81f6f482ae50931a8e2a640b9219ecdf4840b6f05b1/Edi____o_n409.pdf'
      },
      {
        tag: 'gestao',
        title: 'A Comissão de Implantação e a Estruturação Administrativa do ICH',
        desc: 'Pela Portaria nº 70 de 11 de fevereiro de 1976, o Reitor designou os Professores Evonir Batista de Oliveira, Juraci Aureliano Teixeira, Sônia Coelho de Alvarenga e Maria da Conceição Rolim Simões para, em comissão, equacionamento das as providências à efetiva implantação do Instituto de Ciências Humanas, apresentando a relação numérica e nominal dos componentes de cada Departamento do Instituto, com discriminação e remanejamento de pessoal, caso necessário, à lotação dos vários Departamentos do Instituto.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Concurso Docente',
        desc: 'Os recém-criados cursos de Administração de Empresas e de Ciências Econômicas (DAE), cada qual, foi contemplado com 1 vaga para Professor Assistente (29jul. n. 437).',
        photos: [],
        externalLinks: [],
        articleUrl: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/6/f/3/6f36866d488283761f6173e291566e4ba50ee066c9fcd15dfcbc6df7b75ca5fb/Edi____o_n437.pdf'
      },
      {
        tag: 'ensino',
        title: 'Fortalecimento Institucional',
        desc: 'O Curso de Administração com 25 vagas passa a oferecer 50 vagas em seu Vestibular Unificado de 1977 (23set. n.445).',
        photos: [],
        externalLinks: [],
        articleUrl: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/0/f/8/0f84fe04fa4f52463fcd1dec80b3d545cb953b82d760bfeaabc76ad46ea9cff1/Edi____o_n445.pdf'
      }
    ],
    photos: [],
    articleUrl: ''
  },

  1977: {
    events: [
      {
        tag: 'fundacao',
        title: 'Implantação do DAE',
        desc: 'Implantação do Departamento de Administração e de Economia (DAE) e a constituição de suas respectivas Câmaras Curriculares, com nomeação do primeiro chefe do DAE, Prof. Juraci Aureliano, (19 de maio de 1977 N.° 478). O Departamento de Administração e Economia (DAE) agregava os cursos de Administração de Empresas e Economia, responsáveis pelas disciplinas das áreas de Administração, Contabilidade, Direito, Economia e Ciências Sociais. O Curso de Administração, com 25 vagas, passa a oferecer 50 vagas em seu Vestibular Unificado (23 set. n. 445).',
        photos: [],
        externalLinks: [],
        articleUrl: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/5/0/f/50f5df33d815cc0efb414e84f7390e5a4c6007d406997062ff50f104c1815097/Edi____o_n478.pdf'
      },
      {
        tag: 'extensao',
        title: 'Indicação Projeto Rondon',
        desc: 'Para o Projeto Rondon foi indicado Carlos Alberto Freire Resende, integrante do DAE, para elaborar o programa de trabalho da equipe da UFV (11ago. n.490).',
        photos: [],
        externalLinks: [],
        articleUrl: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/e/5/0/e50f424095bb6fed23bd71c1bca011e6f11238276f1c6d5028d3c9b343a6a3f9/Edi____o_n490.pdf'
      },
      {
        tag: 'gestao',
        title: 'Admissão de MARIA DA GRACA NEMER JENTZSCH',
        desc: 'Admissão da docente MARIA DA GRACA NEMER JENTZSCH no Departamento de Administração e Economia (DAE), com início das atividades em 01/12/1977.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      }
    ],
    photos: [],
    articleUrl: ''
  },

  1978: {
    events: [
      {
        tag: 'gestao',
        title: 'Admissão de JACINTO LUIZ DA SILVA',
        desc: 'Admissão do docente JACINTO LUIZ DA SILVA no Departamento de  Administração e Economia (DAE), com início das atividades em 03/04/1978.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Gestão e Liderança',
        desc: 'Alguns eventos marcaram o ano de 1978, consolidando o DAE e o CCH, com a solenidade de posse na Reitoria do Prof. Tancredo Almada Cruz como chefe do Departamento de Administração e Economia (DAE) (n. 542) e do Prof. Dilson Seabra Rocha como Diretor do Centro de Ciências Humanas, Letras e Artes (CCH). Esses e outros eventos foram abrilhantados com a apresentação do Coral da UFV, sob a regência do Prof. João Adamor Dias Neves, professor do DAE (nºs 532 e 544). Ainda nesse ano, o Prof. João Adamor Dias Neves representou a UFV no II Congresso Brasileiro de Treinamento e Desenvolvimento, uma vez que o referido professor lecionava disciplinas dessa área. O técnico do DAE, Carlos Alberto Freire Resende, torna-se Diretor do Campus Avançado de Altamira (n. 553).',
        photos: [{
          url: '/1978“Estagiaria Rondon”.png',      // Caminho do arquivo da imagem (ex: '/foto.jpg')
          caption: 'Estagiária do Rondon entrevistando produtor da região'   // Legenda ou descrição da foto
        },
        {
          url: '/1978 Vista de Cima.png',      // Caminho do arquivo da imagem (ex: '/foto.jpg')
          caption: 'A cidade de Altamira vista sob outro angulo.'   // Legenda ou descrição da foto
        },
        {
          url: '/1978 “O técnico Carlos Alberto Freire Resende”.avif',      // Caminho do arquivo da imagem (ex: '/foto.jpg')
          caption: 'O diretor do campus-. Carlos Alberto Freire, ao lado do reitor da UFV'   // Legenda ou descrição da foto
        }
        ],
        externalLinks: [],
        articleUrl: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/0/4/f/04f9c87432afedbb04d56c128c5430a9f18e70fd8f26de6b1bb547b6c4e6e551/Edi____o_n553.pdf'
      },
      {
        tag: 'ensino',
        title: 'A Transição de Instituto para Centro de Ciências Humanas (1978)',
        desc: 'Em razão das escolas superiores adotarem os centros como unidades acadêmicas, o antigo Instituto de Ciências Humanas tornou-se o Centro de Ciências Humanas, em 3 de outubro de 1978, e no qual se inserem os Departamentos de Administração e Economia, de Educação e de Letras e Artes e de Economia Doméstica (Portaria nº 940). Nessa época foram criados também os demais Centros de Ciências (CCA, CCB e CCE).',
        photos: [
          { url: '', caption: 'Coral da UFV.' },
          { url: '', caption: 'Direção do CCH.' },
          { url: '', caption: 'O professor João Adamor Dias Neves recebeu Menção Honrosa' },
          { url: '', caption: 'O técnico Carlos Alberto Freire Resende' }
        ],
        externalLinks: [],
        articleUrl: 'https://atom.ufv.br/index.php/1978-ufv-informa'
      }
    ],
    photos: [],
    articleUrl: ''
  },

  1979: {
    events: [
      {
        tag: 'gestao',
        title: 'Admissão de ADRIEL RODRIGUES DE OLIVEIRA',
        desc: 'Admissão do docente ADRIEL RODRIGUES DE OLIVEIRA no Departamento de Administração e Economia (DAE), com início das atividades em 01/03/1979.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Admissão de Docentes no DAE',
        desc: 'Em 02 de março de 1979, o Departamento de Administração e Economia (DAE) sob a presidência do Professor Tancredo Almada Cruz, foi lido o Relatório dos Trabalhos da Comissão de Seleção DAE/UFV/79, o qual aprovou por unanimidade os currículos, a nomeação e admissão dos professores Maria de Fátima Teixeira Santos, José Reinaldo Pinheiro Diniz e Alberto Esperança.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Admissão de NINA ROSA DA SILVEIRA CUNHA',
        desc: 'Admissão da docente NINA ROSA DA SILVEIRA CUNHA no Departamento de Administração e Economia (DAE), com início das atividades em 17/09/1979.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Inclusão em Comissão e Programação da I Semana do Administrador',
        desc: '21 a 26 de Maio de 1979 foi programada a realização da I Semana do Administrador, uma celebração institucional composta por um cronograma diário ATA N.4',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Admissão de GUALBERTO FERREIRA DA SILVA',
        desc: 'Admissão do docente GUALBERTO FERREIRA DA SILVA no Departamento de Administração e Economia (DAE), com início das atividades em 05/06/1979.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Professores Evaldo Barbosa e José Maria Assumem as Coordenações do DAE',
        desc: '25 de outubro de 1979 O departamento reuniu-se e o presidente comunicou formalmente as novas nomeações e designações de liderança para os cursos de graduação. Conforme anunciado, os professores Evaldo Guimarães Barbosa e José Maria Alves da Silva foram oficialmente nomeados para assumir a Coordenação do Curso de Administração e a Coordenação do Curso de Economia, respectivamente.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'reconhecimento',
        title: 'Prof. João Adamor da UFV Recebe Menção Honrosa em Concurso Nacional',
        desc: 'Acontecimento meritório para a UFV e o DAE foi a conquista pelo Prof. João Adamor Dias Neves do DAE da Menção Honrosa do III Concurso Nacional de Monografia sobre Administração para o Desenvolvimento, promovido pela Secretaria de Modernização e Reforma Administrativa, pertencente à Secretaria de Planejamento da Presidência da República. O referido Professor concorreu com o trabalho intitulado Avaliação de Desempenho de Professores e Técnicos da Universidade Federal de Viçosa. (18jan.n.564).',
        photos: [{
          url: '/1979 “Novos Diretores”.webp',      // Caminho do arquivo da imagem (ex: '/foto.jpg')
          caption: 'A posse dos novos diretores.'   // Legenda ou descrição da foto
        }
        ],
        externalLinks: [],
        articleUrl: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/3/1/5/315a4978baa8c3e8ee2d94b1bbd7d7a785d41767e9f639294d00986c176e4a66/Edi____o_n564.pdf'
      },
      {
        tag: 'gestao',
        title: 'UFV em Destaque: Menção Honrosa Nacional e Posse de Novos Diretores de Centro',
        desc: 'Também nesse ano foram nomeados pelo Ministro da Educação e Cultura e empossados pelo Reitor os novos Diretores dos CCA e do CCH os professores Renato Mário Del Giudice e Dilson Seabra Rocha. (08mar. n. 571).',
        photos: [],
        externalLinks: [],
        articleUrl: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/e/1/7/e17d5e0550050665b589822c339c4a89aaf490c93b9f5b459e9b2f06033ed454/Edi____o_n571.pdf'
      },
      {
        tag: 'extensao',
        title: 'Acontecimentos Marcantes no DAE: Premiação, Novas Direções e Extensão em Marketing',
        desc: 'O DAE promoveu o Curso de Marketing Bancário dirigido a bancários e estudantes do curso de Administração de Empresas, ministrado por João Adamor Dias Neves, professor da disciplina Mercadologia. Participaram do curso, representantes dos Bancos do Brasil, Bradesco e Real, bem como pessoas de Ponte Nova, Raul Soares, Teixeiras e Viçosa. O objetivo do curso foi o de compreender e de utilizar os princípios básicos de Marketing de Serviços nas atividades bancárias com nova mentalidade em relação a técnicas e métodos tecnológicos. (n. 578, n. 582).',
        photos: [],
        externalLinks: [{
          label: 'Jornal', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/6/c/c/6ccf6016e1ce5fb8e3dabb2aacd72289c6796e5dca0770c5d796e7932505abc7/Edi____o_n582.pdf'
        }],
        articleUrl: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/d/7/7/d77ef843e46d928f442c825415d1bc8e5b8dd221ea1321a7d732e4319b892992/Edi____o_n578.pdf'
      },
      {
        tag: 'cultura',
        title: 'Ciência, Liderança e Arte: O Ano de Ouro do DAE e do Coral da UFV',
        desc: 'O professor João Adamor Dias Neves regeu o Coral, abrilhantando as comemorações do 1º aniversário do Coral da UFV (03mai. n. 579). E, posteriormente, se apresentou, a convite do Coral Monlevade, no município de João Monlevade, que comemorou os seus 16 anos e da Federação Mineira de Conjuntos Corais (17mai. n. 581).',
        photos: [{
          url: '/1979 “1º aniversário do Coral da UFV.”.webp',      // Caminho do arquivo da imagem (ex: '/foto.jpg')
          caption: 'Foi um sucessoa apresentaçáão do Coral da UFV.'   // Legenda ou descrição da foto
        }
        ],
        externalLinks: [{
          label: 'Jornal', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/e/f/3/ef35dd44ff7d8aa53ebdce592d91db8a4795be01406a833279b31a9c2091e79f/Edi____o_n581.pdf'
        }],
        articleUrl: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/5/3/b/53b44469e99f99d6225b6574abb041c21ee866104b4f2eccc00899b9c2817f32/Edi____o_n579.pdf'
      },
      {
        tag: 'extensao',
        title: 'O Ano de 1979 no DAE: O Marco da 1ª Semana do Administrador',
        desc: 'Evento histórico acadêmico ocorreu em 1979 quando o DAE realizou a 1ª Semana do Administrador. Tendo como tema O Papel do Administrador e como palestrantes João Gomes Filho (Presidente do Conselho Regional de Técnicos em Administração de Empresas de Minas Gerais), Carlos Alberto Boschi (Presidente do Sindicato dos Técnicos em Administração de Empresas de Minas Gerais), Rubens A. Barbosa Filho da Secretaria Nacional de Planejamento Agrícola, e, Bianor Scelza Cavalcanti da Fundação Getúlio Vargas. Pela Universidade Federal de Minas Gerais o Prof. Maurício Roberto Vieira contemplou a plateia com a palestra Pesquisa Operacional do ponto de vista do Administrador. Dilson de Souza Camargo e Paulo Maia, ambos da Fiat Automóveis, falaram sobre Relações Industriais. (24mai. n.582).',
        photos: [{
          url: '/1979 “I Semana do Administrador”.webp',      // Caminho do arquivo da imagem (ex: '/foto.jpg')
          caption: 'Semana do Administrador, no DER.'   // Legenda ou descrição da foto
        }
        ],
        externalLinks: [],
        articleUrl: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/6/c/c/6ccf6016e1ce5fb8e3dabb2aacd72289c6796e5dca0770c5d796e7932505abc7/Edi____o_n582.pdf'
      },
      {
        tag: 'extensao',
        title: 'A Consolidação da Administração na UFV em 1979: Protagonismo Nacional, Cultura e Ensino',
        desc: 'O professor Evaldo Guimarães Barbosa do DAE participou do I Ciclo de Estudos referente ao Ensino das Ciências Administrativas, em Belo Horizonte, tendo como um dos objetivos dimensionar e caracterizar adequadamente os papéis dos técnicos em Administração. O evento foi promovido pelo MEC e reuniu personalidades como a do secretário do Ensino Superior do MEC, Guilherme Maurício Souza Marcos de la Penha; Alysson Darowish Mitraud, secretário de Apoio do MEC; Adolfo Neves Martins da Costa, diretor-presidente da Companhia de Empreendimentos Gerais; Belmiro Siqueira, assessor da Fundação Escola de Serviço Público do Estado do Rio de Janeiro; e Antônio Sérgio de Medeiros Chaves, secretário adjunto da Administração do Estado de Minas Gerais. Participaram também o professor Dilson Seabra Rocha, diretor do CCH e os professores João Adamor Dias Neves e Evaldo Guimarães Barbosa, do DAE, bem como empresários, professores, diretores e representantes da categoria profissional, que procuraram apresentar, durante a sua realização, subsídios adaptáveis à melhoria do ensino das Ciências Administrativas. (23 e 30ago. n.595 e 596).',
        photos: [],
        externalLinks: [{
          label: 'Jornal 595', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/6/0/3/603a58ed07390c225d0a7a821687226fb70bf6ecbdb81d5c8c4ebb73d3f2d024/Edi____o_n595.pdf'
        },
        {
          label: 'Jornal 596', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/7/b/2/7b268a7447a0f7854d146bb348227e877a79ad841dda8730dde5467f238598fb/Edi____o_n596.pdf'
        }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'O Pioneirismo das Ciências Sociais Aplicadas na UFV em 1979: Administração, Economia e Cultura',
        desc: 'A I Semana do Economista contou com a palestra sobre Profissão do Economista e o Ensino de Economia no Brasil, feita pelo professor Bernardo Kipmis da UnB. Durante a semana foram abordados temas como: Quadro Geral do Processo de Industrialização Recente no Brasil, Atual Política Econômica do Governo, Inflação e Índice do Custo de Vida, Capital Estrangeiro e Crescimento Econômico e, encerrando, Profissão do Economista e o Ensino de Economia no Brasil. (23ago. n.595).',
        photos: [],
        externalLinks: [{
          label: 'Jornal 595', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/6/0/3/603a58ed07390c225d0a7a821687226fb70bf6ecbdb81d5c8c4ebb73d3f2d024/Edi____o_n595.pdf'
        }],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Convênio com a Prefeitura de Ipatinga para Estágios em Administração',
        desc: 'A UFV firmou Convênio com a Prefeitura de Ipatinga que permitiu a concessão de estágios em seu Departamento de Organização e Métodos para os alunos do curso de Administração do DAE. (06set. nº 597)',
        photos: [],
        externalLinks: [],
        articleUrl: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/7/1/d/71d83e45ab019a201a2bcd8035ce902f701c012fac83b174c49452feddfd670f/Edi____o_n597.pdf'
      },
      {
        tag: 'extensao',
        title: 'Curso de Contabilidade para Auxiliares de Escritório',
        desc: 'O DAE ofereceu o Curso de Contabilidade a auxiliares de escritório, ministrado pelos professores Tancredo Almada Cruz, José Clévio Dias Casali e José Maria dos Santos (20set. n.599).',
        photos: [],
        externalLinks: [],
        articleUrl: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/c/4/b/c4bd7ebbb98fed9c064f30882630650b87e4fba4661717dc649470a854a9a946/Edi____o_n599.pdf'
      }
    ],
    photos: [
      { url: '', caption: '1º aniversário do Coral da UFV.' },
      { url: '', caption: 'Direção do CCH.' },
      { url: '', caption: 'Cursos Técnicos' },
      { url: '', caption: 'I Semana do Administrador' },
      { url: '', caption: 'I Semana do Economista' },
      { url: '', caption: 'Novos Diretores' },
      { url: '', caption: 'O professor João Adamor Dias Neves recebeu Menção Honrosa' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/1979-ufv-informa'
  },

  1980: {
    events: [
      {
        tag: 'gestao',
        title: 'Admissão de NANCI PEREIRA DE VASCONCELOS',
        desc: 'Admissão da docente NANCI PEREIRA DE VASCONCELOS no Departamento de Administração e Economia (DAE), com início das atividades em 17/03/1980.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Admissão de MILTON RODRIGUES NATALINO',
        desc: 'Admissão do docente MILTON RODRIGUES NATALINO  no Departamento de Administração e Economia (DAE), com início das atividades em 24/03/1980.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Admissão de SERGIO AUGUSTO PEREIRA MONTEIRO',
        desc: 'Admissão do servidor técnico-administrativo SÉRGIO AUGUSTO PEREIRA MONTEIRO, ocupando o cargo de ADMINISTRADOR no Departamento de Administração e Economia (DAE), com início das atividades em 06/11/1980.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Eloy Alves Filho',
        desc: 'Foi empossado "pro tempore" na chefia do Departamento de Administração e Economia o Prof. Eloy Alves Filho, substituindo o Prof. Tancredo Almada Cruz, em treinamento. (06mar. n.623).',
        photos: [{
          url: '/1979 “Novos Diretores”.webp',      // Caminho do arquivo da imagem (ex: '/foto.jpg')
          caption: 'Novos Diretores'   // Legenda ou descrição da foto
        }
        ],
        externalLinks: [],
        articleUrl: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/2/d/7/2d7673302ec754ea5858d4fbf418936a3f912e32302c427fe50fc7fccb59d99e/Edi____o_n623.pdf'
      },
      {
        tag: 'extensao',
        title: 'DAE Celebra Sucesso de Encontros de Aproximação com Estudantes',
        desc: 'Em 03 de outubro de 1980, o chefe do DAE, Professor Eloy Alves Filho, informou sobre o andamento e o impacto positivo das reuniões celebradas conjuntamente com os estudantes dos cursos de Administração de Empresas e de Ciências Econômicas.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Vagas para Auxiliar de Ensino',
        desc: 'O Departamento de Administração e Economia foi contemplado com 5 vagas para o concurso de Auxiliar de Ensino, nas áreas de Elaboração e Análise de Projetos, Contabilidade, Orçamento Público, Administração de Material e Administração de Produção e Direito. (15mar. n.633).',
        photos: [],
        externalLinks: [],
        articleUrl: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/0/a/1/0a1561a4afaea845acd6ce54844206960472c5a536123f5859d97de5266b7600/Edi____o_n633.pdf'
      },
      {
        tag: 'extensao',
        title: 'Seminário para Executivos – Executivo Game',
        desc: 'O DAE realizou de 11 a 21 de junho o Seminário para Executivos – Executivo Game, tendo como objetivo promover uma aproximação positiva entre o DAE e a comunidade empresarial de Viçosa e região, e, em Visconde do Rio Branco, convênio com a Faculdade de Ciências Econômicas, Contábeis e Administrativas de Visconde do Rio Branco, para identificar oportunidades de colaboração. A metodologia empregada foi o Jogo de Empresas, com Exercício de Gestão Simulada, e precedida de palestras sobre Marketing, Finanças, Produção e Política Empresarial. A coordenação foi do Prof. Gualberto Ferreira da Silva e palestras pelos professores do DAE (Maria Elena Barbassa, Evaldo Guimarães Barbosa, João Adamor Dias Neves, Adriel Rodrigues de Oliveira, Augusto Neves dos Reis-CPD). (04jun. n.636;19jun. n.638; 03jul. n.640 e 30out. n.657).',
        photos: [],
        externalLinks: [{
          label: 'Jornal 636', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/0/1/d/01def2ab56779e7960f1c5c5ba1d6bd231394f9f8b5e123170ef4b8493c80b5b/Edi____o_n636.pdf'
        },
        {
          label: 'Jornal 638', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/d/6/3/d6364319b1541b9a2616519a5bdd6540f0342a3306a5d9e7648fc0d6b0764324/Edi____o_n638.pdf'
        },
        {
          label: 'Jornal 640', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/7/d/3/7d33dea1f307adb8d734565639176ebe67764005ec85590ff5bc08e25e47d325/Edi____o_n640.pdf'
        },
        {
          label: 'Jornal 657', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/e/2/1/e211a5f8a1bd353fb2dd8ce952d47a43337b7f388ecfbd18a11164a99fbcfbb8/Edi____o_n657.pdf'
        },
        ],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Profa. Maria Elena Barbassa coordenou Executivo Game',
        desc: 'Outro evento promovido pelo DAE foi o Método Estudo de Caso, com a coordenação da Profa. Maria Elena Barbassa e ministrado pelo Prof. Maurício Roberto Vieira, Coordenador do Curso de Mestrado em Administração de Empresas da UFMG e coordenador da Central Regional de Casos de Minas Gerais. Participaram do Seminário professores do DAE, da Educação e membros da SEGEPLAN. A promoção do Seminário ficou por conta da UFV e da CAPES (Coordenação de Aperfeiçoamento de Pessoal de Nível Superior). O Prof. Maurício Roberto Vieira também fez palestra para os professores e alunos do DAE sobre o tema "A Administração de Empresas no Brasil e o Ensino da Administração". (11set. n.650 e  06nov. n.658).',
        photos: [],
        externalLinks: [{
          label: 'Jornal 650', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/2/2/c/22cc4f1f56cb2b5c2fd545df33d9d55a34c796a6e4cdd6482a3318132bfbda6e/Edi____o_n650.pdf'
        },
        {
          label: 'Jornal 657', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/a/7/1/a71a323bf853d9fb08578f9a29ecc38029f45781e7060e12e9970c9e44b04783/Edi____o_n658.pdf'
        }],
        articleUrl: ''
      }
    ],
    photos: [],
    articleUrl: ''
  },

  1981: {
    events: [
      {
        tag: 'extensao',
        title: 'DAE e Conselho de Extensão Promovem Curso Básico de Vendas com Especialista da SIAMAR',
        desc: 'O DAE promoveu nos dias 26 e 27 de março o Curso Básico de Vendas, ministrado pelo Prof. Nicolau Martino Netto, diretor presidente da SIAMAR – Serviço Interamericano de Marketing Imp. Exp. Ltda. e ex-gerente de Propaganda e Marketing da Union Carbide do Brasil e da Cia. Swift do Brasil. O Curso teve a participação de 200 empresários, executivos, vendedores de Viçosa, de Visconde de Rio Branco e de outras cidades, e de alunos (19mar. n.677 e 02abr. n.679).',
        photos: [],
        externalLinks: [{
          label: 'Jornal 677', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/a/7/1/a710a5661b7150c9b8af0de7860825dbbf1a7115b76f3775828968bf3ae3d780/Edi____o_n677.pdf'
        },
        { label: 'Jornal 679', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/1/7/3/17397b60ed279db4e1003b19a77ab6bc4c09f7320234057f58ffaf751171752b/Edi____o_n679.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'parceria',
        title: 'DAE e IMAM Firmam Convênio para Impulsionar a Administração Municipal em Minas Gerais',
        desc: 'O DAE e o Instituto Mineiro de Assistência aos Municípios-IMAM, da Secretaria de Estado do Interior e Justiça de Minas Gerais, assinaram convênio para desenvolver pesquisa, ensino e extensão na área de Administração Municipal. Com apoio do Programa Gilberto Melo esteve no município de Canaã, realizando o Diagnóstico da Prefeitura Municipal de Canaã, detectando as atividades prioritárias, a serem realizadas por alunos e professores dos Cursos de Administração de Empresas e de Ciências Econômicas. (19mar. n.677).',
        photos: [],
        externalLinks: [{
          label: 'Jornal 677', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/a/7/1/a710a5661b7150c9b8af0de7860825dbbf1a7115b76f3775828968bf3ae3d780/Edi____o_n677.pdf'
        },],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'II Semana do Administrador Reúne Grandes Nomes do Cenário Nacional para Debater o Panorama da Área',
        desc: 'Em comemoração à II Semana do Administrador o DAE promoveu o evento com o tema "Panorama Atual da Administração no Brasil", com participação de 300 autoridades e empresários de Viçosa e região, professores e alunos. Foram ministradas várias palestras, tendo como palestrantes Agrícola de Souza Bethlem, Professor do Mestrado de Administração da COPPE/COPPEAD que discorreu sobre o Panorama Atual da Administração no Brasil; Mário Leme Galvão e Luiz Torello falaram sobre a administração da empresa estatal da EMBRAER; Hélcio Guimarães discorreu sobre a Desburocratização e Administração; e o empresário Gabriel Donato de Andrade, da Construtora Andrade Gutierrez S. A. e da Cooperativa Agroflorestal Ltda. falou sobre a Administração da Empresa Privada Brasileira e o Cooperativismo; o Secretário de Administração do Estado de Minas Gerais, deputado José Machado Sobrinho sobre Administração Pública; o Presidente da FIAT Automóveis S.A. Miguel Augusto Gonçalves de Souza falou sobre Administração da Empresa Multinacional na Atual Conjuntura Econômica; e o presidente do Conselho Federal de Técnicos de Administração, Guilherme Quintanilha de Almeida discorreu sobre a Administração na Média Empresa Brasileira e o papel do Técnico de Administração. (14mai. n.686. 28mai. n.687).',
        photos: [{
          url: '/1981- Semana do Administrador.png',      // Caminho do arquivo da imagem (ex: '/foto.jpg')
          caption: 'O plenário na solenidade de abertura da II Semana do Administrador.'   // Legenda ou descrição da foto
        },
        {
          url: '/1981- II ADM.jpeg',      // Caminho do arquivo da imagem (ex: '/foto.jpg')
          caption: 'II Semana do Administrador.'   // Legenda ou descrição da foto
        },
        {
          url: '/1981- II Semana ADM.jpeg',      // Caminho do arquivo da imagem (ex: '/foto.jpg')
          caption: 'II Semana do Administrador.'   // Legenda ou descrição da foto
        },
        {
          url: '/1981- II Semana.jpeg',      // Caminho do arquivo da imagem (ex: '/foto.jpg')
          caption: 'II Semana do Administrador.'   // Legenda ou descrição da foto
        },
        {
          url: '/1981- II Semana do ADM.jpeg',      // Caminho do arquivo da imagem (ex: '/foto.jpg')
          caption: 'II Semana do Administrador.'   // Legenda ou descrição da foto
        }],
        externalLinks: [
          { label: 'Jornal 686', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/0/1/3/013f5e7c8d9a2b6e4f0c1d3a5e8b9c6e4f0c1d3a5e8b9c6e4f0c1d3a5e8b9c6/Edi____o_n686.pdf' },
          { label: 'Jornal 687', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/9/2/3/9235224d56b8937515a1fb047b89e1ed8ae35740c06c0403a7d8a30cb2b5b716/Edi____o_n687.pdf' }
        ],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'DAE Nomeia Professor Gualberto para a AGRIVISA',
        desc: 'Em 19 de maio de 1981 o DAE celebrou um acordo de cooperação técnica com a FUNARBE para prestar colaboração na elaboração do estatuto da AGRIVISA, com a nomeação do Professor Gualberto Ferreira da Silva para atuar na diretoria executiva da referida usina experimental de álcool.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Convênio DAE/FUNARBE: Recursos para Biblioteca e Contratação de Docentes',
        desc: 'Em 05 de junho de 1981, o chefe do departamento informou sobre um importante convênio firmado com a Companhia Canavieira de Mineração, via FUNARBE. O DAE recebeu dotação de duzentos mil cruzeiros para novos livros na biblioteca.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Prof. Gilson Faria Potsch Magalhães assume chefia do DAE',
        desc: 'Em 10 de agosto de 1981 os professores do DAE reuniram-se sob a presidência do Professor Eloy Alves Filho para deliberar sobre a indicação de nomes para a Chefia do Departamento, motivada pela futura saída do então presidente para o exterior. O Professor Gilson Faria Potsch Magalhães foi indicado para assumir a chefia do DAE.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'II Semana do Economista',
        desc: 'Com o tema Perspectiva da Economia Brasileira foi realizada a II Semana do Economista promovida pelo DAE.  (13ago. nº 698 e 20ago. nº699). *Atenção: inserir aqui o programa, as fotos e outros exemplares dos eventos. (ADICIONAR A FOTO DA CAPA QUE ESTÁ NO WHATSAPP, UMA CAPA AZUL) E FOTO PG.1 JORNAL 699',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Projeto de Planejamento Participativo em Gouveia',
        desc: 'Em Setembro de 1981 o Departamento de Administração e Economia consolidou a iniciativa de inserção e assessoria comunitária por meio do desenvolvimento de um projeto pioneiro de planejamento participativo e levantamento de demandas locais no município de Gouveia, no Estado de Minas Gerais. Esta atividade de integração acadêmica e social contou com a mobilização de estudantes dos cursos de Administração e de Ciências Econômicas da UFV.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'DAE Promove I Ciclo de Estudos Jurídicos com Grandes Nomes do Direito de Minas Gerais',
        desc: 'O I Ciclo de Estudos Jurídicos da UFV foi realizado pelo DAE, contando com palestra sobre Organização Judiciária pelo Prof. Edézio Fernandes, Coordenador da Escola Judicial, desembargador do Tribunal de Justiça de Minas Gerais, Professor da Faculdade de Direito Milton Campos e assessor jurídico da PLAMBEL; Ricardo Arnaldo Malheiros Fiuza, Presidente da OAB da seção de Minas Gerais, Prof. Aristóteles Atheniense que abordou o tema Reflexos da Economia na Legislação; sobre o tema Estatuto da Terra pelo Desembargador Paulo Viana Gonçalves da 4ª Vara Cível do Tribunal de Justiça de Minas Gerais; sobre o Sistema Tributário Nacional falou novamente o Prof. Edézio. Outras palestras também foram ministradas com grande repercussão jurídica. (15out. n.707).',
        photos: [{
          url: '/1981 - Ciclo de Estudos Juridicos.jpeg',
          caption: 'I Ciclo de Estudos Jurídicos.'
        }],
        externalLinks: [{ label: 'Jornal 707', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/7/4/3/7436edd0535cc5d9b481d6b2cfa3867a44881efd93a6338f2b38c263db47b8b0/Edi____o_n707.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Professores do DAE Integram Programação da I Semana do Contador em Ponte Nova',
        desc: 'A I Semana do Contador da Faculdade de Ponte Nova-FACCO teve a participação de professores do DAE, com o apoio Departamento de Ciências Contábeis e do Diretório Acadêmico, realizada em Ponte Nova com o tema Contabilidade-Apoio Central da Empresa. Pronunciaram palestras os professores Marcos Tanure Sanábio, Nanci Pereira de Vasconcelos e Eloy Gava, pró-reitor Acadêmico; o advogado Paulo Ivo Antonucci; e Hélio Gonçalves Moreira, pró-reitor de Assuntos Comunitários. (15out. n.707; 22out. n.708 e 05nov. n.710).',
        photos: [{ url: '/1981 - I Semana do Contador.png', caption: 'O prefeito Antônio Bartolomeu Barbosa, de Ponte Nova; o próreitor Acadêmico da UFV, professor Eloy Gava; e o estudante Leonel Del Rey de Melo, na solenidade de abertura.' }],
        externalLinks: [{ label: 'Jornal 707', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/7/4/3/7436edd0535cc5d9b481d6b2cfa3867a44881efd93a6338f2b38c263db47b8b0/Edi____o_n707.pdf' },
        { label: 'Jornal 708', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/b/9/9/b99c883437e10fa4e81e1349b0fbebb7eb21e6dff26daa6f8ed9215fe55e1f53/Edi____o_n708.pdf' },
        { label: 'Jornal 710', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/5/3/9/5395f06766b1a65969e7b931afa030db65df3027a73797f90df959bba0be8a11/Edi____o_n710.pdf' },
        ],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'DAE e Programa Gilberto Melo Promoveram Curso Pioneiro de Contabilidade Pública Municipal',
        desc: 'O Curso de Atualização de Contabilidade Pública Municipal para Auxiliares de Contabilidade teve enfoque prático e no aproveitamento da realidade apresentada por participante, reunindo representantes de várias cidades da microrregião de Viçosa (foto). O curso é pioneiro na região e, segundo seu coordenador, o professor Marcos Tanure Sanábio do DAE, visou a integrar a Universidade com as comunidades que a cercam. (19nov. n.712). (BOTAR A FOTO DA PAGINA 4, TEM UNS DOIDAO SENTADO EM UMA SALA)',
        photos: [{ url: '/1981 - Curso de Contabilidade Publica Municipal.jpeg', caption: 'Curso de Contabilidade Pública Municipal.' },],
        externalLinks: [{ label: 'Jornal 712', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/5/f/3/5f30c74e1bb354f3cd24e623198b6902096d3dd1fa1e3198b64d6575b8bd74ef/Edi____o_n712.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Professor Gilson Faria Potsch Magalhães Assume a Chefia do DAE',
        desc: 'Tomou posse como chefe do Departamento de Administração e Economia o Prof. Gilson Faria Potsch Magalhães. (26nov. n.713). Foto PG 4.',
        photos: [{ url: '/1981 - Posse Gilson.png', caption: 'Os professores José Henrique de Oliveira e Gilson Faria Potsch Ma- galháes, na solenidade de posse, com o vice-reitor Joaquim Aleixo de Souza' }],
        externalLinks: [{ label: 'Jornal 713', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/e/a/2/ea215ea81f95766eb7c665ecf2163f6f38f09651db872bae6bc060b81fae118d/Edi____o_n713.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Alunos de Administração da UFV Realizaram Visita Técnica à Sadia em Belo Horizonte',
        desc: 'Foi realizada pelos alunos do curso de Administração de Empresas do DAE, no dia 29 de outubro, uma visita de estudos à empresa Sadia Comercial Ltda., em Belo Horizonte, com o objetivo de conhecer a estrutura e a organização de vendas dos produtos Sadia. Além de proporcionar conhecimentos sobre aspectos práticos de administração e vendas, a visita trouxe outros benefícios, como a solicitação, por parte do gerente-geral da empresa, para que lhe sejam enviados currículos dos formandos em Administração de Empresas, o que pode representar um próspero mercado de trabalho. Os visitantes foram acompanhados pelo professor João Adamor Dias Neves do DAE. (10dez. n.715).',
        photos: [],
        externalLinks: [{ label: 'Jornal 715', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/3/9/d/39dc39a7f57a05cad637917281535cf6333672a52fd4763b866c984d572511ea/Edi____o_n715.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'DAE Conclui Curso de Marketing Básico para Empresários e Acadêmicos de Ponte Nova',
        desc: 'O Curso de Marketing Básico foi oferecido pelo DAE aos alunos e professores da Faculdade de Ciências Contábeis de Ponte Nova (FACCO) e para empresários daquela cidade. O curso esteve a cargo dos professores João Adamor Dias Neves (coordenador) e José Edson Lara. (17dez. n.716).',
        photos: [],
        externalLinks: [{ label: 'Jornal 716', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/d/0/a/d0ad2b3f77fd42c3757298855b0b5f42d2d04bd228bd78a8b9ae29a8a44fac65/Edi____o_n716.pdf' }],
        articleUrl: ''
      }
    ],
    photos: [],
    articleUrl: 'https://atom.ufv.br/index.php/1981-ufv-informa'
  },

  1982: {
    events: [
      {
        tag: 'gestao',
        title: 'ADOLFO EGÍDIO REIS',
        desc: 'Admissão do docente ADOLFO EGÍDIO REIS no Departamento de Administração e Economia, com início das atividades em Fevereiro. (07fev. n.732).',
        photos: [{ url: '/1982 - Adolfo Egidio Reis.jpeg', caption: 'Admissão do docente ADOLFO EGÍDIO REIS' }],
        externalLinks: [{ label: 'Jornal 732', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/b/9/c/b9cbd724e5a078f7df81e46f272f6aa9b12da8048d80a8f4a0371091933a2a22/Edi____o_n732.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'reconhecimento',
        title: 'Chefe de Gabinete da UFV e Professor do DAE recebem Homenagem e Ministra Aula Inaugural na FACCO',
        desc: 'O chefe de gabinete do reitor da Universidade Federal de Viçosa, professor Carlos Roberto Ramos do DAE, pronunciou, em Ponte Nova, a aula inaugural da Faculdade de Ciências Contábeis (FACCO), tendo abordado o tema «Psicotrópicos», falando dos graves problemas provocados por seu uso na sociedade moderna (foto). Durante a solenidade, foi agraciado com uma placa de prata em reconhecimento pelos relevantes serviços prestados, oferecida pela Faculdade e pelo Diretório Académico da FACCO. (11fev. n.724).',
        photos: [{ url: '/1982 - Facco.png', caption: 'FACCO.' }],
        externalLinks: [{ label: 'Jornal 724', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/e/b/6/eb62464441c25b3a3c6d40c49cc25a710507d26ee6d01d572fbdd784a2cee185/Edi____o_n724.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Estudantes de Administração recebem treinamento prático no CENTREINAR.',
        desc: 'Foi realizado, no Centro Nacional de Treinamento em Armazenagem (Centreinar), o Curso de Administração de Unidades Armazenadoras, para 18 formandos do Curso de Administração do DAE. A coordenação ficou a cargo do professor Roberto Proença Passarinho, do Centreinar, que também ministrou a primeira aula. O objetivo do curso foi treinar os estudantes na área de armazenagem e facilitar estágios em unidades armazenadoras e entidades ligadas ao setor. Os participantes receberam aula do professor Ronald Echangi, diretor do Centro para Investigaciones en Grãos y Semillas (CIGRAS) da Universidade de Costa Rica e representante da FAO. Os estudantes visitaram, como aula prática, as instalações de uma unidade armazenadora, pertencente à Cia. de Armazéns e Silos do Estado de Minas Gerais (Casemg). (1ºabri. nº731).',
        photos: [{ url: '/1974 “Criação do Departamento”.avif', caption: 'Estudantes de Administração recebem treinamento prático no CENTREINAR.' }],
        externalLinks: [{ label: 'Jornal 731', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/6/9/d/69d9a92f27353faf725170f236e6d8ad47626f2604121a69f77db6c3fee2613e/Edi____o_n731.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'A Consolidação das Ciências Sociais Aplicadas na UFV: Da Teoria Acadêmica à Prática Industrial',
        desc: 'Estudantes de Administração e Economia visitaram, nos dias 15 e 20 de abril, as instalações da empresa Usinas Siderúrgicas de Minas Gerais (Usiminas), no município de Ipatinga-MG. O objetivo da visita foi proporcionar aos alunos um contato direto com os parques fabris de uma grande indústria, permitindo o conhecimento dos fluxos de produção e a natureza dos serviços auxiliares na produção de aço. Outra finalidade da viagem foi observar a estrutura ambiental interna e externa de um grande projeto industrial, como a Usiminas. Além de percorrer as várias unidades da Usiminas, os universitários assistiram a раlestra do engenheiro Sebastião Araújo Silveira, da Divisão de Treinamento de Pessoal, sobre "A Filosofia de Administração da Usiminas". Também foram acertados os detalhes relativos à colocação de estagiários da UFV naquela indústria siderúrgica mineira. (13mai n.737).',
        photos: [],
        externalLinks: [{ label: 'Jornal 737', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/6/0/3/6031ac7793d230bec243a14debe9f13b423e4a06536cb09e8cb27f10b49f9cd5/Edi____o_n737.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'A Consolidação das Ciências Sociais Aplicadas na UFV (1979-1982): Da Pesquisa Premiada à Prática Industrial',
        desc: 'O DAE promoveu o Seminário «Avaliação de Desempenho", ministrado pelo professor João Adamor Dias Neves, com participação de empresários e pessoas da área de Recursos Humanos. (20mai n. 738).',
        photos: [{ url: '/1982 - Avaliação de Desempenho.jpeg', caption: 'Seminário «Avaliação de Desempenho" promovido pelo DAE.' }],
        externalLinks: [{ label: 'Jornal 738', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/c/a/5/ca58bd0f16fb4de7407155b077c90fdee15cdf0d81d4f6638c6747a34810817f/Edi____o_n738.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'A Consolidação das Ciências Sociais Aplicadas na UFV: Desenvolvimento, Direito Agrário e Extensão Regional',
        desc: 'O DAE realizou o I Ciclo de Estudos sobre Direito Agrário, com o objetivo de analisar a questão agrária brasileira, tendo em vista a postura jurídica frente à distribuição e fixação do homem à terra e o significado político, econômico e social da existência do latifúndio improdutivo na esfera agrária vigente. Presentes, o presidente da 42ª Subseção da Ordem dos Advogados do Brasil, Diogo Braga Filho; da Associação Comercial de Viçosa, Manoel Rodrigues da Silva Pontes; do Sindicato Rural, Hélio Henrique Fontes; da Cooperativa dos Produtores Rurais de Viçosa, Almiro Paradela; os professores do DAE, Valéria Aroeira Braga Duarte Ferreira, Amaury Machado Possas Araújo e Maria Elena Barbassa; e a representante dos alunos, acadêmica Sueli Leite. Os conferencistas foram os professores Fernando Pereira Sodero, da USP, que falou sobre "Uma Visão do Direito Agrário"; e Paulo Tominn Borges, da Universidade Federal de Goiás, abordando a "Usucapião"; os professores Igor Tenório da UnB, falando do "Sistema Nacional Econômico Florestal"; e Octávio Junqueira de Mello Alvarenga, presidente da Sociedade Nacional da Agricultura, sobre "Justiça Agrária". A palestra de encerramento ficou a cargo do professor Marcos Afonso Borges, da Universidade Federal de Goiás, também com tema "Justiça Agrária".',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'A Consolidação das Ciências Sociais Aplicadas na UFV: Das Primeiras Semanas Acadêmicas à Projeção Nacional',
        desc: 'Foi realizada no dia 21 de maio a III Semana do Administrador, com o tema "Aspectos Atuais da Pequena е Média Empresa", com a participação de 350 professores, estudantes, empresários de Ponte Nova, Visconde de Rio Branco e Viçosa e profissionais da região. A sessão solene de abertura teve a apresentação do Coral da UFV e o professor Claude Machline, da EASP/Fundação Getúlio Vargas, fez palestra sobre «Produção na Pequena e Média Empresa». Contou com os palestrantes Prof. José Carlos Coimbra da PUC/SP e chefe do Departamento de Promoção e Mercados da Carteira de Comércio Exterior da CACEX do Banco do Brasil, com a palestra «Pequena e Média Empresa no Comércio Exterior»; Prof. Luiz Gaj da USP, abordando "А Função de O&M (Organização e Métodos) no Processo de Modernização Administrativa"; Marcos Carvalho Elizeu coordenador do Programa de Exportação do CEAG-MG, com "Formação de Consórcios para Pequena e Média Empresa"; Luiz Inácio Tadeu Muraro, com "Planejamento na Pequena e Média Empresa», consultor da Arthur Anderson Auditoria; Inocêncio Magela de Oliveira, coordenador de Recursos Humanos e Treinamento Empresarial do CEAG-MG; Eles Rodrigues de Oliveira da Vale do Rio Doce e empresário com «Depoimento sobre uma Pequena Empresa»; enquanto o presidente da Nacional Leasing Arrendamento Mercantil S/A e diretor geral de Crédito do Banco Nacional S/A, Francisco Murilo Zerbini, e o diretor de Operações da Nacional Leasing Arrendamento Mercantil S/A, Amaro Rocha, falaram sobre "Crédito, Taxas de Juros, Leasing". (13mai nº737). VER FOTO P.4 (20mai nº 738). FOTO DO AMARO ROCHA P.3 (03jun nº 740).',
        photos: [{ url: '/1982 - III Semana do Administrador.png', caption: 'A mesa da solenidade, presidida pelo professor Dilson Seabra Rocha' },
        { url: '/1982 - Amaro Rocha.jpg', caption: 'Ο conferencista Amaro Rocha ao fazer sua palestra.' },
        ],

        externalLinks: [{ label: 'Jornal 737', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/6/0/3/6031ac7793d230bec243a14debe9f13b423e4a06536cb09e8cb27f10b49f9cd5/Edi____o_n737.pdf' },
        { label: 'Jornal 738', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/c/a/5/ca58bd0f16fb4de7407155b077c90fdee15cdf0d81d4f6638c6747a34810817f/Edi____o_n738.pdf' },

        { label: 'Jornal 740', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/a/a/e/aaec5e999569789a1e30c89282f96c054b7ce919a835f3a7deab8e11e7cc1ac6/Edi____o_n740.pdf' }
        ],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Admissão de LUIS CARLOS DE FREITAS',
        desc: 'Admissão do servidor técnico-administrativo LUIS CARLOS DE FREITAS, ocupando o cargo de SERVENTE DE LIMPEZA no Departamento de Administração e Economia (DAE), com início das atividades em 08/07/1982.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Posse de gestor',
        desc: 'O Prof. Juraci Aureliano Teixeira do DAE tomou posse no CCH. (12ago n. 750).',
        photos: [{ url: '/1982 - Juraci Aureliano Teixeira.png', caption: 'O professor Juraci Aureliano Teixeira.' }],
        externalLinks: [{ label: 'Jornal 750', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/e/f/6/ef6725fe43c94b8618a1b2e418da695f8f85ab09d15dd9bd6604a5c4363a832e/Edi____o_n750.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'III Semana do Economista debate os rumos e desafios da economia brasileira na UFV',
        desc: 'III Semana do Economista foi realizada, com o tema "Economia: uma Polêmica Atual", tendo como coordenadora a professorа Maria Elena Barbassa, reuniu professores e estudantes da UFV, empresários e profissionais da região de Viçosa e cidades vizinhas. Foram abordados assuntos como inflação, empresas estatais e problemas atuais da economia brasileira. As palestras foram proferidas por Francisco de Paula Queiróz, assessor do Departamento de Promoção e Mercado do Banco do Brasil e ex-professor da PUC-SP, e representante do diretor da Cacex, sobre "Economia Internacional"; pelo diretor da Carteira de Comércio Exterior do Banco do Brasil, Benedito Fonseca Moreira, com o título "Economia Internacional"; pelo professor Lacyr Maffia de Oliveira, da UFMG e presidente do Instituto de Pesquisas Econômicas e Administrativas, de Belo Horizonte, sobre "Custo de Vida e Inflação"; pelo professor Philippe Reichstul, da USP, sobre "Empresas Estatais"; pelo professor Fernando Antônio Rezende da Silva, da Pontifícia Universidade Católica e FGV, do Rio de Janeiro, com o tema "A Centralização de Poderes na Federação Brasileira: Problemas Atuais e Sugestões de Reforma"; e, pelo José Teófilo de Oliveira, superintendente do Instituto de Planejamento/ Instituto de Planejamento Econômico e Social (IPLAN/ IPES), de Brasília, sobre "Economia Brasileira: Evolução Recente". (19ago  n.751; 02set  n.753; 4 16set  n.755 e 23set  n.756).',
        photos: [{ url: '/1982 - Francisco de Paula Queiróz.png', caption: 'O assessor do Banco do Brasil, Francisco de Paula Queiróz, primeiro conferencista.' },
        { url: '/1982 - III Semana do Economista 3 (1).jpeg', caption: 'II Semana do Economista.' },
        { url: '/1982 - III Semana do Economista 3 (2).jpeg', caption: 'II Semana do Economista.' },
        { url: '/1982 - III Semana do Economista 3 (3).jpeg', caption: 'II Semana do Economista.' },
        { url: '/1982 - III Semana do Economista 3 (4).jpeg', caption: 'II Semana do Economista.' },
        ],

        externalLinks: [{ label: 'Jornal 751', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/e/9/0/e90e9a7df1e3221efdfc4190f16a9d9fb9ea3d97d281d9486cb69e815c8f1dd5/Edi____o_n751.pdf' },
        { label: 'Jornal 753', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/8/5/f/85fa917b8798fd06bbd88d57563686acb4ba07df9ac66176cdd23ca7cbeec306/Edi____o_n753.pdf' },
        { label: 'Jornal 755', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/a/f/b/afbfe9f0d82d4a3b4977ab37498c71fec588af1f3bc0e8e87572235eab34c9a1/Edi____o_n755.pdf' },
        { label: 'Jornal 756', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/4/f/b/4fbaaac315d91e1c5773532e1d826c4293ce24ef03f035482e00e5d582732401/Edi____o_n756.pdf' }
        ],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'I Ciclo de Estudos Contábeis na UFV debateu inovação e análise financeira',
        desc: 'I Ciclo de Estudos Contábeis foi destinado a professores, estudantes, empresários, contadores da região e funcionários da UFV e contou com as seguintes palestras: "Demonstrações Financeiras: Um Enfoque Gerencial", pelo chefe da Divisão de Contabilidade Central da Petrobrás, Gilberto Amaro Rodrigues; "O Desempenho da Função Contábil e o Uso de Processamento Eletrônico de Dados", pelo chefe da Divisão de Contabilidade da Sede da Petrobrás, Eurico Ribeiro, ambos do Rio de Janeiro. O evento contou ainda com as palestras "Sociedades Coligadas, Controladoras e Controladas", "Equivalência Patrimonial" e "Consolidação das Demonstrações Financeiras". O Seminário de Análise Financeira foi conduzido pelos Profs. Adriel Rodrigues de Oliveira, José Clévio Dias Casali e Milton Rodrigues Natalino do DAE, que abordaram os tópicos: Patrimônio, Demonstrativos Financeiros de acordo com a Nova Lei das Sociedades Anónimas, Análises Horizontal e Vertical, Análise por Índices, Capital de Giro: Apuração e Projeção; Sistema Du pont de Análise e Fluxo de Caixa. O Seminário teve como objetivo de promover a reciclagem dos participantes no que tange à nomenclatura dos demonstrativos financeiros e iniciá-los em conceitos e técnicas de análise. (29set. n. 757). (21out. n.760). ',
        photos: [{url: '/1982 - I Ciclo de Estudos Contábeis.jpg', caption: 'I Ciclo de Estudos Contábeis na UFV.' },],
        externalLinks: [{label: 'Jornal 757', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/b/4/1/b41aea5e955829e4dc9f3530126a241b94cdc999c4e342dfac222ffd3680ab54/Edi____o_n757.pdf' },
        {label: 'Jornal 760', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/e/b/7/eb72d157a7cef8856b08a8308f0c8189c413c91656c70bc0cc916c6c6c9a7fba/Edi____o_n760.pdf' }
        ],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Estudantes de Administração e Economia vivenciam a prática da gestão pública em Juiz de Fora',
        desc: 'Estudantes de Administração e Economia participam de debates em Juiz de Fora, visitando a Prefeitura e órgãos de administração municipal com o objetivo de proporcionar complementação da formação técnico-profissional, pelo contato com a prática administrativa. Foi realizado um ciclo de palestras e debates sobre a administração de cidades de médio porte, com a participação do prefeito Francisco Antônio Mello Reis, do secretário municipal da Fazenda, Vicente Araújo dos Santos, e do ex-diretor da autarquia IPPLAN, José Márcio Paschoalino. Foram abordados aspectos administrativos e jurídicos, como processos de limpeza urbana, раvimentação de ruas e urbanização, além de contatos com presidiários albergados, que trabalhavam em obras do município. O grupo, formado por alunos da disciplina Administração Municipal, teve como acompanhante o professor Marcos Tanure Sanábio, do DAE. (14out. n.759).',
        photos: [],
        externalLinks: [{label: 'Jornal 759', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/4/5/c/45c49b54df83bc93d64f235c6ed2cbe5c4b5e40f43015f958d3eb975c050d1c6/Edi____o_n759.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'UFV realiza II Ciclo de Estudos Jurídicos com a presença de renomados especialistas',
        desc: 'Com cinco palestras, seguidas de debates, e com a participação de professores e estudantes, advogados e empresários da região, o DAE realizou o II Ciclo de Estudos Jurídicos. O evento foi coordenado pela Profa. Valéria Aroeira Braga Valéria Duarte Ferreira, Profa. Maria Elena Barbassa, presidente da Comissão de Extensão do DAE; e os Juízes de Direito, Júlio Henrique Prado Bueno e Wander Paulo Marotta Моreira. O Professor Jair Leonardo Lopes, titular de Direito Penal da UFMG e ex-desembargador do Tribunal de Justiça, falou sobre Direito Penal Econômico; o professor Osmar Brina discorreu sobre Sociedade Anônima, e o professor Paulo Emílio Ribeiro de Vilhena abordou o tema Principio de Direito do Trabalho. Os professores José Alfredo Baracho e Paulo Neves de Carvalho falaram, respectivamente, sobre Federalismo e Administração Municipal em Perspectiva. (21out. n.760).',
        photos: [],
        externalLinks: [{label: 'Jornal 760', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/e/b/7/eb72d157a7cef8856b08a8308f0c8189c413c91656c70bc0cc916c6c6c9a7fba/Edi____o_n760.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'FACCO e UFV promovem a II Semana do Contador em Ponte Nova',
        desc: 'A Faculdade de Ciências Contábeis de Ponte Nova (FACCO), com apoio da UFV e colaboração da Fundação Arthur Bernardes, realizou a II Semana do Contador com o tema "O Processo Econômico e suas Relações Contábeis e Sociais". Os trabalhos contaram com a palestra sobre "O Crédito Agrícola no Brasil", pelo diretor José Kleber Leite de Castro, da Carteira de Crédito Agrícola do Banco Central do Brasil e os demais palestrantes foram o professor Antônio Luiz de Lima, do Departamento de Economia Rural da UFV, os professores José Edson Lara e Nanci Pereira de Vasconcelos do DAE; e o engenheiro industrial Francisco José de Almeida Neto, da Cia. Industrial de Papel, do Rio de Janeiro.  (21out. n.760).',
        photos: [],
        externalLinks: [{label: 'Jornal 760', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/e/b/7/eb72d157a7cef8856b08a8308f0c8189c413c91656c70bc0cc916c6c6c9a7fba/Edi____o_n760.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Alunos de Administração da UFV realizam visita técnica à Pink Alimentos em Belo Horizonte',
        desc: 'Os alunos do curso de Administração de Empresas realizaram uma visita à Pink Alimentos do Brasil Ltda., em Belo Horizonte, como parte das exigências práticas da disciplina "Administração de Vendas". Os visitantes percorreram as instalações da empresa, com demonstrações do processo de fabricação e embalagem de seus produtos. O gerente administrativo Adalberto Carneiro fez palestra, enfatizando os problemas de comercialização, os tipos de clientes, o sistema de distribuição e de preços, as estratégias mercadológicas adotadas para se firmar no mercado e das dificuldades da empresa, pois trabalha com capital próprio e é familiar. A viagem foi coordenada pelo professor João Adamor Dias Neves, responsável pela área mercadológica do DAE.  (18nov. n.764).',
        photos: [],
        externalLinks: [{label: 'Jornal 764', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/4/7/e/47ef22f1995767c0635689f52020a28d21b528f9a7447c6fd4f32eecca21eed2/Edi____o_n764.pdf' }],
        articleUrl: ''
      }
    ],
    photos: [
      { url: '', caption: 'Chefe de Gabinete da UFV recebe Homenagem.' },
      { url: '', caption: 'Ο conferencista Amaro Rocha ao fazer sua palestra.' },
      { url: '', caption: 'A professora Nanci Pereira de Vasconcelos, na mesa da solenidade, quando apresentava os conferencistas.' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/1921-ufv-informa'
  },

  1983: {
    events: [
      {
        tag: 'infraestrutura',
        title: 'Aquisição de Equipamentos de Vídeo e Expansão da Infraestrutura Acadêmica',
        desc: 'O departamento expandiu e modernizou os recursos de sua infraestrutura física e de apoio acadêmico com a aquisição e apresentação de novos equipamentos de vídeo cassete, para dar suporte direto e dinamizar o desenvolvimento das futuras atividades e projetos de extensão da unidade de ensino.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'DAE Realizou I Seminário de Avaliação e Reprogramação',
        desc: 'DAE promoveu I Seminário de Avaliação e Reprogramação durante três dias, realizado no auditório do Centro Nacional de Treinamento em Armazenagem (Centreinar), com o objetivo de discutir os atuais problemas do Departamento. O seminário constou de exposição de temas específicos do DAE, debate em grupo, reunião plenária e, no final, foi discutida a seleção das alternativas. As apresentações de textos foram: "O papel da Universidade", pela professora Lenita Maria Turchi Pacheco; "O Ensino e a profissão do Administrador", pelo professor José Edson Lara, e "О Ensino e a profissão do Economista", pelo professor Alfredo Lopes da Silva Neto. (03mar. n.780)',
        photos: [{ url: '/1983 - I Seminário de Avaliação e Reprogramação.png', caption: 'Participantes do I Seminário de Avaliação e Reprogramação.' }],
        externalLinks: [{label: 'Jornal 780', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/6/3/8/6381ca3ffd2fdf9236972a87af128a888e889c24adcbe29b220bc3b627bfc2c0/Edi____o_n780.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Professores do DAE Participaram de Seminário da IBM no Rio de Janeiro',
        desc: 'Foi realizado, no Rio de Janeiro, o Seminário de Planejamento e Controle da Produção para Docentes Universitários, no Centro Educacional Residencial da Gávea, sob o patrocínio da IBM do Brasil - Indústria, Máquinas e Serviços Ltda., com o objetivo de reciclar na área de Planejamento е Controle da Produção, mediante a aplicação do Conceito COPICS (modelo para implantar sistemas na indústria), e, ainda, estimular o entrosamento entre docentes de várias universidades, nas áreas de Administração da Produção e Engenharia Industrial. Participaram do seminário 20 professores, e a UFV foi representada pelos professores Nina Rosa da Silveira Cunha e José Edson Lara, ambos do DAE. (14abr. n.786).',
        photos: [],
        externalLinks: [{label: 'Jornal 786', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/d/2/f/d2f0e8a5bf4836231ef684d99b70b716ae16c51f254a89acbcdf403cd65b8ab6/Edi____o_n786.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Professor do DAE Ministrou Treinamento para Servidores da Funarbe',
        desc: 'A Fundação Arthur Bernardes (Funarbe) promoveu um Curso de Treinamento Intensivo para seus servidores, ministrado pelo professor João Adamor Dias Neves, do DAE. O curso, primeiro de uma série, teve a presença de 35 servidores, além dos dirigentes da área comercial e da administração da Funarbe. Seu objetivo foi oferecer conhecimentos para a melhoria do atendimento aos usuários do supermercado. Os demais cursos, também com palestras e debates, foram dirigidos por professores do DAE, com a participação inclusive de estudantes da UFV. O presidente da Funarbe, Afonso Sérgio Corrêa de Faria, afirmou que o órgão estava com nova diretriz, para maior integração com a UFV, cumprindo assim seus objetivos estatutários: dar apoio direto às atividades de Ensino, Pesquisa e Extensão. (28abr. n.788).',
        photos: [{url: '/1983 - curso.jpg', caption: 'Os servidores da Funarbe' }],
        externalLinks: [{label: 'Jornal 788', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/7/1/7/717fd72fe189750434fe6c362a126c639a027091d5daf6323641269f94ac2248/Edi____o_n788.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Instituição da Data Oficial de Aniversário do DAE',
        desc: 'Em 10 de maio de 1983, ficou formalmente instituído o dia 10 de maio como a data oficial de aniversário e comemoração do DAE. A celebração foi estabelecida pelo fato de o departamento ter sido originalmente implantado e instalado nesta respectiva data.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'IV Semana do Administrador Discutiu Pequenas e Médias Empresas',
        desc: 'O empresário Nicolau Martino debateu na IV Semana do Administrador o tema central "Administração na Pequena e Média Empresa" e teve como palestrantes o administrador de empresas Luiz Inácio Tadeu Muraro e o empresário José de Almeida Neto. Sobre "Computadores: Panorama Nacional" foi abordado por Luís Julião Braga, técnico da Central de Processamento de Dados da UFV e Paulo Bastos Tigre, do Instituto de Economia Industrial da UFRJ. Os demais palestrantes convidados foram: Alderino Vieira Ferraz, de Guarani-MG, que fez um "Depoimento de um empresário da Zona da Mata sobre sua experiência em consórcio para exportação"; Francisco José de Almeida Neto, de Ponte Nova- MG, sobre "Dificuldades da Pequena e Média Empresa no Interior"; e Nicolau Martino Netto, sobre "Aspectos de Treinamento de Pessoal em P.M.C." (12mai. n.790; 19mai. n.791 e. 4 26mai. n.792).',
        photos: [{url: '/1983 - IV Semana do Administrador.png', caption: 'Na sessão de abertura, o conferencista Luiz Inácio Tadeu Muraro, o Reitor Antônio Fagundes de Sousa, que presidiu os trabalhos, o professor Gilson Faria Potsch Magalhães e a empresária Rosa Maria. Bouchardet. ' },
          {url: '/1983 - IV Semana do Administrador Capa.jpeg', caption: 'IV Semana do Administrador' },
        ],
        externalLinks: [{label: 'Jornal 790', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/f/f/c/ffc32671dfde82d6163d61c4cf4db8bc6f80bed06c389856dbf6d25848b01759/Edi____o_n790.pdf' },
        {label: 'Jornal 791', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/8/9/8/8987bf7efbcff437c92b154509d89a43643c370aaa2a1be4bb1fd762689e3ddb/Edi____o_n791.pdf' },
        {label: 'Jornal 792', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/3/a/7/3a7bee5c46dcecc987722efb243fb4544a053508ff77126b18c0a9bd566a1e74/Edi____o_n792.pdf' }
        ],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Estudantes de Administração Realizaram Visita Técnica em Congonhas',
        desc: 'Alunos do Curso de Administração de Empresas, da disciplina Administração de Pessoal I, realizaram viagem de estudos à Ferteco Mineração S/A, empresa de metalurgia, no município de Congonhas, sob a coordenação do professor João Adamor Dias Neves.  O objetivo foi conhecer práticas de pessoal e os serviços executados pelos chefes do Departamento Social, de Administração de Pessoal e de Segurança e Higiene do Trabalho, que fizeram uma rápida exposição de cada setor. Depois, os visitantes foram conhecer o sistema de pessoal da Prefeitura de Congonhas e suas práticas de pessoal. Foi interessante aos alunos constatar o que realmente está sendo feito em termos de administração de pessoal numa prefeitura e em uma empresa privada, com 1.400 empregados. Na oportunidade, a Ferteco colocou-se à disposição da UFV para novos contatos, incluindo a possibilidade de estágio para os estudantes do curso de Administração de Empresas. (1ºjun. n.793).',
        photos: [],
        externalLinks: [{label: 'Jornal 793', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/3/b/e/3be59cb6e1c27fe91d12ac96dc8be0ee184be1921eabe1f616f50d1c8f6c2293/Edi____o_n793.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Professor Gilson Magalhães Assume a Chefia do DAE',
        desc: 'Reitor empossa o novo chefe do DAE, Prof. Gilson Faria Potsch MagaIhães.  (16jun. n.795).',
        photos: [],
        externalLinks: [{label: 'Jornal 795', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/d/b/e/dbedc44869953aaee111e389f9b2ee41345d5a4365285ec52c662c52b1d371ef/Edi____o_n795.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Curso no Centreinar Capacitou Estudantes do DAE em Armazenagem',
        desc: 'Foi realizado o Curso de Administração de Unidades Armazenadoras, com a participação de 24 estudantes de Administração e Economia. Em virtude de um acordo entre o DAE e o Centreinar, teve como objetivo proporcionar aos alunos uma visão panorâmica dos aspectos econômicos e técnicos da armazenagem de produtos agrícolas, tornando-os capazes de exercer atividades administrativas em unidades armazenadoras. A coordenação foi do técnico Roberto Proença Passarinho, do Centreinar, e do professor José Edson Lara, do DAE. (07jul. n.798).',
        photos: [{url: '/1983 - Administração de Unidades Armazenadoras.png', caption: 'Estudantes do DAE durante o curso de Administração de Unidades Armazenadoras.' }],
        externalLinks: [{label: 'Jornal 798', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/2/3/0/230fcd0df73116e9c9b597f5f463036f1857f8939650c8994046857d98fc9494/Edi____o_n798.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Professora Nina Rosa Lançou Apostila pela Imprensa Universitária',
        desc: 'Imprensa Universitária edita 8 apostilas para os estudantes de graduação. Dentre as apostilas foi editada "Administração e Esforço Motivacional", da professora Nina Rosa da Silveira Cunha, do DAE. (04ago. n.802)',
        photos: [],
        externalLinks: [{label: 'Jornal 802', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/6/3/1/631ae6256cc60e9e47ad9d06d0e5d790c959d54c7d60746192c1787dd36f0066/Edi____o_n802.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'DAE Promoveu Palestra Sobre o Novo Currículo de Economia',
        desc: 'DAE promove palestra sobre o novo currículo do curso de Economia, com o ex-diretor da Capes, Cláudio de Moura Castro, atual secretário executivo do Conselho Nacional de Recursos Humanos do Ipea/Seplan. O objetivo foi proferir uma palestra sobre o tema «Concepção do Novo Currículo de Economia», com a presença de professores e estudantes dos cursos de Administração e Economia. (1ºset. n.806). FOTO PG.2 "CURRICULO DE ECONOMIA)',
        photos: [{url: '1983 - Currículo de Economia.png', caption: 'Os professores Gilson Faria Potsch Magalhães, chefe do DAE, o palestrante Cláudio de Moura Castro e Juraci Aureliano Teixeira, diretor do Centro de Ciências Humanas, Letras e Artes da UFV.' }],
        externalLinks: [{label: 'Jornal 806', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/4/3/2/432f1c8d5e9a1b7c3d4e5f6a7b8c9d0e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2/Edi____o_n806.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Professores do DAE Ministraram Curso de Administração Financeira em São Lourenço',
        desc: 'Professores do DAE ministraram o Curso de Administração Financeira em São Lourenço para micro, pequenas e médias empresas. A promoção foi da Educação & Cultura S/C- Educa e do DAE, mediante convênio. Foram ministradas aulas pelos professores José Clévio Dias Casali e Milton Rodrigues Natalino, sob a coordenação da professora Nina Rosa da Silveira Cunha. O programa do curso incluiu as seguintes matérias: Noções de Contabilidade, Patrimônio e Balanço, Análise de Balanço, Orçamento de Caixa T.R.I. (R.O.I., Taxa de Retorno de Investimento e Método "Du Pont" de Análise). (24set. n.779).',
        photos: [],
        externalLinks: [{label: 'Jornal 779', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/a/f/c/afca3444757a500bf525ec35064be4deff2794a9b545efbc79ca040a37b15125/Edi____o_n779.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'IV Semana do Economista Debateu a Crise Econômica',
        desc: 'O tema da IV Semana do Economista foi "A Economia em Crise". Além de cinco palestras técnicas, lançamento do livro "As lutas operárias e sindicais em São Bernardo", debates, grupos de estudo e exibição de filmes, aconteceram outras atividades, programadas pelo Centro Acadêmico de Economia. O primeiro palestrante foi o professor Paulo Márcio de Mello, da Universidade do Estado do Rio de Janeiro (UERJ), que discorreu sobre o "Papel do economista: sociedade e crise". Os demais convidados foram os professores Lauro Campos, da UnB; João Antônio de Paula, do Cedeplar-MG; Carlos Longo, da USP; e Luiz Flávio Rainho, da UFJF e Funalfa. (22set. n.809 e  13out. n.812).',
        photos: [{url: '/1983 - IV Semana do Economista.png', caption: '0 professor Paulo Márcio de Mello, da UERJ, e o estudante Sebastião César, da UFV.' },],

        externalLinks: [{label: 'Jornal 809', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/5/a/d/5ade23527c477fbe2da78293f92c1f03dc324f0f5f910e1eec14f559cd53e67b/Edi____o_n809.pdf' },
        {label: 'Jornal 812', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/7/8/f/78ff7af1914aa35767f9a2913b8aa3e91e0456f219a4691ab32cf5feda74f8df/Edi____o_n812.pdf' }
        ],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'DAE Promoveu Curso de Compras e Patrimônio para Servidores da UFV',
        desc: 'Com a participação de 26 servidores das Diretorias Financeira e de Material da UFV, foi realizado o curso Compras, Armazenamento e Patrimônio, promovido pelo DAE. O objetivo foi proporcionar aos participantes reciclagens de conhecimentos e treinamento em sua área de atuação, com ênfase no intercâmbio entre os servidores das duas Diretorias e na intensificação da noção do conjunto que é a Administração de Material. O curso foi ministrado pelo professor Marcos Tanure Sanábio, do DAE, que revelou ser esta a primeira vez que se tomou iniciativa desse tipo na UFV. Foram usados apostilas e métodos audiovisuais com o emprego do videocassete. O programa foi dividido em módulos em que se abordaram: Aspecto Legal das Compras, Aspectos Operacionais das Compras, Armazenamento, Controle de Estoque, Patrimônio e Sistemas de Materiais. (10nov. n.816).',
        photos: [{url: '/1983 - Curso de Compras.png', caption: 'O professor Marcos Tanure Sanábio, do DAE, ministrou o curso.' }],
        externalLinks: [{label: 'Jornal 816', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/7/b/f/7bf1ce26c62a3b7490d201154e41e4de0d24118ccc76e5fc679b3545d0100117/Edi____o_n816.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Alunos do DAE Organizaram Palestra com Especialista da Alcan',
        desc: 'O gerente de Métodos da Alcan Alumínio do Brasil, Paulo Sá Grise (foto), fez palestra, abordando a "Produtividade Industrial", numa iniciativa das acadêmicas Maria do C. Bartolomeu, Zélia A. M. Oliveira, Maria I. Feliciana, Afonso Rocha, Júlio C. Pena e Irene D. Alves, sob a coordenação do professor José Edson Lara, do DAE, responsável pela área de Administração da Produção. (24nov. n.818). ',
        photos: [],
        externalLinks: [{label: 'Jornal 818', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/6/6/d/66dd2e09a0c4a4ef87c6d047449a78b6f87807754aaefa0a318c39b7e3bc3dce/Edi____o_n818.pdf' }],
        articleUrl: ''
      }
    ],
    photos: [
      { url: '', caption: 'Novos Diretores' },
      { url: '', caption: 'Os servidores da Funarbe' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/1983-ufv-informa'
  },

  1992: {
    events: [
      {
        tag: 'fundacao',
        title: 'Inaugurado o Prédio do CCH',
        desc: 'No dia 11 de setembro de 1992, às 14 horas, foi inaugurado o edifício CCH que passou a abrigar os Departamentos de Administração, Economia, Letras e Artes. A solenidade de inauguração foi conduzida pelo então reitor da UFV, professor Antônio Fagundes de Sousa, também estiveram presentes o diretor-geral do jornal Estado de Minas, João Bosco Martins Sales, o diretor do CCH, prof. Juraci Aureliano Teixeira, do chefe do DEE, prof. Eloy Alves Filho e Prof. Antônio de Figueiredo Vieira, chefe do DAD. n.1241',
        photos: [{url: '/1989 “Construção do Departamento de Administração e Economia”.jpg', caption: 'Inauguração do Prédio do CCH.'}],
        externalLinks: [{label: 'Jornal 1241', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/0/2/5/025da97ed19e5463545a492c268660c1f0f8c496e4bc98ca4969fb92d8d7ed8c/Edi____o_n1241.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'SEMINÁRIO SOBRE QUALIDADE TOTAL NAS ORGANIZAÇÕES',
        desc: 'A professora Maria Elena Barbassa foi a coordenadora do seminário sobre “qualidade total nas organizações”, proferido pelo professor norte-americano Ronald F. Farina na UFV. O evento abordou uma visão sistêmica da qualidade em todos os setores, visando melhorar o desempenho e a eficiência institucional. n. 1224',
        photos: [],
        externalLinks: [{label: 'Jornal 1224', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/c/6/d/c6d45319dbe887b8e13e338c4134ecb74e91185c395ad6cad30e6f685710ad42/Edi____o_n1224.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'V Semana do Empresário',
        desc: 'A V Semana do Empresário, organizada pela UFV/DAD e ACV, ocorreu de 23 a 27 de agosto de 1992 para promover a integração entre executivos e a universidade. O evento teve foco no intercâmbio de conhecimentos técnicos e gerenciais para pequenas e microempresas através de cursos e debates. n. 1238',
        photos: [],
        externalLinks: [{label: 'Jornal 1238', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/4/4/3/443f49137e29060fb2f0a4fb44eb1a143d4566ab26d97d0e842c0c0d67643ecb/Edi____o_n1238.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'DAD promove curso sobre bolsa de valores',
        desc: 'O Departamento de Administração (DAD) promoveu curso sobre Bolsa de Valores em parceria com a Bolsa de Valores de Minas Gerais (BVMG). O evento contou com palestras dos superintendentes Paulo Henrique Ayres Pena e Lacyr Maffia, que abordaram o funcionamento do mercado, a capitalização de empresas e métodos de análise de ações. O curso visou capacitar alunos e profissionais, esclarecendo dúvidas sobre investimentos e o ambiente de negociação. n. 1239',
        photos: [{url: '/1992 “O superintendente Paulo Henrique Ayres Pena”.jpg', caption: 'O superintendente Paulo Henrique Ayres Pena.'}],
        externalLinks: [{label: 'Jornal 1239', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/a/e/5/ae55cfd43f837b259df0bcc96eaeaac6dd6c726f5803d211bc235f5a21d32337/Edi____o_n1239.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Alunos de Administração promovem palestras',
        desc: 'Os egressos da turma de 1991 de Administração da Unioeste, conhecidos como "Calouros 91", realizam periodicamente eventos e palestras para compartilhar experiências de mercado com os atuais estudantes. A iniciativa visa fortalecer o networking e integrar gerações, oferecendo uma visão prática da profissão aos acadêmicos.  n. 1220',
        photos: [],
        externalLinks: [{label: 'Jornal 1220', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/d/7/9/d7928bb4aa7e58c55d0caf33687fdef6b62283c51d9124a23ccd663d21d02e49/Edi____o_n1220.pdf' }],
        articleUrl: ''
      }
    ],
    photos: [],
    articleUrl: ''
  },

  1993: {
    // 7 registros neste ano
    events: [
      {
        tag: 'gestao',
        title: 'SORAYA MACHADO FONTES',
        desc: 'Admissão da servidora técnico-administrativa SORAYA MACHADO FONTES, no Departamento de Administração e Contabilidade (DAD), com início das atividades em 11/01/1993.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'AFONSO AUGUSTO TEIXEIRA DE FREITAS DE CARVALHO LIMA',
        desc: 'Aprovação unânime da nomeação do Administrador AFONSO AUGUSTO TEIXEIRA DE FREITAS DE CARVALHO LIMA para o cargo de professor, com admissão no Departamento de Administração e Contabilidade (DAD), com início das atividades em 05/08/1993.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'DAD promove palestra',
        desc: 'O DAD promoveu palestra sobre "Técnicas Gerenciais Japonesas" no auditório do Departamento de Engenharia Florestal no dia 10 de novembro. Não tem o nome dos Professores (Procurar e acrescentar)',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'UFES Busca Integração com a UFV/DAD',
        desc: 'Com o objetivo de conhecer a sólida experiência da UFV na realização de eventos corporativos e de extensão, representantes da Universidade Federal do Espírito Santo (UFES) realizaram uma visita oficial ao campus de Viçosa. A equipe da UFES reuniu-se com docentes e técnicos da Comissão de Extensão do DAD, formalizando convite para a equipe do DAD ministrar palestras na UFES. Tiveram participação os professores e técnicos Cássia Viviani Silva Santiago, José Roberto Reis, Afonso Augusto Teixeira de Freitas de Carvalho Lima e Beatriz de Freitas Dias. n. 1261',
        photos: [{url: '/1993 - UFES UFV.png', caption: 'O grupo foi recebido na Imprensa Universitaria pelo diretor, professor José Geraldo Femandes de Araújo.'}],
        externalLinks: [{label: 'Jornal 1261', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/0/2/7/027d77ec7ea5d814b01b77ecebb6b905bd1a5c349b03311e88346165b8c74105/Edi____o_n1261.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Técnicas Gerenciais Japonesas',
        desc: 'O administrador de empresas Sérgio Maia Botelho, consultor do Armarinho Santo Antônio de Ubá (MG), proferiu uma palestra na Universidade Federal de Viçosa (UFV) abordando o tema "Técnicas Gerenciais Japonesas em Empresa Nacional: uma experiência positiva". O evento foi promovido pelo DAD/PET e coordenado pelo professor José Edson Lara. Em sua apresentação, Botelho detalhou o processo de implementação de gestão de qualidade no Armarinho, que englobou o uso de ferramentas estruturadas como seminários motivacionais, diagramas de causa e efeito.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      }
    ],
    photos: [],
    articleUrl: ''
  },

  1994: {
    // 7 registros neste ano
    events: [
      {
        tag: 'gestao',
        title: 'WALMER FARONI',
        desc: 'Admissão do docente WALMER FARONI no Departamento de Administração e Contabilidade (DAD), com início das atividades em 21/02/1994.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'PAULO SERGIO GREGORIO',
        desc: 'Admissão do servidor técnico-administrativo PAULO SÉRGIO GREGÓRIO, no Departamento de Administração e Contabilidade (DAD), com início das atividades em 10/02/1994.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'fundacao',
        title: 'Aprovação da Empresa Júnior na CEPE',
        desc: 'Ocorreu a aprovação da criação da Empresa Júnior de Consultoria em reunião realizada pela Coordenação de Ensino, Pesquisa e Extensão (CEPE) da UFV.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Ratificação da Criação do Curso de Direito',
        desc: 'Aprovação pelo DAD a criação do Curso de Direito e homologação do respectivo Plano de Curso, ratificando a decisão da Ata nº 53/91.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Primeira revista do PET',
        desc: 'O DAD lançou a primeira edição da Revista do PET Administração, sob a coordenação do professor José Edson Lara. A publicação visa divulgar as atividades de ensino, pesquisa e extensão desenvolvidas pelo grupo, além de oferecer um espaço para produções científicas de estudantes e professores.  n. 1288 (COLOCAR FOTO)',
        photos: [{url: '/1994 - Revista PET Administração.png', caption: 'Lançamento da primeira edição da Revista do PET Administração.'}],
        externalLinks: [{label: 'Jornal 1288', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/a/5/c/a5ccfa4ae170dc54a6c114a8ae64cf7cb5dab27e19d7e324c17622b74f1b82a2/Edi____o_n1288.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'fundacao',
        title: 'Criação do Centro Acadêmico de Consultoria – CACE',
        desc: 'Estudantes de Administração da UFV constituíram o Centro Acadêmico de Consultoria Empresarial (CACE), uma empresa júnior que visa aproximar a teoria acadêmica da prática profissional. A entidade presta serviços de consultoria e assessoria a micro, pequenas e médias empresas, além de produtores rurais da região. n. 1278',
        photos: [],
        externalLinks: [{label: 'Jornal 1278', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/7/e/0/7e0febcdb8f18c58089af568baef8503caf4229bddb157b1cee691c41c055a13/Edi____o_n1278.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Professores e estudantes de Administração realizam visita de estudos ao Sul de Minas',
        desc: 'Um grupo de professores e estudantes do curso de Administração visitou Santa Rita do Sapucaí para conhecer a estrutura do Inatel e seu processo de incubação de empresas. A equipe da UFV também foi convidada a auxiliar o Inatel na implantação de um programa com as atribuições do PET. n. 1279',
        photos: [],
        externalLinks: [{label: 'Jornal 1279', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/2/9/8/2989ba3332da1f4e1e43d78584929a4e443d7eed9ea451f8d9e30f39a22b6ba9/Edi____o_n1279.pdf' }],
        articleUrl: ''
      }
    ],
    photos: [
      { url: '', caption: 'O professor José Edson Lara fala durante o lançamento da revista.' },
      { url: '', caption: 'Professores e estudantes na visita ao sul de Minas.' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/1994-jornal-da-ufv'
  },

  1995: {
    // 5 registros neste ano
    events: [
      {
        tag: 'ensino',
        title: 'Seminário com a Professora Suzana Braga Rodrigues',
        desc: 'Anúncio da visita da professora Suzana Braga Rodrigues para a apresentação do seminário "Gerência e Cultura nas Organizações". (Procurar qual ATA)',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Curso de Chefia e Liderança',
        desc: 'O Curso de Chefia e Liderança, coordenado pelos professores José Edson Lara e Arnete Folgaça, recebeu uma avaliação positiva dos participantes. A iniciativa focou no desenvolvimento de habilidades gerenciais e na melhoria das relações interpessoais no ambiente de trabalho. O sucesso do evento reforçou a importância da capacitação contínua para o fortalecimento das lideranças na instituição.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      }
    ],
    photos: [
      { url: '', caption: 'Colação de grau dos novos profissionais.' },
      { url: '', caption: 'Os formandos da Turma de Julho de 1995.' },
      { url: '', caption: 'Pós Graduandos de Dezembro de 1995.' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/1995-jornal-da-ufv'
  },

  1996: {
    // 6 registros neste ano
    events: [
      {
        tag: 'gestao',
        title: 'LUIZ ANTÔNIO ABRANTES',
        desc: 'Admissão do Administrador LUIZ ANTÔNIO ABRANTES como docente no Departamento de Administração e Contabilidade (DAD), com início das atividades em 17/01/1996.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Ricardo Correa Gomes',
        desc: 'Admissão do docente Ricardo Correa Gomes no Departamento de Administração e Contabilidade (DAD), com início das atividades em 11/09/1996.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'homenagem',
        title: 'Homenagem ao CACE',
        desc: 'CACE recebe homenagem prestada pela Associação Comercial de Viçosa.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'homenagem',
        title: 'Docentes homenageados pela ASPUV',
        desc: 'O Colegiado decidiu estender a homenagem da ASPUV a todos os professores da ativa e também, em memória, aos professores Roberto Carvalho de Araújo e Gualberto Ferreira da Silva.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'nomeacao',
        title: 'Admissão de Professores no DAD',
        desc: 'Admissão dos docentes no Departamento de Administração e Contabilidade (DAD), com início das atividades em:\nLourival de Castro Vale 18/03/97,\nLuciana de Oliveira Miranda Gomes 12/03/1997, \nJorge Alberto dos Santos 28/05/1997\n\nADICIONAR UM POR CADA',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Professores do DAD na administração superior no período de 1996 a 2000',
        desc: 'Pró-Reitoria de Assuntos Comunitários - Prof. Walmer Faroni, \nCoordenadoria do Sistema Rádio e Televisão - Prof. Sérgio Augusto Pereira Monteiro,\nDiretoria de Recursos Humanos - Profa. Nina Rosa da Silveira Cunha. \nADICIONAR UM POR CADA',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      }
    ],
    photos: [
      { url: '', caption: 'Formandos de 1996.' },
      { url: '', caption: 'Parte da turma dos Formandos.' },
      { url: '', caption: 'Prof. Sérgio Augusto Pereira Monteiro”.jpg' },
      { url: '', caption: 'Profa. Nina Rosa da Silveira Cunha.' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/1996-jornal-da-ufv'
  },

  1997: {
    // 10 registros neste ano
    events: [
      {
        tag: 'nomeacao',
        title: 'Tutor do PET',
        desc: 'Aprovação do prof. Adriel Rodrigues de Oliveira como tutor do PET com voto de reconhecimento ao prof. José Edson Lara.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'nomeacao',
        title: 'Homologação de Concurso',
        desc: 'Aprovação unânime do resultado do concurso na área de Administração da Produção/Material/Novas Empresas, elegendo Luiz Cláudio Lopes Alves para o cargo de Professor Assistente I, em 07/05/1997  (PADRONIZAR)',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Aprovação da Especialização em Administração Municipal',
        desc: 'Aprovação da implantação do curso de especialização Lato-Sensu em Administração Municipal, com carga horária de 400 horas-aulas com disciplinas aos sábados. (PROCURAR QUAL ATA)',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Planejamento de Atividades de Extensão do 2º Semestre',
        desc: 'Deliberação sobre o cronograma que integrará o Dia do Administrador, Encontro Mineiro de Administração Municipal, Simpósio Sobre Qualidade Total, Semana de Trainees e curso de Gestão da Inovação.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Eliezer Egídio e Silva',
        desc: 'Admissão do docente Eliezer Egídio e Silva no Departamento de Administração e Contabilidade (DAD), com início das atividades em 25/08/1997.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Diretor do CCH',
        desc: 'Professor Adriel Rodrigues de Oliveira assume diretoria do CCH, para o período de 03/11/1997 a 11/01/2001.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'I Semana do Empresário e Atuação do DAD/CEE',
        desc: 'O Departamento de Administração e Economia (DAD) e o Conselho de Extensão (CEE) da UFV promovem, entre 12 e 18 de julho, a I Semana do Empresário. O evento tem como objetivo aproximar executivos e empresários da universidade, oferecendo conhecimentos técnicos e gerenciais para o desenvolvimento de diversos setores empresariais. (CONFERIR)',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Cursos do NAIPE',
        desc: 'O Núcleo de Assistência Integrada à Pequena Empresa (NAIPE) encerrou o curso de "Administração de Vendas", que foi ministrado por José Edson Lara para 34 inscritos. A coordenadora Nina Rosa Silveira Cunha confirmou que o NAIPE pretende repetir e ampliar a oferta de cursos. (CONFERIR)',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Posse na FUNARBE',
        desc: 'O Reitor da UFV, professor Geraldo Martins Chaves, empossou o prof. José Edson Lara (DAD) como novo Diretor Administrativo-Financeiro da Fundação Arthur Bernardes (FUNARBE) em substituição a José Clévio Dias Casali (DAD).',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      }
    ],
    photos: [
      { url: '', caption: 'O Reitor da UFV, professor Geraldo Martins Chaves, dá posse ao novo Diretor administrativo-financeiro da FUNARBE' },
      { url: '', caption: 'Volta às aulas.' },
      { url: '', caption: 'Esta matéria já foi relatada por Nina?' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/1997-jornal-da-ufv'
  },

  1998: {
    // 10 registros neste ano
    events: [
      {
        tag: 'gestao',
        title: 'Jailson de Oliveira Arieira',
        desc: 'Admissão do docente Jailson de Oliveira Arieira no Departamento de Administração e Contabilidade (DAD), com início das atividades em 26/05/1998.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'homenagem',
        title: 'Projeto PROIN e Parabenização pelo Resultado no Provão',
        desc: 'Atualizações sobre o status do Projeto PROIN e congratulações do Reitor parabenizando os professores do DAD pelo expressivo resultado obtido no Exame Nacional de Cursos (Provão).',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Primeiros Selecionados',
        desc: 'Uma Comissão de Seleção presidida pelo professor Adriel selecionou os quatro primeiros estudantes da turma de 1988 para integrarem o programa:  Carla Carvalho Malaquias, Edson Mauro Santos, Geraldo Magela de Abreu e Geraldo Vieira Júnior. (CONFERIR O ANO CORRETO)',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Implantação do PET na Administração',
        desc: 'O Departamento de Administração da UFV teve sua proposta aprovada pela CAPES para a implantação de um dos primeiros Programas Especiais de Treinamento do Brasil nessa área. O programa é orientado pelo professor Adriel Rodrigues de Oliveira, que atua como tutor e foi o responsável pela iniciativa da proposta. (Notícia de 1988)\nRelatado por Nina',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'UFV Promove II Semana do Empresário em Julho',
        desc: 'O Departamento de Administração e Economia (DAE) da Universidade Federal de Viçosa (UFV), em conjunto com o Conselho de Extensão, realizará entre os dias 10 e 14 de julho a II Semana do Empresário. \nEssa informação deve ser de 1987',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Novas Chefias',
        desc: 'Assumiu como primeiro chefe do Departamento de Administração (DAD) o professor Marcos Tanure Sanábio.  Departamento de Economia (DEE) Assumiu como primeiro chefe o professor Juraci Aureliano Teixeira, ocorrido em 19 de agosto de 1988, por ocasião do desmembramento do DAE. (CONFERIR)',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      }
    ],
    photos: [
      { url: '', caption: '1 Encontro de Administração Municipal da Zona da Mata' },
      { url: '', caption: 'Autoridades participantes da mesa redonda.' },
      { url: '', caption: 'O professor João Adamor.' },
      { url: '', caption: 'Relatado por Nina' },
      { url: '', caption: 'O Reitor Geraldo Martins Chaves cumprimenta o professor Marcos Tanure Sanábio, vendo-se, à direita, o professor Juraci Aureliano Teixeira.' },
      { url: '', caption: 'Os formandos e os homenageados da Turma de Janeiro de 1988 da Universidade Federal de Viçosa..' },
      { url: '', caption: 'Essa informação é de 1988' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/1998-jornal-da-ufv'
  },

  1999: {
    // 5 registros neste ano
    events: [
      {
        tag: 'ensino',
        title: 'Aula Inaugural da Pós-Graduação em Gestão Estratégica',
        desc: 'Realização da aula inaugural do Curso de Pós-Graduação Lato Sensu em Gestão Estratégica, com preenchimento total das vagas ofertadas.\n\n(PROCURAR MAIS COISAS DE 1999)',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      }
    ],
    photos: [
      { url: '', caption: 'Formandos de Março de 1999.' },
      { url: '', caption: 'O pró-reitor Walmer Faroni e os novos membros da CMA.' },
      { url: '', caption: 'Parte do público do seminário.' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/1999-jornal-da-ufv'
  },

  2000: {
    // 6 registros neste ano
    events: [
      {
        tag: 'ensino',
        title: 'Segunda Turma de Gestão Estratégica e Novo Laboratório',
        desc: 'Avaliação do projeto de Pós-Graduação para a Agência de Desenvolvimento de Ubá (2ª turma em Gestão Estratégica). Efetivação do novo Laboratório de Informática estruturado com recursos do PROIN.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'infraestrutura',
        title: 'Agradecimento por Instalação da Sala do CACE',
        desc: 'Alocação de 4 salas no subsolo do anexo ao Prédio de Ciências Humanas, Letras e Artes para abrigar o CACE, monitoria, almoxarifado/arquivo morto e pequenas reuniões.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Encontro Mineiro de Empresas',
        desc: 'O evento reuniu representantes de diversas empresas juniores, entre elas, o CACE e entidades de classe para discutir o mercado de trabalho.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Posse de Chefes de Departamento',
        desc: 'O professor Walmer Faroni é empossado como chefe do Departamento de Administração (DAD) em 15/12/2000 a 15/12/2004.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      }
    ],
    photos: [
      { url: '', caption: 'A diretora Nina Rosa da Silveira Cunha recebe a homenagem dos funcionários da DRH.' },
      { url: '', caption: 'Momento da entrega do material aos representantes da Luve.' },
      { url: '', caption: 'O futebol dos veteranos.' },
      { url: '', caption: 'Os Formandos de Janeiro de 2000.' },
      { url: '', caption: 'Os Formandos de Outubro de 2000.' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/2000-jornal-da-ufv'
  },

  2001: {
    // 7 registros neste ano
    events: [
      {
        tag: 'extensao',
        title: 'Curso de administração comemora 25 Anos',
        desc: 'O vigésimo quinto aniversário do curso de Administração, foi organizado pela Comissão de Extensão, coordenação do curso e a chefia do DAD.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Demanda de Pós-Graduação em Ponte Nova',
        desc: 'Professores do DAD debatem solicitação da Faculdade de Ciências Contábeis (FACCO) de Ponte Nova (MG) para o oferecimento de uma turma de Pós-Graduação Lato Sensu.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Encerramento de Turma em Ubá',
        desc: 'Pós-Graduação Lato Sensu conclui as atividades na cidade de Ubá e encerra a primeira turma do Curso de Pós-Graduação Lato Sensu.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'I Meeting de Administração',
        desc: 'Evento coordenado pelos professores do DAD, idealizado para oferecer cursos de curta duração com o tema "Novas Tecnologias e Administração".',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'reconhecimento',
        title: 'Excelência em Administração',
        desc: 'O curso de Administração da UFV manteve a avaliação "A" consecutivamente desde 1997.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      }
    ],
    photos: [
      { url: '', caption: 'Autoridades na mesa de abertura do Meeting de Administração.' },
      { url: '', caption: 'Cleiton, Jorge Alberto e Alessandra.' },
      { url: '', caption: 'Formandos de Agosto de 2001.' },
      { url: '', caption: 'Mesa que presidiu a posse dos novos chefes de departamentos.' },
      { url: '', caption: 'Os Formandos de Março de 2001.' },
      { url: '', caption: 'Processo Seletivo de 2001.' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/2001-jornal-da-ufv'
  },

  2002: {
    // 11 registros neste ano
    events: [
      {
        tag: 'gestao',
        title: 'RODRIGO GAVA',
        desc: 'Admissão do docente RODRIGO GAVA no Departamento de Administração e Contabilidade (DAD), com início das atividades em 01/07/2002.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'SUELY DE FATIMA RAMOS SILVEIRA',
        desc: 'Admissão da docente SUELY DE FATIMA RAMOS SILVEIRA no Departamento de Administração e Contabilidade (DAD), com início das atividades em 03/07/2002.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Mudança de Nomenclatura em Pós-Graduação',
        desc: 'Alteração do nome do Curso de Pós-Graduação Lato Sensu de \'Gestão Empresarial\' para \'Gestão e Diagnóstico Empresarial\'.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Novas Turmas de Especialização 2002/2003',
        desc: 'Aprovação pelo DAD da abertura de novas turmas em Gestão Estratégica e em Gestão e Diagnóstico Empresarial.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      }
    ],
    photos: [
      { url: '', caption: 'Autoridades discutem o Centev.' },
      { url: '', caption: 'Formandos de Maio de 2002.' },
      { url: '', caption: 'Formandos de Setembro de 2002.' },
      { url: '', caption: 'O servidor Daniel assina o livro de posse.' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/2002-jornal-da-ufv'
  },

  2003: {
    // 6 registros neste ano
    events: [
      {
        tag: 'infraestrutura',
        title: 'Convênio DAD e MASTERMAQ',
        desc: 'Formalização de parceria com a empresa MASTERMAQ para a cessão de softwares especializados voltados ao suporte da prática de contabilidade nos cursos do DAD.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Novas Ofertas e Curso em Gestão Municipal',
        desc: 'Aprovação pelo DAD da primeira turma do novo curso de pós-graduação lato sensu em Gestão Municipal.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'infraestrutura',
        title: 'Comemoração do 15º Aniversário do DAD',
        desc: 'DAD comemora a consolidação de seu décimo quinto aniversário, como unidade acadêmica após o desmembramento do antigo DAE.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      }
    ],
    photos: [],
    articleUrl: ''
  },

  2004: {
    // 14 registros neste ano
    events: [
      {
        tag: 'gestao',
        title: 'NÁLBIA DE ARAUJO SANTOS',
        desc: 'Admissão da docente NÁLBIA DE ARAUJO SANTOS no Departamento de Administração e Contabilidade (DAD), com início das atividades em 28/04/2004.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'LUIZA AMELIA DE ARRUDA LADEIRA',
        desc: 'Admissão da servidora técnico-administrativo LUIZA AMELIA DE ARRUDA LADEIRA, ocupando o cargo de ASSISTENTE EM ADMINISTRAÇÃO no Departamento de Administração e Contabilidade (DAD), com início das atividades em 01/06/2004.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Pós Graduação em Stricto Sensu em Administração Pública',
        desc: 'Aprovação de Criação do Curso de Pós-Graduação Stricto Sensu focado na área de Administração Pública/Gestão Municipal.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Mec reconhece o curso de Ciências Contábeis',
        desc: 'Foi homologado pelo MEC, pela Portaria n.º 1628, que oficializou o reconhecimento do curso de Ciências Contábeis.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Moções de Congratulações ao DAD',
        desc: 'Moção do Conselho departamental do CCH pela aprovação do Mestrado em Administração Pública e Congratulações da Câmara Municipal de Viçosa pelo sucesso do I Seminário de Contabilidade.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Chefe do DAD',
        desc: 'Professor Walmer Faroni é reconduzido e empossado como chefe do DAD para o novo quadriênio em 15 de dezembro de 2004 a 20 de fevereiro de 2006.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      }
    ],
    photos: [
      { url: '', caption: 'Carlos Sediyama e Cláudio Furtado na lista do MEC.' },
      { url: '', caption: 'Carlos Sediyama e Cláudio Furtado.' },
      { url: '', caption: 'Formandos de Janeiro de 2004.' },
      { url: '', caption: 'Formandos de Julho de 2004.' },
      { url: '', caption: 'O professor Orlando Monteiro da Silva fala durante sua posse.' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/2004-jornal-da-ufv'
  },

  2005: {
    // 6 registros neste ano
    events: [
      {
        tag: 'gestao',
        title: 'MARCO AURELIO MARQUES FERREIRA',
        desc: 'Admissão do docente MARCO AURELIO MARQUES FERREIRA no Departamento de Administração e Contabilidade (DAD), com início das atividades em 06/09/2005.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Convênio entre o DAD e a Secretaria Estadual do Meio Ambiente e Desenvolvimento Sustentável SEMAD - MG.',
        desc: 'Em abril de 2005, o Departamento de Administração DAD realizou o curso "Desenvolvimento de Habilidades para Chefes e Supervisores". Fruto de convênio com a Semad, o treinamento capacitou 58 diretores do IEF, da FEAM e da própria secretaria no Centro de Ensino de Extensão, sob a condução de professores do DAD, as palestras abordaram temas como planejamento, motivação, gerenciamento e ética no serviço público.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Alinhamento Estratégico da Gestão Institucional',
        desc: 'Sob a coordenação da Pró-Reitoria de Planejamento e Orçamento, professores do Departamento de Administração (DAD) ministraram palestras sobre Planejamento Estratégico Institucional para as chefias da UFV. Integradas ao Plano de Gestão 2005–2008.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      }
    ],
    photos: [
      { url: '', caption: 'Formandos de Janeiro de 2005.' },
      { url: '', caption: 'Participantes do treinamento no CEE.' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/2005-jornal-da-ufv'
  },

  2006: {
    // 9 registros neste ano
    events: [
      {
        tag: 'gestao',
        title: 'MAGNUS LUIZ EMMENDOERFER',
        desc: 'Admissão do docente MAGNUS LUIZ EMMENDOERFER no Departamento de Administração e Contabilidade (DAD), com início das atividades em 04/08/2006.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'THIAGO DE MELO TEIXEIRA DA COSTA',
        desc: 'Admissão do docente THIAGO DE MELO TEIXEIRA DA COSTA no Departamento de Administração e Contabilidade (DAD), com início das atividades em 07/11/2006.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Criação do Curso em Controladoria e Finanças',
        desc: 'Criação do Curso de Pós-Graduação Lato Sensu em Controladoria e Finanças, com previsão de início para novembro de 2006.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Implantação do Curso de Administração a Distância (EAD)',
        desc: 'Definições dos coordenadores e comissão para o curso EAD (Resolução 5/2006), com início em agosto nos polos de Viçosa e Florestal, além de autorização para compra de equipamentos e seleção de 11 tutores.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'infraestrutura',
        title: 'Capacitação para Gestores',
        desc: 'Ciclo de palestras voltado para dirigentes, ministrado por professores do DAD.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Professor Walmer Faroni assume diretoria do CCH, no período de 20/02/2006 a 30/03/2010 e 30/03/2010 a 22/04/2014.',
        desc: '',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Criação da Coopera',
        desc: 'Comissão instituída para otimização dos procedimentos e rotinas administrativas da universidade.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      }
    ],
    photos: [
      { url: '', caption: 'Formandos de Janeiro de 2005.' },
      { url: '', caption: 'Participantes do treinamento no CEE.' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/2006-jornal-da-ufv'
  },

  2007: {
    // 4 registros neste ano
    events: [
      {
        tag: 'ensino',
        title: 'Novas Turmas de Lato Sensu (2007-2009)',
        desc: 'Abertura de duas turmas para as especializações em Gestão Estratégica e em Gestão e Diagnóstico Empresarial.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Mudança de Nome do Departamento de Administração',
        desc: 'Alteração da denominação do Departamento de Administração, que passou a se chamar OFICIALMENTE DEPARTAMENTO DE ADMINISTRAÇÃO E CONTABILIDADE, ocorrido em 07 março de 2007, Ata 251.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      }
    ],
    photos: [],
    articleUrl: ''
  },

  2008: {
    // 3 registros neste ano
    events: [
      {
        tag: 'extensao',
        title: 'Cace Consultoria Jr.',
        desc: 'O Cace Consultoria Jr, participou da 3ª Junior Enterprise World Conference na cidade de Porto, em Portugal.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: '15 Anos do CACE',
        desc: 'Em 12 de agosto de 2008 foram comemorados os 15 anos da Central de Empresas Juniores (CACE).',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'PET comemora 20 anos',
        desc: 'O PET ADM completou 20 anos no DAD, tendo sido o professor Adriel Rodrigues de Oliveira indicado pelo colegiado como primeiro tutor, em 19 de outubro de 1988.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      }
    ],
    photos: [],
    articleUrl: ''
  }
};