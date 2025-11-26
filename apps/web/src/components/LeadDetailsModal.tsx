import React from 'react';
import { Lead } from '../../../shared/mockData';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    lead?: Lead | null;
};

export const LeadDetailsModal = ({ isOpen, onClose, lead }: Props) => {
    if (!isOpen) return null;

    const isEditMode = !!lead;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="glass-panel w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 shadow-2xl relative animate-in fade-in zoom-in duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-white">{isEditMode ? 'Lead Details' : 'Add New Lead'}</h2>
                    <p className="text-sm text-muted">{isEditMode ? 'View and edit lead information' : 'Enter details for the new lead'}</p>
                </div>

                <div className="grid gap-6">
                    {/* Student Name */}
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-muted">Student Name</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">T</span>
                            <input
                                type="text"
                                className="form-input pl-10"
                                defaultValue={lead?.name}
                                placeholder="Text field value"
                            />
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-muted">Phone</label>
                        <div className="flex gap-2">
                            <select className="!w-28 form-input bg-white/5" defaultValue="+91">
                                <option value="+91">🇮🇳 +91</option>
                                <option value="+1">🇺🇸 +1</option>
                                <option value="+44">🇬🇧 +44</option>
                                <option value="+61">🇦🇺 +61</option>
                            </select>
                            <input
                                type="tel"
                                className="form-input flex-1"
                                defaultValue={lead?.phone}
                                placeholder="Enter Phone Number"
                            />
                        </div>
                    </div>

                    {/* Alternate Phone */}
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-muted">Alternate Phone</label>
                        <div className="flex gap-2">
                            <select className="!w-28 form-input bg-white/5" defaultValue="+91">
                                <option value="+91">🇮🇳 +91</option>
                                <option value="+1">🇺🇸 +1</option>
                                <option value="+44">🇬🇧 +44</option>
                                <option value="+61">🇦🇺 +61</option>
                            </select>
                            <input
                                type="tel"
                                className="form-input flex-1"
                                defaultValue={lead?.alternatePhone}
                                placeholder="Enter Phone Number"
                            />
                        </div>
                    </div>

                    {/* City */}
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-muted">City</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">T</span>
                            <input
                                type="text"
                                className="form-input pl-10"
                                defaultValue={lead?.city}
                                placeholder="Text field value"
                            />
                        </div>
                    </div>

                    {/* State */}
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-muted">State</label>
                        <select className="form-input appearance-none" defaultValue={lead?.state}>
                            <option value="">Select</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Karnataka">Karnataka</option>
                        </select>
                    </div>

                    {/* Intake */}
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-muted">Intake</label>
                        <select className="form-input appearance-none" defaultValue={lead?.intake}>
                            <option value="">Select</option>
                            <option value="Fall 2024">Fall 2024</option>
                            <option value="Spring 2025">Spring 2025</option>
                        </select>
                    </div>

                    {/* Preferred Destination */}
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-muted">Preferred Destination</label>
                        <select className="form-input appearance-none" defaultValue={lead?.preferredDestination}>
                            <option value="">Select</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            <option value="Canada">Canada</option>
                            <option value="Australia">Australia</option>
                        </select>
                    </div>

                    {/* Preferred Program */}
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-muted">Preferred Program</label>
                        <select className="form-input appearance-none" defaultValue={lead?.preferredProgram}>
                            <option value="">Select</option>
                            <option value="MS CS">MS CS</option>
                            <option value="MBA">MBA</option>
                            <option value="Diploma">Diploma</option>
                        </select>
                    </div>

                    {/* ELP */}
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-muted">ELP</label>
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className="w-5 h-5 rounded border-gray-600 bg-transparent text-neon-cyan focus:ring-neon-cyan"
                                defaultChecked={lead?.elp}
                            />
                            <span className="text-sm text-muted">English Language Proficiency</span>
                        </div>
                    </div>

                    {/* ELP Type */}
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-muted">ELP Type</label>
                        <select className="form-input appearance-none" defaultValue={lead?.elpType}>
                            <option value="">Select</option>
                            <option value="IELTS">IELTS</option>
                            <option value="TOEFL">TOEFL</option>
                            <option value="PTE">PTE</option>
                            <option value="Duolingo">Duolingo</option>
                        </select>
                    </div>

                    {/* Lead Source */}
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-muted">Lead Source</label>
                        <select className="form-input appearance-none" defaultValue={lead?.leadSource}>
                            <option value="">Select</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Google">Google</option>
                            <option value="Referral">Referral</option>
                            <option value="Walk-in">Walk-in</option>
                        </select>
                    </div>

                    {/* Lead Sub Source */}
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-muted">Lead Sub Source</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">T</span>
                            <input
                                type="text"
                                className="form-input pl-10"
                                defaultValue={lead?.leadSubSource}
                                placeholder="Text field value"
                            />
                        </div>
                    </div>

                    {/* College */}
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-muted">College</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">T</span>
                            <input
                                type="text"
                                className="form-input pl-10"
                                defaultValue={lead?.college}
                                placeholder="Text field value"
                            />
                        </div>
                    </div>

                    {/* Department */}
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-muted">Department</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">T</span>
                            <input
                                type="text"
                                className="form-input pl-10"
                                defaultValue={lead?.department}
                                placeholder="Text field value"
                            />
                        </div>
                    </div>

                    {/* Mail ID */}
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-muted">Mail ID</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">T</span>
                            <input
                                type="email"
                                className="form-input pl-10"
                                defaultValue={lead?.mailId}
                                placeholder="Text field value"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-center">
                    <button className="btn-neon w-full md:w-auto min-w-[200px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="8.5" cy="7" r="4"></circle>
                            <line x1="20" y1="8" x2="20" y2="14"></line>
                            <line x1="23" y1="11" x2="17" y2="11"></line>
                        </svg>
                        {isEditMode ? 'UPDATE LEAD' : 'ADD LEAD'}
                    </button>
                </div>
            </div>
        </div>
    );
};
