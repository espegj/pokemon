import { useQuery } from "@tanstack/react-query";
import type { Pokemon, ListResponse } from "../types/pokemon";

const BASE = "https://pokeapi.co/api/v2";

interface UsePokemon {
  idOrName: string;
}
export const usePokemon = ({ idOrName }: UsePokemon) => {
  return useQuery<Pokemon, Error>({
    queryKey: ["pokemon", idOrName.toLowerCase()],
    queryFn: async () => {
      const res = await fetch(`${BASE}/pokemon/${idOrName.toLowerCase()}`);
      if (!res.ok) {
        throw new Error(`Fant ingen pokemon med navn "${idOrName}"`);
      }
      return res.json();
    },
    enabled: idOrName.trim().length > 0,
    retry: false,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export const usePokemonList = () => {
  return useQuery<ListResponse, Error>({
    queryKey: ["pokemonList"],
    queryFn: async () => {
      const res = await fetch(`${BASE}/pokemon?limit=1350`);
      return res.json();
    },
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
