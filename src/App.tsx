import { useState } from "react";
import { usePokemon } from "./api/pokemon";
import { Search } from "./components/Search";
import { PokemonCard } from "./components/PokemonCard/PokemonCard";
import { Team } from "./components/Team";
import { Favorites } from "./components/Favorites";

export const App = () => {
  const [query, setQuery] = useState("");
  const {
    data: pokemon,
    isLoading,
    isError,
    error,
  } = usePokemon({ idOrName: query });

  return (
    <div className="min-h-screen flex flex-col p-8 gap-8 items-center text-slate-800">
      <div className="flex flex-col gap-4 w-full items-center">
        <Search onSearch={setQuery} isLoading={isLoading} />
        {isError && (
          <div className="flex flex-col items-center gap-3 py-10 text-center">
            <p className="font-bold text-lg">
              {error.message ?? "Noe gikk galt"}
            </p>
            <p className="text-slate-500 text-sm">
              Sjekk stavemåten og prøv igjen.
            </p>
          </div>
        )}
        {!isError && <PokemonCard key={pokemon?.id} pokemon={pokemon} />}
      </div>
      <div className="flex flex-col gap-8 items-center pt-8">
        <Team onClick={setQuery} />
        <Favorites onClick={setQuery} />
      </div>
    </div>
  );
};
