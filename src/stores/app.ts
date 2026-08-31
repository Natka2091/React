import { create } from 'zustand'
import type { ConverterStoreTypes } from '../components/converter/constants'
import { persist } from 'zustand/middleware'

export const useConverterStore = create<ConverterStoreTypes>() (
    persist(
        (set) => ({
            history: [],
            addHistory: (item) => set((state) => ({history: [...state.history, item], })),
            clearHistory: () => set({history: [],}),
        }),
        { name: 'converter-history-storage', }
    )
);