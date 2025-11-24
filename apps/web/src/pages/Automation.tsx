import { Clock, Play, Plus } from 'lucide-react';
import { automationFlows, schedulePresets } from '../../../shared/mockData';

export const Automation = () => (
  <div className="space-y-6">
    <section className="glass-panel rounded-3xl p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">Automation</p>
          <p className="text-2xl font-semibold">Workflows & Schedules</p>
        </div>
        <button className="btn-neon">
          <Plus size={16} className="inline-block" /> Create Workflow
        </button>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {automationFlows.map(flow => (
          <div key={flow.id} className="rounded-2xl border border-white/10 p-4 text-sm">
            <p className="font-semibold">{flow.name}</p>
            <p className="text-gray-400">{flow.event}</p>
            <div className="mt-2 flex items-center gap-2 text-xs text-gray-400">
              <Clock size={14} /> Updated {flow.updated}
            </div>
            <div className="mt-4 flex gap-2">
              <button className="btn-outline flex-1 btn-sm">Edit</button>
              <button className="btn-outline flex-1 btn-sm">Logs</button>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section className="glass-panel rounded-3xl p-4">
      <p className="text-sm text-gray-400">Schedules</p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        {schedulePresets.map(freq => (
          <button key={freq} className="btn-outline btn-sm">
            {freq}
          </button>
        ))}
        <button className="btn-neon btn-sm">
          <Play size={14} className="mr-1 inline" /> Run Now
        </button>
      </div>
    </section>
  </div>
);

