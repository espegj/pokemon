import type { Pokemon } from "../../types/pokemon";
import { getTypeColor } from "../../utils/typeColors";
import { useStore } from "../../utils/useStore";
import { HeartFilledIcon, HeartIcon, PlusIcon } from "../Icons";
import { TypeBadge } from "./TypeBadge";
import { StatBar } from "./StatsBar";

interface Props {
  pokemon?: Pokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { isFavorite, addFavorite, removeFavorite, addToTeam, isInTeam } =
    useStore();

  if (!pokemon) {
    return (
      <div className="max-w-lg w-full card rounded-xl overflow-hidden shadow-2xl h-180">
        <div
          className={`bg-linear-to-tl ${
            getTypeColor("electric").gradient
          } p-8 h-72`}
        >
          <div className="flex justify-between mb-3 items-start">
            <div className="flex flex-col gap-2">
              <div className="h-4 w-10 bg-white/50 rounded-full" />
              <div className="h-6 w-24 bg-white/50 rounded-full" />
            </div>
          </div>
        </div>
        <div className="bg-white pt-10 p-8 flex flex-col gap-4">
          <div className="h-6 w-32 bg-slate-200/40 rounded-full" />
          <div className="h-4 w-56 bg-slate-200/40 rounded-full" />
          <div className="h-4 w-56 bg-slate-200/40 rounded-full" />
          <div className="h-4 w-56 bg-slate-200/40 rounded-full" />
        </div>
      </div>
    );
  }

  const isFav = isFavorite(pokemon.id);
  const inTeam = isInTeam(pokemon.id);
  const colors = getTypeColor(pokemon.types[0]?.type.name);
  const imageUrl = pokemon.sprites.other["official-artwork"].front_default;
  const abilities = pokemon.abilities.slice(0, 3);
  const moves = pokemon.moves.slice(0, 3);

  return (
    <div className="max-w-lg w-full card rounded-xl overflow-hidden shadow-2xl h-180">
      <div className={`bg-linear-to-tl ${colors.gradient} p-8 h-72`}>
        <div className="flex justify-between mb-3 items-start">
          <div>
            <p className="text-white text-xs">#{pokemon.id}</p>
            <h2 className="text-white text-2xl font-bold capitalize">
              {pokemon?.name}
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() =>
                isFav ? removeFavorite(pokemon.id) : addFavorite(pokemon)
              }
              title={isFav ? "Fjern fra favoritter" : "Legg til favoritter"}
              className="text-white"
            >
              {isFav ? <HeartFilledIcon /> : <HeartIcon />}
            </button>
            <button
              onClick={() => addToTeam(pokemon)}
              disabled={inTeam}
              title={inTeam ? "Allerede i laget" : "Legg til laget"}
              className={`
                ${inTeam ? "text-white/50" : "text-white"}`}
            >
              <PlusIcon />
            </button>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          {pokemon.types.map(({ type }) => (
            <TypeBadge key={type.name} type={type.name} />
          ))}
        </div>
        <img
          src={imageUrl ?? ""}
          alt={pokemon.name}
          className="w-50 h-50 drop-shadow-2xl justify-self-center mt-2"
          draggable={false}
        />
      </div>
      <div className="bg-white pt-10 p-8 flex flex-col gap-4">
        <div className="flex justify-around text-center">
          <div>
            <p className="text-slate-400 text-xs">Høyde</p>
            <p className="font-bold text-sm text-slate-500">
              {pokemon.height / 10} m
            </p>
          </div>
          <div className="w-px bg-slate-700" />
          <div>
            <p className="text-slate-400 text-xs">Vekt</p>
            <p className="font-bold text-sm text-slate-500">
              {pokemon.weight / 10} kg
            </p>
          </div>
          <div className="w-px bg-slate-700" />
          <div>
            <p className="text-slate-400 text-xs">Base EXP</p>
            <p className="font-bold text-sm text-slate-500">
              {pokemon.base_experience}
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-slate-500 text-xs font-bold uppercase mb-2">
            Stats
          </h3>
          <div className="flex flex-col gap-2">
            {pokemon.stats.map((s) => (
              <StatBar
                key={s.stat.name}
                label={s.stat.name}
                value={s.base_stat}
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-slate-500 text-xs font-bold uppercase mb-2">
            Abilities
          </h3>
          <div className="flex flex-wrap gap-2">
            {abilities.map(({ ability }) => (
              <span
                key={ability.name}
                className="text-xs px-3 py-1 rounded-full capitalize bg-slate-200"
              >
                {ability.name}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-slate-500 text-xs font-bold uppercase mb-2">
            Moves
          </h3>
          <div className="flex flex-wrap gap-2">
            {moves.map(({ move }) => (
              <span
                key={move.name}
                className="text-xs px-3 py-1 rounded-full bg-slate-200 capitalize"
              >
                {move.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
