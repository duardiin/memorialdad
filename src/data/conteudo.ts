/**
 * Junta os dados originais (arquivos .ts desta pasta) com o conteúdo
 * adicionado pelo Painel Administrativo.
 *
 * - Versão da Vercel: o conteúdo do painel vem de src/content/*.json, embutido no site.
 * - Versão da DTI (npm run build:dti): o conteúdo do painel fica no servidor da UFV e é
 *   buscado em api/admin.php quando o site abre (ver carregarConteudoDoServidor).
 *
 * Os arquivos originais não são alterados: o site importa tudo daqui.
 */
import { MemorialData } from '../types';
import { memorialData as memorialOriginal } from './memorialData';
import { allGalleryPhotos as galeriaOriginal } from './allGalleryPhotos';
import { chefesDepartamento as chefesOriginais } from './chefesData';
import { professoresTitulares as titularesOriginais } from './professoresTitularesData';
import { professoresAtuais as atuaisOriginais } from './professoresAtuaisData';
import { tecnicosAtuais as tecnicosOriginais } from './tecnicosAtuaisData';
import { colacoesGrau as colacoesOriginais } from './homenageadosData';

import noticiasPainel from '../content/noticias.json';
import galeriaPainel from '../content/galeria.json';
import chefesPainel from '../content/chefes.json';
import titularesPainel from '../content/professoresTitulares.json';
import atuaisPainel from '../content/professoresAtuais.json';
import tecnicosPainel from '../content/tecnicos.json';
import homenageadosPainel from '../content/homenageados.json';
import {
  NOMES_COLECOES,
  type ChefeItem,
  type ColacaoItem,
  type Colecoes,
  type GaleriaItem,
  type NoticiaItem,
  type ProfessorAtualItem,
  type ProfessorTitularItem,
  type TecnicoItem,
} from '../content/schema';

type ConteudoPainel = { [N in keyof Colecoes]: Colecoes[N][] };

const porNome = (a: { nome: string }, b: { nome: string }) => a.nome.localeCompare(b.nome, 'pt-BR');

/**
 * As colações originais já têm sua notícia de homenagens escrita em memorialData.ts.
 * As cadastradas pelo painel ganham a notícia automaticamente, no mesmo formato.
 */
const formatarDataColacao = (data: string) =>
  data
    .replace(/^(\d{2})\.(\d{2})\.(\d{4})$/, '$1/$2/$3') // 21.01.2011 -> 21/01/2011
    .replace(/^([A-Za-zÀ-ú]+) (\d{4})$/, '$1 de $2'); // Janeiro 2007 -> Janeiro de 2007

const noticiaDaColacao = (colacao: ColacaoItem) => ({
  tag: 'homenagens',
  title: `Homenagens da Colação de Grau de ${formatarDataColacao(colacao.data)}`,
  desc: [
    colacao.grupos.map(g => [g.curso, ...g.linhas].filter(Boolean).join('\n')).join('\n\n'),
    colacao.nota,
  ]
    .filter(Boolean)
    .join('\n\n'),
  photos: [],
  externalLinks: [],
  articleUrl: '',
});

const montarMemorial = (painel: ConteudoPainel): MemorialData => {
  const dados: MemorialData = {};
  const doAno = (ano: number) => (dados[ano] ??= { events: [], photos: [] });
  for (const [ano, info] of Object.entries(memorialOriginal)) {
    dados[Number(ano)] = { ...info, events: [...info.events] };
  }
  for (const colacao of painel.homenageados) {
    doAno(colacao.ano).events.push(noticiaDaColacao(colacao));
  }
  for (const { year, ...evento } of painel.noticias) {
    doAno(year).events.push(evento);
  }
  return dados;
};

// Exportados como `let`: quem importa sempre enxerga a versão mais recente (ver montar).
export let colacoesGrau: ColacaoItem[] = [];
export let memorialData: MemorialData = {};
export let allGalleryPhotos: (typeof galeriaOriginal[number] | GaleriaItem)[] = [];
export let chefesDepartamento: (typeof chefesOriginais[number] | ChefeItem)[] = [];
export let professoresTitulares: (typeof titularesOriginais[number] | ProfessorTitularItem)[] = [];
export let professoresAtuais: (typeof atuaisOriginais[number] | ProfessorAtualItem)[] = [];
export let tecnicosAtuais: (typeof tecnicosOriginais[number] | TecnicoItem)[] = [];

const montar = (painel: ConteudoPainel) => {
  colacoesGrau = [...colacoesOriginais, ...painel.homenageados].sort((a, b) => a.ano - b.ano);
  memorialData = montarMemorial(painel);
  allGalleryPhotos = [...galeriaOriginal, ...painel.galeria];
  chefesDepartamento = [...chefesOriginais, ...painel.chefes];
  professoresTitulares = [...titularesOriginais, ...painel.professoresTitulares].sort((a, b) => a.periodoInicio - b.periodoInicio);
  professoresAtuais = [...atuaisOriginais, ...painel.professoresAtuais].sort(porNome);
  tecnicosAtuais = [...tecnicosOriginais, ...painel.tecnicos].sort(porNome);
};

const conteudoEmbutido: ConteudoPainel = {
  noticias: noticiasPainel as NoticiaItem[],
  galeria: galeriaPainel as GaleriaItem[],
  chefes: chefesPainel as ChefeItem[],
  professoresTitulares: titularesPainel as ProfessorTitularItem[],
  professoresAtuais: atuaisPainel as ProfessorAtualItem[],
  tecnicos: tecnicosPainel as TecnicoItem[],
  homenageados: homenageadosPainel as ColacaoItem[],
};

montar(conteudoEmbutido);

/**
 * Na versão da DTI, busca no servidor o conteúdo adicionado pelo painel.
 * Deve terminar antes de o site ser desenhado (ver main.tsx). Se o servidor
 * não responder, o site abre normalmente com o conteúdo original.
 */
export const carregarConteudoDoServidor = async () => {
  if (import.meta.env.MODE !== 'dti') return;
  const controle = new AbortController();
  const limite = setTimeout(() => controle.abort(), 5000);
  try {
    const resposta = await fetch('/api/admin.php?acao=publico', { cache: 'no-cache', signal: controle.signal });
    if (!resposta.ok) return;
    const recebido = await resposta.json();
    const painel = { ...conteudoEmbutido } as Record<string, unknown[]>;
    for (const nome of NOMES_COLECOES) {
      if (Array.isArray(recebido?.[nome])) painel[nome] = recebido[nome];
    }
    montar(painel as ConteudoPainel);
  } catch {
    // sem conexão com o servidor: segue com o conteúdo original
  } finally {
    clearTimeout(limite);
  }
};
