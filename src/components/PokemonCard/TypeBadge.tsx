import { getTypeColor } from "../../utils/typeColors";

interface Props {
  type: string;
}

export const TypeBadge = ({ type }: Props) => {
  const colors = getTypeColor(type);
  return (
    <span
      className={`${colors.bg} ${colors.text} text-xs font-bold px-3 py-1 rounded-full uppercase`}
    >
      {type}
    </span>
  );
};
