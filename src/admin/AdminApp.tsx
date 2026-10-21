import React, { useCallback, useEffect, useState } from 'react';
import {
  Award,
  ExternalLink,
  Image as ImageIcon,
  KeyRound,
  LayoutGrid,
  LogOut,
  Menu,
  Newspaper,
  Pencil,
  Plus,
  ShieldCheck,
  Trash2,
  UserCog,
  Users,
  X,
} from 'lucide-react';
import type { Colecoes, NomeColecao, Papel, UsuarioPublico } from '../content/schema';
import { api, ErroApi, type ItemNovo } from './api';
import { Aviso, Botao, Carregando, Confirmacao, Entrada, Janela, Miniatura } from './componentes';
import { SECOES, SECOES_PESSOAS, type Secao } from './secoes';

type Pagina = 'inicio' | 'noticias' | 'galeria' | 'pessoas' | 'homenageados' | 'usuarios' | 'conta';

const AVISO_PUBLICACAO = 'Salvo! A mudança aparece no site em cerca de 2 minutos.';

const formatarData = (iso?: string) => (iso ? new Date(iso).toLocaleDateString('pt-BR') : '');

/** Chamado quando a API responde 401: volta para a tela de login. */
let aoSessaoExpirar: () => void = () => {};
const tratarErro = (erro: unknown) => {
  if (erro instanceof ErroApi && erro.status === 401) aoSessaoExpirar();
  return (erro as Error).message;
};

// ---------------------------------------------------------------------------
// Login
// ---------------------------------------------------------------------------

