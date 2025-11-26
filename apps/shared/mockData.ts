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
  phone?: string;
  alternatePhone?: string;
  state?: string;
  intake?: string;
  preferredDestination?: string;
  preferredProgram?: string;
  elp?: boolean;
  elpType?: string;
  leadSource?: string;
  leadSubSource?: string;
  college?: string;
  department?: string;
  mailId?: string;
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

export type IntegrationDetail = {
  id: string;
  integrationId: string;
  accountName: string;
  email: string;
  items: {
    id: string;
    name: string;
    subText: string;
    date: string;
    count: number;
    lastLead: string;
  }[];
};

export const integrationDetails: Record<string, IntegrationDetail> = {
  facebook: {
    id: 'id_fb',
    integrationId: 'facebook',
    accountName: 'Viisv Sailaja',
    email: 'viisvmarketing@gmail.com',
    items: [
      { id: 'f1', name: 'Germany Leads Form - TN AP', subText: 'VIISV Education', date: '19d', count: 97, lastLead: '21h' },
      { id: 'f2', name: 'IELTS Form', subText: 'VIISV Education', date: '2M', count: 30, lastLead: '1M' },
      { id: 'f3', name: 'MBBS in Uzbekistan: 2.6Lakhs Per Year', subText: 'VIISV Education', date: '3M', count: 20, lastLead: '2M' },
      { id: 'f4', name: 'MBBS Uzbekistan', subText: 'VIISV Education', date: '3M', count: 60, lastLead: '2M' }
    ]
  },
  sheets: {
    id: 'id_gs',
    integrationId: 'sheets',
    accountName: 'Admissions Team',
    email: 'admissions@meetrix.io',
    items: [
      { id: 's1', name: 'Fall 2024 Leads', subText: 'Google Sheet', date: '1d', count: 145, lastLead: '2h' },
      { id: 's2', name: 'Walk-in Enquiries', subText: 'Google Sheet', date: '5d', count: 42, lastLead: '1d' }
    ]
  },
  whatsapp: {
    id: 'id_wa',
    integrationId: 'whatsapp',
    accountName: 'Meetrix Business',
    email: '9876543210',
    items: [
      { id: 'w1', name: 'General Enquiry', subText: 'WhatsApp Business', date: 'Active', count: 1200, lastLead: 'Now' }
    ]
  }
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
    lastActivity: '4d ago',
    phone: '9876543210',
    alternatePhone: '9876543211',
    state: 'Tamil Nadu',
    intake: 'Fall 2024',
    preferredDestination: 'USA',
    preferredProgram: 'MS CS',
    elp: true,
    elpType: 'IELTS',
    leadSource: 'Facebook',
    leadSubSource: 'Ad 1',
    college: 'Crescent',
    department: 'CSE',
    mailId: 'yokesh@example.com'
  },
  {
    id: 'l2',
    name: 'Victor Immanuel',
    campaign: 'crescent2024',
    status: 'Fresh',
    city: 'Chennai',
    owner: 'Vinoth',
    lastActivity: '2d ago',
    phone: '9876543212',
    alternatePhone: '9876543213',
    state: 'Tamil Nadu',
    intake: 'Spring 2025',
    preferredDestination: 'UK',
    preferredProgram: 'MBA',
    elp: false,
    elpType: 'TOEFL',
    leadSource: 'Google',
    leadSubSource: 'Search',
    college: 'Anna University',
    department: 'Mech',
    mailId: 'victor@example.com'
  },
  {
    id: 'l3',
    name: 'Uvaraj B',
    campaign: 'crescent2024',
    status: 'In Progress',
    city: 'Madurai',
    owner: 'Sailaja',
    lastActivity: '5h ago',
    phone: '9876543214',
    alternatePhone: '9876543215',
    state: 'Tamil Nadu',
    intake: 'Fall 2024',
    preferredDestination: 'Canada',
    preferredProgram: 'Diploma',
    elp: true,
    elpType: 'PTE',
    leadSource: 'Referral',
    leadSubSource: 'Friend',
    college: 'TCE',
    department: 'Civil',
    mailId: 'uvaraj@example.com'
  },
  {
    id: 'l4',
    name: 'Arunbalaji',
    campaign: 'crescent2024',
    status: 'Won',
    city: 'Coimbatore',
    owner: 'Siva',
    lastActivity: 'Just now',
    phone: '9876543216',
    alternatePhone: '9876543217',
    state: 'Tamil Nadu',
    intake: 'Spring 2025',
    preferredDestination: 'Australia',
    preferredProgram: 'MS IT',
    elp: false,
    elpType: 'Duolingo',
    leadSource: 'Walk-in',
    leadSubSource: 'Office',
    college: 'PSG',
    department: 'IT',
    mailId: 'arun@example.com'
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

export type AgentStat = {
  id: string;
  name: string;
  role: string;
  calls: number;
  duration: string;
  sales: number;
  avatar?: string;
};

export type DetailedStat = {
  label: string;
  value: string | number;
  subValue?: string;
};

export const agentStats: AgentStat[] = [
  { id: 'a1', name: 'Lohith Raj', role: 'Caller', calls: 304, duration: '2:18h', sales: 0, avatar: 'LR' },
  { id: 'a2', name: 'Jeneeffer', role: 'Caller', calls: 194, duration: '1:52h', sales: 0, avatar: 'J' },
  { id: 'a3', name: 'Siva Vaishnavi', role: 'Caller', calls: 123, duration: '1:26h', sales: 0, avatar: 'SV' }
];

export const callStats: DetailedStat[] = [
  { label: 'All Calls', value: 621, subValue: '(483)' },
  { label: 'Incoming Calls', value: 35 },
  { label: 'Outgoing Calls', value: 562 },
  { label: 'Missed Calls', value: 24 },
  { label: 'Connected Calls (≥1 sec)', value: 275 },
  { label: 'Attempted Calls', value: 0 },
  { label: 'Total Duration', value: '5:38h' }
];

export const taskStats: DetailedStat[] = [
  { label: 'Late', value: 5 },
  { label: 'Pending', value: 0 },
  { label: 'Done', value: 0 },
  { label: 'Created', value: 7 }
];

export const whatsappStats: DetailedStat[] = [
  { label: 'Incoming Whatsapp', value: 0 },
  { label: 'Outgoing Whatsapp', value: 70 }
];
