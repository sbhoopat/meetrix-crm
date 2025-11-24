const savedFilters = [
  { name: 'Fresh Leads', description: 'Status = Fresh, Assigned = Anyone' },
  { name: 'Pending WhatsApp', description: 'WhatsApp Opt-in, No recent reply' },
  { name: 'High Intent', description: 'Score > 80, Stage = Proposal' }
];

export const Filters = () => (
  <div className="space-y-6">
    <section className="glass-panel neon-border rounded-3xl p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">Filters</p>
          <p className="text-2xl font-semibold">Create customizable filters</p>
        </div>
        <button className="btn-neon">+ New Filter</button>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {savedFilters.map(filter => (
          <div key={filter.name} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-semibold">{filter.name}</p>
            <p className="text-xs text-gray-400">{filter.description}</p>
            <button className="btn-link mt-3">Apply</button>
          </div>
        ))}
      </div>
    </section>
  </div>
);

