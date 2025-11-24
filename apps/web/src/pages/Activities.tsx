import { PhoneCall, Clock4 } from 'lucide-react';

const callStats = [
  { label: 'Today', calls: 41, duration: '8m', status: '0 sales' },
  { label: 'This Week', calls: 98, duration: '34m', status: '3 sales' }
];

export const Activities = () => (
  <div className="space-y-6">
    <section className="glass-panel neon-border rounded-3xl p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">Activities</p>
          <p className="text-2xl font-semibold">My Leads & Calls</p>
        </div>
        <button className="btn-outline">
          <Clock4 size={16} className="mr-1 inline" /> Schedule follow-up
        </button>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {callStats.map(stat => (
          <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-widest text-gray-400">{stat.label}</p>
            <p className="mt-2 flex items-center gap-2 text-2xl font-semibold">
              <PhoneCall size={20} /> {stat.calls} calls
            </p>
            <p className="text-sm text-gray-400">
              Avg duration {stat.duration} • {stat.status}
            </p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

