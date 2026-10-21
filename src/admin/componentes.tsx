import React, { useEffect, useId, useRef, useState } from 'react';
import { AlertCircle, CheckCircle2, ImageOff, ImagePlus, Loader2, Plus, Trash2, X } from 'lucide-react';
import type { NomeColecao } from '../content/schema';
import { api, previaDaFoto } from './api';

// ---------------------------------------------------------------------------
// Campos de formulário
// ---------------------------------------------------------------------------

const classeEntrada =
  'w-full rounded-lg border border-ufv-border bg-white px-3.5 py-2.5 text-[15px] text-ufv-gray placeholder:text-ufv-gray-light/70 focus:outline-none focus:ring-2 focus:ring-ufv-green-light/30 focus:border-ufv-green-light';

interface CampoProps {
  rotulo: string;
  ajuda?: string;
  obrigatorio?: boolean;
  children: (id: string) => React.ReactNode;
}

export const Campo: React.FC<CampoProps> = ({ rotulo, ajuda, obrigatorio, children }) => {
  const id = useId();
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-semibold text-ufv-gray">
        {rotulo}
        {obrigatorio ? <span className="text-ufv-gold"> *</span> : <span className="font-normal text-ufv-gray-light"> (opcional)</span>}
      </label>
      {children(id)}
      {ajuda && <p className="text-xs text-ufv-gray-light leading-relaxed">{ajuda}</p>}
    </div>
  );
};

type EntradaProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> & {
  rotulo: string;
  ajuda?: string;
  valor: string | number;
  aoMudar: (valor: string) => void;
};

export const Entrada: React.FC<EntradaProps> = ({ rotulo, ajuda, valor, aoMudar, required, ...resto }) => (
  <Campo rotulo={rotulo} ajuda={ajuda} obrigatorio={required}>
    {id => <input id={id} className={classeEntrada} value={valor} onChange={e => aoMudar(e.target.value)} {...resto} />}
  </Campo>
);

type AreaProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'value'> & {
  rotulo: string;
  ajuda?: string;
  valor: string;
  aoMudar: (valor: string) => void;
};

export const AreaTexto: React.FC<AreaProps> = ({ rotulo, ajuda, valor, aoMudar, required, rows = 4, ...resto }) => (
  <Campo rotulo={rotulo} ajuda={ajuda} obrigatorio={required}>
    {id => (
      <textarea id={id} rows={rows} className={`${classeEntrada} leading-relaxed`} value={valor} onChange={e => aoMudar(e.target.value)} {...resto} />
    )}
  </Campo>
);

export const SeletorAno: React.FC<{ rotulo: string; ajuda?: string; valor: number; aoMudar: (ano: number) => void; de: number }> = ({
  rotulo,
  ajuda,
  valor,
  aoMudar,
  de,
}) => {
  const ate = new Date().getFullYear() + 1;
  const anos = Array.from({ length: ate - de + 1 }, (_, i) => ate - i);
  return (
    <Campo rotulo={rotulo} ajuda={ajuda} obrigatorio>
      {id => (
        <select id={id} className={classeEntrada} value={valor} onChange={e => aoMudar(Number(e.target.value))}>
          {anos.map(ano => (
            <option key={ano} value={ano}>
              {ano}
            </option>
          ))}
        </select>
      )}
    </Campo>
  );
};

// ---------------------------------------------------------------------------
// Botões e avisos
// ---------------------------------------------------------------------------

type BotaoProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variante?: 'primario' | 'secundario' | 'perigo' | 'discreto';
  carregando?: boolean;
  icone?: React.ReactNode;
};

