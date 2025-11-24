import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { funnelSeries } from '../../../shared/mockData';

export const ChartPanel = () => {
  return (
    <div className="glass-panel neon-border h-72 p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">Conversion Funnel</p>
          <p className="text-xl font-semibold">Weekly performance</p>
        </div>
        <button className="btn-neon btn-sm">Export</button>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <AreaChart data={funnelSeries}>
          <defs>
            <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2EE4FF" stopOpacity={0.7} />
              <stop offset="95%" stopColor="#2EE4FF" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorConversion" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF8A3C" stopOpacity={0.7} />
              <stop offset="95%" stopColor="#FF8A3C" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip contentStyle={{ background: '#0f172a', borderRadius: 12 }} />
          <Area
            type="monotone"
            dataKey="leads"
            stroke="#2EE4FF"
            fillOpacity={1}
            fill="url(#colorLeads)"
          />
          <Area
            type="monotone"
            dataKey="conversions"
            stroke="#FF8A3C"
            fillOpacity={1}
            fill="url(#colorConversion)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

