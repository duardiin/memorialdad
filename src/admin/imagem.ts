/**
 * Reduz a foto antes de enviar: no máximo 1800 px no maior lado, em JPEG.
 * Assim o envio é rápido e o repositório não cresce à toa.
 */
const LADO_MAXIMO = 1800;
const QUALIDADE = 0.82;

const carregar = (arquivo: File) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const url = URL.createObjectURL(arquivo);
    const imagem = new Image();
    imagem.onload = () => {
      URL.revokeObjectURL(url);
      resolve(imagem);
    };
    imagem.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Não foi possível abrir esta imagem. Use uma foto JPG ou PNG.'));
    };
    imagem.src = url;
  });

const paraBase64 = (blob: Blob) =>
  new Promise<string>((resolve, reject) => {
    const leitor = new FileReader();
    leitor.onload = () => resolve(String(leitor.result).split(',')[1]);
    leitor.onerror = () => reject(leitor.error);
    leitor.readAsDataURL(blob);
  });

export const comprimirFoto = async (arquivo: File) => {
  if (!arquivo.type.startsWith('image/')) throw new Error('Escolha um arquivo de imagem (JPG ou PNG).');
  const imagem = await carregar(arquivo);
  const escala = Math.min(1, LADO_MAXIMO / Math.max(imagem.naturalWidth, imagem.naturalHeight));
  const largura = Math.round(imagem.naturalWidth * escala);
  const altura = Math.round(imagem.naturalHeight * escala);

  const canvas = document.createElement('canvas');
  canvas.width = largura;
  canvas.height = altura;
  const contexto = canvas.getContext('2d')!;
  contexto.fillStyle = '#ffffff'; // fundo branco para PNGs transparentes
  contexto.fillRect(0, 0, largura, altura);
  contexto.drawImage(imagem, 0, 0, largura, altura);

  const blob = await new Promise<Blob>((resolve, reject) =>
    canvas.toBlob(b => (b ? resolve(b) : reject(new Error('Falha ao preparar a foto.'))), 'image/jpeg', QUALIDADE)
  );
  return { blob, base64: await paraBase64(blob) };
};