export const Botao: React.FC<BotaoProps> = ({ variante = 'primario', carregando, icone, children, className = '', disabled, ...resto }) => {
  const estilos = {
    primario: 'bg-ufv-green text-white hover:bg-ufv-green-dark',
    secundario: 'bg-white text-ufv-gray border border-ufv-border hover:bg-ufv-cream',
    perigo: 'bg-red-600 text-white hover:bg-red-700',
    discreto: 'text-ufv-gray-light hover:text-ufv-gray hover:bg-ufv-cream',
  }[variante];
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${estilos} ${className}`}
      disabled={disabled || carregando}
      {...resto}
    >
      {carregando ? <Loader2 className="w-4 h-4 animate-spin" /> : icone}
      {children}
    </button>
  );
};

export const Aviso: React.FC<{ tipo: 'erro' | 'sucesso' | 'info'; children: React.ReactNode; aoFechar?: () => void }> = ({
  tipo,
  children,
  aoFechar,
}) => {
  const estilos = {
    erro: 'bg-red-50 border-red-200 text-red-800',
    sucesso: 'bg-emerald-50 border-emerald-200 text-emerald-800',
    info: 'bg-blue-50 border-blue-200 text-blue-900',
  }[tipo];
  const Icone = tipo === 'sucesso' ? CheckCircle2 : AlertCircle;
  return (
    <div role={tipo === 'erro' ? 'alert' : 'status'} className={`flex items-start gap-3 rounded-lg border px-4 py-3 text-sm leading-relaxed ${estilos}`}>
      <Icone className="w-5 h-5 shrink-0 mt-px" />
      <div className="flex-grow">{children}</div>
      {aoFechar && (
        <button onClick={aoFechar} className="shrink-0 opacity-60 hover:opacity-100" aria-label="Fechar aviso">
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export const Carregando: React.FC<{ texto?: string }> = ({ texto = 'Carregando…' }) => (
  <div className="flex items-center justify-center gap-2 py-16 text-sm text-ufv-gray-light">
    <Loader2 className="w-5 h-5 animate-spin" /> {texto}
  </div>
);

// ---------------------------------------------------------------------------
// Janela (modal)
// ---------------------------------------------------------------------------

export const Janela: React.FC<{ titulo: string; aoFechar: () => void; children: React.ReactNode; rodape?: React.ReactNode; largura?: string }> = ({
  titulo,
  aoFechar,
  children,
  rodape,
  largura = 'max-w-2xl',
}) => {
  const aoFecharRef = useRef(aoFechar);
  aoFecharRef.current = aoFechar;

  useEffect(() => {
    const anterior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const tecla = (e: KeyboardEvent) => e.key === 'Escape' && aoFecharRef.current();
    window.addEventListener('keydown', tecla);
    return () => {
      document.body.style.overflow = anterior;
      window.removeEventListener('keydown', tecla);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm sm:p-4" onMouseDown={e => e.target === e.currentTarget && aoFechar()}>
      <div role="dialog" aria-modal="true" aria-label={titulo} className={`w-full ${largura} bg-white sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[94vh]`}>
        <div className="flex items-center justify-between gap-4 px-5 sm:px-6 py-4 border-b border-ufv-border">
          <h2 className="font-serif text-lg font-bold text-ufv-gray">{titulo}</h2>
          <button onClick={aoFechar} className="p-1.5 -mr-1.5 rounded-full text-ufv-gray-light hover:bg-ufv-cream hover:text-ufv-gray" aria-label="Fechar">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="overflow-y-auto px-5 sm:px-6 py-5 space-y-5">{children}</div>
        {rodape && <div className="flex flex-wrap justify-end gap-2 px-5 sm:px-6 py-4 border-t border-ufv-border bg-ufv-cream/60 sm:rounded-b-2xl">{rodape}</div>}
      </div>
    </div>
  );
};

export const Confirmacao: React.FC<{
  titulo: string;
  mensagem: React.ReactNode;
  rotuloConfirmar: string;
  aoConfirmar: () => Promise<void>;
  aoFechar: () => void;
}> = ({ titulo, mensagem, rotuloConfirmar, aoConfirmar, aoFechar }) => {
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');
  return (
    <Janela
      titulo={titulo}
      aoFechar={aoFechar}
      largura="max-w-md"
      rodape={
        <>
          <Botao variante="secundario" onClick={aoFechar} disabled={carregando}>
            Cancelar
          </Botao>
          <Botao
            variante="perigo"
            carregando={carregando}
            onClick={async () => {
              setCarregando(true);
              setErro('');
              try {
                await aoConfirmar();
              } catch (e) {
                setErro((e as Error).message);
                setCarregando(false);
              }
            }}
          >
            {rotuloConfirmar}
          </Botao>
        </>
      }
    >
      <p className="text-[15px] text-ufv-gray leading-relaxed">{mensagem}</p>
      {erro && <Aviso tipo="erro">{erro}</Aviso>}
    </Janela>
  );
};

// ---------------------------------------------------------------------------
// Fotos
// ---------------------------------------------------------------------------

export const Miniatura: React.FC<{ url: string; alt: string; className?: string }> = ({ url, alt, className = '' }) => {
  const [falhou, setFalhou] = useState(false);
  useEffect(() => setFalhou(false), [url]);
  if (falhou) {
    return (
      <div className={`flex flex-col items-center justify-center gap-1 bg-ufv-cream text-ufv-gray-light text-[10px] text-center leading-tight p-1 ${className}`}>
        <ImageOff className="w-4 h-4" />
        em publicação
      </div>
    );
  }
  return <img src={previaDaFoto(url)} alt={alt} className={`object-cover bg-ufv-cream ${className}`} onError={() => setFalhou(true)} />;
};

const useEnvioDeFotos = (colecao: NomeColecao) => {
  const [enviando, setEnviando] = useState(0);
  const [erro, setErro] = useState('');
  const enviar = async (arquivos: File[], aoEnviar: (url: string) => void) => {
    setErro('');
    setEnviando(n => n + arquivos.length);
    for (const arquivo of arquivos) {
      try {
        aoEnviar(await api.enviarFoto(colecao, arquivo));
      } catch (e) {
        setErro(`"${arquivo.name}": ${(e as Error).message}`);
      } finally {
        setEnviando(n => n - 1);
      }
    }
  };
  return { enviando, erro, enviar };
};

const BotaoEscolherFoto: React.FC<{ multiplo?: boolean; aoEscolher: (arquivos: File[]) => void; rotulo: string; enviando: boolean }> = ({
  multiplo,
  aoEscolher,
  rotulo,
  enviando,
}) => {
  const entrada = useRef<HTMLInputElement>(null);
  return (
    <>
      <input
        ref={entrada}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        multiple={multiplo}
        className="hidden"
        onChange={e => {
          const arquivos = Array.from(e.target.files || []);
          e.target.value = '';
          if (arquivos.length) aoEscolher(arquivos);
        }}
      />
      <Botao variante="secundario" icone={<ImagePlus className="w-4 h-4" />} carregando={enviando} onClick={() => entrada.current?.click()}>
        {enviando ? 'Enviando foto…' : rotulo}
      </Botao>
    </>
  );
};

/** Uma única foto (ex.: foto de uma pessoa ou da galeria). */
export const FotoUnica: React.FC<{
  colecao: NomeColecao;
  rotulo: string;
  obrigatorio?: boolean;
  ajuda?: string;
  url: string;
  aoMudar: (url: string) => void;
}> = ({ colecao, rotulo, obrigatorio, ajuda, url, aoMudar }) => {
  const { enviando, erro, enviar } = useEnvioDeFotos(colecao);
  return (
    <Campo rotulo={rotulo} obrigatorio={obrigatorio} ajuda={ajuda}>
      {() => (
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            {url && <Miniatura url={url} alt={rotulo} className="w-24 h-24 rounded-lg border border-ufv-border" />}
            <div className="flex flex-wrap gap-2">
              <BotaoEscolherFoto rotulo={url ? 'Trocar foto' : 'Escolher foto'} enviando={enviando > 0} aoEscolher={arquivos => enviar(arquivos.slice(0, 1), aoMudar)} />
              {url && !obrigatorio && (
                <Botao variante="discreto" icone={<Trash2 className="w-4 h-4" />} onClick={() => aoMudar('')}>
                  Remover
                </Botao>
              )}
            </div>
          </div>
          {erro && <Aviso tipo="erro">{erro}</Aviso>}
        </div>
      )}
    </Campo>
  );
};

/** Várias fotos, cada uma com legenda (usado nas notícias). */
export const ListaFotos: React.FC<{
  colecao: NomeColecao;
  fotos: { url: string; caption: string }[];
  aoMudar: (fotos: { url: string; caption: string }[]) => void;
}> = ({ colecao, fotos, aoMudar }) => {
  const { enviando, erro, enviar } = useEnvioDeFotos(colecao);
  const fotosRef = useRef(fotos);
  fotosRef.current = fotos;

  return (
    <Campo rotulo="Fotos" ajuda="Você pode escolher várias fotos de uma vez. Elas são reduzidas automaticamente antes do envio.">
      {() => (
        <div className="space-y-3">
          {fotos.map((foto, i) => (
            <div key={foto.url} className="flex gap-3 items-start rounded-lg border border-ufv-border p-3 bg-ufv-cream/40">
              <Miniatura url={foto.url} alt={foto.caption || `Foto ${i + 1}`} className="w-20 h-20 rounded-md shrink-0" />
              <div className="flex-grow space-y-1">
                <label className="text-xs font-semibold text-ufv-gray-light" htmlFor={`legenda-${i}`}>
                  Legenda da foto {i + 1}
                </label>
                <input
                  id={`legenda-${i}`}
                  className={classeEntrada}
                  placeholder="Ex.: Professores na inauguração do prédio"
                  value={foto.caption}
                  onChange={e => aoMudar(fotos.map((f, j) => (j === i ? { ...f, caption: e.target.value } : f)))}
                />
              </div>
              <button
                onClick={() => aoMudar(fotos.filter((_, j) => j !== i))}
                className="p-2 rounded-lg text-ufv-gray-light hover:text-red-600 hover:bg-red-50 shrink-0"
                aria-label={`Remover foto ${i + 1}`}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
          <BotaoEscolherFoto
            multiplo
            rotulo={fotos.length ? 'Adicionar mais fotos' : 'Adicionar fotos'}
            enviando={enviando > 0}
            aoEscolher={arquivos => enviar(arquivos, url => aoMudar([...fotosRef.current, { url, caption: '' }]))}
          />
          {erro && <Aviso tipo="erro">{erro}</Aviso>}
        </div>
      )}
    </Campo>
  );
};

/** Links externos (nome + endereço). */
export const ListaLinks: React.FC<{
  links: { label: string; url: string }[];
  aoMudar: (links: { label: string; url: string }[]) => void;
}> = ({ links, aoMudar }) => (
  <Campo rotulo="Links" ajuda="Ex.: edição do jornal, documento ou página relacionada. O endereço deve começar com https://">
    {() => (
      <div className="space-y-2">
        {links.map((link, i) => (
          <div key={i} className="flex flex-col sm:flex-row gap-2 rounded-lg border border-ufv-border p-3 bg-ufv-cream/40">
            <input
              className={`${classeEntrada} sm:w-2/5`}
              placeholder="Nome (ex.: Jornal 1055)"
              aria-label={`Nome do link ${i + 1}`}
              value={link.label}
              onChange={e => aoMudar(links.map((l, j) => (j === i ? { ...l, label: e.target.value } : l)))}
            />
            <div className="flex gap-2 flex-grow">
              <input
                className={classeEntrada}
                placeholder="https://…"
                inputMode="url"
                aria-label={`Endereço do link ${i + 1}`}
                value={link.url}
                onChange={e => aoMudar(links.map((l, j) => (j === i ? { ...l, url: e.target.value } : l)))}
              />
              <button
                onClick={() => aoMudar(links.filter((_, j) => j !== i))}
                className="p-2 rounded-lg text-ufv-gray-light hover:text-red-600 hover:bg-red-50 shrink-0"
                aria-label={`Remover link ${i + 1}`}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
        <Botao variante="secundario" icone={<Plus className="w-4 h-4" />} onClick={() => aoMudar([...links, { label: '', url: '' }])}>
          Adicionar link
        </Botao>
      </div>
    )}
  </Campo>
);