const TelaLogin: React.FC<{ aoEntrar: (u: UsuarioPublico) => void; mensagem?: string }> = ({ aoEntrar, mensagem }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');
    setCarregando(true);
    try {
      const { usuario } = await api.entrar(email, senha);
      aoEntrar(usuario);
    } catch (erro) {
      setErro((erro as Error).message);
      setCarregando(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-ufv-cream">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-ufv-border overflow-hidden">
        <div className="bg-gradient-to-br from-ufv-green-dark to-ufv-green px-6 py-6 text-white border-b-4 border-ufv-gold flex items-center gap-4">
          <img src="/Vertical Branco Logo UFV.png" alt="Logo UFV" className="w-12 h-12 object-contain" />
          <div>
            <h1 className="font-serif text-xl font-bold leading-tight">Painel do Memorial</h1>
            <p className="text-xs text-white/70">Departamento de Administração e Contabilidade</p>
          </div>
        </div>
        <form onSubmit={enviar} className="p-6 space-y-4">
          {mensagem && <Aviso tipo="info">{mensagem}</Aviso>}
          <Entrada rotulo="E-mail" required type="email" autoComplete="username" valor={email} aoMudar={setEmail} autoFocus />
          <Entrada rotulo="Senha" required type="password" autoComplete="current-password" valor={senha} aoMudar={setSenha} />
          {erro && <Aviso tipo="erro">{erro}</Aviso>}
          <Botao type="submit" carregando={carregando} className="w-full py-3">
            Entrar
          </Botao>
          <p className="text-xs text-ufv-gray-light text-center leading-relaxed">
            Esqueceu a senha? Peça a um administrador do painel para definir uma nova.
          </p>
        </form>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Lista + formulário de uma coleção
// ---------------------------------------------------------------------------

function PaginaColecao<N extends NomeColecao>({ secao, semCabecalho }: { secao: Secao<N>; semCabecalho?: boolean }) {
  const [itens, setItens] = useState<Colecoes[N][] | null>(null);
  const [erroLista, setErroLista] = useState('');
  const [editando, setEditando] = useState<ItemNovo<N> | null>(null);
  const [salvando, setSalvando] = useState(false);
  const [erroForm, setErroForm] = useState('');
  const [excluindo, setExcluindo] = useState<Colecoes[N] | null>(null);
  const [sucesso, setSucesso] = useState('');

  const carregar = useCallback(async () => {
    setErroLista('');
    try {
      setItens(await api.listar(secao.colecao));
    } catch (erro) {
      setErroLista(tratarErro(erro));
    }
  }, [secao.colecao]);

  useEffect(() => {
    setItens(null);
    setSucesso('');
    carregar();
  }, [carregar]);

  const salvar = async () => {
    if (!editando) return;
    setSalvando(true);
    setErroForm('');
    try {
      await api.salvar(secao.colecao, editando);
      setEditando(null);
      setSucesso(AVISO_PUBLICACAO);
      await carregar();
    } catch (erro) {
      setErroForm(tratarErro(erro));
    } finally {
      setSalvando(false);
    }
  };

  const { Formulario } = secao;
  const ordenados = itens ? [...itens].sort(secao.ordenar) : [];

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        {!semCabecalho ? (
          <div>
            <h1 className="font-serif text-2xl font-bold text-ufv-gray">{secao.titulo}</h1>
            <p className="text-sm text-ufv-gray-light mt-1 max-w-2xl leading-relaxed">{secao.descricao}</p>
          </div>
        ) : (
          <p className="text-sm text-ufv-gray-light max-w-2xl leading-relaxed">{secao.descricao}</p>
        )}
        <Botao
          icone={<Plus className="w-4 h-4" />}
          className="shrink-0"
          onClick={() => {
            setErroForm('');
            setEditando(secao.novo());
          }}
        >
          Adicionar {secao.singular}
        </Botao>
      </div>

      {sucesso && (
        <Aviso tipo="sucesso" aoFechar={() => setSucesso('')}>
          {sucesso}
        </Aviso>
      )}
      {erroLista && <Aviso tipo="erro">{erroLista}</Aviso>}

      {!itens && !erroLista && <Carregando />}
      {itens && ordenados.length === 0 && (
        <div className="rounded-xl border-2 border-dashed border-ufv-border bg-white px-6 py-12 text-center">
          <p className="text-[15px] text-ufv-gray font-semibold">Nada adicionado pelo painel ainda.</p>
          <p className="text-sm text-ufv-gray-light mt-1">Clique em "Adicionar {secao.singular}" para começar.</p>
        </div>
      )}

      {ordenados.length > 0 && (
        <ul className="space-y-3">
          {ordenados.map(item => {
            const resumo = secao.resumo(item);
            const meta = item._meta;
            return (
              <li key={item.id} className="bg-white rounded-xl border border-ufv-border p-4 flex items-center gap-4">
                {resumo.foto !== undefined && (
                  <Miniatura url={resumo.foto} alt={resumo.titulo} className="w-16 h-16 rounded-lg shrink-0 hidden sm:block" />
                )}
                <div className="flex-grow min-w-0">
                  <p className="font-semibold text-ufv-gray leading-snug line-clamp-2">{resumo.titulo}</p>
                  <p className="text-sm text-ufv-gray-light mt-0.5">{resumo.detalhe}</p>
                  {meta && (
                    <p className="text-xs text-ufv-gray-light/80 mt-1">
                      {meta.atualizadoEm
                        ? `Editado por ${meta.atualizadoPor} em ${formatarData(meta.atualizadoEm)}`
                        : `Adicionado por ${meta.criadoPor} em ${formatarData(meta.criadoEm)}`}
                    </p>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row gap-1 shrink-0">
                  <Botao
                    variante="discreto"
                    icone={<Pencil className="w-4 h-4" />}
                    onClick={() => {
                      setErroForm('');
                      setEditando(structuredClone(item) as unknown as ItemNovo<N>);
                    }}
                  >
                    Editar
                  </Botao>
                  <Botao variante="discreto" className="hover:!text-red-600" icone={<Trash2 className="w-4 h-4" />} onClick={() => setExcluindo(item)}>
                    Excluir
                  </Botao>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {editando && (
        <Janela
          titulo={editando.id ? `Editar ${secao.singular}` : `Adicionar ${secao.singular}`}
          aoFechar={() => !salvando && setEditando(null)}
          rodape={
            <>
              <Botao variante="secundario" onClick={() => setEditando(null)} disabled={salvando}>
                Cancelar
              </Botao>
              <Botao onClick={salvar} carregando={salvando}>
                {salvando ? 'Salvando…' : 'Salvar e publicar'}
              </Botao>
            </>
          }
        >
          <Formulario item={editando} mudar={parcial => setEditando(atual => (atual ? { ...atual, ...parcial } : atual))} />
          {erroForm && <Aviso tipo="erro">{erroForm}</Aviso>}
        </Janela>
      )}

      {excluindo && (
        <Confirmacao
          titulo={`Excluir ${secao.singular}?`}
          mensagem={
            <>
              <strong>{secao.resumo(excluindo).titulo}</strong> será removido(a) do site, junto com as fotos enviadas para ele(a).
            </>
          }
          rotuloConfirmar="Excluir"
          aoFechar={() => setExcluindo(null)}
          aoConfirmar={async () => {
            try {
              await api.excluir(secao.colecao, excluindo.id);
            } catch (erro) {
              throw new Error(tratarErro(erro));
            }
            setExcluindo(null);
            setSucesso('Excluído! A mudança aparece no site em cerca de 2 minutos.');
            await carregar();
          }}
        />
      )}
    </div>
  );
}

const PaginaPessoas: React.FC = () => {
  const [colecao, setColecao] = useState<NomeColecao>(SECOES_PESSOAS[0]);
  return (
    <div className="space-y-5">
      <div>
        <h1 className="font-serif text-2xl font-bold text-ufv-gray">Pessoas</h1>
        <p className="text-sm text-ufv-gray-light mt-1">Escolha o grupo que deseja atualizar.</p>
      </div>
      <div className="flex flex-wrap gap-2" role="tablist">
        {SECOES_PESSOAS.map(nome => (
          <button
            key={nome}
            role="tab"
            aria-selected={colecao === nome}
            onClick={() => setColecao(nome)}
            className={`rounded-full px-4 py-2 text-sm font-semibold border transition-colors ${colecao === nome ? 'bg-ufv-green text-white border-ufv-green' : 'bg-white text-ufv-gray border-ufv-border hover:bg-ufv-cream'}`}
          >
            {SECOES[nome].titulo}
          </button>
        ))}
      </div>
      <PaginaColecao key={colecao} secao={SECOES[colecao] as Secao<NomeColecao>} semCabecalho />
    </div>
  );
};

// ---------------------------------------------------------------------------
// Usuários e conta
// ---------------------------------------------------------------------------

interface FormUsuario {
  id?: string;
  nome: string;
  email: string;
  papel: Papel;
  senha: string;
}

const PaginaUsuarios: React.FC<{ eu: UsuarioPublico }> = ({ eu }) => {
  const [usuarios, setUsuarios] = useState<UsuarioPublico[] | null>(null);
  const [erroLista, setErroLista] = useState('');
  const [editando, setEditando] = useState<FormUsuario | null>(null);
  const [erroForm, setErroForm] = useState('');
  const [salvando, setSalvando] = useState(false);
  const [removendo, setRemovendo] = useState<UsuarioPublico | null>(null);
  const [sucesso, setSucesso] = useState('');

  const carregar = useCallback(async () => {
    try {
      setUsuarios(await api.usuarios());
    } catch (erro) {
      setErroLista(tratarErro(erro));
    }
  }, []);

  useEffect(() => {
    carregar();
  }, [carregar]);

  const salvar = async () => {
    if (!editando) return;
    setSalvando(true);
    setErroForm('');
    try {
      await api.salvarUsuario({ ...editando, senha: editando.senha || undefined });
      setSucesso(editando.id ? 'Dados atualizados.' : `Acesso criado. Envie o e-mail e a senha inicial para ${editando.nome}.`);
      setEditando(null);
      await carregar();
    } catch (erro) {
      setErroForm(tratarErro(erro));
    } finally {
      setSalvando(false);
    }
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl font-bold text-ufv-gray">Quem tem acesso</h1>
          <p className="text-sm text-ufv-gray-light mt-1 max-w-2xl leading-relaxed">
            <strong>Editores</strong> adicionam e editam conteúdo. <strong>Administradores</strong> também cadastram pessoas e redefinem senhas.
          </p>
        </div>
        <Botao
          icone={<Plus className="w-4 h-4" />}
          className="shrink-0"
          onClick={() => {
            setErroForm('');
            setEditando({ nome: '', email: '', papel: 'editor', senha: '' });
          }}
        >
          Dar acesso a alguém
        </Botao>
      </div>

      {sucesso && (
        <Aviso tipo="sucesso" aoFechar={() => setSucesso('')}>
          {sucesso}
        </Aviso>
      )}
      {erroLista && <Aviso tipo="erro">{erroLista}</Aviso>}
      {!usuarios && !erroLista && <Carregando />}

      {usuarios && (
        <ul className="space-y-3">
          {usuarios.map(u => (
            <li key={u.id} className="bg-white rounded-xl border border-ufv-border p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-ufv-green/10 text-ufv-green flex items-center justify-center shrink-0">
                {u.papel === 'admin' ? <ShieldCheck className="w-5 h-5" /> : <Users className="w-5 h-5" />}
              </div>
              <div className="flex-grow min-w-0">
                <p className="font-semibold text-ufv-gray">
                  {u.nome} {u.id === eu.id && <span className="text-xs font-normal text-ufv-gray-light">(você)</span>}
                </p>
                <p className="text-sm text-ufv-gray-light truncate">{u.email}</p>
                <p className="text-xs text-ufv-gray-light/80 mt-0.5">
                  {u.principal ? 'Conta principal (definida na Vercel)' : u.papel === 'admin' ? 'Administrador' : 'Editor'}
                </p>
              </div>
              {!u.principal && (
                <div className="flex flex-col sm:flex-row gap-1 shrink-0">
                  <Botao
                    variante="discreto"
                    icone={<Pencil className="w-4 h-4" />}
                    onClick={() => {
                      setErroForm('');
                      setEditando({ id: u.id, nome: u.nome, email: u.email, papel: u.papel, senha: '' });
                    }}
                  >
                    Editar
                  </Botao>
                  {u.id !== eu.id && (
                    <Botao variante="discreto" className="hover:!text-red-600" icone={<Trash2 className="w-4 h-4" />} onClick={() => setRemovendo(u)}>
                      Remover
                    </Botao>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}

      {editando && (
        <Janela
          titulo={editando.id ? `Editar acesso de ${editando.nome}` : 'Dar acesso a alguém'}
          largura="max-w-lg"
          aoFechar={() => !salvando && setEditando(null)}
          rodape={
            <>
              <Botao variante="secundario" onClick={() => setEditando(null)} disabled={salvando}>
                Cancelar
              </Botao>
              <Botao onClick={salvar} carregando={salvando}>
                Salvar
              </Botao>
            </>
          }
        >
          <Entrada rotulo="Nome" required valor={editando.nome} aoMudar={nome => setEditando({ ...editando, nome })} />
          <Entrada rotulo="E-mail" required type="email" valor={editando.email} aoMudar={email => setEditando({ ...editando, email })} />
          <fieldset className="space-y-2">
            <legend className="text-sm font-semibold text-ufv-gray">Permissão</legend>
            {(
              [
                { valor: 'editor', titulo: 'Editor', texto: 'Adiciona e edita conteúdo do memorial.' },
                { valor: 'admin', titulo: 'Administrador', texto: 'Também cadastra pessoas e redefine senhas.' },
              ] as const
            ).map(opcao => (
              <label
                key={opcao.valor}
                className={`flex items-start gap-3 cursor-pointer rounded-lg border p-3 ${editando.papel === opcao.valor ? 'border-ufv-green bg-ufv-green/5' : 'border-ufv-border hover:bg-ufv-cream'}`}
              >
                <input type="radio" name="papel" className="mt-1" checked={editando.papel === opcao.valor} onChange={() => setEditando({ ...editando, papel: opcao.valor })} />
                <span>
                  <span className="block text-sm font-semibold text-ufv-gray">{opcao.titulo}</span>
                  <span className="block text-xs text-ufv-gray-light">{opcao.texto}</span>
                </span>
              </label>
            ))}
          </fieldset>
          <Entrada
            rotulo={editando.id ? 'Nova senha' : 'Senha inicial'}
            required={!editando.id}
            type="text"
            autoComplete="new-password"
            valor={editando.senha}
            aoMudar={senha => setEditando({ ...editando, senha })}
            ajuda={editando.id ? 'Preencha só se quiser redefinir a senha. Mínimo de 8 caracteres.' : 'Mínimo de 8 caracteres. A pessoa pode trocá-la depois em "Minha conta".'}
          />
          {erroForm && <Aviso tipo="erro">{erroForm}</Aviso>}
        </Janela>
      )}

      {removendo && (
        <Confirmacao
          titulo="Remover acesso?"
          mensagem={
            <>
              <strong>{removendo.nome}</strong> não conseguirá mais entrar no painel. O conteúdo que essa pessoa adicionou continua no site.
            </>
          }
          rotuloConfirmar="Remover acesso"
          aoFechar={() => setRemovendo(null)}
          aoConfirmar={async () => {
            try {
              await api.excluirUsuario(removendo.id);
            } catch (erro) {
              throw new Error(tratarErro(erro));
            }
            setRemovendo(null);
            setSucesso('Acesso removido.');
            await carregar();
          }}
        />
      )}
    </div>
  );
};

const PaginaConta: React.FC<{ eu: UsuarioPublico }> = ({ eu }) => {
  const [atual, setAtual] = useState('');
  const [nova, setNova] = useState('');
  const [confirmacao, setConfirmacao] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');
  const [salvando, setSalvando] = useState(false);

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');
    setSucesso('');
    if (nova !== confirmacao) {
      setErro('A confirmação não é igual à nova senha.');
      return;
    }
    setSalvando(true);
    try {
      await api.trocarSenha(atual, nova);
      setAtual('');
      setNova('');
      setConfirmacao('');
      setSucesso('Senha alterada.');
    } catch (erro) {
      setErro(tratarErro(erro));
    } finally {
      setSalvando(false);
    }
  };

  return (
    <div className="space-y-5 max-w-lg">
      <div>
        <h1 className="font-serif text-2xl font-bold text-ufv-gray">Minha conta</h1>
        <p className="text-sm text-ufv-gray-light mt-1">
          {eu.nome} · {eu.email}
        </p>
      </div>
      {eu.principal ? (
        <Aviso tipo="info">
          Esta é a conta principal. A senha dela é definida nas configurações do projeto na Vercel (variável <code>ADMIN_PASSWORD</code>). Ela serve para
          recuperar o acesso: use-a para cadastrar as pessoas que vão editar o memorial.
        </Aviso>
      ) : (
        <form onSubmit={enviar} className="bg-white rounded-xl border border-ufv-border p-5 space-y-4">
          <h2 className="font-semibold text-ufv-gray flex items-center gap-2">
            <KeyRound className="w-4 h-4" /> Trocar senha
          </h2>
          <Entrada rotulo="Senha atual" required type="password" autoComplete="current-password" valor={atual} aoMudar={setAtual} />
          <Entrada rotulo="Nova senha" required type="password" autoComplete="new-password" valor={nova} aoMudar={setNova} ajuda="Mínimo de 8 caracteres." />
          <Entrada rotulo="Confirme a nova senha" required type="password" autoComplete="new-password" valor={confirmacao} aoMudar={setConfirmacao} />
          {erro && <Aviso tipo="erro">{erro}</Aviso>}
          {sucesso && <Aviso tipo="sucesso">{sucesso}</Aviso>}
          <Botao type="submit" carregando={salvando}>
            Salvar nova senha
          </Botao>
        </form>
      )}
    </div>
  );
};

// ---------------------------------------------------------------------------
// Início
// ---------------------------------------------------------------------------

const ATALHOS: { pagina: Pagina; titulo: string; texto: string; icone: React.ReactNode }[] = [
  { pagina: 'noticias', titulo: 'Notícias', texto: 'Acontecimentos da linha do tempo, por ano.', icone: <Newspaper className="w-6 h-6" /> },
  { pagina: 'galeria', titulo: 'Galeria de fotos', texto: 'Fotos da aba "Fotos" do memorial.', icone: <ImageIcon className="w-6 h-6" /> },
  { pagina: 'pessoas', titulo: 'Pessoas', texto: 'Chefias, professores e técnicos.', icone: <Users className="w-6 h-6" /> },
  { pagina: 'homenageados', titulo: 'Homenageados', texto: 'Homenageados das colações de grau.', icone: <Award className="w-6 h-6" /> },
];

const PaginaInicio: React.FC<{ eu: UsuarioPublico; ir: (p: Pagina) => void }> = ({ eu, ir }) => (
  <div className="space-y-8">
    <div>
      <h1 className="font-serif text-2xl sm:text-3xl font-bold text-ufv-gray">Olá, {eu.nome.split(' ')[0]}!</h1>
      <p className="text-ufv-gray-light mt-1">O que você quer adicionar ao memorial hoje?</p>
    </div>
    <div className="grid sm:grid-cols-2 gap-4">
      {ATALHOS.map(a => (
        <button
          key={a.pagina}
          onClick={() => ir(a.pagina)}
          className="text-left bg-white rounded-xl border border-ufv-border p-5 flex items-start gap-4 hover:border-ufv-green hover:shadow-md transition-all group"
        >
          <div className="w-12 h-12 rounded-xl bg-ufv-green/10 text-ufv-green flex items-center justify-center shrink-0 group-hover:bg-ufv-green group-hover:text-white transition-colors">
            {a.icone}
          </div>
          <div>
            <p className="font-semibold text-ufv-gray text-lg">{a.titulo}</p>
            <p className="text-sm text-ufv-gray-light">{a.texto}</p>
          </div>
        </button>
      ))}
    </div>
    <div className="bg-white rounded-xl border border-ufv-border p-5 sm:p-6">
      <h2 className="font-semibold text-ufv-gray mb-3">Como funciona</h2>
      <ol className="list-decimal pl-5 space-y-1.5 text-sm text-ufv-gray leading-relaxed">
        <li>Escolha uma seção acima (ou no menu).</li>
        <li>Clique em <strong>Adicionar</strong>, preencha os campos e envie as fotos.</li>
        <li>
          Clique em <strong>Salvar e publicar</strong>. A mudança aparece no site em cerca de <strong>2 minutos</strong>.
        </li>
      </ol>
      <p className="text-xs text-ufv-gray-light mt-4 leading-relaxed">
        O painel mostra apenas o que foi adicionado por ele. O conteúdo que já existia no memorial antes do painel continua no site, mas não aparece aqui para
        edição.
      </p>
    </div>
  </div>
);

// ---------------------------------------------------------------------------
// Estrutura
// ---------------------------------------------------------------------------

const PAGINAS_VALIDAS: Pagina[] = ['inicio', 'noticias', 'galeria', 'pessoas', 'homenageados', 'usuarios', 'conta'];
const paginaDoEndereco = (): Pagina => {
  const nome = window.location.hash.replace(/^#\/?/, '') as Pagina;
  return PAGINAS_VALIDAS.includes(nome) ? nome : 'inicio';
};

export default function AdminApp() {
  const [usuario, setUsuario] = useState<UsuarioPublico | null | undefined>(undefined);
  const [mensagemLogin, setMensagemLogin] = useState('');
  const [pagina, setPagina] = useState<Pagina>(paginaDoEndereco);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    api
      .sessao()
      .then(r => setUsuario(r.usuario))
      .catch(erro => {
        setMensagemLogin((erro as Error).message);
        setUsuario(null);
      });
    const aoMudarEndereco = () => setPagina(paginaDoEndereco());
    window.addEventListener('hashchange', aoMudarEndereco);
    return () => window.removeEventListener('hashchange', aoMudarEndereco);
  }, []);

  aoSessaoExpirar = () => {
    setMensagemLogin('Sua sessão expirou. Entre novamente.');
    setUsuario(null);
  };

  const ir = (destino: Pagina) => {
    window.location.hash = `/${destino}`;
    setPagina(destino);
    setMenuAberto(false);
    window.scrollTo(0, 0);
  };

  if (usuario === undefined) return <Carregando texto="Abrindo o painel…" />;
  if (!usuario) {
    return (
      <TelaLogin
        mensagem={mensagemLogin}
        aoEntrar={u => {
          setMensagemLogin('');
          setUsuario(u);
        }}
      />
    );
  }

  const itensMenu: { pagina: Pagina; rotulo: string; icone: React.ReactNode }[] = [
    { pagina: 'inicio', rotulo: 'Início', icone: <LayoutGrid className="w-[18px] h-[18px]" /> },
    { pagina: 'noticias', rotulo: 'Notícias', icone: <Newspaper className="w-[18px] h-[18px]" /> },
    { pagina: 'galeria', rotulo: 'Galeria de fotos', icone: <ImageIcon className="w-[18px] h-[18px]" /> },
    { pagina: 'pessoas', rotulo: 'Pessoas', icone: <Users className="w-[18px] h-[18px]" /> },
    { pagina: 'homenageados', rotulo: 'Homenageados', icone: <Award className="w-[18px] h-[18px]" /> },
    ...(usuario.papel === 'admin' ? [{ pagina: 'usuarios' as Pagina, rotulo: 'Quem tem acesso', icone: <UserCog className="w-[18px] h-[18px]" /> }] : []),
    { pagina: 'conta', rotulo: 'Minha conta', icone: <KeyRound className="w-[18px] h-[18px]" /> },
  ];
  const paginaAtual = pagina === 'usuarios' && usuario.papel !== 'admin' ? 'inicio' : pagina;

  const sair = async () => {
    await api.sair().catch(() => {});
    setMensagemLogin('');
    setUsuario(null);
  };

  const menu = (
    <nav className="space-y-1">
      {itensMenu.map(item => (
        <button
          key={item.pagina}
          onClick={() => ir(item.pagina)}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[15px] transition-colors ${paginaAtual === item.pagina ? 'bg-ufv-green/10 text-ufv-green font-semibold' : 'text-ufv-gray hover:bg-ufv-cream'}`}
        >
          <span className={paginaAtual === item.pagina ? 'text-ufv-green' : 'text-ufv-gray-light'}>{item.icone}</span>
          {item.rotulo}
        </button>
      ))}
      <div className="pt-3 mt-3 border-t border-ufv-border space-y-1">
        <a href="/" target="_blank" rel="noreferrer" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[15px] text-ufv-gray hover:bg-ufv-cream">
          <ExternalLink className="w-[18px] h-[18px] text-ufv-gray-light" /> Ver o site
        </a>
        <button onClick={sair} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[15px] text-ufv-gray hover:bg-ufv-cream">
          <LogOut className="w-[18px] h-[18px] text-ufv-gray-light" /> Sair
        </button>
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-ufv-cream">
      <header className="bg-gradient-to-r from-ufv-green-dark to-ufv-green text-white border-b-4 border-ufv-gold sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-3">
          <img src="/Vertical Branco Logo UFV.png" alt="Logo UFV" className="w-10 h-10 object-contain" />
          <div className="flex-grow min-w-0">
            <p className="font-serif font-bold leading-tight">Painel do Memorial DAD</p>
            <p className="text-xs text-white/70 truncate">
              {usuario.nome} · {usuario.papel === 'admin' ? 'Administrador' : 'Editor'}
            </p>
          </div>
          <button onClick={() => setMenuAberto(true)} className="md:hidden p-2 rounded-lg hover:bg-white/10" aria-label="Abrir menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {menuAberto && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMenuAberto(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-[80vw] max-w-xs bg-white shadow-2xl p-4 overflow-y-auto">
            <div className="flex justify-end mb-2">
              <button onClick={() => setMenuAberto(false)} className="p-2 rounded-full hover:bg-ufv-cream" aria-label="Fechar menu">
                <X className="w-5 h-5" />
              </button>
            </div>
            {menu}
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-8 flex gap-8">
        <aside className="hidden md:block w-56 shrink-0">
          <div className="sticky top-24">{menu}</div>
        </aside>
        <main className="flex-grow min-w-0">
          {paginaAtual === 'inicio' && <PaginaInicio eu={usuario} ir={ir} />}
          {paginaAtual === 'noticias' && <PaginaColecao secao={SECOES.noticias} />}
          {paginaAtual === 'galeria' && <PaginaColecao secao={SECOES.galeria} />}
          {paginaAtual === 'pessoas' && <PaginaPessoas />}
          {paginaAtual === 'homenageados' && <PaginaColecao secao={SECOES.homenageados} />}
          {paginaAtual === 'usuarios' && <PaginaUsuarios eu={usuario} />}
          {paginaAtual === 'conta' && <PaginaConta eu={usuario} />}
        </main>
      </div>
    </div>
  );
}
