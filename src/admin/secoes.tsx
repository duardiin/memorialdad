/**
 * Cada tipo de conteúdo que o painel edita: textos de ajuda, item em branco,
 * resumo para a lista e o formulário.
 */
import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { ANO_INICIAL, type Colecoes, type NomeColecao } from '../content/schema';
import type { ItemNovo } from './api';
import { AreaTexto, Botao, Entrada, FotoUnica, ListaFotos, ListaLinks, SeletorAno } from './componentes';

export interface Secao<N extends NomeColecao> {
  colecao: N;
  titulo: string;
  singular: string;
  descricao: string;
  novo: () => ItemNovo<N>;
  resumo: (item: Colecoes[N]) => { titulo: string; detalhe: string; foto?: string };
  ordenar: (a: Colecoes[N], b: Colecoes[N]) => number;
  Formulario: React.FC<{ item: ItemNovo<N>; mudar: (parcial: Partial<ItemNovo<N>>) => void }>;
}

const anoAtual = () => new Date().getFullYear();
const maisRecentes = (a: { _meta?: { criadoEm: string } }, b: { _meta?: { criadoEm: string } }) =>
  (b._meta?.criadoEm || '').localeCompare(a._meta?.criadoEm || '');

/** Converte "uma linha por item" em lista e vice-versa. */
const paraLinhas = (lista: string[]) => lista.join('\n');
const deLinhas = (texto: string) => texto.split('\n');

// ---------------------------------------------------------------------------

const noticias: Secao<'noticias'> = {
  colecao: 'noticias',
  titulo: 'Notícias',
  singular: 'notícia',
  descricao: 'Fatos e acontecimentos da linha do tempo. Cada notícia aparece no ano escolhido, junto com as já existentes.',
  novo: () => ({ year: anoAtual(), tag: '', title: '', desc: '', photos: [], externalLinks: [], articleUrl: '' }),
  resumo: n => ({ titulo: n.title, detalhe: `Ano ${n.year} · ${n.photos.length} foto(s)`, foto: n.photos[0]?.url }),
  ordenar: (a, b) => b.year - a.year || maisRecentes(a, b),
  Formulario: ({ item, mudar }) => (
    <>
      <SeletorAno rotulo="Ano" de={ANO_INICIAL} valor={item.year} aoMudar={year => mudar({ year })} ajuda="Em qual ano da linha do tempo a notícia vai aparecer." />
      <Entrada rotulo="Título" required valor={item.title} aoMudar={title => mudar({ title })} placeholder="Ex.: Aprovada a criação do curso de Ciências Contábeis" maxLength={250} />
      <AreaTexto
        rotulo="Texto da notícia"
        required
        rows={8}
        valor={item.desc}
        aoMudar={desc => mudar({ desc })}
        ajuda="Se tiver a fonte (ata, edição do jornal), coloque no final do texto. Ex.: (20out. n.1074)."
      />
      <ListaFotos colecao="noticias" fotos={item.photos} aoMudar={photos => mudar({ photos })} />
      <ListaLinks links={item.externalLinks} aoMudar={externalLinks => mudar({ externalLinks })} />
      <Entrada
        rotulo="Link da matéria completa"
        valor={item.articleUrl}
        aoMudar={articleUrl => mudar({ articleUrl })}
        placeholder="https://atom.ufv.br/…"
        inputMode="url"
        ajuda="Aparece como botão para ler a matéria original."
      />
    </>
  ),
};

const galeria: Secao<'galeria'> = {
  colecao: 'galeria',
  titulo: 'Galeria de fotos',
  singular: 'foto',
  descricao: 'Fotos da galeria geral do memorial (aba "Fotos"). As fotos coloridas aparecem antes das preto e branco.',
  novo: () => ({ url: '', title: '', caption: '', colorida: true }),
  resumo: f => ({ titulo: f.title, detalhe: f.colorida ? 'Colorida' : 'Preto e branco', foto: f.url }),
  ordenar: maisRecentes,
  Formulario: ({ item, mudar }) => (
    <>
      <FotoUnica colecao="galeria" rotulo="Foto" obrigatorio url={item.url} aoMudar={url => mudar({ url })} />
      <Entrada rotulo="Título" required valor={item.title} aoMudar={title => mudar({ title })} placeholder="Ex.: Formandos de Administração 2026" maxLength={200} />
      <AreaTexto rotulo="Legenda" rows={3} valor={item.caption} aoMudar={caption => mudar({ caption })} placeholder="Quem aparece, onde e quando." />
      <fieldset className="space-y-2">
        <legend className="text-sm font-semibold text-ufv-gray">A foto é…</legend>
        <div className="flex flex-wrap gap-2">
          {[
            { valor: true, rotulo: 'Colorida' },
            { valor: false, rotulo: 'Preto e branco / antiga' },
          ].map(opcao => (
            <label
              key={String(opcao.valor)}
              className={`cursor-pointer rounded-lg border px-4 py-2.5 text-sm font-medium ${item.colorida === opcao.valor ? 'border-ufv-green bg-ufv-green text-white' : 'border-ufv-border bg-white text-ufv-gray hover:bg-ufv-cream'}`}
            >
              <input type="radio" name="colorida" className="sr-only" checked={item.colorida === opcao.valor} onChange={() => mudar({ colorida: opcao.valor })} />
              {opcao.rotulo}
            </label>
          ))}
        </div>
      </fieldset>
    </>
  ),
};

