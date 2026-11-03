import { create } from 'zustand'

type UIState = {
  section: number
}

export const useUI = create<UIState>()(() => ({ section: 0 }))
