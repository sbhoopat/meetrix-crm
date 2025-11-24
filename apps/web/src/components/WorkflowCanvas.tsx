import { ArrowDownRight, MessageCircle, PhoneCall, Sparkles } from 'lucide-react';

const steps = [
  { label: 'Lead Captured', icon: Sparkles, color: 'from-neon-cyan to-neon-purple' },
  { label: 'Auto WhatsApp', icon: MessageCircle, color: 'from-neon-purple to-neon-orange' },
  { label: 'Dialer Task', icon: PhoneCall, color: 'from-neon-orange to-yellow-500' }
];

export const WorkflowCanvas = () => {
  return (
    <div className="glass-panel neon-border rounded-3xl p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">Automation Workflow</p>
          <p className="text-xl font-semibold">FB Lead Creation Notify</p>
        </div>
        <button className="btn-neon btn-sm">Edit Flow</button>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        {steps.map(({ label, icon: Icon, color }, idx) => (
          <div className="flex items-center gap-4" key={label}>
            <div className="rounded-2xl bg-gradient-to-br px-4 py-6 text-center shadow-neon" style={{ minWidth: 140 }}>
              <Icon className="mx-auto mb-2" />
              <p className="text-sm font-semibold">{label}</p>
            </div>
            {idx !== steps.length - 1 && (
              <ArrowDownRight className="text-neon-cyan" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