const chefes: Secao<'chefes'> = {
  colecao: 'chefes',
  titulo: 'Chefias',
  singular: 'chefia',
  descricao: 'Chefes do departamento. Aparecem no fim da lista de "Chefias", depois dos já existentes.',
  novo: () => ({ nome: '', periodoInicio: '', periodoFim: '', cargo: '', foto: '', observacoes: '' }),
  resumo: c => ({ titulo: c.nome, detalhe: `${c.periodoInicio} – ${c.periodoFim || 'atual'}`, foto: c.foto || undefined }),
  ordenar: maisRecentes,
  Formulario: ({ item, mudar }) => (
    <>
      <Entrada rotulo="Nome" required valor={item.nome} aoMudar={nome => mudar({ nome })} maxLength={200} />
      <div className="grid sm:grid-cols-2 gap-4">
        <Entrada rotulo="Início da chefia" required valor={item.periodoInicio} aoMudar={periodoInicio => mudar({ periodoInicio })} placeholder="Ex.: 15/12/2024" />
        <Entrada rotulo="Fim da chefia" valor={item.periodoFim ?? ''} aoMudar={periodoFim => mudar({ periodoFim })} placeholder="Ex.: 15/12/2028" ajuda="Deixe em branco se for a chefia atual." />
      </div>
      <Entrada rotulo="Cargo" valor={item.cargo} aoMudar={cargo => mudar({ cargo })} placeholder="Chefe do Departamento" ajuda='Se ficar em branco, aparece "Chefe do Departamento".' />
      <FotoUnica colecao="chefes" rotulo="Foto" url={item.foto} aoMudar={foto => mudar({ foto })} />
      <AreaTexto rotulo="Observações" valor={item.observacoes} aoMudar={observacoes => mudar({ observacoes })} placeholder="Destaques da gestão." />
    </>
  ),
};

const professoresTitulares: Secao<'professoresTitulares'> = {
  colecao: 'professoresTitulares',
  titulo: 'Professores titulares',
  singular: 'professor(a) titular',
  descricao: 'Professores que chegaram à classe de Titular. A lista do site é ordenada pelo ano.',
  novo: () => ({ nome: '', periodoInicio: anoAtual(), cargo: '', foto: '', observacoes: '' }),
  resumo: p => ({ titulo: p.nome, detalhe: `Titular desde ${p.periodoInicio}`, foto: p.foto || undefined }),
  ordenar: maisRecentes,
  Formulario: ({ item, mudar }) => (
    <>
      <Entrada rotulo="Nome" required valor={item.nome} aoMudar={nome => mudar({ nome })} maxLength={200} />
      <SeletorAno rotulo="Ano em que se tornou titular" de={ANO_INICIAL} valor={item.periodoInicio} aoMudar={periodoInicio => mudar({ periodoInicio })} />
      <Entrada rotulo="Cargo" valor={item.cargo} aoMudar={cargo => mudar({ cargo })} placeholder="Ex.: Professora Titular" />
      <FotoUnica colecao="professoresTitulares" rotulo="Foto" url={item.foto} aoMudar={foto => mudar({ foto })} />
      <AreaTexto rotulo="Observações" valor={item.observacoes} aoMudar={observacoes => mudar({ observacoes })} />
    </>
  ),
};

const professoresAtuais: Secao<'professoresAtuais'> = {
  colecao: 'professoresAtuais',
  titulo: 'Professores atuais',
  singular: 'professor(a)',
  descricao: 'Professores em atividade no departamento. A lista do site é ordenada pelo nome.',
  novo: () => ({ nome: '', email: '', telefone: '', formacao: [], foto: '', observacoes: '' }),
  resumo: p => ({ titulo: p.nome, detalhe: p.email || 'Sem e-mail', foto: p.foto || undefined }),
  ordenar: maisRecentes,
  Formulario: ({ item, mudar }) => (
    <>
      <Entrada rotulo="Nome" required valor={item.nome} aoMudar={nome => mudar({ nome })} maxLength={200} />
      <div className="grid sm:grid-cols-2 gap-4">
        <Entrada rotulo="E-mail" type="email" valor={item.email} aoMudar={email => mudar({ email })} placeholder="nome@ufv.br" />
        <Entrada rotulo="Telefone" valor={item.telefone} aoMudar={telefone => mudar({ telefone })} placeholder="(31) 3612-7000" />
      </div>
      <AreaTexto
        rotulo="Formação"
        rows={4}
        valor={paraLinhas(item.formacao)}
        aoMudar={texto => mudar({ formacao: deLinhas(texto) })}
        placeholder={'Superior em Administração, 2008, UFV\nM.S. Administração, 2011, UFV\nD.S. Administração, 2017, USP'}
        ajuda="Uma formação por linha."
      />
      <FotoUnica colecao="professoresAtuais" rotulo="Foto" url={item.foto} aoMudar={foto => mudar({ foto })} />
    </>
  ),
};

