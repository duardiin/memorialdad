/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  Calendar,
  ChevronDown,
  ChevronRight,
  Clock,
  ExternalLink,
  Globe,
  GraduationCap,
  Handshake,
  History,
  Image as ImageIcon,
  ImagePlus,
  Info,
  Italic,
  KeyRound,
  Landmark,
  LayoutGrid,
  Mail,
  Menu,
  Microscope,
  Newspaper,
  Pencil,
  Phone,
  Search,
  UserCog,
  Users,
  X
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { MemorialEvent } from './types';
import {
  allGalleryPhotos,
  chefesDepartamento,
  colacoesGrau,
  memorialData,
  professoresAtuais,
  professoresTitulares,
  tecnicosAtuais,
} from './data/conteudo';
import { EventDetailModal } from './data/EventDetailModal';
import { professoresAposentados } from './data/professoresAposentadosData';
import { exProfessores } from './data/exProfessoresData';
import { NIVEIS_TECNICOS, tecnicosAposentados } from './data/tecnicosAposentadosData';
import { buildSearchIndex, Highlight, makeSnippet, searchMemorial, tokenize } from './memorialSearch';

const MAX_SEARCH_RESULTS = 50;

type PanelType = 'overview' | 'timeline' | 'years' | 'photos' | 'quebec' | 'desmembramento' | 'naipe' | 'chefes' | 'professores' | 'professoresAtuais' | 'professoresAposentados' | 'exProfessores' | 'tecnicosAtuais' | 'tecnicosAposentados' | 'homenageados' | 'contribuir';

const O_DAD_PANELS: PanelType[] = ['chefes', 'professores', 'professoresAtuais', 'professoresAposentados', 'exProfessores', 'tecnicosAtuais', 'tecnicosAposentados', 'homenageados'];

const HOMENAGEADOS_DECADES = [1970, 1980, 1990, 2000, 2010, 2020];

const plantasDAD = [
  {
    id: 'photo-planta-1',
    url: '/planta DAD 1.png',
    title: 'Planta inicial do DAD',
    caption: 'Planta inicial do Departamento de Administração.'
  },
  {
    id: 'photo-planta-2',
    url: '/Planta inicial do departamento de administração e do departamento de economia 1.png',
    title: 'Planta inicial do DAD e do DEE',
    caption: 'Planta inicial do Departamento de Administração e do Departamento de Economia.'
  }
];

const normalizeText = (text: string) =>
  text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

