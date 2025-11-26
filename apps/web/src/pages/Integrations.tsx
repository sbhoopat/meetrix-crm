import { useState } from 'react';
import { integrationCards, integrationDetails } from '../../../shared/mockData';
import { ManageIntegrationModal } from '../components/ManageIntegrationModal';
import { IntegrationAuthModal } from '../components/IntegrationAuthModal';

export const Integrations = () => {
  const [selectedIntegrationId, setSelectedIntegrationId] = useState<string | null>(null);
  const [authModalType, setAuthModalType] = useState<'facebook' | 'whatsapp' | 'sheets' | 'other' | null>(null);

  const activeIntegrations = integrationCards.filter(i => i.status === 'Active');
  const availableIntegrations = integrationCards.filter(i => i.status === 'Available');

  const handleManage = (id: string) => {
    setSelectedIntegrationId(id);
  };

  const handleActivate = (id: string) => {
    // Map integration ID to auth type
    if (id === 'facebook') setAuthModalType('facebook');
    else if (id === 'whatsapp' || id === 'whatsapp-cloud') setAuthModalType('whatsapp');
    else if (id === 'sheets') setAuthModalType('sheets');
    else setAuthModalType('other');
  };

  const handleAddNewFromManage = () => {
    if (!selectedIntegrationId) return;
    handleActivate(selectedIntegrationId);
  };

  const selectedIntegrationDetail = selectedIntegrationId ? integrationDetails[selectedIntegrationId] : null;

  const IntegrationList = ({ title, items }: { title: string; items: typeof integrationCards }) => (
    <div className="mt-8">
      <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-gray-100">
        {title} ({items.length})
      </h3>
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <div className="grid grid-cols-12 gap-4 border-b border-gray-200 bg-gray-50 px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500 dark:border-gray-700 dark:bg-gray-900/50 dark:text-gray-400">
          <div className="col-span-6">Integrations</div>
          <div className="col-span-3">Status</div>
          <div className="col-span-3 text-right">Action</div>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {items.map(integration => (
            <div key={integration.id} className="grid grid-cols-12 items-center gap-4 px-6 py-4">
              <div className="col-span-6 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  {integration.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">{integration.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{integration.description}</p>
                </div>
              </div>
              <div className="col-span-3">
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${integration.status === 'Active'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                  }`}>
                  <span className={`mr-1.5 h-1.5 w-1.5 rounded-full ${integration.status === 'Active' ? 'bg-green-500' : 'bg-gray-500'
                    }`} />
                  {integration.status}
                </span>
              </div>
              <div className="col-span-3 text-right">
                <button
                  className={integration.status === 'Active' ? 'btn-outline' : 'btn-primary'}
                  onClick={() => integration.status === 'Active' ? handleManage(integration.id) : handleActivate(integration.id)}
                >
                  {integration.status === 'Active' ? 'Manage' : 'Activate now'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            <button className="border-b-2 border-blue-500 pb-1 text-sm font-medium text-blue-600 dark:text-blue-400">
              Integrations
            </button>
            <div className="ml-4 flex items-center rounded-lg border border-gray-200 bg-white px-3 py-1.5 dark:border-gray-700 dark:bg-gray-800">
              <input
                type="text"
                placeholder="Search Integration by name"
                className="w-64 bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
              <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <IntegrationList title="Active Integration" items={activeIntegrations} />
      <IntegrationList title="Available Integration" items={availableIntegrations} />

      <ManageIntegrationModal
        isOpen={!!selectedIntegrationId}
        onClose={() => setSelectedIntegrationId(null)}
        integration={selectedIntegrationDetail}
        onAddNew={handleAddNewFromManage}
      />

      <IntegrationAuthModal
        isOpen={!!authModalType}
        onClose={() => setAuthModalType(null)}
        type={authModalType || 'other'}
      />
    </div>
  );
};
