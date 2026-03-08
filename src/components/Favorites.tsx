import { useStore } from "../utils/useStore";
import { getTypeColor } from "../utils/typeColors";

interface Props {
  onClick: (name: string) => void;
}

export const Favorites = ({ onClick }: Props) => {
  const { favorites, removeFavorite } = useStore();

  if (favorites.length === 0) {
    return null;
  }

  return (
    <div className="flex gap-4 flex-col items-center">
      <div className="flex items-center gap-2">
        <h2 className="font-bold text-sm uppercase">Favoritter</h2>
        <span className="text-slate-500 text-xs">({favorites.length})</span>
      </div>
      <div className="flex gap-4 flex-wrap justify-center">
        {favorites.map((pokemon) => (
          <div key={pokemon?.id} className="relative group">
            {pokemon ? (
              <button
                onClick={() => onClick(pokemon.name)}
                className={`w-25 h-25 rounded-xl shadow-xl bg-linear-to-br min-w-0
                  ${
                    getTypeColor(pokemon.types[0]?.type.name ?? "normal")
                      .gradient
                  }
                  flex flex-col items-center p-2 justify-between capitalize`}
                title={pokemon.name}
              >
                <img
                  src={
                    pokemon.sprites.other["official-artwork"].front_default ??
                    ""
                  }
                  alt={pokemon.name}
                  className="h-15"
                />
                <span className="text-white text-xs truncate capitalize w-full text-center">
                  {pokemon.name}
                </span>
              </button>
            ) : (
              <div
                className="w-25 h-25 rounded-xl border-2 border-dashed border-slate-400
                flex items-center justify-center text-xl text-slate-400"
              >
                +
              </div>
            )}
            {pokemon && (
              <button
                onClick={() => {
                  removeFavorite(pokemon.id);
                }}
                title="Fjern fra laget"
                className="w-5 h-5 bg-red-400 rounded-full flex items-center justify-center text-white absolute -top-2 -right-2 opacity-0 group-hover:opacity-100"
              >
                ×
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
