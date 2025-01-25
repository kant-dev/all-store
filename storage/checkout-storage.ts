import { Action } from "@radix-ui/react-toast";
import { create } from "zustand";

type States = {
  name: string,
  address: {
    street: string,
    number: string,
    complement?: string | undefined,
    district: string
  }
}

type Actions = {
  setName: (name: States['name']) => void,
  setAddress: (address: States['address']) => void,
}

const initalStates: States = {
  name: '',
  address: {
    street: '',
    number: '',
    complement: '',
    district: '',
  },
}

export const useCheckoutStorage = create<States & Actions>()(set => ({
  ...initalStates,

  setName: (name) => set(state => ({...state, name })),
  setAddress: (address) => set(state=> ({...state, address })),
}))