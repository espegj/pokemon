import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Pokemon } from "../types/pokemon";

const TEAM_SIZE = 5;

interface Store {
  favorites: Pokemon[];
  team: (Pokemon | null)[];
  addFavorite: (pokemon: Pokemon) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
  addToTeam: (pokemon: Pokemon) => void;
  removeFromTeam: (index: number) => void;
  isInTeam: (id: number) => boolean;
}

export const useStore = create<Store>()(
  persist(
    (set, get) => ({
      favorites: [],
      team: Array(TEAM_SIZE).fill(null),
      addFavorite: (pokemon) =>
        set((state) => ({
          favorites: state.favorites.some((p) => p.id === pokemon.id)
            ? state.favorites
            : [...state.favorites, pokemon],
        })),
      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((p) => p.id !== id),
        })),
      isFavorite: (id) => get().favorites.some((p) => p.id === id),
      addToTeam: (pokemon) => {
        const team = [...get().team];
        if (team.some((p) => p?.id === pokemon.id)) return;
        const emptyIndex = team.findIndex((p) => p === null);
        if (emptyIndex === -1) return;
        team[emptyIndex] = pokemon;
        set({ team });
      },
      removeFromTeam: (index) => {
        const team = [...get().team];
        team[index] = null;
        set({ team });
      },
      isInTeam: (id) => get().team.some((p) => p?.id === id),
    }),
    { name: "pokemonStore" }
  )
);
