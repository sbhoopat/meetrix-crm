const campaigns = [
  { name: 'crescent2024-rpkodaiganesh', leads: 548, progress: 0 },
  { name: 'saveetha2025-rpkodaiganesh', leads: 312, progress: 12 },
  { name: 'crescent2023-rpkodaiganesh', leads: 720, progress: 65 }
];

export const Campaigns = () => (
  <div className="space-y-6">
    <section className="glass-panel neon-border rounded-3xl p-5">
      <p className="text-sm text-gray-400">Campaign Dashboard</p>
      <p className="text-2xl font-semibold">All running campaigns</p>
      <div className="mt-4 space-y-3">
        {campaigns.map(campaign => (
          <div key={campaign.name} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-lg font-semibold">{campaign.name}</p>
                <p className="text-xs uppercase tracking-widest text-gray-400">{campaign.leads} leads</p>
              </div>
              <div className="w-40 rounded-full bg-white/10">
                <div className="rounded-full bg-neon-cyan py-1 text-[11px] text-center text-black" style={{ width: `${Math.max(campaign.progress, 5)}%` }}>
                  {campaign.progress}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

