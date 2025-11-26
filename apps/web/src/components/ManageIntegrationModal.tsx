import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { IntegrationDetail } from '../../../shared/mockData';

interface ManageIntegrationModalProps {
    isOpen: boolean;
    onClose: () => void;
    integration: IntegrationDetail | null;
    onAddNew: () => void;
}

export const ManageIntegrationModal = ({ isOpen, onClose, integration, onAddNew }: ManageIntegrationModalProps) => {
    if (!integration) return null;

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-gray-800">
                                <div className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-700">
                                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                        <button onClick={onClose} className="hover:text-gray-700 dark:hover:text-gray-200">
                                            &lt; Back to Integrations
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="btn-primary" onClick={onAddNew}>
                                            + Add New
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <div className="mb-8 flex items-center justify-between rounded-xl bg-gray-50 p-4 dark:bg-gray-900/50">
                                        <div>
                                            <p className="text-sm font-medium text-gray-500 underline dark:text-gray-400">Linked Account</p>
                                            <div className="mt-2 flex items-center gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900 dark:text-gray-100">{integration.accountName}</p>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">Integrated with: <span className="font-medium text-gray-900 dark:text-gray-100">{integration.email}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="btn-primary">
                                                + Lead Form
                                            </button>
                                            <button className="rounded-full border border-red-200 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 dark:border-red-900/30 dark:text-red-400 dark:hover:bg-red-900/20">
                                                Unlink
                                            </button>
                                        </div>
                                    </div>

                                    <div className="mb-4 flex items-center justify-between">
                                        <div className="relative flex-1 max-w-md">
                                            <input
                                                type="text"
                                                placeholder="Search with page and form name"
                                                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2 pl-10 text-sm outline-none focus:border-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                                            />
                                            <svg className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{integration.items.length} Forms found</p>
                                    </div>

                                    <div className="space-y-4">
                                        {integration.items.map(item => (
                                            <div key={item.id} className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                                                <div>
                                                    <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400">{item.name}</h4>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.subText}</p>
                                                    <div className="mt-2 flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                                                        <span className="flex items-center gap-1">
                                                            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                            </svg>
                                                            {item.date}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                            </svg>
                                                            {item.count}
                                                        </span>
                                                        <span className="rounded-full bg-gray-100 px-2 py-0.5 dark:bg-gray-700">Last lead: {item.lastLead}</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-center gap-2">
                                                    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                                        </svg>
                                                    </button>
                                                    <button className="flex flex-col items-center gap-1 text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">
                                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-900/30">
                                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                            </svg>
                                                        </div>
                                                        <span className="text-[10px] font-medium">View Leads</span>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};
