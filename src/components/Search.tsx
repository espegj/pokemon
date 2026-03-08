import { useState } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from "@headlessui/react";
import { usePokemonList } from "../api/pokemon";
import type { NameUrl } from "../types/pokemon";
import { Loading } from "./Icons";

interface Props {
  onSearch: (name: string) => void;
  isLoading?: boolean;
}

export const Search = ({ onSearch, isLoading = false }: Props) => {
  const [input, setInput] = useState("");
  const { data: listData } = usePokemonList();

  const suggestions =
    input.trim().length > 0
      ? (listData?.results ?? []).filter((p) =>
          p.name.startsWith(input.toLowerCase().trim())
        )
      : [];

  const handleSelect = (item: NameUrl | null) => {
    if (item) {
      onSearch(item.name);
      setInput(item.name);
    }
  };

  const handleSubmit = () => {
    if (input.trim()) {
      onSearch(input.trim().toLowerCase());
    }
  };

  return (
    <div className="flex gap-2 w-full justify-center max-w-lg">
      <Combobox onChange={handleSelect}>
        <div className="relative w-full">
          <ComboboxInput
            value={input}
            autoComplete="off"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
            placeholder="Søk på en Pokémon.."
            className="w-full p-4 rounded-xl border border-slate-400"
          />
          {input !== "" && (
            <ComboboxOptions className="absolute z-50 max-h-80 mt-2 flex flex-col w-full rounded border border-slate-400 overflow-scroll bg-white">
              {suggestions.map((s) => (
                <ComboboxOption
                  key={s.name}
                  value={s}
                  className="px-4 py-2 cursor-pointer text-sm flex items-center gap-4 hover:bg-slate-200 focus:bg-slate-200 data-active:bg-slate-200 capitalize"
                >
                  {s.name}
                </ComboboxOption>
              ))}
              {input !== "" && !isLoading && suggestions.length === 0 && (
                <div className="py-2 pl-4 pr-4">
                  <div>Ingen treff..</div>
                </div>
              )}
            </ComboboxOptions>
          )}
        </div>
      </Combobox>
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="bg-amber-500 rounded-xl text-white min-w-24 flex items-center justify-center"
      >
        {isLoading ? <Loading /> : "Søk"}
      </button>
    </div>
  );
};
