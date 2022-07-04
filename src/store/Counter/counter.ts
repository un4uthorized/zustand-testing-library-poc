import create from 'zustand'

export const useCounter = create<{
    counter: number, 
    add: () => void, 
    sub: () => void}>((set) => 
  ({
  counter: 0,
  add: () => set((state) => ({ counter: state.counter + 1 })),
  sub: () => set((state) => ({ counter: state.counter - 1 })),
}))