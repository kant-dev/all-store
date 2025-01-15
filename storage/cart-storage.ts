import { Cart } from "@/types/Cart"
import { Product } from "@/types/Product"

import {create} from 'zustand'


// TYPE DO ESTADO/STATE
type States = {
  cart: Cart[],
}

// TYPE DAS AÇÕES QUE ESTÃO LIGADAS AO CART
type Actions = {
  upsertCartItem: (product: Product, quantity: number) => void,
}

// ESTADO INCIAL DA APLICAÇÃO
const initialState: States = {
  cart: [],
}

// FUNÇÃO DE MODIFICIAÇÃO DE ESTADO
export const useCartStorage = create<States & Actions>()(set =>({
  ...initialState,

  upsertCartItem: (product, quantity) => set(state => {
    let newCart = [...state.cart];

    let indexProduct = newCart.findIndex(prod => prod.product.id === product.id);

    if(indexProduct < 0) {
      newCart.push({ product, quantity: 0 });
      indexProduct = newCart.findIndex(prod => prod.product.id === product.id);
    }

    newCart[indexProduct].quantity += quantity;

    if(newCart[indexProduct].quantity <= 0){
      newCart = newCart.filter(prod => prod.product.id !== product.id);
    }

    return {...state, cart: newCart}
  })
}))