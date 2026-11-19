export interface MemorialVideo {
  id: string;
  /** Caminho do arquivo dentro de /public, ex.: '/videos/defesas-2026.mp4' */
  url: string;
  title: string;
  /** Texto livre de data, ex.: '07/07/2026' ou 'Setembro de 2026' */
  data?: string;
  descricao?: string;
  /** Imagem de capa opcional (dentro de /public). Sem ela, o primeiro quadro do vídeo é usado. */
  capa?: string;
}

/**
 * Acervo de vídeos da aba Galeria → Vídeos.
 *
 * Para adicionar um vídeo (mantém o site leve):
 *  1. Converta para MP4 H.264, no máximo 720p, com o ffmpeg:
 *       ffmpeg -i ORIGINAL.mov -c:v libx264 -preset slow -crf 24 -vf "scale=-2:'min(720,ih)'" \
 *              -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart public/videos/nome.mp4
 *     Vídeos de WhatsApp já vêm leves; basta reorganizá-los sem perder qualidade:
 *       ffmpeg -i ORIGINAL.mp4 -c copy -movflags +faststart public/videos/nome.mp4
 *     Vídeos de iPhone costumam ser HEVC/HDR e NÃO tocam no Chrome sem conversão.
 *  2. Gere a capa (quadro aos 2 segundos):
 *       ffmpeg -ss 2 -i public/videos/nome.mp4 -frames:v 1 -q:v 4 public/videos/nome.jpg
 *  3. Acrescente um item abaixo. O GitHub recusa arquivos acima de 100 MB.
 */
/** Vídeo principal, exibido em destaque no topo da aba Vídeos (hospedado no YouTube). */
export const videoPrincipal = {
  youtubeId: 'bGRa6WuUvws',
  title: 'Departamento de Administração e Contabilidade (DAD) da UFV completa 50 anos',
  fonte: 'UFV',
};

const DESCRICAO_DEPOIMENTO = 'Depoimento em homenagem aos 50 anos do DAD.';

const depoimento = (slug: string, title: string): MemorialVideo => ({
  id: slug,
  url: `/videos/${slug}.mp4`,
  capa: `/videos/${slug}.jpg`,
  title,
  descricao: DESCRICAO_DEPOIMENTO,
});

export const memorialVideos: MemorialVideo[] = [
  depoimento('andreia', 'Andréia Hoezle'),
  depoimento('andreia-albino', 'Andréia Albino'),
  depoimento('daniel-lima-carneiro', 'Daniel Lima Carneiro'),
  depoimento('guilherme-martins', 'Guilherme Martins'),
  depoimento('guilherme-santana-monteiro-da-silva', 'Guilherme Santana Monteiro da Silva'),
  depoimento('luiza-amalia-soares-franklin', 'Luiza Amalia Soares Franklin'),
  depoimento('maiara-couto-barreto', 'Maiara Couto Barreto'),
  depoimento('reinaldo', 'Reinaldo'),
];
