/**
 * Profissionais Homenageados nas Colações de Grau do DAD.
 *
 * Os textos de `linhas` foram mantidos exatamente como no documento original
 * (grafias, maiúsculas e linhas incompletas como "Prof." ou "Téc.").
 */

export interface GrupoHomenagem {
  /** Curso (quando a colação separa Administração e Ciências Contábeis). */
  curso?: string;
  /** Linhas de homenageados, uma por item, no texto original. */
  linhas: string[];
}

export interface ColacaoGrau {
  id: string;
  ano: number;
  /** Data como aparece no documento original (ex.: "Dezembro de 1979", "21.01.2011"). */
  data: string;
  grupos: GrupoHomenagem[];
  /** Observação adicional da colação (ex.: menção especial). */
  nota?: string;
}

type ColacaoBase = Omit<ColacaoGrau, 'id'>;

// Colação sem separação por curso
const c = (ano: number, data: string, linhas: string[], nota?: string): ColacaoBase => ({
  ano,
  data,
  grupos: [{ linhas }],
  ...(nota ? { nota } : {}),
});

// Grupo de um curso
const g = (curso: string, linhas: string[]): GrupoHomenagem => ({ curso, linhas });

// Colação com um ou mais cursos
const cc = (ano: number, data: string, ...grupos: GrupoHomenagem[]): ColacaoBase => ({
  ano,
  data,
  grupos,
});

