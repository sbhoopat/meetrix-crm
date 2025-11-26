
import React, { useRef, useState } from 'react';

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export const ImportLeadsModal = ({ isOpen, onClose }: Props) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [dragActive, setDragActive] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    if (!isOpen) return null;

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
    };

    const handleFile = (file: File) => {
        if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.name.endsWith('.xlsx')) {
            setSelectedFile(file);
        } else {
            alert('Please upload a valid .xlsx file');
        }
    };

    const onButtonClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="glass-panel w-full max-w-3xl rounded-3xl p-0 shadow-2xl relative animate-in fade-in zoom-in duration-200 overflow-hidden flex bg-white">

                {/* Sidebar */}
                <div className="w-64 bg-white border-r border-gray-100 p-4 hidden md:block">
                    <div className="space-y-2">
                        <div className="p-3 rounded-xl bg-green-50 text-green-700 text-sm font-medium flex items-center gap-3 cursor-pointer">
                            <div className="w-8 h-8 rounded bg-green-600 text-white flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="16" y2="17" /><line x1="10" y1="9" x2="8" y2="9" /></svg>
                            </div>
                            <div>
                                <div className="text-gray-900">Import Leads</div>
                                <div className="text-xs text-gray-500">Add leads in bulk</div>
                            </div>
                        </div>
                        <div className="p-3 rounded-xl hover:bg-gray-50 text-gray-500 text-sm font-medium flex items-center gap-3 cursor-pointer transition-colors">
                            <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="12" y1="18" x2="12" y2="12" /><line x1="9" y1="15" x2="15" y2="15" /></svg>
                            </div>
                            <div>
                                <div className="text-gray-600">Update Leads</div>
                                <div className="text-xs text-gray-400">Update leads in bulk</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-8 bg-white">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded bg-green-600 text-white flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="16" y2="17" /><line x1="10" y1="9" x2="8" y2="9" /></svg>
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-900">Import Leads</h2>
                        <a href="#" className="ml-auto text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
                            How to upload?
                        </a>
                    </div>

                    <div
                        className={`border-2 border-dashed rounded-3xl p-12 flex flex-col items-center justify-center text-center transition-colors ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                    >
                        <input
                            ref={fileInputRef}
                            type="file"
                            className="hidden"
                            accept=".xlsx"
                            onChange={handleChange}
                        />

                        <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4 text-purple-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                        </div>

                        {selectedFile ? (
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <p className="text-lg font-medium text-gray-900">{selectedFile.name}</p>
                                    <p className="text-sm text-gray-500">{(selectedFile.size / 1024).toFixed(2)} KB</p>
                                    <button
                                        onClick={() => setSelectedFile(null)}
                                        className="text-sm text-red-500 hover:text-red-600"
                                    >
                                        Remove file
                                    </button>
                                </div>
                                <button
                                    className="px-6 py-2.5 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium w-full transition-colors"
                                    onClick={() => alert(`Uploading ${selectedFile.name}...`)}
                                >
                                    Submit Upload
                                </button>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-xl font-medium text-gray-900 mb-2">Click to upload .xlsx files</h3>
                                <p className="text-sm text-gray-500 mb-6">(max 100mb and 100k rows/sheet)</p>

                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onButtonClick();
                                    }}
                                    className="px-6 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium flex items-center gap-2 transition-colors mb-4 mx-auto relative z-10"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                                    Upload file
                                </button>

                                <a
                                    href="/bulk-upload-sample-file.xlsx"
                                    download
                                    className="text-sm text-gray-500 hover:text-gray-700 flex items-center justify-center gap-1 transition-colors relative z-10"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                                    Download sample
                                </a>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
