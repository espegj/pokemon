interface Props {
  label: string;
  value: number;
}

export const StatBar = ({ label, value }: Props) => {
  const percent = Math.min(100, (value / 255) * 100);
  const color =
    value >= 100
      ? "bg-green-400"
      : value >= 60
      ? "bg-yellow-400"
      : "bg-red-400";

  return (
    <div className="flex items-center gap-2">
      <span className="text-slate-400 text-xs w-24">{label}</span>
      <div className="flex-1 h-2 bg-slate-100 rounded-full">
        <div
          className={`h-full rounded-full bar ${color}`}
          style={{
            width: `${percent}%`,
          }}
        />
      </div>
      <span className="text-slate-400 text-xs w-7">{value}</span>
    </div>
  );
};
