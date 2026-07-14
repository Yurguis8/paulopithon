import palestrasFlyer from '../assets/images/palestras.jpeg';

export interface GalleryOverlay {
  id: string;
  src: string;
  alt: string;
}

/**
 * Configure o vídeo vertical e os planfetos/GIFs exibidos na seção Galeria.
 * Para adicionar um vídeo, coloque o arquivo em src/assets/media/ e importe aqui,
 * ou use uma URL externa em videoSrc.
 */
export const GALLERY_MEDIA = {
  /** Caminho do vídeo vertical (9:16). Deixe vazio para usar apenas o poster. */
  videoSrc: '' as string,
  /** Imagem exibida enquanto o vídeo carrega ou quando videoSrc está vazio */
  posterSrc: palestrasFlyer,
  overlays: [
    {
      id: 'flyer-palestras',
      src: palestrasFlyer,
      alt: 'Planfeto de palestras com Paulo Pithon — Auto-Defesa, Mentalidade de Combate e Consciência Situacional',
    },
  ] satisfies GalleryOverlay[],
};
