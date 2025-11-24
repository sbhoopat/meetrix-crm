type Props = {
  label: string;
  value: string;
  trend?: string;
};

export const MetricCard = ({ label, value, trend }: Props) => {
  return (
    <div className="glass-panel neon-border rounded-2xl px-4 py-5">
      <p className="text-xs uppercase tracking-widest text-gray-400">{label}</p>
      <p className="mt-2 text-2xl font-semibold">{value}</p>
      {trend && <p className="mt-1 text-xs text-neon-cyan">{trend}</p>}
    </div>
  );
};

