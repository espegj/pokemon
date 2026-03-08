export const TYPE_COLORS: {
  [key: string]: { bg: string; text: string; gradient: string };
} = {
  normal: {
    bg: "bg-gray-400",
    text: "text-gray-900",
    gradient: "from-gray-500 to-gray-600",
  },
  fire: {
    bg: "bg-orange-500",
    text: "text-white",
    gradient: "from-orange-500 to-red-600",
  },
  water: {
    bg: "bg-blue-500",
    text: "text-white",
    gradient: "from-blue-500 to-cyan-600",
  },
  grass: {
    bg: "bg-green-500",
    text: "text-white",
    gradient: "from-green-500 to-emerald-600",
  },
  electric: {
    bg: "bg-yellow-400",
    text: "text-gray-900",
    gradient: "from-yellow-400 to-amber-500",
  },
  ice: {
    bg: "bg-cyan-300",
    text: "text-gray-900",
    gradient: "from-cyan-300 to-sky-400",
  },
  fighting: {
    bg: "bg-red-700",
    text: "text-white",
    gradient: "from-red-700 to-rose-800",
  },
  poison: {
    bg: "bg-purple-500",
    text: "text-white",
    gradient: "from-purple-500 to-violet-600",
  },
  ground: {
    bg: "bg-amber-600",
    text: "text-white",
    gradient: "from-amber-600 to-yellow-700",
  },
  flying: {
    bg: "bg-indigo-400",
    text: "text-white",
    gradient: "from-indigo-400 to-blue-500",
  },
  psychic: {
    bg: "bg-pink-500",
    text: "text-white",
    gradient: "from-pink-500 to-rose-500",
  },
  bug: {
    bg: "bg-lime-500",
    text: "text-white",
    gradient: "from-lime-500 to-green-600",
  },
  rock: {
    bg: "bg-stone-500",
    text: "text-white",
    gradient: "from-stone-500 to-stone-600",
  },
  ghost: {
    bg: "bg-violet-700",
    text: "text-white",
    gradient: "from-violet-700 to-purple-900",
  },
  dragon: {
    bg: "bg-indigo-700",
    text: "text-white",
    gradient: "from-indigo-700 to-blue-900",
  },
  dark: {
    bg: "bg-gray-800",
    text: "text-white",
    gradient: "from-gray-800 to-gray-900",
  },
  steel: {
    bg: "bg-slate-400",
    text: "text-white",
    gradient: "from-slate-400 to-gray-500",
  },
  fairy: {
    bg: "bg-pink-300",
    text: "text-gray-900",
    gradient: "from-pink-300 to-rose-400",
  },
};

export const getTypeColor = (type: string) => {
  return TYPE_COLORS[type] ?? TYPE_COLORS["normal"];
};
