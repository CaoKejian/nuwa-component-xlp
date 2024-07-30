import { create } from 'zustand'

interface TButton {
  label: string;
  token: string;
  setLabel: (id: number, label: string) => void;
  getLabel: (id: number, name: string) => string;
}

const initData = {
  label: '',
  token: ''
}

export const useButtonStore = create<TButton>((set, get) => ({
  ...initData,
  setLabel: (id, label) => set({ label }),
  getLabel: (id, name) => {
    return get().label
  }
}))