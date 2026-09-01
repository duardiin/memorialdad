import { isReadable } from 'stream';
import { MemorialData } from '../types';
import { Tag } from 'lucide-react';
import { url } from 'inspector';
import { label } from 'motion/react-client';

export const memorialData: MemorialData = {
  1974: {
    events: [
      {
        tag: '',
        title: 'Gênese do Curso de Administração',
        desc: 'O Conselho de Graduação estudou a viabilidade de implantação do Curso de Administração de Empresas, para o qual também se pensou em uma possível diversificação em  Administração de Empresas Rurais (06 set. nº 321).',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      }
    ],
    photos: [],
    articleUrl: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/4/2/7/427a9528694d18179e601a9dbd1dd0ad3bd6e3d4a9883acea2fa9cda6441ee46/Edi____o_n321.pdf'
  },

  1975: {
    events: [
      {
        tag: '',
        title: 'A Criação do Instituto de Ciências Humanas: Primeira Passos e Aprovação',
        desc: 'Da Escola Superior de Ciências Domésticas germinaram as Ciências Humanas com a implantação do Instituto de Ciências Humanas, aprovado em duas instâncias: CEPE (Ata 72 de 1975) e CONSU (Ata 42/75).)\nO anteprojeto de implantação do Instituto foi elaborado por um Grupo de Trabalho (Portaria 506/75), tendo como membros Bel. Hamilton Martins Silveira, Professores Juraci Aureliano Teixeira, Eloy Gava e Maria da Conceição Rolim Simões. O plenário do CEPE aprovou na parte referente aos Departamentos, como proposto, deixando a posteriori o exame referente aos currículos e planos de estudo. Na reunião do CONSU a proposta do Conselheiro M. Maestri foi aprovada por unanimidade: "apoiar a implantação do Instituto de Ciências Humanas".',
        photos: [{
          url: 'public/1975 - ATA 42.75.jpeg',      // Caminho do arquivo da imagem (ex: '/foto.jpg')
          caption: 'ATA 42/75'   // Legenda ou descrição da foto
        }],
        externalLinks: [],
        articleUrl: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/a/b/3/ab3e2c941dd8e96fbadc03dc9761e014427d3fb1ea8939b02c7be861f5753f89/Edi____o_n395.pdf'
      },
      {
        tag: '',
        title: 'Criação do Curso de Administração',
        desc: 'O Curso de Administração de Empresas estava apto a formar bacharel em Administração Pública e de Empresas, estando credenciado para os cargos técnicos de Administração do Serviço Público Federal, Estadual, Municipal, Autárquico e outros, exercendo funções de chefia ou direção, assessoramento e consultoria. Em complemento, o profissional poderia realizar pesquisas, estudos, análises, interpretação, planejamento, Implantação, соordenação e controle dos trabalhos nos campos de administração geral e outros conexos. Estava também credenciado para o magistério em matérias técnicas do campo de Administração na Organização. (12set. n.395)',
        photos: [],
        externalLinks: [],
        articleUrl: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/a/b/3/ab3e2c941dd8e96fbadc03dc9761e014427d3fb1ea8939b02c7be861f5753f89/Edi____o_n395.pdf'
      },
      {
        tag: '',
        title: 'Início das primeiras turmas de Administração',
        desc: 'O curso de Administração recebe as primeiras turmas regulares, sendo 25 vagas para o curso de Administração de Empresas e 25 vagas para o curso de Ciências Econômicas. (12set. n.395)',
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
        tag: '',
        title: 'EVALDO GUIMARÃES BARBOSA',
        desc: 'Admissão do docente Evaldo Guimarães Barbosa no Departamento de  Administração e Economia (DAE), com início das atividades em 01/11/1976.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: '',
        title: 'Primeiro Vestibular',
        desc: 'Foram oferecidas 25 vagas no vestibular de 1976 para o Curso de Administração de Empresas e 25 para o curso de Ciências Econômicas (02jan. n.409)',
        photos: [],
        externalLinks: [],
        articleUrl: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/d/9/1/d91b0ad695cd2f0a5139e81f6f482ae50931a8e2a640b9219ecdf4840b6f05b1/Edi____o_n409.pdf'
      },
      {
        tag: '',
        title: 'A Comissão de Implantação e a Estruturação Administrativa do ICH',
        desc: 'Pela Portaria nº 70 de 11 de fevereiro de 1976, o Reitor designou os Professores Evonir Batista de Oliveira, Juraci Aureliano Teixeira, Sônia Coelho de Alvarenga e Maria da Conceição Rolim Simões para, em comissão, equacionamento das providências à efetiva implantação do Instituto de Ciências Humanas, apresentando a relação numérica e nominal dos componentes de cada Departamento do Instituto, com discriminação e remanejamento de pessoal, caso necessário, à lotação dos vários Departamentos do Instituto.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: '',
        title: 'Concurso Docente',
        desc: 'Os recém-criados cursos de Administração de Empresas e de Ciências Econômicas (DAE), cada qual, foi contemplado com 1 vaga para Professor Assistente (29jul. n. 437).',
        photos: [],
        externalLinks: [],
        articleUrl: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/6/f/3/6f36866d488283761f6173e291566e4ba50ee066c9fcd15dfcbc6df7b75ca5fb/Edi____o_n437.pdf'
      },
      {
        tag: '',
        title: 'Ampliação de Vagas',
        desc: 'O Curso de Administração e o Curso de Ciências Econômicas com 25 vagas passaram a oferecer 50 vagas cada no Vestibular Unificado de 1977 (23set. n.445).',
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
        tag: '',
        title: 'Implantação do DAE',
        desc: 'Implantação do Departamento de Administração e de Economia (DAE) e a constituição de suas respectivas Câmaras Curriculares, com nomeação do primeiro chefe do DAE, Prof. Juraci Aureliano, (19 de maio de 1977 N.° 478). O Departamento de Administração e Economia (DAE) agregava os cursos de Administração de Empresas e Economia, responsáveis pelas disciplinas das áreas de Administração, Contabilidade, Direito, Economia e Ciências Sociais.',
        photos: [],
        externalLinks: [],
        articleUrl: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/5/0/f/50f5df33d815cc0efb414e84f7390e5a4c6007d406997062ff50f104c1815097/Edi____o_n478.pdf'
      },
      {
        tag: '',
        title: 'Indicação Projeto Rondon',
        desc: 'Para o Projeto Rondon foi indicado Carlos Alberto Freire Resende, integrante do DAE, para elaborar o programa de trabalho da equipe da UFV (11ago. n.490).',
        photos: [],
        externalLinks: [],
        articleUrl: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/e/5/0/e50f424095bb6fed23bd71c1bca011e6f11238276f1c6d5028d3c9b343a6a3f9/Edi____o_n490.pdf'
      },
      {
        tag: '',
        title: 'MARIA DA GRACA NEMER JENTZSCH',
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
        tag: '',
        title: 'JACINTO LUIZ DA SILVA',
        desc: 'Admissão do docente JACINTO LUIZ DA SILVA no Departamento de  Administração e Economia (DAE), com início das atividades em 03/04/1978.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: '',
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
        title: 'ADRIEL RODRIGUES DE OLIVEIRA',
        desc: 'Admissão do docente ADRIEL RODRIGUES DE OLIVEIRA no Departamento de Administração e Economia (DAE), com início das atividades em 01/03/1979.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'MARIA DE FÁTIMA TEIXEIRA SANTOS',
        desc: 'Admissão da docente MARIA DE FÁTIMA TEIXEIRA SANTOS no Departamento de Administração e Economia (DAE), com início das atividades em 01/03/1979.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'JOSÉ REINALDO PINHEIRO DINIZ',
        desc: 'Admissão do docente JOSÉ REINALDO PINHEIRO DINIZ no Departamento de Administração e Economia (DAE), com início das atividades em 01/03/1979.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'ALBERTO ESPERANÇA',
        desc: 'Admissão da docente ALBERTO ESPERANÇA no Departamento de Administração e Economia (DAE), com início das atividades em 01/03/1979.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'NINA ROSA DA SILVEIRA CUNHA',
        desc: 'Admissão da docente NINA ROSA DA SILVEIRA CUNHA no Departamento de Administração e Economia (DAE), com início das atividades em 17/09/1979.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Inclusão em Comissão e Programação da I Semana do Administrador',
        desc: '21 a 26 de Maio de 1979 foi programada a realização da I Semana do Administrador, uma celebração institucional composta por um cronograma diário. ATA N.4',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'GUALBERTO FERREIRA DA SILVA',
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
        photos: [
        ],
        externalLinks: [],
        articleUrl: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/3/1/5/315a4978baa8c3e8ee2d94b1bbd7d7a785d41767e9f639294d00986c176e4a66/Edi____o_n564.pdf'
      },
      {
        tag: 'gestao',
        title: 'UFV em Destaque: Menção Honrosa Nacional e Posse de Novos Diretores de Centro',
        desc: 'Também nesse ano foram nomeados pelo Ministro da Educação e Cultura e empossados pelo Reitor os novos Diretores dos CCA e do CCH os professores Renato Mário Del Giudice e Dilson Seabra Rocha. (08mar. n. 571).',
        photos: [{
          url: '/1979 “Novos Diretores”.webp',      // Caminho do arquivo da imagem (ex: '/foto.jpg')
          caption: 'A posse dos novos diretores.'   // Legenda ou descrição da foto
        }],
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
        title: 'NANCI PEREIRA DE VASCONCELOS',
        desc: 'Admissão da docente NANCI PEREIRA DE VASCONCELOS no Departamento de Administração e Economia (DAE), com início das atividades em 17/03/1980.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'MILTON RODRIGUES NATALINO',
        desc: 'Admissão do docente MILTON RODRIGUES NATALINO  no Departamento de Administração e Economia (DAE), com início das atividades em 24/03/1980.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'SERGIO AUGUSTO PEREIRA MONTEIRO',
        desc: 'Admissão do servidor técnico-administrativo SÉRGIO AUGUSTO PEREIRA MONTEIRO, no Departamento de Administração e Economia (DAE), com início das atividades em 06/11/1980.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Eloy Alves Filho',
        desc: 'Foi empossado "pro tempore" na chefia do Departamento de Administração e Economia o Prof. Eloy Alves Filho, substituindo o Prof. Tancredo Almada Cruz, em treinamento. (06mar. n.623). (MUDAR A FOTO)',
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
          label: 'Jornal 658', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/a/7/1/a71a323bf853d9fb08578f9a29ecc38029f45781e7060e12e9970c9e44b04783/Edi____o_n658.pdf'
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
        desc: 'Em comemoração à II Semana do Administrador o DAE promoveu o evento com o tema "Panorama Atual da Administração no Brasil", com participação de 300 autoridades e empresários de Viçosa e região, professores e alunos. Foram ministradas várias palestras, tendo como palestrantes Agrícola de Souza Bethlem, Professor do Mestrado de Administração da COPPE/COPPEAD que discorreu sobre o Panorama Atual da Administração no Brasil; Mário Leme Galvão e Luiz Torello falaram sobre a administração da empresa estatal da EMBRAER; Hélcio Guimarães discorreu sobre a Desburocratização e Administração; e o empresário Gabriel Donato de Andrade, da Construtora Andrade Gutierrez S. A. e da Cooperativa Agroflorestal Ltda. falou sobre a Administração da Empresa Privada Brasileira e o Cooperativismo; o Secretário de Administração do Estado de Minas Gerais, deputado José Machado Sobrinho sobre Administração Pública; o Presidente da FIAT Automóveis S.A. Miguel Augusto Gonçalves de Souza falou sobre Administração da Empresa Multinacional na Atual Conjuntura Econômica; e o presidente do Conselho Federal de Técnicos de Administração, Guilherme Quintanilha de Almeida discorreu sobre a Administração na Média Empresa Brasileira e o papel do Técnico de Administração. (14mai. n.686. 28mai. n.687). (CONFERIR O LINK DO 686)',
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
        desc: 'Em 05 de junho de 1981, o chefe do departamento informou sobre um importante convênio firmado com a Companhia Canavieira de Mineração, via FUNARBE. O DAE recebeu dotação de duzentos mil cruzeiros para novos livros na biblioteca. (CONFERIR A ATA)',
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
        desc: 'Tomou posse como chefe do Departamento de Administração e Economia o Prof. Gilson Faria Potsch Magalhães. (26nov. n.713).',
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
        title: 'LUIS CARLOS DE FREITAS',
        desc: 'Admissão do servidor técnico-administrativo LUIS CARLOS DE FREITAS, no Departamento de Administração e Economia (DAE), com início das atividades em 08/07/1982.',
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
        photos: [{ url: '/1982 - I Ciclo de Estudos Contábeis.jpg', caption: 'I Ciclo de Estudos Contábeis na UFV.' },],
        externalLinks: [{ label: 'Jornal 757', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/b/4/1/b41aea5e955829e4dc9f3530126a241b94cdc999c4e342dfac222ffd3680ab54/Edi____o_n757.pdf' },
        { label: 'Jornal 760', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/e/b/7/eb72d157a7cef8856b08a8308f0c8189c413c91656c70bc0cc916c6c6c9a7fba/Edi____o_n760.pdf' }
        ],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Estudantes de Administração e Economia vivenciam a prática da gestão pública em Juiz de Fora',
        desc: 'Estudantes de Administração e Economia participam de debates em Juiz de Fora, visitando a Prefeitura e órgãos de administração municipal com o objetivo de proporcionar complementação da formação técnico-profissional, pelo contato com a prática administrativa. Foi realizado um ciclo de palestras e debates sobre a administração de cidades de médio porte, com a participação do prefeito Francisco Antônio Mello Reis, do secretário municipal da Fazenda, Vicente Araújo dos Santos, e do ex-diretor da autarquia IPPLAN, José Márcio Paschoalino. Foram abordados aspectos administrativos e jurídicos, como processos de limpeza urbana, раvimentação de ruas e urbanização, além de contatos com presidiários albergados, que trabalhavam em obras do município. O grupo, formado por alunos da disciplina Administração Municipal, teve como acompanhante o professor Marcos Tanure Sanábio, do DAE. (14out. n.759).',
        photos: [],
        externalLinks: [{ label: 'Jornal 759', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/4/5/c/45c49b54df83bc93d64f235c6ed2cbe5c4b5e40f43015f958d3eb975c050d1c6/Edi____o_n759.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'UFV realiza II Ciclo de Estudos Jurídicos com a presença de renomados especialistas',
        desc: 'Com cinco palestras, seguidas de debates, e com a participação de professores e estudantes, advogados e empresários da região, o DAE realizou o II Ciclo de Estudos Jurídicos. O evento foi coordenado pela Profa. Valéria Aroeira Braga Valéria Duarte Ferreira, Profa. Maria Elena Barbassa, presidente da Comissão de Extensão do DAE; e os Juízes de Direito, Júlio Henrique Prado Bueno e Wander Paulo Marotta Моreira. O Professor Jair Leonardo Lopes, titular de Direito Penal da UFMG e ex-desembargador do Tribunal de Justiça, falou sobre Direito Penal Econômico; o professor Osmar Brina discorreu sobre Sociedade Anônima, e o professor Paulo Emílio Ribeiro de Vilhena abordou o tema Principio de Direito do Trabalho. Os professores José Alfredo Baracho e Paulo Neves de Carvalho falaram, respectivamente, sobre Federalismo e Administração Municipal em Perspectiva. (21out. n.760). (COLOCAR A FOTO)',
        photos: [],
        externalLinks: [{ label: 'Jornal 760', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/e/b/7/eb72d157a7cef8856b08a8308f0c8189c413c91656c70bc0cc916c6c6c9a7fba/Edi____o_n760.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'FACCO e UFV promovem a II Semana do Contador em Ponte Nova',
        desc: 'A Faculdade de Ciências Contábeis de Ponte Nova (FACCO), com apoio da UFV e colaboração da Fundação Arthur Bernardes, realizou a II Semana do Contador com o tema "O Processo Econômico e suas Relações Contábeis e Sociais". Os trabalhos contaram com a palestra sobre "O Crédito Agrícola no Brasil", pelo diretor José Kleber Leite de Castro, da Carteira de Crédito Agrícola do Banco Central do Brasil e os demais palestrantes foram o professor Antônio Luiz de Lima, do Departamento de Economia Rural da UFV, os professores José Edson Lara e Nanci Pereira de Vasconcelos do DAE; e o engenheiro industrial Francisco José de Almeida Neto, da Cia. Industrial de Papel, do Rio de Janeiro.  (21out. n.760).',
        photos: [],
        externalLinks: [{ label: 'Jornal 760', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/e/b/7/eb72d157a7cef8856b08a8308f0c8189c413c91656c70bc0cc916c6c6c9a7fba/Edi____o_n760.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Alunos de Administração da UFV realizam visita técnica à Pink Alimentos em Belo Horizonte',
        desc: 'Os alunos do curso de Administração de Empresas realizaram uma visita à Pink Alimentos do Brasil Ltda., em Belo Horizonte, como parte das exigências práticas da disciplina "Administração de Vendas". Os visitantes percorreram as instalações da empresa, com demonstrações do processo de fabricação e embalagem de seus produtos. O gerente administrativo Adalberto Carneiro fez palestra, enfatizando os problemas de comercialização, os tipos de clientes, o sistema de distribuição e de preços, as estratégias mercadológicas adotadas para se firmar no mercado e das dificuldades da empresa, pois trabalha com capital próprio e é familiar. A viagem foi coordenada pelo professor João Adamor Dias Neves, responsável pela área mercadológica do DAE.  (18nov. n.764).',
        photos: [],
        externalLinks: [{ label: 'Jornal 764', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/4/7/e/47ef22f1995767c0635689f52020a28d21b528f9a7447c6fd4f32eecca21eed2/Edi____o_n764.pdf' }],
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
        externalLinks: [{ label: 'Jornal 780', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/6/3/8/6381ca3ffd2fdf9236972a87af128a888e889c24adcbe29b220bc3b627bfc2c0/Edi____o_n780.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Professores do DAE Participaram de Seminário da IBM no Rio de Janeiro',
        desc: 'Foi realizado, no Rio de Janeiro, o Seminário de Planejamento e Controle da Produção para Docentes Universitários, no Centro Educacional Residencial da Gávea, sob o patrocínio da IBM do Brasil - Indústria, Máquinas e Serviços Ltda., com o objetivo de reciclar na área de Planejamento е Controle da Produção, mediante a aplicação do Conceito COPICS (modelo para implantar sistemas na indústria), e, ainda, estimular o entrosamento entre docentes de várias universidades, nas áreas de Administração da Produção e Engenharia Industrial. Participaram do seminário 20 professores, e a UFV foi representada pelos professores Nina Rosa da Silveira Cunha e José Edson Lara, ambos do DAE. (14abr. n.786).',
        photos: [],
        externalLinks: [{ label: 'Jornal 786', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/d/2/f/d2f0e8a5bf4836231ef684d99b70b716ae16c51f254a89acbcdf403cd65b8ab6/Edi____o_n786.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Professor do DAE Ministrou Treinamento para Servidores da Funarbe',
        desc: 'A Fundação Arthur Bernardes (Funarbe) promoveu um Curso de Treinamento Intensivo para seus servidores, ministrado pelo professor João Adamor Dias Neves, do DAE. O curso, primeiro de uma série, teve a presença de 35 servidores, além dos dirigentes da área comercial e da administração da Funarbe. Seu objetivo foi oferecer conhecimentos para a melhoria do atendimento aos usuários do supermercado. Os demais cursos, também com palestras e debates, foram dirigidos por professores do DAE, com a participação inclusive de estudantes da UFV. O presidente da Funarbe, Afonso Sérgio Corrêa de Faria, afirmou que o órgão estava com nova diretriz, para maior integração com a UFV, cumprindo assim seus objetivos estatutários: dar apoio direto às atividades de Ensino, Pesquisa e Extensão. (28abr. n.788).',
        photos: [{ url: '/1983 - curso.jpg', caption: 'Os servidores da Funarbe' }],
        externalLinks: [{ label: 'Jornal 788', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/7/1/7/717fd72fe189750434fe6c362a126c639a027091d5daf6323641269f94ac2248/Edi____o_n788.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Instituição da Data Oficial de Aniversário do DAE',
        desc: 'Em 10 de maio de 1983, ficou formalmente instituído o dia 10 de maio como a data oficial de aniversário e comemoração do DAE. A celebração foi estabelecida pelo fato de o departamento ter sido originalmente implantado e instalado nesta respectiva data. (PROCURAR ATA)' ,
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'IV Semana do Administrador Discutiu Pequenas e Médias Empresas',
        desc: 'O empresário Nicolau Martino debateu na IV Semana do Administrador o tema central "Administração na Pequena e Média Empresa" e teve como palestrantes o administrador de empresas Luiz Inácio Tadeu Muraro e o empresário José de Almeida Neto. Sobre "Computadores: Panorama Nacional" foi abordado por Luís Julião Braga, técnico da Central de Processamento de Dados da UFV e Paulo Bastos Tigre, do Instituto de Economia Industrial da UFRJ. Os demais palestrantes convidados foram: Alderino Vieira Ferraz, de Guarani-MG, que fez um "Depoimento de um empresário da Zona da Mata sobre sua experiência em consórcio para exportação"; Francisco José de Almeida Neto, de Ponte Nova- MG, sobre "Dificuldades da Pequena e Média Empresa no Interior"; e Nicolau Martino Netto, sobre "Aspectos de Treinamento de Pessoal em P.M.C." (12mai. n.790; 19mai. n.791 e. 4 26mai. n.792).',
        photos: [{ url: '/1983 - IV Semana do Administrador.png', caption: 'Na sessão de abertura, o conferencista Luiz Inácio Tadeu Muraro, o Reitor Antônio Fagundes de Sousa, que presidiu os trabalhos, o professor Gilson Faria Potsch Magalhães e a empresária Rosa Maria. Bouchardet. ' },
        { url: '/1983 - IV Semana do Administrador Capa.jpeg', caption: 'IV Semana do Administrador' },
        ],
        externalLinks: [{ label: 'Jornal 790', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/f/f/c/ffc32671dfde82d6163d61c4cf4db8bc6f80bed06c389856dbf6d25848b01759/Edi____o_n790.pdf' },
        { label: 'Jornal 791', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/8/9/8/8987bf7efbcff437c92b154509d89a43643c370aaa2a1be4bb1fd762689e3ddb/Edi____o_n791.pdf' },
        { label: 'Jornal 792', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/3/a/7/3a7bee5c46dcecc987722efb243fb4544a053508ff77126b18c0a9bd566a1e74/Edi____o_n792.pdf' }
        ],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Estudantes de Administração Realizaram Visita Técnica em Congonhas',
        desc: 'Alunos do Curso de Administração de Empresas, da disciplina Administração de Pessoal I, realizaram viagem de estudos à Ferteco Mineração S/A, empresa de metalurgia, no município de Congonhas, sob a coordenação do professor João Adamor Dias Neves.  O objetivo foi conhecer práticas de pessoal e os serviços executados pelos chefes do Departamento Social, de Administração de Pessoal e de Segurança e Higiene do Trabalho, que fizeram uma rápida exposição de cada setor. Depois, os visitantes foram conhecer o sistema de pessoal da Prefeitura de Congonhas e suas práticas de pessoal. Foi interessante aos alunos constatar o que realmente está sendo feito em termos de administração de pessoal numa prefeitura e em uma empresa privada, com 1.400 empregados. Na oportunidade, a Ferteco colocou-se à disposição da UFV para novos contatos, incluindo a possibilidade de estágio para os estudantes do curso de Administração de Empresas. (1ºjun. n.793).',
        photos: [],
        externalLinks: [{ label: 'Jornal 793', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/3/b/e/3be59cb6e1c27fe91d12ac96dc8be0ee184be1921eabe1f616f50d1c8f6c2293/Edi____o_n793.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Professor Gilson Magalhães Assume a Chefia do DAE',
        desc: 'Reitor empossa o novo chefe do DAE, Prof. Gilson Faria Potsch MagaIhães.  (16jun. n.795).',
        photos: [],
        externalLinks: [{ label: 'Jornal 795', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/d/b/e/dbedc44869953aaee111e389f9b2ee41345d5a4365285ec52c662c52b1d371ef/Edi____o_n795.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Curso no Centreinar Capacitou Estudantes do DAE em Armazenagem',
        desc: 'Foi realizado o Curso de Administração de Unidades Armazenadoras, com a participação de 24 estudantes de Administração e Economia. Em virtude de um acordo entre o DAE e o Centreinar, teve como objetivo proporcionar aos alunos uma visão panorâmica dos aspectos econômicos e técnicos da armazenagem de produtos agrícolas, tornando-os capazes de exercer atividades administrativas em unidades armazenadoras. A coordenação foi do técnico Roberto Proença Passarinho, do Centreinar, e do professor José Edson Lara, do DAE. (07jul. n.798).',
        photos: [{ url: '/1983 - Administração de Unidades Armazenadoras.png', caption: 'Estudantes do DAE durante o curso de Administração de Unidades Armazenadoras.' }],
        externalLinks: [{ label: 'Jornal 798', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/2/3/0/230fcd0df73116e9c9b597f5f463036f1857f8939650c8994046857d98fc9494/Edi____o_n798.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Professora Nina Rosa Lançou Apostila pela Imprensa Universitária',
        desc: 'Imprensa Universitária edita 8 apostilas para os estudantes de graduação. Dentre as apostilas foi editada "Administração e Esforço Motivacional", da professora Nina Rosa da Silveira Cunha, do DAE. (04ago. n.802)',
        photos: [],
        externalLinks: [{ label: 'Jornal 802', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/6/3/1/631ae6256cc60e9e47ad9d06d0e5d790c959d54c7d60746192c1787dd36f0066/Edi____o_n802.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'DAE Promoveu Palestra Sobre o Novo Currículo de Economia',
        desc: 'DAE promove palestra sobre o novo currículo do curso de Economia, com o ex-diretor da Capes, Cláudio de Moura Castro, atual secretário executivo do Conselho Nacional de Recursos Humanos do Ipea/Seplan. O objetivo foi proferir uma palestra sobre o tema «Concepção do Novo Currículo de Economia», com a presença de professores e estudantes dos cursos de Administração e Economia. (1ºset. n.806).)',
        photos: [{ url: '1983 - Currículo de Economia.png', caption: 'Os professores Gilson Faria Potsch Magalhães, chefe do DAE, o palestrante Cláudio de Moura Castro e Juraci Aureliano Teixeira, diretor do Centro de Ciências Humanas, Letras e Artes da UFV.' }],
        externalLinks: [{ label: 'Jornal 806', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/4/3/2/432f1c8d5e9a1b7c3d4e5f6a7b8c9d0e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2/Edi____o_n806.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Professores do DAE Ministraram Curso de Administração Financeira em São Lourenço',
        desc: 'Professores do DAE ministraram o Curso de Administração Financeira em São Lourenço para micro, pequenas e médias empresas. A promoção foi da Educação & Cultura S/C- Educa e do DAE, mediante convênio. Foram ministradas aulas pelos professores José Clévio Dias Casali e Milton Rodrigues Natalino, sob a coordenação da professora Nina Rosa da Silveira Cunha. O programa do curso incluiu as seguintes matérias: Noções de Contabilidade, Patrimônio e Balanço, Análise de Balanço, Orçamento de Caixa T.R.I. (R.O.I., Taxa de Retorno de Investimento e Método "Du Pont" de Análise). (24set. n.779). (ADICIONAR FOTO PG5 818)',
        photos: [],
        externalLinks: [{ label: 'Jornal 779', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/a/f/c/afca3444757a500bf525ec35064be4deff2794a9b545efbc79ca040a37b15125/Edi____o_n779.pdf' },
          { label: 'Jornal 818', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/6/6/d/66dd2e09a0c4a4ef87c6d047449a78b6f87807754aaefa0a318c39b7e3bc3dce/Edi____o_n818.pdf' }
        ],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'IV Semana do Economista Debateu a Crise Econômica',
        desc: 'O tema da IV Semana do Economista foi "A Economia em Crise". Além de cinco palestras técnicas, lançamento do livro "As lutas operárias e sindicais em São Bernardo", debates, grupos de estudo e exibição de filmes, aconteceram outras atividades, programadas pelo Centro Acadêmico de Economia. O primeiro palestrante foi o professor Paulo Márcio de Mello, da Universidade do Estado do Rio de Janeiro (UERJ), que discorreu sobre o "Papel do economista: sociedade e crise". Os demais convidados foram os professores Lauro Campos, da UnB; João Antônio de Paula, do Cedeplar-MG; Carlos Longo, da USP; e Luiz Flávio Rainho, da UFJF e Funalfa. (22set. n.809 e  13out. n.812).',
        photos: [{ url: '/1983 - IV Semana do Economista.png', caption: '0 professor Paulo Márcio de Mello, da UERJ, e o estudante Sebastião César, da UFV.' },],

        externalLinks: [{ label: 'Jornal 809', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/5/a/d/5ade23527c477fbe2da78293f92c1f03dc324f0f5f910e1eec14f559cd53e67b/Edi____o_n809.pdf' },
        { label: 'Jornal 812', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/7/8/f/78ff7af1914aa35767f9a2913b8aa3e91e0456f219a4691ab32cf5feda74f8df/Edi____o_n812.pdf' }
        ],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'DAE Promoveu Curso de Compras e Patrimônio para Servidores da UFV',
        desc: 'Com a participação de 26 servidores das Diretorias Financeira e de Material da UFV, foi realizado o curso Compras, Armazenamento e Patrimônio, promovido pelo DAE. O objetivo foi proporcionar aos participantes reciclagens de conhecimentos e treinamento em sua área de atuação, com ênfase no intercâmbio entre os servidores das duas Diretorias e na intensificação da noção do conjunto que é a Administração de Material. O curso foi ministrado pelo professor Marcos Tanure Sanábio, do DAE, que revelou ser esta a primeira vez que se tomou iniciativa desse tipo na UFV. Foram usados apostilas e métodos audiovisuais com o emprego do videocassete. O programa foi dividido em módulos em que se abordaram: Aspecto Legal das Compras, Aspectos Operacionais das Compras, Armazenamento, Controle de Estoque, Patrimônio e Sistemas de Materiais. (10nov. n.816).',
        photos: [{ url: '/1983 - Curso de Compras.png', caption: 'O professor Marcos Tanure Sanábio, do DAE, ministrou o curso.' }],
        externalLinks: [{ label: 'Jornal 816', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/7/b/f/7bf1ce26c62a3b7490d201154e41e4de0d24118ccc76e5fc679b3545d0100117/Edi____o_n816.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Alunos do DAE Organizaram Palestra com Especialista da Alcan',
        desc: 'O gerente de Métodos da Alcan Alumínio do Brasil, Paulo Sá Grise (foto), fez palestra, abordando a "Produtividade Industrial", numa iniciativa das acadêmicas Maria do C. Bartolomeu, Zélia A. M. Oliveira, Maria I. Feliciana, Afonso Rocha, Júlio C. Pena e Irene D. Alves, sob a coordenação do professor José Edson Lara, do DAE, responsável pela área de Administração da Produção. (24nov. n.818). (FOTO PG 5 DA ALCAN) ',
        photos: [],
        externalLinks: [{ label: 'Jornal 818', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/6/6/d/66dd2e09a0c4a4ef87c6d047449a78b6f87807754aaefa0a318c39b7e3bc3dce/Edi____o_n818.pdf' }],
        articleUrl: ''
      }
    ],
    photos: [
      { url: '', caption: 'Novos Diretores' },
      { url: '', caption: 'Os servidores da Funarbe' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/1983-ufv-informa'
  },
  1984: {
    // LISTA DE EVENTOS DO ANO (Cada item vira um card na timeline/busca e abre o modal)
    events: [
      {
        // Categoria do evento: define a cor da etiqueta e o ícone (ex: 'fundacao', 'ensino', 'gestao', etc.)
        tag: 'pesquisa',
        // Título principal exibido no card e no cabeçalho do modal
        title: 'Cálculo do Índice Mensal de Preços ao Consumidor em Viçosa pelo DAE',
        // Texto com o relato histórico completo exibido dentro do modal
        desc: 'O DAE calcula o índice mensal de preços ao consumidor em Viçosa, a taxa de elevação do custo de vida na cidade, obtido com o processamento dos preços de cada um dos itens da cesta básica. A pesquisa realiza-se com recursos do Conselho Nacional de Desenvolvimento e Tecnológico CNPq, sob a coordenação do Prof. Tancredo Almada Cruz. ',
        // [OPCIONAL] Fotos exclusivas deste evento (aparecem em miniatura no modal e abrem no lightbox)
        photos: [],
        // [OPCIONAL] Lista de links úteis (Google Drive, atas, PDFs, portarias, páginas externas)
        externalLinks: [],
        // [OPCIONAL] Link direto para a matéria do evento (gera o botão verde de destaque no modal)
        articleUrl: ''
      },
      
    ],
    // GALERIA GERAL DO ANO (Fotos que aparecem no grid inferior da aba "Por Ano", independentes de um evento específico)
    photos: [],
    // LINK GERAL DO ANO (Botão que fica no final da página do ano, ex: link da edição do Jornal UFV daquele ano)
    articleUrl: 'https://atom.ufv.br/index.php/1984-ufv-informa'
  },

  1985: {
    events: [
      {
        tag: 'gestao',
        title: 'MARCELO ANTONIO LOPES',
        desc: 'Admissão do servidor técnico-administrativo MARCELO ANTONIO LOPES no DAE, com início das atividades em 10/01/1985.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Marco Comemorativo: Oitavo Ano de Fundação do DAE',
        desc: 'Em 10 de março de 1985, o DAE completou oficialmente oito anos de sua fundação e início das atividades acadêmicas.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Curso de Mercado de Capitais',
        desc: 'O DAE promoveu o treinamento de estudantes na Bolsa, com o Curso de Mercado de Capitais. O economista Renato Cortes Teixeira da Bolsa de Valores do Rio de Janeiro enfocou: Mercado Financeiro, Sistema Financeiro Nacional, A Empresa e o Mercado de Ações, Bolsa de Valores, o Investidor e Desafio da Bolsa para Universitários. Este último é um programa da Bolsa de Valores do Rio de Janeiro que vem sendo feito junto a várias instituições. O Desafio da Bolsa foi disputado por equipes de universitários, com aplicações simuladas de Mercado de Capitais envolvendo situações, empresas e números reais. A equipe de estudantes enviou, via Bolsa de Valores de Minas-Espirito Santo e Brasília, em Belo Horizonte, ordens de compra e venda de papéis na Bolsa do Rio, concorrendo com colegas de várias instituições VER FOTO P.1 (09mai. n.894).',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Empossado o novo diretor administrativo-financeiro da Funarbe',
        desc: 'Em solenidade realizada na Reitoria da UFV, o reitor Geraldo Martins Chaves empossou o novo diretor administrativo-financeiro da Fundação Arthur Bernardes (Funarbe), o professor José Clévio Dias Casali, do DAE. (13jun. n.899).',
        photos: [{ url: '/1985 - Diretor Administrativo.png', caption: 'O professor José Clévio Dias Casali, do DAE, empossado como novo diretor administrativo-financeiro da Funarbe.' }],
        externalLinks: [{ label: 'Jornal 899', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/a/d/3/ad388386acca5c231d4d524f902ec2a83bfc1b3bf96b5e35f7c31781c87ecf37/Edi____o_n___899.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Posse dos novos diretores dos Centros de Ciências da UFV',
        desc: 'No CCH, tomou posse o Prof. Gilson Faria Potsch Magalhães. (04jul. n.902).',
        photos: [{ url: '/1985 - Vice Reitor.png', caption: 'O professor Gilson Faria Potsch Magalhães, do DAE, empossado como novo diretor do Centro de Ciências Humanas, Letras e Artes da UFV.' }],
        externalLinks: [{ label: 'Jornal 902', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/6/3/b/63b24fc991e63fed1676f92effb0a12eba88e5aa2d85213492bb4870978b733c/Edi____o_n___902.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Posse do Chefe do Departamento de Administração e Economia',
        desc: 'Tomou posse em 13 de novembro como Chefe do Departamento de Administração e Economia o professor Tancredo Almada Cruz. 14nov. n.921).',
        photos: [{ url: '/1985 - Tancredo.png', caption: 'O professor Tancredo Almada Cruz, empossado como Chefe do Departamento de Administração e Economia da UFV.' }],
        externalLinks: [{ label: 'Jornal 921', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/c/b/d/cbd729ad3454b25aa9ba1044b2490bc61cc809353b3a1df470bd29a1923d90a0/Edi____o_n___921.pdf' }],
        articleUrl: ''
      }
    ],
    photos: [],
    articleUrl: ''
  },

  1986: {
    events: [
      {
        tag: 'pesquisa',
        title: 'Índice Preços ao Consumidor – DAE',
        desc: 'Índice Preços ao Consumidor – DAE (13fev. nº 934; 06mar. nº 937; 15mai. n.947; 05jun. n.950; 03jul. n.954; 07ago. n.959; e 13nov. n. 973).',
        photos: [],
        externalLinks: [{ label: 'Jornal 934', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/6/7/b/67b505059a0914c1da9cf285947f8214cf168eb1153c9133963730622eff4f1e/Edi____o_n934.pdf' },
        { label: 'Jornal 937', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/f/f/2/ff289ec4c42231dd0811c6326db3932ed083e1ae6569571c78d0f8fd4e8ec1d1/Edi____o_n937_pdf.pdf' },
        { label: 'Jornal 947', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/2/7/d/27d582a3791b0c4b3da70f31c90453b95a8e749fe8564b6917135e8d3d1fb447/Edi____o_n947.pdf' },
        { label: 'Jornal 950', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/1/5/b/15b2378f0631883eaf291928e89cc8be6451c98bcae47e92ac888f495ace7615/Edi____o_n950.pdf' },
        { label: 'Jornal 954', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/d/9/5/d9521fc6eedd673eda46f14506189e19b4a8e0e74bb210a25bf24810a1d925be/Edi____o_n954.pdf' },
        { label: 'Jornal 959', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/d/b/9/db9ebd98af12100c5d65beb7e78cc96beaa6f2620c112708b57ed1cc325c44c5/Edi____o_n959.pdf' },
        { label: 'Jornal 973', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/e/4/c/e4c106c14f881ee5dd5432386d12287c7327bc3a932315fbb5119c2495d3a2c7/Edi____o_n973.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'O DAE tem programa para empresário em potencial.',
        desc: 'Com o objetivo de dar oportunidade aos empresários em potencial para montar seus próprios negócios, em qualquer setor de atividade, proporcionando-lhes apoio gerencial, técnico financeiro, o DAE apresentou o Programa Novo Empresários, com o apoio do Centro de Pequena e Média Empresa (CEAG-MG), do Banco de Desenvolvimento do Estado Minas Geral e pelo Instituto de Desenvolvimento Industrial (INDI). A exposição sobre as características do programa ficou а cargo do diretor-executivo do CEAG-MG, Mauro Batista Santos Ferreira, especificando a sistemática adotada por quem esteja pretendendo constituir uma empresa. Falaram ainda os representantes dos diversos órgãos presentes (BDMG, INDI, Cia. de Distritos Industriais e Fundação Centro Tecnológico de Minas Gerais CETEC). Os interessados puderam apresentar suas propostas aos promotores do encontro, em diversos projetos nos mais diversos setores, podendo beneficiar-se com as facilidades do programa. (13mar. n.938; 20mar. n.939; e 26mar. n.940).',
        photos: [{ url: 'public/1986 - Empresario em potencial.png', caption: 'O Vice-Reitor Cid Martins Batista abre os trabalhos.' }],
        externalLinks: [{ label: 'Jornal 938', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/6/2/6/626ebf73ef8775e6704f3ce3f76ba128135cf0ef7782a99b59242ccb3396ef12/Edi____o_n938.pdf' },
        { label: 'Jornal 939', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/6/4/e/64e474c6f710f7ddbe33040595334ba89d40c981e889504f33f4aafba7e914bf/Edi____o_n939.pdf' },
        { label: 'Jornal 940', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/0/0/2/002fe8a9c47e3c43de15efd53879f3ec674c0043ac3749170cd3c7c38478925e/Edi____o_n940.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'VII Semana do Administrador Debate os Reflexos da Reestruturação Econômica',
        desc: 'A VII Semana do Administrador realizada pelo DAE e pelo Centro Acadêmico de Administração, com o tema central “reflexos da reestruturação econômica na Administração”. Os prelecionistas foram a presidente do Conselho Regional Administração, Sônia Ferreira de Ferraz, e o presidente do Sindicato dos Administradores de Minas de Gerais, Wander Pimentel, que abordaram o aspecto legal da profissão e o mercado de trabalho e enfocando o mesmo assunto, Graccho Machado Pimentel, o presidente da Associação Brasileira de Administração. Falou também o Presidente da Wembley, sobre a experiência de sua empresa na abertura de capital e do Decreto-Lei 2283/86, destacando a importância da participação do estudante e do profissional no setor do processo; e uma mesa redonda/debate sobre as mudanças econômicas e seus reflexos sobre a gestão empresarial, com a participação do diretor do Armarinho Santo Antônio Sinval Campos Mendes; do diretor da empresa Móveis Itatiaia, Lincoln César Penna Costa, ambos de Ubá; e do presidente da Associação Comercial de Viçosa, Francisco Tadeu de Sena Fernandes. Participaram da abertura do evento Tancredo Almada Cruz, chefe do DAE; Roberto de Carvalho Araújo, coordenador da Semana; o presidente da Associação Comercial е Industrial de Ubá, Norton Antônio Fagundes Reis; o presidente da ACV, Francisco Tadeu de Sena Fernandes; o presidente do Centro Acadêmico de Administração, Wanildo Silva Santos; e o vereador Sebastião José Barreto, presidente da Câmara Municipal de Ubá. (17abr. n.943; 24abr. n.944)',
        photos: [],
        externalLinks: [{ label: 'Jornal 943', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/3/5/8/358fdcfaaeb2970b92a70d48867f314eb035d6254330b2cbb15d6e6f101066a6/Edi____o_n943.pdf' },
        { label: 'Jornal 944', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/7/c/3/7c32e874d73007f5ca8100dc9bbb4166b103042badccd2cd1f9524f98a564aca/Edi____o_n944.pdf' }
        ],
        articleUrl: ''
      },
      {
        tag: 'cultura',
        title: 'I "Show" do Administrador Integra Alunos e Professores da UFV',
        desc: 'Numa promoção do Centro Acadêmico de Administração da UFV, foi realizado o I "Show" do Administrador, com o objetivo de buscar maior integração entre alunos e professores do curso, que este ano comemora seu décimo aniversário de criação na UFV. O espetáculo teve diversas manifestações artísticas, como teatro, música, dança, poesia, desenho e pintura. Com o tema "А Cultura é fundamental em qualquer profissional", contou com o apoio da Divisão de Assuntos Culturais da Pró-Reitoria de Assuntos Comunitários da UFV, com entrada franca. (15mai. n.947).',
        photos: [],
        externalLinks: [{ label: 'Jornal 947', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/2/7/d/27d582a3791b0c4b3da70f31c90453b95a8e749fe8564b6917135e8d3d1fb447/Edi____o_n947.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'DAE e CORECON Promovem Curso de Perícia Judicial para Economistas e Estudantes',
        desc: 'O DAE, Centro Acadêmico de Economia e o Conselho Regional de Economia promoveram o Curso de Perícia Judicial para economistas e estudantes de graduação do curso de Ciências Econômicas, visando preparar os participantes para atuarem na área judicial. Foi ministrado pelo economista Renato Arantes Meirelles, presidente da Comissão de Fiscalização е Ética Profissional e coordenador das delegacias regionais do Conselho Regional de Economia (8mai. n.946; 15mai. n.947; 21mai. n.948; e 29mai. n.949)',
        photos: [],
        externalLinks: [{ label: 'Jornal 946', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/f/e/d/fed1ee2a43feb81c149d214301ed305831f278c3f3c3e80328d2760b22cf317c/Edi____o_n946.pdf' },
        { label: 'Jornal 947', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/2/7/d/27d582a3791b0c4b3da70f31c90453b95a8e749fe8564b6917135e8d3d1fb447/Edi____o_n947.pdf' },
        { label: 'Jornal 948', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/e/6/3/e63b298e16445f99ce9af9f3338a1512e29276d44a9c45faaa65ea1ff78559d6/Edi____o_n948.pdf' },
        { label: 'Jornal 949', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/8/9/3/893fa343615ddb1f442adab8251620ce197f823458ea5c7ad040edaeaf6e43ec/Edi____o_n949.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'DAE e Centro Acadêmico Realizam Curso de Programação e Controle da Produção Industrial',
        desc: 'O DAE e o Centro Acadêmico de Administração realizaram o Curso de Programação e Controle da Produção Industrial, e trataram sobre temas diversos como gráficos de controle de qualidade, controle de qualidade na indústria de alimentos, problemas na área de produção, desenvolvimento operacional do produto, programação da produção, produtividade e manutenção. A programação foi encerrada pelo professor Ior Titton, da Fundação João Pinheiro, que abordou Problemas nas Áreas de Produção, Desenvolvimento Operacional de Produto, Programação da Produção e Produtividade e Manutenção. (15mai. n.947 e 29mai. n. 949)',
        photos: [{url: 'public/1986 - programação.png', caption: 'Oprofessor Tancredo Almada Cruz, chefe do Departamento de Administração e Economia, fala durante a abertura do curso.'}],
        externalLinks: [{label: 'Jornal 947', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/2/7/d/27d582a3791b0c4b3da70f31c90453b95a8e749fe8564b6917135e8d3d1fb447/Edi____o_n947.pdf'},
        {label: 'Jornal 949', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/8/9/3/893fa343615ddb1f442adab8251620ce197f823458ea5c7ad040edaeaf6e43ec/Edi____o_n949.pdf'}],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Criação da Semana do Empresário e Inauguração do Núcleo de Assistência',
        desc: 'Em junho de 1986, o DAE expandiu suas atividades ao aprovar a criação da Semana do Empresário. Em termos de infraestrutura, anunciou para agosto a inauguração do Núcleo de Assistência Integral à Pequena Empresa no DAE, planejado para ocorrer junto com o Encontro de Empresários da Zona da Mata.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Presidente da Associação Brasileira de Administração Ministra Curso sobre Microempresa',
        desc: 'O presidente da Associação Brasileira de Administração, Graccho Machado Maciel, foi o instrutor do Curso sobre a Microempresa,   promovido pelo DAE, pelo Centro Acadêmico de Administração e pela Associação Brasileira de Administração. (21mai. n.948; 29mai. n.949; e 05jun. n.950).',
        photos: [{url: '/1986 - Curso de microempresa.png', caption: 'O presidente da Associação Brasileira de Administração, Graccho Machado Maciel, durante o curso sobre a Microempresa.'}],
        externalLinks: [{label: 'Jornal 948', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/e/6/3/e63b298e16445f99ce9af9f3338a1512e29276d44a9c45faaa65ea1ff78559d6/Edi____o_n948.pdf'},
        {label: 'Jornal 949', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/8/9/3/893fa343615ddb1f442adab8251620ce197f823458ea5c7ad040edaeaf6e43ec/Edi____o_n949.pdf'},
        {label: 'Jornal 950', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/1/5/b/15b2378f0631883eaf291928e89cc8be6451c98bcae47e92ac888f495ace7615/Edi____o_n950.pdf'}],
        articleUrl: ''
      },
      {
        tag: 'fundacao',
        title: 'I Encontro de Empresários da Zona da Mata Inaugura o NAIPE - PARTE I',
        desc: 'No I Encontro de Empresários da Zona da Mata foi inaugurado o Núcleo de Assistência Integral à Pequena Empresa (NAIPE), desenvolvido a partir de um convênio firmado entre a UFV, através do DAE, com o Banco de Desenvolvimento do Estado de Minas Gerais (BDMG), o Instituto de Desenvolvimento Industrial de Minas Gerais (INDI) e o Centro de Apoio à Pequena e Média Empresa de Minas Gerais (CEAG-MG). O encontro visou, fundamentalmente, promover o desenvolvimento financeiro e tecnológico das micro, pequenas e médias empresas da região. O Escritório do NAIPE localizou-se nas dependências do DAE/UFV e serviu para atendimento externo aos interessados no programa, que também contou com o apoio da Associação Comercial de Viçosa (ACV), juntamente com a Federação das Associações Comerciais de Minas Gerais (FACEMG) e a Coordenadoria das Associações Comerciais da Microrregião. (07ago. n.959).',
        photos: [],
        externalLinks: [{label: 'Jornal 959', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/d/b/9/db9ebd98af12100c5d65beb7e78cc96beaa6f2620c112708b57ed1cc325c44c5/Edi____o_n959.pdf'}],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Solenidade Inaugural do Encontro de Empresários Redige Carta e Entrega Comendas - PARTE II',
        desc: 'A solenidade inaugural do Encontro de Empresários foi aberta pelo Reitor Geraldo Martins Chaves, que passou a presidência da sessão ao empresário Lúcio Assunção, representante da presidência da Federação das Associações Comerciais do Estado de Minas Gerais (FACEMG). Ambos discorreram sobre o papel da livre iniciativa e a importância do intercâmbio Empresa-Universidade, modernizando e otimizando o desempenho da atividade empresarial. Falaram também Francisco Tadeu Sena Fernandes, presidente da ACV; o Secretário de Estado da Indústria e Comércio, Francisco Guilherme Gonçalves sobre O Papel da Livre Iniciativa no Desenvolvimento Econômico, Social e Político da Zona da Mata; Luiz Antônio Caixeiro Stephan, presidente da Associação Comercial de Juiz de Fora e coordenador da FACEMG; e Paulo Sérgio Ribeiro da Silva, secretário da Indústria e do Comércio de Minas Gerais. Após o plenário dos Empresários e da Tribuna Livre, foi redigida a Carta dos Empresários da Zona da Mata e, a seguir, aconteceu a inauguração do Núcleo de Assistência Integral à Pequena Empresa (NAIPE), de acordo com o Convênio entre a UFV, através do DAE, com o BDMG, o Centro de Apoio à Pequena e Média Empresa de Minas Gerais (CEAG MG) e o Instituto de Desenvolvimento Industrial de Minas Gerais (INDI). (07ago. n.959; 14ago. n.960).',
        photos: [{url: '/1986 - Cid Martins.png', caption: 'Momento em que o Vice-Reitor Cid Martins Batista era agraciado com a Comenda do Mérito «Arthur da Silva Bernardes».'}],
        externalLinks: [{label: 'Jornal 959', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/d/b/9/db9ebd98af12100c5d65beb7e78cc96beaa6f2620c112708b57ed1cc325c44c5/Edi____o_n959.pdf'},
        {label: 'Jornal 960', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/3/9/4/39410b986241ac56b91f36f225a543a6b83639f90fbba114679fec2017136a32/Edi____o_n960.pdf'}],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'NAIPE é Inaugurado - PARTE III',
        desc: 'O Reitor da UFV, professor Geraldo Martins Chaves, inaugurou, o Núcleo de Assistência Integral à Pequena Empresa (NAIPE), nas dependências do Departamento de Administração e Economia da UFV. O evento fez parte do I Encontro de Empresários da Zona da Mata. O NAIPE é fruto do convênio assinado entre a UFV/DAE,  BDMG, CEAG-MG e o INDI, atendendo aos interessados, nas instalações recém-inauguradas no DAE. О Reitor descerrou a placa de inauguração do Núcleo juntamente com Jairo Teixeira, dirigente do BDMG. Após o descerramento da placa, Jairo Teixeira enfatizou a importância do convênio assinado, ao mesmo tempo em que destacou um maior fomento ao ensino proporcionado pela UFV. O dirigente do BDMG colocou o Banco “à disposição total da UFV, no momento em que se deseja fortalecer a integração do órgão com esta Universidade”. Em seguida, o Reitor congratulou-se com o DAE que, “numa hora muito feliz e própria, procurou o caminho do comprometimento com a comunidade, ampliando a sua atuação e dando-lhe condições de desenvolvimento”. (14ago. n.960). (COLOCAR FOTO)',
        photos: [],
        externalLinks: [{label: 'Jornal 960', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/3/9/4/39410b986241ac56b91f36f225a543a6b83639f90fbba114679fec2017136a32/Edi____o_n960.pdf'}],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'DAE e Centro Acadêmico Promovem Cursos de Comércio Exterior e de Recrutamento',
        desc: 'O Curso de Comércio Exterior foi ministrado pelo diretor cultural da Associação Brasileira de Administração (ABTA), Joao Gabriel de Sá Albernaz, comprador internacional da Mannesmann; pela professora Rita de Cássia Liberato, da UFMG e da UNA- Ciências Gerenciais; pelo assessor Alexandre Moura Marques, da Diretoria Comercial da empresa Serviço de Соmércio Exterior; pelo gerente de câmbio do Grupo BMG, Cláudio Santos Viana; pelo gerente da Área de Financiamento Externo, Samuel Thiebault, da Açominas; e pelo diretor da empresa Divisa, Idalmo Rezende, com participação especial do professor José Edson Lara do DAE. Outro curso foi oferecido aos interessados, desta vez abordando Recrutamento e Seleção de Pessoal. As aulas estiveram a cargo do coordenador do Serviço de Encaminhamento Profissional (SEP), Juarez Guppi de Castro. (11set. n.964; 25set. n.966).',
        photos: [],
        externalLinks: [{label: 'Jornal 964', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/7/d/e/7de19bc354cfc1ef5382c9f05e6fb73022aec579a4aa167b2eb0f8caddcce66c/Edi____o_n964.pdf'},
        {label: 'Jornal 966', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/4/d/9/4d973ae1bc0afe22cd8f02dddac3d290b2cb9392b5fabff7d0a65e8956d006bf/Edi____o_n966.pdf'}],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'DAE Promove Ciclo de Debates sobre a Constituinte',
        desc: 'O Ciclo de Debates sobre a Constituinte, promovido pelo DAE, teve três etapas: o professor Carlos Roberto Ramos, do DAE, discorreu sobre “Constituição: origem, conceito; Poder Constituinte e história das constituições brasileiras”; o professor José Alfredo Baracho, da UFMG, falou a respeito de ”Presidencialismo x Parlamentarismo”. (25set. n.966).',
        photos: [],
        externalLinks: [{label: 'Jornal 966', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/4/d/9/4d973ae1bc0afe22cd8f02dddac3d290b2cb9392b5fabff7d0a65e8956d006bf/Edi____o_n966.pdf'}],
        articleUrl: ''
      },
      {
        tag: 'reconhecimento',
        title: 'Melhora na Imagem Institucional do DAE e Homenagem Coletiva',
        desc: 'Em reunião do dia 31 de outubro, conduzida pelo Professor Tancredo Almada Cruz, a chefia informou aos presentes que a imagem do departamento perante a comunidade havia melhorado significativamente devido aos trabalhos realizados, gerando demandas de diversos órgãos. Na mesma oportunidade, foi anunciada que o chefe do departamento receberia uma homenagem da Associação Comercial de Viçosa, comemoração esta que ele declarou estender a toda a equipe do departamento.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Palestra da Coopersucar Discute Reflexos do Plano Cruzado e Comércio de Commodities',
        desc: 'Empresários, estudantes e professores participaram de uma palestra ministrada pelo Assessor de Exportação da Coopersucar, Reinaldo de Barros Alcântara, e pelo Assessor da Diretoria de Suprimentos, Luís Roberto Martins Silveira. A promoção foi do DAE, com a coordenação do professor José Edson Lara. Os temas Reflexos do Plano Cruzado no Comércio Exterior de Commodities e Panorama da Administração de Materiais foram os temas das palestras. Ainda foi feita uma exposição em vídeo-cassete, mostrando os canaviais, usinas e Centros de Pesquisa da Coopersucar, cuja sede é em São Paulo, e tem abrangência de 72 usinas cooperadas de açúcar e álcool. Na oportunidade, o Assessor de Exportação da empresa paulista destacou que «se a atual tendência permanecer poderá faltar álcool para atendimento de uma frota de 2.500 mil veículos em circulação no País». Outro aspecto salientado foi com relação aos profissionais da área: no Brasil, praticamente não existem especialistas em comércio exterior de "commodities" (bens primários). Esta é uma das razões do fraco desempenho das vendas externas dos nossos produtos exportáveis. (30 out. n.971)\n(30 de Outubro de 1986  Nº 971)',
        photos: [{url: '/1986 - coperscucar.png', caption: 'Os dirigentes da Copersucar no encontro de quinta-feira, dia 23.'}],
        externalLinks: [{label: 'Jornal 971', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/2/6/d/26d1cff46d44363961c59614aa6886de9f36f76e38ffe879ac2cf31bfd2e5b9b/Edi____o_n971.pdf'}],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'NAIPE e DAE Convidam Empresários para Seis Cursos de Gestão',
        desc: 'O DAE convidou empresários e futuros empresários para os cursos que o Núcleo de Assistência Integral à Pequena Empresa (NAIPE) estava oferecendo. Foram, ao todo, seis cursos: Administração da Pequena Empresa, Administração de Pessoal, Sistema de Informações Contábeis, Análise de Custos, Administração de Estoques e Administração de Vendas. O Curso «Administração da Pequena Empresa» foi ministrado pela professora Nina Rosa Silveira Cunha; o Curso Administração de Pessoal, ministrado pelo professor Juarez Magalhães Rodrigues; Sistema de Informações Contábeis, pela professora Nanci Pereira de Vasconcelos; Análise de Custos, pelo professor José Clévio Dias Casali; "Administração de Estoques" pelo professor Márcio Jose Ozório Gonçalves; e "Administração de Vendas", pelo professor José Edson Lara, todos do DAE/UFV. (25set. n.966; 16out. n.969 e 06nov. n.972).',
        photos: [],
        externalLinks: [{label: 'Jornal 966', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/4/d/9/4d973ae1bc0afe22cd8f02dddac3d290b2cb9392b5fabff7d0a65e8956d006bf/Edi____o_n966.pdf'},
        {label: 'Jornal 969', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/b/4/6/b469c58750283fdda4a2a6cfd8ce8657c07d7e7bfe6ccddc33c54fdcb3e743e6/Edi____o_n969.pdf'},
        {label: 'Jornal 972', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/4/d/e/4de904a48bf4064b4e76e6e3690d9f7a9b284cb2e1d5af70cb2a4a54c4f78597/Edi____o_n972.pdf'}],
        articleUrl: ''
      }
    ],
    photos: [],
    articleUrl: 'https://atom.ufv.br/index.php/1986-ufv-informa'
  },

  1987: {
    events: [
      {
        tag: 'gestao',
        title: 'Posse de José Edson Lara como Diretor Administrativo-Financeiro da Funarbe',
        desc: 'O Reitor da Universidade Federal de Viçosa (UFV), professor Geraldo Martins Chaves, deu posse a José Edson Lara como o novo Diretor administrativo-financeiro da Fundação Arthur Bernardes-FUNARBE. (15jan. n.982).',
        photos: [{url: '/1987 “O Reitor da UFV, professor Geraldo Martins Chaves, dá posse ao novo Diretor administrativo-financeiro da FUNARBE.”.jpg', caption: 'O Reitor da UFV, professor Geraldo Martins Chaves, dá posse ao novo Diretor administrativo-financeiro da FUNARBE.'}],
        externalLinks: [{label: 'Jornal 982', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/2/6/9/269a2f2274d2c9a059582c91c515499478bf3dd605bfe4a8bc17b11cbf41d231/Edi____o_n982.pdf'}],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Cursos do NAIPE',
        desc: 'O Núcleo de Assistência Integrada à Pequena Empresa (NAIPE) encerrou o curso de "Administração de Vendas", que foi ministrado por José Edson Lara para 34 inscritos. A coordenadora Nina Rosa Silveira Cunha confirmou que o NAIPE pretende repetir e ampliar a oferta de cursos. nº 982',
        photos: [],
        externalLinks: [{label: 'Jornal 982', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/2/6/9/269a2f2274d2c9a059582c91c515499478bf3dd605bfe4a8bc17b11cbf41d231/Edi____o_n982.pdf'}],
        articleUrl: ''
      },
      {
        tag: 'reconhecimento',
        title: 'Professora Nanci à Frente do Novo Núcleo de Treinamento do DAE',
        desc: 'Sob a coordenação da professora Nanci Pereira de Vasconcelos, o Departamento de Administração e Economia (DAE) da UFV implementou o Núcleo de Treinamento Profissional na área de Contabilidade. (26fev. n.988).',
        photos: [{url: '/1987 - Professora Nanci.png', caption: 'A professora Nanci Pereira de Vasconcelos, à frente do novo Núcleo de Treinamento do DAE.'}],
        externalLinks: [{label: 'Jornal 988', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/9/8/b/98b9c28718e088e5eab8019468625badd836e461369050a421fba60c3ae4d931/Edi____o_n988pdf.pdf'}],
        articleUrl: ''
      },
        {
        tag: 'gestao',
        title: 'Núcleo de Treinamento Profissional em Contabilidade',
        desc: 'O DAE iniciou, no primeiro semestre de 1987, as atividades do Núcleo de Treinamento Profissional. Coordenado pela professora Nanci Pereira de Vasconcelos e visa familiarizar os estudantes com os procedimentos práticos e executivos da área empresarial. 26.fev nº 988',
        photos: [],
        externalLinks: [{label: 'Jornal 988', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/9/8/b/98b9c28718e088e5eab8019468625badd836e461369050a421fba60c3ae4d931/Edi____o_n988pdf.pdf'}],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'I Semana do Empresário',
        desc: 'A I Semana do Empresário, evento promovido pelo DAE foi realizada de quatro a sete de agosto na UFV, e teve como objetivo a aproximação de empresários e executivos com a UFV e o DAE, além de transmitir aos produtores urbanos conhecimentos técnicos e gerenciais, com a realização de cursos, palestras, debates, mesas-redondas e exposição de produtos. Os cursos foram nas áreas de produção, marketing, administração de operações, finanças, recursos humanos, pequenas e médias empresas, dentre outros.  (12fev. n.986; 21mai. n.1000; 02jul. n.1006; 16jul. n.1008; 30jul. n. 1010; 06ago. n.1011 e 13ago. n.1013).',
        photos: [{url: '/1987 - 1 Semana do Empresario.png', caption: 'I Semana do Empresário.'}],
        externalLinks: [{label: 'Jornal 986', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/d/b/e/dbec296ab4065f5119abf8c22865871ed641b84e5bdae4927f10550d6b3c3d02/Edi____o_n986.pdf'}, 
          {label: 'Jornal 988', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/9/8/b/98b9c28718e088e5eab8019468625badd836e461369050a421fba60c3ae4d931/Edi____o_n988pdf.pdf'},
          {label: 'Jornal 1000', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/d/5/d/d5d901f1a1d1c53c274407ad402ef9635f2be5004380a652df571f0a76ff77e1/Edi____o_n1000.pdf'},
          {label: 'Jornal 1006', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/d/3/5/d352345ed1df20896d23366665b0d0326131957d110a0fc1530bbbdcaaedee40/Edi____o_n1006.pdf'},
          {label: 'Jornal 1008', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/3/9/f/39f374ae9f0bedcc9be69055c66f31237c98f1bbb9fdbc9f88a6992a50ab1565/Edi____o_n1008pdf.pdf'},
          {label: 'Jornal 1010', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/0/f/5/0f527340189b064ce6e0803ce5597865ea7f19f95dbd2f132a17c028fc9dca3e/Edi____o_n1010.pdf'},
          {label: 'Jornal 1011', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/7/6/7/767790257f69d56701b78a7165e5de629dd613c30889f3577dc396f0c04925ad/Edi____o_n1011.pdf'},
          {label: 'Jornal 1013', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/8/0/e/80eaadfd38673b3bfd1c11d7d95799adc161a6b0aad85412e15db89d3ba20498/Edi____o_n1013.pdf'}
        ],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Participação no Projeto Rondon',
        desc: 'O DAE encerrou sua participação no Projeto Rondon, ministrando Treinamento para empresários de Micro, Pequenas e Médias Empresas. (19mar. ed.991).',
        photos: [],
        externalLinks: [{label: 'Jornal 991', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/8/2/e/82e2c465cd784e16c1d3b31f26e7505b29f119cb08bad2562e1fe424e5b25266/Edi____o_n991pdf.pdf'}],
        articleUrl: ''
      },
    ],
    photos: [
      {
        url: '',
        caption: 'O Diretor do CCH. professor Gilson Faria Potsch Magalhães'
      },
      {
        url: '',
        caption: 'O Reitor da UFV, professor Geraldo Martins Chaves, dá posse ao novo Diretor administrativo-financeiro da FUNARBE.'
      }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/1977-ufv-informa-2'
  },

  1988: {
    events: [
      {
        tag: 'extensao',
        title: 'I Encontro de Administração Municipal',
        desc: 'Entre os dias 16 e 18 de março, a UFV promoveu o I Encontro de Administração Municipal. O objetivo foi reunir prefeitos e técnicos da Zona da Mata para analisar problemas locais e buscar soluções com suporte universitário. A iniciativa faz parte da filosofia da instituição de integrar-se ativamente ao desenvolvimento da sua região. Os principais problemas da administração municipal foram discutidos na UFV, durante a Assembleia Geral da Federação Mineira das Associações Microrregionais. O Encontro trouxe a Viçosa prefeitos e assessores de municípios da Zona da Mata Norte. Predominaram assuntos como a municipalização da saúde e da educação e a situação das prefeituras diante da nova perspectiva, sendo defendida a participação do município no bolo tributário. (18fev. n.1039; 12mai. n.1051; 19mai. n.1053).',
        photos: [{url: '/1987 - 1 Encontro de Adm Municipal.png', caption: 'I Encontro de Administração Municipal'}],
        externalLinks: [{label: 'Jornal 1039', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/5/2/6/526d4123fdfff9eca8d73edea64290b2db73327ea372af173ba5d7f2df7de2be/Edi____o_n1039.pdf' },
        {label: 'Jornal 1051', url: 'hhttps://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/c/7/5/c75b3cb323ac2c2f7ba6351c2cd14e5bfdaa382653b1e8273904f02930353607/Edi____o_n1051.pdf'},
        {label: 'Jornal 1053', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/3/9/7/3978c353ca3639959df2f815724359f81cd7ec3d55a4ad4afe6ecc71090b0884/Edi____o_n1053.pdf'}
        ],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'UFV Promove II Semana do Empresário em Julho',
        desc: 'O Departamento de Administração e Economia (DAE) da Universidade Federal de Viçosa (UFV), em conjunto com o Conselho de Extensão, realizará entre os dias 10 e 14 de julho a II Semana do Empresário.  nº 1055',
        photos: [],
        externalLinks: [{label: 'Jornal 1055', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/1/b/7/1b7c5a94fd34f6a0a654c6f58ccf3101bed78ca19f7496336ab0c757d7fe7721/Edi____o_n1055.pdf'}],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Professor do DAE fala sobre dinâmica do investimento em economias capitalistas',
        desc: 'O professor Newton Paulo Bueno, do DAE, debateu a dinâmica do investimento em economias capitalistas em palestra na UFV. (21abr. n.1048).',
        photos: [{url: '/1988 - PET.png', caption: 'O grupo de estudantes selecionados, juntamente com o professor Adriel Rodrigues de Oliveira'}],
        externalLinks: [{label: 'Jornal 1048', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/a/e/9/ae9a23ea48efadc0ec72556a2477543983fe77a5bf7a5b5c34256f7c18bdd394/Edi____o_n1048.pdf'}],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Il Encontro Mineiro sobre Ensino de Economia',
        desc: 'Realizado nos dias 18 e 19 de agosto de 1988, o evento ocorreu no Centro de Ensino de Extensão da UFV. Com o tema central "Técnicas de Pesquisa e Monografia". n.1065',
        photos: [],
        externalLinks: [{label: 'Jornal 1065', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/e/5/e/e5e5e7770c04bbef361e2d41c5045d5d32069657464c87a60cf877298f3db36a/Edi____o_n1065.pdf'}],
        articleUrl: ''
      },
       {
        tag: 'gestao',
        title: 'Implantação do PET na Administração',
        desc: 'O Departamento de Administração da UFV teve sua proposta aprovada pela CAPES para a implantação de um dos primeiros Programas Especiais de Treinamento do Brasil nessa área. O programa é orientado pelo professor Adriel Rodrigues de Oliveira, que atua como tutor e foi o responsável pela iniciativa da proposta. n. 1079',
        photos: [{url: '/1988 - PET.png', caption: 'O grupo de estudantes selecionados, juntamente com o professor Adriel Rodrigues de Oliveira'}],
        externalLinks: [{label: 'Jornal 1079', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/c/3/a/c3ab63df995a03ab8744aee632f9b825979979a052ee3cd9e92e48a65ba254a9/Edi____o_n1079.pdf'}],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'VIII Semana do Administrador',
        desc: 'O Centro Acadêmico de Administração promoverá em 16 a 19 de agosto, a VIII Semana do Administrador. (04ago. n.1063).',
        photos: [],
        externalLinks: [{label: 'Jornal 1063', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/f/6/d/f6de6f266b217542bddd2bfae8d9dc34824ad7bae5f4208ff1acc66d63373da3/Edi____o_n1063.pdf'}],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Posses do DAD 1ª Chefia e do DEE 1ª Chefia',
        desc: 'Em 19 de agosto de 1988, o Reitor Geraldo Martins Chaves empossou os primeiros chefes dos novos departamentos de Administração (DAD) e Economia (DEE) da UFV. A solenidade marcou o desmembramento do antigo Departamento de Administração e Economia (DAE), oficializando as seguintes lideranças: Professor Juraci Aureliano Teixeira: 1ª chefia do Departamento de Economia. Professor Marcos Tanure Sanábio: 1ª chefia do Departamento de Administração. (20out. n.1074).',
        photos: [],
        externalLinks: [{label: 'Jornal 1074', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/a/c/0/ac0cb25a2d3fdd5956e1063701e5acaaf99f1716aacc254787eac3a508c56740/Edi____o_n1074.pdf'}],
        articleUrl: ''
      },
      {
        tag: 'infraestrutura',
        title: 'Tratativas para o novo prédio do Departamento de Administração',
        desc: 'Em 16 de dezembro de 1988, a ata número onze, na reunião do Colegiado do Departamento de Administração, o Senhor Presidente Prof. Marcos Tanure Sanábio compartilhou informações institucionais de grande relevância para a infraestrutura e a expansão acadêmica do departamento, destacando a realização de uma reunião com o Reitor para tratar diretamente sobre o andamento das obras de construção das novas instalações físicas destinadas ao prédio do Departamento de Administração, cuja agenda incluiu um encontro planejado no próprio hall do referido edifício em obras.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      }
    ],
    photos: [
      {
        url: '',
        caption: 'Os formandos e os homenageados da Turma de Janeiro de 1988 da Universidade Federal de Viçosa.'
      },
      {
        url: '',
        caption: 'O Reitor Geraldo Martins Chaves cumprimenta o professor Marcos Tanure Sanábio, vendo-se, à direita, o professor Juraci Aureliano Teixeira.'
      },
      {
        url: '',
        caption: 'Professor Newton Paulo Bueno.'
      }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/1988-ufv-informa-2'
  },

  1989: {
    events: [
      {
        tag: 'extensao',
        title: 'Relatos sobre o Espaço Físico do Prédio e Planejamento Integrado da Semana do Fazendeiro e Semana do Empresário',
        desc: 'Na reunião do Colegiado do Departamento de Administração (DAD) realizada na sala de reuniões do Departamento de Engenharia Florestal, foram apresentadas importantes deliberações relativas às instalações físicas e eventos de extensão do departamento. No âmbito da infraestrutura e espaço físico do DAD, o Senhor Presidente Prof. Marcos Tanure Sanábio conduziu relatos informativos mapeados sob o item de assuntos gerais dedicados ao prédio e gerenciamento do espaço físico da unidade. Adicionalmente, discutiu-se em plenário a articulação de eventos institucionais de extensão com a proposta de unificar e realizar, na mesma data, as atividades comemorativas e programáticas voltadas para a Semana do Fazendeiro e a Semana do Empresário.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'TELMA REGINA DA COSTA GUIMARÂES BARBOSA',
        desc: 'Admissão da docente TELMA REGINA DA COSTA GUIMARÂES BARBOSA no Departamento de Administração e Contabilidade (DAD), com início das atividades em 02/05/1989.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'EVALDO GUIMARÃES BARBOSA',
        desc: 'Admissão do docente EVALDO GUIMARÃES BARBOSA no Departamento de Administração e Contabilidade (DAD), com início das atividades em 01/11/1989.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Professoras da UFV visitam Universidades do Canadá',
        desc: 'Em 1989, a Universidade Federal de Viçosa (UFV) deu um passo histórico rumo ao fortalecimento do empreendedorismo regional ao iniciar uma cooperação técnica com a Universidade de Quebec, Chicoutimi, no Canadá. O pontapé inicial ocorreu quando as professoras Maria Elena Barbassa e Nina Rosa visitaram a instituição canadense para negociar a parceria. Logo em seguida, em março do mesmo ano, professores da Universidade de Quebec retribuíram a visita, indo até o Departamento de Administração da UFV para firmar o intercâmbio. O grande objetivo dessa cooperação internacional era criar o Centro de Estudos e Pesquisa de Pequena e Média Empresa em Viçosa. Para consolidar o centro e capacitar o corpo docente, o projeto previa o treinamento de professores da UFV em nível de doutorado no Canadá, além da implementação pioneira de cursos de mestrado (com previsão de início para 1991) e doutorado na universidade mineira. Além do ganho acadêmico, a iniciativa buscava implantar, de forma pioneira, "Incubatórios de Empresa" (as chamadas incubadoras), com o propósito de fomentar o empreendedorismo local e gerar novos empregos no município de Viçosa. (23jun. n.1107).',
        photos: [{url: '/1989 “As professoras Nina Rosa da S. Cunhas e Maria E. Barbassa”.jpg', caption:'As professoras Nina Rosa da S. Cunhas e Maria E. Barbassa'}],
        externalLinks: [{label: 'Jornal 1107', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/f/6/9/f69812fe99f3c615bb5f1bc80e9326046aff8bafa6566c4bf2941a7bedc3f7f3/Edi____o_n1107.pdf'}],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'UFV e Québec: Um Marco na Administração',
        desc: 'Em março de 1989, os professores André Briand e Michel Michaud da Universidade de Quebec de Chicoutimi visitaram o Departamento de Administração da UFV para firmar um intercâmbio histórico. O grande objetivo dessa cooperação internacional fora criar o Centro de Estudos e Pesquisa de Pequena e Média Empresa na universidade. O projeto envolvia treinar professores da UFV no doutorado no Canadá e fundar um curso de mestrado em Viçosa para 1991. (20jan. nº 1087, 10mar. nº 1094 e 23jun. nº 1107).',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Reitor empossa novos chefes de departamento da UFV',
        desc: 'O Reitor Antônio Fagundes de Sousa empossou os novos chefes de 23 departamentos da UFV para um novo período administrativo. As cerimônias ocorreram em 11 e 13 de setembro de 1989, após votações internas em cada órgão. Entre os empossados está o professor Roberto de Carvalho Araújo do Departamento de Administração. (15set. nº 1117).',
        photos: [{url: '/1989 - Novos Chefes.png', caption:'Reitor empossa novos chefes de departamento da UFV '}],
        externalLinks: [{label: 'Jornal 1117', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/4/f/4/4f452339214fcdfefb843da87f88d04e9a34ce13d2012f1ecc5b9a15a96774fb/Edi____o_n1117.pdf'}],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'III Semana do Empresário',
        desc: 'A III Semana do Empresário ocorreu de 10 a 14 de julho na UFV, focando em empresários e profissionais do setor. O evento ofereceu cursos de curta duração sobre temas como administração em tempos de crise, informática aplicada, marketing para pequenas empresas, novos empresários, franquia comercial, racionalização do consumo de energia, montagem e desenvolvimento de indústria, matemática financeira para empresários, gerenciamento de estoques, política governamental e de desenvolvimento tecnológico na indústria brasileira, Paralelamente, durante a III Semana houve uma exposição de produtos e serviços aberta ao público no Centro de Vivência. A organização contou com o apoio da Associação Comercial de Viçosa e do CEAG-MG, e do Instituto de Desenvolvimento Industrial de Minas Gerais-INDI. (15mai. nº 1102, 25set. nº1118 e 13out. nº 1120).',
        photos: [{url: '/1989 - Semana do Empresario.png', caption:'Estande de exposição no centro de vivência'},
          {url: '/1989 - Autoridades Semana do Empresario.png', caption:'Autoridades Presentes na III Semana do Empresário'}
        ],
        externalLinks: [{label: 'Jornal 1102', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/5/4/0/5403e540ec3fefd6f8059489dc7ea39fe8fbd57b6d23bea2a5d348ac12b0350e/Edi____o_n1102.pdf'},
          {label: 'Jornal 1118', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/d/f/0/df08e086955190a58841c2ccd30caaf35f83dd8cedd5320e7b47ec70d8317da7/Edi____o_n1118.pdf'},
          {label: 'Jornal 1120', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/3/c/c/3cc6a86241a32b3a2fbde1ee1d49dc71efa2ea4e1466e4ab2dab00531fd2104e/Edi____o_n1120.pdf'}
        ],
        articleUrl: ''
      },
      {
        tag: 'infraestrutura',
        title: 'Aprovação da ocupação do DAD no novo prédio e curso de extensão concluído',
        desc: 'Em 19 de outubro de 1989, em relação ao espaço físico departamental, o Senhor Presidente Prof. Marcos Tanure Sanábio apresentou ao Colegiado a planta do prédio do DAD, informando que a comissão da obra se reuniu com o arquiteto Paulo, da prefeitura universitária, que solicitou dados sobre as divisões internas conforme as necessidades. Após debates, o Colegiado aprovou por maioria que o DAD ficasse instalado nas dependências do terceiro andar e na parte térrea (garagem) da nova edificação. Também nesta data, a professora Nina Rosa informou a conclusão do segundo curso de extensão em Informática Aplicada à Administração.',
        photos: [{url: '/1989 “Construção do Departamento de Administração e Economia”.jpg', caption:'Construção do Departamento de Administração'}],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'infraestrutura',
        title: 'Departamentos de Administração e Economia terão novas sedes',
        desc: 'As novas sedes dos Departamentos de Administração e de Economia da UFV estão em fase adiantada, com o primeiro pavimento de uma estrutura de 3.410 m² quase concluído atrás do Edifício Reinaldo de Jesus Araújo. O projeto prevê, no térreo, 24 gabinetes duplos, áreas administrativas, laboratórios e salas de leitura e computação. Os andares superiores deverão abrigar os departamentos de Letras e Artes e de Educação. (23out. nº1121).',
        photos: [{url: '/1989 “Construção do Departamento de Administração e Economia”.jpg', caption:'Construção do Departamento de Administração'}],
        externalLinks: [{label: 'Jornal 1121', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/7/1/6/71663aec6743c1a13e1e357cad3855b94565f490f652c374259c93b65af32a2f/Edi____o_n1121.pdf'}],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Professor Gualberto Ferreira da Silva Lança Apostila pela Imprensa Universitária',
        desc: 'O professor Gualberto Ferreira da Silva do DAE lançou a apostila "Tabelas Financeiras–Juros Compostos" pela Imprensa Universitária, que traz tabelas financeiras calculadas em microcomputador ao longo de 254 páginas. (01dez. nº 1127).',
        photos: [{url: '/1989 - Apostila.png', caption:'Apostila "Tabelas Financeiras"'}],
        externalLinks: [{label: 'Jornal 1127', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/8/9/5/89574db2a5f9e435347cc97fc439213d2f4cd4445078d0c9aa3401ad5b9cd47b/Edi____o_n1127.pdf'}],
        articleUrl: ''
      },
       {
        tag: 'reconhecimento',
        title: 'Falecimento do professor Roberto de Carvalho Araújo',
        desc: 'O professor Roberto de Carvalho Araújo, chefe do Departamento de Administração da UFV, faleceu em 20 de dezembro de 1989, em Belo Horizonte. Formado em Direito, Administração e Economia, ele era mestre pela PUC-Rio e planejava cursar doutorado na Espanha. O velório ocorreu no Salão Nobre da Universidade, seguido de missa solene no Santuário de Santa Rita de Cássia e sepultamento no Cemitério Dom Viçoso. Roberto pertencia a uma família tradicional de Viçosa e deixou esposa e três filhos. (29dez. nº 1130).',
        photos: [{url: '/1989 “O professor Roberto de Carvalho Araújo. ”.jpg', caption: 'Roberto de Carvalho Araújo'}],
        externalLinks: [{label: 'Jornal 1130', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/f/c/3/fc3bff5f194f835b024830ecf7755431f89ce9a67f218f03f07d130f1ce1ccb7/Edi____o_n1130.pdf'}],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'ANTONIO DE FIGUEIREDO VIEIRA',
        desc: 'Admissão do docente ANTONIO DE FIGUEIREDO VIEIRA no Departamento de Administração e Contabilidade (DAD), com início das atividades em 27/12/1989.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
     
    ],
    photos: [
      {
        url: '',
        caption: 'As professoras Nina Rosa da S. Cunhas e Maria Elena Barbassa'
      },
      {
        url: '',
        caption: 'Construção do Departamento de Administração e Economia.'
      },
      {
        url: '',
        caption: 'O professor Roberto de Carvalho Araújo.'
      },
      {
        url: '',
        caption: 'O Reitor Antônio Fagundes faz seu discurso durante a solenidade de posse'
      },
      {
        url: '',
        caption: 'Os professores canadenses, acompanhados de professores do Departamento de Administração.'
      }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/1989-ufv-informa'
  },

  1990: {
    events: [
      {
        tag: 'reconhecimento',
        title: 'UFV perde mais um professor',
        desc: 'O professor Gualberto Ferreira da Silva faleceu aos 51 anos, no dia 9 de janeiro, no Rio de Janeiro. Natural da capital carioca e mestre pela COPPE/UFRJ, ele atuava como professor assistente VI no Departamento de Administração da UFV desde 1979. Sua formação incluía o bacharelado em Administração pela FCEPRJ, concluído em 1977. (12jan. n.1131).',
        photos: [],
        externalLinks: [{label: 'Jornal 1131', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/2/7/8/278b03e1c885d863bdb16cdd23e6ead5f6f63dcf12c4b2bd2d2bba665d9856d1/Edi____o_n1131.pdf'}],
        articleUrl: ''
      },
      {
        tag: 'pesquisa',
        title: 'Aprovação de proposta para mestrado interdisciplinar com a Universidade de Québec',
        desc: 'Em 15 de maio de 1990, em uma reunião informal convocada previamente com a presença dos docentes do DAD, e cujos desdobramentos foram discutidos nesta sessão oficial, foi debatida e aprovada de forma unânime pelo Colegiado uma proposta para o estabelecimento de um programa de mestrado interdisciplinar. O projeto prevê o oferecimento de disciplinas na área de Gerência de Empresas Agroindustriais associado ao Projeto de Cooperação Técnica Internacional firmado em nível de mestrado entre a UFV e a Universidade de Québec (Canadá).',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Professor Canadense visita a UFV',
        desc: 'O professor canadense André Courtemanche, da Universidade de Quebec, visitou a UFV entre 14 de abril e 4 de maio de 1990 para discutir um programa de cooperação técnica. O projeto prevê o treinamento de doutorado para professores do Departamento de Administração e a criação de um mestrado focado em pequenas e médias empresas. A parceria visa transformar o Naipe em um centro de excelência e incentivar a criação de novas empresas na região. (18mai. n.1147).',
        photos: [{url: '/1990 “André Courtemanche”.jpg', caption: 'André Courtemanche'}],
        externalLinks: [{label: 'Jornal 1147', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/7/5/3/7539e652c1344b226a1c8c341226392909eec7da7823e02d1ee16f5799a0f888/Edi____o_n1147.pdf'}],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Estudos de viabilidade para a criação dos cursos de Direito e Ciências Contábeis',
        desc: 'Em 18 de julho de 1990, durante a sessão do Colegiado, o professor José Maria realizou uma explanação detalhada a respeito da viabilidade técnica e das dificuldades operacionais para a futura criação do curso de graduação em Direito na UFV, informando que o documento oficial de planejamento estava sendo elaborado pelos professores da área para posterior envio à chefia do DAD. Na mesma reunião, a professora Nanci informou que, em conjunto com o professor Milton, estava estruturando um documento de teor semelhante focado na viabilidade e planejamento para a criação do curso de Ciências Contábeis na instituição, que também seria encaminhado ao chefe do departamento.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Departamento de Administração e a IV Semana do Empresário',
        desc: 'O Departamento de Administração da UFV e o Núcleo de Assistência Integral à Pequena Empresa (Naipe), com apoio da Associação Comercial de Viçosa, do Senac e do Senar, promoveram a IV Semana do Empresário, oferecendo 16 cursos de capacitação e áreas para exposição de produtos, visando a integração de empresários e executivos com » Universidade e incentivar o intercâmbio entre pequenas e microempresas. Cerca de 150 empresários se inscreveram e 263 pessoas participaram dos cursos, refletindo a frequência de um empresário em mais de um curso, Os participantes em sua maioria eram de pequenos e médios empresários da microrregião. (03ago. 1158; 10ago. nº1159 e 23ago. n.1161).',
        photos: [],
        externalLinks: [{label: 'Jornal 1158', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/6/b/2/6b2eb26e23bf377e3eb47d0100c720afbe863152ebf38da518937ab958d1030c/Edi____o_n1158.pdf'},
          {label: 'Jornal 1159', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/1/e/4/1e47cdfc39f647cb2b90c76ebf0ccb59b4a4bc0992837bc6611213ecb938c970/Edi____o_n1159.pdf'},
          {label: 'Jornal 1161', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/5/5/9/559224383e8969c517ecdc96c54f05dd823e8f7406adfd4edba146359b680610/Edi____o_n1161.pdf'}
        ],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Participação do DAD na Semana do CCH e na Semana do Administrador',
        desc: 'Em 29 de agosto de 1990, no que diz respeito ao planejamento de festividades e integração institucional, o Senhor Presidente comunicou oficialmente ao Colegiado a realização da Semana do Centro de Ciências Humanas, Letras e Artes (CCH), destacando que o DAD ficaria responsável pela coordenação de um dos eventos da programação.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Reportagem sobre o departamento de Administração: sua estrutura e demais características',
        desc: 'Reportagem inédita sobre o Departamento de Administração \n \n(31ago. nº1163). ?????',
        photos: [],
        externalLinks: [{label: 'Jornal 1163', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/1/9/8/19870b0a477e1ebdca1ad8decb7a1b264e9b2591d34be7bd2e4dfbbf4be29628/Edi____o_n1163.pdf'}],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Professor Milton Rodrigues Natalino Lança Apostila Pela Imprensa Universitária',
        desc: 'O Professor Milton Rodrigues Natalino do Departamento de Administração (DAD) publicou a apostila editada pela Imprensa Universitária, intitulada “Contabilidade geral”. (10set. n.1164).',
        photos: [{url: '/1990 - Apostila.png', caption: 'Apostila Contabilidade geral'}],
        externalLinks: [{label: 'Jornal 1164', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/e/4/7/e47872466be165673f77136f6bd9d86afd41fb5ccdc13dc77c4b1c894cd2facf/Edi____o_n1164.pdf'}],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Professor canadense fala sobre Pequena e Média Empresa',
        desc: 'A pequena e média empresa canadense foi tema da mesa-redonda. e que contou com a participação do professor Gérald d’Amboise, professor da Universidade de Laval, em Québec, Canadá e diretor do Grupo de Estudos sobre Pequenas e Médias Empresas.  Participaram do encontro o professor Juraci Aureliano Teixeira, professor Antonio de Figueiredo Vieira, das professoras Maria Elena Barbassa e Nina Rosa da Silveira Cunha do DAD. Ele falou cerca de quatro horas neste encontro, discorrendo sobre a PME no Canadá e, depois, fez uma análise comparativa com a realidade brasileira dessas empresas. Segundo a professora Maria Elena, concluiu-se que existe muita semelhança entre as PMEs canadenses e brasileiras no tocante aos aspectos comportamentais e estruturais. “A grande diferença entre os dois países nessa área é com relação ao apoio governamental que, no Canadá, é superior”, destacou. O DAD está negociando um projeto de cooperação técnica entre a UFV e universidades canadenses, daí a vinda do professor Gérald d\' Amboise. A Universidade de Laval é considerada um centro de excelência em estudos aplicados à PME “Pretendemos transformar o Núcleo de Apoio Integral à Pequena Empresa, o NAIPE, também em um centro de excelência, nos mesmos moldes de órgãos canadenses dessa natureza”, revelou Maria Elena. (10set. n.1164).',
        photos: [{url: '/1990 - Pequena e Media empresa.png', caption: 'O professor Gerald discorreu sobre a PME no Canadá aos professores que participaram da mesa-redonda.'}],
        externalLinks: [{label: 'Jornal 1164', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/e/4/7/e47872466be165673f77136f6bd9d86afd41fb5ccdc13dc77c4b1c894cd2facf/Edi____o_n1164.pdf'}],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Professor do DAD ministra curso na UFJF',
        desc: 'O Professor Marcos Tanure Sanábio ministrou o curso sobre Habilidades Gerenciais e Produtividade no Programa de Treinamento, para diretores e gerentes de várias unidades, conforme Convênio entre a UFV e a UFJF. (27dez. n.1176).',
        photos: [],
        externalLinks: [{label: 'Jornal 1176', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/5/1/0/5107da4e89d7f3ea621deb8db019f5e3777e71156c5771c761348db654aa0138/Edi____o_n1176.pdf'}],
        articleUrl: ''
      }
    ],
    photos: [
      {
        url: '',
        caption: 'André Courtemanche.'
      }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/1990-ufv-informa'
  },

  1991: {
    events: [
      {
        tag: 'gestao',
        title: 'DJAIR CESARIO DE ARAUJO',
        desc: 'Admissão do docente DJAIR CESARIO DE ARAUJO no Departamento de Administração e Contabilidade (DAD), com início das atividades em 07/08/1991.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'XVII Encontro Nacional dos Estudantes de Administração',
        desc: 'Cerca de dois mil estudantes de diversas regiões do país foram recebidos em Viçosa, entre 8 e 12 de julho, para o XVII Encontro Nacional dos Estudantes de Administração. (25jan. nº 1179 e 06mai. nº 1190).',
        photos: [],
        externalLinks: [
          {label: 'Jornal 1179', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/9/7/a/97a2f85b668a1bf0d7d15c37a77b8dbe367705e881e318ba357b16ea3cb5269d/Edi____o_n___1179_ocr.pdf'},
          {label: 'Jornal 1190', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/a/c/f/acfd3e71bdd96fe9c0f8292730d65c6c1d0c7e5c005008468247591f5af61d58/Edi____o_n1190.pdf'}],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'V Semana do Empresário',
        desc: 'O DAD realizou de 8 a 12 de julho, a V Semana do Empresário, evento voltado para a reciclagem e discussão de novas alternativas de negócios para empresários e gerentes. (10mai. nº 1191 e 18jun. nº 1196).',
        photos: [],
        externalLinks: [{label: 'Jornal 1191', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/8/9/9/899fcd5eb0d874620d6f939eb3f275e1f29c76e3203833b14193b486c0886c60/Edi____o_n1191.pdf'},
          {label: 'Jornal 1196', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/a/a/8/aa87055db663b53806895da846a821c56b1f6242b1daff4c394a529d1d897214/Edi____o_n1196.pdf'}
        ],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'TV Viçosa iniciou suas transmissões',
        desc: 'Os preparativos para o início das transmissões da TV Viçosa, vinculada à Fundação Rádio e Televisão Educativa (RTV), foram concluídos. A emissora teve a programação voltada para interesses comunitários da microrregião, com ênfase especial em jornalismo regional durante a retransmissão da Rede Brasil (TVE). A equipe de trabalho, coordenada pela Prof. Carlos Alberto Freire Resende do DAD, aproveitou funcionários e estudantes da própria UFV, sendo estes últimos selecionados por concurso. (29ago. nº 1199).',
        photos: [],
        externalLinks: [{label: 'Jornal 1199', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/2/4/8/2485442f866976ef52569bd14ab90397d6fd86b5984baa3e2d9630213f2499ea/Edi____o_n1199.pdf'} ],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'JOSE ROBERTO REIS',
        desc: 'Admissão do docente JOSE ROBERTO REIS no Departamento de Administração e Contabilidade (DAD), com início das atividades em 01/12/1991.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      }
    ],
    photos: [],
    articleUrl: ''
  },

  1992: {
    events: [
      {
        tag: 'fundacao',
        title: 'Inaugurado o Prédio do CCH',
        desc: 'No dia 11 de setembro de 1992, às 14 horas, foi inaugurado o edifício CCH que passou a abrigar os Departamentos de Administração, Economia, Letras e Artes. A solenidade de inauguração foi conduzida pelo então reitor da UFV, professor Antônio Fagundes de Sousa, também estiveram presentes o diretor-geral do jornal Estado de Minas, João Bosco Martins Sales, o diretor do CCH, prof. Juraci Aureliano Teixeira, do chefe do DEE, prof. Eloy Alves Filho e Prof. Antônio de Figueiredo Vieira, chefe do DAD. n.1241',
        photos: [{ url: '/1992 - Predio pronto.png', caption: 'Inauguração do Prédio do CCH.' }],
        externalLinks: [{ label: 'Jornal 1241', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/0/2/5/025da97ed19e5463545a492c268660c1f0f8c496e4bc98ca4969fb92d8d7ed8c/Edi____o_n1241.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'SEMINÁRIO SOBRE QUALIDADE TOTAL NAS ORGANIZAÇÕES',
        desc: 'A professora Maria Elena Barbassa foi a coordenadora do seminário sobre “qualidade total nas organizações”, proferido pelo professor norte-americano Ronald F. Farina na UFV. O evento abordou uma visão sistêmica da qualidade em todos os setores, visando melhorar o desempenho e a eficiência institucional. n. 1224',
        photos: [],
        externalLinks: [{ label: 'Jornal 1224', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/c/6/d/c6d45319dbe887b8e13e338c4134ecb74e91185c395ad6cad30e6f685710ad42/Edi____o_n1224.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'V Semana do Empresário',
        desc: 'A V Semana do Empresário, organizada pela UFV/DAD e ACV, ocorreu de 23 a 27 de agosto de 1992 para promover a integração entre executivos e a universidade. O evento teve foco no intercâmbio de conhecimentos técnicos e gerenciais para pequenas e microempresas através de cursos e debates. n. 1238',
        photos: [],
        externalLinks: [{ label: 'Jornal 1238', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/4/4/3/443f49137e29060fb2f0a4fb44eb1a143d4566ab26d97d0e842c0c0d67643ecb/Edi____o_n1238.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'DAD promove curso sobre bolsa de valores',
        desc: 'O Departamento de Administração (DAD) promoveu curso sobre Bolsa de Valores em parceria com a Bolsa de Valores de Minas Gerais (BVMG). O evento contou com palestras dos superintendentes Paulo Henrique Ayres Pena e Lacyr Maffia, que abordaram o funcionamento do mercado, a capitalização de empresas e métodos de análise de ações. O curso visou capacitar alunos e profissionais, esclarecendo dúvidas sobre investimentos e o ambiente de negociação. n. 1239',
        photos: [{ url: '/1992 “O superintendente Paulo Henrique Ayres Pena”.jpg', caption: 'O superintendente Paulo Henrique Ayres Pena.' }],
        externalLinks: [{ label: 'Jornal 1239', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/a/e/5/ae55cfd43f837b259df0bcc96eaeaac6dd6c726f5803d211bc235f5a21d32337/Edi____o_n1239.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Alunos de Administração promovem palestras',
        desc: 'Os egressos da turma de 1991 de Administração da Unioeste, conhecidos como "Calouros 91", realizam periodicamente eventos e palestras para compartilhar experiências de mercado com os atuais estudantes. A iniciativa visa fortalecer o networking e integrar gerações, oferecendo uma visão prática da profissão aos acadêmicos.  n. 1220',
        photos: [],
        externalLinks: [{ label: 'Jornal 1220', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/d/7/9/d7928bb4aa7e58c55d0caf33687fdef6b62283c51d9124a23ccd663d21d02e49/Edi____o_n1220.pdf' }],
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
        title: 'UFES Busca Integração com a UFV/DAD',
        desc: 'Com o objetivo de conhecer a sólida experiência da UFV na realização de eventos corporativos e de extensão, representantes da Universidade Federal do Espírito Santo (UFES) realizaram uma visita oficial ao campus de Viçosa. A equipe da UFES reuniu-se com docentes e técnicos da Comissão de Extensão do DAD, formalizando convite para a equipe do DAD ministrar palestras na UFES. Tiveram participação os professores e técnicos Cássia Viviani Silva Santiago, José Roberto Reis, Afonso Augusto Teixeira de Freitas de Carvalho Lima e Beatriz de Freitas Dias. n. 1261',
        photos: [{ url: '/1993 - UFES UFV.png', caption: 'O grupo foi recebido na Imprensa Universitaria pelo diretor, professor José Geraldo Femandes de Araújo.' }],
        externalLinks: [{ label: 'Jornal 1261', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/0/2/7/027d77ec7ea5d814b01b77ecebb6b905bd1a5c349b03311e88346165b8c74105/Edi____o_n1261.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Técnicas Gerenciais Japonesas',
        desc: 'O administrador de empresas Sérgio Maia Botelho, consultor do Armarinho Santo Antônio de Ubá (MG), proferiu uma palestra na Universidade Federal de Viçosa (UFV) abordando o tema "Técnicas Gerenciais Japonesas em Empresa Nacional: uma experiência positiva". O evento foi promovido pelo DAD/PET e coordenado pelo professor José Edson Lara. Em sua apresentação, Botelho detalhou o processo de implementação de gestão de qualidade no Armarinho, que englobou o uso de ferramentas estruturadas como seminários motivacionais, diagramas de causa e efeito. (Colocar Foto) (10 dez n. 1271)',
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
        title: 'Aprovação da Empresa Júnior no CEPE',
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
        photos: [{ url: '/1994 - Revista PET Administração.png', caption: 'Lançamento da primeira edição da Revista do PET Administração.' }],
        externalLinks: [{ label: 'Jornal 1288', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/a/5/c/a5ccfa4ae170dc54a6c114a8ae64cf7cb5dab27e19d7e324c17622b74f1b82a2/Edi____o_n1288.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'fundacao',
        title: 'Criação do Centro Acadêmico de Consultoria – CACE',
        desc: 'Estudantes de Administração da UFV constituíram o Centro Acadêmico de Consultoria Empresarial (CACE), uma empresa júnior que visa aproximar a teoria acadêmica da prática profissional. A entidade presta serviços de consultoria e assessoria a micro, pequenas e médias empresas, além de produtores rurais da região. n. 1278',
        photos: [],
        externalLinks: [{ label: 'Jornal 1278', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/7/e/0/7e0febcdb8f18c58089af568baef8503caf4229bddb157b1cee691c41c055a13/Edi____o_n1278.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Professores e estudantes de Administração realizam visita de estudos ao Sul de Minas',
        desc: 'Um grupo de professores e estudantes do curso de Administração visitou Santa Rita do Sapucaí para conhecer a estrutura do Inatel e seu processo de incubação de empresas. A equipe da UFV também foi convidada a auxiliar o Inatel na implantação de um programa com as atribuições do PET. n. 1279',
        photos: [],
        externalLinks: [{ label: 'Jornal 1279', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/2/9/8/2989ba3332da1f4e1e43d78584929a4e443d7eed9ea451f8d9e30f39a22b6ba9/Edi____o_n1279.pdf' }],
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
        desc: 'Anúncio da visita da professora Suzana Braga Rodrigues para a apresentação do seminário "Gerência e Cultura nas Organizações". 18 de maio de 1995 (Ata nº 111/95)',
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
        tag: 'gestao',
        title: 'LOURIVAL DE CASTRO VALE',
        desc: 'Admissão do docente LOURIVAL DE CASTRO VALE no Departamento de Administração e Contabilidade (DAD), com início das atividades em 18/03/1997..',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'LUCIANA DE OLIVEIRA MIRANDA GOMES',
        desc: 'Admissão da docente LUCIANA DE OLIVEIRA MIRANDA GOMES no Departamento de Administração e Contabilidade (DAD), com início das atividades em 12/03/1997.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'JORGE ALBERTO DOS SANTOS',
        desc: 'Admissão do docente JORGE ALBERTO DOS SANTOS no Departamento de Administração e Contabilidade (DAD), com início das atividades em 28/05/1997.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'WALMER FARONI',
        desc: 'Atuação do docente WALMER FARONI na administração superior como Pró-Reitor de Assuntos Comunitários.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'SÉRGIO AUGUSTO PEREIRA MONTEIRO',
        desc: 'Atuação do docente SÉRGIO AUGUSTO PEREIRA MONTEIRO na administração superior como Coordenador do Sistema Rádio e Televisão.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'NINA ROSA DA SILVEIRA CUNHA',
        desc: 'Atuação da docente NINA ROSA DA SILVEIRA CUNHA na administração superior como Diretora de Recursos Humanos.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
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
        desc: 'Concurso na área de Administração da Produção/Material/Novas Empresas, elegendo Luiz Cláudio Lopes Alves para o cargo de Professor Assistente I, em 07/05/1997',
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
        title: 'Programa de Apoio à Integração Graduação/Pós-Graduação (PROIN) e Parabenização pelo Resultado no Provão',
        desc: 'Atualizações sobre o status do Projeto PROIN e congratulações do Reitor parabenizando os professores do DAD pelo expressivo resultado obtido no Exame Nacional de Cursos (Provão).',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
     
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
        desc: 'Realização da aula inaugural do Curso de Pós-Graduação Lato Sensu em Gestão Estratégica, com preenchimento total das vagas ofertadas.',
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
      tag: 'reconhecimento',
      title: 'Homenagem nos 25 anos do AGROS - Profª Nina Rosa da Silveira Cunha',
      desc: 'Homenageada na qualidade de ex-conselheira nos 25 anos de fundação do AGROS.',
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
  },
  2009: {
    // 6 registros neste ano
    events: [
      {
        tag: 'gestao',
        title: 'SIMONE MARTINS',
        desc: 'Admissão da docente SIMONE MARTINS no Departamento de Administração e Contabilidade (DAD), com início das atividades em 16/02/2009.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'WENDER FRAGA MIRANDA',
        desc: 'Admissão do docente WENDER FRAGA MIRANDA no Departamento de Administração e Contabilidade (DAD), com início das atividades em 29/07/2009.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
      tag: 'reconhecimento',
      title: 'Prêmio Rui Miller Paiva - SOBER - Profª Nina Rosa Silveira Cunha',
      desc: 'Foi contemplada com o Prêmio Rui Miller Paiva,\npelo Melhor Artigo Publicado na Revista Economia Rural no\nano de 2009, durante o 47º Congresso da Sociedade\nBrasileira de Economia, Administração e Sociologia Rural -\nSOBER.',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },  
      {
        tag: 'extensao',
        title: 'Dissertação do Mestrado em Administração Recebe Diploma de Honra ao Mérito em Convenção Mineira',
        desc: 'O trabalho intitulado "Contribuição de Melhoria e a Lei de Responsabilidade Fiscal: Um estudo de caso da Mesorregião da Zona da Mata Mineira", de autoria de Tainá Rodrigues Gomide Souza Pinto, figurou entre os premiados na Convenção Mineira de Contabilidade, realizada em Belo Horizonte entre os dias 21 e 23 de outubro. A pesquisa foi agraciada com o Diploma de Honra ao Mérito no Prêmio Internacional de Produção Contábil Técnico-Científica Prof. Dr. Antônio Lopes de Sá. O artigo premiado consiste em um recorte de sua dissertação desenvolvida no Programa de Mestrado em Administração da UFV, sob a orientação do professor Walmer Faroni. Nº 1.428 (12 de dezembro de 2009) FOTO PG. 9',
        photos: [{ url: '2009 “A professora Tainá.”.jpg', caption: 'A professora Tainá Rodrigues Gomide Souza Pinto.' }],
        externalLinks: [{ label: 'Jornal 1428', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/5/0/f/50fb6e5e4987a583c7c6720fbc5927920c37f0fbfb7ac7c7b1644ebc5d146aab/Edi____o_n1428.pdf' },
        ],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Criação do IPPDS e Recursos do CT-INFRA',
        desc: 'O Colegiado aprovou o referendo referente à proposta de criação do Instituto de Políticas Públicas e Desenvolvimento Sustentável da UFV (IPPDS), uma iniciativa conjunta que envolve os departamentos de Administração e Contabilidade, Economia, Economia Doméstica e Economia Rural. Também foi anunciada a aprovação de recursos financeiros do CT-INFRA/FINEP destinados às instalações físicas do Centro de Ciências Humanas, Letras e Artes. 17 de dezembro de 2009 – Ata nº 273/2009.',
        photos: [],
        externalLinks: [{ label: ' Ata nº 273', url: 'https://docs.google.com/document/d/1NAA08pVpW2hd0nSm68sL4JKKWr7_BO1r/edit?usp=sharing&ouid=117232787169035636664&rtpof=true&sd=true' }],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Posse do Professor Luiz Antônio Abrantes',
        desc: 'O professor Luiz Antônio Abrantes, em 30 de dezembro de 2009, toma posse como pró-reitor de Gestão de Pessoas da UFV. Nº 1.421 (28 de fevereiro de 2009)',
        photos: [{ url: '/2009 “O pré-reitor Luiz Antônio Abrantes faz seu pronunciamento, tendo o lado o diretor-assistente Ely Rosa.”.jpg', caption: 'O pró-reitor Luiz Antônio Abrantes em seu pronunciamento.' }],
        externalLinks: [{ label: 'Jornal 1421', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/d/0/e/d0e04d0c2d2600e173083ed4754e22a3d7c817646b397c6ba6bd10586f33d40f/Edi____o_n___1421.pdf' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Lançamento da Revista Administração Pública e Gestão Social (APGS)',
        desc: 'Em setembro de 2009 o DAD lança a primeira edição da revista eletrônica Administração Pública e Gestão Social. N 1.427',
        photos: [{ url: '/2009 - CAPA REVISTA PGS.png', caption: 'CAPA REVISTA PGS' }],
        externalLinks: [{ label: 'Jornal 1427', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/0/0/8/008c3949385dace957921e948276646ad5a978dbf2a13ddf4893de5f7699216c/Edi____o_n___1427.pdf' }],
        articleUrl: ''
      }
    ],
    photos: [
      { url: '/2009 “A professora Tainá.”.jpg', caption: 'A professora Tainá Rodrigues Gomide Souza Pinto.' },
      { url: '/2009 - CAPA REVISTA PGS.png', caption: 'CAPA REVISTA PGS' },
      { url: '/2009 “O pré-reitor Luiz Antônio Abrantes faz seu pronunciamento, tendo o lado o diretor-assistente Ely Rosa.”.jpg', caption: 'O pró-reitor Luiz Antônio Abrantes em seu pronunciamento.' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/2009-jornal-da-ufv'
  },

  2010: {
    // 7 registros neste ano
    events: [
      {
        tag: 'gestao',
        title: 'TAINÁ RODRIGUES GOMIDE SOUZA PINTO',
        desc: 'Admissão da docente TAINÁ RODRIGUES GOMIDE SOUZA PINTO no Departamento de Administração e Contabilidade (DAD), com início das atividades em 11/03/2010.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'ANTÔNIO CARLOS BRUNOZI JÚNIOR',
        desc: 'Admissão do docente ANTÔNIO CARLOS BRUNOZI JÚNIOR no Departamento de Administração e Contabilidade (DAD), com início das atividades em 26/07/2010.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
      tag: 'pesquisa',
      title: 'Tributação na cadeia agroindustrial do leite',
      desc: 'ABRANTES, L. A. ; GOMES, A. P. ; B. JUNIOR, A. C. ; ZUCCOLOTTO, R. ; FERREIRA, Marco Aurélio Marques ; GOMES, S. T. . Tributação na cadeia agroindustrial do leite. 1. ed. Belo Horizonte: Polo de Excelência de Leite e Derivados de Minas Gerais, 2010. v. 1.',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
      {
        tag: 'ensino',
        title: 'Criação do NUPEC',
        desc: 'Foi formalizada a criação do Núcleo de Pesquisa em Contabilidade (NUPEC), voltado para a Iniciação Científica do curso de Ciências Contábeis. 16 de março de 2010 – Ata nº 274/2010.',
        photos: [],
        externalLinks: [{ label: ' Ata nº 274', url: 'https://docs.google.com/document/d/1Juj2wNrYOFAjvasovVSotB8iFa4wdaJp/edit?usp=sharing&ouid=117232787169035636664&rtpof=true&sd=true' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'O II Encontro Mineiro de Administração Pública e Gestão Social (EMAPEGS).',
        desc: 'Ocorreu em 10 e 11 de junho o II EMAPEGS coordenado pelo professor Marco Aurélio Marques Ferreira, do DAD.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'reconhecimento',
        title: 'Reconhecimento no Aniversário do Curso',
        desc: 'O curso de Administração do DAD celebrou seus 35 anos de fundação consolidando-se como uma referência na formação de profissionais capacitados para atuar em diversos setores da economia. O evento contou com a presença de autoridades acadêmicas, como o reitor e o diretor do CCH.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'reconhecimento',
        title: 'Excelência no Enade e Destaque do Curso de Administração',
        desc: 'O curso de Administração do DAD UFV alcançou um resultado histórico ao obter a nota máxima 5 no Exame Nacional de Desempenho dos Estudantes (Enade) de 2009, consolidando sua posição entre as melhores do país. Nº 1.436 | 28 de dezembro 2009',
        photos: [],
        externalLinks: [{ label: 'Jornal 1436', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/3/e/5/3e58c9e8e06b5479403073195ec61343bc873756f6f659d547e373d4f1310954/Edi____o_n___1436.pdf' }],
        articleUrl: ''
      }
    ],
    photos: [
      { url: '', caption: 'O professor Walmer Faroni.' }
    ],
    articleUrl: 'https://atom.ufv.br/index.php/2010-jornal-da-ufv'
  },

  2011: {
    // 4 registros neste ano
    events: [
      {
        tag: 'gestao',
        title: 'FERNANDA MARIA DE ALMEIDA',
        desc: 'Admissão da docente FERNANDA MARIA DE ALMEIDA no Departamento de Administração e Contabilidade (DAD), com início das atividades em 21/01/2011.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'GISLAINE APARECIDA SANTANA SEDIYAMA',
        desc: 'Admissão da docente GISLAINE APARECIDA SANTANA SEDIYAMA no Departamento de Administração e Contabilidade (DAD), com início das atividades em 03/03/2011.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
      tag: 'pesquisa',
      title: 'Administração pública, gestão social e economia solidária: avanços e desafios',
      desc: 'FERREIRA, M. A. M. (Org.) ; EMMENDOERFER, M. L. (Org.) ; GAVA, R. (Org.) . Administração pública, gestão social e economia solidária: avanços e desafios (ISBN 9788560249688). 1. ed. Viçosa (MG): DAD/UFV, 2011. v. 1. 351p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'Administração pública, gestão social e economia solidária: avanços e desafios',
      desc: 'FERREIRA, Marco Aurélio Marques; EMMENDOERFER, M. L. (Org.) ; GAVA, R. (Org.) . Administração pública, gestão social e economia solidária: avanços e desafios. 1. ed. Viçosa: DAD/UFV, 2011. v. 1. 351p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'Estudos Sobre a Gestão do Programa Esporte e Lazer da Cidade',
      desc: 'VIEIRA, L. H. S. ; SILVEIRA, S. F. R. ; FERREIRA, Marco Aurélio Marques ; TEIXEIRA, K. M. D. . Estudos Sobre a Gestão do Programa Esporte e Lazer da Cidade. 1. ed. Brasilia: Gráfica e Editora Ideal, 2011. v. 1. 188p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
      {
        tag: 'ensino',
        title: 'Livro Administração Pública, Gestão Social e Economia Solidária',
        desc: 'A obra intitulada "Administração Pública, Gestão Social e Economia Solidária" foi organizada pelos professores Marco Aurélio Ferreira Marques, Magnus Luiz Emmendoerfer e Rodrigo Gava, do DAD UFV.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Lançamento de Curso e Divulgação no Dia do Administrador',
        desc: 'A professora Nina Rosa da Silveira Cunha expôs informações sobre o andamento do curso lato sensu em Gestão Estratégica e Ambiental. E falou sobre o Dia do Administrador. Ata n.º 285/2011 (1 de setembro de 2011)',
        photos: [],
        externalLinks: [{ label: 'Ata n.º 285/2011', url: 'https://docs.google.com/document/d/1UpBdCyOBaIv6eKHtuwjptcMim54XMxci/edit?usp=sharing&ouid=117232787169035636664&rtpof=true&sd=true' }],
        articleUrl: ''
      }
    ],
    photos: [],
    articleUrl: 'https://atom.ufv.br/index.php/2011-jornal-da-ufv'
  },

  2012: {
    // 3 registros neste ano
    events: [
      {
        tag: 'gestao',
        title: 'ALAN FERREIRA DE FREITAS',
        desc: 'Admissão do docente ALAN FERREIRA DE FREITAS no Departamento de Administração e Contabilidade (DAD), com início das atividades em 01/02/2012.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Recondução da professora Suely no IPPDS',
        desc: 'O Instituto de Políticas Públicas e Desenvolvimento Sustentável da Universidade Federal de Viçosa realizou a cerimônia de posse de sua nova diretoria, reconduzindo a professora Suely de Fátima Ramos Silveira, do Departamento de Administração, ao cargo de diretora para um novo mandato. Ed 1449',
        photos: [],
        externalLinks: [{ label: 'Jornal 1449', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/6/f/c/6fcb2753d5a56874b511fe6c9fce88dbc6841dee48d9cf9de38c289dc4421447/Edi____o_n___1450.pdf' }],
        articleUrl: ''
      },
      {
      tag: 'pesquisa',
      title: 'O cargo de empreendedor público em um governo estadual no Brasil: será este ator contribuinte para a inovação social?',
      desc: 'VALADARES, J.L. ; EMMENDOERFER, M. L. ; FARONI, W. . O cargo de empreendedor público em um governo estadual no Brasil: será este ator contribuinte para a inovação social? (ISBN-978-85-7192-849-7). In: Simone Portella Teixeira de Mello. (Org.). Administração Pública Contemporânea: temas para o debate. 1ed.Pelotas: UFPel, 2012, v. 1, p. 140-160.',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
      {
        tag: 'reconhecimento',
        title: 'Homenagem à Professora Suely de Fátima Ramos Silveira',
        desc: 'A professora Suely de Fátima Ramos Silveira, vinculada ao Departamento de Administração (DAD), foi agraciada com a Medalha de Mérito em Extensão durante as festividades do 85º aniversário de fundação da Universidade Federal de Viçosa. Ed 1450.',
        photos: [],
        externalLinks: [{ label: 'Jornal 1449', url: 'https://atom.ufv.br/uploads/r/arquivo-central-e-historico-da-ufv-ach-ufv/6/f/c/6fcb2753d5a56874b511fe6c9fce88dbc6841dee48d9cf9de38c289dc4421447/Edi____o_n___1450.pdf' }],
        articleUrl: ''
      }
    ],
    photos: [{ url: '/2012 - Formandos de Junho de 2012.png', caption: 'Formandos de Junho de 2012' }],
    articleUrl: 'https://atom.ufv.br/index.php/2012-jornal-da-ufv'
  },

  2013: {
    // 4 registros neste ano
    events: [
      {
        tag: 'gestao',
        title: 'WESCLEY SILVA XAVIER',
        desc: 'Admissão do docente WESCLEY SILVA XAVIER no Departamento de Administração e Contabilidade (DAD), com início das atividades em 17/10/2013.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'JANSEN CARDOSO PEREIRA',
        desc: 'Admissão do(a) servidor(a) técnico-administrativo(a) JANSEN CARDOSO PEREIRA, no Departamento de Administração e Contabilidade (DAD), com início das atividades em 20/08/2013.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
      tag: 'pesquisa',
      title: 'Pesquisa e Interdisciplinaridade em Ciências Sociais Aplicadas, Humanas, Letras e Artes',
      desc: 'FARONI, W. (Org.) ; Emmendoerfer, Magnus Luiz (Org.) . Pesquisa e Interdisciplinaridade em Ciências Sociais Aplicadas, Humanas, Letras e Artes (ISBN 9788566482003). 1. ed. Viçosa: Centro de Ciências Humanas, Letras e Artes/UFV, 2013. v. 1. 192p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'Fatores Determinantes do Clima Organizacional na Gestão de Pessoas em uma Instituição Federal de Ensino Superior',
      desc: 'ABRANTES, Luiz Antônio ; CUNHA, Nina Rosa Silveira ; PEREIRA, Eduardo Rezende ; GOMES, Geraldo Robésio ; GOMIDE, Marco Antonio L. ; LIMA, Rita de Cássia ; DIAS, Lucas . Fatores Determinantes do Clima Organizacional na Gestão de Pessoas em uma Instituição Federal de Ensino Superior. In: BARBOSA, Telma Regina da C. G.; ROCHA, Águida G. F.; REI, Maria Cecília T.; MOREIRA, Natália C.. (Org.). Gestão Pública em Minas Gerais: estudos práticos. 1ed.Contagem - MG: MJR Editora Gráfica, 2013, v. 1, p. 176-255.',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'Benchmarking como Estratégia de Gestão de Unidades Públicas de Ensino',
      desc: 'Moreira, Ney Paulo ; CUNHA, Nina Rosa Silveira ; FERREIRA, M. A. M. ; SILVEIRA, Suely de Fátima Ramos . Benchmarking como Estratégia de Gestão de Unidades Públicas de Ensino: uma aplicação aos Programas de Pós-Graduação Acadêmicos em Administração, Contabilidade e Turismo. In: FERREIRA, Marco Aurélio F.; ABRANTES, L. Antonio. (Org.). Políticas Públicas, Gestão e Sociedade. 01ed.Viçosa MG: Triunfal Gráfica e Editora, 2013, v. 1, p. 133-335.',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'A Constituição de um Fórum de Pesquisa como Espaço de Diálogos Científicos e Interdisciplinares no Centro de Ciências Humanas, Letras e Artes na Universidade Federal de Viçosa',
      desc: 'EMMENDOERFER, M. L. ; FARONI, W. . A Constituição de um Fórum de Pesquisa como Espaço de Diálogos Científicos e Interdisciplinares no Centro de Ciências Humanas, Letras e Artes na Universidade Federal de Viçosa (ISBN-978-85-66482-00-3). In: Walmer Faroni, Magnus Emmendoerfer. (Org.). II FÓRUM DE PESQUISA DO CCH: INTERDISCIPLINARIDADE EM CIÊNCIAS SOCIAIS APLICADAS, HUMANAS, LETRAS E ARTES. 1ed.Viçosa: CCH/UFV, 2013, v. 1, p. 8-15.',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
      {
      tag: 'reconhecimento',
      title: 'Diploma de Honra ao Mérito - Profª Nina Rosa da Silveira Cunha',
      desc: 'A professora Nina Rosa do Departamendo de Administração e Contabilidade foi contemplada com o Diploma de Honra ao Mérito em nome da Divisão de Saúde da Universidade Federal de Viçosa, Fundação Hemominas - Hemonúcleo de Ponte Nova - MG',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
      {
        tag: 'gestao',
        title: 'Homenagens e Menções Honrosas',
        desc: 'O Colegiado registrou homenagens e menções honrosas a membros do corpo docente pelas suas conquistas acadêmicas, parabenizando o professor Magnus Luiz Emmendoerfer em decorrência da reclassificação da revista Administração Pública e Gestão Social como periódico B3 pela Qualis e também a professora Suely de Fátima Ramos Silveira por conta de sua indicação oficial como pesquisadora do CNPq. Ata nº 294/2013 – 1º de março de 2013',
        photos: [],
        externalLinks: [{ label: 'Ata nº 294/2013', url: 'https://docs.google.com/document/d/1iN91IH_sktriz8B_j-Anpe8sz9Pubsfe/edit?usp=sharing&ouid=117232787169035636664&rtpof=true&sd=true' }],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Avaliação da CAPES',
        desc: 'O Curso de pós graduação em administração, em nível de mestrado, conquista conceito 4 na CAPES. Ata nº 299/2013 – 12 de dezembro de 2013.',
        photos: [],
        externalLinks: [{ label: 'Ata nº 299/2013', url: 'https://docs.google.com/document/d/1M1pGGY-UxSncVZ3sC1X27SVhDvImJumr/edit?usp=sharing&ouid=117232787169035636664&rtpof=true&sd=true' }],
        articleUrl: ''
      }
    ],
    photos: [],
    articleUrl: 'https://atom.ufv.br/index.php/2013-jornal-da-ufv'
  },

  2014: {
    // 1 registro neste ano
    events: [
      {
        tag: 'infraestrutura',
        title: 'Obras do Anexo e Mudança de Departamento de Letras',
        desc: 'A presidência apresentou informes sobre as instalações físicas do departamento, destacando a conclusão da primeira etapa da obra do anexo do DAD, a qual ficava dependendo da liberação de recursos financeiros por parte da UFV para que pudesse ser finalizada. Adicionalmente, foi comunicada aos presentes a mudança do Departamento de Letras para sua sede própria e a respectiva reforma do prédio. Ata nº 302/2014 (11 de junho de 2014)',
        photos: [],
        externalLinks: [{ label: 'Ata nº 302/2014', url: 'https://docs.google.com/document/d/1xwrjEYq4QD5jn9Py9S-k7ymEZxL3OXSY/edit?usp=sharing&ouid=117232787169035636664&rtpof=true&sd=true' }],
        articleUrl: ''
      },
    {
      tag: 'pesquisa',
      title: 'Gestão Pública do Turismo no Brasil: teorias, metodologias e aplicações',
      desc: 'PIMENTEL, T. D. (Org.) ; EMMENDOERFER, MAGNUS LUIZ (Org.) ; TOMAZZONI, E. (Org.) . Gestão Pública do Turismo no Brasil: teorias, metodologias e aplicações (ISBN 9788570617354). 1. ed. Caxias do Sul: EDUCS, 2014. v. 1. 528p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'Administração pública, gestão social e economia solidária: avanços e desafios',
      desc: 'FERREIRA, M. A. M. (Org.) ; Emmendoerfer, Magnus Luiz (Org.) ; GAVA, R. (Org.) . Administração pública, gestão social e economia solidária: avanços e desafios (ISBN 9788566482027). 2. ed. Viçosa: Centro de Ciências Humanas, Letras e Artes - UFV, 2014. v. 1. 354p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'Assédio Moral em Organizações Públicas e a (Re)Ação dos Sindicatos',
      desc: 'EMMENDOERFER, MAGNUS LUIZ; TOLFO, S. R. (Org.) ; NUNES, T. S. (Org.) . Assédio Moral em Organizações Públicas e a (Re)Ação dos Sindicatos (ISBN 9788566482034). 1. ed. Viçosa: Centro de Ciências Humanas, Letras e Artes - UFV, 2014. v. 1. 280p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'Pesquisa e Interdisciplinaridade em Ciências Sociais Aplicadas, Humanas, Letras e Artes',
      desc: 'FARONI, W. (Org.) ; EMMENDOERFER, MAGNUS LUIZ (Org.) . Pesquisa e Interdisciplinaridade em Ciências Sociais Aplicadas, Humanas, Letras e Artes (ISBN 9788566482010). 2. ed. Viçosa (MG): Centro de Ciências Humanas, Letras e Artes - UFV, 2014. v. 1. 192p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'Métodos de pesquisa aplicados à gestão pública',
      desc: 'Emmendoerfer, Magnus Luiz. Métodos de pesquisa aplicados à gestão pública (ISBN 9788579882333). 1. ed. Florianópolis: CAD/UFSC, 2014. v. 1. 74p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'Administração Pública, Economia Solidária e Gestão Social',
      desc: 'FERREIRA, Marco Aurélio Marques. Administração Pública, Economia Solidária e Gestão Social. 01. ed. Viçosa: UFV, 2014. v. 01. 299p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'Gestão Pública',
      desc: 'Ferreira, Marco Aurelio Marques. Gestão Pública. 1. ed. Florianópolis: PROFIAP/UFSC, 2014. v. 1. 58p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'Gestão Tributária',
      desc: 'ABRANTES, L. A. ; Ferreira, M.A.M. . Gestão Tributária. 3. ed. Brasilia: UAB/CAPES, 2014. v. 1. 132p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
      {
        tag: 'gestao',
        title: 'NINA ROSA DA SILVEIRA CUNHA',
        desc: 'Nomeação da docente NINA ROSA DA SILVEIRA CUNHA como Professora Titular em 06/06/2014.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'WALMER FARONI',
        desc: 'Nomeação do docente WALMER FARONI como Professor Titular em 06/06/2014.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'TELMA REGINA DA COSTA GUIMARÃES BARBOSA',
        desc: 'Nomeação da docente TELMA REGINA DA COSTA GUIMARÃES BARBOSA como Professora Titular em 19/09/2014.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'ADRIEL RODRIGUES DE OLIVEIRA',
        desc: 'Nomeação do docente ADRIEL RODRIGUES DE OLIVEIRA como Professor Titular em 29/09/2014.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      }
    ],
    photos: [],
    articleUrl: ''
  },

  2015: {
    // 5 registros neste ano
    events: [
      {
        tag: 'gestao',
        title: 'Comemoração de Aniversários',
        desc: 'Comemorações dos 15 anos do Curso de Ciências Contábeis, 10 anos da Pós-Graduação em Administração, 40 anos do curso de Administração e os 40 anos do Departamento. Ata nº 310/2015 (25 de agosto de 2015).',
        photos: [],
        externalLinks: [{ label: 'Ata nº 310/2015', url: 'https://docs.google.com/document/d/10QG-Od8SgSLHbP2ciWgToDIlmN5qE90QeLYiqYWFPTE/edit?usp=sharing' }],
        articleUrl: ''
      },
      {
      tag: 'pesquisa',
      title: 'Assédio Moral em Organizações Públicas e a (Re)Ação dos Sindicatos',
      desc: 'EMMENDOERFER, MAGNUS LUIZ; TOLFO, S. R. (Org.) ; NUNES, T. S. (Org.) . Assédio Moral em Organizações Públicas e a (Re)Ação dos Sindicatos (ISBN 9788544402689). 1. ed. Curitiba: CRV, 2015. v. 1. 276p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
      {
        tag: 'ensino',
        title: 'Implantação do Curso de Doutorado',
        desc: 'DAD aprova o curso de doutorado, com previsão de implantação para o primeiro semestre de 2016.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'reconhecimento',
        title: 'Homenagens a Titulares e Aposentadoria no Departamento',
        desc: 'Foram prestadas homenagens aos professores Nina Rosa da Silveira Cunha e Walmer Faroni pela aprovação para a categoria de professores titulares do departamento. Adicionalmente, o professor Antônio de Figueiredo Vieira comunicou o início de seu processo de aposentadoria, recebendo agradecimentos formais da professora Nina Rosa da Silveira Cunha, em nome de todo o departamento, pela convivência e dedicação ao longo de seus 25 anos de atividades docentes no DAD/UFV. 24 de fevereiro de 2015.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Tramitação do Doutorado em Administração',
        desc: 'O Processo para a criação do curso de doutorado em Administração foi aprovado pelo Conselho de Ensino, Pesquisa e Extensão (CEPE) e encaminhado para a avaliação da CAPES. 17 de abril de 2015.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Chefia do DAD',
        desc: 'A professora Simone Martins assume a chefia do DAD. O professor Djair Cesário de Araújo na ocasião, recebeu as congratulações pela sua  gestão que se encerrou. (26 de junho de 2015)',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      }
    ],
    photos: [],
    articleUrl: ''
  },

  2016: {
    // 8 registros neste ano
    events: [
      {
        tag: 'gestao',
        title: 'Coordenador do Programa de Pós-Graduação Stricto Sensu em Administração',
        desc: 'O professor Magnus Luiz Emmendoerfer foi formalizado como o novo coordenador do Programa de Pós-Graduação Stricto Sensu em Administração. ATA 317. 04 de março de 2016.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
      tag: 'pesquisa',
      title: '20 anos do movimento empresa junior na Universidade Federal de Viçosa',
      desc: 'EMMENDOERFER, MAGNUS LUIZ; FRAGA, B. O. ; CRUZATO, C. S. ; SILVA, H. M. . 20 anos do movimento empresa junior na Universidade Federal de Viçosa (ISBN 9788566482089). 1. ed. Viçosa: Centro de Ciências Humanas, Letras e Artes - UFV, 2016. v. 1. 175p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'O Marketing Verde na Tecnologia da Informação',
      desc: 'CASTRO, B. R. V. ; MOURA, Luiz Rodrigo Cunha ; CUNHA, Nina Rosa Silveira ; PIRES, Ruthe Rebello . O Marketing Verde na Tecnologia da Informação: percepções das atitudes e comportamentos dos profissionais de TI e ações para incrementar o Marketing Verde nesse setor. In: CRUZ, L.; GOMES, P. S.; FERRARI, V.. (Org.). Gestão em Foco: conversas sobre aspectos da gestão empresarial. 1ed.Belo Horizonte - MG: Letramento, 2016, v. , p. 359-386.',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'Fundo de financiamento e qualidade da educação: uma visão dos gestores escolares da Rede Municipal de Viçosa/MG',
      desc: 'MIRANDA, A. C. ; Barreto ML ; FARONI, W. . Fundo de financiamento e qualidade da educação: uma visão dos gestores escolares da Rede Municipal de Viçosa/MG. In: Amelia Carla Sobrinho Bifano. (Org.). Politicas Públicas e sua efetivação local. 1ed.Viçosa-MG: uniedhs, 2016, v. II, p. 332-360.',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
      {
        tag: 'gestao',
        title: 'Coordenação de Curso',
        desc: 'O professor Djair Cesário de Araújo foi anunciado como o novo coordenador do curso de graduação em Administração. ATA 319. 15 de abril de 2016.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'reconhecimento',
        title: 'Congratulações ao Professor Marco Aurélio',
        desc: 'Registro formal de congratulações ao professor Marco Aurélio Marques Ferreira por sua indicação ao cargo de Diretor de Publicação e Comunicação pela Associação Brasileira de Administração Pública - ABAP. ATA 321 2. 10 de junho de 2016.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'JOSIEL LOPES VALADARES',
        desc: 'Admissão do docente JOSIEL LOPES VALADARES no Departamento de Administração e Contabilidade (DAD), com início das atividades em 15/04/2016.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'FERNANDA CRISTINA DA SILVA',
        desc: 'Admissão da docente FERNANDA CRISTINA DA SILVA no Departamento de Administração e Contabilidade (DAD), com início das atividades em 13/07/2016.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'reconhecimento',
        title: 'Novo Editor da Revista Administração Pública e Gestão Social (APGS)',
        desc: 'O professor Josiel Lopes Valadares foi nomeado para o cargo de editor adjunto da revista Administração Pública e Gestão Social (APGS). ATA 322. 01 de julho de 2016.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Tutoria do Programa de Educação Tutorial (PET)',
        desc: 'Eleição do professor Thiago de Melo Teixeira da Costa como o novo tutor do PET-ADM. ATA 323. 12 de agosto de 2016.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'reconhecimento',
        title: 'Premiações Docentes e Simpósio Internacional de Administração Pública (SINAP)',
        desc: 'O Colegiado registrou congratulações ao professor Josiel Lopes Valadares pelo recebimento do Prêmio Guerreiro Ramos de Gestão Pública e ao professor Magnus Luiz Emmendoerfer pela realização do Simpósio Internacional de Administração Pública - SINAP. ATA 324. 09 de setembro de 2016.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      }
    ],
    photos: [],
    articleUrl: ''
  },

  2017: {
    // 1 registro neste ano
    events: [
      {
        tag: 'reconhecimento',
        title: 'Legado Profissional da Primeira Chefe do DAD',
        desc: 'A professora Simone Martins foi homenageada pelos docentes, que a parabenizaram pelo legado de profissionalismo e dedicação, destacando o marco histórico de ter sido a primeira mulher a ocupar a chefia do departamento. Ata nº 328/2017. 24 de agosto de 2017.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
      tag: 'pesquisa',
      title: 'Organizações Públicas, Inovações e Políticas de Desenvolvimento',
      desc: 'EMMENDOERFER, M. L.. Organizações Públicas, Inovações e Políticas de Desenvolvimento (ISBN 9788593276-01-9). 1. ed. Viçosa: IPPDS/UFV, 2017. v. 1. 281p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'Analise da gestão por competências em organizações da justiça eleitoral no Brasil',
      desc: 'SENA, Gabriel Astoni ; CUNHA, Nina Rosa Silveira ; MOURA, Luiz Rodrigo Cunha . Analise da gestão por competências em organizações da justiça eleitoral no Brasil. In: Magnus Luiz Emmendoerfer. (Org.). Organizações públicas, inovações e políticas de desenvolvimento. 1ed.Viçosa: IPPDS UFV, 2017, v. 1, p. 118-140.',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    }
    ],
    photos: [],
    articleUrl: ''
  },

  2018: {
    // 4 registros neste ano
    events: [
      {
        tag: 'gestao',
        title: 'Nomeação de Coordenadores de Administração e Contabilidade',
        desc: 'O Colegiado formalizou a nomeação de novos coordenadores para os cursos oferecidos pelo departamento, sendo designado o professor Evandro Rodrigues de Faria para a coordenação do curso de Administração e o professor Antônio Carlos Brunozi Júnior para a coordenação do curso de Ciências Contábeis. Ata nº 336/2018. 26 de abril de 2018.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
      tag: 'pesquisa',
      title: 'Envelhecimento Ativo: das ações à política',
      desc: 'MARTINS, Simone (Abreu, S.M.); RIBEIRO, A. Q. (Org.) . Envelhecimento Ativo: das ações à política. 1. ed. Viçosa: IPPDS, 2018. v. 1. 133p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
      {
        tag: 'extensao',
        title: 'V Encontro Brasileiro de Administração Pública',
        desc: 'V Encontro Brasileiro de Administração Pública foi realizado pelo DAD e coordenado pelo professor Magnus Luiz Emmendoerfer. Ata nº 337/2018. 15 de junho de 2018.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'reconhecimento',
        title: 'Aniversário do PET ADM',
        desc: 'Comemoração dos 30 anos de existência do PET ADM. Ata nº 339/2018. 14 de setembro de 2018.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      }
    ],
    photos: [],
    articleUrl: ''
  },

  2019: {
    // 4 registros neste ano
    events: [
      {
        tag: 'gestao',
        title: 'DIEGO COSTA MENDES',
        desc: 'Admissão do docente DIEGO COSTA MENDES no Departamento de Administração e Contabilidade (DAD), com início das atividades em 11/10/2019.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'LAYON CARLOS CEZAR',
        desc: 'Admissão do docente LAYON CARLOS CEZAR no Departamento de Administração e Contabilidade (DAD), com início das atividades em 11/11/2019.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'ANA CLAUDIA AZEVEDO',
        desc: 'Admissão da docente ANA CLAUDIA AZEVEDO no Departamento de Administração e Contabilidade (DAD), com início das atividades em 11/11/2019.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
      tag: 'pesquisa',
      title: 'Inovação e Empreendedorismo no Setor Público',
      desc: 'EMMENDOERFER, MAGNUS LUIZ. Inovação e Empreendedorismo no Setor Público (ISBN 9788525601087). 1. ed. Brasilia: ENAP, 2019. v. 1. 80p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'Temporalidades no dia-a-dia do Trabalho Gerencial: Usos, Tensões e Conciliações',
      desc: 'EMMENDOERFER, MAGNUS LUIZ. Temporalidades no dia-a-dia do Trabalho Gerencial: Usos, Tensões e Conciliações (ISBN 9786139626397). 1. ed. Letônia: Novas Edições Acadêmicas, 2019. v. 1. 225p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'O comportamento de compra e a percepção dos atributos da água mineral pelos consumidores',
      desc: 'MOURA, Luiz Rodrigo Cunha ; PORTO, G. D. ; CUNHA, Nina Rosa Silveira ; MOURA, Luiz Eduardo Leite de ; VEIGA, Ricardo T. . O comportamento de compra e a percepção dos atributos da água mineral pelos consumidores. Gestão da Produção em Foco: uma abordagem holística. 1ªed.Uberlândia MG: Editora Conhecimento Livre, 2019, v. , p. 799-821.',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
      {
        tag: 'infraestrutura',
        title: 'Ocupação do Terceiro Andar do Acesso ao CCH1',
        desc: 'O DAD assume oficialmente a ocupação da parte direita do terceiro andar do edifício CCH1. (18 de junho de 2019)',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      }
    ],
    photos: [],
    articleUrl: ''
  },

  2020: {
    // 4 registros neste ano
    events: [
      {
        tag: 'gestao',
        title: 'Inauguração de Auditório do CCH1',
        desc: 'Inauguração do auditório do CCH1, espaço que passou a ser compartilhado com o DEE.  Ata 351/2020 – 13 de março de 2020.',
        photos: [],
        externalLinks: [{ label: 'Ata 351/2020', url: 'https://docs.google.com/document/d/1m74dGvItiBH1MHga9XdUg-MtIDEVyLpBu4LieZygzbU/edit?usp=sharing' }],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'MBA em Gestão Empresarial',
        desc: 'A professora Tainá Rodrigues Gomide Souza Pinto informou o Colegiado a respeito do início das atividades e das aulas do curso MBA em Gestão Empresarial. Ata 351/2020 – 13 de março de 2020.',
        photos: [],
        externalLinks: [{ label: 'Ata 351/2020', url: 'https://docs.google.com/document/d/1m74dGvItiBH1MHga9XdUg-MtIDEVyLpBu4LieZygzbU/edit?usp=sharing' }],
        articleUrl: ''
      },
      {
      tag: 'pesquisa',
      title: 'UNESCO Chair ? Creative Economy & Public Policies',
      desc: 'EMMENDOERFER, M. L.; RICHARDS, G. ; MEDIOTTE, E. J. . UNESCO Chair ? Creative Economy & Public Policies. 1. ed. Viçosa: CCH - Universidade Federal de Viçosa, 2020. v. 1. 113p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'Empreendedorismo, Formação e Inovação Tecnológica em Instituições de Ensino Superior',
      desc: 'GUIMARAES, P. B. V. (Org.) ; CARICIO, M. R. (Org.) ; LIMA, E. O. (Org.) ; EMMENDOERFER, MAGNUS LUIZ (Org.) . Empreendedorismo, Formação e Inovação Tecnológica em Instituições de Ensino Superior. 1. ed. Natal: Motres, 2020. v. 1. 206p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'Gestão de Projetos de Inovação: As premissas do Project 2020 Management Institute aplicadas ao Setor Público Municipal',
      desc: 'EMMENDOERFER, M. L.; SAMPAIO, V. S. . Gestão de Projetos de Inovação: As premissas do Project 2020 Management Institute aplicadas ao Setor Público Municipal. 1. ed. Viçosa: IPPDS/UFV, 2020. v. 1. 92p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'Avaliação da qualidade dos serviços educacionais em uma Instituição Pública de Ensino Superior',
      desc: 'SANTOS, P. H. ; MOURA, Luiz Rodrigo Cunha ; VASCONCE, F. C. W. ; CUNHA, Nina Rosa Silveira . Avaliação da qualidade dos serviços educacionais em uma Instituição Pública de Ensino Superior. Processos de Organicidade e Integração da Educação Brasileira. 4ed.Ponta Grossa - PR: Atena, 2020, v. 4, p. 143-159.',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'CONSEQUENCES OF THE EXPERIENCE OF BRAND OF CONSUMERS IN THE SECTOR OF SMARTPHONES',
      desc: 'PIRES, L. L. ; MOURA, Luiz Rodrigo Cunha ; CUNHA, Nina Rosa Silveira . CONSEQUENCES OF THE EXPERIENCE OF BRAND OF CONSUMERS IN THE SECTOR OF SMARTPHONES. In: Sanabria-Landazábal, Néstor J.; Rodríguez-Albor, Gustavo J. & Barrientos-Oradini, Nicolás P. (Org.). Innovation and the digital world: iInfluence of agile structures and intellectual capital. 1ed.Barranquilla, Santiago Chile: Barranquilla, Editorial Uniautónoma, 2020, v. III, p. 115-137.',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'Uma Nova Democracia para o Século XXI?',
      desc: 'BRUGUE, J. ; MARTINS, SIMONE ; NEBOT, M. C. P. . Uma Nova Democracia para o Século XXI?. 1. ed. Viçosa: IPPDS, 2020. v. 1. 329p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: '¿Una nueva democracia para el siglo XXI?',
      desc: 'BRUGUE, J. (Org.) ; MARTINS, SIMONE (Org.) ; NEBOT, M. C. P. (Org.) . ¿Una nueva democracia para el siglo XXI?. 1. ed. Ciudad Autónoma de Buenos Ai: Clacso, 2020. v. 1. 361p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
      {
        tag: 'ensino',
        title: 'Pós-Graduação lato sensu em Administração Pública Municipal',
        desc: 'O curso de pós-graduação lato sensu em Administração Pública Municipal foi oficialmente aprovado pela PPG. Ata 352/2020 – 15 de maio de 2020.',
        photos: [],
        externalLinks: [{ label: 'Ata 352/2020', url: 'https://docs.google.com/document/d/1jTIt3so7QWyzhMfY_InZINfg6n1hQBEt/edit?usp=sharing&ouid=117232787169035636664&rtpof=true&sd=true' }],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Premiações',
        desc: 'Congratulações ao professor Magnus Luiz Emmendoerfer pelo encerramento de seu mandato na Sociedade Brasileira de Administração Pública (SBAP), e extensão das homenagens ao professor Alan Ferreira de Freitas e ao pós-graduando Samuel Soares da Silva pelo prêmio de melhor artigo da SBAP, recebido do grupo de trabalho GT4 – Planejamento Público, Gestão Social e Desenvolvimento Territorial. Ata 357/2020 – 13 de novembro de 2020.',
        photos: [],
        externalLinks: [{ label: 'Ata 357/2020', url: 'https://docs.google.com/document/d/1Aso4QAFbBZGU9lxVZY5DpwM4PTf3r3-R/edit?usp=sharing&ouid=117232787169035636664&rtpof=true&sd=true' }],
        articleUrl: ''
      },
      {
        tag: 'infraestrutura',
        title: 'Atualização da logomarca',
        desc: 'Atualização da logomarca oficial do DAD. (colocar a foto da logo)',
        photos: [{ url: '/2020 - logo DAD.png', caption: 'Logo do DAD atualizada em 2020' }],
        externalLinks: [],
        articleUrl: ''
      }
    ],
    photos: [{ url: '/2020 - logo DAD.png', caption: 'Logo do DAD atualizada em 2020' }],
    articleUrl: ''
  },

  2021: {
    // 6 registros neste ano
    events: [
      {
        tag: 'gestao',
        title: 'LUANA FERREIRA DOS SANTOS',
        desc: 'Admissão da docente LUANA FERREIRA DOS SANTOS no Departamento de Administração e Contabilidade (DAD), com início das atividades em 08/01/2021.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'LEANDRO RIVELLI TEIXEIRA NOGUEIRA',
        desc: 'Admissão do docente LEANDRO RIVELLI TEIXEIRA NOGUEIRA no Departamento de Administração e Contabilidade (DAD), com início das atividades em 29/04/2021.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
      tag: 'pesquisa',
      title: 'Inovação e empreendedorismo na gestão pública',
      desc: 'EMMENDOERFER, M. L.; MEDIOTTE, E. J. . Inovação e empreendedorismo na gestão pública ( ISBN 9786584620063). 1. ed. Niterói: Laboratório de Políticas, Governança e Turismo (LabPGTUR), 2021. v. 1. 76p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'Políticas Públicas de Cultura',
      desc: 'VITORIA, J. R. (Org.) ; EMMENDOERFER, MAGNUS LUIZ (Org.) . Políticas Públicas de Cultura (ISBN 9786589765059). 1. ed. Salvador: Motres Acadêmicos, 2021. v. 1. 182p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'ANÁLISE COMPARATIVA DO ENGAJAMENTO DE UNIVERSIDADES PÚBLICAS EM SISTEMAS MUNICIPAIS DE CULTURA',
      desc: 'VITÓRIA, J. R. ; MORAIS, M. C. A. ; EMMENDOERFER, Magnus Luiz ; CUNHA, Nina Rosa Silveira . ANÁLISE COMPARATIVA DO ENGAJAMENTO DE UNIVERSIDADES PÚBLICAS EM SISTEMAS MUNICIPAIS DE CULTURA. In: José Ricardo Vitória; Magnus Luiz Emmendoerfer. (Org.).. (Org.). POLÍTICAS PÚBLICAS DE CULTURA. 1eded.Salvador BA: Motres, 2021, v. , p. 107-128.',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'O USO DA TEORIA DO PROGRAMA PARA A CONSTRUÇÃO DE UM MODELO LÓGICO APLICADO AOS SISTEMAS MUNICIPAIS DE CULTURA NO BRASIL',
      desc: 'VITÓRIA, J. R. ; MORAIS, M. C. A. ; EMMENDOERFER, Magnus Luiz ; CUNHA, Nina Rosa Silveira . O USO DA TEORIA DO PROGRAMA PARA A CONSTRUÇÃO DE UM MODELO LÓGICO APLICADO AOS SISTEMAS MUNICIPAIS DE CULTURA NO BRASIL. In: José Ricardo Vitória; Magnus Luiz Emmendoerfer. (Org.).. (Org.). POLÍTICAS PÚBLICAS DE CULTURA. 1.eed.Salvador, BA: Motres, 2021, v. , p. 129-153.',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'Educação financeira para empreendedores populares',
      desc: 'PINTO, T. R. G. S. ; MARTINS, SIMONE ; ALMEIDA, F. M. ; BRAGA, M. J. . Educação financeira para empreendedores populares. 1. ed. Viçosa - MG: IPPDS, 2021. v. 1. 121p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
      {
        tag: 'gestao',
        title: 'Produção de Documentário',
        desc: 'Indicação dos professores Afonso Augusto Teixeira de Freitas de Carvalho Lima, Nina Rosa da Silveira Cunha e Walmer Faroni para iniciar um trabalho de levantamento de informações dedicado a registrar a história do Departamento de Administração e Contabilidade. Ata 360/2021 – 26 de março de 2021.',
        photos: [],
        externalLinks: [{ label: 'Ata 360/2021', url: 'https://docs.google.com/document/d/1WSTv-J_tO2180mCGVU6FKJFBKqzbgE_I/edit?usp=sharing&ouid=117232787169035636664&rtpof=true&sd=true' }],
        articleUrl: ''
      }
    ],
    photos: [],
    articleUrl: ''
  },

  2022: {
    // 4 registros neste ano
    events: [
      {
        tag: 'ensino',
        title: 'Acordo Internacional Unesco e UFV',
        desc: 'Homologação do Acordo Internacional entre a UNESCO e a UFV para a Cátedra em Economia Criativa e Políticas Públicas. 25/03/2022',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
      tag: 'pesquisa',
      title: 'A Administração Pública e a Gestão de Projetos de Inovação',
      desc: 'SAMPAIO, V. S. ; EMMENDOERFER, M. L. . A Administração Pública e a Gestão de Projetos de Inovação (ISBN 9786584774230). 1. ed. Juiz de Fora, MG: Garcia, 2022. v. 1. 92p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'Monitoramento e Avaliação de Projetos sociais na Agricultura Familiar',
      desc: 'FERREIRA, Marco Aurélio Marques. Monitoramento e Avaliação de Projetos sociais na Agricultura Familiar. 1. ed. Viçosa: IPPDS, 2022. v. 1. 128p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'Participación social y políticas públicas en Iberoamérica',
      desc: 'MOLINA-BULLA, C. I. ; NEBOT, C. P. ; DIAS, T. F. ; Ferreira, M.A.M. . Participación social y políticas públicas en Iberoamérica. 1. ed. Bogotá: Universidad Externado de Colombia, 2022. v. 1. 579p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'Arte Vida / Vida Arte',
      desc: 'MARTINS, SIMONE. Arte Vida / Vida Arte. 1. ed. Viçosa: UFV, Divisão Gráfica Universitária, 2022. v. 1. 168p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'APRENDIZADO DIGITAL PARA PESSOAS IDOSAS',
      desc: 'CASTRO, J. S. ; RIBEIRO, A. Q. ; GUERRA, D. J. R. ; RODRIGUES, B. O. ; ANDRADE, M. V. A. ; MARTINS, SIMONE ; MIELE, M. S. A. G. ; PINTO, T. R. G. S. . APRENDIZADO DIGITAL PARA PESSOAS IDOSAS. 1. ed. Viçosa - MG: Grupo de Estudos e Práticas sobre Envelhecimento, Nutrição e Saúde (GREENS), 2022. v. 1. 81p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
      {
        tag: 'extensao',
        title: 'Acordos de Cooperação',
        desc: 'Acordos de cooperação entre o DAD-UFV:\nPrefeitura Municipal de Congonhas (MG) para o desenvolvimento do Plano Municipal de Desenvolvimento de Economia Criativa. \nPrefeitura Municipal de Belo Horizonte voltado para a estruturação dos Indicadores Culturais do Sistema Municipal de Cultura.\nUniversidad Complutense de Madrid (UCM) e a Erasmus University Rotterdam (EUR) para potencializar ações acadêmicas. Setembro de 2022 (Ata 381/2022)',
        photos: [],
        externalLinks: [{ label: 'Ata 381/2022', url: 'https://docs.google.com/document/d/11eaU5o3H8NIgru2d2AcZpI49Ps2Mj7Xh/edit?usp=sharing&ouid=117232787169035636664&rtpof=true&sd=true' }],
        articleUrl: ''
      },
      {
        tag: 'infraestrutura',
        title: 'I Mostra Científica',
        desc: 'Realização da I Mostra Científica e Tecnológica da Cátedra UNESCO em Economia Criativa e Políticas Públicas no Centro de Artes e Convenções da Universidade Federal de Ouro Preto (UFOP). (Ata 382/2022) 13/10/2022',
        photos: [],
        externalLinks: [{ label: 'Ata 382/2022', url: 'https://docs.google.com/document/d/1PWxbc_GvIVSP8OcPP5j16Mno6VS8-sxb/edit?usp=sharing&ouid=117232787169035636664&rtpof=true&sd=true' }],
        articleUrl: ''
      },
      {
        tag: 'reconhecimento',
        title: 'Excelência na Pós-Graduação',
        desc: 'O Programa de Pós-Graduação em Administração (PPGAdm) conquista o Conceito 5 na avaliação quadrienal da CAPES.',
        photos: [],
        externalLinks: [{label: 'Conceito 5', url:'https://dad.ufv.br/informativo/o-programa-de-pos-graduacao-em-administracao-ufv-ppgadm-obteve-conceito-5/'}],
        articleUrl: ''
      }
    ],
    photos: [],
    articleUrl: ''
  },

  2023: {
    // 4 registros neste ano
    events: [
      {
        tag: 'gestao',
        title: 'Galeria dos Chefes',
        desc: 'Implementação de uma galeria virtual contendo o histórico e as biografias dos ex-chefes no site oficial do DAD, e a confecção de um álbum físico de fotografias. Ata 387/2023 (19 de maio de 2023).',
        photos: [],
        externalLinks: [{ label: 'Ata 387/2023', url: 'https://docs.google.com/document/d/1_8ZZePoDhb9QWaM54X3SG9Gk8yFg6Plx/edit?usp=sharing&ouid=117232787169035636664&rtpof=true&sd=true' }],
        articleUrl: ''
      },
      {
        tag: 'extensao',
        title: 'Lançamento de Livro',
        desc: 'Lançamento oficial do livro intitulado “A Universidade e o Envelhecimento Populacional: Diálogos e Experiências em Construção no Brasil”. Ata 391/2023 (20 de outubro de 2023). (Pedir a chefia para levantar sobre os livros lançados)',
        photos: [],
        externalLinks: [{ label: 'Ata 391/2023', url: 'https://docs.google.com/document/d/1ohiIsfQM2ylBj_Knz0YCb2YgpvNX72QN/edit?usp=sharing&ouid=117232787169035636664&rtpof=true&sd=true' }],
        articleUrl: ''
      },
      {
      tag: 'pesquisa',
      title: 'Métodos Qualitativos para análise de Políticas Públicas',
      desc: 'EMMENDOERFER, MAGNUS LUIZ; GOMES, B. M. A. (Org.) . Métodos Qualitativos para análise de Políticas Públicas (ISBN 9786555131222). 1. ed. Salvador: Motres, 2023. v. 1. 162p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'Saúde em crise: uma análise da gestão de políticas públicas durante a pandemia de Covid-19',
      desc: 'PAIVA, A. M. ; Ferreira, Marco Aurelio Marques . Saúde em crise: uma análise da gestão de políticas públicas durante a pandemia de Covid-19. 1. ed. Rio de Janeiro:: DOC, 2023. v. 1. 84p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'Dimensiones de Desarrolo y Construcción de Capacidades para la Formación de la Agenda para la Agricultura Familiar',
      desc: 'FERREIRA, Marco Aurélio Marques; ARAUJO, J. M. . Dimensiones de Desarrolo y Construcción de Capacidades para la Formación de la Agenda para la Agricultura Familiar. 1. ed. Viçosa - MG: IPPDS, 2023. v. 1. 34p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'Dimensions of Development and Capacity Building in Agenda Setting for Family Farming',
      desc: 'Ferreira, Marco Aurelio Marques; ARAUJO, J. M. . Dimensions of Development and Capacity Building in Agenda Setting for Family Farming. 1. ed. Vicosa: IPPDS, 2023. v. 1. 32p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'Dimensões de Desenvolvimento e Construção das Capacidades para a Formação da Agenda para a Agricultura Familiar',
      desc: 'FERREIRA, Marco Aurélio Marques; ARAÚJO, J. M. . Dimensões de Desenvolvimento e Construção das Capacidades para a Formação da Agenda para a Agricultura Familiar. 1. ed. Viçosa MG: IPPDS, 2023. v. 1. 32p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'Estudos sobre aptidões da agropecuaria brasileira e a aplicação de recursos de transferencia voluntaria',
      desc: 'BRAGA, M. J. ; ABREU, S. M. ; NEVES, M. C. R. ; VALADARES, J. L. ; MACHADO, B. S. ; ALMEIDA, A. C. ; ALMEIDA, F. M. ; Marques Ferreira, M. A. ; SILVEIRA, S.F.R. . Estudos sobre aptidões da agropecuaria brasileira e a aplicação de recursos de transferencia voluntaria. 1. ed. Viçosa: UFV, 2023. 62p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'Patrimonialismo em Administração: nepotismo revigorado em atos de nomeação de secretários municipais e estaduais.',
      desc: 'HANAI, J. L. ; EMMENDOERFER, Magnus Luiz ; CUNHA, Nina Rosa Silveira . Patrimonialismo em Administração: nepotismo revigorado em atos de nomeação de secretários municipais e estaduais.. In: Flávia Cristina Silveira Lemos; Fabiola Colombani; Elói Martins Senhoras. (Org.). (Org.). Humanidades: agendas multidisciplinares. 1eded.Boa Vista RO: IOLE: IOLE, 2023, v. 1, p. 253-282.',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'Libro de actas do 1º Congreso Internacional Longevidad Gegop: políticas públicas sobre envejecimiento',
      desc: 'ROIG, R. ; MARTINS, SIMONE ; NEBOT, M. C. P. ; COSTA, S. M. M. ; BARROS, J. N. . Libro de actas do 1º Congreso Internacional Longevidad Gegop: políticas públicas sobre envejecimiento. 1. ed. Viçosa - MG: Instituto de Políticas Públicas e Desenvolvimento Sustentável, 2023. v. 1. 97p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'Políticas públicas sobre el envejecimiento',
      desc: 'NEBOT, M. C. P. ; COSTA, S. M. M. ; ROIG, R. ; MONTRAGON, E. G. ; MARTINS, SIMONE . Políticas públicas sobre el envejecimiento. 1. ed. Viçosa - MG - Brasil: IPPDS, 2023. v. 1. 144p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'Estudo sobre aptidões da agropecuária brasileira e a aplicação de recursos de transferência voluntária [recurso eletrônico]',
      desc: 'BRAGA, M. J. ; MARTINS, SIMONE ; NEVES, M. C. R. ; VALADARES, J. L. ; MACHADO, B. S. ; ALMEIDA, A. C. ; ALMEIDA, F. M. ; FERREIRA, Marco Aurélio Marques ; SILVEIRA, S. F. R. . Estudo sobre aptidões da agropecuária brasileira e a aplicação de recursos de transferência voluntária [recurso eletrônico]. 1. ed. Viçosa: IPPDS/UFV, 2023. v. 1. 621p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'A universidade e o envelhecimento populacional [recurso eletrônico] diálogos e experiências em construção no Brasil',
      desc: 'MARTINS, SIMONE; NEBOT, M. C. P. ; RIBEIRO, A. Q. ; VACCARO, S. B. ; SOUZA, M. G. N. . A universidade e o envelhecimento populacional [recurso eletrônico] diálogos e experiências em construção no Brasil. 1. ed. Viçosa - MG - Brasil: IPPDS, 2023. v. 1. 177p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
      {
        tag: 'gestao',
        title: 'Nova Tutoria PET',
        desc: 'Nomeação do professor Josiel Lopes Valadares como o novo tutor do PET Administração. (procurar fonte)',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'ensino',
        title: 'Nova Coordenação PPGAdm',
        desc: 'Nomeação do professor Antônio Carlos Brunozi Júnior como coordenador da Pós-Graduação. (procurar fonte)',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      }
    ],
    photos: [],
    articleUrl: ''
  },

  2024: {
    // 6 registros neste ano
    events: [
      {
        tag: 'gestao',
        title: 'YKARU GOMES WAGNER',
        desc: 'Admissão do servidor técnico-administrativo(a) YKARU GOMES WAGNER, no Departamento de Administração e Contabilidade (DAD), com início das atividades em 03/01/2024.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Homenagem ao Dia das Mulheres',
        desc: 'O colegiado do DAD realizou uma homenagem a todas as mulheres em comemoração ao Dia Internacional das Mulheres. Ata 394/2024 – 08 de março de 2024.',
        photos: [],
        externalLinks: [{ label: 'Ata 394/2024', url: 'https://docs.google.com/document/d/1xEXwxMwIxiKGXHCQHtydnG_XLJ-BBX3P/edit?usp=sharing&ouid=117232787169035636664&rtpof=true&sd=true' }],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Homenagem da SBAP',
        desc: 'A Sociedade Brasileira de Administração Pública agraciou o Programa de Pós-Graduação em Administração pelos serviços prestados. Ata 396/2024 – 12 de julho de 2024.',
        photos: [],
        externalLinks: [{ label: 'Ata 396/2024', url: 'https://docs.google.com/document/d/1jgiTO-JcRp7kejccTeKHSSkv3bVRk79z/edit?usp=sharing&ouid=117232787169035636664&rtpof=true&sd=true' }],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'MARCONI SILVA MIRANDA',
        desc: 'Admissão do docente MARCONI SILVA MIRANDA no Departamento de Administração e Contabilidade (DAD), com início das atividades em 22/11/2024.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
        tag: 'infraestrutura',
        title: 'Menção de Inovação do NIT e Orçamentos de Infraestrutura',
        desc: 'Na última reunião do ano, o departamento celebrou o recebimento de uma menção de Difusão da Cultura de Proteção da Propriedade Intelectual e Inovação, concedida ao DAD durante a comemoração dos 25 anos do Núcleo de Inovação Tecnológica (NIT/UFV). Ata 399/2024 – 06 de dezembro de 2024. ',
        photos: [],
        externalLinks: [{ label: 'Ata 399/2024', url: 'https://docs.google.com/document/d/1yqiylBTKAplCRPtD-wHc6MX87uHSWOgF/edit?usp=sharing&ouid=117232787169035636664&rtpof=true&sd=true' }],
        articleUrl: ''
      },
      {
        tag: 'reconhecimento',
        title: 'Propriedade Intelectual',
        desc: 'DAD recebe menção honrosa pela difusão da cultura de proteção da propriedade intelectual e inovação na UFV. Ata 399/2024 – 06 de dezembro de 2024',
        photos: [],
        externalLinks: [{ label: 'Ata 399/2024', url: 'https://docs.google.com/document/d/1yqiylBTKAplCRPtD-wHc6MX87uHSWOgF/edit?usp=sharing&ouid=117232787169035636664&rtpof=true&sd=true' }],
        articleUrl: ''
      }
    ],
    photos: [],
    articleUrl: ''
  },

  2025: {
    // 5 registros neste ano
    events: [
      {
        tag: 'gestao',
        title: 'HENRIQUE CORDEIRO MARTINS',
        desc: 'Admissão do docente HENRIQUE CORDEIRO MARTINS no Departamento de Administração e Contabilidade (DAD), com início das atividades em 20/05/2025.',
        photos: [],
        externalLinks: [],
        articleUrl: ''
      },
      {
      tag: 'pesquisa',
      title: 'Métodos Qualitativos Aplicados em Economia Criativa',
      desc: 'EMMENDOERFER, M. L.; LEAL-DA-SILVA, J. (Org.) ; SILVA-JUNIOR, A. C. (Org.) . Métodos Qualitativos Aplicados em Economia Criativa. 1. ed. Salvador: MOTRES, 2025. v. 1. 228p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
    {
      tag: 'pesquisa',
      title: 'Observatório da cultura de Belo Horizonte',
      desc: 'VITÓRIA, J. R. (Org.) ; EMMENDOERFER, MAGNUS LUIZ (Org.) . Observatório da cultura de Belo Horizonte. 1. ed. Belo Horizonte: MOTRES, 2025. v. 100. 94p .',
      photos: [],
      externalLinks: [],
      articleUrl: ''
    },
      {
        tag: 'infraestrutura',
        title: 'Condecoração do Núcleo de Apoio Contábil e Fiscal (NAF)',
        desc: 'Homenagem prestada pela Receita Federal, que condecorou o Núcleo de Apoio Contábil e Fiscal (NAF) do DAD/UFV em reconhecimento à parceria consolidada e pela relevante contribuição promovida em prol do progresso da educação e da cidadania fiscal brasileira. Ata 404/2025 – 06 de junho de 2025.',
        photos: [],
        externalLinks: [{ label: 'Ata 404/2025', url: 'https://docs.google.com/document/d/14ChAdK41cXnlsEN5db4HAQ_Wq5dIMnn-/edit?usp=sharing&ouid=117232787169035636664&rtpof=true&sd=true' }],
        articleUrl: ''
      },
      {
        tag: 'gestao',
        title: 'Contratação de Estagiário de T.I. e Projeto do Memorial do DAD',
        desc: 'Contratação do programador estagiário Eduardo de Jesus da Silva para integrar a equipe técnica do departamento. O novo colaborador assumiu a função com a missão de solucionar as demandas pendentes na área de Tecnologia da Informação (T.I.) do prédio, além de atuar diretamente como desenvolvedor responsável pelo projeto do Memorial do DAD, plataforma digital que abrigará a galeria virtual e o resgate histórico da trajetória do Departamento de Administração e Contabilidade. 12/08/2025.',
        photos: [{ url: '/2025 - Eduardo Jesus.png', caption: 'O Programador Estagiário, Eduardo Jesus' }],
        externalLinks: [],
        articleUrl: ''
      }
    ],
    photos: [
      { url: '/2025 - Eduardo Jesus.png', caption: 'O Programador Estagiário, Eduardo Jesus' }
    ],
    articleUrl: ''
  }
};