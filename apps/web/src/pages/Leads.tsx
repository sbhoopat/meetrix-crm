import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sampleLeads, leadActions, Lead } from '../../../shared/mockData';
import { LeadTable } from '../components/LeadTable';
import { LeadDetailsModal } from '../components/LeadDetailsModal';
import { ImportLeadsModal } from '../components/ImportLeadsModal';

export const Leads = () => {
  const navigate = useNavigate();
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);

  const handleAddLead = () => {
    setSelectedLead(null);
    setIsModalOpen(true);
  };

  const handleImportLead = () => {
    setIsImportModalOpen(true);
  };

  const handleRowClick = (lead: Lead) => {
    setSelectedLead(lead);
    setIsModalOpen(true);
  };

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

            const handleClick = () => {
              if (action.id === 'add-single') handleAddLead();
              if (action.id === 'import-excel') handleImportLead();
              if (action.id === 'add-integration') navigate('/integrations');
            };

            return (
              <button
                key={action.id}
                className={intentClasses[action.intent] ?? 'btn-outline'}
                onClick={handleClick}
              >
                {action.label}
              </button>
            );
          })}
        </div>
      </section>

      <LeadTable data={sampleLeads} onRowClick={handleRowClick} />

      <LeadDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lead={selectedLead}
      />

      <ImportLeadsModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
      />
    </div>
  );
};