const colacoes: ColacaoBase[] = [
  c(1979, 'Dezembro de 1979', [
    'Prof. João Adamor Dias Neves',
    'Prof. José Mansur Nascif',
    'Prof. Aula da Saudade',
  ], 'Menção especial ao primeiro e único formando do Curso de Administração – Daniel Lima Carneiro'),

  c(1980, 'Julho de 1980', ['Prof.', 'Prof. Aula da Saudade']),
  c(1980, 'Dezembro de 1980', [
    'Prof. Evaldo Guimarães Barbosa',
    'Profª. Maria Helena Barbassa -  Aula da Saudade',
  ]),

  c(1981, 'Julho de 1981', ['Prof.', 'Prof. Aula da Saudade']),
  c(1981, 'Dezembro de 1981', ['Prof.', 'Prof. Aula da Saudade']),

  c(1982, 'Julho de 1982', ['Prof.', 'Prof. Aula da Saudade']),
  c(1982, 'Dezembro de 1982', [
    'Prof. Maria Helena Barbassa',
    'Prof. José Edson Lara',
    'Prof. Marcos Tanura Sanábio - Aula da Saudade',
  ]),

  c(1983, 'Julho de 1983', ['Prof.', 'Prof. Aula da Saudade']),
  c(1983, 'Dezembro de 1983', [
    'Profª. Valéria Aroeira Braga Duarte Ferreira',
    'Prof. Adriel Rodrigues de Oliveira',
    'Prof. Orlando Monteiro da Silva',
    'Prof. João Adamor Dias Neves - Aula da Saudade',
  ]),

  c(1984, 'Julho de 1984', ['Prof.', 'Prof. Aula da Saudade']),
  c(1984, 'Dezembro de 1984', [
    'Prof. Prof. José Clévio Dias Casali',
    'Téc. Maria das Graças de Oliveira',
    'Prof. José Edson Lara - Prof. Aula da Saudade',
  ]),

  c(1985, 'Julho de 1985', [
    'Prof. Adolfo Egídio Reis',
    'Prof. Adriel Rodrigues de Oliveira - Aula da Saudade',
  ]),
  c(1985, 'Dezembro de 1985', [
    'Prof. Gualberto Ferreira da Silva',
    'Prof. José Clévio Dias Casali',
    'Profª. Maria Helena Barbassa - Aula da Saudade',
  ]),

  c(1986, 'Julho de 1986', [
    'Prof. Prof. Gualberto Ferreira da Silva',
    'Prof. José Clévio dias Casali',
    'Profª. Maria Helena Barbassa -  Aula da Saudade',
  ]),
  c(1986, 'Dezembro de 1986', [
    'Prof. Adriel Rodrigues de Oliveira',
    'Profª. Nina Rosa da Silveira Cunha - Aula da Saudade',
  ]),

  c(1987, 'Julho de 1987', [
    'Prof. Carlos Roberto Ramos',
    'Profª. Nina Rosa da Silveira Cunha',
    'Prof. Roberto de Carvalho Araújo - Aula da Saudade',
  ]),
  c(1987, 'Dezembro de 1987', [
    'Profª. Valéria Aroeira Braga Duarte Ferreira - Aula da Saudade',
  ]),

  c(1988, 'Julho de 1988', [
    'Prof. Carlos Roberto Ramos',
    'Profª. Maria Helena Barbassa',
    'Profª. Vera Lúcia Travençolo Muniz',
    'Prof. Juarez Magalhães Rodrigues - Aula da Saudade',
  ]),
  c(1988, 'Dezembro de 1988', [
    'Prof. Gualberto Ferreira da Silva',
    'Prof. José Edson Lara',
    'Profª. Maria Helena Barbassa',
    'Prof. Juarez Magalhães Rodrigues - Aula da Saudade',
  ]),

  c(1989, 'Julho de 1989', [
    'Prof. José Edson Lara',
    'Prof. Marcos Tanure Sanábio',
    'Prof. Adriel Rodrigues de Oliveira - Prof. Aula da Saudade',
  ]),
  c(1989, 'Dezembro de 1989', ['Prof.', 'Prof. Aula da Saudade']),

  c(1990, 'Julho de 1990', [
    'Prof. Juarez Magalhães Rodrigues',
    'Profª. Maria Helena Barbassa',
    'Profª. Valéria Aroeira Braga Duarte Ferreira - Aula da Saudade',
  ]),
  c(1990, 'Dezembro de 1990', [
    'Prof. Antônio de Figueiredo Vieira',
    'Profª. Nina Rosa da Silveira Cunha',
    'Prof. Afonso Augusto Teixeira de Freitas de Carvalho Lima - Aula da Saudade',
  ]),

  c(1991, 'Julho de 1991', [
    'Prof. Adriel Rodrigues de Oliveira',
    'Prof. Antônio de Figueiredo Vieira',
    'Profª. Nancy Pereira de Vasconcelos - Aula da Saudade',
  ]),
  c(1991, 'Dezembro de 1991', [
    'Prof. José Clévio Dias Casali',
    'Profª. Nancy Pereira de Vasconcelos - Aula da Saudade',
  ]),

  c(1992, 'Julho de 1992', [
    'Profª. Maria Helena Barbassa',
    'Profª. Valéria Aroeira Braga Duarte Ferreira',
    'Prof. Afonso Augusto Teixeira de Freitas de Carvalho Lima - Aula da Saudade',
  ]),
  c(1992, 'Dezembro de 1992', [
    'Prof. Afonso Augusto Teixeira de Freitas de Carvalho Lima',
    'Profª. Nancy Pereira de Vasconcelos',
    'Téc. Carlos Alberto Freire Resende - Aula da Saudade',
  ]),

  c(1993, 'Julho de 1993', [
    'Prof. Profª. Maria Helena Barbassa',
    'Prof. Albino Sérgio Dias Casali',
    'Prof. Afonso Augusto Teixeira de Freitas de Carvalho Lima - Aula da Saudade',
  ]),
  c(1993, 'Dezembro de 1993', [
    'Prof. Antônio de Figueiredo Vieira',
    'Profaª. Nina Rosa da Silveira Cunha',
    'Prof. Afonso Augusto Teixeira de Freitas de Carvalho Lima - Aula da Saudade',
  ]),

  c(1994, 'Julho de 1994', [
    'Prof. Luciano Zille Pereira',
    'Prof. Roberto Serpa Dias',
    'Prof. Afonso Augusto Teixeira de Freitas de Carvalho Lima - Aula da Saudade',
  ]),
  c(1994, 'Dezembro de 1994', [
    'Prof. Antînio de Figueiredo Vieira',
    'Prof. José Roberto Reis',
    'Prof. Afonso Augusto Teixeira de Freitas de Carvalho Lima - Aula da Saudade',
  ]),

  c(1995, 'Julho de 1995', [
    'Prof. Afonso Augusto Teixeira de Freitas de Carvalho Lima',
    'Prof. José Edson Lara',
    'Prof. Afonso Augusto Teixeira de Freitas de Carvalho Lima e Prof. José Edson Lara',
    '- Aula da Saudade',
  ]),
  c(1995, 'Dezembro de 1995', [
    'Prof. Walmer Faroni',
    'Téc. Beatriz de Freitas Dias',
    'Prof. Afonso Augusto Teixeira de Freitas de Carvalho Lima - Aula da Saudade',
  ]),

  c(1996, 'Dezembro de 1996', ['Prof.', 'Téc.', 'Prof. Aula da Saudade']),

  c(1997, 'Julho de 1997', [
    'Profª. Telma Regina da Costa Guimarães Barbosa',
    'Téc. Marcelo Antônio Lopes',
    'Prof. Antônio de Figueiredo Vieira - Aula da Saudade',
  ]),
  c(1997, 'Dezembro de 1997', [
    'Prof. Luiz Antônio Abrantes',
    'Téc. Soraya Machado Fontes',
    'Prof. Djair Cesário de Araújo - Aula da Saudade',
  ]),

  c(1998, 'Julho de 1998', [
    'Prof. Walmer Faroni',
    'Téc. Luís Carlos de Freitas',
    'Prof. Djair Cesário de Araújo - Aula da Saudade',
  ]),
  c(1998, 'Dezembro de 1998', [
    'Prof. Luiz Antônio Abrantes',
    'Téc. Carmem Antônio Elias',
    'Profª. Telma Regina da Costa Guimarães Barbosa - Aula da Saudade',
  ]),

  c(1999, 'Julho de 1999', [
    'Prof. Lourival de Castro Vale',
    'Téc. Luiz Carlos de Freitas',
    'Profª. Telma Regina da Costa Guimarães Barbosa - Aula da Saudade',
  ]),
  c(1999, 'Dezembro de 1999', [
    'Prof. Jaílson de Oliveira Arieira',
    'Téc. Soraya Machado Fontes',
    'Prof. Luiz Antônio Abrantes - Aula da Saudade',
  ]),

  c(2000, 'Julho de 2000', [
    'Prof. Lourival de Castro Vale',
    'Téc. Soraya Machado Fontes',
    'Profª. Telma Regina da Costa Guimarães Barbosa - Prof. Aula da Saudade',
  ]),
  c(2000, 'Dezembro de 2000', [
    'Prof. Prof. Djair Cesário de Araújo',
    'Téc. Luiz Carlos de Freitas',
    'Prof. Lourival de Castro Vale - Prof. Aula da Saudade',
  ]),

  c(2001, 'Julho de 2001', ['Prof.', 'Prof. Aula da Saudade']),
  c(2001, 'Dezembro de 2001', [
    'Prof. José Roberto Reis',
    'Téc. Soraya Machado Fontes',
    'Prof. Antônio de Figueiredo Vieira - Aula da Saudade',
  ]),

  c(2002, 'Julho de 2002', [
    'Prof. Rodrigo Gava',
    'Téc. Luís Carlos de Freitas',
    'Prof. José Roberto Reis - Aula da Saudade',
  ]),
  c(2002, 'Dezembro de 2002', [
    'Prof. Rodrigo Gava',
    'Téc. Soraya Machado Fontes',
    'Prof. José Roberto Reis - Aula da Saudade',
  ]),

  c(2003, 'Julho de 2003', [
    'Prof. Djair Cesário de Araújo',
    'Téc. Vicente Diogo Justino',
    'Prof. Luiz Antônio Abrantes - Aula da Saudade',
  ]),
  c(2003, 'Dezembro de 2003', [
    'Prof. Antônio de Figueiredo Vieira',
    'Téc. Luiz Carlos de Freitas',
    'Prof.Lourival de Castro Vale - Aula da Saudade',
  ]),

  c(2004, 'Julho de 2004', [
    'Prof. Luiz Antônio Abrantes',
    'Téc. Carmem Antônio Elias',
    'Prof. Antônio de Figueiredo Vieira - Aula da Saudade',
  ]),
  c(2004, 'Dezembro de 2004', [
    'Prof. Luiz Antônio Abrantes',
    'Téc. Luiz Carlos de Freitas',
    'Prof. Rodrigo Gava - Aula da Saudade',
  ]),

  cc(
    2005,
    'Julho de 2005',
    g('Administração', [
      'Prof. Rodrigo Gava',
      'Téc. Luiz Carlos de Freitas',
      'Prof. Walmer Faroni Aula da Saudade',
    ]),
    g('Ciências Contábeis', [
      'Prof. José Clévio Dias Casali',
      'Téc. Luiz Carlos de Freitas',
      'Prof. Walmer Faroni Aula da Saudade',
    ]),
  ),
  c(2005, 'Dezembro de 2005', ['Prof.', 'Prof. Aula da Saudade']),

  c(2006, 'Julho de 2006', [
    'Prof. Afonso Augusto Teixeira de Freitas de Carvalho Lima',
    'Téc. Luiz Carlos de Freitas',
    'Prof. Antônio de Figueiredo Vieira - Aula da Saudade',
  ]),
  c(2006, 'Dezembro de 2006', ['Prof.', 'Prof. Aula da Saudade']),

  cc(
    2007,
    'Janeiro 2007',
    g('ADMINISTRAÇÃO', [
      'PROF. José Roberto Reis',
      'AULA DA SAUDADE PROFAª Telma Regina da Costa Guimarães Barbosa',
    ]),
    g('CIÊNCIAS CONTÁBEIS', [
      'PROF. WALMER FARONI',
      'TÉCNICO LUIS CARLOS DE FREITAS',
    ]),
  ),
  cc(
    2007,
    'Agosto 2007',
    g('ADMINISTRAÇÃO', [
      'PROF.: AFONSO AUGUSTO TEIXEIRA DE FREITAS DE CARVALHO LIMA',
      'FUNC.:',
      'SAUDADE: LUIZ ANTÔNIO ABRANTES',
    ]),
    g('CIÊNCIAS CONTÁBEIS', [
      'PROF.: WALMER FARONI',
      'FUNC.: LUIS CARLOS DE FREITAS',
      'SAUDADE:',
    ]),
  ),

  cc(
    2008,
    'Janeiro 2008',
    g('ADMINISTRAÇÃO', [
      'PROF.: AFONSO AUGUSTO TEIXEIRA DE FREITAS DE CARVALHO LIMA',
      'FUNC.: SORAYA MACHADO FONTES',
      'SAUDADE: AFONSO AUGUSTO TEIXEIRA DE FREITAS DE CARVALHO LIMA',
    ]),
    g('CIÊNCIAS CONTÁBEIS', [
      'PROF.: WALMER FARONI',
      'FUNC.: LUIS CARLOS DE FREITAS',
      'SAUDADE: LUIS ANTONIO ABRANTES',
    ]),
  ),
  cc(
    2008,
    'Julho 2008',
    g('ADMINISTRAÇÃO', [
      'PROF.: AFONSO AUGUSTO TEIXEIRA DE FREITAS DE CARVALHO LIMA',
      'FUNC.: SORAYA MACHADO FONTES',
      'SAUDADE: LUCIANA DE OLIVEIRA MIRANDA GOMES',
    ]),
    g('CIÊNCIAS CONTÁBEIS', [
      'PROF.: WALMER FARONI',
      'FUNC.: SORAYA MACHADO FONTES',
      'SAUDADE: JOSÉ CLÉVIO DIAS CASALI',
    ]),
  ),

  cc(
    2009,
    'Janeiro 2009',
    g('ADMINISTRAÇÃO', [
      'PROF.: DJAIR CESÁRIO DE ARAÚJO',
      'FUNC.: AFONSO AUGUSTO TEIXEIRA DE FREITAS DE CARVALHO LIMA',
      'SAUDADE: AFONSO AUGUSTO TEIXEIRA DE FREITAS DE CARVALHO LIMA',
    ]),
    g('CIÊNCIAS CONTÁBEIS', [
      'PROF.: ROBSON ZUCOLOTTO',
      'FUNC.: SORAYA MACHADO FONTES',
      'SAUDADE: WALMER FARONI',
    ]),
  ),
  cc(
    2009,
    'Julho 2009',
    g('ADMINISTRAÇÃO', [
      'PROF. : GUSTAVO MELO SILVA',
      'FUNC. : LUIS CARLOS DE FREITAS',
      'SAUDADE: AFONSO AUGUSTO TEIXEIRA DE FREITAS DE CARVALHO LIMA',
    ]),
    g('CIÊNCIAS CONTÁBEIS', [
      'PROF. : ROBSON ZUCOLOTTO',
      'FUNC. : THIAGO DOS SANTOS',
      'SAUDADE: THIAGO DE MELO TEIXEIRA DA COSTA',
    ]),
  ),

  cc(
    2010,
    'Janeiro 2010',
    g('ADMINISTRAÇÃO', [
      'PROF.: GUSTAVO MELO SILVA',
      'FUNC.: SORAYA MACHADO FONTES',
      'SAUDADE: AFONSO AUGUSTO TEIXEIRA DE FREITAS DE CARVALHO LIMA',
    ]),
    g('CIÊNCIAS CONTÁBEIS', [
      'PROF. :SIMONE MARTINS',
      'FUNC. :LUIS CARLOS DE FREITAS',
      'SAUDADE: ROBSON ZUCCOLOTTO',
    ]),
  ),
  cc(
    2010,
    'Julho 2010',
    g('ADMINISTRAÇÃO', [
      'PROF. : ANTÔNIO DE FIGUEIREDO VIEIRA',
      'FUNC. : THIAGO DOS SANTOS',
      'SAUDADE: MAGNUS LUIS EMMENDOERFER',
    ]),
    g('CIÊNCIAS CONTÁBEIS', [
      'PROF. : SIMONE MARTINS',
      'FUNC. : SORAYA MACHADO FONTES',
      'SAUDADE: ALCINDO CIPRIANO ARGOLO MENDES',
    ]),
  ),

  cc(
    2011,
    '21.01.2011',
    g('ADMINISTRAÇÃO', [
      'AFONSO AUGUSTO TEIXEIRA DE FREITAS DE CARVALHO LIMA',
      'ANTÔNIO DE FIGUEIREDO VIEIRA',
      'THIAGO DOS SANTOS',
    ]),
    g('CIÊNCIAS CONTÁBEIS', [
      'SIMONE MARTINS',
      'WENDER FRAGA MIRANDA',
      'ANTÔNIO GOMES DA SILVA JÚNIOR',
    ]),
  ),
  cc(
    2011,
    '22.07.2011',
    g('ADMINISTRAÇÃO', [
      'TELMA REGINA DA COSTA GUIMARÃES BARBOSA',
      'ANTÔNIO DE FIGUEIREDO VIEIRA',
      'LUIZ CARLOS DE FREITAS',
    ]),
    g('CIÊNCIAS CONTÁBEIS', [
      'ALCINDO CIPRIANO ARGOLO MENDES',
      'SIMONE MARTINS',
      'ANTÔNIO GOMES DA SILVA JÚNIOR.',
    ]),
  ),

  cc(
    2012,
    '20.01.2012',
    g('ADMINISTRAÇÃO', [
      'ANTÔNIO DE FIGUEIREDO VIEIRA',
      'SORAYA MACHADO FONTES',
      'MAGNUS LUIS EMMENDOERFER',
    ]),
    g('CIÊNCIAS CONTÁBEIS', [
      'TAINÁ RODRIGUES GOMIDE SOUSA PINTO',
      'SORAYA MACHADO FONTES',
      'SIMONE MARTINS',
    ]),
  ),
  cc(
    2012,
    '23.11.2012',
    g('ADMINISTRAÇÃO', [
      'SUELY DE FÁTIMA RAMOS SILVEIRA',
      'SORAYA MACHADO FONTES',
      'ANTÔNIO DE FIGUEIREDO VIEIRA',
    ]),
    g('CIÊNCIAS CONTÁBEIS', [
      'TAINÁ RODRIGUES GOMIDE SOUZA PINTO',
      'SORAYA MACHADO FONTES',
      'SIMONE MARTINS',
    ]),
  ),

  cc(
    2013,
    '03.05.2013',
    g('ADMINISTRAÇÃO', [
      'AFONSO AUGUSTO TEIXEIRA DE FREITAS DE CARVALHO LIMA',
      'ANTÔNIO DE FIGUEIREDO VIEIRA',
      'SORAYA MACHADO FONTES',
    ]),
    g('CIÊNCIAS CONTÁBEIS', [
      'ALCINDO CIPRIANO ARGOLO MENDES',
      'SIMONE MARTINS',
      'THIAGO DOS SANTOS',
    ]),
  ),
  cc(
    2013,
    '27.09.2013',
    g('ADMINISTRAÇÃO', [
      'ÁGUIDA GARRETH FERRAZ ROCHA',
      'SUELY DE FÁTIMA RAMOS SILVEIRA',
      'THIAGO DOS SANTOS',
    ]),
    g('CIÊNCIAS CONTÁBEIS', [
      'WENDER FRAGA MIRANDA',
      'SIMONE MARTINS',
      'THIAGO DOS SANTOS',
    ]),
  ),

  cc(
    2014,
    '07.03.2014',
    g('ADMINISTRAÇÃO', [
      'TELMA REGINA DA COSTA GUIMARAES BARBOSA',
      'ANTONIO DE FIGUEIREDO VIEIRA',
      'THIAGO DOS SANTOS',
    ]),
    g('CIÊNCIAS CONTÁBEIS', [
      'TAINA RODRIGUES GOMIDE',
      'GISLAINE APARECIDA SANTANA SEDIYAMA',
      'SORAYA MACHADO FONTES',
    ]),
  ),
  cc(
    2014,
    '08.08.2014',
    g('ADMINISTRAÇÃO', [
      'ALAN FERREIRA DE FREITAS',
      'AFONSO AUGUSTO TEIXEIRA DE FREITAS  DE CARVALHO LIMA',
      'WELITON RODRIGUES',
    ]),
    g('CIÊNCIAS CONTÁBEIS', [
      'GISLAINE APARECIDA SANTANA SEDIYAMA',
      'TAINÁ RODRIGUES GOMIDE DE SOUZA PINTO',
      'LUIZ CARLOS DE FREITAS',
    ]),
  ),

  cc(
    2015,
    '23.01.2015',
    g('ADMINISTRAÇÃO', [
      'ALAN FERREIRA DE FREITAS',
      'AFONSO AUGUSTO TEIXEIRA DE FREITAS DE CARVALHO LIMA',
      'SORAYA MACHADO FONTES.',
    ]),
    g('CIÊNCIAS CONTÁBEIS', [
      'RODRIGO SILVA DINIZ LEROY',
      'ALCINDO CIPRIANO ARGOLO MENDES',
      'WELITON RODRIGUES',
    ]),
  ),
  cc(
    2015,
    '24.07.2015',
    g('ADMINISTRAÇÃO', [
      'THIAGO DE MELO TEIXEIRA DA COSTA',
      'AFONSO AUGUSTO TEIXEIRA DE FREITAS DE CARVALHO LIMA',
      'THIAGO DOS SANTOS',
    ]),
    g('CIÊNCIAS CONTÁBEIS', [
      'TAINÁ RODRIGUES GOMIDE',
      'MILTON ROMUALDO DIÓRIO',
      'THIAGO DOS SANTOS',
    ]),
  ),

  cc(
    2016,
    '22.01.2016',
    g('ADMINISTRAÇÃO', [
      'AFONSO AUGUSTO TEIXEIRA DE FREITAS DE CARVALHO LIMA',
      'SORAYA MACHADO FONTES',
      'ALAN FERREIRA DE FREITAS',
    ]),
    g('CIÊNCIAS CONTÁBEIS', [
      'GISLAINE APARECIDA DA SILVA SANTANA',
      'WELITON RODRIGUES',
    ]),
  ),
  cc(
    2016,
    '29.07.2016',
    g('ADMINISTRAÇÃO', [
      'AFONSO AUGUSTO TEIXEIRA DE FREITAS DE CARVALHO LIMA E',
      'LUÍS CARLOS DE FREITAS',
    ]),
    g('CIÊNCIAS CONTÁBEIS', [
      'ALCINDO CIPRIANO ARGOLO MENDES',
      'WELITON RODRIGUES',
    ]),
  ),

  cc(
    2017,
    '20.01.2017',
    g('ADMINISTRAÇÃO', ['ALAN FERREIRA DE FREITAS', 'LUÍS CARLOS DE FREITAS']),
    g('CIÊNCIAS CONTÁBEIS', ['GISLAINE APARECIDA SANTANA SEDIYAMA', 'WELITON RODRIGUES']),
  ),
  cc(
    2017,
    '28.07.2017',
    g('ADMINISTRAÇÃO', [
      'AFONSO AUGUSTO TEIXEIRA DE FREITAS DE CARVALHO LIMA',
      'WELITON RODRIGUES',
    ]),
    g('CIÊNCIAS CONTÁBEIS', ['ALCINDO CIPRIANO ARGOLO MENDES', 'WELITON RODRIGUES']),
  ),

  cc(
    2018,
    '19.01.2018',
    g('ADMINISTRAÇÃO', ['ALAN FERREIRA DE FREITAS', 'WELITON RODRIGUES']),
    g('CIÊNCIAS CONTÁBEIS', ['SIMONE MARTINS', 'WELITON RODRIGUES']),
  ),
  cc(
    2018,
    '27.07.2018',
    g('ADMINISTRAÇÃO', ['JOSIEL LOPES VALADARES', 'WELITON RODRIGUES']),
    g('CIÊNCIAS CONTÁBEIS', ['GUSTAVO JOSÉ PÁDULA DE SOUZA', 'SORAYA MACHADO FONTES']),
  ),

  cc(
    2019,
    '18.01.2019',
    g('ADMINISTRAÇÃO', [
      'AFONSO AUGUSTO TEIXEIRA DE FREITAS DE CARVALHO LIMA',
      'WELITON RODRIGUES',
    ]),
    g('CIÊNCIAS CONTÁBEIS', ['SIMONE MARTINS', 'WELITON RODRIGUES']),
  ),
  cc(
    2019,
    '26.07.2019',
    g('ADMINISTRAÇÃO', ['WESCLEY SILVA XAVIER', 'WELITON RODRIGUES']),
    g('CIÊNCIAS CONTÁBEIS', ['ANTÔNIO CARLOS BRUNOZI JÚNIOR', 'WELITON RODRIGUES']),
  ),

  cc(
    2020,
    '17.01.2020',
    g('ADMINISTRAÇÃO', ['FERNANDA MARIA DE ALMEIDA', 'WELITON RODRIGUES']),
    g('CIÊNCIAS CONTÁBEIS', ['ANTÔNIO CARLOS BRUNOZI JÚNIOR', 'WELITON RODRIGUES']),
  ),

  cc(
    2023,
    '20.01.2023',
    g('ADMINISTRAÇÃO', ['LEANDRO RIVELLI TEIXEIRA NOGUEIRA', 'WELINTON RODRIGUES']),
    g('CIÊNCIAS CONTÁBEIS', ['ANTÔNIO CARLOS BRUNOZI JÚNIOR', 'WELITON RODRIGUES']),
  ),
  cc(
    2023,
    '04.08.2023',
    g('ADMINISTRAÇÃO', ['LAYON CARLOS CEZAR', 'JOSIAS REIS DE ARRUDA']),
    g('CIÊNCIAS CONTÁBEIS', ['ANTÔNIO CARLOS BRUNOZI JÚNIOR', 'WELITON RODRIGUES']),
  ),

  cc(
    2024,
    '19.01.2024',
    g('ADMINISTRAÇÃO', ['ANA CLAUDIA AZEVEDO', 'MARCELO ANTONIO LOPES']),
    g('CIÊNCIAS CONTÁBEIS', ['WENDER FRAGA MIRANDA', 'JOSÉ ROMEU SANTANA RODRIGUES']),
  ),
  cc(
    2024,
    '27.09.2024',
    g('ADMINISTRAÇÃO', ['ANA CLÁUDIA AZEVEDO', 'MARCELO ANTÔNIO LOPES']),
  ),

  cc(
    2025,
    '14.02.2025',
    g('ADMINISTRAÇÃO', ['LAYON CARLOS CEZAR', 'MARCELO ANTONIO LOPES']),
    g('CIÊNCIAS CONTÁBEIS', ['ANTÔNIO CARLOS BRUNOZI JÚNIOR', 'JOSÉ ROMEU SANTANA RODRIGUES']),
  ),
  cc(
    2025,
    '25.07.2025',
    g('ADMINISTRAÇÃO', ['LEANDRO RIVELLI TEIXEIRA NOGUEIRA', 'JOSÉ ROMEU SANTANA RODRIGUES']),
  ),

  cc(
    2026,
    '23.01.2026',
    g('ADMINISTRAÇÃO', ['JOSIEL LOPES VALADARES', 'JOSÉ ROMEU SANTANA RODRIGUES']),
    g('CIÊNCIAS CONTÁBEIS', ['RONAN PEREIRA CAPOBIANGO', 'JOSÉ ROMEU SANTANA RODRIGUES']),
  ),
  cc(
    2026,
    '07.08.2026',
    g('ADMINISTRAÇÃO', ['FERNANDA CRISTINA DA SILVA', 'MARCELO ANTÔNIO LOPES']),
    g('CIÊNCIAS CONTÁBEIS', ['ANTÔNIO CARLOS BRUNOZI JÚNIOR', 'SORAYA MACHADO FONTES']),
  ),
];

export const colacoesGrau: ColacaoGrau[] = colacoes.map((item, index) => ({
  ...item,
  id: `colacao-${index + 1}`,
}));
