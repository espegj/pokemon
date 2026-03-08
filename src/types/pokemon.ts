export interface NameUrl {
  name: string;
  url: string;
}

export interface ListResponse {
  results: NameUrl[];
}

export interface Type {
  type: NameUrl;
}

export interface Ability {
  ability: NameUrl;
}

export interface Move {
  move: NameUrl;
}

export interface Stat {
  base_stat: number;
  stat: NameUrl;
}

export interface Sprites {
  other: {
    "official-artwork": {
      front_default: string;
    };
  };
}

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  types: Type[];
  abilities: Ability[];
  moves: Move[];
  stats: Stat[];
  sprites: Sprites;
}
