import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface IntegrationAuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: 'facebook' | 'whatsapp' | 'sheets' | 'other';
}

export const IntegrationAuthModal = ({ isOpen, onClose, type }: IntegrationAuthModalProps) => {
    const renderContent = () => {
        if (type === 'facebook') {
            return (
                <div className="flex flex-col items-center">
                    <div className="mb-6 text-center">
                        <h3 className="text-2xl font-bold text-[#1877F2]">facebook</h3>
                        <p className="mt-2 text-lg">Log in to use your Facebook account with Meetrix</p>
                    </div>
                    <form className="w-full max-w-sm space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="text"
                            placeholder="Email or Phone Number"
                            className="w-full rounded-md border border-gray-300 p-3 focus:border-[#1877F2] focus:outline-none focus:ring-1 focus:ring-[#1877F2]"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full rounded-md border border-gray-300 p-3 focus:border-[#1877F2] focus:outline-none focus:ring-1 focus:ring-[#1877F2]"
                        />
                        <button className="w-full rounded-md bg-[#1877F2] py-3 font-bold text-white hover:bg-[#166fe5]">
                            Log In
                        </button>
                        <div className="text-center text-sm text-[#1877F2] hover:underline cursor-pointer">
                            Forgot Password?
                        </div>
                        <div className="my-4 flex items-center gap-4">
                            <div className="h-px flex-1 bg-gray-300"></div>
                            <span className="text-sm text-gray-500">or</span>
                            <div className="h-px flex-1 bg-gray-300"></div>
                        </div>
                        <button className="w-full rounded-md bg-[#42b72a] py-3 font-bold text-white hover:bg-[#36a420]">
                            Create New Account
                        </button>
                    </form>
                </div>
            );
        }

        if (type === 'whatsapp') {
            return (
                <div className="flex flex-col items-center text-center">
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold text-[#25D366]">WhatsApp</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">Scan QR code to connect</p>
                    </div>

                    <div className="mb-8 rounded-xl border-2 border-dashed border-gray-300 p-4 dark:border-gray-600">
                        <div className="flex h-48 w-48 items-center justify-center bg-gray-100 dark:bg-gray-700">
                            {/* Mock QR Code */}
                            <div className="grid grid-cols-6 gap-1">
                                {[...Array(36)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`h-6 w-6 ${Math.random() > 0.5 ? 'bg-black dark:bg-white' : 'bg-transparent'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-sm text-left">
                        <ol className="list-decimal space-y-2 pl-5 text-sm text-gray-600 dark:text-gray-300">
                            <li>Open WhatsApp on your phone</li>
                            <li>Tap Menu or Settings and select <strong>Linked Devices</strong></li>
                            <li>Tap on <strong>Link a Device</strong></li>
                            <li>Point your phone to this screen to capture the code</li>
                        </ol>
                    </div>
                </div>
            );
        }

        if (type === 'sheets') {
            return (
                <div className="flex flex-col items-center text-center">
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold text-[#1D6F42]">Excel / CSV</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">Upload your file to sync leads</p>
                    </div>

                    <div className="mb-6 w-full rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-8 transition-colors hover:border-[#1D6F42] hover:bg-[#1D6F42]/5 dark:border-gray-600 dark:bg-gray-800">
                        <div className="flex flex-col items-center">
                            <svg className="mb-4 h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                Drop your file here, or <span className="text-[#1D6F42] cursor-pointer hover:underline">browse</span>
                            </p>
                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                Supports .xlsx, .xls, .csv
                            </p>
                        </div>
                    </div>

                    <div className="flex w-full items-center justify-between rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1D6F42]/10 text-[#1D6F42]">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zM6 20V4h5v5h5v11H6z" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Sample Template</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Use this format for best results</p>
                            </div>
                        </div>
                        <button className="text-sm font-medium text-[#1D6F42] hover:underline">
                            Download
                        </button>
                    </div>
                </div>
            );
        }

        return (
            <div className="flex flex-col items-center justify-center p-8 text-center">
                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
                    <svg className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">Integration Setup</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Follow the instructions provided in the documentation to connect this service.
                </p>
                <button onClick={onClose} className="btn-primary mt-6">
                    Done
                </button>
            </div>
        );
    };

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
                            <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all dark:bg-gray-800">
                                <div className="absolute right-4 top-4">
                                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                {renderContent()}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};