const tecnicos: Secao<'tecnicos'> = {
  colecao: 'tecnicos',
  titulo: 'Técnicos administrativos',
  singular: 'técnico(a)',
  descricao: 'Técnicos administrativos em atividade. A lista do site é ordenada pelo nome.',
  novo: () => ({ nome: '', email: '', telefone: '', foto: '' }),
  resumo: t => ({ titulo: t.nome, detalhe: t.email || 'Sem e-mail', foto: t.foto || undefined }),
  ordenar: maisRecentes,
  Formulario: ({ item, mudar }) => (
    <>
      <Entrada rotulo="Nome" required valor={item.nome} aoMudar={nome => mudar({ nome })} maxLength={200} />
      <div className="grid sm:grid-cols-2 gap-4">
        <Entrada rotulo="E-mail" type="email" valor={item.email} aoMudar={email => mudar({ email })} placeholder="nome@ufv.br" />
        <Entrada rotulo="Telefone" valor={item.telefone} aoMudar={telefone => mudar({ telefone })} placeholder="(31) 3612-7000" />
      </div>
      <FotoUnica colecao="tecnicos" rotulo="Foto" url={item.foto} aoMudar={foto => mudar({ foto })} />
    </>
  ),
};

const homenageados: Secao<'homenageados'> = {
  colecao: 'homenageados',
  titulo: 'Homenageados',
  singular: 'colação de grau',
  descricao: 'Profissionais homenageados em cada colação de grau (página "Profissionais Homenageados").',
  novo: () => ({ ano: anoAtual(), data: '', grupos: [{ curso: '', linhas: [] }], nota: '' }),
  resumo: c => ({
    titulo: `Colação de ${c.data}`,
    detalhe: `${c.grupos.reduce((total, g) => total + g.linhas.length, 0)} homenageado(s)`,
  }),
  ordenar: (a, b) => b.ano - a.ano || maisRecentes(a, b),
  Formulario: ({ item, mudar }) => {
    const mudarGrupo = (i: number, parcial: Partial<(typeof item.grupos)[number]>) =>
      mudar({ grupos: item.grupos.map((g, j) => (j === i ? { ...g, ...parcial } : g)) });
    return (
      <>
        <div className="grid sm:grid-cols-2 gap-4">
          <SeletorAno rotulo="Ano" de={ANO_INICIAL} valor={item.ano} aoMudar={ano => mudar({ ano })} />
          <Entrada rotulo="Data da colação" required valor={item.data} aoMudar={data => mudar({ data })} placeholder="Ex.: Julho de 2026" />
        </div>
        {item.grupos.map((grupo, i) => (
          <div key={i} className="rounded-lg border border-ufv-border p-4 space-y-4 bg-ufv-cream/40">
            <div className="flex items-start gap-2">
              <div className="flex-grow">
                <Entrada
                  rotulo="Curso"
                  valor={grupo.curso ?? ''}
                  aoMudar={curso => mudarGrupo(i, { curso })}
                  placeholder="Ex.: Administração"
                  ajuda="Use quando a colação separa os homenageados por curso."
                />
              </div>
              {item.grupos.length > 1 && (
                <button
                  onClick={() => mudar({ grupos: item.grupos.filter((_, j) => j !== i) })}
                  className="mt-7 p-2 rounded-lg text-ufv-gray-light hover:text-red-600 hover:bg-red-50"
                  aria-label={`Remover grupo ${i + 1}`}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
            <AreaTexto
              rotulo="Homenageados"
              required
              rows={5}
              valor={paraLinhas(grupo.linhas)}
              aoMudar={texto => mudarGrupo(i, { linhas: deLinhas(texto) })}
              placeholder={'Prof. Fulano de Tal - Paraninfo\nProfª. Beltrana de Tal - Patrona'}
              ajuda="Um homenageado por linha, do jeito que deve aparecer no site."
            />
          </div>
        ))}
        <Botao variante="secundario" icone={<Plus className="w-4 h-4" />} onClick={() => mudar({ grupos: [...item.grupos, { curso: '', linhas: [] }] })}>
          Adicionar outro curso
        </Botao>
        <AreaTexto rotulo="Observação" rows={2} valor={item.nota ?? ''} aoMudar={nota => mudar({ nota })} placeholder="Ex.: menção especial." />
      </>
    );
  },
};

export const SECOES = { noticias, galeria, chefes, professoresTitulares, professoresAtuais, tecnicos, homenageados } as {
  [N in NomeColecao]: Secao<N>;
};

export const SECOES_PESSOAS: NomeColecao[] = ['chefes', 'professoresTitulares', 'professoresAtuais', 'tecnicos'];
