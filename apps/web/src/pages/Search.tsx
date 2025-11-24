import { Filter, Search as SearchIcon } from 'lucide-react';

const quickFilters = ['All Leads', 'WhatsApp', 'High Intent', 'Pending Callbacks'];

export const Search = () => (
  <div className="space-y-6">
    <section className="glass-panel neon-border rounded-3xl p-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-gray-400">Universal Search</p>
          <p className="text-2xl font-semibold">Find leads, automation, campaigns</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="btn-outline">
            <Filter size={16} /> Advanced Filters
          </button>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-3 md:flex-row">
        <div className="flex flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
          <SearchIcon className="text-gray-500" />
          <input className="flex-1 bg-transparent text-sm outline-none" placeholder="Search by name, phone, tag..." />
        </div>
        <button className="btn-neon">Search</button>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-widest text-gray-400">
        {quickFilters.map(filter => (
          <span key={filter} className="rounded-full border border-white/10 px-3 py-1">
            {filter}
          </span>
        ))}
      </div>
    </section>
  </div>
);

