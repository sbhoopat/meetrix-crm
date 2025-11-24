export type DashboardMetric = {
  label: string;
  value: string;
  trend?: string;
  status?: 'up' | 'down' | 'steady';
};

export type Lead = {
  id: string;
  name: string;
  campaign: string;
  status: 'Fresh' | 'In Progress' | 'Won';
  city: string;
  owner: string;
  lastActivity: string;
};

export type AutomationFlow = {
  id: string;
  name: string;
  event: string;
  updated: string;
};

export type ReportSummary = {
  id: string;
  label: string;
  metric: string;
  description: string;
};

export type IntegrationCard = {
  id: string;
  name: string;
  status: 'Active' | 'Available';
  description: string;
};

export const dashboardMetrics: DashboardMetric[] = [
  { label: 'Calls Today', value: '98', trend: '+12% vs last week', status: 'up' },
  { label: 'Avg Duration', value: '34m', trend: 'on target', status: 'steady' },
  { label: 'Leads', value: '548', trend: '0% leakage', status: 'steady' },
  { label: 'Sales', value: '24', trend: '+3 conversions', status: 'up' }
];

export const funnelSeries = [
  { name: 'Mon', leads: 80, conversions: 12 },
  { name: 'Tue', leads: 120, conversions: 20 },
  { name: 'Wed', leads: 140, conversions: 28 },
  { name: 'Thu', leads: 110, conversions: 19 },
  { name: 'Fri', leads: 160, conversions: 32 }
];

export const sampleLeads: Lead[] = [
  {
    id: 'l1',
    name: 'Yokesh K',
    campaign: 'crescent2024',
    status: 'Fresh',
    city: 'B.Tech',
    owner: 'Vinoth',
    lastActivity: '4d ago'
  },
  {
    id: 'l2',
    name: 'Victor Immanuel',
    campaign: 'crescent2024',
    status: 'Fresh',
    city: 'Chennai',
    owner: 'Vinoth',
    lastActivity: '2d ago'
  },
  {
    id: 'l3',
    name: 'Uvaraj B',
    campaign: 'crescent2024',
    status: 'In Progress',
    city: 'Madurai',
    owner: 'Sailaja',
    lastActivity: '5h ago'
  },
  {
    id: 'l4',
    name: 'Arunbalaji',
    campaign: 'crescent2024',
    status: 'Won',
    city: 'Coimbatore',
    owner: 'Siva',
    lastActivity: 'Just now'
  }
];

export const leadFormFields = [
  'Student Name',
  'Phone',
  'City',
  'State',
  'Preferred Program',
  'Preferred Destination'
];

export const leadActions = [
  { id: 'add-single', label: 'Add Single Lead', intent: 'primary' },
  { id: 'import-excel', label: 'Import Excel', intent: 'neutral' },
  { id: 'add-integration', label: 'Add from Integration', intent: 'accent' }
];

export const automationFlows: AutomationFlow[] = [
  {
    id: 'af1',
    name: 'FB Lead Creation Notifi',
    event: 'Lead Creation',
    updated: '17d ago'
  },
  {
    id: 'af2',
    name: 'Lead Status Change Alert',
    event: 'Lead Status Change',
    updated: '4m ago'
  },
  {
    id: 'af3',
    name: 'WhatsApp Call Reminder',
    event: 'Lead Creation',
    updated: '10m ago'
  }
];

export const schedulePresets = ['Daily Sync', 'Weekly Sync', 'Monthly Sync'];

export const reportSummaries: ReportSummary[] = [
  { id: 'leaderboard', label: 'Leaderboard', metric: '98 calls', description: 'Team performance' },
  { id: 'call-report', label: 'Call Report', metric: '34m avg', description: 'Handle time' },
  { id: 'download', label: 'Report Download', metric: '14 files', description: 'Exports this week' },
  { id: 'duplicates', label: 'Duplicate Leads', metric: '12 flagged', description: 'Needs review' }
];

export const downloadableReports = [
  { id: 'd1', name: 'Leaderboard.pdf', updated: '2 mins ago' },
  { id: 'd2', name: 'CallReport.csv', updated: 'Today, 10:05' },
  { id: 'd3', name: 'DuplicateLeads.xlsx', updated: 'Yesterday' }
];

export const integrationCards: IntegrationCard[] = [
  { id: 'facebook', name: 'Facebook', status: 'Active', description: 'Capture and sync FB leads instantly.' },
  { id: 'sheets', name: 'Google Sheets', status: 'Active', description: 'Two-way sync with Sheets.' },
  { id: 'whatsapp', name: 'WhatsApp', status: 'Active', description: 'Trigger Business API templates.' },
  { id: 'whatsapp-cloud', name: 'WhatsApp Cloud API', status: 'Active', description: 'Official Meta integration.' },
  { id: 'callerdesk', name: 'CallerDesk', status: 'Available', description: 'Power dialer automation.' }
];

export const whatsappTemplates = [
  { id: 'wt1', title: 'IELTS Tips', preview: 'Get expert tips on all 4 modules...' },
  { id: 'wt2', title: 'Payment Reminder', preview: 'Hi! Can I get more info on this?' }
];

export const leaderboardStats = [
  { id: 'ls1', agent: 'Siva Vaishnavi', calls: 41, duration: '8m', sales: 0 },
  { id: 'ls2', agent: 'Yokesh K', calls: 24, duration: '12m', sales: 2 }
];

export const filtersLibrary = [
  { id: 'fresh', label: 'Fresh Leads', value: 'fresh' },
  { id: 'pending', label: 'Follow-ups Pending', value: 'pending' },
  { id: 'whatsapp', label: 'WhatsApp opted-in', value: 'whatsapp' }
];

export const campaignProgress = [
  { id: 'crescent2024', title: 'crescent2024-rpkodaiganesh', progress: 0 },
  { id: 'saveetha2025', title: 'saveetha2025-rpkodaiganesh', progress: 0 }
];

