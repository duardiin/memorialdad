import React from 'react';
import Fuse, { type Expression } from 'fuse.js';
import { MemorialEvent } from './types';

export interface SearchEntry {
  year: number;
  event: MemorialEvent;
}

export interface SearchResult extends SearchEntry {
  score: number;
}

interface IndexedEntry extends SearchEntry {
  title: string;
  desc: string;
  captions: string;
}

export interface SearchIndex {
  entries: IndexedEntry[];
  fuse: Fuse<IndexedEntry>;
}

// Palavras muito comuns que não ajudam a filtrar (ignoradas quando há outros termos)
const STOPWORDS = new Set([
  'a', 'o', 'as', 'os', 'e', 'de', 'da', 'do', 'das', 'dos', 'em', 'no', 'na', 'nos', 'nas',
  'para', 'por', 'com', 'um', 'uma', 'ao', 'aos', 'que', 'se',
]);

export const normalize = (text: string) =>
  text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

export const tokenize = (query: string) => {
  const words = normalize(query).split(/[^a-z0-9]+/).filter(Boolean);
  const meaningful = words.filter(w => !STOPWORDS.has(w));
  return meaningful.length > 0 ? meaningful : words;
};

export const buildSearchIndex = (list: SearchEntry[]): SearchIndex => {
  const entries = list.map(item => ({
    ...item,
    title: normalize(item.event.title),
    desc: normalize(item.event.desc),
    captions: normalize((item.event.photos || []).map(p => p.caption || '').join(' ')),
  }));

  // Usado apenas como plano B, para tolerar erros de digitação
  const fuse = new Fuse(entries, {
    keys: [
      { name: 'title', weight: 0.7 },
      { name: 'desc', weight: 0.3 },
    ],
    threshold: 0.3,
    ignoreLocation: true,
    includeScore: true,
  });

  return { entries, fuse };
};

const startsWord = (text: string, token: string) =>
  new RegExp(`(^|[^a-z0-9])${token}`).test(text);

const scoreToken = (entry: IndexedEntry, token: string): number => {
  let score = 0;
  if (String(entry.year) === token) score += 12;
  if (entry.title.includes(token)) score += startsWord(entry.title, token) ? 10 : 6;
  if (entry.desc.includes(token)) score += startsWord(entry.desc, token) ? 3 : 2;
  if (entry.captions.includes(token)) score += 2;
  return score;
};

export const searchMemorial = (index: SearchIndex, query: string): { results: SearchResult[]; approximate: boolean } => {
  const tokens = tokenize(query);
  if (tokens.length === 0) return { results: [], approximate: false };

  const phrase = normalize(query.trim());
  const results: SearchResult[] = [];

  // 1) Busca exata: todos os termos precisam aparecer (ignorando acentos e maiúsculas)
  for (const entry of index.entries) {
    let score = 0;
    let matchedAll = true;
    for (const token of tokens) {
      const s = scoreToken(entry, token);
      if (s === 0) { matchedAll = false; break; }
      score += s;
    }
    if (!matchedAll) continue;
    if (tokens.length > 1 && entry.title.includes(phrase)) score += 15;
    else if (tokens.length > 1 && entry.desc.includes(phrase)) score += 5;
    results.push({ year: entry.year, event: entry.event, score });
  }

  if (results.length > 0) {
    results.sort((a, b) => b.score - a.score || a.year - b.year);
    return { results, approximate: false };
  }

  // 2) Plano B: busca aproximada, termo a termo, para tolerar erros de digitação
  const fuzzyTokens = tokens.filter(t => t.length >= 3);
  if (fuzzyTokens.length === 0) return { results: [], approximate: false };

  const fuzzy = index.fuse.search({
    $and: fuzzyTokens.map((t): Expression => ({ $or: [{ title: t } as Expression, { desc: t } as Expression] })),
  });

  return {
    results: fuzzy.map(r => ({ year: r.item.year, event: r.item.event, score: 1 - (r.score ?? 1) })),
    approximate: true,
  };
};

// Mapeia o texto original para a versão normalizada mantendo as posições correspondentes
const normalizeWithMap = (text: string) => {
  let normalized = '';
  const map: number[] = [];
  for (let i = 0; i < text.length; i++) {
    const n = normalize(text[i]);
    for (let j = 0; j < n.length; j++) {
      normalized += n[j];
      map.push(i);
    }
  }
  map.push(text.length);
  return { normalized, map };
};

const findRanges = (text: string, tokens: string[]) => {
  const { normalized, map } = normalizeWithMap(text);
  const ranges: Array<[number, number]> = [];
  for (const token of tokens) {
    let from = 0;
    let idx: number;
    while ((idx = normalized.indexOf(token, from)) !== -1) {
      ranges.push([map[idx], map[idx + token.length - 1] + 1]);
      from = idx + token.length;
    }
  }
  ranges.sort((a, b) => a[0] - b[0]);
  const merged: Array<[number, number]> = [];
  for (const r of ranges) {
    const last = merged[merged.length - 1];
    if (last && r[0] <= last[1]) last[1] = Math.max(last[1], r[1]);
    else merged.push([...r]);
  }
  return merged;
};

export const Highlight: React.FC<{ text: string; tokens: string[] }> = ({ text, tokens }) => {
  const ranges = findRanges(text, tokens);
  if (ranges.length === 0) return <>{text}</>;
  const parts: React.ReactNode[] = [];
  let cursor = 0;
  ranges.forEach(([start, end], i) => {
    if (start > cursor) parts.push(text.slice(cursor, start));
    parts.push(
      <mark key={i} className="bg-ufv-gold-light/60 text-inherit rounded-sm px-0.5">
        {text.slice(start, end)}
      </mark>
    );
    cursor = end;
  });
  if (cursor < text.length) parts.push(text.slice(cursor));
  return <>{parts}</>;
};

// Recorta a descrição em volta do primeiro termo encontrado
export const makeSnippet = (text: string, tokens: string[], size = 160) => {
  if (text.length <= size) return text;
  const first = findRanges(text, tokens)[0];
  if (!first) return text.slice(0, size).trimEnd() + '…';
  const start = Math.max(0, first[0] - 50);
  const end = Math.min(text.length, start + size);
  return (start > 0 ? '…' : '') + text.slice(start, end).trim() + (end < text.length ? '…' : '');
};
