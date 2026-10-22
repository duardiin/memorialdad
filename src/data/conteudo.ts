/**
 * Junta os dados originais (arquivos .ts desta pasta) com o conteúdo
 * adicionado pelo Painel Administrativo (src/content/*.json).
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
import type {
  ChefeItem,
  ColacaoItem,
  GaleriaItem,
  NoticiaItem,
  ProfessorAtualItem,
  ProfessorTitularItem,
  TecnicoItem,
} from '../content/schema';

const porNome = (a: { nome: string }, b: { nome: string }) => a.nome.localeCompare(b.nome, 'pt-BR');

export const colacoesGrau = [...colacoesOriginais, ...(homenageadosPainel as ColacaoItem[])]
  .sort((a, b) => a.ano - b.ano);

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

export const memorialData: MemorialData = (() => {
  const dados: MemorialData = {};
  const doAno = (ano: number) => (dados[ano] ??= { events: [], photos: [] });
  for (const [ano, info] of Object.entries(memorialOriginal)) {
    dados[Number(ano)] = { ...info, events: [...info.events] };
  }
  for (const colacao of homenageadosPainel as ColacaoItem[]) {
    doAno(colacao.ano).events.push(noticiaDaColacao(colacao));
  }
  for (const { year, ...evento } of noticiasPainel as NoticiaItem[]) {
    doAno(year).events.push(evento);
  }
  return dados;
})();

export const allGalleryPhotos = [...galeriaOriginal, ...(galeriaPainel as GaleriaItem[])];

export const chefesDepartamento = [...chefesOriginais, ...(chefesPainel as ChefeItem[])];

export const professoresTitulares = [...titularesOriginais, ...(titularesPainel as ProfessorTitularItem[])]
  .sort((a, b) => a.periodoInicio - b.periodoInicio);

export const professoresAtuais = [...atuaisOriginais, ...(atuaisPainel as ProfessorAtualItem[])].sort(porNome);

export const tecnicosAtuais = [...tecnicosOriginais, ...(tecnicosPainel as TecnicoItem[])].sort(porNome);
