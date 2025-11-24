import { integrationCards } from '../../../shared/mockData';

export const Integrations = () => (
  <div className="space-y-6">
    <section className="glass-panel rounded-3xl p-4">
      <p className="text-sm text-gray-400">Integrations Hub</p>
      <p className="text-2xl font-semibold">Connect every touchpoint</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {integrationCards.map(integration => (
          <div key={integration.id} className="rounded-2xl border border-white/10 p-4">
            <p className="text-lg font-semibold">{integration.name}</p>
            <p className="text-xs uppercase tracking-widest text-gray-400">{integration.status}</p>
            <p className="mt-2 text-sm text-gray-300">{integration.description}</p>
            <button className={`mt-4 ${integration.status === 'Active' ? 'btn-outline btn-sm' : 'btn-neon btn-sm'}`}>
              {integration.status === 'Active' ? 'Manage' : 'Activate'}
            </button>
          </div>
        ))}
      </div>
    </section>
  </div>
);

