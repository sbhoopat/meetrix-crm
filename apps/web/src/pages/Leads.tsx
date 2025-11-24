import { sampleLeads, leadActions, leadFormFields } from '../../../shared/mockData';
import { LeadTable } from '../components/LeadTable';

export const Leads = () => {
  return (
    <div className="space-y-6">
      <section className="glass-panel neon-border flex flex-col gap-4 rounded-3xl p-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-muted">Leads</p>
          <p className="text-2xl font-semibold">Crescent 2024 Campaign</p>
        </div>
        <div className="flex flex-wrap gap-2 text-sm">
          {leadActions.map(action => {
            const intentClasses: Record<string, string> = {
              primary: 'btn-neon',
              neutral: 'btn-outline',
              accent: 'btn-neon'
            };
            return (
              <button key={action.id} className={intentClasses[action.intent] ?? 'btn-outline'}>
                {action.label}
              </button>
            );
          })}
        </div>
      </section>
      <LeadTable data={sampleLeads} />
      <section className="glass-panel rounded-3xl p-4">
        <p className="text-sm text-muted">Lead Form</p>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          {leadFormFields.map(label => (
            <label key={label} className="text-xs uppercase tracking-widest text-muted">
              {label}
              <input
                className="mt-2 form-input"
                placeholder={`Enter ${label}`}
              />
            </label>
          ))}
        </div>
        <div className="mt-4 flex justify-end">
          <button className="btn-neon">Save Lead</button>
        </div>
      </section>
    </div>
  );
};

