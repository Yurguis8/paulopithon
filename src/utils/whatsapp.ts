const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ?? '5571991306291';

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getProductWhatsAppMessage(
  product: {
    name: string;
    price: string;
    numericPrice: number;
    description: string;
  },
  quantity: number
): string {
  const total = product.numericPrice * quantity;
  const totalFormatted = total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    `Olá! Tenho interesse em comprar o seguinte produto:\n\n` +
    `*Produto:* ${product.name}\n` +
    `*Quantidade:* ${quantity}\n` +
    `*Total:* ${totalFormatted}\n` +
    `*Descrição:* ${product.description}\n\n` +
    `Gostaria de finalizar a compra. Aguardo retorno!`
  );
}
