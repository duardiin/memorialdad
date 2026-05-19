import { isReadable } from 'stream';
import { MemorialData } from '../types';

export const memorialData: MemorialData = {
  1974: {
    events: [
      { tag: 'ensino', title: 'Estrutura e Habilitação', desc: 'Formação de Bacharéis com habilitação dupla em Administração Pública e de Empresas. Plena estruturação para atender demandas da sociedade.' },
      { tag: 'ensino', title: 'Atuação Profissional', desc: 'Habilitação para cargos técnicos federais, estaduais e municipais. Preparação para chefia, direção e consultoria.' },
      { tag: 'gestao', title: 'Processos Administrativos', desc: 'Planejamento e coordenação de processos complexos; suporte técnico à decisão através de análise e estudos.' },
      { tag: 'ensino', title: 'Magistério e Educação', desc: 'Início da carreira acadêmica com o exercício do magistério em disciplinas técnicas.' },
      { tag: 'fundacao', title: 'Criação do Departamento de Administração e Contabilidade', desc: 'O DAD foi oficialmente criado por meio de resolução do Conselho Universitário da UFV, reunindo as disciplinas de Administração e Contabilidade.' },
    ],
    photos: [
      { url: '/1974 “Ampliação da oferta de vagas no Vestibular”.avif', caption: 'Ampliação da oferta de vagas no Vestibular.' },
      { url: '/1974 “Criação do Departamento”.avif', caption: 'Criação do Departamento.' }
    ]
  },
  1975: {
    events: [
      { tag: 'ensino', title: 'Início das primeiras turmas de Administração', desc: 'O curso de Administração recebe as primeiras turmas regulares, com currículo voltado à gestão rural.' },
    ],
    photos: [
      { url: 'https://picsum.photos/seed/ufv1975/800/600', caption: 'Aula inaugural da primeira turma de Administração.' }
    ]
  },
  1976: {
    events: [
      { tag: 'gestao', title: 'Concurso Docente', desc: 'Preenchimento de 81 vagas de professor assistente na UFV, sendo o curso de Administração contemplado com uma vaga vital para sua estruturação.' },
      { tag: 'ensino', title: 'Fortalecimento Institucional', desc: 'Consolidação do curso e desenvolvimento acadêmico como marco importante para o crescimento da Administração.' },
      { tag: 'ensino', title: 'Criação do curso de Ciências Contábeis', desc: 'A UFV institui o curso de graduação em Ciências Contábeis, vinculado ao DAD.' },
    ],
    photos: []
  },
  1977: {
    events: [
      { tag: 'fundacao', title: 'Implantação do DAE', desc: 'Criação e organização do Departamento de Administração e Economia (DAE). Nomeação do professor Juraci Aureliano como primeiro chefe.' },
      { tag: 'ensino', title: 'Estrutura Acadêmica', desc: 'Reunião dos cursos de Administração e Economia, assumindo responsabilidade por Administração, Contabilidade, Direito e Economia.' },
      { tag: 'extensao', title: 'Expansão e Extensão', desc: 'Aumento de 25 para 50 vagas no vestibular. Participação da UFV no Projeto Rondon e outros programas nacionais de extensão.' },
    ],
    photos: []
  },
  1978: {
    events: [
      { tag: 'gestao', title: 'Gestão e Liderança', desc: 'Professor Tancredo Almada Cruz assume a chefia do DAE e professor Dilson Seabra Rocha assume a direção do CCH.' },
      { tag: 'cultura', title: 'Cultura e Representação', desc: 'Regência do Coral da UFV pelo professor João Adamor Dias Neves (DAE). Participação no II Congresso Brasileiro de Treinamento.' },
      { tag: 'extensao', title: 'Expansão Nacional', desc: 'Professor Carlos Alberto Freire Resende assume a direção do campus da UFV em Altamira, no Pará.' },
    ],
    photos: [
      { url: '/1978 “Coral da UFV”.avif', caption: 'Coral da UFV.' },
      { url: '/1978 “Direção do CCH”.avif', caption: 'Direção do CCH.' },
      { url: '/1978 “O professor João Adamor Dias Neves recebeu Menção Honrosa”.webp', caption: 'O professor João Adamor Dias Neves recebeu Menção Honrosa' },
      { url: '/1978 “O técnico Carlos Alberto Freire Resende”.avif', caption: 'O técnico Carlos Alberto Freire Resende' }
    ]
  },
  1979: {
    events: [
      { tag: 'reconhecimento', title: 'Reconhecimento Nacional', desc: 'Menção honrosa ao professor João Adamor Dias Neves em concurso nacional com trabalho sobre avaliação de desempenho.' },
      { tag: 'ensino', title: 'Eventos Pioneiros', desc: 'Realização da I Semana do Administrador (com a FGV) e I Semana do Economista.' },
      { tag: 'extensao', title: 'Capacitação e Mercado', desc: 'Curso de Marketing Bancário com grandes bancos e convênio para estágios em Ipatinga.' },
      { tag: 'ensino', title: 'Desenvolvimento Docente', desc: 'Participação em ciclos de estudos sobre ciências administrativas e oferta de cursos técnicos em Contabilidade e RH.' },
      { tag: 'gestao', title: 'Cultura e Gestão', desc: 'Nomeação de novos diretores para o CCA e CCH; intensa activity do Coral da UFV.' },
    ],
    photos: [
      { url: '/1979 “1º aniversário do Coral da UFV.”.webp', caption: '1º aniversário do Coral da UFV.' },
      { url: '/1978 “Direção do CCH”.avif', caption: 'Direção do CCH.' },
      { url: '/1979 “Cursos Técnicos”.webp', caption: 'Cursos Técnicos' },
      { url: '/1979 “I Semana do Administrador”.webp', caption: 'I Semana do Administrador' },
      { url: '/1979 “I Semana do Economista”.avif', caption: 'I Semana do Economista' },
      { url: '/1979 “Novos Diretores”.webp', caption: 'Novos Diretores' },
      { url: '/1979 “O professor João Adamor Dias Neves recebeu Menção Honrosa”.webp', caption: 'O professor João Adamor Dias Neves recebeu Menção Honrosa' }
    ]
  },
  1980: {
    events: [
      { tag: 'gestao', title: 'Gestão e Docência', desc: 'Professor Eloy Alves Filho assume a chefia do DAE. Concurso para cinco novas vagas de Auxiliar de Ensino.' },
      { tag: 'ensino', title: 'Inovação e Simulação', desc: 'Realização do "Executivo Game", seminário inovador com jogos de empresas e computadores, coordenado pela Profa. Maria Elena Barbassa.' },
      { tag: 'extensao', title: 'Extensão e Formação', desc: 'Alcance regional do Executivo Game em Visconde do Rio Branco e palestras sobre o ensino de Administração no Brasil.' },
      { tag: 'reconhecimento', title: 'Homenagens', desc: 'Homenagem de formatura aos professores Jacinto Luiz da Silva e João Adamor.' },
      { tag: 'extensao', title: 'Primeiras atividades de extensão comunitária', desc: 'O DAD organiza as primeiras atividades de extensão voltadas a pequenas empresas e produtores rurais.' },
    ],
    photos: []
  },
  1981: {
    events: [
      { tag: 'extensao', title: 'Extensão e Mercado', desc: 'Curso Básico de Vendas com 200 participantes e visita técnica à estrutura organizacional da Sadia em Belo Horizonte.' },
      { tag: 'ensino', title: 'Semanas Acadêmicas', desc: 'II Semana do Administrador (foco em multinacionais) e II Semana do Economista.' },
      { tag: 'ensino', title: 'Interdisciplinaridade', desc: 'I Ciclo de Estudos Jurídicos e I Semana do Contador, destacando o apoio da contabilidade na empresa.' },
      { tag: 'gestao', title: 'Gestão e Parcerias', desc: 'Professor Gilson Faria Potsch Magalhães assume a chefia do DAE. Convênio com IMAM para diagnóstico administrativo em Canaã.' },
    ],
    photos: []
  },
  1982: {
    events: [
      { tag: 'ensino', title: 'Semanas Acadêmicas', desc: 'III Semana do Administrador (Pequenas e Médias Empresas) e III Semana do Economista (Inflação).' },
      { tag: 'ensino', title: 'Ciclos de Estudos', desc: 'Debates sobre Direito Agrário, Estudos Contábeis (com Petrobras) e Estudos Jurídicos (Direito Penal Econômico).' },
      { tag: 'extensao', title: 'Visitas e Prática', desc: 'Visitas técnicas à Usiminas, Pink Alimentos e Prefeitura de Juiz de Fora. Treinamento no Centreinar.' },
      { tag: 'extensao', title: 'Integração Regional', desc: 'Aula inaugural na FACCO Ponte Nova e participação em eventos regionais.' },
    ],
    photos: []
  },
  1983: {
    events: [
      { tag: 'ensino', title: 'Capacitação Docente', desc: 'Profa. Nanci Pereira inicia mestrado na USP; Prof. Milton Natalino conclui curso de Contabilidade Financeira; docentes participam de seminário da IBM.' },
      { tag: 'ensino', title: 'Eventos Acadêmicos', desc: 'I Seminário de Avaliação de desafios em ensino, pesquisa e extensão. IV Semana do Administrador e do Economista.' },
      { tag: 'extensao', title: 'Integração e Extensão', desc: 'Cursos de Administração Financeira para PMEs e visita técnica à Ferteco Mineração em Congonhas.' },
      { tag: 'gestao', title: 'Qualificação Técnica', desc: 'Parceria com Centreinar para administração de unidades e qualificação para servidores da UFV.' },
      { tag: 'ensino', title: 'Produção Intelectual', desc: 'Publicação da apostila "Administração e Esforço Motivacional".' },
    ],
    photos: [{ url: '/1983 “Os Novos Diretores ”.webp', caption: 'Novos Diretores' }]
  },
  1984: {
    events: [
      { tag: 'pesquisa', title: 'Economia e Pesquisa', desc: 'Início do IPC Viçosa para cálculo do custo de vida local (apoio CNPq). Registro de inflação acumulada de 224,64%.' },
      { tag: 'ensino', title: 'Mercado e Finanças', desc: 'Curso de Mercado de Capitais com a Bolsa do Rio e simulação de operações reais entre universitários.' },
      { tag: 'gestao', title: 'Gestão e Liderança', desc: 'Professor Tancredo Almada Cruz assume a chefia do DAE e professor Gilson Faria Potsch Magalhães assume a direção do CCH.' },
      { tag: 'ensino', title: 'Produção Acadêmica', desc: 'Defesa de mestrado com louvor da Profa. Nanci Pereira na FGV. Disciplina "Problemas Brasileiros" coordenada pelo Prof. Adolfo Egídio Reis.' },
    ],
    photos: []
  },
  1985: {
    events: [
      { tag: 'ensino', title: 'Mercado e Finanças', desc: 'Curso de Mercado de Capitais e simulação "Desafio da Bolsa" com ordens enviadas para o Rio.' },
      { tag: 'pesquisa', title: 'Economia e Pesquisa', desc: 'Monitoramento contínuo do IPC Viçosa e parceria com Seplan-MG para estudos de desenvolvimento estadual.' },
      { tag: 'gestao', title: 'Gestão e Liderança', desc: 'Consolidação das lideranças no DAE e CCH; representação na Funarbe e CORECON.' },
      { tag: 'reconhecimento', title: 'Excelência Acadêmica', desc: 'Pesquisa premiada sobre finanças de empresas paulistas em mestrado com louvor.' },
    ],
    photos: []
  },
  1986: {
    events: [
      { tag: 'extensao', title: 'Empreendedorismo e NAIPE', desc: 'Criação do Núcleo de Assistência Integral à Pequena Empresa (NAIPE). I Encontro de Empresários da Zona da Mata.' },
      { tag: 'cultura', title: 'Eventos e Cultura', desc: 'VII Semana do Administrador e I Show do Administrador (integração cultural através de artes e música).' },
      { tag: 'ensino', title: 'Capacitação Técnica', desc: 'Formação em Perícia Judicial, Comércio Exterior e Programação e Controle da Produção (PCP).' },
      { tag: 'pesquisa', title: 'Pesquisa e Sociedade', desc: 'IPC Viçosa como referência regional. Debates sobre a nova Constituinte e parceria com EPAMIG.' },
    ],
    photos: []
  },
  1987: {
    events: [
      { tag: 'gestao', title: 'Diretor do CCH da UFV', desc: 'Professor Gilson Faria Potsch Magalhães, traçou um perfil do Centro, detalhando suas atividades de Ensino, Pesquisa e Extensão e sua evolução desde a implantação.' },
      { tag: 'ensino', title: 'Administração: Um dos 22 Cursos da UFV', desc: 'O curso de Administração foi um dos 22 cursos de graduação escolhidos para compor a oferta acadêmica da Universidade Federal de Viçosa (UFV), sendo disponibilizado aos estudantes no período noturno.' },
      { tag: 'gestao', title: 'Posse de José Edson Lara como Diretor Administrativo-Financeiro', desc: 'O Reitor da Universidade Federal de Viçosa (UFV), professor Geraldo Martins Chaves, deu posse a José Edson Lara como o novo Diretor administrativo-financeiro da Fundação Arthur Bernardes (FUNARBE).' },
      { tag: 'reconhecimento', title: 'Professora Nanci à Frente do Novo Núcleo de Treinamento do DAE', desc: 'Sob a coordenação da professora Nanci Pereira de Vasconcelos, o Departamento de Administração e Economia (DAE) da UFV implementou o Núcleo de Treinamento Profissional na área de Contabilidade. A professora destaca que o objetivo do sistema é fazer com que os estudantes simulem e acompanhem as atividades de uma empresa fictícia, garantindo que o aluno tenha "a vivência da teoria, com uma verdadeira integração interdisciplinar". Segundo a coordenadora, essa metodologia prática beneficiará imediatamente até mesmo os calouros ingressantes de 1987.' },
      { tag: 'ensino', title: 'I Semana do Empresário', desc: 'I Semana do Empresário, um evento promovido pelo Conselho de Extensão (CEE) e pelo Departamento de Administração e Economia (DAE) da UF será realizada de quatro a sete de agosto na UFV.' },
    ],
    photos: [
      { url: '/1987 “O Diretor do CCH. professor Gilson Faria Potsch Magalhães”.jpg', caption: 'O Diretor do CCH. professor Gilson Faria Potsch Magalhães' },
      { url: '/1987 “O Reitor da UFV, professor Geraldo Martins Chaves, dá posse ao novo Diretor administrativo-financeiro da FUNARBE.”.jpg', caption: 'O Reitor da UFV, professor Geraldo Martins Chaves, dá posse ao novo Diretor administrativo-financeiro da FUNARBE.' }
    ]
  },
  1988: {
    events: [
      { tag: 'gestao', title: 'Il Encontro Mineiro sobre Ensino de Economia', desc: 'Realizado nos dias 18 e 19 de agosto de 1988, o evento ocorreu no Centro de Ensino de Extensão da Universidade Federal de Viçosa (UFV). Com o tema central "Técnicas de Pesquisa e Monografia", o encontro buscou fortalecer o intercâmbio entre docentes e discentes, além de aprimorar programas acadêmicos e bibliografias da área.' },
      { tag: 'gestao', title: 'VIII Semana do Administrador', desc: 'O Centro Acadêmico de Administração promoverá, de 16 a 19 de agosto, a VIII Semana do Administrador. O evento será realizado no auditório do Edifício Reinaldo de Jesus Araújo, com abertura às 19h.' },
      { tag: 'gestao', title: 'II Semana do Empresário', desc: 'O Departamento de Administração e Economia (DAE) da UFV realizará, de 10 a 14 de julho, a II Semana do Empresário. O evento busca integrar empresários e executivos à universidade através de cursos sobre análise de custos, informática e planejamento para pequenas e médias empresas. Inscrições podem ser feitas por correio ou telefone, com direito a alojamento gratuito no campus.' },
      { tag: 'reconhecimento', title: 'Homenagem ao Professor Carlos Roberto Ramos', desc: 'Durante as festividades de formatura da Turma de Janeiro de 1988 da Universidade Federal de Viçosa (UFV), os formandos de cada curso escolheram seus homenageados. No curso de Administração, o professor Carlos Roberto Ramos foi o homenageado escolhido. Na mesma ocasião, os formandos em Administração também receberam uma homenagem especial.' },
      { tag: 'gestao', title: 'I Encontro de Administração Municipal', desc: 'Entre os dias 16 e 18 de março, a UFV promoveu o I Encontro de Administração Municipal no auditório do Edifício Reinaldo de Jesus Araújo. O objetivo foi reunir prefeitos e técnicos da Zona da Mata para analisar problemas locais e buscar soluções com suporte universitário. A iniciativa faz parte da filosofia da instituição de integrar-se ativamente ao desenvolvimento da sua região.' },
      { tag: 'ensino', title: 'Professor do DAE fala sobre dinâmica do investimento em economias capitalistas', desc: 'O professor Newton Paulo Bueno, do DAE, debateu a dinâmica do investimento em economias capitalistas em palestra na UFV. Baseado em Keynes e Kalecki, ele criticou políticas recessivas, argumentando que a expansão é o estado natural do capitalismo. Bueno alertou que a recessão causa o sucateamento econômico ao romper a natureza sequencial dos investimentos.' },
      { tag: 'ensino', title: 'João Adamor Dias Neves', desc: 'O professor João Adamor Dias Neves, do Departamento de Administração, concluiu seu doutorado na Universidade de Stirling, na Escócia. Sua tese analisou como o clima organizacional influencia os resultados do treinamento em pequenas e médias empresas industriais de Minas Gerais. A pesquisa demonstrou que investir na capacitação dos operários eleva a produtividade e a lucratividade das empresas. Além disso, o estudo comprovou que o treinamento adequado reduz acidentes de trabalho e aumenta a motivação dos funcionários.' },
      { tag: 'gestao', title: 'Posse do DAD 1ª Chefia e do DEE 1ª Chefia', desc: 'Em 19 de agosto de 1988, o Reitor Geraldo Martins Chaves empossou os primeiros chefes dos novos departamentos de Administração (DAD) e Economia (DEE) da UFV. A solenidade marcou o desmembramento do antigo Departamento de Administração e Economia, oficializando as seguintes lideranças: Professor Juraci Aureliano Teixeira: 1ª chefia do Departamento de Economia. Professor Marcos Tanure Sanábio: 1ª chefia do Departamento de Administração.' },
      { tag: 'gestao', title: 'Nova Diretoria da FUNARBE', desc: 'O professor José Edson Lara assumiu o cargo de diretor administrativo-financeiro da Fundação Arthur Bernardes (FUNARBE) em 1º de agosto. Empossado pelo Reitor Geraldo Martins Chaves, ele compõe a nova diretoria ao lado dos professores Sebastião César Cardoso Brandão (presidente) e Carlos Sigueyuki Sediyama (diretor-técnico). A nova gestão trabalhará sob um estatuto reformulado que visa dar maior independência à Fundação.' },
    ],
    photos: [
      { url: '/1988 “Os formandos e os homenageados da Turma de Janeiro de 1988 da Universidade Federal de Viçosa.”.jpg', caption: 'Os formandos e os homenageados da Turma de Janeiro de 1988 da Universidade Federal de Viçosa.' },
      { url: '/1988 “O Reitor Geraldo Martins Chaves cumprimenta o professor Marcos Tanure Sanábio, vendo-se, à direita, o professor Juraci Aureliano Teixeira.”.jpg', caption: 'O Reitor Geraldo Martins Chaves cumprimenta o professor Marcos Tanure Sanábio, vendo-se, à direita, o professor Juraci Aureliano Teixeira.' },
      { url: '/1988 “Professor Newton Paulo Bueno”.jpg', caption: 'Professor Newton Paulo Bueno.' }
    ]
  },
  1989: {
    events: [
      { tag: 'ensino', title: 'Professoras da UFV visitam Universidades do Canadá', desc: 'As professoras Maria Elena Barbassa e Nina Rosa visitaram o Canadá em 1989 para negociar uma cooperação técnica com a Universidade de Quebec. O projeto visa criar um centro de estudos para pequenas empresas e implementar mestrados e doutorados na UFV. A iniciativa também busca implantar pioneiramente "Incubatórios de Empresa" para fomentar o empreendedorismo e gerar empregos em Viçosa.' },
      { tag: 'gestao', title: 'III Semana do Empresário', desc: 'A III Semana do Empresário ocorrerá de 10 a 14 de julho na UFV, focando em empresários e profissionais do setor. O evento oferecerá cursos de curta duração sobre temas como administração em tempos de crise, informática aplicada e marketing para pequenas empresas. Paralelamente, haverá uma exposição de produtos e serviços aberta ao público no campus. A organização conta com o apoio da Associação Comercial de Viçosa e do CEAG-MG.' },
      { tag: 'ensino', title: 'UFV e Québec: Um Marco na Administração', desc: 'Em março de 1989, professores da Universidade de Quebec visitaram o Departamento de Administração da UFV para firmar um intercâmbio histórico. O grande objetivo dessa cooperação internacional era criar o Centro de Estudos e Pesquisa de Pequena e Média Empresa na universidade. O projeto envolvia treinar professores da UFV no doutorado no Canadá e fundar um curso de mestrado em Viçosa para 1991.' },
      { tag: 'infraestrutura', title: 'Departamentos de Administração e Economia terão novas sedes', desc: 'As novas sedes dos Departamentos de Administração e Economia da UFV estão em fase adiantada, com o primeiro pavimento de uma estrutura de 3.410 m² quase concluído atrás do Edifício Reinaldo de Jesus Araújo. O projeto racionalista prevê, no térreo, 24 gabinetes duplos, áreas administrativas, laboratórios e salas de leitura e computação. Os andares superiores deverão abrigar os departamentos de Letras e Artes e de Educação.' },
      { tag: 'gestao', title: 'Reitor empossa novos chefes de departamento da UFV', desc: 'O reitor Antônio Fagundes de Sousa empossou os novos chefes de 23 departamentos da UFV para um novo período administrativo. As cerimônias ocorreram em 11 e 13 de setembro de 1989, após votações internas em cada órgão. O reitor destacou que o processo respeitou a vontade da maioria e deve focar no trabalho institucional diante da crise nas universidades. Entre os empossados estão professores de áreas como Administração, Economia, Engenharia e Veterinária.' },
      { tag: 'reconhecimento', title: 'Falecimento do professor Roberto de Carvalho Araújo ', desc: 'O professor Roberto de Carvalho Araújo, chefe do Departamento de Administração da UFV, faleceu em 20 de dezembro de 1989, em Belo Horizonte. Formado em Direito, Administração e Economia, ele era mestre pela PUC-Rio e planejava cursar doutorado na Espanha. O velório ocorreu no Salão Nobre da universidade, seguido de missa solene no Santuário de Santa Rita de Cássia e sepultamento no Cemitério Dom Viçoso. Roberto pertencia a uma família tradicional de Viçosa e deixou esposa e três filhos.' },
    ],
    photos: [
      { url: '/1989 “As professoras Nina Rosa da S. Cunhas e Maria E. Barbassa”.jpg', caption: 'OAs professoras Nina Rosa da S. Cunhas e Maria E. Barbassa' },
      { url: '/1989 “Construção do Departamento de Administração e Economia”.jpg', caption: 'Construção do Departamento de Administração e Economia.' },
      { url: '/1989 “O professor Roberto de Carvalho Araújo. ”.jpg', caption: 'O professor Roberto de Carvalho Araújo.' },
      { url: '/1989 “O Reitor Antônio Fagundes faz seu discurso durante a solenidade de posse”.jpg', caption: 'O Reitor Antônio Fagundes faz seu discurso durante a solenidade de posse' },
      { url: '/1989 Os professores canadenses, acompanhados de professores do Departamento de Administração.jpg', caption: 'Os professores canadenses, acompanhados de professores do Departamento de Administração.' }
    ]
  },
  1990: {
    events: [
      { tag: 'reconhecimento', title: 'UFV perde mais um professor', desc: 'O professor Gualberto Ferreira da Silva faleceu aos 51 anos, no dia 9 de janeiro, no Rio de Janeiro. Natural da capital carioca e mestre pela COPPE/UFRJ, ele atuava como professor assistente VI no Departamento de Administração da UFV desde 1979. Sua formação incluía o bacharelado em Administração pela FCEPRJ, concluído em 1977. O sepultamento ocorreu na tarde de seu falecimento, no Cemitério da Estrada da Cacuia, na Ilha do Governador.' },
      { tag: 'gestao', title: 'IV Semana do Empresário', desc: 'A IV Semana do Empresário ocorreu de 2 a 5 de outubro de 1990 na UFV, oferecendo 16 cursos de curta duração sobre gestão, informática e marketing. O evento reuniu empresários, gerentes e profissionais para debater o setor e expor produtos em áreas cedidas pela universidade. A organização foi uma parceria entre o Conselho de Extensão, o Departamento de Administração e o Naipe, com apoio de entidades como a ACV e o Ceag-MG.' },
      { tag: 'ensino', title: 'Professor Canadense visita a UFV', desc: 'O professor canadense André Courtemanche, da Universidade de Quebec, visitou a UFV entre 14 de abril e 4 de maio de 1990 para discutir um programa de cooperação técnica. O projeto prevê o treinamento de doutorado para professores do Departamento de Administração e a criação de um mestrado focado em pequenas e médias empresas. A parceria visa transformar o Naipe em um centro de excelência e incentivar a criação de novas empresas na região. Além dele, a pesquisadora canadense Verna J. Higgins também visitou a instituição para seminários sobre fitopatologia e biotecnologia.' },
      { tag: 'ensino', title: 'Departamento de Administração', desc: 'O Departamento de Administração da UFV promoveu a IV Semana do Empresário, oferecendo 16 cursos de capacitação e áreas para exposição de produtos. O setor também avançou em entendimentos para um intercâmbio com a Universidade de Quebec, visando o treinamento de doutorado de seus professores e a criação de um mestrado em pequenas empresas. Administrativamente, o departamento foi marcado pela posse do chefe Roberto de Carvalho Araújo em 1989 e pelo seu posterior falecimento em dezembro do mesmo ano.' },
    ],
    photos: [{ url: '/1990 “André Courtemanche”.jpg', caption: 'André Courtemanche.' }]
  },
  1991: {
    events: [
      { tag: 'ensino', title: 'Bacharéis em Administração', desc: 'Nas formaturas da UFV in 1991, as turmas de Bacharéis em Administração prestaram homenagens a professores como Antônio de Figueiredo Vieira e Nina Rosa da Silveira Cunha , além de Adriel Rodrigues de Oliveira. Em reconhecimento ao apoio acadêmico, os formandos também escolheram paraninfos de destaque, como o empresário Antônio Ermírio de Moraes e o bispo D. Luciano Mendes de Almeida. Outras homenagens incluíram servidores da instituição, como Walter da Costa Baeta , e as tradicionais "Aulas da Saudade" ministradas por docentes selecionados.' },
      { tag: 'ensino', title: 'Turma de janeiro de 1991 presta homenagens a diversas pessoas ', desc: 'Na noite de 18 de janeiro de 1991, a UFV diplomou 336 novos profissionais de 22 cursos, além de 48 pós-graduandos, em cerimônia presidida pelo professor Renato Mauro Brandi. O empresário Antônio Ermírio de Moraes foi o paraninfo da turma, que também homenageou patronos, servidores e professores de cada área em reconhecimento ao apoio durante a vida acadêmica' },
      { tag: 'gestao', title: 'V Semana do Empresário', desc: 'A Universidade Federal de Viçosa (UFV) realizará, de 8 a 12 de julho, a V Semana do Empresário, evento voltado para a reciclagem e discussão de novas alternativas de negócios para empresários e gerentes.' },
      { tag: 'ensino', title: 'XVII Encontro Nacional dos Estudantes de Administração', desc: 'Cerca de dois mil estudantes de diversas regiões do país são esperados em Viçosa, entre 8 e 12 de julho, para o XVII Encontro Nacional dos Estudantes de Administração. O evento é organizado pelo Centro Acadêmico da UFV, pela Executiva Nacional da categoria e pelo Departamento de Administração da instituição.' },
      { tag: 'ensino', title: 'TV Viçosa inicia suas transmissões', desc: 'Os preparativos para o início das transmissões da TV Viçosa, vinculada à Fundação Rádio e Televisão Educativa (RTV), estão praticamente concluídos e a estreia deve ocorrer nos próximos dias. A emissora terá programação voltada para interesses comunitários da microrregião, com ênfase especial em jornalismo regional durante a retransmissão da Rede Brasil (TVE). A equipe de trabalho aproveitará funcionários e estudantes da própria UFV, sendo estes últimos selecionados por concurso.' },
    ],
    photos: [{ url: '/1991 “Formandos de Janeiro de 1991. ”.jpg', caption: 'Formandos de Janeiro de 1991.' }]
  },
  1992: {
    events: [
      { tag: 'extensao', title: 'Empresa Júnior do DAD', desc: 'Fundação da Empresa Júnior vinculada ao DAD, oferecendo serviços de consultoria.' },
      { tag: 'ensino', title: 'Qualidade total – Profa. Maria Elena Barbassa', desc: 'A professora Maria Elena Barbassa é a coordenadora de um seminário sobre qualidade total nas organizações, que será proferido pelo professor norte-americano Ronald F. Farina na UFV. O evento aborda uma visão sistêmica da qualidade em todos os setores, visando melhorar o desempenho e a eficiência institucional. A palestra, com apoio da organização Fullbright, está marcada para a manhã do dia 17, no Centro de Ensino de Extensão.' },
      { tag: 'ensino', title: 'V Semana do Empresário', desc: 'A V Semana do Empresário, organizada pela UFV e ACV, ocorrerá de 23 a 27 de agosto para promover a integração entre executivos e a universidade. O evento focará no intercâmbio de conhecimentos técnicos e gerenciais para pequenas e microempresas através de cursos e debates. Inscrições estão abertas até 17 de agosto, com oferta de alojamento pela instituição' },
      { tag: 'infraestrutura', title: 'Professor Canadense visita a UFV', desc: 'O professor canadense H. J. Swatland, da Universidade de Guelph, visitou a UFV para ministrar o curso "Avaliação da Qualidade da Carne" e proferir uma palestra sobre o uso de fibras óticas na análise de produtos de origem animal. Especialista em ciência da carne e biologia muscular, ele apresentou tecnologias avançadas para prever a qualidade do produto final. ' },
      { tag: 'pesquisa', title: 'DAD promove curso sobre bolsa de valores', desc: 'O Departamento de Administração (DAD) da UFV promoveu um curso sobre Bolsa de Valores em parceria com a Bolsa de Valores de Minas Gerais (BVMG). O evento contou com palestras dos superintendentes Paulo Henrique Ayres Pena e Lacyr Maffia, que abordaram o funcionamento do mercado, a capitalização de empresas e métodos de análise de ações. O curso visou capacitar alunos e profissionais, esclarecendo dúvidas sobre investimentos e o ambiente de negociação.' },
      { tag: 'infraestrutura', title: 'Prédio do CCH', desc: 'O prédio do Centro de Ciências Humanas, Letras e Artes (CCH) da UFV tem inauguração prevista para o final de agosto de 1992. A obra, iniciada em junho após anos de paralisação, abrigará os departamentos de Economia, Administração e Letras, além do curso de Direito. Para cumprir o cronograma, a reitoria autorizou a contratação de funcionários temporários e regime de trabalho noturno. A nova estrutura de três pavimentos e 4.000 m² visa solucionar a carência de espaço físico para docentes e técnicos.' },
      { tag: 'ensino', title: 'Calouros 91 de Administração promovem palestras', desc: 'Os egressos da turma de 1991 de Administração da Unioeste, conhecidos como "Calouros 91", realizam periodicamente eventos e palestras para compartilhar experiências de mercado com os atuais estudantes. A iniciativa visa fortalecer o networking e integrar gerações, oferecendo uma visão prática da profissão aos acadêmicos.' },
    ],
    photos: [
      { url: '/1992 “Aspecto da palestra do professor canadense”.jpg', caption: 'Aspecto da palestra do professor canadense.' },
      { url: '/1992 “O superintendente Paulo Henrique Ayres Pena”.jpg', caption: 'O superintendente Paulo Henrique Ayres Pena.' }
    ]
  },
  1993: {
    events: [
      { tag: 'ensino', title: 'Formandos', desc: 'Nas formaturas de agosto de 1993, os formandos prestaram juramento profissional e receberam certificados e álbuns de biografias. O evento contou com discursos do orador da turma, do paraninfo e do reitor, que destacaram a importância da atuação profissional. Além da colação de grau, a cerimônia incluiu a entrega de placas a homenageados especiais.' },
      { tag: 'infraestrutura', title: 'IV Congresso Mineiro de Recursos Humanos', desc: ' O professor Luciano Zille Pereira, do Departamento de Administração da UFV, e os acadêmicos Rodrigo Gava e Rogério Rezende de Castro participaram do IV Congresso Mineiro de Recursos Humanos, em Belo Horizonte. O evento destacou a relevância do ser humano no processo de Qualidade Total e a necessidade de criar condições para o desenvolvimento individual. ' },
      { tag: 'ensino', title: 'DAD promove palestra', desc: 'O DAD promoveu palestra sobre "Técnicas Gerenciais Japonesas" no auditório do Departamento de Engenharia Florestal no dia 10 de novembro.' },
    ],
    photos: [{ url: '/1993 “Formandos de agosto de 1993”.jpg', caption: 'Formandos de agosto de 1993.' }]
  },
  1994: {
    events: [
      { tag: 'ensino', title: 'Primeira revista do PET', desc: 'O Departamento de Administração da UFV lançou a primeira edição da Revista do PET Administração, sob a coordenação do professor José Edson Lara. A publicação visa divulgar as atividades de ensino, pesquisa e extensão desenvolvidas pelo grupo, além de oferecer um espaço para produções científicas de estudantes e professores.' },
      { tag: 'fundacao', title: 'Criação do Centro Acadêmico de Consultoria – CACE', desc: 'Estudantes de Administração e Economia da UFV constituíram o Centro Acadêmico de Consultoria Empresarial (CACE), uma empresa júnior que visa aproximar a teoria acadêmica da prática profissional. A entidade presta serviços de consultoria e assessoria a micro, pequenas e médias empresas, além de produtores rurais da região. O projeto foca no desenvolvimento técnico dos alunos e na contribuição para o fortalecimento do setor empresarial local.' },
      { tag: 'reconhecimento', title: 'Formando Homenageado', desc: 'O formando Edmilson de Oliveira Lima, do curso de Administração, foi homenageado pelo Conselho Regional de Administração (CRA) por seu destacado coeficiente de rendimentos acadêmico, expresso em uma placa de prata; que recebeu durante a cerimônia de colação de grau, realizada hoje, no Ginásio de Esportes da UFV.' },
      { tag: 'ensino', title: 'Professores e estudantes de Administração realizam visita de estudos ao Sul de Minas', desc: 'Um grupo de professores e estudantes do curso de Administração da UFV visitou Santa Rita do Sapucaí para conhecer a estrutura do Inatel e seu processo de incubação de empresas. Durante a visita ao "Vale da Eletrônica", o grupo conheceu empresas como a Inaco Telecomunicações e discutiu a realidade da Empresa Júnior CACE. A equipe da UFV também foi convidada a auxiliar o Inatel na implantação de um programa com as atribuições do PET.' },
    ],
    photos: [
      { url: '/1994 “O professor José Edson Lara fala durante o lançamento da revista”.jpg', caption: 'O professor José Edson Lara fala durante o lançamento da revista.' },
      { url: '/1994 “Professores e estudantes na visita ao sul de Minas”.jpg', caption: 'Professores e estudantes na visita ao sul de Minas.' }
    ]
  },
  1995: {
    events: [
      { tag: 'ensino', title: 'Curso de Chefia e Liderança', desc: 'O Curso de Chefia e Liderança, coordenado pelos professores José Edson Lara e Arnete Folgaça, recebeu uma avaliação positiva dos participantes. A iniciativa focou no desenvolvimento de habilidades gerenciais e na melhoria das relações interpessoais no ambiente de trabalho. O sucesso do evento reforçou a importância da capacitação contínua para o fortalecimento das lideranças na instituição.' },
      { tag: 'ensino', title: 'Graduandos e Pós-Graduandos de Julho de 1995', desc: 'Em julho de 1995, a UFV realizou a sessão solene de colação de grau para novos profissionais, com discurso da paraninfa Valéria Oliveira Braga Duarte Ferreira destacando o destaque das gerações graduadas. Paralelamente, foram registrados diversos projetos de pesquisa no Departamento de Solos, abordando temas como modelagem de erosão, desenvolvimento sustentado na Amazônia, no Cerrado e em áreas de Mata de Minas.' },
    ],
    photos: [
      { url: '/1995 “Colação de grau dos novos profissionais”.jpg', caption: 'Colação de grau dos novos profissionais.' },
      { url: '/1995 “Os formandos da Turma de Julho de 1995”.jpg', caption: 'Os formandos da Turma de Julho de 1995.' },
      { url: '/1995 “Pós Graduandos de Dezembro de 1995”.jpg', caption: 'Pós Graduandos de Dezembro de 1995.' }
    ]
  },
  1996: {
    events: [
      { tag: 'gestao', title: 'Pró-Reitoria de Assuntos Comunitários - Prof. Walmer Faroni', desc: 'Administração e doutor em Administração de Empresas e Pública pela Universidade de Valência (Espanha). Atuou como secretário de Administração e Finanças da Prefeitura de Viçosa e coordenador do curso de Administração da UFV. Sua pró-reitoria gerencia áreas como assistência estudantil, alimentação, saúde, esportes e vivência.' },
      { tag: 'gestao', title: 'Coordenadoria do Sistema Rádio e Televisão - Prof. Sérgio Augusto Pereira Monteiro', desc: 'Bacharel em Administração pela UFV, com especialização em Sensoriamento Remoto. Atuou em consultorias de organização e métodos no SEBRAE-MG e em prefeituras do Mato Grosso. É professor adjunto da UFV desde 1990 e coordenador técnico de rádio e TV' },
      { tag: 'gestao', title: 'Diretoria de Recursos Humanos - Profa. Nina Rosa da Silveira Cunha', desc: 'Bacharel em Economia Doméstica com especialização em Organização e Recursos Humanos pela UFMG. É professora adjunta e integrante do corpo editorial da revista da Associação Brasileira de Pesquisadores em Administração. Possui experiência docente em Negociação e Administração na UNA, em Belo Horizonte.' },
      { tag: 'ensino', title: 'Correção – Profa. Nina Rosa da Silveira Cunha', desc: 'Correção de Cargo/Formação: Diferente do publicado na edição anterior (nº 1.309), a Profa. Nina Rosa da Silveira Cunha é Administradora, e não economista doméstica. Titulação: Ela possui o título de Mestre em Administração pela UFMG, com área de concentração em Organização e Recursos Humanos. Atuação Acadêmica: Além de ser professora do Departamento de Administração da UFV, ela é membro do corpo editorial da revista da Associação Nacional de Pós-Graduação em Administração (ANPAD) e da Business Association of Latin American Studies (BALAS).' },
      { tag: 'ensino', title: 'Formandos de Setembro de 1996', desc: 'A turma de formandos de setembro de 1996 da UFV, autodenominada "Trem de Doido", colou grau em sessão solene no Edifício Arthur da Silva Bernardes com a diplomação de 303 profissionais, além de mestres e doutores. Durante as festividades, os graduandos prestaram homenagens a diversos professores e funcionários que contribuíram para sua trajetória acadêmica. Entre os destaques, foram entregues placas ao paraninfo Paulo de Tarso Alvim e ao homenageado geral Vicente Sant\'Ana da Fonseca.' },
    ],
    photos: [
      { url: '/1996 “Formandos de 1996”.jpg', caption: 'Formandos de 1996.' },
      { url: '/1996 “Parte da turma dos Formandos”.jpg', caption: 'Parte da turma dos Formandos.' },
      { url: '/1996 “Prof. Sérgio Augusto Pereira Monteiro”.jpg', caption: 'Prof. Sérgio Augusto Pereira Monteiro”.jpg' },
      { url: '/1996 “Profa. Nina Rosa da Silveira Cunha”.jpg', caption: 'Profa. Nina Rosa da Silveira Cunha.' }
    ]
  },
  1997: {
    events: [
      { tag: 'fundacao', title: 'Lançamento de Novo Produto', desc: 'A FUNARBE lançou no mercado o Iogurte Viçosa, o primeiro iogurte em saquinho (embalagem plástica de 200 ml) do Brasil. Inicialmente disponível no sabor morango, o produto visa atender especialmente ao setor de merenda escolar. José Edson Lara, como Diretor de Marketing, destacou que o iogurte passa a integrar a linha de produtos da fundação, que já inclui itens como doce de leite, néctar de mamão e pasta de alho.' },
      { tag: 'ensino', title: 'I Semana do Empresário e Atuação do DAE/CEE', desc: 'O Departamento de Administração e Economia (DAE) e o Conselho de Extensão (CEE) da UFV promovem, entre 12 e 18 de julho, a I Semana do Empresário. O evento tem como objetivo aproximar executivos e empresários da universidade, oferecendo conhecimentos técnicos e gerenciais para o desenvolvimento de diversos setores empresariais.' },
      { tag: 'gestao', title: 'Cursos do NAIPE', desc: 'O Núcleo de Assistência Integrada à Pequena Empresa (NAIPE) encerrou o curso de "Administração de Vendas", que foi ministrado por José Edson Lara para 34 inscritos. Devido à grande demanda e ao sucesso das edições de 1986 — que incluíram temas como "Administração de Pessoal" e "Sistemas de Informações Contábeis" — a coordenadora Nina Rosa Silveira Cunha confirmou que o NAIPE pretende repetir e ampliar a oferta de cursos em 1987 para atender empresários de Viçosa e região.' },
      { tag: 'infraestrutura', title: 'Visita Técnica à Imprensa Universitária', desc: 'Na qualidade de Diretor de Marketing da FUNARBE, José Edson Lara acompanhou os programadores visuais Alceu Muniz e Pedro de Castro (da empresa Studio Design Ltda., de Belo Horizonte) em uma visita às dependências da Imprensa Universitária da UFV. A Studio Design é a responsável pela criação dos rótulos dos produtos da FUNARBE, e o objetivo da visita foi conhecer o parque gráfico e os laboratórios da universidade.' },
      { tag: 'gestao', title: 'Núcleo de Treinamento Profissional em Contabilidade', desc: 'O Departamento de Administração e Economia (DAE) da UFV iniciou, no primeiro semestre de 1987, as atividades do Núcleo de Treinamento Profissional. Coordenado pela professora Nanci Pereira de Vasconcelos, o núcleo funciona no Pavilhão de Aulas (sala 309) e visa familiarizar os estudantes com os procedimentos práticos e executivos da área empresarial.' },
      { tag: 'gestao', title: 'Posse na FUNARBE', desc: 'O Reitor da UFV, professor Geraldo Martins Chaves, empossou José Edson Lara como o novo Diretor Administrativo-Financeiro da Fundação Arthur Bernardes (FUNARBE). Administrador de empresas e ex-chefe da Divisão de Marketing do órgão, Lara substituiu José Clévio Dias Casali. Em seu discurso, ele enfatizou a necessidade de uma "revisão corporativa" e de um trabalho integrado para reestruturar as áreas administrativa e financeira da instituição a curto prazo.' },
    ],
    photos: [
      { url: '/1997 “O Reitor da UFV, professor Geraldo Martins Chaves, dá posse ao novo Diretor administrativo-financeiro da FUNARBE.”.jpg', caption: 'O Reitor da UFV, professor Geraldo Martins Chaves, dá posse ao novo Diretor administrativo-financeiro da FUNARBE' },
      { url: '/1997 “Volta às aulas”.jpg', caption: 'Volta às aulas.' }
    ]
  },
  1998: {
    events: [
      { tag: 'ensino', title: 'Primeiros Selecionados', desc: 'Uma Comissão de Seleção presidida pelo professor Adriel selecionou os quatro primeiros estudantes da turma de 1988 para integrarem o programa:  Carla Carvalho Malaquias, Edson Mauro Santos, Geraldo Magela de Abreu e Geraldo Vieira Júnior.' },
      { tag: 'ensino', title: 'Doutorado na Escócia', desc: 'O professor João Adamor Dias Neves, do Departamento de Administração do Centro de Ciências Humanas, Letras e Artes, regressou à UFV após concluir o seu doutorado na Universidade de Stirling, na Escócia. O seu programa foi focado na área de Administração de Pequenas e Médias Empresas, sob a orientação do professor Stewart Butts.' },
      { tag: 'infraestrutura', title: 'Reestruturação Acadêmica', desc: 'Os novos departamentos foram criados para substituir o antigo Departamento de Administração e Economia do Centro de Ciências Humanas, Letras e Artes.' },
      { tag: 'gestao', title: 'Implantação do PET na Administração', desc: 'O Departamento de Administração da UFV teve sua proposta aprovada pela CAPES para a implantação de um dos primeiros Programas Especiais de Treinamento do Brasil nessa área. O programa é orientado pelo professor Adriel Rodrigues de Oliveira, que atua como tutor e foi o responsável pela iniciativa da proposta.' },
      { tag: 'ensino', title: 'Palestra sobre Dinâmica de Investimento e Economia Capitalista', desc: 'O professor Newton Paulo Bueno proferiu uma palestra no auditório do Departamento de Economia Rural (DER) abordando o tema: "A dinâmica do investimento em economias capitalistas: um questionamento sobre o princípio do ajustamento do estoque de capital".' },
      { tag: 'ensino', title: 'Homenagem ao Professor Carlos Roberto Ramos', desc: 'Curso de Administração: O professor Carlos Roberto Ramos foi o homenageado escolhido especificamente pelos formandos do curso de Administração. Homenagem Especial: Além do professor, os próprios "formandos em Administração" foram citados como alvo de uma homenagem especial dentro do curso.' },
      { tag: 'ensino', title: 'Solenidade e Homenagens Gerais', desc: 'Colação de Grau: A Sessão Solene ocorreu em 8 de janeiro de 1988, presidida pelo Reitor Geraldo Martins Chaves, diplomando 412 graduandos e 100 mestres e doutores. Paraninfa e Orador: A Turma teve como paraninfa a atriz Fernanda Montenegro e como orador o acadêmico Elton Chaud' },
      { tag: 'gestao', title: 'UFV Promove II Semana do Empresário em Julho', desc: 'O Departamento de Administração e Economia (DAE) da Universidade Federal de Viçosa (UFV), em conjunto com o Conselho de Extensão, realizará entre os dias 10 e 14 de julho a II Semana do Empresário.' },
      { tag: 'gestao', title: 'Novas Chefias', desc: 'Departamento de Administração (DAD): Assumiu como primeiro chefe o professor Marcos Tanure Sanábio.  Departamento de Economia (DEE): Assumiu como primeiro chefe o professor Juraci Aureliano Teixeira.' },
    ],
    photos: [
      { url: '/1998 “1 Encontro de Administração Municipal da Zona da Mata”.jpg', caption: '1 Encontro de Administração Municipal da Zona da Mata' },
      { url: '/1998 “Autoridades participantes da mesa-redonda.”.jpg', caption: 'Autoridades participantes da mesa redonda.' },
      { url: '/1998 “O professor João Adamor.”.jpg', caption: 'O professor João Adamor.' },
      { url: '/1998 “O Reitor Geraldo Martins Chaves cumprimenta o professor Marcos Tanure Sanábio, vendo-se, à direita, o professor Juraci Aureliano Teixeira.”.jpg', caption: 'O Reitor Geraldo Martins Chaves cumprimenta o professor Marcos Tanure Sanábio, vendo-se, à direita, o professor Juraci Aureliano Teixeira.' },
      { url: '/1998 “Os formandos e os homenageados da Turma de Janeiro de 1988 da Universidade Federal de Viçosa.”.jpg', caption: 'Os formandos e os homenageados da Turma de Janeiro de 1988 da Universidade Federal de Viçosa..' }
    ]
  },
  1999: {
    events: [
      { tag: 'ensino', title: '6º Ciclo de Estudos Pedagógicos', desc: 'Realizado em janeiro de 1999, este ciclo reuniu mais de 200 educadores para analisar os impactos da então recente Lei de Diretrizes e Bases (LDB). O Professor Adriel Rodrigues de Oliveira teve participação central no evento.' },
      { tag: 'ensino', title: 'IV Congresso e IV Mostra de Ciências Humanas, Letras e Artes', desc: 'Iniciativa conjunta das universidades federais de Minas Gerais para debater o papel das ciências humanas na universidade contemporânea.' },
      { tag: 'reconhecimento', title: 'Participação da Profa. Nina Rosa da Silveira Cunha', desc: 'A professora atua como uma das orientadoras do projeto "Minuto Gerencial", coordenando estudantes do PET de Administração.' },
      { tag: 'ensino', title: 'Pós-Graduação Lato Sensu em Gestão Estratégica', desc: 'O DAD anunciou a criação do curso coordenado pela Professora Telma Regina da C. G. Barbosa.' },
      { tag: 'gestao', title: 'Minuto Gerencial', desc: 'Projeto de extensão que utiliza a linguagem audiovisual da TV Viçosa para disseminar conhecimentos de gestão.' },
    ],
    photos: [
      { url: '/1999 “Formandos de Março de 1999”.png', caption: 'Formandos de Março de 1999.' },
      { url: '/1999 “O pró-reitor Walmer Faroni e os novos membros da CMA”.png', caption: 'O pró-reitor Walmer Faroni e os novos membros da CMA.' },
      { url: '/1999 “Parte do público do seminário ”.jpg', caption: 'Parte do público do seminário.' }
    ]
  },
  2000: {
    events: [
      { tag: 'gestao', title: 'Encontro Mineiro de Empresas', desc: 'O evento reuniu representantes de diversas empresas juniores e entidades de classe para discutir o mercado de trabalho.' },
      { tag: 'reconhecimento', title: 'Homenagem na DRH', desc: 'A diretora Nina Rosa da Silveira Cunha recebe homenagem dos funcionários da Diretoria de Recursos Humanos.' },
      { tag: 'reconhecimento', title: 'Festa no Encerramento do Futebol dos Veteranos', desc: 'O encerramento do futebol dos veteranos foi marcado por uma confraternização com entrega de prêmios.' },
      { tag: 'ensino', title: 'Formandos de Janeiro de 2000', desc: 'A colação de grau da Turma de Janeiro de 2000 reuniu 530 formandos, a maior da instituição até então.' },
    ],
    photos: [
      { url: '/2000 “A diretora Nina Rosa da Silveira Cunha recebe a homenagem dos funcionários da DRH”.jpg', caption: 'A diretora Nina Rosa da Silveira Cunha recebe a homenagem dos funcionários da DRH.' },
      { url: '/2000 “Momento da entrega do material sos representantes da Luve ”.png', caption: 'Momento da entrega do material aos representantes da Luve.' },
      { url: '/2000 “O futebol dos veteranos”.jpg', caption: 'O futebol dos veteranos.' },
      { url: '/2000 “Os Formandos de Janeiro de 2000”.png', caption: 'Os Formandos de Janeiro de 2000.' },
      { url: '/2000 “Os Formandos de Outubro de 2000”.png', caption: 'Os Formandos de Outubro de 2000.' }
    ]
  },
  2001: {
    events: [
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
    ]
  },
  2002: {
    events: [
      { tag: 'ensino', title: 'Homenagens dos Formandos', desc: 'Novos profissionais prestam reconhecimento ao paraninfo Walmer Faroni e à Profa. Telma Regina.' },
      { tag: 'ensino', title: 'Empreendedorismo e Inovação', desc: 'Curso focado em inovação para profissionais ligados ao Centev/UFV e Incubadora de Empresas.' },
    ],
    photos: [
      { url: '/2002 “Autoridades discutem o Centev”.jpg', caption: 'Autoridades discutem o Centev.' },
      { url: '/2002 “Formandos de Maio de 2002”.png', caption: 'Formandos de Maio de 2002.' },
      { url: '/2002 “Formandos de Setembro de 2002”.png', caption: 'Formandos de Setembro de 2002.' },
      { url: '/2002 “O servidor Daniel assina o livro de posse”.jpg', caption: 'O servidor Daniel assina o livro de posse.' }
    ]
  },
  2003: {
    events: [
      { tag: 'infraestrutura', title: 'Comemoração do 15º Aniversário do DAD', desc: 'Sessão solene celebra os 15 anos de consolidação do departamento como unidade de prestígio.' },
      { tag: 'ensino', title: 'Atividades do Curso de Administração', desc: 'Aula da Saudade ministrada pelo professor José de Arimateia de Oliveira.' },
    ],
    photos: [
      { url: '/2003 “Formandos de Março de 2003”.png', caption: 'Formandos de Março de 2003.' }
    ]
  },
  2004: {
    events: [
      { tag: 'gestao', title: 'Eleição para Reitor', desc: 'Definição da lista tríplice com vitória da chapa dos professores Carlos Sediyama e Cláudio Furtado Soares.' },
      { tag: 'ensino', title: 'Novos Chefes de Departamentos', desc: 'Professor Walmer Faroni é empossado como chefe do DAD para o novo quadriênio.' },
      { tag: 'gestao', title: 'Nova Diretoria da Funarbe', desc: 'Posse da nova gestão executiva com Orlando Monteiro da Silva como diretor-presidente.' },
    ],
    photos: [
      { url: '/2004 “Carlos Sediyama e Cláudie Furtado foram eleitos como os primeiros da lista encaminhada ao MEC.”.jpg', caption: 'Carlos Sediyama e Cláudio Furtado na lista do MEC.' },
      { url: '/2004 “Carlos Sedylama (dir) e Cláudio Furtado. ”.jpg', caption: 'Carlos Sediyama e Cláudio Furtado.' },
      { url: '/2004 “Formandos de Janeiro de 2004”.png', caption: 'Formandos de Janeiro de 2004.' },
      { url: '/2004 “Formandos de Julho de 2004”.png', caption: 'Formandos de Julho de 2004.' },
      { url: '/2004 “O professor Orlando Monteire da Silva fala durante sua posse”.jpg', caption: 'O professor Orlando Monteiro da Silva fala durante sua posse.' }
    ]
  },
  2005: {
    events: [
      { tag: 'ensino', title: 'Aulas da Saudade', desc: 'Homenagem ao professor Antônio de Figueiredo Vieira na última aula simbólica da turma.' },
      { tag: 'infraestrutura', title: 'Capacitação para Gestores', desc: 'Ciclo de palestras voltado para dirigentes, ministrado por professores experientes do DAD.' },
      { tag: 'gestao', title: 'Criação da Coopera', desc: 'Comissão instituída para otimização dos procedimentos e rotinas administrativas da universidade.' },
    ],
    photos: [
      { url: '/2005 “Formandos de Janeiro de 2005”.png', caption: 'Formandos de Janeiro de 2005.' },
      { url: '/2005 “Os participantes do treinamento assistem palestrs no CEE.”.jpg', caption: 'Participantes do treinamento no CEE.' }
    ]
  },
  2006: {
    events: [
      { tag: 'ensino', title: 'Aulas da Saudade', desc: 'Homenagem ao professor Antônio de Figueiredo Vieira na última aula simbólica da turma.' },
      { tag: 'infraestrutura', title: 'Capacitação para Gestores', desc: 'Ciclo de palestras voltado para dirigentes, ministrado por professores experientes do DAD.' },
      { tag: 'gestao', title: 'Criação da Coopera', desc: 'Comissão instituída para otimização dos procedimentos e rotinas administrativas da universidade.' },
    ],
    photos: [
      { url: '/2005 “Formandos de Janeiro de 2005”.png', caption: 'Formandos de Janeiro de 2005.' },
      { url: '/2005 “Os participantes do treinamento assistem palestrs no CEE.”.jpg', caption: 'Participantes do treinamento no CEE.' }
    ]
  },
  2007: {
    events: [
      { tag: 'infraestrutura', title: 'Novo prédio do DAD', desc: 'Inauguração do edifício-sede com salas modernas e novos laboratórios de informática.' },
      { tag: 'gestao', title: 'Cace Consultoria', desc: 'Consolidação da empresa júnior na prestação de serviços para a Zona da Mata mineira.' },
    ],
    photos: [
      { url: '/2007 “O professor Guerrero (3º ‡ esquerda) durante sua visita ao Centev.”.jpg', caption: 'O professor Guerrero durante sua visita ao Centev.' }
    ]
  },
  2008: {
    events: [
      { tag: 'ensino', title: 'Visita Internacional', desc: 'O professor Rafael Fernández Guerrero, da Espanha, visita a UFV para iniciar parcerias estratégicas.' },
    ],
    photos: []
  },
  2009: {
    events: [
      { tag: 'gestao', title: 'Posse do Professor Luiz Antônio Abrantes', desc: 'Instalação da primeira Pró-Reitoria de Gestão de Pessoas da história da UFV.' },
      { tag: 'extensao', title: 'Lançamento da Revista APGS', desc: 'Primeira edição da revista eletrônica Administração Pública e Gestão Social.' },
      { tag: 'reconhecimento', title: 'Mérito na Contabilidade', desc: 'Pesquisa sobre Lei de Responsabilidade Fiscal premiada na Convenção Mineira de Contabilidade.' },
    ],
    photos: [
      { url: '/2009 “A professora Tainá.”.jpg', caption: 'A professora Tainá.' },
      { url: '/2009 “O pré-reitor Luiz Antônio Abrantes faz seu pronunciamento, tendo o lado o diretor-assistente Ely Rosa.”.jpg', caption: 'O pró-reitor Luiz Antônio Abrantes em seu pronunciamento.' }
    ]
  },

  2011: {
    events: [
      { tag: 'ensino', title: 'Resumo do Livro e Temas Abordados', desc: 'A obra intitulada "Administração Pública, Gestão Social e Economia Solidária" foi organizada pelos professores Marco Aurélio Ferreira Marques, Magnus Luiz Emmendoerfer e Rodrigo Gava, da UFV. O objetivo do livro é analisar os avanços e desafios nas práticas profissionais e teóricas relacionadas à administração pública, gestão social e economia solidária. Para isso, reúne autores com diferentes experiências para discutir contradições do mundo contemporâneo em diversas regiões do Brasil, dando ênfase especial ao cenário de Minas Gerais.' },
      { tag: 'ensino', title: 'Origem dos Trabalhos e II Encontro Mineiro', desc: 'Segundo o professor Magnus, o livro é fruto de uma série de pesquisas realizadas em instituições mineiras de ensino e pesquisa nos últimos anos. Grande parte dos estudos presentes na obra foi apresentada originalmente por pesquisadores durante o II Encontro Mineiro de Administração Pública, Economia Solidária e Gestão Social. Esse evento ocorreu no campus da UFV entre os dias 10 e 11 de junho de 2010.' },
      { tag: 'extensao', title: 'Datas de Lançamento e Canais de Distribuição', desc: 'O livro teve um pré-lançamento em novembro de 2010 durante o Encontro Nacional de Administração Pública e Governança, mas sua distribuição ocorre ao longo de 2011. Além do lançamento previsto para o V Encontro Nacional de Pesquisadores em Gestão Social, in Florianópolis, entre 25 e 28 de maio de 2011, a obra será enviada para bibliotecas de universidades públicas em países de língua portuguesa. Atualmente, exemplares já estão disponíveis para consulta na Biblioteca Central da UFV.' },
      { tag: 'gestao', title: 'O I Seminário de Acompanhamento do Plano de Gestão', desc: 'A Pró-Reitoria de Planejamento e Orçamento (PPO) da Universidade Federal de Viçosa realizou, entre os dias 1º e 8 de julho de 2011, o I Seminário de Acompanhamento do Plano de Gestão, reunindo membros da administração superior para debater as realizações em curso e o ciclo de planejamento para o período de 2012-2015. O evento foi liderado pelo pró-reitor Sebastião Tavares de Rezende e teve como foco principal o acompanhamento e a avaliação das ações institucionais, permitindo a identificação de metas cumpridas e a correção de rumos para o cumprimento dos objetivos da universidade. Durante os debates, enfatizou-se que o Plano de Desenvolvimento Institucional (PDI) funciona como um plano de Estado estratégico e independente de gestões específicas, enquanto o Plano de Gestão equivale a um plano de governo focado em ações práticas.' },
      { tag: 'gestao', title: 'A Participação do Professor Walmer Faroni e Diretores de Centro', desc: 'Dentro da programação de apresentações das unidades acadêmicas, o professor Walmer Faroni, na qualidade de diretor do Centro de Ciências Humanas, Letras e Artes (CCH), foi um dos dirigentes que expuseram a situação de sua respectiva unidade, detalhando o que já havia sido executado e as perspectivas futuras para o centro. Além dele, participaram diretores de outros centros e dos campi de Florestal e Rio Paranaíba, como a professora Maria Goreti de Almeida Oliveira (CCB), o professor Sérgio Hermínio Brommonschenkel (CCA) e o professor Carlos de Castro Goulart (CCE), fornecendo dados essenciais para consolidar a cultura do planejamento dentro da comunidade acadêmica. O seminário contou com o apoio da reitora Nilda de Fátima Ferreira Soares, que destacou a importância de dar transparência à sociedade sobre o que está sendo planejado para superar desafios financeiros e de recursos humanos.' },
      { tag: 'reconhecimento', title: 'Desempenho Geral e Cursos com Cinco Estrelas', desc: 'A Universidade Federal de Viçosa obteve um resultado expressivo na avaliação de cursos superiores realizada pelo Guia do Estudante (GE) em 2011, que fará parte da publicação GE Profissões 2012. No total, a instituição recebeu a classificação máxima de cinco estrelas em 14 de seus cursos de graduação, demonstrando a excelência acadêmica em diversas áreas do conhecimento. Os cursos contemplados com a pontuação máxima no campus de Viçosa foram Agronomia, Cooperativismo, Economia Doméstica, Engenharia Agrícola e Ambiental, Engenharia de Alimentos, Engenharia Florestal, Nutrição, Pedagogia e Zootecnia. Além destes, o campus de Florestal também se destacou com cinco estrelas nos cursos de Agronomia, Ciência de Alimentos, Engenharia de Alimentos, Gestão Ambiental e Tecnologia em Gestão Ambiental.' },
      { tag: 'reconhecimento', title: 'Cursos Avaliados com Quatro e Três Estrelas', desc: 'Além dos cursos de excelência máxima, a UFV apresentou uma ampla gama de graduações com alto índice de qualidade, recebendo quatro estrelas (consideradas "muito boas") em 21 cursos diferentes. Entre os avaliados com quatro estrelas estão Administração, Arquitetura e Urbanismo, Ciência da Computação, Ciências Biológicas, Ciências Contábeis, Ciências Econômicas, Direito, Educação Física, Enfermagem, Engenharia Civil, Engenharia de Agrimensura e Cartográfica, Engenharia Elétrica, Engenharia Mecânica, Engenharia Química, Física, Geografia, História, Letras, Matemática, Medicina Veterinária e Química. O curso de Bioquímica também foi mencionado na avaliação, recebendo três estrelas, o que completa o panorama de qualidade da instituição nos diversos campi analisados.' },
      { tag: 'reconhecimento', title: 'Trajetória Acadêmica e Identidade com a Instituição', desc: 'Lauro de Morais Passos Júnior, formado em Agronomia pela turma de 1971, é um dos muitos ex-alunos que mantêm um vínculo profundo e vitalício com a Universidade Federal de Viçosa, refletindo o sentimento de pertencimento compartilhado por aqueles que passaram pela instituição. Natural de Salvador, Bahia, Lauro seguiu os passos de seu pai, Lauro de Morais Passos, que também foi agrônomo graduado em Viçosa na turma de 1937, consolidando uma tradição familiar ligada à universidade. Durante seus anos de graduação, ele viveu intensamente o campus, residindo no alojamento estudantil — especificamente no Bloco B do Bernardão — e participando ativamente da vida acadêmica e social, o que incluiu sua atuação no Centro Acadêmico de Agronomia e a convivência com colegas que se tornaram amigos para a vida toda.' },
      { tag: 'reconhecimento', title: 'Sucesso Profissional e Reconhecimento à UFV', desc: 'Após concluir sua formação em Viçosa, Lauro seguiu para os Estados Unidos, onde obteve os títulos de mestre e doutor pela University of Florida, mas atribui à base sólida recebida na UFV o suporte necessário para o sucesso em sua carreira internacional e em suas atividades como produtor rural na Bahia. Em seu depoimento, ele enfatiza que a universidade não apenas forneceu conhecimento técnico de excelência, mas também moldou seu caráter e visão de mundo, destacando que o "orgulho de ser UFV" reside na combinação entre a qualidade do ensino e o ambiente de fraternidade único do campus. Para ele, retornar à universidade em celebrações como a Reunião Anual de Ex-Alunos é uma oportunidade de renovar as energias e celebrar a importância da instituição em sua trajetória pessoal e profissional.' }
    ],
    photos: []
  },
  2012: {
    events: [
      { tag: 'gestao', title: 'Posse da Nova Diretoria e Composição', desc: 'O Instituto de Políticas Públicas e Desenvolvimento Sustentável da Universidade Federal de Viçosa realizou a cerimônia de posse de sua nova diretoria, reconduzindo a professora Suely de Fátima Ramos Silveira, do Departamento de Administração, ao cargo de diretora para um novo mandato. A equipe diretiva é composta também pelo professor Evonir Batista de Oliveira, do Departamento de Economia Rural, que assumiu a função de vice-diretor, e pelo professor Alair Ferreira de Freitas, do Departamento de Administração e Contabilidade, que atua como secretário executivo do órgão. A solenidade ocorreu com a presença de membros da administração superior, incluindo a reitora Nilda de Fátima Ferreira Soares, consolidando a estrutura de governança do instituto para os próximos anos.' },
      { tag: 'gestao', title: 'Metas Estratégicas e Consolidação do IPPDS', desc: 'Durante seu pronunciamento, a diretora Suely Silveira enfatizou que o principal foco desta gestão é o fortalecimento e a consolidação do IPPDS como um centro de excelência em pesquisa e extensão voltado para a formulação e análise de políticas públicas. Entre as prioridades estabelecidas estão a ampliação das parcerias institucionais e a captação de recursos para projetos que promovam o desenvolvimento sustentável, integrando diferentes áreas do conhecimento da universidade. A reitora Nilda Soares destacou a importância estratégica do instituto para a UFV, ressaltando que o trabalho da diretoria é fundamental para projetar a competência técnica da instituição na solução de problemas sociais e governamentais, garantindo que o conhecimento gerado no campus chegue de forma efetiva à sociedade.' },
      { tag: 'reconhecimento', title: 'Homenagem à Professora Suely de Fátima Ramos Silveira', desc: 'A professora Suely de Fátima Ramos Silveira, vinculada ao Departamento de Administração, foi agraciada com a Medalha de Mérito em Extensão durante as festividades do 85º aniversário de fundação da Universidade Federal de Viçosa. Essa honraria reconhece sua trajetória de dedicação e as relevantes contribuições oferecidas à instituição ao longo de sua carreira, especialmente no âmbito das atividades extensionistas que aproximam a universidade da comunidade. A entrega da medalha ocorreu em uma sessão solene que reuniu autoridades, profissionais e membros da comunidade acadêmica para rememorar fatos históricos e prestar homenagens àqueles que ajudaron a construir a trajetória vitoriosa da UFV.' },
      { tag: 'reconhecimento', title: 'Homenagem à Professora Soraya Maria de Carvalho Pieve', desc: 'A professora Soraya Maria de Carvalho Pieve também foi destaque nas celebrações comemorativas da universidade, sendo homenageada com a Medalha Valentina de Cruz. Esta distinção foi concedida em reconhecimento aos seus 30 anos de serviços prestados à Universidade Federal de Viçosa, simbolizando o agradecimento da instituição pelo seu longo período de comprometimento e trabalho contínuo. A solenidade de premiação fez parte de um calendário diversificado de eventos socioculturais e sessões solenes que marcaram não apenas o aniversário da instituição, mas também o cinquentenário da pós-graduação na UFV.' }
    ],
    photos: []
  },
  2013: {
    events: [
      { tag: 'gestao', title: 'A Atuação da Professora Suely Silveira no IPPDS', desc: 'A professora Suely de Fátima Ramos Silveira, vinculada ao Departamento de Administração, desempenha um papel central na gestão do Instituto de Políticas Públicas e Desenvolvimento Sustentável (IPPDS) da Universidade Federal de Viçosa. Em sua atuação, ela coordena seminários e atividades voltadas para o planejamento estratégico e a avaliação de políticas públicas, buscando integrar o conhecimento acadêmico com as demandas da sociedade. Sob sua liderança, o instituto foca na consolidação de metas que envolvem a captação de recursos e a promoção do desenvolvimento sustentável, reafirmando o compromisso da UFV em ser um agente de transformação social por meio da competência técnica e da inovação.' },
      { tag: 'ensino', title: 'Trajetória e Formatura da Aluna Bárbara Pacheco', desc: 'Bárbara Pacheco destacou-se em sua trajetória acadêmica como estudante de Administração no campus de Rio Paranaíba, participando ativamente de momentos históricos para a expansão da Universidade Federal de Viçosa. Durante a cerimônia de colação de grau, que marcou a primeira formatura de estudantes que iniciaram a graduação naquele campus, ela celebrou a conclusão de sua jornada junto aos seus familiares e à comunidade acadêmica. Como parte da turma denominada "Os Pioneiros", Bárbara e seus colegas foram exortados pela administração superior a atuar como agentes de mudança e a pautar sua prática profissional pelos valores da justiça social e da dignidade humana, levando adiante o nome da instituição em suas futuras carreiras.' }
    ],
    photos: []
  },
  2024: {
    events: [
      { tag: 'reconhecimento', title: 'Jubileu de Ouro — 50 anos do DAD', desc: 'O departamento celebra seu cinquentenário com semana comemorativa e publicação de livro histórico.' },
    ],
    photos: [
      { url: 'https://picsum.photos/seed/50anos/800/600', caption: 'Cerimônia de comemoração dos 50 anos do DAD.' },
      { url: 'https://picsum.photos/seed/bolo50/800/600', caption: 'Confraternização entre docentes e servidores no Jubileu de Ouro.' }
    ]
  },
};