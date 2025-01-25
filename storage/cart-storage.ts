import { Cart } from "@/types/Cart";
import { Product } from "@/types/Product";

import { create } from "zustand";

// TYPE DO ESTADO/STATE
type States = {
  cart: Cart[];
};

// TYPE DAS AÇÕES QUE ESTÃO LIGADAS AO CART
type Actions = {
  upsertCartItem: (product: Product, quantity: number) => void;
  clearCart: () => void;
};

// ESTADO INCIAL DA APLICAÇÃO
const initialState: States = {
  cart: [],
};

// Persistência no localStorage
const persistCart = (cart: Cart[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Obter o estado inicial do localStorage
const getInitialState = (): States => {
  const storedCart = localStorage.getItem("cart");
  return {
    cart: storedCart ? JSON.parse(storedCart) : [],
  };
};

// FUNÇÃO DE MODIFICAÇÃO DE ESTADO
export const useCartStorage = create<States & Actions>()((set) => ({
  ...getInitialState(),

  upsertCartItem: (product, quantity) =>
    set((state) => {
      let newCart = [...state.cart];
      let indexProduct = newCart.findIndex(
        (prod) => prod.product.id === product.id
      );

      if (indexProduct < 0) {
        newCart.push({ product, quantity: 0 });
        indexProduct = newCart.findIndex(
          (prod) => prod.product.id === product.id
        );
      }

      newCart[indexProduct].quantity += quantity;

      if (newCart[indexProduct].quantity <= 0) {
        newCart = newCart.filter((prod) => prod.product.id !== product.id);
      }

      persistCart(newCart); // Atualiza o localStorage
      return { ...state, cart: newCart };
    }),

  clearCart: () =>
    set(() => {
      persistCart([]); // Limpa o localStorage
      return { ...initialState };
    }),
}));
