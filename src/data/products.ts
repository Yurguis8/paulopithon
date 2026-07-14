import gasImg from '../assets/images/products/gas.jpg';
import gasKarambitImg from '../assets/images/products/gas-karambit.jpg';
import gasFacaDuplaImg from '../assets/images/products/gas-faca-dupla.jpg';
import gasFacaCanetaImg from '../assets/images/products/gas-faca-caneta.jpg';
import gasFaca from '../assets/images/products/gas-e-faca.jpeg';
import gasFacaChave from '../assets/images/products/gas-e-facachave.jpeg';
import type { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'gas-pimenta',
    name: 'Spray de Gás U.S.A Police',
    price: 'R$ 100,00',
    numericPrice: 100,
    description:
      'Spray de pimenta U.S.A Police de alta eficácia para autodefesa pessoal em situações de risco.',
    image: gasImg,
  },
  {
    id: 'gas-karambit',
    name: 'Combo Gás + Faca Karambit',
    price: 'R$ 160,00',
    numericPrice: 160,
    description:
      'Kit tático com spray de pimenta e faca karambit com bainha — proteção e versatilidade em um só pacote.',
    image: gasKarambitImg,
    isPopular: true,
  },
  {
    id: 'gas-faca-dupla',
    name: 'Combo Gás + Faca Dupla',
    price: 'R$ 140,00',
    numericPrice: 140,
    description:
      'Conjunto de autodefesa com gás de pimenta e faca dupla com cabo em madeira de alta qualidade.',
    image: gasFacaDuplaImg,
  },
  {
    id: 'gas-faca-caneta',
    name: 'Combo Gás + Faca Caneta',
    price: 'R$ 140,00',
    numericPrice: 140,
    description:
      'Spray U.S.A Police + faca tática disfarçada de caneta — discreta, elegante e eficiente.',
    image: gasFacaCanetaImg,
  },
  {
    id: 'gas-faca',
    name: 'Combo Gás + Faca',
    price: 'R$ 160,00',
    numericPrice: 160,
    description:
      'Kit essencial de autodefesa contendo spray de pimenta e faca tática robusta para maior segurança.',
    image: gasFaca,
  },
  {
    id: 'gas-faca-chave',
    name: 'Combo Gás + Faca Chave',
    price: 'R$ 140,00',
    numericPrice: 140,
    description:
      'Conjunto prático com spray de pimenta e uma mini faca disfarçada de chave, ideal para portar no dia a dia.',
    image: gasFacaChave,
  },
];
