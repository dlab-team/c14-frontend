import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAuthStore = create(
  persist(
    set => ({
      user: null,
      isAuthenticated: false,
      setAuth: ({ user }) => set({ user, isAuthenticated: !!user }),
      clearLocalStorage: () => {
        localStorage.clear();
      },
    }),
    {
      name: 'auth-storage',
    },
  ),
)

export default useAuthStore
