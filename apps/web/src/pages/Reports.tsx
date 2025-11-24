import { BarChartBig, Download, FileWarning, Trophy } from 'lucide-react';
import { downloadableReports, reportSummaries } from '../../../shared/mockData';

const iconMap = {
  leaderboard: Trophy,
  'call-report': BarChartBig,
  download: Download,
  duplicates: FileWarning
} as const;

export const Reports = () => (
  <div className="space-y-6">
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {reportSummaries.map(card => {
        const Icon = iconMap[card.id as keyof typeof iconMap] ?? BarChartBig;
        return (
          <div key={card.id} className="glass-panel neon-border rounded-3xl p-4">
            <Icon />
            <p className="mt-3 text-sm text-gray-400">{card.label}</p>
            <p className="text-2xl font-semibold">{card.metric}</p>
            <p className="text-xs text-gray-500">{card.description}</p>
          </div>
        );
      })}
    </section>
    <section className="glass-panel rounded-3xl p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">Download Center</p>
          <p className="text-xl font-semibold">One-click exports</p>
        </div>
        <button className="btn-neon">New Export</button>
      </div>
      <div className="mt-4 space-y-3 text-sm">
        {downloadableReports.map(file => (
          <div key={file.id} className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3">
            <div>
              <p className="font-medium">{file.name}</p>
              <p className="text-xs text-gray-500">Updated {file.updated}</p>
            </div>
            <button className="btn-outline btn-sm">Download</button>
          </div>
        ))}
      </div>
    </section>
  </div>
);

