import { useCheckoutStorage } from "@/storage/checkout-storage";
import { Product } from "@/types/Product";

export const IndividualMessage = (product: Product) => {
  const { name, address } = useCheckoutStorage((state) => state);

  const subtotal = product.price || 0;
  const total = subtotal; // Para o produto único, o total é o subtotal do produto

  return `
*Dados do Usuário:*
*Nome:* ${name}
Endereço:
  - Rua: ${address.street}, ${address.number}, ${address.complement || "N/A"}
  - Bairro: ${address.district}

*Produto:*
- ${product.title} | Qtd: 1 | Subtotal: $${subtotal.toFixed(2)}

*Total Geral:* $${total.toFixed(2)}
  `;
};
