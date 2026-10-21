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

export const memorialData: MemorialData = (() => {
  const dados: MemorialData = {};
  for (const [ano, info] of Object.entries(memorialOriginal)) {
    dados[Number(ano)] = { ...info, events: [...info.events] };
  }
  for (const { year, ...evento } of noticiasPainel as NoticiaItem[]) {
    if (!dados[year]) dados[year] = { events: [], photos: [] };
    dados[year].events.push(evento);
  }
  return dados;
})();

export const allGalleryPhotos = [...galeriaOriginal, ...(galeriaPainel as GaleriaItem[])];

export const chefesDepartamento = [...chefesOriginais, ...(chefesPainel as ChefeItem[])];

export const professoresTitulares = [...titularesOriginais, ...(titularesPainel as ProfessorTitularItem[])]
  .sort((a, b) => a.periodoInicio - b.periodoInicio);

export const professoresAtuais = [...atuaisOriginais, ...(atuaisPainel as ProfessorAtualItem[])].sort(porNome);

export const tecnicosAtuais = [...tecnicosOriginais, ...(tecnicosPainel as TecnicoItem[])].sort(porNome);

export const colacoesGrau = [...colacoesOriginais, ...(homenageadosPainel as ColacaoItem[])]
  .sort((a, b) => a.ano - b.ano);
