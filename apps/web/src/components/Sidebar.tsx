import clsx from 'clsx';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Search,
  Users,
  PhoneCall,
  Filter,
  ListChecks,
  MessageCircle,
  BarChart3,
  Workflow,
  Zap,
  PlugZap,
  X
} from 'lucide-react';

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/search', label: 'Search', icon: Search },
  { to: '/leads', label: 'Leads', icon: Users },
  { to: '/activities', label: 'Activities', icon: PhoneCall },
  { to: '/campaigns', label: 'Campaigns', icon: Workflow },
  { to: '/filters', label: 'Filters', icon: Filter },
  { to: '/lists', label: 'My List', icon: ListChecks },
  { to: '/whatsapp', label: 'WhatsApp', icon: MessageCircle },
  { to: '/reports', label: 'Reports', icon: BarChart3 },
  { to: '/automation', label: 'Automation', icon: Zap },
  { to: '/integrations', label: 'Integrations', icon: PlugZap }
];

type Props = {
  theme: 'light' | 'dark';
  isOpen?: boolean;
  onClose?: () => void;
};

export const Sidebar = ({ theme, isOpen = false, onClose }: Props) => {
  const isLight = theme === 'light';
  const logoSrc = '/Media.png';
  const [logoFailed, setLogoFailed] = useState(false);

  const sidebarContent = (
    <>
      <div className="mb-6 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-white/10 bg-white/10">
            <img
              src={logoSrc}
              alt="Meetrix logo"
              className={clsx('h-full w-full object-cover', logoFailed && 'hidden')}
              onError={() => setLogoFailed(true)}
            />
            {logoFailed && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neon-cyan/60 to-neon-purple/60 text-xs font-semibold tracking-wide text-white">
                M
              </div>
            )}
          </div>
          <div>
            <p className="font-bold tracking-wide">TeleCRM</p>
            <p className="text-xs text-gray-400">Telecom & Sales Ops</p>
          </div>
        </div>
        {onClose && (
          <button onClick={onClose} className="lg:hidden p-2 hover:bg-white/10 rounded-lg">
            <X size={20} />
          </button>
        )}
      </div>
      <nav className="flex flex-1 flex-col gap-1">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            onClick={onClose}
            className={({ isActive }) =>
              clsx(
                'flex items-center gap-3 rounded-xl border px-4 py-3 text-sm transition',
                isLight ? 'text-[#003b5c] border-transparent hover:bg-slate-100' : 'text-gray-200 border-transparent hover:bg-white/5',
                isActive
                  ? isLight
                    ? 'bg-white text-[#003b5c] shadow-[0_12px_24px_rgba(46,228,255,0.25)] border border-neon-cyan/40'
                    : 'bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 text-neon-cyan shadow-neon border border-neon-cyan/20'
                  : ''
              )
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>
      <div
        className={clsx(
          'mt-6 rounded-2xl border p-4 text-xs',
          isLight ? 'border-slate-100 bg-slate-50 text-slate-600' : 'border-white/10 text-gray-300'
        )}
      >
        <p className={clsx('mb-2 font-semibold', isLight ? 'text-[#003b5c]' : 'text-white')}>Pro Tips</p>
        <p>Use workflows + WhatsApp Automation to reduce manual handoffs.</p>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={clsx(
          'hidden w-72 flex-col border-r p-4 backdrop-blur lg:flex',
          isLight ? 'bg-white/90 border-slate-100 text-[#003b5c]' : 'bg-black/40 border-white/5 text-gray-100'
        )}
      >
        {sidebarContent}
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          {/* Sidebar */}
          <aside
            className={clsx(
              'absolute left-0 top-0 bottom-0 w-72 flex flex-col border-r p-4 backdrop-blur',
              isLight ? 'bg-white border-slate-100 text-[#003b5c]' : 'bg-gray-900 border-white/5 text-gray-100'
            )}
          >
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  );
};

