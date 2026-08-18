import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ExternalLink as ExternalLinkIcon, 
  Image as ImageIcon, 
  Calendar, 
  Award, 
  GraduationCap, 
  Microscope, 
  Globe, 
  Users, 
  Building2, 
  Handshake, 
  Info,
  FileText,
  Sparkles
} from 'lucide-react';
import { MemorialEvent, MemorialPhoto } from '../types';

interface EventDetailModalProps {
  event: MemorialEvent | null;
  year?: number;
  onClose: () => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({ event, year, onClose }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<MemorialPhoto | null>(null);

  if (!event) return null;

  const getTagIcon = (tag: string) => {
    switch (tag) {
      case 'fundacao': return <Award className="w-5 h-5" />;
      case 'ensino': return <GraduationCap className="w-5 h-5" />;
      case 'pesquisa': return <Microscope className="w-5 h-5" />;
      case 'extensao': return <Globe className="w-5 h-5" />;
      case 'gestao': return <Users className="w-5 h-5" />;
      case 'infraestrutura': return <Building2 className="w-5 h-5" />;
      case 'reconhecimento': return <Award className="w-5 h-5" />;
      case 'parceria': return <Handshake className="w-5 h-5" />;
      default: return <Info className="w-5 h-5" />;
    }
  };

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden border border-ufv-border"
          onClick={(e) => e.stopPropagation()}
        >
          {/* HEADER */}
          <div className="bg-gradient-to-r from-ufv-green-dark to-ufv-green p-6 text-white relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              {year && (
                <span className="flex items-center gap-1.5 bg-ufv-gold/90 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  <Calendar className="w-3 h-3" /> {year}
                </span>
              )}
              <span className={`event-tag tag-${event.tag} !text-xs !py-1 !px-2.5 shadow-sm`}>
                {event.tag}
              </span>
            </div>

            <div className="flex items-start gap-3 mt-2">
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0 mt-0.5 text-ufv-gold-light">
                {getTagIcon(event.tag)}
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight text-white pr-6">
                {event.title}
              </h3>
            </div>
          </div>

          {/* CORPO */}
          <div className="p-6 overflow-y-auto space-y-6 flex-grow">
            <div>
              <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-ufv-gray-light mb-2">
                Relato Histórico
              </h4>
              <p className="text-ufv-gray text-[15px] sm:text-base leading-relaxed whitespace-pre-line text-justify">
                {event.desc}
              </p>
            </div>

            {/* FOTOS VINCULADAS */}
            {event.photos && event.photos.length > 0 && (
              <div className="border-t border-ufv-border pt-5">
                <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-ufv-gray-light mb-3 flex items-center gap-1.5">
                  <ImageIcon className="w-4 h-4 text-ufv-green" /> Registros Visuais ({event.photos.length})
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {event.photos.map((photo, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedPhoto(photo)}
                      className="group cursor-pointer bg-ufv-cream/50 rounded-xl overflow-hidden border border-ufv-border hover:shadow-md transition-all"
                    >
                      <div className="aspect-video overflow-hidden bg-ufv-cream relative">
                        <img
                          src={photo.url}
                          alt={photo.caption}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold">
                          Expandir foto
                        </div>
                      </div>
                      <div className="p-2.5">
                        <p className="text-xs text-ufv-gray-light italic line-clamp-2">
                          &ldquo;{photo.caption}&rdquo;
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* LINKS EXTERNOS E ARTIGOS */}
            {((event.externalLinks && event.externalLinks.length > 0) || event.articleUrl) && (
              <div className="border-t border-ufv-border pt-5">
                <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-ufv-gray-light mb-3 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-ufv-green" /> Documentos e Links Vinculados
                </h4>
                <div className="flex flex-wrap gap-2">
                  {event.articleUrl && (
                    <a
                      href={event.articleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-ufv-green text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-ufv-green-dark transition-colors shadow-sm"
                    >
                      <span>Matéria / Notícia do Evento</span>
                      <ExternalLinkIcon className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {event.externalLinks?.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-ufv-cream text-ufv-green border border-ufv-green/30 text-xs font-semibold px-4 py-2 rounded-lg hover:bg-ufv-green hover:text-white transition-all shadow-sm"
                    >
                      <span>{link.label}</span>
                      <ExternalLinkIcon className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* FOOTER */}
          <div className="bg-ufv-cream/80 border-t border-ufv-border px-6 py-3.5 flex justify-between items-center text-xs text-ufv-gray-light">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-ufv-gold" /> Memorial Histórico DAD · UFV
            </span>
            <button
              onClick={onClose}
              className="bg-white border border-ufv-border px-4 py-1.5 rounded-lg text-ufv-gray hover:bg-ufv-cream font-medium transition-colors"
            >
              Fechar
            </button>
          </div>
        </motion.div>

        {/* LIGHTBOX DE FOTOS DO EVENTO */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[130] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
              onClick={() => setSelectedPhoto(null)}
            >
              <div 
                className="relative max-w-4xl w-full text-center" 
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute -top-10 right-0 text-white/80 hover:text-white p-2"
                >
                  <X className="w-6 h-6" />
                </button>
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.caption}
                  className="max-h-[75vh] mx-auto rounded-lg shadow-2xl object-contain"
                />
                {selectedPhoto.title && (
                  <div className="text-white font-semibold text-base mt-3">{selectedPhoto.title}</div>
                )}
                <p className="text-white/80 text-sm italic mt-1">&ldquo;{selectedPhoto.caption}&rdquo;</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
};