/**
 * Validação do conteúdo enviado pelo painel, antes de gravar.
 * Tudo que chega do navegador é conferido aqui: tipos, tamanhos e links.
 */
import { ANO_INICIAL, type Colecoes, type NomeColecao } from '../../src/content/schema';

export class ErroValidacao extends Error {}

type Entrada = Record<string, unknown>;

const texto = (valor: unknown, campo: string, { obrigatorio = false, max = 300 } = {}): string => {
  if (valor !== undefined && valor !== null && typeof valor !== 'string') {
    throw new ErroValidacao(`O campo "${campo}" é inválido.`);
  }
  const limpo = typeof valor === 'string' ? valor.trim() : '';
  if (obrigatorio && !limpo) throw new ErroValidacao(`Preencha o campo "${campo}".`);
  if (limpo.length > max) throw new ErroValidacao(`O campo "${campo}" passou do limite de ${max} caracteres.`);
  return limpo;
};

const linkExterno = (valor: unknown, campo: string): string => {
  const limpo = texto(valor, campo, { max: 2000 });
  if (limpo && !/^https?:\/\/[^\s]+$/i.test(limpo)) {
    throw new ErroValidacao(`O link em "${campo}" precisa começar com http:// ou https://`);
  }
  return limpo;
};

export const PADRAO_URL_FOTO = /^\/uploads\/[a-z0-9-]+(\/[a-z0-9-]+)*\.(jpg|png|webp)$/;

const urlFoto = (valor: unknown, campo: string, obrigatorio: boolean): string => {
  const limpo = texto(valor, campo, { obrigatorio, max: 300 });
  if (limpo && !PADRAO_URL_FOTO.test(limpo)) throw new ErroValidacao(`A foto em "${campo}" é inválida. Envie de novo.`);
  return limpo;
};

const inteiro = (valor: unknown, campo: string, min: number, max: number): number => {
  const numero = typeof valor === 'string' ? Number(valor) : valor;
  if (typeof numero !== 'number' || !Number.isInteger(numero) || numero < min || numero > max) {
    throw new ErroValidacao(`Informe um ano válido em "${campo}" (entre ${min} e ${max}).`);
  }
  return numero;
};

const lista = <T>(valor: unknown, campo: string, max: number, item: (v: unknown, i: number) => T): T[] => {
  if (valor === undefined || valor === null) return [];
  if (!Array.isArray(valor)) throw new ErroValidacao(`O campo "${campo}" é inválido.`);
  if (valor.length > max) throw new ErroValidacao(`"${campo}" aceita no máximo ${max} itens.`);
  return valor.map(item);
};

const linhas = (valor: unknown, campo: string, max = 60) =>
  lista(valor, campo, max, v => texto(v, campo, { max: 400 })).filter(Boolean);

const objeto = (valor: unknown): Entrada => (valor && typeof valor === 'object' ? (valor as Entrada) : {});

const anoMaximo = () => new Date().getFullYear() + 1;

type SemMeta<T> = Omit<T, 'id' | '_meta'>;

interface DefinicaoColecao<N extends NomeColecao> {
  /** Nome no singular, para mensagens e commits. */
  rotulo: string;
  validar: (entrada: Entrada) => SemMeta<Colecoes[N]>;
  fotos: (item: SemMeta<Colecoes[N]>) => string[];
  titulo: (item: SemMeta<Colecoes[N]>) => string;
}

type Definicoes = { [N in NomeColecao]: DefinicaoColecao<N> };

const pessoaComFoto = { fotos: (item: { foto: string }) => (item.foto ? [item.foto] : []), titulo: (item: { nome: string }) => item.nome };

