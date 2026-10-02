export type GalleryPhoto = {
	id: string;
	url: string;      // era: src
	title?: string;
	caption?: string; // era: description
};

export const allGalleryPhotos: GalleryPhoto[] = [
	{ id: 'photo-1', url: '/2010 O professor Walmer Faroni.png', title: 'Professor Walmer Faroni (2010)', caption: 'Registro do professor Walmer Faroni' },
	{ id: 'photo-2', url: '/2012 - Formandos de Junho de 2012.png', title: 'Formandos Junho 2012', caption: 'Turma de formandos de 2012' },
	{ id: 'photo-3', url: '/admformatura.jpg', title: 'ADM Formatura', caption: 'Formatura do curso de Administração' },
	{ id: 'photo-4', url: '/ala adm.jpg', title: 'Ala Administrativa', caption: 'Dependências da ala administrativa' },
	{ id: 'photo-5', url: '/Alberto Simão.jpg', title: 'Alberto Simão', caption: 'Registro de Alberto Simão' },
	{ id: 'photo-6', url: '/aniversario do dad.jpg', title: 'Aniversário do DAD', caption: 'Djair Cesario de Araújo (Chefe do DAD), Professora Nilda de Fátima Ferreira Soares (Vice-Reitora da UFV), Luíz Cláudio Costa (Reitor da UFV), Walmer Faroni (Diretor do CCH).' },
	{ id: 'photo-7', url: '/comparando respostas vestibular.jpg', title: 'Conferência de Vestibular', caption: 'Comparação de respostas do vestibular' },
	{ id: 'photo-8', url: '/Consul.jpg', title: 'CONSU', caption: '' },
	{ id: 'photo-9', url: '/emej 2010 1.jpg', title: 'EMEJ 2010', caption: '' },
	{ id: 'photo-10', url: '/emej 2010.jpg', title: 'EMEJ 2010', caption: '' },
	{ id: 'photo-11', url: '/emej.jpg', title: 'EMEJ 2010', caption: '' },
	{ id: 'photo-12', url: '/Encontro de empresa juniores.jpg', title: 'Encontro Empresas Juniores', caption: '' },
	{ id: 'photo-13', url: '/evento.jpg', title: 'Evento Geral', caption: 'Registro de evento' },
	{ id: 'photo-14', url: '/evento5.jpg', title: 'Evento', caption: 'Registro do evento' },
	{ id: 'photo-15', url: '/evento6.jpg', title: 'Evento', caption: 'Registro do evento' },
	{ id: 'photo-16', url: '/Eventos.jpg', title: 'Galeria de Eventos', caption: 'Compilado de fotos de eventos' },
	{ id: 'photo-17', url: '/Ex Aluno Eduardo.jpg', title: 'Solenidade Reitoria', caption: '' },
	{ id: 'photo-18', url: '/formandos (1).jpg', title: 'Formandos', caption: 'Grupo de formandos' },
	{ id: 'photo-19', url: '/formandos 5.jpg', title: 'Formandos ', caption: 'Turma de formandos' },
	{ id: 'photo-20', url: '/formandos adm 1.jpg', title: 'Formandos ADM', caption: 'Turma 1 de Administração' },
	{ id: 'photo-21', url: '/formandos adm.jpg', title: 'Formandos ADM', caption: 'Grupo de formandos de ADM' },
	{ id: 'photo-22', url: '/formandos.jpg', title: 'Formandos', caption: 'Foto coletiva de formandos' },
	{ id: 'photo-23', url: '/formandos1 (1).jpg', title: 'Formandos', caption: 'Registro de formandos' },
	{ id: 'photo-24', url: '/formandos1.jpg', title: 'Formandos', caption: 'Registro de formandos' },
	{ id: 'photo-25', url: '/formandos3.jpg', title: 'Formandos', caption: 'Registro de formandos' },
	{ id: 'photo-26', url: '/formandos4.jpg', title: 'Formandos', caption: 'Registro de formandos' },
	{ id: 'photo-28', url: '/formatura adm.jpg', title: 'Formatura ADM', caption: 'Cerimônia de formatura' },
	{ id: 'photo-29', url: '/formatura3.jpg', title: 'Formatura ', caption: 'Registro de formatura' },
	{ id: 'photo-30', url: '/formatura4.jpg', title: 'Formatura ', caption: 'Registro de formatura' },
	{ id: 'photo-31', url: '/formatura5.jpg', title: 'Formatura ', caption: 'Registro de formatura' },
	{ id: 'photo-32', url: '/formatura6.jpg', title: 'Formatura ', caption: 'Registro de formatura' },
	{ id: 'photo-33', url: '/formatura7.jpg', title: 'Formatura ', caption: 'Registro de formatura' },
	{ id: 'photo-34', url: '/formatura8.jpg', title: 'Formatura ', caption: 'Registro de formatura' },
	{ id: 'photo-35', url: '/formatura9.jpg', title: 'Formatura ', caption: 'Registro de formatura' },
	{ id: 'photo-36', url: '/formatura10.jpg', title: 'Formatura ', caption: 'Registro de formatura' },
	{ id: 'photo-37', url: '/formatura11.jpg', title: 'Formatura ', caption: 'Registro de formatura' },
	{ id: 'photo-38', url: '/formatura12.jpg', title: 'Formatura ', caption: 'Registro de formatura' },
	{ id: 'photo-39', url: '/fotos alunos.jpg', title: 'Formatura', caption: 'Registros dos alunos' },
	{ id: 'photo-40', url: '/fotos alunos1.jpg', title: 'Formatura', caption: 'Registros dos alunos' },
	{ id: 'photo-41', url: '/idem professor walmer.jpg', title: 'Professor Walmer', caption: '' },
	{ id: 'photo-42', url: '/inauguração da ala administrativa dad.jpg', title: 'Inauguração Ala ADM', caption: 'Cerimônia de inauguração da ala administrativa Professor Roberto de Carvalho Araújo' },
	{ id: 'photo-43', url: '/inauguração da galeria.jpg', title: 'Inauguração da Galeria de Fotos de Ex-Chefes do DAD', caption: '' },
	{ id: 'photo-44', url: '/jogo de empresa.jpg', title: 'Jogo de Empresa', caption: 'Atividade pedagógica: Jogo de Empresa' },
	{ id: 'photo-45', url: '/jogo de empresa2.jpg', title: 'Jogo de Empresa', caption: 'Atividade pedagógica: Jogo de Empresa' },
	{ id: 'photo-46', url: '/matricula.jpg', title: 'Matrícula', caption: 'Registro do período de matrícula' },
	{ id: 'photo-47', url: '/Mesa de Evento.jpg', title: 'Mesa de Evento', caption: 'Composição da mesa em evento' },
	{ id: 'photo-48', url: '/mesa de evento2.jpg', title: 'Mesa de Evento', caption: 'Composição da mesa em evento' },
	{ id: 'photo-49', url: '/mesa de eventos3.jpg', title: 'Mesa de Eventos', caption: 'Composição da mesa em evento' },
	{ id: 'photo-50', url: '/mesa de eventos4.jpg', title: 'Mesa de Eventos', caption: 'Composição da mesa em evento' },
	{ id: 'photo-51', url: '/mesa de eventos5.jpg', title: 'Mesa de Eventos', caption: 'Composição da mesa em evento' },
	{ id: 'photo-52', url: '/mesa diretora de evento.jpg', title: 'Mesa Diretora de Evento', caption: 'Registro da mesa diretora' },
	{ id: 'photo-53', url: '/mesa evento.jpg', title: 'Mesa Evento', caption: 'Registro de mesa em evento' },
	{ id: 'photo-54', url: '/mesa formatura.jpg', title: 'Mesa Formatura', caption: 'Composição da mesa de formatura' },
	{ id: 'photo-55', url: '/naipe.jpg', title: 'Inauguração do NAIPE', caption: '' },
	{ id: 'photo-56', url: '/naipe1.jpg', title: 'NAIPE', caption: '' },
	{ id: 'photo-57', url: '/posse da josé edson.jpg', title: 'Posse do José Edson', caption: 'Cerimônia de posse' },
	{ id: 'photo-58', url: '/posse dad.jpg', title: 'Posse Reitoria', caption: 'Solenidade de posse no departamento' },
	{ id: 'photo-59', url: '/posse no dad.jpg', title: 'Posse na Reitoria', caption: '' },
	{ id: 'photo-60', url: '/Posse Reitoria.jpg', title: 'Posse Reitoria', caption: 'Solenidade de posse na reitoria' },
	{ id: 'photo-61', url: '/PosseReitoria1.jpg', title: 'Posse Reitoria', caption: '' },
	{ id: 'photo-62', url: '/Professor Adriel.jpg', title: 'Professor Adriel Rodrigues de Oliveira', caption: 'Registro do Professor Adriel' },
	{ id: 'photo-63', url: '/Professor Afonso - Jogo de Empresa.jpg', title: 'Professor Afonso', caption: 'Prof. Afonso no Jogo de Empresa' },
	{ id: 'photo-64', url: '/Professor Carlos Roberto.jpg', title: 'Professor Carlos Roberto Ramos', caption: 'Registro do Professor Carlos Roberto' },
	{ id: 'photo-65', url: '/Professor Jorge.jpg', title: 'Professor Jorge', caption: 'Registro do Professor Jorge' },
	{ id: 'photo-66', url: '/Professor Juarez.jpg', title: 'Professor Juarez Rodrigues', caption: 'Registro do Professor Juarez' },
	{ id: 'photo-67', url: '/Professora Nina diretora do RH.jpg', title: 'Professora Nina Rosa (RH)', caption: 'Prof. Nina, diretora do RH' },
	{ id: 'photo-68', url: '/professora nina rosa 35 anos.jpg', title: 'Professora Nina Rosa', caption: 'Homenagem de 35 anos' },
	{ id: 'photo-69', url: '/R.U.jpg', title: 'R.U.', caption: 'Registro do Restaurante Universitário' },
	{ id: 'photo-70', url: '/Reunião Reitoia1.jpg', title: 'Reunião Reitoria', caption: 'Registro de reunião na reitoria' },
	{ id: 'photo-71', url: '/Reunião Reitoria.jpg', title: 'Reunião Reitoria', caption: 'Registro de reunião' },
	{ id: 'photo-72', url: '/Reunião Reitoria1.jpg', title: 'Reunião Reitoria', caption: 'Professora Nina Rosa' },
	{ id: 'photo-73', url: '/reuniãoCCH.jpg', title: 'Reunião CCH', caption: 'Registro de reunião no CCH' },
	{ id: 'photo-74', url: '/reuniãoCCH2.jpg', title: 'Reunião CCH', caption: 'Registro de reunião no CCH ' },
	{ id: 'photo-75', url: '/ReuniãoReitoria2.jpg', title: 'Reunião Reitoria', caption: 'Registro de reunião na reitoria' },
	{ id: 'photo-76', url: '/Semana da administração.jpg', title: 'Semana do Administrador', caption: '' },
	{ id: 'photo-77', url: '/semana da mulher.jpg', title: 'Semana da Mulher', caption: 'Professora Nina Rosa' },
	{ id: 'photo-78', url: '/semana do adm.jpg', title: 'Semana do Administrador', caption: 'Evento do curso de Administração' },
	{ id: 'photo-79', url: '/solenidade dirigentes ufv.jpg', title: 'Solenidade Dirigentes UFV', caption: 'Evento com dirigentes da UFV' },
	{ id: 'photo-80', url: '/solenidade posse adm superior.jpg', title: 'Posse ADM Superior', caption: 'Solenidade de posse administrativa' },
	{ id: 'photo-81', url: '/treinamento (1).jpg', title: 'Treinamento', caption: 'Registro de treinamento' },
	{ id: 'photo-82', url: '/treinamento auto administração.jpg', title: 'Treinamento Administrativo', caption: '' },
	{ id: 'photo-83', url: '/treinamento.jpg', title: 'Treinamento', caption: 'Registro geral de treinamento' },
	{ id: 'photo-84', url: '/vestiblar.jpg', title: 'Vestibular', caption: 'Registro de vestibular' },
	{ id: 'photo-85', url: '/vestibular 4 pilastras.jpg', title: 'Vestibular 4 Pilastras', caption: 'Vestibular realizado nas 4 pilastras' },
	{ id: 'photo-86', url: '/vestibular 2000.jpg', title: 'Vestibular 2000', caption: 'Registro do vestibular de 2000' },
	{ id: 'photo-87', url: '/vestibular.jpg', title: 'Vestibular', caption: 'Registro geral de vestibular' },
	{
		id: 'photo-88',
		url: '/vestibularambulancia.jpg',
		title: 'Vestibular Ginásio de Esportes',
		caption: 'Registro de apoio no vestibular'
	},
	{
		id: 'photo-89',
		url: '/vestibularginasio.jpg',
		title: 'Vestibular Ginásio',
		caption: 'Vestibular realizado no ginásio'
	},
	{
		id: 'photo-90',
		url: '/1 encontro de administração.jpg',
		title: '1º Encontro de Administração',
		caption: 'Registro do primeiro encontro de administração'
	},
	{
		id: 'photo-91',
		url: '/1 semana cch.jpg',
		title: '1ª Semana CCH',
		caption: 'Evento da primeira semana do CCH'
	},
	{
		id: 'photo-92',
		url: '/1 semana do centro de ciencias humanas.jpg',
		title: '1ª Semana do Centro de Ciências Humanas',
		caption: 'Registro oficial da primeira semana do CCH'
	},
	{
		id: 'photo-93',
		url: '/2 encontro mineiro de adm publica.jpg',
		title: '2º Encontro Mineiro de ADM Pública',
		caption: 'Segundo encontro estadual de administração pública'
	},
	{
		id: 'photo-94',
		url: '/10 anos adm.jpg',
		title: '10 Anos ADM',
		caption: 'Comemoração de 10 anos do curso de Administração'
	},
	{
		id: 'photo-95',
		url: '/10 anos de administração.jpg',
		title: '10 Anos de Administração (Geral)',
		caption: 'Registro comemorativo da década de curso'
	},
	{
		id: 'photo-96',
		url: '/35 adm.jpg',
		title: '35 Anos ADM',
		caption: 'Celebração dos 35 anos de história do curso'
	},
	{
		id: 'photo-97',
		url: '/1992 “Aspecto da palestra do professor canadense”.jpg',
		title: 'Aspecto da palestra do professor canadense.',
		caption: 'Aspecto da palestra do professor canadense.'
	},
	{
		id: 'photo-98',
		url: '/1992 “O superintendente Paulo Henrique Ayres Pena”.jpg',
		title: 'O superintendente Paulo Henrique Ayres Pena.',
		caption: 'O superintendente Paulo Henrique Ayres Pena.'
	},
	{
	id: 'photo-99',
	url: '/V340 (3) Vestibular.jpg',
	title: 'Vestibular.',
	caption: 'Vestibular.'
},
{
	id: 'photo-100',
	url: '/V340 - VESTIBULAR GINASIO.jpg',
	title: 'Vestibular do Ginásio.',
	caption: 'Vestibular do Ginásio.'
},
{
	id: 'photo-101',
	url: '/V254 - Resultado Vestibular.jpg',
	title: 'Resultado do Vestibular.',
	caption: 'Resultado do Vestibular.'
},
{
	id: 'photo-102',
	url: '/V127 - Vestibular 97.jpg',
	title: 'Vestibular 97.',
	caption: 'Vestibular 97.'
},
{
	id: 'photo-103',
	url: '/T31 (1) Torneio de Chadrez.jpg',
	title: 'Torneio de Xadrez.',
	caption: 'Torneio de Xadrez.'
},
{
	id: 'photo-104',
	url: '/S330 - Mesa de evento.jpg',
	title: 'Mesa de evento.',
	caption: 'Mesa de evento.'
},
{
	id: 'photo-105',
	url: '/S209 (4) - Biblioteca Central.jpg',
	title: 'Biblioteca Central.',
	caption: 'Biblioteca Central.'
},
{
	id: 'photo-106',
	url: '/R218 (2) - Treinamento.jpg',
	title: 'Treinamento.',
	caption: 'Treinamento.'
},
{
	id: 'photo-107',
	url: '/R21 (9) - MATRICULAS.jpg',
	title: 'Matrículas.',
	caption: 'Matrículas.'
},
{
	id: 'photo-108',
	url: '/posse no dad.jpg',
	title: 'Posse no DAD.',
	caption: 'Posse no DAD.'
},
{
	id: 'photo-109',
	url: '/295 (1) Evento.jpg',
	title: 'Evento.',
	caption: 'Evento.'
},
{
	id: 'photo-110',
	url: '/P203 (2) - Palestrante.jpg',
	title: 'Palestrante.',
	caption: 'Palestrante.'
},
{
	id: 'photo-111',
	url: '/P107 (2) - Posse Daniel Lima Carneiro.jpg',
	title: 'Posse de Daniel Lima Carneiro.',
	caption: 'Posse de Daniel Lima Carneiro.'
},
{
	id: 'photo-112',
	url: '/P28 - Posse Professor Marcos Tanure San….jpg', // TODO: nome truncado no print
	title: 'Posse do Professor Marcos Tanure San…',
	caption: 'Posse do Professor Marcos Tanure San…'
},
{
	id: 'photo-113',
	url: '/M43 (3) - Termino de aulas PVA.jpg',
	title: 'Término de aulas do PVA.',
	caption: 'Término de aulas do PVA.'
},
{
	id: 'photo-114',
	url: '/M43 - PRÉ MATRICULA.jpg',
	title: 'Pré-matrícula.',
	caption: 'Pré-matrícula.'
},
{
	id: 'photo-115',
	url: '/L22 (2) - Adriel.jpg',
	title: 'Adriel.',
	caption: 'Adriel.'
},
{
	id: 'photo-116',
	url: '/L14 (1) - Reunião CCH.jpg',
	title: 'Reunião do CCH.',
	caption: 'Reunião do CCH.'
},
{
	id: 'photo-117',
	url: '/1982 - I84 (3) - Instituto do açúcar e do al….jpg', // TODO: nome truncado no print
	title: 'Instituto do Açúcar e do Álcool.',
	caption: 'Instituto do Açúcar e do Álcool.'
},
{
	id: 'photo-118',
	url: '/I84 (2) - Padre Geraldo Paiva.jpg',
	title: 'Padre Geraldo Paiva.',
	caption: 'Padre Geraldo Paiva.'
},
{
	id: 'photo-119',
	url: '/F204 (22) - Formandos de Administração.jpg',
	title: 'Formandos de Administração.',
	caption: 'Formandos de Administração.'
},
{
	id: 'photo-120',
	url: '/F134 (13) - Formatura.jpg',
	title: 'Formatura.',
	caption: 'Formatura.'
},
{
	id: 'photo-121',
	url: '/F123 - Formatura.jpg',
	title: 'Formatura.',
	caption: 'Formatura.'
},
{
	id: 'photo-122',
	url: '/F121 (12) - Padre Mendes.jpg',
	title: 'Padre Mendes.',
	caption: 'Padre Mendes.'
},
{
	id: 'photo-123',
	url: '/F117 (8) Solenidade Formatura.jpg',
	title: 'Solenidade de Formatura.',
	caption: 'Solenidade de Formatura.'
},
{
	id: 'photo-124',
	url: '/F117 (2) - Solenidade Formatura.jpg',
	title: 'Solenidade de Formatura.',
	caption: 'Solenidade de Formatura.'
},
{
	id: 'photo-125',
	url: '/F116 (17) - Coral da UFV João Adamor Dias Neves.jpg',
	title: 'Coral da UFV João Adamor Dias Neves.',
	caption: 'Coral da UFV João Adamor Dias Neves.'
},
{
	id: 'photo-126',
	url: '/F114 (1) Paraninfo Dom Helder Câmara.jpg',
	title: 'Paraninfo Dom Helder Câmara.',
	caption: 'Paraninfo Dom Helder Câmara.'
},
{
	id: 'photo-127',
	url: '/F111 (2) - Paraninfo Dom Luciano Mendes de Almeida.jpg',
	title: 'Paraninfo Dom Luciano Mendes de Almeida.',
	caption: 'Paraninfo Dom Luciano Mendes de Almeida.'
},
{
	id: 'photo-128',
	url: '/F10 (2) - Formandos Administração.jpg',
	title: 'Formandos de Administração.',
	caption: 'Formandos de Administração.'
},
{
	id: 'photo-129',
	url: '/F02 (4) - Formandos Administração.jpg',
	title: 'Formandos de Administração.',
	caption: 'Formandos de Administração.'
},
{
	id: 'photo-130',
	url: '/E413 (4) - Evento de Administração.jpg',
	title: 'Evento de Administração.',
	caption: 'Evento de Administração.'
},
{
	id: 'photo-131',
	url: '/E413 (2) Evento.jpg',
	title: 'Evento.',
	caption: 'Evento.'
},
{
	id: 'photo-132',
	url: '/E401 (6) - Alunos com o melhor coeficiente.jpg',
	title: 'Alunos com o melhor coeficiente.',
	caption: 'Alunos com o melhor coeficiente.'
},
{
	id: 'photo-133',
	url: '/E401 (2) - Alunos com o melhor coeficiente.jpg',
	title: 'Alunos com o melhor coeficiente.',
	caption: 'Alunos com o melhor coeficiente.'
},
{
	id: 'photo-134',
	url: '/E117 (1) - XI EMEJ.jpg',
	title: 'XI EMEJ.',
	caption: 'XI EMEJ.'
},
{
	id: 'photo-135',
	url: '/C632 (14) - Placa 35 Anos.jpg',
	title: 'Placa de 35 Anos.',
	caption: 'Placa de 35 Anos.'
},
{
	id: 'photo-136',
	url: '/C632 (13) - 35 Anos.jpg',
	title: '35 Anos.',
	caption: '35 Anos.'
},
{
	id: 'photo-137',
	url: '/C632 (9) - 35 Anos.jpg',
	title: '35 Anos.',
	caption: '35 Anos.'
},
{
	id: 'photo-138',
	url: '/C632 (7) - 35 Anos.jpg',
	title: '35 Anos.',
	caption: '35 Anos.'
},
{
	id: 'photo-139',
	url: '/C632 (6) - 25 Anos.jpg',
	title: '25 Anos.',
	caption: '25 Anos.'
},
{
	id: 'photo-140',
	url: '/C632 3 - 25 Anos.jpg',
	title: '25 Anos.',
	caption: '25 Anos.'
},
{
	id: 'photo-141',
	url: '/C631 (3) - Evento.jpg',
	title: 'Evento.',
	caption: 'Evento.'
},
{
	id: 'photo-142',
	url: '/C605 (2) - Reuniao Reitoria.jpg',
	title: 'Reunião da Reitoria.',
	caption: 'Reunião da Reitoria.'
},
{
	id: 'photo-143',
	url: '/C337 - Professor Tancredo Almada Cruz.jpg',
	title: 'Professor Tancredo Almada Cruz.',
	caption: 'Professor Tancredo Almada Cruz.'
}
];


export default allGalleryPhotos;