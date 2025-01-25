import { useCartStorage } from "@/storage/cart-storage";
import { useCheckoutStorage } from "@/storage/checkout-storage";

export const generateMessage = () => {
  const { cart } = useCartStorage((state) => state);
  const { name, address } = useCheckoutStorage((state) => state);

  let orderProduct: string[] = [];
  let total = 0;

  for (let item of cart) {
    const subtotal = item.quantity * (item.product.price || 0);
    total += subtotal;

    orderProduct.push(
      `- ${item.product.title} | Qtd: ${item.quantity} | Subtotal: $${subtotal.toFixed(2)}`
    );
  }

  return `
*Dados do Usuário:*
*Nome:* ${name}
Endereço: 
  - Rua: ${address.street}, ${address.number}, ${address.complement || "N/A"}
  - Bairro: ${address.district}

*Carrinho:*
${orderProduct.join("\n")}

*Total Geral:* $${total.toFixed(2)}
  `;
};