export const COLECOES: Definicoes = {
  noticias: {
    rotulo: 'notícia',
    validar: e => ({
      year: inteiro(e.year, 'Ano', ANO_INICIAL, anoMaximo()),
      tag: '',
      title: texto(e.title, 'Título', { obrigatorio: true, max: 250 }),
      desc: texto(e.desc, 'Texto da notícia', { obrigatorio: true, max: 10000 }),
      photos: lista(e.photos, 'Fotos', 30, v => {
        const f = objeto(v);
        return { url: urlFoto(f.url, 'Fotos', true), caption: texto(f.caption, 'Legenda da foto', { max: 400 }) };
      }),
      externalLinks: lista(e.externalLinks, 'Links', 20, v => {
        const l = objeto(v);
        return {
          label: texto(l.label, 'Nome do link', { obrigatorio: true, max: 150 }),
          url: linkExterno(l.url, 'Endereço do link') || (() => { throw new ErroValidacao('Preencha o endereço do link.'); })(),
        };
      }),
      articleUrl: linkExterno(e.articleUrl, 'Link da matéria'),
    }),
    fotos: item => item.photos.map(f => f.url),
    titulo: item => item.title,
  },

  galeria: {
    rotulo: 'foto da galeria',
    validar: e => ({
      url: urlFoto(e.url, 'Foto', true),
      title: texto(e.title, 'Título', { obrigatorio: true, max: 200 }),
      caption: texto(e.caption, 'Legenda', { max: 600 }),
      colorida: e.colorida !== false,
    }),
    fotos: item => [item.url],
    titulo: item => item.title,
  },

  chefes: {
    rotulo: 'chefia',
    validar: e => ({
      nome: texto(e.nome, 'Nome', { obrigatorio: true, max: 200 }),
      periodoInicio: texto(e.periodoInicio, 'Início', { obrigatorio: true, max: 40 }),
      periodoFim: texto(e.periodoFim, 'Fim', { max: 40 }) || null,
      cargo: texto(e.cargo, 'Cargo', { max: 150 }),
      foto: urlFoto(e.foto, 'Foto', false),
      observacoes: texto(e.observacoes, 'Observações', { max: 2000 }),
    }),
    ...pessoaComFoto,
  },

  professoresTitulares: {
    rotulo: 'professor(a) titular',
    validar: e => ({
      nome: texto(e.nome, 'Nome', { obrigatorio: true, max: 200 }),
      periodoInicio: inteiro(e.periodoInicio, 'Ano em que se tornou titular', ANO_INICIAL, anoMaximo()),
      cargo: texto(e.cargo, 'Cargo', { max: 150 }),
      foto: urlFoto(e.foto, 'Foto', false),
      observacoes: texto(e.observacoes, 'Observações', { max: 2000 }),
    }),
    ...pessoaComFoto,
  },

  professoresAtuais: {
    rotulo: 'professor(a)',
    validar: e => ({
      nome: texto(e.nome, 'Nome', { obrigatorio: true, max: 200 }),
      email: texto(e.email, 'E-mail', { max: 200 }),
      telefone: texto(e.telefone, 'Telefone', { max: 60 }),
      formacao: linhas(e.formacao, 'Formação', 20),
      foto: urlFoto(e.foto, 'Foto', false),
      observacoes: texto(e.observacoes, 'Observações', { max: 2000 }),
    }),
    ...pessoaComFoto,
  },

  tecnicos: {
    rotulo: 'técnico(a)',
    validar: e => ({
      nome: texto(e.nome, 'Nome', { obrigatorio: true, max: 200 }),
      email: texto(e.email, 'E-mail', { max: 200 }),
      telefone: texto(e.telefone, 'Telefone', { max: 60 }),
      foto: urlFoto(e.foto, 'Foto', false),
    }),
    ...pessoaComFoto,
  },

  homenageados: {
    rotulo: 'colação de grau',
    validar: e => {
      const grupos = lista(e.grupos, 'Homenageados', 6, v => {
        const g = objeto(v);
        const curso = texto(g.curso, 'Curso', { max: 120 });
        return { ...(curso ? { curso } : {}), linhas: linhas(g.linhas, 'Homenageados', 80) };
      }).filter(g => g.linhas.length > 0);
      if (grupos.length === 0) throw new ErroValidacao('Informe pelo menos um homenageado.');
      const nota = texto(e.nota, 'Observação', { max: 1000 });
      return {
        ano: inteiro(e.ano, 'Ano', ANO_INICIAL, anoMaximo()),
        data: texto(e.data, 'Data', { obrigatorio: true, max: 80 }),
        grupos,
        ...(nota ? { nota } : {}),
      };
    },
    fotos: () => [],
    titulo: item => `Colação de ${item.data}`,
  },
};

export const ehColecao = (nome: unknown): nome is NomeColecao =>
  typeof nome === 'string' && Object.prototype.hasOwnProperty.call(COLECOES, nome);
