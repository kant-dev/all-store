import { useCartStorage } from "@/storage/cart-storage";
import { useCheckoutStorage } from "@/storage/checkout-storage";
import { Product } from "@/types/Product";  // Certifique-se de importar a interface Product

export const generateMessage = (product?: Product) => {
  const { cart } = useCartStorage((state) => state);
  const { name, address } = useCheckoutStorage((state) => state);

  let orderProduct: string[] = [];
  let total = 0;

  // Se o produto for individual (passado como argumento)
  if (product) {
    const subtotal = product.price || 0;
    total = subtotal;

    orderProduct.push(
      `- ${product.title} | Qtd: 1 | Subtotal: $${subtotal.toFixed(2)}`
    );
  } else {
    // Se for o carrinho, percorre os itens no carrinho
    for (let item of cart) {
      const subtotal = item.quantity * (item.product.price || 0);
      total += subtotal;

      orderProduct.push(
        `- ${item.product.title} | Qtd: ${item.quantity} | Subtotal: $${subtotal.toFixed(2)}`
      );
    }
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
