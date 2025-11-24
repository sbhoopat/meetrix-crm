import { MetricCard } from '../components/MetricCard';
import { ChartPanel } from '../components/ChartPanel';
import { WorkflowCanvas } from '../components/WorkflowCanvas';
import { dashboardMetrics } from '../../../shared/mockData';

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardMetrics.map(metric => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </section>
      <section className="grid gap-6 xl:grid-cols-2">
        <ChartPanel />
        <WorkflowCanvas />
      </section>
    </div>
  );
};

