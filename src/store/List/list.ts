import axios from 'axios';
import create from 'zustand'

export const useList = create<{ list: any, get: () => void }>((set) => ({
  list: [],
  get: async () => {
    set({ list: await (await axios.get("/api/hello")).data})
  },
}))