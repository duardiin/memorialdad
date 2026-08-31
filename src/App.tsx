/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Award,
  BookOpen,
  Building2,
  Calendar,
  ChevronDown,
  ChevronRight,
  Globe,
  GraduationCap,
  Handshake,
  History,
  Image as ImageIcon,
  Info,
  Landmark,
  LayoutGrid,
  Menu,
  Microscope,
  Plus,
  Search,
  Users,
  X
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import React, { useMemo, useState } from 'react';
import { memorialData } from './data/memorialData';
import { MemorialEvent, MemorialPhoto } from './types';
import { allGalleryPhotos } from './data/allGalleryPhotos';
import { chefesDepartamento } from './data/chefesData';
import { professoresTitulares } from './data/professoresTitularesData';
import { profissionaisAdmitidos } from './data/profissionaisAdmitidosData';
import { EventDetailModal } from './data/EventDetailModal';
import Fuse from 'fuse.js';

type PanelType = 'overview' | 'timeline' | 'years' | 'photos' | 'quebec' | 'desmembramento' | 'chefes' | 'professores' | 'profissionais';

const O_DAD_PANELS: PanelType[] = ['chefes', 'professores', 'profissionais'];

export default function App() {
  const [activePanel, setActivePanel] = useState<PanelType>('overview');
  const [currentDecade, setCurrentDecade] = useState<number>(1970);
  const [selectedYear, setSelectedYear] = useState<number>(1974);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const [dbEvents, setDbEvents] = useState<Record<number, MemorialEvent[]>>({});
  const [dbPhotos, setDbPhotos] = useState<Record<number, MemorialPhoto[]>>({});

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isODadMenuOpen, setIsODadMenuOpen] = useState(false);
  const [isMobileODadOpen, setIsMobileODadOpen] = useState(false);
  const [isGalleryUploadModalOpen, setIsGalleryUploadModalOpen] = useState(false);
  const [uploadData, setUploadData] = useState({ caption: '', file: null as File | null, base64: '' });
  const [galleryUploadData, setGalleryUploadData] = useState({ caption: '', title: '', file: null as File | null, base64: '' });
  const [eventData, setEventData] = useState<MemorialEvent>({ tag: 'ensino', title: '', desc: '' });
  const [extraGalleryPhotos, setExtraGalleryPhotos] = useState<MemorialPhoto[]>([]);

  const [lightboxPhoto, setLightboxPhoto] = useState<{ url: string; caption: string; title: string } | null>(null);
  
  // Estado para abrir o Modal de Detalhes do Evento
  const [selectedEventModal, setSelectedEventModal] = useState<{ event: MemorialEvent; year?: number } | null>(null);

  const yearsInDecade = useMemo(() => {
    return Array.from({ length: 10 }, (_, i) => currentDecade + i).filter(y => y <= 2026);
  }, [currentDecade]);

  const decades = [1970, 1980, 1990, 2000, 2010, 2020];

  const hasAnyEvents = useMemo(() => {
    const originalEvents = memorialData[selectedYear]?.events || [];
    const userEvents = dbEvents[selectedYear] || [];
    return originalEvents.length > 0 || userEvents.length > 0;
  }, [selectedYear, dbEvents]);

  const filteredEvents = useMemo(() => {
    const originalEvents = memorialData[selectedYear]?.events || [];
    const userEvents = dbEvents[selectedYear] || [];
    const allEvents = [...originalEvents, ...userEvents];

    if (activeFilter === 'all') return allEvents;
    return allEvents.filter(e => e.tag === activeFilter);
  }, [selectedYear, activeFilter, dbEvents]);

  const allEventsForSearch = useMemo(() => {
    const list: Array<{ year: number; event: MemorialEvent }> = [];

    Object.entries(memorialData).forEach(([year, data]) => {
      data.events.forEach(event => list.push({ year: Number(year), event }));
    });

    Object.entries(dbEvents).forEach(([year, events]) => {
      events.forEach(event => list.push({ year: Number(year), event }));
    });

    return list;
  }, [dbEvents]);

  const fuse = useMemo(() => {
    return new Fuse(allEventsForSearch, {
      keys: [
        { name: 'event.title', weight: 0.7 },
        { name: 'event.desc', weight: 0.3 },
        { name: 'year', weight: 0.5 },
        { name: 'event.tag', weight: 0.2 }
      ],
      threshold: 0.35,
      ignoreLocation: true,
    });
  }, [allEventsForSearch]);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const results = fuse.search(searchQuery);
    return results.map(result => result.item);
  }, [searchQuery, fuse]);

  const yearPhotos = useMemo(() => {
    const originalPhotos = memorialData[selectedYear]?.photos || [];
    const userPhotos = dbPhotos[selectedYear] || [];
    return [...originalPhotos, ...userPhotos];
  }, [selectedYear, dbPhotos]);

  const combinedGalleryPhotos = useMemo(() => {
    return [...allGalleryPhotos, ...extraGalleryPhotos];
  }, [extraGalleryPhotos]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 700 * 1024) {
        alert("A imagem é muito grande. Por favor, escolha uma imagem menor que 700KB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadData({
          ...uploadData,
          file: file,
          base64: reader.result as string
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGalleryFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 700 * 1024) {
        alert("A imagem é muito grande. Por favor, escolha uma imagem menor que 700KB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setGalleryUploadData({ ...galleryUploadData, file, base64: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const submitPhoto = () => {
    if (!uploadData.file || !uploadData.caption) return;
    const newPhoto: MemorialPhoto = { url: uploadData.base64, caption: uploadData.caption };
    setDbPhotos({
      ...dbPhotos,
      [selectedYear]: [...(dbPhotos[selectedYear] || []), newPhoto]
    });
    setUploadData({ caption: '', file: null, base64: '' });
    setIsUploadModalOpen(false);
  };

  const submitEvent = () => {
    if (!eventData.title || !eventData.desc) return;
    setDbEvents({
      ...dbEvents,
      [selectedYear]: [...(dbEvents[selectedYear] || []), eventData]
    });
    setEventData({ tag: 'ensino', title: '', desc: '' });
    setIsEventModalOpen(false);
  };

  const submitGalleryPhoto = () => {
    if (!galleryUploadData.file || !galleryUploadData.caption || !galleryUploadData.title) return;
    const newPhoto: MemorialPhoto = {
      id: `local-${Date.now()}`,
      url: galleryUploadData.base64,
      caption: galleryUploadData.caption,
      title: galleryUploadData.title
    };
    setExtraGalleryPhotos([...extraGalleryPhotos, newPhoto]);
    setGalleryUploadData({ caption: '', title: '', file: null, base64: '' });
    setIsGalleryUploadModalOpen(false);
  };

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
            <div className="flex-grow md:flex-none relative">
              <div className="flex items-center bg-white/10 border border-white/25 rounded-full px-4 py-1.5 focus-within:bg-white/20 focus-within:border-ufv-gold-light transition-all">
                <Search className="w-4 h-4 text-white/50 mr-2 shrink-0" />
                <input
                  type="text"
                  placeholder="Pesquisar no Memorial…"
                  className="bg-transparent border-none text-white text-sm outline-none w-full md:w-48 placeholder:text-white/40"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="ml-2 text-white/40 hover:text-white transition-colors shrink-0">
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* DROPDOWN DE BUSCA */}
              {searchQuery.trim() && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-ufv-border z-[200] max-h-[70vh] overflow-y-auto min-w-[320px] md:min-w-[420px]">
                  <div className="px-4 py-3 border-b border-ufv-border flex items-center justify-between bg-ufv-cream rounded-t-xl">
                    <span className="text-xs font-bold uppercase tracking-wider text-ufv-gray-light">
                      {searchResults.length} resultado{searchResults.length !== 1 ? 's' : ''} para &ldquo;{searchQuery}&rdquo;
                    </span>
                    <button onClick={() => setSearchQuery('')} className="text-ufv-gray-light hover:text-ufv-gray transition-colors">
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {searchResults.length === 0 ? (
                    <div className="px-4 py-10 text-center">
                      <Search className="w-8 h-8 text-ufv-border mx-auto mb-2" />
                      <p className="text-sm text-ufv-gray-light">Nenhum resultado encontrado.</p>
                      <p className="text-xs text-ufv-gray-light mt-1">Tente outras palavras-chave.</p>
                    </div>
                  ) : (
                    <div className="divide-y divide-ufv-border">
                      {searchResults.map(({ year, event }, i) => (
                        <button
                          key={i}
                          className="w-full text-left px-4 py-3.5 hover:bg-ufv-cream/60 transition-colors group"
                          onClick={() => {
                            setSelectedEventModal({ event, year });
                            setSearchQuery('');
                          }}
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-ufv-green/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-ufv-green/20 transition-colors text-ufv-green">
                              {getTagIcon(event.tag)}
                            </div>
                            <div className="flex-grow min-w-0">
                              <div className="flex items-center gap-2 mb-0.5">
                                <span className="text-[10px] font-bold text-ufv-gold uppercase tracking-wider">{year}</span>
                                <span className={`event-tag tag-${event.tag}`} style={{ fontSize: '9px', padding: '0 4px' }}>{event.tag}</span>
                              </div>
                              <div className="text-sm font-semibold text-ufv-gray leading-snug truncate">{event.title}</div>
                              <div className="text-xs text-ufv-gray-light mt-0.5 line-clamp-2 leading-relaxed">{event.desc}</div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-ufv-border shrink-0 mt-2 group-hover:text-ufv-green transition-colors" />
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* NAVEGAÇÃO DE ABAS */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap gap-1 pb-1">
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
                      onClick={() => { setActivePanel('profissionais'); setIsODadMenuOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-2.5 transition-colors ${activePanel === 'profissionais' ? 'bg-ufv-cream text-ufv-green font-semibold' : 'text-ufv-gray hover:bg-ufv-cream hover:text-ufv-green'}`}
                    >
                      <Users className="w-4 h-4 shrink-0" /> Profissionais Admitidos
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button
            className={`nav-item whitespace-nowrap ${activePanel === 'quebec' ? 'active' : ''}`}
            onClick={() => setActivePanel('quebec')}
          >
            🍁 Projeto Quebec
          </button>
          <button
            className={`nav-item whitespace-nowrap ${activePanel === 'desmembramento' ? 'active' : ''}`}
            onClick={() => setActivePanel('desmembramento')}
          >
            O Desmembramento do DAE
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
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-white z-[101] md:hidden shadow-2xl flex flex-col"
            >
              <div className="bg-ufv-green p-6 text-white flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-ufv-gold">
                    <svg viewBox="0 0 46 46" className="w-7 h-7">
                      <path d="M23 3 L40 10 L40 24 Q40 36 23 43 Q6 36 6 24 L6 10 Z" fill="#006837" stroke="#c9a227" strokeWidth="1.5" />
                      <text x="23" y="22" textAnchor="middle" fontFamily="serif" fontSize="10" fontWeight="bold" fill="white">UFV</text>
                    </svg>
                  </div>
                  <span className="font-serif font-bold">Menu Memorial</span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-6 space-y-8">
                <div>
                  <h4 className="text-[10px] tracking-[2px] uppercase text-ufv-gray-light font-bold mb-4">Navegação</h4>
                  <div className="space-y-2">
                    {[
                      { id: 'overview', label: 'Visão Geral', icon: <LayoutGrid className="w-4 h-4" /> },
                      { id: 'timeline', label: 'Linha do Tempo', icon: <History className="w-4 h-4" /> },
                      { id: 'photos', label: 'Fotos', icon: <ImageIcon className="w-4 h-4" /> },
                      { id: 'years', label: 'Por Ano', icon: <Calendar className="w-4 h-4" /> },
                    ].map(item => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActivePanel(item.id as PanelType);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${activePanel === item.id ? 'bg-ufv-green text-white' : 'text-ufv-gray hover:bg-ufv-cream'}`}
                      >
                        {item.icon}
                        <span className="font-medium">{item.label}</span>
                      </button>
                    ))}

                    {/* SUBMENU O DAD */}
                    <div>
                      <button
                        onClick={() => setIsMobileODadOpen(v => !v)}
                        className={`w-full flex items-center justify-between gap-3 p-3 rounded-lg transition-all ${O_DAD_PANELS.includes(activePanel) ? 'bg-ufv-green text-white' : 'text-ufv-gray hover:bg-ufv-cream'}`}
                      >
                        <span className="flex items-center gap-3">
                          <Landmark className="w-4 h-4" />
                          <span className="font-medium">O DAD</span>
                        </span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isMobileODadOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isMobileODadOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4 mt-1 space-y-1"
                          >
                            {[
                              { id: 'chefes', label: 'Chefias', icon: <Landmark className="w-4 h-4" /> },
                              { id: 'professores', label: 'Professores Titulares', icon: <GraduationCap className="w-4 h-4" /> },
                              { id: 'profissionais', label: 'Profissionais Admitidos', icon: <Users className="w-4 h-4" /> },
                            ].map(item => (
                              <button
                                key={item.id}
                                onClick={() => {
                                  setActivePanel(item.id as PanelType);
                                  setIsMobileMenuOpen(false);
                                }}
                                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all text-sm ${activePanel === item.id ? 'bg-ufv-green/90 text-white' : 'text-ufv-gray hover:bg-ufv-cream'}`}
                              >
                                {item.icon}
                                <span className="font-medium">{item.label}</span>
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {[
                      { id: 'quebec', label: '🍁 Projeto Quebec', icon: <Globe className="w-4 h-4" /> },
                      { id: 'desmembramento', label: 'O Desmembramento do DAE para DAD', icon: <History className="w-4 h-4" /> }
                    ].map(item => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActivePanel(item.id as PanelType);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${activePanel === item.id ? 'bg-ufv-green text-white' : 'text-ufv-gray hover:bg-ufv-cream'}`}
                      >
                        {item.icon}
                        <span className="font-medium">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] tracking-[2px] uppercase text-ufv-gray-light font-bold mb-4">Décadas</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {decades.map(d => (
                      <button
                        key={d}
                        onClick={() => {
                          setActivePanel('years');
                          setCurrentDecade(d);
                          setSelectedYear(memorialData[d] ? d : d + 4);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`p-3 rounded-lg border text-center transition-all ${currentDecade === d && activePanel === 'years' ? 'bg-ufv-gold text-white border-ufv-gold' : 'border-ufv-border text-ufv-gray hover:border-ufv-green'}`}
                      >
                        <span className="text-sm font-bold">{d}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 bg-ufv-cream text-[10px] text-ufv-gray-light text-center">
                © 2026 Memorial DAD · UFV<br />
                Departamento de Administração e Contabilidade
              </div>
            </motion.div>
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
                      { year: '2024', tag: 'reconhecimento', title: 'Jubileu de Ouro', desc: 'Celebração de 50 anos de história e contribuição acadêmica.' }
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
                      <strong>VIÇOSA</strong> – No final da década de 1980, mais precisamente em torno de <strong>1989</strong>, a Universidade Federal de Viçosa (UFV) vivenciava um período efervescente de expansão científica. Foi nesse cenário de redemocratização e busca por modernização que ganhou força a cooperação internacional com instituições canadenses, com protagonismo direto do <strong>Departamento de Administração (DAD)</strong>.
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
                      O coração do projeto batia através do intercâmbio docente. Em <strong>23 de junho de 1989</strong>, um comitê de professoras da UFV realizou uma histórica viagem oficial para visitar universidades no Canadá. Entre os nomes de destaque, figuram as professoras <strong>Nina Rosa</strong> e <strong>Maria Barbassa</strong>.
                    </p>
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
                  <h2 className="card-title">
                    <div className="card-icon"><Award className="w-4 h-4 text-white" /></div>
                    O Divisor de Águas: O Parecer 221/88
                  </h2>
                  <div className="space-y-4 text-ufv-gray text-[15px] leading-relaxed">
                    <p>
                      O desmembramento oficial foi selado em <strong>30 de março de 1988</strong>. Naquela data, o Conselho Federal de Educação (CFE), por meio do <strong>Parecer nº 221/88</strong>, autorizou a divisão do DAE em duas unidades administrativas independentes: Departamento de Administração (DAD) e Departamento de Economia (DEE).
                    </p>
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

          {activePanel === 'profissionais' && (
            <motion.div
              key="profissionais"
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
                  <h1 className="font-serif text-2xl sm:text-3xl font-bold mb-3 leading-tight">Profissionais Admitidos</h1>
                </div>
              </div>

              <div className="space-y-4">
                {profissionaisAdmitidos.map((prof) => (
                  <div key={prof.id} className="card flex flex-col sm:flex-row gap-5 sm:items-center">
                    <div className="w-16 h-16 rounded-full bg-ufv-green/10 border-2 border-ufv-green/20 flex items-center justify-center shrink-0 overflow-hidden mx-auto sm:mx-0">
                      {prof.foto ? (
                        <img src={prof.foto} alt={prof.nome} className="w-full h-full object-cover" />
                      ) : (
                        <Users className="w-7 h-7 text-ufv-green" />
                      )}
                    </div>
                    <div className="flex-grow text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 mb-1">
                        <span className="font-serif text-lg font-bold text-ufv-gray">{prof.nome}</span>
                        <span className="event-tag tag-gestao self-center sm:self-auto">
                          {prof.periodoFim ? `${prof.periodoInicio} – ${prof.periodoFim}` : `Admitido em ${prof.periodoInicio}`}
                        </span>
                      </div>
                      <div className="text-xs text-ufv-gold font-semibold uppercase tracking-wide mb-1">
                        {prof.cargo || 'Profissional Admitido'}
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
                <button
                  onClick={() => setIsGalleryUploadModalOpen(true)}
                  className="flex items-center justify-center gap-2 bg-ufv-green text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-ufv-green-dark transition-colors shadow-sm"
                >
                  <Plus className="w-4 h-4" /> Adicionar Foto
                </button>
              </div>

              {combinedGalleryPhotos.length > 0 ? (
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                  {combinedGalleryPhotos.map((photo) => (
                    <motion.div
                      key={photo.id}
                      className="bg-white border border-ufv-border rounded-xl overflow-hidden break-inside-avoid shadow-sm hover:shadow-lg transition-shadow cursor-pointer group"
                      onClick={() => setLightboxPhoto({ url: photo.url, caption: photo.caption, title: photo.title || '' })}
                    >
                      <div className="overflow-hidden bg-ufv-cream">
                        <img
                          src={photo.url}
                          alt={photo.caption}
                          className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        {photo.title && (
                          <div className="font-semibold text-ufv-gray text-sm mb-1">{photo.title}</div>
                        )}
                        <p className="text-xs text-ufv-gray-light italic leading-relaxed">
                          &ldquo;{photo.caption}&rdquo;
                        </p>
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

              {/* MODAL UPLOAD DA GALERIA */}
              <AnimatePresence>
                {isGalleryUploadModalOpen && (
                  <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto relative"
                    >
                      <div className="bg-ufv-green p-4 text-white flex justify-between items-center sticky top-0 z-10">
                        <h3 className="font-serif font-bold flex items-center gap-2">
                          <ImageIcon className="w-4 h-4" /> Adicionar Foto ao Acervo
                        </h3>
                        <button onClick={() => setIsGalleryUploadModalOpen(false)} className="text-white/70 hover:text-white">
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="p-6 space-y-4">
                        <div>
                          <label className="block text-xs font-bold uppercase text-ufv-gray-light mb-1.5">Foto *</label>
                          <div className="border-2 border-dashed border-ufv-border rounded-lg p-8 text-center hover:border-ufv-green transition-colors cursor-pointer relative">
                            <input
                              type="file"
                              accept="image/*"
                              className="absolute inset-0 opacity-0 cursor-pointer"
                              onChange={handleGalleryFileUpload}
                            />
                            {galleryUploadData.base64 ? (
                              <div>
                                <img src={galleryUploadData.base64} alt="Preview" className="max-h-48 mx-auto rounded-lg shadow-md" />
                                <div className="mt-2 text-xs text-ufv-green font-bold flex items-center justify-center gap-1">
                                  <ImageIcon className="w-3 h-3" /> {galleryUploadData.file?.name}
                                </div>
                              </div>
                            ) : (
                              <div className="text-sm text-ufv-gray-light">
                                <ImageIcon className="w-8 h-8 mx-auto mb-2 opacity-20" />
                                Clique ou arraste uma foto aqui<br />
                                <span className="text-[11px] opacity-60">Máx. 700KB</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase text-ufv-gray-light mb-1.5">Título *</label>
                          <input
                            type="text"
                            className="w-full border border-ufv-border rounded-lg p-3 text-sm focus:ring-2 focus:ring-ufv-green focus:border-ufv-green outline-none"
                            placeholder="Ex: Formatura Turma 1985..."
                            value={galleryUploadData.title}
                            onChange={(e) => setGalleryUploadData({ ...galleryUploadData, title: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase text-ufv-gray-light mb-1.5">Legenda / Contexto *</label>
                          <textarea
                            className="w-full border border-ufv-border rounded-lg p-3 text-sm focus:ring-2 focus:ring-ufv-green focus:border-ufv-green outline-none min-h-[100px]"
                            placeholder="Descreva a foto, quem são as pessoas..."
                            value={galleryUploadData.caption}
                            onChange={(e) => setGalleryUploadData({ ...galleryUploadData, caption: e.target.value })}
                          ></textarea>
                        </div>
                        <button
                          onClick={submitGalleryPhoto}
                          disabled={!galleryUploadData.file || !galleryUploadData.caption || !galleryUploadData.title}
                          className="w-full bg-ufv-green text-white py-3 rounded-lg font-bold hover:bg-ufv-green-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Enviar para o Acervo
                        </button>
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>

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
                    <div className="flex gap-2">
                      <button
                        onClick={() => setIsEventModalOpen(true)}
                        className="flex-grow sm:flex-none flex items-center justify-center gap-2 bg-ufv-gold text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-ufv-gold-light transition-colors"
                      >
                        <Plus className="w-4 h-4" /> Adicionar Registro
                      </button>
                    </div>
                  </div>

                  {hasAnyEvents ? (
                    <div className="card">
                      <div className="flex gap-4 mb-6 border-b border-ufv-border pb-2 overflow-x-auto no-scrollbar">
                        <button
                          className={`text-xs font-bold uppercase tracking-wider pb-2 border-b-2 transition-all whitespace-nowrap ${activeFilter === 'all' ? 'text-ufv-green border-ufv-green' : 'text-ufv-gray-light border-transparent'}`}
                          onClick={() => setActiveFilter('all')}
                        >
                          Eventos
                        </button>
                        {['fundacao', 'ensino', 'pesquisa', 'extensao', 'gestao'].map(tag => (
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

                  {/* FOTOS DO ANO */}
                  <div className="mt-12">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                      <h3 className="font-serif text-xl font-bold text-ufv-green flex items-center gap-2">
                        <ImageIcon className="w-5 h-5" /> Galeria de Fotos ({yearPhotos.length})
                      </h3>
                      <button
                        onClick={() => setIsUploadModalOpen(true)}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-ufv-green text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-ufv-green-dark transition-colors"
                      >
                        <Plus className="w-4 h-4" /> Contribuir com Foto
                      </button>
                    </div>

                    {yearPhotos.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {yearPhotos.map((photo, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="bg-white border border-ufv-border rounded-lg overflow-hidden shadow-sm cursor-pointer"
                            onClick={() => setLightboxPhoto({ url: photo.url, caption: photo.caption, title: photo.title || '' })}
                          >
                            <div className="aspect-video overflow-hidden bg-ufv-cream">
                              <img
                                src={photo.url}
                                alt={photo.caption}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <div className="p-4">
                              <p className="text-sm text-ufv-gray italic leading-relaxed">
                                &ldquo;{photo.caption}&rdquo;
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="bg-white border border-ufv-border rounded-lg p-14 text-center">
                        <ImageIcon className="w-12 h-12 text-ufv-border mx-auto mb-4" />
                        <h3 className="font-serif text-lg text-ufv-gray mb-2">Sem registros fotográficos</h3>
                        <p className="text-sm text-ufv-gray-light max-w-xs mx-auto">Não há fotos disponíveis para o ano de {selectedYear}.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* MODAL NOVO REGISTRO ANO */}
              <AnimatePresence>
                {isUploadModalOpen && (
                  <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto relative"
                    >
                      <div className="bg-ufv-green p-4 text-white flex justify-between items-center sticky top-0 z-10">
                        <h3 className="font-serif font-bold">Contribuir para o Memorial ({selectedYear})</h3>
                        <button onClick={() => setIsUploadModalOpen(false)} className="text-white/70 hover:text-white">
                          <LayoutGrid className="w-5 h-5 rotate-45" />
                        </button>
                      </div>
                      <div className="p-6 space-y-4">
                        <div>
                          <label className="block text-xs font-bold uppercase text-ufv-gray-light mb-1.5">Foto</label>
                          <div className="border-2 border-dashed border-ufv-border rounded-lg p-8 text-center hover:border-ufv-green transition-colors cursor-pointer relative">
                            <input
                              type="file"
                              accept="image/*"
                              className="absolute inset-0 opacity-0 cursor-pointer"
                              onChange={handleFileUpload}
                            />
                            {uploadData.base64 ? (
                              <div className="relative group">
                                <img
                                  src={uploadData.base64}
                                  alt="Preview"
                                  className="max-h-48 mx-auto rounded-lg shadow-md"
                                />
                                <div className="mt-2 text-xs text-ufv-green font-bold flex items-center justify-center gap-1">
                                  <ImageIcon className="w-3 h-3" /> {uploadData.file?.name}
                                </div>
                              </div>
                            ) : (
                              <div className="text-sm text-ufv-gray-light">
                                <ImageIcon className="w-8 h-8 mx-auto mb-2 opacity-20" />
                                Clique ou arraste uma foto aqui
                              </div>
                            )}
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase text-ufv-gray-light mb-1.5">Legenda / Contexto</label>
                          <textarea
                            className="w-full border border-ufv-border rounded-lg p-3 text-sm focus:ring-2 focus:ring-ufv-green focus:border-ufv-green outline-none min-h-[100px]"
                            placeholder="Descreva a foto, pessoas presentes, contexto..."
                            value={uploadData.caption}
                            onChange={(e) => setUploadData({ ...uploadData, caption: e.target.value })}
                          ></textarea>
                        </div>
                        <button
                          onClick={submitPhoto}
                          disabled={!uploadData.file || !uploadData.caption}
                          className="w-full bg-ufv-green text-white py-3 rounded-lg font-bold hover:bg-ufv-green-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Enviar para o Memorial
                        </button>
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>

              {/* MODAL ADICIONAR EVENTO */}
              <AnimatePresence>
                {isEventModalOpen && (
                  <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto relative"
                    >
                      <div className="bg-ufv-gold p-4 text-white flex justify-between items-center sticky top-0 z-10">
                        <h3 className="font-serif font-bold">Adicionar Registro Histórico ({selectedYear})</h3>
                        <button onClick={() => setIsEventModalOpen(false)} className="text-white/70 hover:text-white">
                          <LayoutGrid className="w-5 h-5 rotate-45" />
                        </button>
                      </div>
                      <div className="p-6 space-y-4">
                        <div>
                          <label className="block text-xs font-bold uppercase text-ufv-gray-light mb-1.5">Categoria</label>
                          <select
                            className="w-full border border-ufv-border rounded-lg p-3 text-sm focus:ring-2 focus:ring-ufv-gold focus:border-ufv-gold outline-none bg-white"
                            value={eventData.tag}
                            onChange={(e) => setEventData({ ...eventData, tag: e.target.value as any })}
                          >
                            <option value="ensino">Ensino</option>
                            <option value="pesquisa">Pesquisa</option>
                            <option value="extensao">Extensão</option>
                            <option value="gestao">Gestão</option>
                            <option value="infraestrutura">Infraestrutura</option>
                            <option value="reconhecimento">Reconhecimento</option>
                            <option value="parceria">Parceria</option>
                            <option value="fundacao">Fundação</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase text-ufv-gray-light mb-1.5">Título do Evento</label>
                          <input
                            type="text"
                            className="w-full border border-ufv-border rounded-lg p-3 text-sm focus:ring-2 focus:ring-ufv-gold focus:border-ufv-gold outline-none"
                            placeholder="Ex: Criação do novo laboratório"
                            value={eventData.title}
                            onChange={(e) => setEventData({ ...eventData, title: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase text-ufv-gray-light mb-1.5">Descrição / Detalhes</label>
                          <textarea
                            className="w-full border border-ufv-border rounded-lg p-3 text-sm focus:ring-2 focus:ring-ufv-gold focus:border-ufv-gold outline-none min-h-[100px]"
                            placeholder="Descreva o marco histórico com detalhes..."
                            value={eventData.desc}
                            onChange={(e) => setEventData({ ...eventData, desc: e.target.value })}
                          ></textarea>
                        </div>
                        <button
                          onClick={submitEvent}
                          disabled={!eventData.title || !eventData.desc}
                          className="w-full bg-ufv-gold text-white py-3 rounded-lg font-bold hover:bg-ufv-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Salvar no Memorial
                        </button>
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>

              <div className="space-y-6">
                <div className="bg-white border border-ufv-border rounded-lg overflow-hidden">
                  <div className="bg-ufv-green text-white px-4 py-3 text-sm font-semibold tracking-wide">Ano Selecionado</div>
                  <div className="p-4">
                    <div className="text-3xl font-serif font-bold text-ufv-green mb-1">{selectedYear}</div>
                    <div className="text-xs text-ufv-gray-light font-medium uppercase tracking-wider mb-4">
                      {(memorialData[selectedYear] as any)?.events?.length || 0} Eventos · {(memorialData[selectedYear] as any)?.photos?.length || 0} Fotos
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

      {/* MODAL DE DETALHES DO EVENTO */}
      <EventDetailModal
        event={selectedEventModal?.event || null}
        year={selectedEventModal?.year}
        onClose={() => setSelectedEventModal(null)}
      />

      {/* FOOTER */}
      <footer className="bg-ufv-green-dark text-white/65 py-12 px-6 text-sm border-t-4 border-ufv-gold">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 pb-8 border-b border-white/10">
          <div>
            <div className="font-serif text-lg text-white font-bold mb-3">Memorial DAD — UFV</div>
            <p className="mb-3 leading-relaxed">
              Departamento de Administração e Contabilidade<br />
              Centro de Ciências Humanas, Letras e Artes
            </p>
            <p className="leading-relaxed">
              Universidade Federal de Viçosa<br />
              Av. Peter Henry Rolfs, s/n — Viçosa/MG
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
              <a href="#" className="block hover:text-ufv-gold-light transition-colors">Como contribuir</a>
              <a href="#" className="block hover:text-ufv-gold-light transition-colors">Enviar registro</a>
              <a href="#" className="block hover:text-ufv-gold-light transition-colors">Acervo fotográfico</a>
              <a href="#" className="block hover:text-ufv-gold-light transition-colors">Contato</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <span>© 2026 Universidade Federal de Viçosa — DAD. Todos os direitos reservados.</span>
          <span>Desenvolvido pelo <a href="#" className="hover:text-white/60">DAD/UFV</a></span>
        </div>
      </footer>
    </div>
  );
}