export interface TecnicoAtual {
  id: string;
  nome: string;
  email: string;
  telefone?: string;
  foto?: string;
}

export const tecnicosAtuais: TecnicoAtual[] = [
  {
    id: 'jansen-cardoso-pereira',
    nome: 'Jansen Cardoso Pereira',
    email: 'jansen.cardoso@ufv.br',
    telefone: '(31) 3612-7006',
    foto: '/Jansen.jpeg'
  },
  {
    id: 'luiza-amelia-de-arruda-ladeira',
    nome: 'Luiza Amelia de Arruda Ladeira',
    email: 'laaladeira@ufv.br',
    telefone: '(31) 3612-7005',
    foto: '/Luiza.png'
  },
  {
    id: 'marcelo-antonio-lopes',
    nome: 'Marcelo Antônio Lopes',
    email: 'malopes@ufv.br',
    telefone: '(31) 3612-7002',
    foto: '/Marcelo.png'
  },
  {
    id: 'paulo-sergio-gregorio',
    nome: 'Paulo Sérgio Gregório',
    email: 'psergio@ufv.br',
    telefone: '(31) 3612-7002',
    foto: '/Paulinho.png'
  },
  {
    id: 'soraya-machado-fontes',
    nome: 'Soraya Machado Fontes',
    email: 'soramafo@ufv.br',
    telefone: '(31) 3612-7003',
    foto: '/Soraya.png'
  },
  {
    id: 'ykaru-gomes-wagner',
    nome: 'Ykaru Gomes Wagner',
    email: 'ykaru.wagner@ufv.br',
    foto: '/Ykaru.png'
  },
];