export default function App() {
  const [activePanel, setActivePanel] = useState<PanelType>('overview');

  // Pop-up introdutório: abre automaticamente ao carregar o site
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(true);

  useEffect(() => {
    if (!isWelcomeOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsWelcomeOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isWelcomeOpen]);
  const [currentDecade, setCurrentDecade] = useState<number>(1970);
  const [selectedYear, setSelectedYear] = useState<number>(1974);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isODadMenuOpen, setIsODadMenuOpen] = useState(false);
  const [isMobileODadOpen, setIsMobileODadOpen] = useState(false);
  const [homenageadosQuery, setHomenageadosQuery] = useState('');
  const [homenageadosDecade, setHomenageadosDecade] = useState<number | null>(null);

  const [lightboxPhoto, setLightboxPhoto] = useState<{ url: string; caption: string; title: string } | null>(null);

  // Estado para abrir o Modal de Detalhes do Evento
  const [selectedEventModal, setSelectedEventModal] = useState<{ event: MemorialEvent; year?: number } | null>(null);

  const yearsInDecade = useMemo(() => {
    return Array.from({ length: 10 }, (_, i) => currentDecade + i).filter(y => y <= 2026);
  }, [currentDecade]);

  const decades = [1970, 1980, 1990, 2000, 2010, 2020];

  const hasAnyEvents = (memorialData[selectedYear]?.events || []).length > 0;

  const filteredEvents = useMemo(() => {
    const allEvents = memorialData[selectedYear]?.events || [];
    if (activeFilter === 'all') return allEvents;
    return allEvents.filter(e => e.tag === activeFilter);
  }, [selectedYear, activeFilter]);

  const allEventsForSearch = useMemo(() => {
    const list: Array<{ year: number; event: MemorialEvent }> = [];

    Object.entries(memorialData).forEach(([year, data]) => {
      data.events.forEach(event => list.push({ year: Number(year), event }));
    });

    return list;
  }, []);

  const searchIndex = useMemo(() => buildSearchIndex(allEventsForSearch), [allEventsForSearch]);

  const { results: searchResults, approximate: isApproximateSearch } = useMemo(
    () => searchMemorial(searchIndex, searchQuery),
    [searchQuery, searchIndex]
  );
  const searchTokens = useMemo(() => tokenize(searchQuery), [searchQuery]);
  const visibleSearchResults = searchResults.slice(0, MAX_SEARCH_RESULTS);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSearchIndex, setActiveSearchIndex] = useState(0);
  const searchBoxRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setActiveSearchIndex(0);
  }, [searchQuery]);

  // Menu mobile: trava a rolagem da página, fecha com Esc e já abre "O DAD" se uma de suas abas estiver ativa
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    setIsMobileODadOpen(O_DAD_PANELS.includes(activePanel));
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMobileMenuOpen]);

  // Fecha o dropdown ao clicar fora da busca
  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
  }, []);

  // Atalho "/" para focar a busca
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (e.key !== '/' || target.closest('input, textarea, select, [contenteditable="true"]')) return;
      e.preventDefault();
      searchInputRef.current?.focus();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const openSearchResult = ({ year, event }: { year: number; event: MemorialEvent }) => {
    setSelectedYear(year);
    setCurrentDecade(Math.floor(year / 10) * 10);
    setSelectedEventModal({ event, year });
    setIsSearchOpen(false);
    searchInputRef.current?.blur();
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      if (searchQuery) setSearchQuery('');
      else searchInputRef.current?.blur();
      return;
    }
    if (!visibleSearchResults.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setIsSearchOpen(true);
      setActiveSearchIndex(i => (i + 1) % visibleSearchResults.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSearchIndex(i => (i - 1 + visibleSearchResults.length) % visibleSearchResults.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      openSearchResult(visibleSearchResults[activeSearchIndex] ?? visibleSearchResults[0]);
    }
  };

  useEffect(() => {
    document.getElementById(`search-result-${activeSearchIndex}`)?.scrollIntoView({ block: 'nearest' });
  }, [activeSearchIndex]);


  const combinedGalleryPhotos = useMemo(() => {
    // Fotos coloridas primeiro, depois preto e branco; dentro de cada grupo mantém a ordem original.
    const photos = allGalleryPhotos;
    const semCor = (p: (typeof photos)[number]) => 'colorida' in p && p.colorida === false;
    return [...photos.filter(p => !semCor(p)), ...photos.filter(semCor)];
  }, []);

  const filteredColacoes = useMemo(() => {
    const query = normalizeText(homenageadosQuery.trim());
    return colacoesGrau.filter(colacao => {
      if (homenageadosDecade !== null && Math.floor(colacao.ano / 10) * 10 !== homenageadosDecade) {
        return false;
      }
      if (!query) return true;
      const haystack = normalizeText(
        [
          colacao.data,
          String(colacao.ano),
          colacao.nota || '',
          ...colacao.grupos.flatMap(grupo => [grupo.curso || '', ...grupo.linhas]),
        ].join(' ')
      );
      return haystack.includes(query);
    });
  }, [homenageadosQuery, homenageadosDecade]);

  const getTagIcon = (tag: string) => {
    switch (tag) {
      case 'fundacao': return <Award className="w-4 h-4" />;
      case 'ensino': return <GraduationCap className="w-4 h-4" />;
      case 'pesquisa': return <Microscope className="w-4 h-4" />;
      case 'extensao': return <Globe className="w-4 h-4" />;
      case 'gestao': return <Users className="w-4 h-4" />;
      case 'infraestrutura': return <Building2 className="w-4 h-4" />;
      case 'reconhecimento': return <Award className="w-4 h-4" />;
      case 'parceria': return <Handshake className="w-4 h-4" />;
      default: return <Info className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* TOP BAR */}
      <div className="bg-ufv-green-dark text-white/75 text-[10px] sm:text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <span className="text-center sm:text-left">Universidade Federal de Viçosa — Campus Viçosa, MG</span>
        </div>
      </div>

      {/* HEADER */}
      <header className="bg-ufv-green pt-4 sticky top-0 z-50 shadow-lg border-b-4 border-ufv-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-4 md:gap-6 pb-4">
          <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-transparent rounded-full flex items-center justify-center border-2 border-transparent shrink-0">
              <img src="/Vertical Branco Logo UFV.png" alt="Logo UFV" />
            </div>
            <div className="text-white overflow-hidden">
              <span className="font-serif text-[10px] sm:text-sm font-light tracking-wider opacity-90 block truncate">Universidade Federal de Viçosa</span>
              <span className="font-serif text-base sm:text-xl font-bold leading-tight block truncate">Departamento de Administração e Contabilidade</span>
              <span className="text-[9px] sm:text-[11px] tracking-[1px] sm:tracking-[2px] uppercase text-ufv-gold-light font-semibold block mt-0.5">Memorial · DAD</span>
            </div>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/25 shrink-0"></div>
          <div className="hidden lg:block text-white/75 text-sm leading-relaxed max-w-sm">
            Preservando a trajetória histórica e o legado acadêmico do Departamento de Administração e Contabilidade.
          </div>
          <div className="w-full md:w-auto md:ml-auto flex items-center gap-3">
            <div ref={searchBoxRef} className="flex-grow md:flex-none relative">
              <div className="flex items-center bg-white/10 border border-white/25 rounded-full px-4 py-1.5 focus-within:bg-white/20 focus-within:border-ufv-gold-light transition-all">
                <Search className="w-4 h-4 text-white/50 mr-2 shrink-0" />
                <input
                  ref={searchInputRef}
                  type="search"
                  placeholder="Pesquisar no Memorial…"
                  aria-label="Pesquisar no Memorial"
                  className="bg-transparent border-none text-white text-sm outline-none w-full md:w-48 placeholder:text-white/40 [&::-webkit-search-cancel-button]:hidden"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearchOpen(true);
                  }}
                  onFocus={() => setIsSearchOpen(true)}
                  onKeyDown={handleSearchKeyDown}
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      searchInputRef.current?.focus();
                    }}
                    className="ml-2 text-white/40 hover:text-white transition-colors shrink-0"
                    aria-label="Limpar busca"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* DROPDOWN DE BUSCA */}
              {isSearchOpen && searchQuery.trim() && (
                <div className="absolute top-full right-0 left-0 md:left-auto mt-2 bg-white rounded-xl shadow-2xl border border-ufv-border z-[200] max-h-[70vh] overflow-y-auto w-full md:w-[480px]">
                  <div className="sticky top-0 px-4 py-3 border-b border-ufv-border flex items-center justify-between bg-ufv-cream rounded-t-xl">
                    <span className="text-xs font-bold uppercase tracking-wider text-ufv-gray-light">
                      {searchResults.length} resultado{searchResults.length !== 1 ? 's' : ''}
                      {isApproximateSearch && <span className="normal-case font-medium tracking-normal"> · busca aproximada</span>}
                    </span>
                    <button onClick={() => setIsSearchOpen(false)} className="text-ufv-gray-light hover:text-ufv-gray transition-colors" aria-label="Fechar resultados">
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {searchResults.length === 0 ? (
                    <div className="px-4 py-10 text-center">
                      <Search className="w-8 h-8 text-ufv-border mx-auto mb-2" />
                      <p className="text-sm text-ufv-gray-light">Nenhum resultado para &ldquo;{searchQuery}&rdquo;.</p>
                      <p className="text-xs text-ufv-gray-light mt-1">Tente um nome, um ano (ex.: 1988) ou um tema (ex.: contábeis).</p>
                    </div>
                  ) : (
                    <div className="divide-y divide-ufv-border" role="listbox">
                      {visibleSearchResults.map((result, i) => {
                        const { year, event } = result;
                        return (
                          <button
                            key={`${year}-${i}-${event.title}`}
                            id={`search-result-${i}`}
                            role="option"
                            aria-selected={i === activeSearchIndex}
                            className={`w-full text-left px-4 py-3.5 transition-colors group ${i === activeSearchIndex ? 'bg-ufv-cream' : 'hover:bg-ufv-cream/60'}`}
                            onMouseEnter={() => setActiveSearchIndex(i)}
                            onClick={() => openSearchResult(result)}
                          >
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 rounded-full bg-ufv-green/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-ufv-green/20 transition-colors text-ufv-green">
                                {getTagIcon(event.tag)}
                              </div>
                              <div className="flex-grow min-w-0">
                                <div className="flex items-center gap-2 mb-0.5">
                                  <span className="text-[10px] font-bold text-ufv-gold uppercase tracking-wider">{year}</span>
                                  {event.tag && (
                                    <span className={`event-tag tag-${event.tag}`} style={{ fontSize: '9px', padding: '0 4px' }}>{event.tag}</span>
                                  )}
                                </div>
                                <div className="text-sm font-semibold text-ufv-gray leading-snug line-clamp-2">
                                  <Highlight text={event.title} tokens={searchTokens} />
                                </div>
                                <div className="text-xs text-ufv-gray-light mt-0.5 line-clamp-3 leading-relaxed">
                                  <Highlight text={makeSnippet(event.desc, searchTokens)} tokens={searchTokens} />
                                </div>
                              </div>
                              <ChevronRight className="w-4 h-4 text-ufv-border shrink-0 mt-2 group-hover:text-ufv-green transition-colors" />
                            </div>
                          </button>
                        );
                      })}
                      {searchResults.length > MAX_SEARCH_RESULTS && (
                        <p className="px-4 py-3 text-xs text-center text-ufv-gray-light">
                          Mostrando os {MAX_SEARCH_RESULTS} mais relevantes. Refine a busca para ver outros.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Abrir menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* NAVEGAÇÃO DE ABAS */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 hidden md:flex flex-wrap gap-1 pb-1">
          <button
            className={`nav-item whitespace-nowrap ${activePanel === 'overview' ? 'active' : ''}`}
            onClick={() => setActivePanel('overview')}
          >
            Visão Geral
          </button>
          <button
            className={`nav-item whitespace-nowrap ${activePanel === 'timeline' ? 'active' : ''}`}
            onClick={() => setActivePanel('timeline')}
          >
            Linha do Tempo
          </button>
          <button
            className={`nav-item whitespace-nowrap ${activePanel === 'photos' ? 'active' : ''}`}
            onClick={() => setActivePanel('photos')}
          >
            Fotos
          </button>
          <button
            className={`nav-item whitespace-nowrap ${activePanel === 'years' ? 'active' : ''}`}
            onClick={() => setActivePanel('years')}
          >
            Por Ano
          </button>
          <div
            className="relative"
            onMouseEnter={() => setIsODadMenuOpen(true)}
            onMouseLeave={() => setIsODadMenuOpen(false)}
          >
            <button
              className={`nav-item whitespace-nowrap flex items-center gap-1 ${O_DAD_PANELS.includes(activePanel) ? 'active' : ''}`}
              onClick={() => setIsODadMenuOpen(v => !v)}
              aria-haspopup="true"
              aria-expanded={isODadMenuOpen}
            >
              O DAD
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${isODadMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isODadMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full pt-2 z-[60] min-w-[240px]"
                >
                  <div className="bg-white rounded-lg shadow-2xl border border-ufv-border py-2 overflow-hidden">
                    <button
                      onClick={() => { setActivePanel('chefes'); setIsODadMenuOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-2.5 transition-colors ${activePanel === 'chefes' ? 'bg-ufv-cream text-ufv-green font-semibold' : 'text-ufv-gray hover:bg-ufv-cream hover:text-ufv-green'}`}
                    >
                      <Landmark className="w-4 h-4 shrink-0" /> Chefias
                    </button>
                    <button
                      onClick={() => { setActivePanel('professores'); setIsODadMenuOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-2.5 transition-colors ${activePanel === 'professores' ? 'bg-ufv-cream text-ufv-green font-semibold' : 'text-ufv-gray hover:bg-ufv-cream hover:text-ufv-green'}`}
                    >
                      <GraduationCap className="w-4 h-4 shrink-0" /> Professores Titulares
                    </button>
                    <button
                      onClick={() => { setActivePanel('professoresAtuais'); setIsODadMenuOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-2.5 transition-colors ${activePanel === 'professoresAtuais' ? 'bg-ufv-cream text-ufv-green font-semibold' : 'text-ufv-gray hover:bg-ufv-cream hover:text-ufv-green'}`}
                    >
                      <Users className="w-4 h-4 shrink-0" /> Professores Atuais
                    </button>
                    <button
                      onClick={() => { setActivePanel('professoresAposentados'); setIsODadMenuOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-2.5 transition-colors ${activePanel === 'professoresAposentados' ? 'bg-ufv-cream text-ufv-green font-semibold' : 'text-ufv-gray hover:bg-ufv-cream hover:text-ufv-green'}`}
                    >
                      <GraduationCap className="w-4 h-4 shrink-0" /> Professores Aposentados
                    </button>
                    <button
                      onClick={() => { setActivePanel('exProfessores'); setIsODadMenuOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-2.5 transition-colors ${activePanel === 'exProfessores' ? 'bg-ufv-cream text-ufv-green font-semibold' : 'text-ufv-gray hover:bg-ufv-cream hover:text-ufv-green'}`}
                    >
                      <Users className="w-4 h-4 shrink-0" /> Ex-Professores
                    </button>
                    <button
                      onClick={() => { setActivePanel('tecnicosAtuais'); setIsODadMenuOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-2.5 transition-colors ${activePanel === 'tecnicosAtuais' ? 'bg-ufv-cream text-ufv-green font-semibold' : 'text-ufv-gray hover:bg-ufv-cream hover:text-ufv-green'}`}
                    >
                      <UserCog className="w-4 h-4 shrink-0" /> Técnicos Administrativos Atuais
                    </button>
                    <button
                      onClick={() => { setActivePanel('tecnicosAposentados'); setIsODadMenuOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-2.5 transition-colors ${activePanel === 'tecnicosAposentados' ? 'bg-ufv-cream text-ufv-green font-semibold' : 'text-ufv-gray hover:bg-ufv-cream hover:text-ufv-green'}`}
                    >
                      <UserCog className="w-4 h-4 shrink-0" /> Técnicos Administrativos Aposentados
                    </button>
                    <button
                      onClick={() => { setActivePanel('homenageados'); setIsODadMenuOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-2.5 transition-colors ${activePanel === 'homenageados' ? 'bg-ufv-cream text-ufv-green font-semibold' : 'text-ufv-gray hover:bg-ufv-cream hover:text-ufv-green'}`}
                    >
                      <Award className="w-4 h-4 shrink-0" /> Profissionais Homenageados
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button
            className={`nav-item whitespace-nowrap ${activePanel === 'naipe' ? 'active' : ''}`}
            onClick={() => setActivePanel('naipe')}
          >
            NAIPE
          </button>
          <button
            className={`nav-item whitespace-nowrap ${activePanel === 'desmembramento' ? 'active' : ''}`}
            onClick={() => setActivePanel('desmembramento')}
          >
            O Desmembramento do DAE
          </button>
          <button
            className={`nav-item whitespace-nowrap ${activePanel === 'quebec' ? 'active' : ''}`}
            onClick={() => setActivePanel('quebec')}
          >
            🍁 Projeto Quebec
          </button>
          <div className="hidden sm:flex items-center">
            <div className="w-px h-6 bg-white/15 self-center mx-2 shrink-0"></div>
            <span className="text-[10px] tracking-[1.5px] uppercase text-white/35 font-semibold self-center mr-2 whitespace-nowrap">Décadas</span>
            <div className="flex gap-1">
              {decades.map(d => (
                <button
                  key={d}
                  className={`nav-item whitespace-nowrap ${activePanel === 'years' && currentDecade === d ? 'active' : ''}`}
                  onClick={() => {
                    setActivePanel('years');
                    setCurrentDecade(d);
                    setSelectedYear(memorialData[d] ? d : d + 4);
                  }}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] md:hidden"
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="fixed right-0 top-0 bottom-0 w-[86vw] max-w-sm bg-white z-[101] md:hidden shadow-2xl flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação"
            >
              <div className="bg-gradient-to-br from-ufv-green-dark to-ufv-green text-white px-5 pt-5 pb-4 border-b-4 border-ufv-gold">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <img src="/Vertical Branco Logo UFV.png" alt="Logo UFV" className="w-11 h-11 object-contain shrink-0" />
                    <div className="min-w-0">
                      <span className="font-serif text-base font-bold leading-tight block">Memorial DAD</span>
                      <span className="text-[11px] text-white/70 leading-snug block">Departamento de Administração e Contabilidade</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 -mr-2 -mt-1 hover:bg-white/10 rounded-full transition-colors shrink-0"
                    aria-label="Fechar menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex-grow overflow-y-auto px-3 py-5 space-y-6">
                <div>
                  <h4 className="px-3 text-[10px] tracking-[2px] uppercase text-ufv-gray-light font-bold mb-2">Explorar</h4>
                  <div className="space-y-0.5">
                    {[
                      { id: 'overview', label: 'Visão Geral', icon: <LayoutGrid className="w-[18px] h-[18px]" /> },
                      { id: 'timeline', label: 'Linha do Tempo', icon: <History className="w-[18px] h-[18px]" /> },
                      { id: 'photos', label: 'Fotos', icon: <ImageIcon className="w-[18px] h-[18px]" /> },
                      { id: 'years', label: 'Por Ano', icon: <Calendar className="w-[18px] h-[18px]" /> },
                    ].map(item => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActivePanel(item.id as PanelType);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`relative w-full flex items-center gap-3 px-3 py-3 rounded-lg text-[15px] transition-colors ${activePanel === item.id ? 'bg-ufv-green/10 text-ufv-green font-semibold' : 'text-ufv-gray hover:bg-ufv-cream'}`}
                      >
                        {activePanel === item.id && <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r bg-ufv-gold" />}
                        <span className={activePanel === item.id ? 'text-ufv-green' : 'text-ufv-gray-light'}>{item.icon}</span>
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="px-3 text-[10px] tracking-[2px] uppercase text-ufv-gray-light font-bold mb-2">O Departamento</h4>
                  <div className="space-y-0.5">
                    {/* SUBMENU O DAD */}
                    <button
                      onClick={() => setIsMobileODadOpen(v => !v)}
                      aria-expanded={isMobileODadOpen}
                      className={`w-full flex items-center justify-between gap-3 px-3 py-3 rounded-lg text-[15px] transition-colors hover:bg-ufv-cream ${O_DAD_PANELS.includes(activePanel) ? 'text-ufv-green font-semibold' : 'text-ufv-gray'}`}
                    >
                      <span className="flex items-center gap-3">
                        <span className={O_DAD_PANELS.includes(activePanel) ? 'text-ufv-green' : 'text-ufv-gray-light'}><Landmark className="w-[18px] h-[18px]" /></span>
                        O DAD
                      </span>
                      <ChevronDown className={`w-4 h-4 text-ufv-gray-light transition-transform ${isMobileODadOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isMobileODadOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="ml-[22px] pl-3 border-l-2 border-ufv-border space-y-0.5 py-1">
                            {[
                              { id: 'chefes', label: 'Chefias' },
                              { id: 'professores', label: 'Professores Titulares' },
                              { id: 'professoresAtuais', label: 'Professores Atuais' },
                              { id: 'professoresAposentados', label: 'Professores Aposentados' },
                              { id: 'exProfessores', label: 'Ex-Professores' },
                              { id: 'tecnicosAtuais', label: 'Técnicos Administrativos Atuais' },
                              { id: 'tecnicosAposentados', label: 'Técnicos Administrativos Aposentados' },
                              { id: 'homenageados', label: 'Profissionais Homenageados' },
                            ].map(item => (
                              <button
                                key={item.id}
                                onClick={() => {
                                  setActivePanel(item.id as PanelType);
                                  setIsMobileMenuOpen(false);
                                }}
                                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors ${activePanel === item.id ? 'bg-ufv-green/10 text-ufv-green font-semibold' : 'text-ufv-gray hover:bg-ufv-cream'}`}
                              >
                                {item.label}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {[
                      { id: 'naipe', label: 'NAIPE', icon: <Briefcase className="w-[18px] h-[18px]" /> },
                      { id: 'desmembramento', label: 'O Desmembramento do DAE', icon: <History className="w-[18px] h-[18px]" /> },
                      { id: 'quebec', label: 'Projeto Quebec', icon: <Globe className="w-[18px] h-[18px]" /> }
                    ].map(item => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActivePanel(item.id as PanelType);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`relative w-full flex items-center gap-3 px-3 py-3 rounded-lg text-[15px] transition-colors ${activePanel === item.id ? 'bg-ufv-green/10 text-ufv-green font-semibold' : 'text-ufv-gray hover:bg-ufv-cream'}`}
                      >
                        {activePanel === item.id && <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r bg-ufv-gold" />}
                        <span className={activePanel === item.id ? 'text-ufv-green' : 'text-ufv-gray-light'}>{item.icon}</span>
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="px-3">
                  <h4 className="text-[10px] tracking-[2px] uppercase text-ufv-gray-light font-bold mb-3">Décadas</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {decades.map(d => (
                      <button
                        key={d}
                        onClick={() => {
                          setActivePanel('years');
                          setCurrentDecade(d);
                          setSelectedYear(memorialData[d] ? d : d + 4);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`py-2.5 rounded-lg border text-sm font-bold transition-colors ${currentDecade === d && activePanel === 'years' ? 'bg-ufv-gold text-white border-ufv-gold' : 'border-ufv-border text-ufv-gray hover:border-ufv-green hover:text-ufv-green'}`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-5 py-4 bg-ufv-cream border-t border-ufv-border text-[10px] text-ufv-gray-light text-center">
                © 2026 Memorial DAD · UFV
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* BREADCRUMB */}
      <div className="bg-white border-b border-ufv-border py-3 px-6">
        <div className="max-w-7xl mx-auto text-xs text-ufv-gray-light flex items-center gap-1.5">
          <a href="https://www.ufv.br/" className="text-ufv-green hover:underline">UFV</a>
          <span className="opacity-50">›</span>
          <a href="https://cch.ufv.br/" className="text-ufv-green hover:underline">CCH</a>
          <span className="opacity-50">›</span>
          <a href="https://dad.ufv.br/" className="text-ufv-green hover:underline">DAD</a>
          <span className="opacity-50">›</span>
          <span className="font-bold text-ufv-gray">Memorial</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <div className="bg-gradient-to-br from-ufv-green-dark via-ufv-green to-[#1E3A8A] text-white py-10 sm:py-14 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] border-[40px] sm:border-[60px] border-white/5 rounded-full"></div>
        <div className="absolute right-20 -bottom-32 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] border-[30px] sm:border-[40px] border-ufv-gold/10 rounded-full"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-[9px] sm:text-[11px] tracking-[2px] sm:tracking-[3px] uppercase text-ufv-gold-light font-bold mb-3">Memorial Histórico · Desde 1974</div>
          <h1 className="font-serif text-2xl sm:text-4xl font-bold mb-4 max-w-2xl">Departamento de Administração e Contabilidade</h1>
          <p className="text-base sm:text-lg text-white/80 max-w-xl font-light leading-relaxed">
            Cinco décadas dedicadas ao ensino, à pesquisa e à extensão nas ciências administrativas e contábeis.
          </p>
          <div className="grid grid-cols-3 gap-4 sm:flex sm:gap-12 mt-9 pt-7 border-t border-white/15">
            <div className="text-center sm:text-left">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-ufv-gold-light block">50+</span>
              <span className="text-[10px] sm:text-xs text-white/65 font-medium tracking-wide">Anos de história</span>
            </div>
            <div className="text-center sm:text-left">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-ufv-gold-light block">3</span>
              <span className="text-[10px] sm:text-xs text-white/65 font-medium tracking-wide">Graduações</span>
            </div>
            <div className="text-center sm:text-left">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-ufv-gold-light block">1974</span>
              <span className="text-[10px] sm:text-xs text-white/65 font-medium tracking-wide">Fundação</span>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-10 flex-grow w-full">
        <AnimatePresence mode="wait">
          {activePanel === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              <div className="lg:col-span-2 space-y-6">
                <div className="card">
                  <h2 className="card-title">
                    <div className="card-icon"><BookOpen className="w-4 h-4 text-white" /></div>
                    Sobre o Memorial
                  </h2>
                  <div className="space-y-4 text-ufv-gray text-[15px] leading-relaxed">
                    <p>
                      O Memorial do Departamento de Administração e Contabilidade (DAD) da Universidade Federal de Viçosa constitui um espaço de preservação da memória institucional do departamento, fundado em <strong>1974</strong>.
                    </p>
                    <p>
                      Ao longo de cinco décadas, o DAD consolidou-se como um dos principais centros de formação em Administração e Ciências Contábeis, contribuindo para o desenvolvimento regional e nacional por meio da produção científica e formação de excelência.
                    </p>
                  </div>
                </div>

                <div className="card">
                  <h2 className="card-title">
                    <div className="card-icon"><BookOpen className="w-4 h-4 text-white" /></div>
                    Notícias e Documentos
                  </h2>
                  <div className="space-y-3">
                    {[
                      { title: 'Primeira Jornada Acadêmica', href: 'https://drive.google.com/file/d/1TB5j47Hrl4t3ARd_EQeOhFXMJoE65f3u/view?usp=sharing' },
                      { title: 'ASPUV', href: 'https://drive.google.com/file/d/1gBKFZjv0gpCJCEb4wFvR4mxQ5CLwdfXB/view?usp=sharing' },
                      { title: 'Criação do Curso de Ciências Contábeis', href: 'https://drive.google.com/file/d/1pMLkf3Oo0GsRm-MDJghAiqqZD8XsIY1s/view?usp=sharing' },
                      { title: 'Relatório de Atividade de Extensão', href: 'https://drive.google.com/file/d/1LNJB9rQCBQNrhq0F45nexkNSxz05ru1I/view?usp=sharing' },
                      { title: 'O Planejamento Estratégico e sua Aplicação na Organização Universitária', href: 'https://drive.google.com/file/d/1UILui-B0EgioEWPag5cvIu-LFPZLNcCY/view?usp=sharing' },
                      { title: 'Decreto de 15 de julho de 1969', href: 'https://drive.google.com/file/d/1me5KgBsIgS96khG-4vUO1JpkfVKf_e2G/view?usp=sharing' },
                      { title: 'Regulamentação do uso da biblioteca e laboratório de informática', href: 'https://drive.google.com/file/d/1Dv8SEC1a44m8tGYt_DFmzdumRzYjcRls/view?usp=sharing' },
                      { title: 'Relação de Lotação do Departamento de Administração', href: 'https://drive.google.com/file/d/1mlF7PkAPCmMLgRISsl9AcN4H7jUEUrJQ/view?usp=sharing' },
                    ].map((news, i) => (
                      <div key={i} className="flex items-center justify-between gap-4 py-3 border-b border-ufv-border last:border-none">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-ufv-gold shrink-0"></div>
                          <span className="text-sm font-medium text-ufv-gray">{news.title}</span>
                        </div>
                        <a
                          href={news.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 flex items-center gap-1.5 text-xs font-semibold text-ufv-green border border-ufv-green rounded-full px-3 py-1 hover:bg-ufv-green hover:text-white transition-colors"
                        >
                          Documento <ChevronRight className="w-3 h-3" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card">
                  <h2 className="card-title">
                    <div className="card-icon"><Award className="w-4 h-4 text-white" /></div>
                    Marcos Históricos
                  </h2>
                  <div className="space-y-6">
                    {[
                      { year: '1974', tag: 'fundacao', title: 'Criação do Departamento', desc: 'O DAD foi criado a partir da reorganização acadêmica da UFV.' },
                      { year: '1988', tag: 'ensino', title: 'Curso de Ciências Contábeis', desc: 'Implantação do curso de graduação em Ciências Contábeis.' },
                    ].map((m, i) => (
                      <div key={i} className="flex gap-5">
                        <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${m.tag === 'fundacao' || m.tag === 'reconhecimento' ? 'bg-ufv-gold' : 'bg-ufv-green/10'}`}>
                          {m.tag === 'fundacao' ? <Award className="w-5 h-5 text-white" /> : <GraduationCap className={`w-5 h-5 ${m.tag === 'reconhecimento' ? 'text-white' : 'text-ufv-green'}`} />}
                        </div>
                        <div>
                          <span className={`event-tag tag-${m.tag}`}>{m.tag}</span>
                          <div className="font-semibold text-ufv-gray">{m.title} ({m.year})</div>
                          <div className="text-sm text-ufv-gray-light mt-1">{m.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white border border-ufv-border rounded-lg overflow-hidden">
                  <div className="bg-ufv-green text-white px-4 py-3 text-sm font-semibold tracking-wide">Navegação Rápida</div>
                  <div className="p-4 space-y-1">
                    {decades.map(d => (
                      <button
                        key={d}
                        onClick={() => {
                          setActivePanel('years');
                          setCurrentDecade(d);
                        }}
                        className="w-full flex items-center gap-2.5 py-2.5 border-b border-ufv-border last:border-none text-sm text-ufv-gray hover:text-ufv-green transition-colors text-left"
                      >
                        <div className="w-2 h-2 rounded-full bg-ufv-gold shrink-0"></div>
                        Década de {d}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white border border-ufv-border rounded-lg overflow-hidden">
                  <div className="bg-ufv-green text-white px-4 py-3 text-sm font-semibold tracking-wide">Informações</div>
                  <div className="p-4 text-xs text-ufv-gray leading-relaxed space-y-3">
                    <p><strong>Endereço:</strong><br />Av. Peter Henry Rolfs, s/n — Campus UFV, Viçosa/MG</p>
                    <p><strong>Departamento:</strong><br />DAD — Administração e Contabilidade</p>
                    <p><strong>Fundado em:</strong> 1974</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activePanel === 'timeline' && (
            <motion.div
              key="timeline"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-4xl mx-auto space-y-8"
            >
              <div className="bg-gradient-to-br from-ufv-green-dark via-ufv-green to-[#1E3A8A] text-white rounded-2xl p-8 relative overflow-hidden shadow-xl">
                <div className="absolute -right-10 -top-10 w-48 h-48 border-[30px] border-white/5 rounded-full"></div>
                <div className="absolute right-16 -bottom-16 w-32 h-32 border-[20px] border-ufv-gold/10 rounded-full"></div>
                <div className="relative z-10">
                  <div className="text-[11px] tracking-[3px] uppercase text-ufv-gold-light font-bold mb-4">Memorial Histórico · UFV & DAD</div>
                  <h1 className="font-serif text-2xl sm:text-3xl font-bold mb-4 leading-tight">
                    Tudo iniciou em 1925…
                  </h1>
                  <p className="text-white/85 text-base sm:text-lg leading-relaxed max-w-2xl">
                    E hoje, em <strong>2026</strong>, a UFV completa os seus <strong>100 anos</strong> e o Departamento de Administração e Contabilidade seus <strong>50 anos jubilosos</strong> em conquistas e inovações.
                  </p>
                  <p className="text-white/65 text-sm mt-4 italic leading-relaxed">
                    A realidade nem sempre foi assim… Muitos sacrifícios, percalços, conquistas e vitórias!<br />
                    Vejamos alguns fatos marcantes e merecedores.
                  </p>
                </div>
              </div>

              <div className="card">
                <h2 className="card-title">
                  <div className="card-icon"><History className="w-4 h-4 text-white" /></div>
                  As Origens da UFV
                </h2>
                <div className="space-y-4 text-ufv-gray text-[15px] leading-relaxed">
                  <p>
                    A UFV, sucessora da antiga <strong>Escola Superior de Agricultura e Veterinária – ESAV</strong>, foi concebida em{' '}
                    <strong>06 de Setembro de 1920</strong> (Lei nº 761) e criada em <strong>30 de Março de 1922</strong> (Decreto 6.053)
                    pelo Governador do Estado de Minas Gerais, <strong>Arthur da Silva Bernardes</strong>, autorizando o governo a criar a
                    Escola Superior de Agricultura e Veterinária do Estado de Minas Gerais.
                  </p>
                  <p>
                    Nos moldes dos <em>"Land Grant Colleges"</em>, semelhante às escolas direcionadas à agricultura,{' '}
                    <strong>Peter Henry Rolfs</strong> foi o indicado e o responsável pela implantação e direção da ESAV.
                    Sua inauguração deu-se em <strong>28 de agosto de 1926</strong> por Arthur da Silva Bernardes, então como Presidente da República.
                    Cursos oferecidos: Fundamental, Médio e Superior nos anos <strong>1927</strong> e <strong>1928</strong>.
                  </p>
                  <div className="bg-ufv-cream border border-ufv-border rounded-lg p-5">
                    <div className="text-[11px] tracking-[2px] uppercase font-bold text-ufv-gold mb-3">✦ Curiosidades</div>
                    <p className="text-sm">
                      Durante o dia e antes desse período, as aulas primárias eram lecionadas aos filhos dos operários da construção,
                      devido ao alto nível de analfabetismo. Também os operários tinham aulas, mas à noite, uma vez que mais de{' '}
                      <strong>80% deles eram analfabetos</strong>, reduzindo esse índice para menos de <strong>10% em 1926</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <h2 className="card-title">
                  <div className="card-icon"><BookOpen className="w-4 h-4 text-white" /></div>
                  Marcos que Moldaram a Instituição
                </h2>
                <div className="space-y-6 mt-2 text-ufv-gray text-[15px] leading-relaxed">
                  <div className="border-l-4 border-ufv-gold pl-5">
                    <div className="text-[11px] tracking-[2px] uppercase font-bold text-ufv-gold mb-1">1942</div>
                    <p>
                      A trajetória da UFV implicou no desmembramento do curso de Veterinária da ESAV e sua transferência para Belo Horizonte,
                      ficando vinculado ao Estado de Minas Gerais sob a denominação de <strong>Escola Superior de Veterinária</strong> (Decreto-Lei Estadual nº 824, de 20 de janeiro).
                    </p>
                  </div>
                  <div className="border-l-4 border-ufv-green pl-5">
                    <div className="text-[11px] tracking-[2px] uppercase font-bold text-ufv-green mb-1">1948</div>
                    <p>
                      A ESAV se tornou a <strong>Universidade Rural do Estado de Minas Gerais – UREMG</strong>, formada pela Escola Superior de Ciências Domésticas,
                      pela Escola de Especialização (Pós-Graduação), pelo Serviço de Experimentação e Pesquisa e pelo Serviço de Extensão,
                      agregando a Escola Superior de Agricultura, de Viçosa, com a Escola Superior de Veterinária, de Belo Horizonte
                      (Lei nº 272, de 13 de novembro de 1948).
                    </p>
                  </div>
                  <div className="border-l-4 border-ufv-gold pl-5">
                    <div className="text-[11px] tracking-[2px] uppercase font-bold text-ufv-gold mb-1">1969</div>
                    <p>
                      Ocorreu a <strong>federalização da UFV</strong> (Decreto-Lei nº 570, de 8 de maio de 1969), configurando-se como pessoa jurídica
                      a partir de 1º de agosto (Decreto nº 64.825, de 15 de julho).
                    </p>
                  </div>
                  <div className="border-l-4 border-ufv-green pl-5">
                    <div className="text-[11px] tracking-[2px] uppercase font-bold text-ufv-green mb-1">1975</div>
                    <p>
                      Da Escola Superior de Ciências Domésticas germinaram as Ciências Humanas com a implantação do{' '}
                      <strong>Instituto de Ciências Humanas</strong>, aprovado pelo CEPE (Ata 72/1975) e pelo CONSU (Ata 42/75).
                    </p>
                  </div>
                  <div className="border-l-4 border-ufv-gold pl-5">
                    <div className="text-[11px] tracking-[2px] uppercase font-bold text-ufv-gold mb-1">1976</div>
                    <p>
                      Pela Portaria nº 70, de 11 de fevereiro, o Reitor designou os Professores Evonir Batista de Oliveira,
                      Juraci Aureliano Teixeira, Sônia Coelho de Alvarenga e Maria da Conceição Rolim Simões para equacionarem todas
                      as providências à efetiva implantação do Instituto de Ciências Humanas.
                    </p>
                  </div>
                  <div className="border-l-4 border-ufv-green pl-5">
                    <div className="text-[11px] tracking-[2px] uppercase font-bold text-ufv-green mb-1">1978</div>
                    <p>
                      Em razão das escolas superiores adotarem os centros como unidades acadêmicas, o antigo Instituto de Ciências Humanas
                      tornou-se o <strong>Centro de Ciências Humanas</strong>, em 3 de outubro de 1978.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <h2 className="card-title">
                  <div className="card-icon"><GraduationCap className="w-4 h-4 text-white" /></div>
                  As Raízes do CCH e do DAE (DAD)
                </h2>
                <div className="space-y-4 text-ufv-gray text-[15px] leading-relaxed">
                  <div className="border border-ufv-border rounded-lg p-5 bg-ufv-cream/40">
                    <p className="mb-3">
                      Em suma, o início do CCH está na <strong>Economia Doméstica</strong> e na <strong>Economia Rural</strong>, que eram, à época,
                      extensões das Ciências Agrárias. Essas duas áreas deram origem aos departamentos e cursos que compõem o atual CCH.
                    </p>
                    <p className="mb-3">
                      Da Economia Doméstica, surgiram os cursos de <strong>Letras</strong> e de <strong>Educação</strong>. Da Economia Rural, foram criados os cursos de{' '}
                      <strong>Administração</strong>, <strong>Economia</strong>, <strong>Cooperativismo</strong> e o{' '}
                      <strong>Curso de Gestão do Agronegócio</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activePanel === 'quebec' && (
            <motion.div
              key="quebec"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-ufv-green-dark via-ufv-green to-[#1E3A8A] text-white rounded-2xl p-8 mb-8 relative overflow-hidden shadow-xl">
                <div className="absolute -right-10 -top-10 w-48 h-48 border-[30px] border-white/5 rounded-full"></div>
                <div className="absolute right-16 -bottom-16 w-32 h-32 border-[20px] border-ufv-gold/10 rounded-full"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-xl">🍁</div>
                    <span className="text-[11px] tracking-[2px] uppercase text-ufv-gold-light font-bold">Cooperação Internacional · 1989</span>
                  </div>
                  <h1 className="font-serif text-2xl sm:text-3xl font-bold mb-3 leading-tight">Projeto Quebec</h1>
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl">
                    A parceria que consolidou tecnologicamente a UFV e projetou o Departamento de Administração no cenário da cooperação internacional.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="card">
                  <h2 className="card-title">
                    <div className="card-icon"><History className="w-4 h-4 text-white" /></div>
                    Memória UFV: O Impacto do "Projeto Quebec"
                  </h2>
                  <div className="space-y-4 text-ufv-gray text-[15px] leading-relaxed">
                    <p>
                      <strong>VIÇOSA</strong> – No final da década de 1980, mais precisamente em torno de <strong>1989</strong>, a Universidade Federal de Viçosa (UFV) vivenciava um período efervescente de expansão acadêmica/cientifica. Foi nesse cenário de redemocratização e busca por modernização que ganhou força a cooperação internacional com instituições canadenses, com protagonismo direto do <strong>Departamento de Administração (DAD)</strong>.
                    </p>
                  </div>
                </div>

                <div className="card">
                  <h2 className="card-title">
                    <div className="card-icon"><Users className="w-4 h-4 text-white" /></div>
                    O Protagonismo Feminino: As Missões Internacionais
                  </h2>
                  <div className="space-y-4 text-ufv-gray text-[15px] leading-relaxed">
                    <p>
                      O coração do projeto batia através do intercâmbio docente. Em <strong>23 de junho de 1989</strong>, um comitê de professoras da UFV realizou uma histórica viagem oficial para visitar universidades no Canadá. Entre os nomes de destaque, figuram as professoras <strong>Nina Rosa</strong> e <strong>Maria Elena Barbassa</strong>.
                    </p>
                  </div>
                </div>

                <div className="card">
                  <h2 className="card-title">
                    <div className="card-icon"><Handshake className="w-4 h-4 text-white" /></div>
                    UFV e Universidade de Quebec Avançam em Parceria Internacional para Impulsionar Pequenas e Médias Empresas na Zona da Mata
                  </h2>
                  <div className="space-y-4 text-ufv-gray text-[15px] leading-relaxed">
                    <p>
                      <strong>VIÇOSA (MG)</strong> – A Universidade Federal de Viçosa (UFV) está a consolidar um ambicioso programa de <strong>cooperação técnica internacional</strong> com a <strong>Universidade de Quebec</strong>, através do campus de <strong>Chicoutimi (UQAC)</strong>, no Canadá. O projeto bilateral visa transformar o panorama socioeconómico da <strong>Zona da Mata mineira</strong> por meio da capacitação académica e do fortalecimento das <strong>Pequenas e Médias Empresas (PMEs)</strong>.<sup className="text-[10px] text-ufv-gold ml-0.5">12</sup>
                    </p>
                    <div className="bg-ufv-cream border border-ufv-border rounded-lg p-5">
                      <p className="text-sm">
                        A iniciativa ganhou novo fôlego com a recente visita de três semanas do professor <strong>André Courtemanche</strong>, antigo diretor do Departamento de Ciências Económicas e Administrativas da UQAC, à UFV. Durante a sua estadia, o docente reuniu-se com dirigentes e professores locais para detalhar as diretrizes de execução do programa.<sup className="text-[10px] text-ufv-gold ml-0.5">34</sup>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <h2 className="card-title">
                    <div className="card-icon"><Landmark className="w-4 h-4 text-white" /></div>
                    Os Três Pilares do Projeto
                  </h2>
                  <div className="space-y-6 mt-2 text-ufv-gray text-[15px] leading-relaxed">
                    <p>
                      Desenvolvido pelas professoras <strong>Maria Elena Barbassa</strong> e <strong>Nina Rosa da Silveira Cunha</strong>, do Departamento de Administração (DAD) da UFV, o pré-projeto foca-se em metas estratégicas de longo prazo:<sup className="text-[10px] text-ufv-gold ml-0.5">5</sup>
                    </p>
                    <div className="border-l-4 border-ufv-gold pl-5">
                      <div className="text-[11px] tracking-[2px] uppercase font-bold text-ufv-gold mb-1">Doutoramento de Docentes</div>
                      <p>
                        Previsão de formação e aperfeiçoamento de <strong>6 a 8 professores do DAD</strong> em nível de <strong>Ph.D. no Canadá</strong>, direcionados para universidades associadas como a Universidade de Quebec em Montreal, as HEC de Montreal e a Universidade Laval.<sup className="text-[10px] text-ufv-gold ml-0.5">6</sup>
                      </p>
                    </div>
                    <div className="border-l-4 border-ufv-green pl-5">
                      <div className="text-[11px] tracking-[2px] uppercase font-bold text-ufv-green mb-1">Mestrado Inédito em Gestão de PMEs</div>
                      <p>
                        Implantação de um curso de <strong>pós-graduação (M.Sc.) em Administração de Pequenas e Médias Empresas</strong> na UFV. O currículo estruturado prevê áreas de concentração voltadas para Recursos Humanos, Finanças, Mercadologia e Sistemas de Informação. A primeira turma cumprirá parte dos estudos no Canadá.<sup className="text-[10px] text-ufv-gold ml-0.5">789</sup>
                      </p>
                    </div>
                    <div className="border-l-4 border-ufv-gold pl-5">
                      <div className="text-[11px] tracking-[2px] uppercase font-bold text-ufv-gold mb-1">Centro de Excelência e Incubadora</div>
                      <p>
                        Transformação do atual Núcleo de Apoio Integral ao Pequeno Empresário <strong>(NAIPE)</strong> da UFV num <strong>Centro de Excelência em Estudos Aplicados à PME</strong>. O plano inclui a criação de uma <strong>incubadora de empresas</strong> para transferir e adaptar a experiência canadiana à realidade empresarial brasileira.<sup className="text-[10px] text-ufv-gold ml-0.5">1011</sup>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <h2 className="card-title">
                    <div className="card-icon"><Briefcase className="w-4 h-4 text-white" /></div>
                    Resposta a uma Procura Regional Estratégica
                  </h2>
                  <div className="space-y-4 text-ufv-gray text-[15px] leading-relaxed">
                    <p>
                      A urgência do projeto justifica-se pelos dados económicos da região. No Brasil, as PMEs representam <strong>98% do tecido empresarial</strong> e são responsáveis por <strong>mais de 72% dos postos de trabalho</strong>. Na região de Viçosa, contudo, os empresários enfrentam graves entraves como a obsolescência de equipamentos, dificuldades de comercialização, falta de capital circulante e escassez de mão-de-obra qualificada devido ao êxodo rural para grandes centros.<sup className="text-[10px] text-ufv-gold ml-0.5">21213</sup>
                    </p>
                    <div className="border border-ufv-border rounded-lg p-5 bg-ufv-cream/40">
                      <p>
                        Com a consolidação do Centro de Excelência, o NAIPE — que já atua ativamente na promoção de cursos e na prestação de consultorias — pretende expandir o seu raio de ação. A meta é aperfeiçoar cerca de <strong>200 empreendedores regionais</strong> e aconselhar <strong>30 empresas anualmente</strong>, absorvendo também estudantes de administração em estágios práticos.<sup className="text-[10px] text-ufv-gold ml-0.5">1415</sup>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <h2 className="card-title">
                    <div className="card-icon"><Building2 className="w-4 h-4 text-white" /></div>
                    Infraestrutura e Próximos Passos
                  </h2>
                  <div className="space-y-4 text-ufv-gray text-[15px] leading-relaxed">
                    <p>
                      Apesar do otimismo, o projeto enfrenta desafios estruturais. As negociações avançam para obter o apoio financeiro de agências como a canadiana <strong>ACDI (CIDA)</strong> e as brasileiras <strong>CAPES</strong> e <strong>CNPq</strong>. O orçamento global delineado também prevê a captação de recursos junto do Canadá para a retoma e conclusão do <strong>edifício do Departamento de Administração da UFV</strong>, cujas obras foram interrompidas por restrições financeiras, restando ainda <strong>67% da estrutura</strong> por finalizar. O plano inclui ainda a compra de <strong>25 computadores</strong> para equipar um novo laboratório de informática para a pós-graduação.<sup className="text-[10px] text-ufv-gold ml-0.5">1617</sup>
                    </p>
                    <div className="bg-ufv-cream border border-ufv-border rounded-lg p-5">
                      <p className="text-sm">
                        A cooperação internacional já foi formalizada através de <strong>cartas de intenção</strong> assinadas pelo Reitor da UFV, <strong>António Fagundes de Sousa</strong>, e pelo Reitor da UQAC, <strong>Hubert Laforge</strong>. Espera-se que, no prazo de quatro a cinco anos após o início efetivo, o programa alcance a sua total autonomia académica e financeira.
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://drive.google.com/file/d/12G0cwzmnwP6BNYCBhuiw3jqnp8KmITqn/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-ufv-green text-white px-5 py-2.5 rounded-lg hover:bg-ufv-green-dark transition-colors font-semibold"
                >
                  Documento Completo
                </a>
              </div>
            </motion.div>
          )}

          {activePanel === 'desmembramento' && (
            <motion.div
              key="desmembramento"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-ufv-green-dark via-ufv-green to-[#1E3A8A] text-white rounded-2xl p-8 mb-8 relative overflow-hidden shadow-xl">
                <div className="absolute -right-10 -top-10 w-48 h-48 border-[30px] border-white/5 rounded-full"></div>
                <div className="absolute right-16 -bottom-16 w-32 h-32 border-[20px] border-ufv-gold/10 rounded-full"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                      <History className="w-5 h-5 text-ufv-gold-light" />
                    </div>
                    <span className="text-[11px] tracking-[2px] uppercase text-ufv-gold-light font-bold">Marco Histórico · 1988</span>
                  </div>
                  <h1 className="font-serif text-2xl sm:text-3xl font-bold mb-3 leading-tight">A Ascensão da Administração na UFV: O Desmembramento do DAE e a Consolidação do DAD</h1>
                </div>
              </div>

              <div className="space-y-6">
                <div className="card">

                  <div className="space-y-4 text-ufv-gray text-[15px] leading-relaxed">
                  </div>
                  <div className="space-y-4 text-ufv-gray text-[15px] leading-relaxed">
                    <p>Ao longo dos <strong>14 anos</strong> de harmoniosa convivência, os cursos de <strong>Administração de Empresas e de Ciências Econômicas</strong> compartilharam a estrutura do Departamento de Administração e Economia (DAE). Em razão da expansão das atividades de ensino, pesquisa e extensão, os dois cursos tornaram-se independentes, conquistando autonomia, o que resultou em duas estruturas distintas: Departamento de Administração (DAD) e Departamento de Economia (DEE), cada qual seguindo trajetórias diferentes.
                      </p>
                  </div>
                  <div className="mt-4">
                    <strong> Maio de 1988,</strong> marco da transformação do DAD, o momento culminante e ápice de seu notável percurso até os dias atuais.</div>
                  
                  <div>
                    <p className="mt-4">A divisão ocorreu de forma amigável com a criação de mais uma Chefia de Departamento e uma Chefia de Seção, com a distribuição das disciplinas, de bens patrimoniais (critério de vincular o bem ao servidor que mais o utiliza, os bens comuns distribuídos equitativamente ou por meio de sorteio, e, aquisição de bens patrimoniais adicionais), lotação de pessoal e espaço físico que continuaria provisoriamente no mesmo local até que se construísse a nova sede.
                     </p>
                     <p> A condução dessa grande empreitada ficou a cargo da Comissão constituída pela Portaria 418/88/UFV, com o aval de todos os professores e servidores do DAE que já almejavam há algum tempo essa independência e com a chancela dos Professores <strong>Juraci Aureliano Teixeira e Gualberto Ferreira da Silva</strong>, cujo trabalho respaldou essa nova trajetória institucional.</p>
                    <p className="mt-12 text-right italic">
                      <strong>O Divisor de Águas: O Parecer 221/88 </strong>
                      O desmembramento oficial foi selado em 30 de março de 1988. Naquela data, o Conselho Federal de Educação (CFE), por meio do Parecer nº 221/88, autorizou a divisão do DAE em duas unidades administrativas independentes: Departamento de Administração (DAD) e Departamento de Economia (DEE).
                    </p>

                    <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-6">
                      {plantasDAD.map((foto) => (
                        <figure
                          key={foto.id}
                          className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-shadow hover:shadow-lg"
                        >
                          <img
                            src={encodeURI(foto.url)}
                            alt={foto.title}
                            className="h-64 w-full bg-gray-50 object-contain"
                          />
                          <figcaption className="px-4 py-3 text-center text-sm italic text-gray-600">
                            {foto.caption}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>

                </div>

                <a
                  href="https://drive.google.com/file/d/11OFVzuJyKXlRgNeyjeaKnn2caECTCpnz/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-ufv-green text-white px-5 py-2.5 rounded-lg hover:bg-ufv-green-dark transition-colors font-semibold"
                >
                  Documento Completo
                </a>
              </div>
            </motion.div>
          )}

          {activePanel === 'naipe' && (
            <motion.div
              key="naipe"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-ufv-green-dark via-ufv-green to-[#1E3A8A] text-white rounded-2xl p-8 mb-8 relative overflow-hidden shadow-xl">
                <div className="absolute -right-10 -top-10 w-48 h-48 border-[30px] border-white/5 rounded-full"></div>
                <div className="absolute right-16 -bottom-16 w-32 h-32 border-[20px] border-ufv-gold/10 rounded-full"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-ufv-gold-light" />
                    </div>
                    <span className="text-[11px] tracking-[2px] uppercase text-ufv-gold-light font-bold">Marco Histórico · 1986</span>
                  </div>
                  <h1 className="font-serif text-2xl sm:text-3xl font-bold mb-3 leading-tight">NAIPE – Núcleo de Assistência Integral da Pequena e Média Empresa</h1>
                </div>
              </div>

              <div className="space-y-6">
                <div className="card">
                  <div className="space-y-4 text-ufv-gray text-[15px] leading-relaxed">
                    <p>O Departamento de Administração, consciente da exigência e da predominância de micro, pequenas e médias empresas no País, procurou diferenciar suas atividades com vistas a suprir esse mercado específico, criando em <strong>11 de Julho de 1986</strong> o <strong>Núcleo de Assistência Integral da Pequena e Média Empresa – NAIPE</strong>. A iniciativa foi pioneira no âmbito das escolas brasileiras de Administração e teve como objetivo desenvolver programas e ações de apoio a essas empresas, na áreas gerencial, financeira e técnica, bem como estimular a criação de novos empreendimentos e desenvolvimento de empreendedores.</p>
                    <p>Fruto do Convênio com o <strong>CEAG-MG (atual SEBRAE-MG), BDMG e INDI</strong>, o NAIPE teve como protagonistas os professores <strong>Adriel Rodrigues de Oliveira, Maria Elena Barbassa e Nina Rosa da Silveira Cunha</strong>, cuja atuação foi fundamental para a concretização da iniciativa.</p>
                    <p className="mt-8 italic">
                      Informações complementares desse momento histórico são ilustradas na aba “<strong>Linha do Tempo</strong>”, no ano de <strong>1986</strong>.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setActivePanel('years');
                    setCurrentDecade(1980);
                    setSelectedYear(1986);
                  }}
                  className="inline-block bg-ufv-green text-white px-5 py-2.5 rounded-lg hover:bg-ufv-green-dark transition-colors font-semibold"
                >
                  Notícia
                </button>
              </div>
            </motion.div>
          )}

          {activePanel === 'chefes' && (
            <motion.div
              key="chefes"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-ufv-green-dark via-ufv-green to-[#1E3A8A] text-white rounded-2xl p-8 mb-8 relative overflow-hidden shadow-xl">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                      <Landmark className="w-5 h-5 text-ufv-gold-light" />
                    </div>
                    <span className="text-[11px] tracking-[2px] uppercase text-ufv-gold-light font-bold">Liderança Institucional</span>
                  </div>
                  <h1 className="font-serif text-2xl sm:text-3xl font-bold mb-3 leading-tight">Chefias do Departamento</h1>
                </div>
              </div>

              <div className="space-y-4">
                {chefesDepartamento.map((chefe) => (
                  <div key={chefe.id} className="card flex flex-col sm:flex-row gap-5 sm:items-center">
                    <div className="w-16 h-16 rounded-full bg-ufv-green/10 border-2 border-ufv-green/20 flex items-center justify-center shrink-0 overflow-hidden mx-auto sm:mx-0">
                      {chefe.foto ? (
                        <img src={chefe.foto} alt={chefe.nome} className="w-full h-full object-cover" />
                      ) : (
                        <Landmark className="w-7 h-7 text-ufv-green" />
                      )}
                    </div>
                    <div className="flex-grow text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 mb-1">
                        <span className="font-serif text-lg font-bold text-ufv-gray">{chefe.nome}</span>
                        <span className="event-tag tag-gestao self-center sm:self-auto">
                          {chefe.periodoFim ? `${chefe.periodoInicio} – ${chefe.periodoFim}` : `${chefe.periodoInicio} – atual`}
                        </span>
                      </div>
                      <div className="text-xs text-ufv-gold font-semibold uppercase tracking-wide mb-1">
                        {chefe.cargo || 'Chefe do Departamento'}
                      </div>
                      {chefe.observacoes && (
                        <p className="text-sm text-ufv-gray-light leading-relaxed">{chefe.observacoes}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activePanel === 'professores' && (
            <motion.div
              key="professores"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-ufv-green-dark via-ufv-green to-[#1E3A8A] text-white rounded-2xl p-8 mb-8 relative overflow-hidden shadow-xl">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-ufv-gold-light" />
                    </div>
                    <span className="text-[11px] tracking-[2px] uppercase text-ufv-gold-light font-bold">O DAD</span>
                  </div>
                  <h1 className="font-serif text-2xl sm:text-3xl font-bold mb-3 leading-tight">Professores Titulares</h1>
                </div>
              </div>

              <div className="space-y-4">
                {professoresTitulares.map((prof) => (
                  <div key={prof.id} className="card flex flex-col sm:flex-row gap-5 sm:items-center">
                    <div className="w-16 h-16 rounded-full bg-ufv-green/10 border-2 border-ufv-green/20 flex items-center justify-center shrink-0 overflow-hidden mx-auto sm:mx-0">
                      {prof.foto ? (
                        <img src={prof.foto} alt={prof.nome} className="w-full h-full object-cover" />
                      ) : (
                        <GraduationCap className="w-7 h-7 text-ufv-green" />
                      )}
                    </div>
                    <div className="flex-grow text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 mb-1">
                        <span className="font-serif text-lg font-bold text-ufv-gray">{prof.nome}</span>
                        <span className="event-tag tag-ensino self-center sm:self-auto">
                          Titular desde {prof.periodoInicio}
                        </span>
                      </div>
                      <div className="text-xs text-ufv-gold font-semibold uppercase tracking-wide mb-1">
                        {prof.cargo || 'Professor Titular'}
                      </div>
                      {prof.observacoes && (
                        <p className="text-sm text-ufv-gray-light leading-relaxed">{prof.observacoes}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activePanel === 'professoresAtuais' && (
            <motion.div
              key="professoresAtuais"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-ufv-green-dark via-ufv-green to-[#1E3A8A] text-white rounded-2xl p-8 mb-8 relative overflow-hidden shadow-xl">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                      <Users className="w-5 h-5 text-ufv-gold-light" />
                    </div>
                    <span className="text-[11px] tracking-[2px] uppercase text-ufv-gold-light font-bold">O DAD</span>
                  </div>
                  <h1 className="font-serif text-2xl sm:text-3xl font-bold mb-3 leading-tight">Professores Efetivos em 2026</h1>
                  <p className="text-sm text-white/80 leading-relaxed max-w-2xl">
                    Corpo docente em exercício no Departamento de Administração e Contabilidade.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {professoresAtuais.map((prof) => (
                  <div key={prof.id} className="card flex flex-col sm:flex-row gap-5 sm:items-center">
                    <div className="w-16 h-16 rounded-full bg-ufv-green/10 border-2 border-ufv-green/20 flex items-center justify-center shrink-0 overflow-hidden mx-auto sm:mx-0">
                      {prof.foto ? (
                        <img src={prof.foto} alt={prof.nome} className="w-full h-full object-cover" />
                      ) : (
                        <GraduationCap className="w-7 h-7 text-ufv-green" />
                      )}
                    </div>
                    <div className="flex-grow text-center sm:text-left">
                      <span className="font-serif text-lg font-bold text-ufv-gray block mb-1">{prof.nome}</span>
                      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-4 gap-y-1 text-xs text-ufv-gold font-semibold mb-2 items-center sm:items-start">
                        <a href={`mailto:${prof.email}`} className="inline-flex items-center gap-1.5 hover:underline">
                          <Mail className="w-3.5 h-3.5" /> {prof.email}
                        </a>
                        {prof.telefone && (
                          <span className="inline-flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5" /> {prof.telefone}
                          </span>
                        )}
                      </div>
                      {prof.formacao.length > 0 && (
                        <ul className="space-y-0.5">
                          {prof.formacao.map((item, i) => (
                            <li key={i} className="text-sm text-ufv-gray-light leading-relaxed">{item}</li>
                          ))}
                        </ul>
                      )}
                      {prof.observacoes && (
                        <p className="text-sm text-ufv-gray-light leading-relaxed mt-2">{prof.observacoes}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activePanel === 'professoresAposentados' && (
            <motion.div
              key="professoresAposentados"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-ufv-green-dark via-ufv-green to-[#1E3A8A] text-white rounded-2xl p-8 mb-8 relative overflow-hidden shadow-xl">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-ufv-gold-light" />
                    </div>
                    <span className="text-[11px] tracking-[2px] uppercase text-ufv-gold-light font-bold">O DAD</span>
                  </div>
                  <h1 className="font-serif text-2xl sm:text-3xl font-bold mb-3 leading-tight">Professores Aposentados</h1>
                  <p className="text-sm text-white/80 leading-relaxed max-w-2xl">
                    Docentes que dedicaram sua carreira ao Departamento de Administração e Contabilidade e hoje estão aposentados.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {professoresAposentados.map((prof) => (
                  <div key={prof.id} className="card flex flex-col sm:flex-row gap-5 sm:items-center">
                    <div className="w-16 h-16 rounded-full bg-ufv-green/10 border-2 border-ufv-green/20 flex items-center justify-center shrink-0 overflow-hidden mx-auto sm:mx-0">
                      {prof.foto ? (
                        <img src={prof.foto} alt={prof.nome} className="w-full h-full object-cover" />
                      ) : (
                        <GraduationCap className="w-7 h-7 text-ufv-green" />
                      )}
                    </div>
                    <div className="flex-grow text-center sm:text-left">
                      <span className="font-serif text-lg font-bold text-ufv-gray block mb-1">{prof.nome}</span>
                      {prof.observacoes && (
                        <p className="text-sm text-ufv-gray-light leading-relaxed">{prof.observacoes}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activePanel === 'exProfessores' && (
            <motion.div
              key="exProfessores"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-ufv-green-dark via-ufv-green to-[#1E3A8A] text-white rounded-2xl p-8 mb-8 relative overflow-hidden shadow-xl">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                      <Users className="w-5 h-5 text-ufv-gold-light" />
                    </div>
                    <span className="text-[11px] tracking-[2px] uppercase text-ufv-gold-light font-bold">O DAD</span>
                  </div>
                  <h1 className="font-serif text-2xl sm:text-3xl font-bold mb-3 leading-tight">Ex-Professores</h1>
                  <p className="text-sm text-white/80 leading-relaxed max-w-2xl">
                    Docentes que fizeram parte do Departamento de Administração e Contabilidade.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {exProfessores.map((prof) => (
                  <div key={prof.id} className="card flex flex-col sm:flex-row gap-5 sm:items-center">
                    <div className="w-16 h-16 rounded-full bg-ufv-green/10 border-2 border-ufv-green/20 flex items-center justify-center shrink-0 overflow-hidden mx-auto sm:mx-0">
                      {prof.foto ? (
                        <img src={prof.foto} alt={prof.nome} className="w-full h-full object-cover" />
                      ) : (
                        <GraduationCap className="w-7 h-7 text-ufv-green" />
                      )}
                    </div>
                    <div className="flex-grow text-center sm:text-left">
                      <span className="font-serif text-lg font-bold text-ufv-gray block">{prof.nome}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activePanel === 'tecnicosAtuais' && (
            <motion.div
              key="tecnicosAtuais"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-ufv-green-dark via-ufv-green to-[#1E3A8A] text-white rounded-2xl p-8 mb-8 relative overflow-hidden shadow-xl">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                      <UserCog className="w-5 h-5 text-ufv-gold-light" />
                    </div>
                    <span className="text-[11px] tracking-[2px] uppercase text-ufv-gold-light font-bold">O DAD</span>
                  </div>
                  <h1 className="font-serif text-2xl sm:text-3xl font-bold mb-3 leading-tight">Técnicos Administrativos em 2026</h1>
                  <p className="text-sm text-white/80 leading-relaxed max-w-2xl">
                    Servidores técnico-administrativos em exercício no Departamento de Administração e Contabilidade.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {tecnicosAtuais.map((tec) => (
                  <div key={tec.id} className="card flex flex-col sm:flex-row gap-5 sm:items-center">
                    <div className="w-16 h-16 rounded-full bg-ufv-green/10 border-2 border-ufv-green/20 flex items-center justify-center shrink-0 overflow-hidden mx-auto sm:mx-0">
                      {tec.foto ? (
                        <img src={tec.foto} alt={tec.nome} className="w-full h-full object-cover" />
                      ) : (
                        <UserCog className="w-7 h-7 text-ufv-green" />
                      )}
                    </div>
                    <div className="flex-grow text-center sm:text-left">
                      <span className="font-serif text-lg font-bold text-ufv-gray block mb-1">{tec.nome}</span>
                      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-4 gap-y-1 text-xs text-ufv-gold font-semibold items-center sm:items-start">
                        <a href={`mailto:${tec.email}`} className="inline-flex items-center gap-1.5 hover:underline">
                          <Mail className="w-3.5 h-3.5" /> {tec.email}
                        </a>
                        {tec.telefone && (
                          <span className="inline-flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5" /> {tec.telefone}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activePanel === 'tecnicosAposentados' && (
            <motion.div
              key="tecnicosAposentados"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-ufv-green-dark via-ufv-green to-[#1E3A8A] text-white rounded-2xl p-8 mb-8 relative overflow-hidden shadow-xl">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                      <UserCog className="w-5 h-5 text-ufv-gold-light" />
                    </div>
                    <span className="text-[11px] tracking-[2px] uppercase text-ufv-gold-light font-bold">O DAD</span>
                  </div>
                  <h1 className="font-serif text-2xl sm:text-3xl font-bold mb-3 leading-tight">Técnicos Administrativos Aposentados</h1>
                  <p className="text-sm text-white/80 leading-relaxed max-w-2xl">
                    Servidores técnico-administrativos que contribuíram com o Departamento de Administração e Contabilidade e hoje estão aposentados.
                  </p>
                </div>
              </div>

              <div className="space-y-10">
                {NIVEIS_TECNICOS.map((nivel) => (
                  <section key={nivel.id}>
                    <h2 className="font-serif text-xl font-bold text-ufv-green mb-4">{nivel.titulo}</h2>
                    <div className="space-y-4">
                      {tecnicosAposentados.filter((tec) => tec.nivel === nivel.id).map((tec) => (
                        <div key={tec.id} className="card flex flex-col sm:flex-row gap-5 sm:items-center">
                          <div className="w-16 h-16 rounded-full bg-ufv-green/10 border-2 border-ufv-green/20 flex items-center justify-center shrink-0 overflow-hidden mx-auto sm:mx-0">
                            {tec.foto ? (
                              <img src={tec.foto} alt={tec.nome} className="w-full h-full object-cover" />
                            ) : (
                              <UserCog className="w-7 h-7 text-ufv-green" />
                            )}
                          </div>
                          <div className="flex-grow text-center sm:text-left">
                            <span className="font-serif text-lg font-bold text-ufv-gray block mb-1">{tec.nome}</span>
                            {tec.observacoes && (
                              <p className="text-sm text-ufv-gray-light leading-relaxed">{tec.observacoes}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </motion.div>
          )}

          {activePanel === 'contribuir' && (
            <motion.div
              key="contribuir"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-4xl mx-auto space-y-8"
            >
              <div className="bg-gradient-to-br from-ufv-green-dark via-ufv-green to-[#1E3A8A] text-white rounded-2xl p-8 relative overflow-hidden shadow-xl">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-ufv-gold-light" />
                    </div>
                    <span className="text-[11px] tracking-[2px] uppercase text-ufv-gold-light font-bold">Memorial</span>
                  </div>
                  <h1 className="font-serif text-2xl sm:text-3xl font-bold mb-3 leading-tight">Como contribuir</h1>
                  <p className="text-sm text-white/80 leading-relaxed max-w-2xl mb-6">
                    Novas notícias, fotos, pessoas e homenageados entram no memorial pelo <strong>Painel do Memorial</strong>.
                    Veja abaixo como usar — não é preciso conhecimento técnico.
                  </p>
                  <a
                    href="/admin/"
                    className="inline-flex items-center gap-2 bg-ufv-gold text-white px-5 py-3 rounded-lg text-sm font-semibold hover:brightness-110 transition"
                  >
                    <ExternalLink className="w-4 h-4" /> Abrir o Painel do Memorial
                  </a>
                </div>
              </div>

              <div className="card">
                <h2 className="font-serif text-xl font-bold text-ufv-green mb-2 flex items-center gap-2">
                  <KeyRound className="w-5 h-5" /> Quem pode contribuir
                </h2>
                <p className="text-sm text-ufv-gray leading-relaxed">
                  O acesso ao painel é feito com <strong>e-mail e senha</strong>, cadastrados por um administrador do memorial.
                  Se você quer contribuir e ainda não tem acesso, procure a equipe do{' '}
                  <a href="https://dad.ufv.br/" className="text-ufv-green-light hover:underline">Departamento de Administração e Contabilidade</a>.
                </p>
              </div>

              <div className="card">
                <h2 className="font-serif text-xl font-bold text-ufv-green mb-5">Passo a passo</h2>
                <ol className="space-y-6">
                  {[
                    {
                      titulo: 'Entre no painel',
                      texto: (
                        <>
                          Acesse <a href="/admin/" className="text-ufv-green-light hover:underline">o Painel do Memorial</a> e entre com seu e-mail e senha.
                          No primeiro acesso, troque a senha inicial em <strong>Minha conta</strong>.
                        </>
                      ),
                    },
                    {
                      titulo: 'Escolha o que vai adicionar',
                      texto: (
                        <>
                          No menu, escolha a seção: <strong>Notícias</strong>, <strong>Galeria de fotos</strong>, <strong>Pessoas</strong> ou{' '}
                          <strong>Homenageados</strong>.
                        </>
                      ),
                    },
                    {
                      titulo: 'Clique em “Adicionar” e preencha',
                      texto: (
                        <>
                          Os campos marcados com <span className="text-ufv-gold font-bold">*</span> são obrigatórios. Cada campo traz um exemplo do que
                          escrever.
                        </>
                      ),
                    },
                    {
                      titulo: 'Envie as fotos',
                      texto: (
                        <>
                          Clique em <strong>Adicionar fotos</strong> e escolha os arquivos do computador ou do celular (JPG ou PNG). Elas são reduzidas
                          automaticamente — não é preciso editá-las antes. Escreva uma legenda para cada uma.
                        </>
                      ),
                    },
                    {
                      titulo: 'Clique em “Salvar e publicar”',
                      texto: (
                        <>
                          Pronto! A mudança aparece no memorial em <strong>cerca de 2 minutos</strong>.
                        </>
                      ),
                    },
                  ].map((passo, i) => (
                    <li key={passo.titulo} className="flex gap-4">
                      <div className="w-9 h-9 rounded-full bg-ufv-gold text-white font-bold flex items-center justify-center shrink-0">{i + 1}</div>
                      <div>
                        <p className="font-semibold text-ufv-gray">{passo.titulo}</p>
                        <p className="text-sm text-ufv-gray-light leading-relaxed mt-1">{passo.texto}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icone: <Newspaper className="w-5 h-5" />,
                    titulo: 'Notícias',
                    texto: 'Fatos da linha do tempo. Escolha o ano em que a notícia deve aparecer e, se tiver, informe a fonte (ata ou edição do jornal) no fim do texto.',
                  },
                  {
                    icone: <ImagePlus className="w-5 h-5" />,
                    titulo: 'Galeria de fotos',
                    texto: 'Fotos da aba "Fotos". Informe se a foto é colorida ou preto e branco, e descreva na legenda quem aparece, onde e quando.',
                  },
                  {
                    icone: <Users className="w-5 h-5" />,
                    titulo: 'Pessoas',
                    texto: 'Chefias, professores titulares, professores atuais, professores aposentados, ex-professores e técnicos administrativos atuais e aposentados, com foto e dados de contato.',
                  },
                  {
                    icone: <Award className="w-5 h-5" />,
                    titulo: 'Homenageados',
                    texto: 'Homenageados das colações de grau. Escreva um homenageado por linha, do jeito que deve aparecer no site.',
                  },
                ].map(secao => (
                  <div key={secao.titulo} className="bg-white rounded-xl border border-ufv-border p-5">
                    <div className="flex items-center gap-2 text-ufv-green font-semibold mb-1.5">
                      {secao.icone} {secao.titulo}
                    </div>
                    <p className="text-sm text-ufv-gray-light leading-relaxed">{secao.texto}</p>
                  </div>
                ))}
              </div>

              <div className="card">
                <h2 className="font-serif text-xl font-bold text-ufv-green mb-4">Dúvidas frequentes</h2>
                <div className="space-y-5 text-sm leading-relaxed">
                  <div>
                    <p className="font-semibold text-ufv-gray flex items-center gap-2"><Pencil className="w-4 h-4 text-ufv-gray-light" /> Errei algo. Como corrijo?</p>
                    <p className="text-ufv-gray-light mt-1">Na lista da seção, clique em <strong>Editar</strong> para corrigir ou em <strong>Excluir</strong> para remover. A correção também aparece no site em cerca de 2 minutos.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-ufv-gray flex items-center gap-2"><Clock className="w-4 h-4 text-ufv-gray-light" /> Salvei, mas não apareceu no site.</p>
                    <p className="text-ufv-gray-light mt-1">Aguarde cerca de 2 minutos e recarregue a página do memorial. No painel, fotos recém-enviadas podem aparecer como “em publicação” durante esse tempo.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-ufv-gray flex items-center gap-2"><KeyRound className="w-4 h-4 text-ufv-gray-light" /> Esqueci minha senha.</p>
                    <p className="text-ufv-gray-light mt-1">Peça a um administrador do painel para definir uma nova senha para você.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-ufv-gray flex items-center gap-2"><Info className="w-4 h-4 text-ufv-gray-light" /> Não encontro no painel uma notícia antiga.</p>
                    <p className="text-ufv-gray-light mt-1">O painel mostra apenas o que foi adicionado por ele. O conteúdo que já existia no memorial antes do painel continua no site, mas é corrigido diretamente pela equipe técnica.</p>
                  </div>
                </div>
              </div>

              <div className="text-center pb-4">
                <a
                  href="/admin/"
                  className="inline-flex items-center gap-2 bg-ufv-green text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-ufv-green-dark transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> Abrir o Painel do Memorial
                </a>
              </div>
            </motion.div>
          )}

          {activePanel === 'homenageados' && (
            <motion.div
              key="homenageados"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-ufv-green-dark via-ufv-green to-[#1E3A8A] text-white rounded-2xl p-8 mb-8 relative overflow-hidden shadow-xl">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                      <Award className="w-5 h-5 text-ufv-gold-light" />
                    </div>
                    <span className="text-[11px] tracking-[2px] uppercase text-ufv-gold-light font-bold">O DAD</span>
                  </div>
                  <h1 className="font-serif text-2xl sm:text-3xl font-bold mb-3 leading-tight">Profissionais Homenageados</h1>
                  <p className="text-sm text-white/80 leading-relaxed max-w-2xl">
                    Professores, técnicos e paraninfos homenageados nas colações de grau, de 1979 até hoje.
                  </p>
                </div>
              </div>

              <div className="mb-6 space-y-3">
                <div className="relative">
                  <Search className="w-4 h-4 text-ufv-gray-light absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={homenageadosQuery}
                    onChange={(e) => setHomenageadosQuery(e.target.value)}
                    placeholder="Buscar por nome, ano ou curso..."
                    className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-ufv-border bg-white text-sm text-ufv-gray focus:outline-none focus:ring-2 focus:ring-ufv-green/30 focus:border-ufv-green"
                  />
                  {homenageadosQuery && (
                    <button
                      onClick={() => setHomenageadosQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-ufv-gray-light hover:text-ufv-green"
                      aria-label="Limpar busca"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setHomenageadosDecade(null)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${homenageadosDecade === null ? 'bg-ufv-green text-white border-ufv-green' : 'bg-white text-ufv-gray border-ufv-border hover:bg-ufv-cream'}`}
                  >
                    Todas
                  </button>
                  {HOMENAGEADOS_DECADES.map(decade => (
                    <button
                      key={decade}
                      onClick={() => setHomenageadosDecade(decade)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${homenageadosDecade === decade ? 'bg-ufv-green text-white border-ufv-green' : 'bg-white text-ufv-gray border-ufv-border hover:bg-ufv-cream'}`}
                    >
                      {decade}s
                    </button>
                  ))}
                </div>

                <p className="text-xs text-ufv-gray-light">
                  {filteredColacoes.length} colação(ões) de grau
                </p>
              </div>

              {filteredColacoes.length > 0 ? (
                <div className="space-y-4">
                  {filteredColacoes.map((colacao, index) => {
                    const isFirstOfYear = index === 0 || filteredColacoes[index - 1].ano !== colacao.ano;
                    return (
                      <div key={colacao.id}>
                        {isFirstOfYear && (
                          <h2 className="font-serif text-xl font-bold text-ufv-green mt-4 mb-3">{colacao.ano}</h2>
                        )}
                        <div className="card">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 rounded-full bg-ufv-green/10 border border-ufv-green/20 flex items-center justify-center shrink-0">
                              <Award className="w-4 h-4 text-ufv-green" />
                            </div>
                            <div>
                              <div className="text-xs text-ufv-gold font-semibold uppercase tracking-wide">Colação de Grau</div>
                              <span className="event-tag tag-gestao">{colacao.data}</span>
                            </div>
                          </div>

                          <div className="space-y-4">
                            {colacao.grupos.map((grupo, grupoIndex) => (
                              <div key={grupoIndex}>
                                {grupo.curso && (
                                  <div className="text-sm font-bold text-ufv-green mb-1.5">{grupo.curso}</div>
                                )}
                                <ul className="space-y-1">
                                  {grupo.linhas.map((linha, linhaIndex) => (
                                    <li key={linhaIndex} className="text-sm text-ufv-gray leading-relaxed">
                                      {linha}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>

                          {colacao.nota && (
                            <p className="mt-4 pt-3 border-t border-ufv-border text-sm text-ufv-gray-light leading-relaxed">
                              {colacao.nota}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="card text-center text-sm text-ufv-gray-light py-10">
                  Nenhuma colação encontrada para esse filtro.
                </div>
              )}
            </motion.div>
          )}

          {activePanel === 'photos' && (
            <motion.div
              key="photos"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-ufv-green flex items-center gap-2">
                    <ImageIcon className="w-6 h-6" /> Acervo Fotográfico
                  </h2>
                  <p className="text-sm text-ufv-gray-light mt-1">{combinedGalleryPhotos.length} foto(s) no acervo geral do memorial</p>
                </div>
              </div>

              {combinedGalleryPhotos.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {combinedGalleryPhotos.map((photo) => (
                    <motion.div
                      key={photo.id}
                      className="bg-white border border-ufv-border rounded-xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-shadow cursor-pointer group"
                      onClick={() => setLightboxPhoto({ url: photo.url, caption: photo.caption || '', title: photo.title || '' })}
                    >
                      <div className="overflow-hidden bg-ufv-cream aspect-[4/3]">
                        <img
                          src={photo.url}
                          alt={photo.caption || photo.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        {photo.title && (
                          <div className="font-semibold text-ufv-gray text-sm mb-1">{photo.title}</div>
                        )}
                        {photo.caption && photo.caption.trim() !== photo.title?.trim() && (
                          <p className="text-xs text-ufv-gray-light italic leading-relaxed">
                            &ldquo;{photo.caption}&rdquo;
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="bg-white border border-ufv-border rounded-lg p-16 text-center">
                  <ImageIcon className="w-14 h-14 text-ufv-border mx-auto mb-4" />
                  <h3 className="font-serif text-xl text-ufv-gray mb-2">Acervo vazio</h3>
                  <p className="text-sm text-ufv-gray-light max-w-sm mx-auto mb-6">
                    Nenhuma foto foi adicionada ao acervo ainda.
                  </p>
                </div>
              )}

              {/* LIGHTBOX GERAL */}
              <AnimatePresence>
                {lightboxPhoto && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                    onClick={() => setLightboxPhoto(null)}
                  >
                    <motion.div
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.9 }}
                      className="relative max-w-4xl w-full"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={() => setLightboxPhoto(null)}
                        className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
                      >
                        <X className="w-6 h-6" />
                      </button>
                      <img
                        src={lightboxPhoto.url}
                        alt={lightboxPhoto.caption}
                        className="w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
                      />
                      <div className="mt-4 text-center">
                        {lightboxPhoto.title && (
                          <div className="text-white font-semibold text-base mb-1">{lightboxPhoto.title}</div>
                        )}
                        <p className="text-white/70 text-sm italic">&ldquo;{lightboxPhoto.caption}&rdquo;</p>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {activePanel === 'years' && (
            <motion.div
              key="years"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 lg:grid-cols-4 gap-8"
            >
              <div className="lg:col-span-3">
                <div className="bg-white border border-ufv-border rounded-lg p-4 mb-8">
                  <div className="text-[11px] tracking-[1.5px] uppercase text-ufv-gray-light font-bold mb-3">Navegação por Década</div>
                  <div className="flex flex-wrap gap-2">
                    {decades.map(d => (
                      <button
                        key={d}
                        onClick={() => setCurrentDecade(d)}
                        className={`px-3 py-1.5 rounded border text-sm font-medium transition-all ${currentDecade === d ? 'bg-ufv-green text-white border-ufv-green' : 'bg-transparent border-ufv-border text-ufv-gray hover:border-ufv-green hover:text-ufv-green'}`}
                      >
                        {d}–{d + 9}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5 sm:gap-2 mb-10">
                  {yearsInDecade.map(y => {
                    const hasData = !!memorialData[y];
                    return (
                      <button
                        key={y}
                        onClick={() => setSelectedYear(y)}
                        className={`flex flex-col items-center p-1.5 sm:p-2 rounded-lg border transition-all ${selectedYear === y ? 'bg-ufv-green text-white border-ufv-green-dark' : 'bg-white border-ufv-border text-ufv-gray hover:border-ufv-green hover:text-ufv-green'} ${hasData ? 'ring-1 ring-ufv-gold/30' : ''}`}
                      >
                        <span className="text-xs sm:text-sm font-bold">{y}</span>
                        <div className={`w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full mt-1 sm:mt-1.5 ${selectedYear === y ? 'bg-ufv-gold-light' : (hasData ? 'bg-ufv-gold' : 'bg-ufv-border')}`}></div>
                      </button>
                    );
                  })}
                </div>

                <div className="space-y-8">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-5 pb-5 border-b-2 border-ufv-gold">
                    <div className="font-serif text-4xl sm:text-6xl font-bold text-ufv-green opacity-20 leading-none">{selectedYear}</div>
                    <div className="flex-grow">
                      <div className="font-serif text-xl sm:text-2xl font-bold text-ufv-green">
                        {selectedYear} — {filteredEvents.length > 0 ? `${filteredEvents.length} registro(s)` : 'Nenhum registro'}
                      </div>
                      <div className="text-xs sm:text-sm text-ufv-gray-light mt-1">Departamento de Administração e Contabilidade · UFV</div>
                    </div>
                  </div>

                  {hasAnyEvents ? (
                    <div className="card">
                      <div className="flex gap-4 mb-6 border-b border-ufv-border pb-2 overflow-x-auto no-scrollbar">
                        <button
                          className={`text-xs font-bold uppercase tracking-wider pb-2 border-b-2 transition-all whitespace-nowrap ${activeFilter === 'all' ? 'text-ufv-green border-ufv-green' : 'text-ufv-gray-light border-transparent'}`}
                          onClick={() => setActiveFilter('all')}
                        >
                          Notícias
                        </button>
                        {['homenagens',].map(tag => (
                          <button
                            key={tag}
                            className={`text-xs font-bold uppercase tracking-wider pb-2 border-b-2 transition-all whitespace-nowrap ${activeFilter === tag ? 'text-ufv-green border-ufv-green' : 'text-ufv-gray-light border-transparent'}`}
                            onClick={() => setActiveFilter(tag)}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>

                      {filteredEvents.length > 0 ? (
                        <div className="space-y-4">
                          {filteredEvents.map((e, i) => (
                            <div
                              key={i}
                              onClick={() => setSelectedEventModal({ event: e, year: selectedYear })}
                              className="flex gap-5 border-b border-ufv-border last:border-none pb-5 last:pb-0 cursor-pointer group hover:bg-ufv-cream/50 rounded-xl p-3.5 -mx-3.5 transition-all"
                            >
                              <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 bg-ufv-green/10 text-ufv-green group-hover:bg-ufv-green group-hover:text-white transition-colors`}>
                                {getTagIcon(e.tag)}
                              </div>
                              <div className="flex-grow">
                                <div className="flex items-center gap-2">
                                  <span className={`event-tag tag-${e.tag}`}>{e.tag}</span>
                                  {(e.photos?.length || e.externalLinks?.length || e.articleUrl) && (
                                    <span className="text-[10px] text-ufv-gold font-bold uppercase tracking-wider bg-ufv-gold/10 px-2 py-0.5 rounded">
                                      + Anexos / Mídias
                                    </span>
                                  )}
                                </div>
                                <div className="font-semibold text-ufv-gray group-hover:text-ufv-green transition-colors mt-1">{e.title}</div>
                                <div className="text-sm text-ufv-gray-light mt-1 leading-relaxed line-clamp-3">{e.desc}</div>
                                <span className="text-xs text-ufv-green font-semibold mt-2 inline-flex items-center gap-1 group-hover:underline">
                                  Ver detalhes do registro &rarr;
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="py-14 text-center">
                          <Info className="w-12 h-12 text-ufv-border mx-auto mb-4" />
                          <h3 className="font-serif text-lg text-ufv-gray mb-2">Sem registros nesta categoria</h3>
                          <p className="text-sm text-ufv-gray-light max-w-xs mx-auto">Não há eventos marcados como "{activeFilter}" para o ano de {selectedYear}.</p>
                          <button
                            onClick={() => setActiveFilter('all')}
                            className="mt-4 text-xs font-bold text-ufv-green hover:underline uppercase tracking-widest"
                          >
                            Ver todos os eventos de {selectedYear}
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="bg-white border border-ufv-border rounded-lg p-14 text-center">
                      <Info className="w-12 h-12 text-ufv-border mx-auto mb-4" />
                      <h3 className="font-serif text-lg text-ufv-gray mb-2">Sem registros de eventos</h3>
                      <p className="text-sm text-ufv-gray-light max-w-xs mx-auto">Não há eventos cadastrados para o ano de {selectedYear}.</p>
                    </div>
                  )}

                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white border border-ufv-border rounded-lg overflow-hidden">
                  <div className="bg-ufv-green text-white px-4 py-3 text-sm font-semibold tracking-wide">Ano Selecionado</div>
                  <div className="p-4">
                    <div className="text-3xl font-serif font-bold text-ufv-green mb-1">{selectedYear}</div>
                    <div className="text-xs text-ufv-gray-light font-medium uppercase tracking-wider mb-4">
                      {(memorialData[selectedYear] as any)?.events?.length || 0} Eventos
                    </div>
                    <div className="space-y-3">
                      {(memorialData[selectedYear] as any)?.events?.slice(0, 3).map((e: any, i: number) => (
                        <div key={i} className="text-xs text-ufv-gray py-2 border-b border-ufv-border last:border-none">
                          • {e.title}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-ufv-border rounded-lg overflow-hidden">
                  <div className="bg-ufv-green text-white px-4 py-3 text-sm font-semibold tracking-wide">Legenda</div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-ufv-gray">
                      <div className="w-2.5 h-2.5 rounded-full bg-ufv-gold"></div> Ano com registros
                    </div>
                    <div className="flex items-center gap-3 text-xs text-ufv-gray">
                      <div className="w-2.5 h-2.5 rounded-full bg-ufv-border"></div> Ano sem registros
                    </div>
                    <div className="flex items-center gap-3 text-xs text-ufv-gray">
                      <div className="w-2.5 h-2.5 rounded-full bg-ufv-green"></div> Ano selecionado
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* POP-UP INTRODUTÓRIO */}
      <AnimatePresence>
        {isWelcomeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsWelcomeOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="welcome-title"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative border-b-4 border-ufv-gold"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-br from-ufv-green-dark via-ufv-green to-[#1E3A8A] text-white p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 border-[28px] border-white/5 rounded-full"></div>
                <div className="absolute right-16 -bottom-14 w-28 h-28 border-[18px] border-ufv-gold/10 rounded-full"></div>
                <button
                  onClick={() => setIsWelcomeOpen(false)}
                  className="absolute top-4 right-4 p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                      <Landmark className="w-5 h-5 text-ufv-gold-light" />
                    </div>
                    <span className="text-[11px] tracking-[2px] uppercase text-ufv-gold-light font-bold">DAD · 50 anos · 2026</span>
                  </div>
                  <h2 id="welcome-title" className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                    Memorabilia DAD
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="space-y-5 text-ufv-gray text-[15px] leading-relaxed">
                  <p>
                    Olá, seja bem vindo(a) ao <strong>Memorabilia DAD</strong>, sistema concebido para se tornar um repositório permanente de informações que ajudem a construir uma memória sólida e consistente do DAD a partir da comemoração de seus 50 anos de existência, completos em 2026. A expectativa é de que seu conteúdo passe a ser continuamente alimentado, não só para retratar acontecimentos vindouros, mas também para preencher lacunas eventualmente encontradas nas múltiplas bases de dados, formais ou não, utilizadas como fonte.
                  </p>
                  <p className="font-semibold text-ufv-green">
                    Desejamos-lhe uma agradável e produtiva experiência!
                  </p>
                </div>

                <button
                  onClick={() => setIsWelcomeOpen(false)}
                  autoFocus
                  className="mt-7 w-full sm:w-auto sm:min-w-[200px] sm:float-right bg-ufv-green text-white px-6 py-3 rounded-lg font-bold hover:bg-ufv-green-dark transition-colors shadow-sm"
                >
                  Entrar no Memorial
                </button>
                <div className="clear-both"></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL DE DETALHES DO EVENTO */}
      <EventDetailModal
        event={selectedEventModal?.event || null}
        year={selectedEventModal?.year}
        onClose={() => setSelectedEventModal(null)}
      />

      {/* FOOTER */}
      <footer className="bg-ufv-green-dark text-white/65 py-12 px-6 text-sm border-t-4 border-ufv-gold">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b border-white/10">
          <div>
            <div className="font-serif text-lg text-white font-bold mb-3">Memorial DAD — UFV</div>
            <p className="mb-3 leading-relaxed">
              <a href="https://dad.ufv.br/" className="hover:text-ufv-gold-light transition-colors">Departamento de Administração e Contabilidade</a><br />
              <a href="https://cch.ufv.br/" className="hover:text-ufv-gold-light transition-colors">Centro de Ciências Humanas, Letras e Artes</a>
            </p>
            <p className="leading-relaxed">
              <a href="https://www.ufv.br/" className="hover:text-ufv-gold-light transition-colors">Universidade Federal de Viçosa</a><br />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Universidade+Federal+de+Vi%C3%A7osa%2C+Av.+Peter+Henry+Rolfs%2C+Vi%C3%A7osa+MG"
                target="_blank"
                rel="noreferrer"
                className="hover:text-ufv-gold-light transition-colors"
              >
                Av. Peter Henry Rolfs, s/n — Viçosa/MG
              </a>
            </p>
          </div>
          <div>
            <div className="text-[11px] tracking-[1.5px] uppercase font-bold text-ufv-gold-light mb-4">Links Institucionais</div>
            <div className="space-y-2">
              <a href="https://www.ufv.br/" className="block hover:text-ufv-gold-light transition-colors">UFV — Site Oficial</a>
              <a href="https://dad.ufv.br/" className="block hover:text-ufv-gold-light transition-colors">DAD — Departamento</a>
              <a href="https://cch.ufv.br/" className="block hover:text-ufv-gold-light transition-colors">CCH — Centro</a>
              <a href="https://sso.acesso.ufv.br/" className="block hover:text-ufv-gold-light transition-colors">Portal do Aluno</a>
            </div>
          </div>
          <div>
            <div className="text-[11px] tracking-[1.5px] uppercase font-bold text-ufv-gold-light mb-4">Memorial</div>
            <div className="space-y-2">
              <button
                onClick={() => {
                  setActivePanel('contribuir');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="block hover:text-ufv-gold-light transition-colors"
              >
                Como contribuir
              </button>
              <a href="/admin/" className="block hover:text-ufv-gold-light transition-colors">Enviar registro</a>
              <button
                onClick={() => {
                  setActivePanel('photos');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="block hover:text-ufv-gold-light transition-colors"
              >
                Acervo fotográfico
              </button>
              <a href="#contato" className="block hover:text-ufv-gold-light transition-colors">Contato</a>
            </div>
          </div>
          <div id="contato">
            <div className="text-[11px] tracking-[1.5px] uppercase font-bold text-ufv-gold-light mb-4">Contato</div>
            <address className="not-italic leading-relaxed space-y-3">
              <p>
                Departamento de Administração e Contabilidade<br />
                Universidade Federal de Viçosa<br />
                Av. Peter Henry Rolfs s/n – Campus Universitário<br />
                CEP: 36570-000 – Viçosa/MG
              </p>
              <p>
                Fone: <a href="tel:+553136127003" className="hover:text-ufv-gold-light transition-colors">(31) 3612-7003</a><br />
                E-mail: <a href="mailto:dad@ufv.br" className="hover:text-ufv-gold-light transition-colors">dad@ufv.br</a>
              </p>
            </address>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <span>© 2026 Universidade Federal de Viçosa — DAD. Todos os direitos reservados.</span>
          <span>
            Desenvolvido pelo <a href="https://dad.ufv.br/" className="hover:text-white/60">DAD/UFV</a>
            {' · '}Design e desenvolvimento:{' '}
            <a
              href="https://www.linkedin.com/in/eduarrdojesus"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-white/60 hover:text-ufv-gold-light transition-colors"
            >
              Eduardo Jesus
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}